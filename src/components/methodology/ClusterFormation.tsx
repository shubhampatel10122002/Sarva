"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Query clustering — Big Vis #1.
 *
 * ~200 scattered dots (queries) are pulled toward 6 centroids
 * (semantic clusters), settle into place, then optimization vectors
 * emerge from each centroid. The full loop is 12 seconds and runs
 * forever once the viz scrolls into view.
 *
 * The RAF loop mutates each dot's cx/cy via refs directly — React
 * never re-renders during animation.
 */

const VIEW_W = 1000;
const VIEW_H = 560;
const NUM_DOTS = 200;

const CENTROIDS = [
  { label: "Marathon & long-distance", x: 220, y: 180 },
  { label: "Trail & outdoor",          x: 500, y: 130 },
  { label: "Court & court sports",     x: 780, y: 180 },
  { label: "Casual walking",           x: 220, y: 400 },
  { label: "Work & standing shifts",   x: 500, y: 450 },
  { label: "Winter & waterproof",      x: 780, y: 400 },
];

// Deterministic PRNG so SSR + client first render match.
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Dot {
  scatterX: number;
  scatterY: number;
  targetX: number;
  targetY: number;
  centroid: number;
  jitterSeed: number;
}

const PHASES = {
  SCATTER:   [0,     1200],
  ATTRACT:   [1200,  4200],
  SETTLE:    [4200,  5400],
  REVEAL:    [5400,  7000],
  VECTORS:   [7000,  9500],
  HOLD:      [9500, 12000],
  TOTAL:     12000,
} as const;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function ClusterFormation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<Array<SVGCircleElement | null>>([]);
  const [visible, setVisible] = useState(false);
  const [phaseLabel, setPhaseLabel] = useState("scatter");
  const [revealed, setRevealed] = useState(false); // triggers centroid/vector render
  const [vectorsOn, setVectorsOn] = useState(false);

  // Pre-compute all dot positions deterministically
  const dots: Dot[] = useMemo(() => {
    const rand = mulberry32(42);
    const out: Dot[] = [];
    for (let i = 0; i < NUM_DOTS; i++) {
      const scatterX = 60 + rand() * (VIEW_W - 120);
      const scatterY = 60 + rand() * (VIEW_H - 120);
      const centroid = Math.floor(rand() * CENTROIDS.length);
      const c = CENTROIDS[centroid];
      // Gaussian-ish offset via sum of 3 uniforms
      const ox = (rand() + rand() + rand() - 1.5) * 70;
      const oy = (rand() + rand() + rand() - 1.5) * 55;
      out.push({
        scatterX,
        scatterY,
        targetX: c.x + ox,
        targetY: c.y + oy,
        centroid,
        jitterSeed: rand(),
      });
    }
    return out;
  }, []);

  // IntersectionObserver — only run animation when in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          setVisible(e.isIntersecting);
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Animation loop
  useEffect(() => {
    if (!visible) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf: number;
    let start = performance.now();

    const applyFrame = (elapsed: number) => {
      const t = elapsed % PHASES.TOTAL;

      // Determine phase
      let phase: keyof typeof PHASES | "scatter" = "scatter";
      let reveal = false;
      let vectors = false;

      if (t < PHASES.SCATTER[1]) {
        phase = "scatter";
      } else if (t < PHASES.ATTRACT[1]) {
        phase = "ATTRACT";
      } else if (t < PHASES.SETTLE[1]) {
        phase = "SETTLE";
      } else if (t < PHASES.REVEAL[1]) {
        phase = "REVEAL";
        reveal = true;
      } else if (t < PHASES.VECTORS[1]) {
        phase = "VECTORS";
        reveal = true;
        vectors = true;
      } else {
        phase = "HOLD";
        reveal = true;
        vectors = true;
      }

      // Update each dot
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const el = dotRefs.current[i];
        if (!el) continue;

        let x = d.scatterX;
        let y = d.scatterY;
        let opacity = 1;

        if (t < PHASES.SCATTER[1]) {
          x = d.scatterX;
          y = d.scatterY;
          opacity = Math.min(1, t / 500);
        } else if (t < PHASES.ATTRACT[1]) {
          const p = (t - PHASES.ATTRACT[0]) / (PHASES.ATTRACT[1] - PHASES.ATTRACT[0]);
          const e = easeInOutCubic(p);
          x = d.scatterX + (d.targetX - d.scatterX) * e;
          y = d.scatterY + (d.targetY - d.scatterY) * e;
        } else {
          // Settle, reveal, vectors, hold — orbit slightly around target
          const jt = (elapsed / 1000) * (0.6 + d.jitterSeed * 0.4);
          x = d.targetX + Math.cos(jt + d.jitterSeed * 6.28) * 2.2;
          y = d.targetY + Math.sin(jt + d.jitterSeed * 6.28) * 2.2;
        }

        el.setAttribute("cx", x.toFixed(2));
        el.setAttribute("cy", y.toFixed(2));
        el.setAttribute("opacity", opacity.toFixed(2));
      }

      // Sync React state with phase for labels/vectors (cheap, only on changes)
      setPhaseLabel(
        phase === "scatter"
          ? "scatter"
          : phase === "ATTRACT"
          ? "attract"
          : phase === "SETTLE"
          ? "settle"
          : phase === "REVEAL"
          ? "reveal centroids"
          : phase === "VECTORS"
          ? "optimization vectors"
          : "hold"
      );
      setRevealed(reveal);
      setVectorsOn(vectors);

      if (prefersReducedMotion) {
        // Jump to the final frame and stop
        return;
      }
    };

    if (prefersReducedMotion) {
      // Pin to HOLD phase
      applyFrame(PHASES.HOLD[0] + 100);
      return;
    }

    const loop = (now: number) => {
      const elapsed = now - start;
      applyFrame(elapsed);
      if (elapsed > PHASES.TOTAL) {
        start = now;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [visible, dots]);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl border border-border bg-surface/30 p-6 sm:p-10"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Step 02 · semantic clustering
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          phase · {phaseLabel}
        </span>
      </div>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full"
        aria-label="Two hundred query dots scatter, then attract toward six semantic centroids. Optimization vectors emerge from each centroid."
      >
        <defs>
          <radialGradient id="centroid-grad">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="70%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
          <filter id="cluster-glow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <marker
            id="vec-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#60A5FA" />
          </marker>
        </defs>

        {/* Background grid for technical feel */}
        <g opacity="0.25">
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`gx-${i}`}
              x1={(VIEW_W / 10) * i}
              y1={0}
              x2={(VIEW_W / 10) * i}
              y2={VIEW_H}
              stroke="rgba(59, 130, 246, 0.06)"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`gy-${i}`}
              x1={0}
              y1={(VIEW_H / 6) * i}
              x2={VIEW_W}
              y2={(VIEW_H / 6) * i}
              stroke="rgba(59, 130, 246, 0.06)"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Dots */}
        {dots.map((d, i) => (
          <circle
            key={i}
            ref={(el) => {
              dotRefs.current[i] = el;
            }}
            cx={d.scatterX}
            cy={d.scatterY}
            r="2.6"
            fill="#93C5FD"
            opacity="0"
          />
        ))}

        {/* Centroids + labels (fade in during reveal) */}
        {CENTROIDS.map((c, i) => (
          <g
            key={`cent-${i}`}
            style={{
              opacity: revealed ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          >
            <circle
              cx={c.x}
              cy={c.y}
              r="28"
              fill="url(#centroid-grad)"
              opacity="0.35"
              filter="url(#cluster-glow)"
            />
            <circle
              cx={c.x}
              cy={c.y}
              r="9"
              fill="#E2E8F0"
              stroke="#60A5FA"
              strokeWidth="1.5"
            />
            <circle cx={c.x} cy={c.y} r="3" fill="#93C5FD" />
            <text
              x={c.x}
              y={c.y - 38}
              textAnchor="middle"
              fontSize="10"
              className="font-mono"
              fill="#60A5FA"
              letterSpacing="1.5"
            >
              centroid_{String(i + 1).padStart(2, "0")}
            </text>
            <text
              x={c.x}
              y={c.y + 52}
              textAnchor="middle"
              fontSize="11"
              className="font-heading"
              fontWeight="600"
              fill="#0F172A"
            >
              {c.label}
            </text>
          </g>
        ))}

        {/* Optimization vectors — arrows pointing outward from each centroid */}
        {CENTROIDS.map((c, i) => {
          const cx = VIEW_W / 2;
          const cy = VIEW_H / 2;
          const dx = c.x - cx;
          const dy = c.y - cy;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const ux = dx / len;
          const uy = dy / len;
          const start = { x: c.x + ux * 14, y: c.y + uy * 14 };
          const end = { x: c.x + ux * 64, y: c.y + uy * 64 };
          return (
            <line
              key={`vec-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="#60A5FA"
              strokeWidth="1.8"
              markerEnd="url(#vec-arrow)"
              style={{
                opacity: vectorsOn ? 0.85 : 0,
                transition: "opacity 0.6s ease",
              }}
            />
          );
        })}
      </svg>

      <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted">
        <span>200 queries</span>
        <span className="opacity-40">·</span>
        <span>6 centroids</span>
        <span className="opacity-40">·</span>
        <span>mathematically optimal coverage</span>
      </div>
    </div>
  );
}

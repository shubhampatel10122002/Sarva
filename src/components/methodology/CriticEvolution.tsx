"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Critic model evolution — Big Vis #3.
 *
 * Three panels in a single SVG:
 *   [LEFT]   Streaming signal tags — training inputs scrolling up
 *   [CENTER] A deforming blob (24 control points, smooth Catmull-Rom path)
 *            representing the critic's current shape / understanding
 *   [RIGHT]  Performance polyline — the critic's score over time
 *
 * Every ~10s a "platform update" event fires:
 *  - blob radii scramble for a moment
 *  - score dips and then climbs back higher
 *  - the model version label increments (v1.N -> v1.N+1)
 */

const VIEW_W = 1080;
const VIEW_H = 500;

// Panel bounds
const L = { x: 30, y: 60, w: 300, h: 400 };
const C = { x: 360, y: 60, w: 360, h: 400 };
const R = { x: 750, y: 60, w: 300, h: 400 };

const BLOB_POINTS = 24;
const BLOB_CENTER_X = C.x + C.w / 2;
const BLOB_CENTER_Y = C.y + C.h / 2;
const BLOB_BASE_R = 110;

const SIGNALS = [
  "prompt_pattern +0.12",
  "list_structure preferred",
  "heading_density +0.08",
  "brand_first_sentence",
  "citation_link + authority",
  "schema_markup +0.05",
  "long_tail match",
  "FAQ block detected",
  "answer_depth +0.09",
  "comparison_table win",
  "entity_proximity tuned",
  "topical_cohesion ↑",
  "concise_intro preferred",
  "numeric_claim ↑ trust",
  "table_of_contents +0.04",
  "bullet_density calibrated",
];

const CHART_POINTS = 80;

interface ChartPoint {
  x: number;
  y: number;
}

export default function CriticEvolution() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const polyRef = useRef<SVGPolylineElement | null>(null);
  const signalGroupRef = useRef<SVGGElement | null>(null);
  const [version, setVersion] = useState(1.4);
  const [eventFlash, setEventFlash] = useState(false);

  // Historical chart values. Initial state: a gentle upward ramp so the
  // polyline isn't empty before the first frame.
  const scoreHistRef = useRef<number[]>(
    Array.from({ length: CHART_POINTS }, (_, i) => 0.45 + (i / CHART_POINTS) * 0.15)
  );
  const scoreRef = useRef(0.6);
  const dipRef = useRef(0); // when > 0, active dip magnitude
  const scrambleRef = useRef(0); // when > 0, active scramble magnitude

  // Pre-computed per-control-point phase offsets so each point wobbles
  // at a slightly different frequency. Deterministic.
  const phaseOffsets = useMemo(() => {
    const rand = (() => {
      let s = 7;
      return () => {
        s = (s * 16807) % 2147483647;
        return s / 2147483647;
      };
    })();
    return Array.from({ length: BLOB_POINTS }, () => ({
      phase: rand() * Math.PI * 2,
      freq: 0.6 + rand() * 0.8,
      amp: 0.08 + rand() * 0.14,
    }));
  }, []);

  // Build a smooth closed path through N points using Catmull-Rom -> cubic
  const buildBlobPath = (radii: number[]) => {
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i < BLOB_POINTS; i++) {
      const angle = (i / BLOB_POINTS) * Math.PI * 2;
      pts.push({
        x: BLOB_CENTER_X + Math.cos(angle) * radii[i],
        y: BLOB_CENTER_Y + Math.sin(angle) * radii[i],
      });
    }
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)} `;
    for (let i = 0; i < BLOB_POINTS; i++) {
      const p0 = pts[(i - 1 + BLOB_POINTS) % BLOB_POINTS];
      const p1 = pts[i];
      const p2 = pts[(i + 1) % BLOB_POINTS];
      const p3 = pts[(i + 2) % BLOB_POINTS];
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      d += `C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} `;
    }
    return d + "Z";
  };

  // Build polyline points string from score history
  const buildPolyline = (hist: number[]) => {
    const padLeft = R.x + 20;
    const padRight = R.x + R.w - 20;
    const padTop = R.y + 60;
    const padBot = R.y + R.h - 60;
    const step = (padRight - padLeft) / (hist.length - 1);
    let s = "";
    for (let i = 0; i < hist.length; i++) {
      const x = padLeft + i * step;
      // clamp score 0..1 to chart
      const v = Math.max(0, Math.min(1, hist[i]));
      const y = padBot - v * (padBot - padTop);
      s += `${x.toFixed(1)},${y.toFixed(1)} `;
    }
    return s.trim();
  };

  // RAF loop — handles blob deformation, score drift, and signal stream
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf: number;
    let lastEvent = performance.now();
    let signalY = 0;

    const tickOnce = (now: number) => {
      const t = now / 1000;

      // Blob radii
      const radii: number[] = [];
      for (let i = 0; i < BLOB_POINTS; i++) {
        const p = phaseOffsets[i];
        const wobble =
          Math.sin(t * p.freq + p.phase) * p.amp +
          Math.sin(t * p.freq * 1.7 + p.phase * 0.5) * (p.amp * 0.6);
        const scramble = scrambleRef.current * (Math.sin(t * 7 + i) * 0.4 + 0.6);
        radii.push(BLOB_BASE_R * (1 + wobble + scramble));
      }
      if (pathRef.current) {
        pathRef.current.setAttribute("d", buildBlobPath(radii));
      }

      // Score drift: gentle upward climb, minus any active dip
      const drift = 0.0008; // per frame
      const noise = Math.sin(t * 2.3) * 0.004 + Math.sin(t * 0.9) * 0.003;
      scoreRef.current = Math.min(
        0.98,
        Math.max(0.15, scoreRef.current + drift + noise * 0.1 - dipRef.current * 0.02)
      );
      dipRef.current = Math.max(0, dipRef.current - 0.02);
      scrambleRef.current = Math.max(0, scrambleRef.current - 0.01);

      // Push to history
      scoreHistRef.current.push(scoreRef.current);
      if (scoreHistRef.current.length > CHART_POINTS) {
        scoreHistRef.current.shift();
      }
      if (polyRef.current) {
        polyRef.current.setAttribute(
          "points",
          buildPolyline(scoreHistRef.current)
        );
      }

      // Signal stream: scroll the signal group up continuously
      signalY = (signalY + 0.4) % (SIGNALS.length * 30);
      if (signalGroupRef.current) {
        signalGroupRef.current.setAttribute(
          "transform",
          `translate(0, ${-signalY})`
        );
      }

      // Platform update event every ~10s
      if (now - lastEvent > 10000) {
        lastEvent = now;
        scrambleRef.current = 0.35;
        dipRef.current = 1.2;
        setVersion((v) => +(v + 0.1).toFixed(1));
        setEventFlash(true);
        setTimeout(() => setEventFlash(false), 900);
      }
    };

    if (prefersReducedMotion) {
      // Render a single static frame and stop
      tickOnce(performance.now());
      return;
    }

    const loop = (now: number) => {
      tickOnce(now);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [phaseOffsets]);

  return (
    <div className="rounded-2xl border border-border bg-surface/30 p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Step 04 · domain-specific critic
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
          <span
            className={`h-1.5 w-1.5 rounded-full bg-accent ${
              eventFlash ? "animate-ping" : "animate-pulse"
            }`}
          />
          model v{version.toFixed(1)}
          {eventFlash && <span className="text-accent-light">· platform update</span>}
        </span>
      </div>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full"
        aria-label="Critic model evolution: streaming training signals on the left, a deforming blob representing the model in the center, and a performance chart on the right."
      >
        <defs>
          <radialGradient id="critic-blob-grad">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.55)" />
            <stop offset="60%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(29, 78, 216, 0.05)" />
          </radialGradient>
          <filter id="critic-glow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <clipPath id="signal-clip">
            <rect x={L.x} y={L.y + 30} width={L.w} height={L.h - 40} />
          </clipPath>
          <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.35)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>

        {/* ─── LEFT PANEL ─── */}
        <rect
          x={L.x}
          y={L.y}
          width={L.w}
          height={L.h}
          rx="14"
          fill="#F0F4FF"
          stroke="rgba(59, 130, 246, 0.22)"
          strokeWidth="1"
        />
        <text
          x={L.x + 18}
          y={L.y + 22}
          fontSize="10"
          className="font-mono"
          fill="#60A5FA"
          letterSpacing="1.5"
        >
          TRAINING SIGNALS →
        </text>

        <g clipPath="url(#signal-clip)">
          <g ref={signalGroupRef} transform="translate(0, 0)">
            {[...SIGNALS, ...SIGNALS].map((sig, i) => (
              <g key={i} transform={`translate(${L.x + 18}, ${L.y + 60 + i * 30})`}>
                <rect
                  x="0"
                  y="-14"
                  width={L.w - 36}
                  height="22"
                  rx="5"
                  fill="rgba(59, 130, 246, 0.06)"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="1"
                />
                <circle cx="10" cy="-3" r="2.5" fill="#10B981" />
                <text
                  x="22"
                  y="1"
                  fontSize="10"
                  className="font-mono"
                  fill="#475569"
                >
                  {sig}
                </text>
              </g>
            ))}
          </g>
        </g>

        {/* top/bottom fade */}
        <rect
          x={L.x}
          y={L.y + 30}
          width={L.w}
          height="30"
          fill="url(#critic-blob-grad)"
          opacity="0"
        />

        {/* ─── CENTER PANEL ─── */}
        <rect
          x={C.x}
          y={C.y}
          width={C.w}
          height={C.h}
          rx="14"
          fill="#F0F4FF"
          stroke="rgba(59, 130, 246, 0.22)"
          strokeWidth="1"
        />
        <text
          x={C.x + 18}
          y={C.y + 22}
          fontSize="10"
          className="font-mono"
          fill="#60A5FA"
          letterSpacing="1.5"
        >
          CRITIC · MODEL STATE
        </text>
        {/* Rings */}
        <circle
          cx={BLOB_CENTER_X}
          cy={BLOB_CENTER_Y}
          r={BLOB_BASE_R + 50}
          fill="none"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        <circle
          cx={BLOB_CENTER_X}
          cy={BLOB_CENTER_Y}
          r={BLOB_BASE_R + 25}
          fill="none"
          stroke="rgba(59, 130, 246, 0.08)"
          strokeWidth="1"
        />
        {/* Blob glow */}
        <path
          d={`M ${BLOB_CENTER_X + BLOB_BASE_R} ${BLOB_CENTER_Y} a ${BLOB_BASE_R} ${BLOB_BASE_R} 0 1 0 -0.1 0 z`}
          fill="url(#critic-blob-grad)"
          filter="url(#critic-glow)"
          opacity="0.5"
        />
        {/* The live blob */}
        <path
          ref={pathRef}
          d=""
          fill="url(#critic-blob-grad)"
          stroke="#60A5FA"
          strokeWidth="1.5"
        />
        {/* Core */}
        <circle cx={BLOB_CENTER_X} cy={BLOB_CENTER_Y} r="5" fill="#1D4ED8" />
        <circle
          cx={BLOB_CENTER_X}
          cy={BLOB_CENTER_Y}
          r="12"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="1"
        >
          <animate
            attributeName="r"
            values="10;16;10"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;0;0.9"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x={BLOB_CENTER_X}
          y={C.y + C.h - 22}
          textAnchor="middle"
          fontSize="10"
          className="font-mono"
          fill="#60A5FA"
          letterSpacing="2"
        >
          24 control points · deforming
        </text>

        {/* ─── RIGHT PANEL ─── */}
        <rect
          x={R.x}
          y={R.y}
          width={R.w}
          height={R.h}
          rx="14"
          fill="#F0F4FF"
          stroke="rgba(59, 130, 246, 0.22)"
          strokeWidth="1"
        />
        <text
          x={R.x + 18}
          y={R.y + 22}
          fontSize="10"
          className="font-mono"
          fill="#60A5FA"
          letterSpacing="1.5"
        >
          CRITIC SCORE ↗
        </text>

        {/* Y axis gridlines */}
        {[0.25, 0.5, 0.75].map((v, i) => {
          const padTop = R.y + 60;
          const padBot = R.y + R.h - 60;
          const y = padBot - v * (padBot - padTop);
          return (
            <g key={`grid-${i}`}>
              <line
                x1={R.x + 20}
                y1={y}
                x2={R.x + R.w - 20}
                y2={y}
                stroke="rgba(59, 130, 246, 0.08)"
                strokeWidth="1"
              />
              <text
                x={R.x + R.w - 14}
                y={y + 3}
                fontSize="8"
                className="font-mono"
                fill="#475569"
                textAnchor="start"
              >
                {v.toFixed(2)}
              </text>
            </g>
          );
        })}

        <polyline
          ref={polyRef}
          points=""
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text
          x={R.x + 20}
          y={R.y + R.h - 22}
          fontSize="10"
          className="font-mono"
          fill="#94A3B8"
          letterSpacing="1.5"
        >
          time →
        </text>
      </svg>

      <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-muted">
        <span>signals stream</span>
        <span className="opacity-40">·</span>
        <span>critic deforms</span>
        <span className="opacity-40">·</span>
        <span>score climbs</span>
        <span className="opacity-40">·</span>
        <span>platform update ≈ every 10s</span>
      </div>
    </div>
  );
}

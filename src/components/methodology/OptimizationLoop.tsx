"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Interactive circular loop — the core differentiator.
 *
 * 6 nodes on a ring. An orbiting particle sweeps continuously.
 * Auto-advances the active node every 3s. Hovering previews a node,
 * clicking locks it. After 4s of no interaction, auto-advance resumes.
 *
 * The center displays details for the currently active node — either
 * the one the user is hovering, the one they've locked, or the one the
 * auto-advance is on.
 */

const NODES = [
  {
    id: "measure",
    title: "Measure",
    caption: "Agents probe every LLM, every query cluster, every hour.",
    detail:
      "Parallel agents hit ChatGPT, Perplexity, and Gemini through real interfaces. No APIs — same surface your users see.",
  },
  {
    id: "score",
    title: "Score",
    caption: "Critic model rates brand mentions, ranking, structure.",
    detail:
      "A domain-fine-tuned critic grades every response. It learns what your vertical's AI actually rewards.",
  },
  {
    id: "learn",
    title: "Learn",
    caption: "Signal feeds back into the critic and the optimizer.",
    detail:
      "Every result becomes training data. The critic sharpens. The optimizer sees which levers actually move the needle.",
  },
  {
    id: "generate",
    title: "Generate",
    caption: "Optimizer writes new content variants.",
    detail:
      "Content is regenerated to match the critic's current idea of 'what AI prefers'. Nothing is hand-written.",
  },
  {
    id: "deploy",
    title: "Deploy",
    caption: "Sandbox-validated updates ship automatically.",
    detail:
      "Each variant is regression-tested against known queries. Approved changes roll out without a human in the loop.",
  },
  {
    id: "adapt",
    title: "Adapt",
    caption: "Platform shifts trigger a full re-measure.",
    detail:
      "When ChatGPT or Gemini changes its behavior, the loop detects drift and immediately re-opens the cycle.",
  },
];

const VIEW = 720;
const CENTER = VIEW / 2;
const RING_R = 240;
const NODE_R = 30;
const AUTO_INTERVAL_MS = 3000;
const IDLE_RESUME_MS = 4000;

function polar(i: number, n: number, r: number) {
  // start at top, go clockwise
  const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + Math.cos(angle) * r,
    y: CENTER + Math.sin(angle) * r,
  };
}

export default function OptimizationLoop() {
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const lastInteractRef = useRef<number>(0);
  const orbitAngleRef = useRef(0);
  const orbitGroupRef = useRef<SVGGElement | null>(null);

  // Auto-advance
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      const idleFor = performance.now() - lastInteractRef.current;
      if (locked === null && idleFor > IDLE_RESUME_MS) {
        setActive((a) => (a + 1) % NODES.length);
      } else if (locked === null && lastInteractRef.current === 0) {
        // never interacted yet — just advance
        setActive((a) => (a + 1) % NODES.length);
      }
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [locked]);

  // Orbit particle RAF — directly mutates the group's transform to avoid re-renders
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let raf: number;
    const loop = () => {
      orbitAngleRef.current = (orbitAngleRef.current + 0.006) % (Math.PI * 2);
      const g = orbitGroupRef.current;
      if (g) {
        const x = CENTER + Math.cos(orbitAngleRef.current - Math.PI / 2) * RING_R;
        const y = CENTER + Math.sin(orbitAngleRef.current - Math.PI / 2) * RING_R;
        g.setAttribute("transform", `translate(${x}, ${y})`);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const markInteract = useCallback(() => {
    lastInteractRef.current = performance.now();
  }, []);

  const handleNodeClick = useCallback(
    (i: number) => {
      markInteract();
      if (locked === i) {
        setLocked(null);
      } else {
        setLocked(i);
        setActive(i);
      }
    },
    [locked, markInteract]
  );

  const handleKey = useCallback(
    (e: React.KeyboardEvent, i: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNodeClick(i);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        markInteract();
        setActive((a) => (a + 1) % NODES.length);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        markInteract();
        setActive((a) => (a - 1 + NODES.length) % NODES.length);
      }
    },
    [handleNodeClick, markInteract]
  );

  // What the center panel should show
  const shownIdx = hover ?? locked ?? active;
  const shown = NODES[shownIdx];

  return (
    <div className="relative rounded-2xl border border-border bg-surface/30 p-6 sm:p-10">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Step 05 · core differentiator
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {locked === null ? "auto-advancing" : "locked"}
        </span>
      </div>

      <svg
        viewBox={`0 0 ${VIEW} ${VIEW}`}
        className="mx-auto h-auto w-full max-w-[640px]"
        role="group"
        aria-label="Continuous optimization loop with six stages: measure, score, learn, generate, deploy, adapt."
      >
        <defs>
          <radialGradient id="loop-center-grad">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.25)" />
            <stop offset="70%" stopColor="rgba(59, 130, 246, 0.04)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
          <radialGradient id="loop-node-grad">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </radialGradient>
          <filter id="loop-glow">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Soft center glow */}
        <circle cx={CENTER} cy={CENTER} r={RING_R - 30} fill="url(#loop-center-grad)" />

        {/* Outer ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_R}
          fill="none"
          stroke="rgba(59, 130, 246, 0.22)"
          strokeWidth="1.5"
          strokeDasharray="2 6"
        />

        {/* Inner guide ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_R - 60}
          fill="none"
          stroke="rgba(59, 130, 246, 0.08)"
          strokeWidth="1"
        />

        {/* Connector arcs between nodes */}
        {NODES.map((_, i) => {
          const a = polar(i, NODES.length, RING_R);
          const b = polar((i + 1) % NODES.length, NODES.length, RING_R);
          return (
            <path
              key={`arc-${i}`}
              d={`M ${a.x} ${a.y} A ${RING_R} ${RING_R} 0 0 1 ${b.x} ${b.y}`}
              fill="none"
              stroke="rgba(59, 130, 246, 0.28)"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Orbiting particle */}
        <g ref={orbitGroupRef} transform={`translate(${CENTER}, ${CENTER - RING_R})`}>
          <circle r="7" fill="#3B82F6" opacity="0.35" filter="url(#loop-glow)" />
          <circle r="4" fill="#93C5FD" />
          <circle r="1.8" fill="#1D4ED8" />
        </g>

        {/* Node buttons */}
        {NODES.map((node, i) => {
          const { x, y } = polar(i, NODES.length, RING_R);
          const isActive = i === shownIdx;
          const isLocked = locked === i;
          return (
            <g
              key={node.id}
              transform={`translate(${x}, ${y})`}
              tabIndex={0}
              role="button"
              aria-label={`${node.title}: ${node.caption}`}
              aria-pressed={isLocked}
              onMouseEnter={() => {
                setHover(i);
                markInteract();
              }}
              onMouseLeave={() => setHover(null)}
              onClick={() => handleNodeClick(i)}
              onKeyDown={(e) => handleKey(e, i)}
              style={{ cursor: "pointer", outline: "none" }}
            >
              {isActive && (
                <circle
                  r={NODE_R + 10}
                  fill="none"
                  stroke="rgba(96, 165, 250, 0.5)"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    values={`${NODE_R + 6};${NODE_R + 16};${NODE_R + 6}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.7;0;0.7"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                r={NODE_R}
                fill={isActive ? "url(#loop-node-grad)" : "#FFFFFF"}
                stroke={isActive ? "#93C5FD" : "rgba(59, 130, 246, 0.35)"}
                strokeWidth={isLocked ? 2.5 : 1.5}
                style={{ transition: "fill 0.3s ease, stroke 0.3s ease" }}
              />
              <text
                textAnchor="middle"
                dy="-2"
                fontSize="9"
                className="font-mono"
                fill={isActive ? "#DBEAFE" : "#64748B"}
                letterSpacing="1.5"
                style={{ transition: "fill 0.3s ease", pointerEvents: "none" }}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
              <text
                textAnchor="middle"
                dy="12"
                fontSize="12"
                fontWeight="600"
                className="font-heading"
                fill={isActive ? "#FFFFFF" : "#475569"}
                style={{ transition: "fill 0.3s ease", pointerEvents: "none" }}
              >
                {node.title}
              </text>
            </g>
          );
        })}

        {/* Center detail panel */}
        <foreignObject
          x={CENTER - 130}
          y={CENTER - 80}
          width="260"
          height="160"
          style={{ pointerEvents: "none" }}
        >
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent">
              {String(shownIdx + 1).padStart(2, "0")} · {shown.title}
            </div>
            <div className="mt-3 font-heading text-[15px] font-semibold leading-snug text-secondary">
              {shown.caption}
            </div>
            <div className="mt-3 px-2 font-mono text-[10px] leading-relaxed text-muted-light">
              {shown.detail}
            </div>
          </div>
        </foreignObject>
      </svg>

      <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted">
        <span>hover to preview</span>
        <span className="opacity-40">·</span>
        <span>click to lock</span>
        <span className="opacity-40">·</span>
        <span>arrow keys to step</span>
      </div>
    </div>
  );
}

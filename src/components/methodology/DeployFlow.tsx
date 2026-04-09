"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Horizontal 4-stage pipeline: generate → sandbox → deploy → monitor.
 * A pulse spawns every SPAWN_MS and travels through every stage. As it
 * crosses a stage box, that stage "activates" for a brief window.
 */

const STAGES = [
  { id: "generate", label: "Generate", sub: "critic writes", hint: "new content variant" },
  { id: "sandbox",  label: "Sandbox",  sub: "regression test", hint: "verify no drop" },
  { id: "deploy",   label: "Deploy",   sub: "approved ship",   hint: "rollout to prod" },
  { id: "monitor",  label: "Monitor",  sub: "feed back",        hint: "into the loop" },
];

const VIEW_W = 1000;
const VIEW_H = 260;
const MARGIN_X = 80;
const NODE_Y = 120;
const NODE_W = 160;
const NODE_H = 72;
const CYCLE_MS = 6000;
const SPAWN_MS = 1500;

function stageCenterX(i: number) {
  const gap = (VIEW_W - 2 * MARGIN_X) / (STAGES.length - 1);
  return MARGIN_X + gap * i;
}

interface Pulse {
  id: number;
  start: number;
}

export default function DeployFlow() {
  const pulsesRef = useRef<Pulse[]>([]);
  const nextIdRef = useRef(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let raf: number;
    let lastSpawn = performance.now() - SPAWN_MS;

    const loop = (now: number) => {
      if (now - lastSpawn > SPAWN_MS) {
        nextIdRef.current++;
        pulsesRef.current.push({ id: nextIdRef.current, start: now });
        lastSpawn = now;
      }
      pulsesRef.current = pulsesRef.current.filter(
        (p) => now - p.start < CYCLE_MS
      );
      setTick((t) => (t + 1) % 1000);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const now = typeof performance !== "undefined" ? performance.now() : 0;

  // Any pulse close to a stage index marks that stage as "hot".
  const hotStages = new Set<number>();
  for (const p of pulsesRef.current) {
    const progress = Math.min((now - p.start) / CYCLE_MS, 1);
    const rawIndex = progress * (STAGES.length - 1);
    const nearest = Math.round(rawIndex);
    if (Math.abs(rawIndex - nearest) < 0.12) {
      hotStages.add(nearest);
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-surface/30 p-6 sm:p-10">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Steps 06 — 08 · continuous pipeline
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          live
        </span>
      </div>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full"
        aria-label="Deployment pipeline: generate, sandbox, deploy, monitor — with a traveling pulse that feeds monitoring back into generation."
      >
        <defs>
          <linearGradient id="deploy-rail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.55)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.25)" />
          </linearGradient>
          <radialGradient id="deploy-pulse-grad">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="60%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
          <filter id="deploy-glow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Rail */}
        <line
          x1={stageCenterX(0)}
          y1={NODE_Y}
          x2={stageCenterX(STAGES.length - 1)}
          y2={NODE_Y}
          stroke="url(#deploy-rail)"
          strokeWidth="2"
        />

        {/* Loop-back arc (monitor → generate) */}
        <path
          d={`M ${stageCenterX(STAGES.length - 1)} ${NODE_Y + NODE_H / 2 + 10}
              Q ${VIEW_W / 2} ${NODE_Y + 110}, ${stageCenterX(0)} ${NODE_Y + NODE_H / 2 + 10}`}
          fill="none"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="1.2"
          strokeDasharray="3 6"
        />
        <text
          x={VIEW_W / 2}
          y={NODE_Y + 104}
          textAnchor="middle"
          fontSize="10"
          className="font-mono"
          fill="#60A5FA"
          letterSpacing="2"
        >
          feedback → continuous loop
        </text>

        {/* Stage nodes */}
        {STAGES.map((stage, i) => {
          const cx = stageCenterX(i);
          const hot = hotStages.has(i);
          return (
            <g key={stage.id}>
              {hot && (
                <rect
                  x={cx - NODE_W / 2 - 4}
                  y={NODE_Y - NODE_H / 2 - 4}
                  width={NODE_W + 8}
                  height={NODE_H + 8}
                  rx="14"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.6)"
                  strokeWidth="1.5"
                  filter="url(#deploy-glow)"
                />
              )}
              <rect
                x={cx - NODE_W / 2}
                y={NODE_Y - NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx="12"
                fill={hot ? "#1E293B" : "#0F172A"}
                stroke={hot ? "#60A5FA" : "rgba(59, 130, 246, 0.25)"}
                strokeWidth="1.2"
                style={{ transition: "fill 0.3s ease, stroke 0.3s ease" }}
              />
              <text
                x={cx - NODE_W / 2 + 14}
                y={NODE_Y - 10}
                fontSize="10"
                className="font-mono"
                fill={hot ? "#60A5FA" : "#475569"}
                letterSpacing="2"
                style={{ transition: "fill 0.3s ease" }}
              >
                {String(i + 6).padStart(2, "0")}
              </text>
              <text
                x={cx - NODE_W / 2 + 14}
                y={NODE_Y + 10}
                fontSize="15"
                className="font-heading"
                fontWeight="600"
                fill={hot ? "#F1F5F9" : "#CBD5E1"}
                style={{ transition: "fill 0.3s ease" }}
              >
                {stage.label}
              </text>
              <text
                x={cx - NODE_W / 2 + 14}
                y={NODE_Y + 26}
                fontSize="9"
                className="font-mono"
                fill={hot ? "#94A3B8" : "#475569"}
                style={{ transition: "fill 0.3s ease" }}
              >
                {stage.sub}
              </text>
              {/* Status dot */}
              <circle
                cx={cx + NODE_W / 2 - 12}
                cy={NODE_Y - NODE_H / 2 + 12}
                r="3"
                fill={hot ? "#10B981" : "#334155"}
                style={{ transition: "fill 0.3s ease" }}
              />
              {/* Caption under box */}
              <text
                x={cx}
                y={NODE_Y + NODE_H / 2 + 20}
                textAnchor="middle"
                fontSize="9"
                className="font-mono"
                fill="#64748B"
                letterSpacing="1"
              >
                {stage.hint}
              </text>
            </g>
          );
        })}

        {/* Traveling pulses */}
        {pulsesRef.current.map((p) => {
          const progress = Math.min((now - p.start) / CYCLE_MS, 1);
          const x =
            stageCenterX(0) +
            (stageCenterX(STAGES.length - 1) - stageCenterX(0)) * progress;
          const opacity =
            progress < 0.9 ? 1 : Math.max(0, 1 - (progress - 0.9) / 0.1);
          return (
            <g key={p.id} opacity={opacity}>
              <circle
                cx={x}
                cy={NODE_Y}
                r="10"
                fill="url(#deploy-pulse-grad)"
                filter="url(#deploy-glow)"
              />
              <circle cx={x} cy={NODE_Y} r="3" fill="#DBEAFE" />
            </g>
          );
        })}

        {/* Silence unused-var lint on tick (reactivity trigger) */}
        <g style={{ display: "none" }}>{tick}</g>
      </svg>
    </div>
  );
}

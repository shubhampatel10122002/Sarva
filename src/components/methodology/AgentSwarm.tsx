"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Small horizontal rig: a dispatcher on the left emits agent pulses
 * that travel along three rails to live AI interfaces on the right.
 */

const DESTINATIONS = [
  { id: "chatgpt", label: "chatgpt.com", y: 80 },
  { id: "perplexity", label: "perplexity.ai", y: 160 },
  { id: "gemini", label: "gemini.google.com", y: 240 },
];

const VIEW_W = 600;
const VIEW_H = 320;
const DISPATCH_X = 80;
const DEST_X = 520;
const CYCLE_MS = 2200;
const SPAWN_MS = 280;

interface Pulse {
  id: number;
  lane: number;
  start: number;
}

export default function AgentSwarm() {
  const pulsesRef = useRef<Pulse[]>([]);
  const nextIdRef = useRef(0);
  const [tick, setTick] = useState(0);
  const [count, setCount] = useState(1247);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Render a single static frame with one pulse per lane
      const base = performance.now();
      pulsesRef.current = DESTINATIONS.map((_, i) => ({
        id: i + 1,
        lane: i,
        start: base - CYCLE_MS * 0.5,
      }));
      setTick(1);
      return;
    }

    let raf: number;
    let lastSpawn = performance.now();

    const loop = (now: number) => {
      if (now - lastSpawn > SPAWN_MS) {
        nextIdRef.current++;
        pulsesRef.current.push({
          id: nextIdRef.current,
          lane: Math.floor(Math.random() * DESTINATIONS.length),
          start: now,
        });
        lastSpawn = now;
        setCount((c) => c + Math.floor(Math.random() * 4) + 1);
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

  return (
    <div className="relative rounded-2xl border border-border bg-surface/30 p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Parallel dispatch
        </span>
        <span className="font-mono text-[11px] text-accent">
          {count.toLocaleString()}+ agents
        </span>
      </div>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full"
        aria-label="Dispatcher emitting parallel AI agents to ChatGPT, Perplexity, and Gemini."
      >
        <defs>
          <radialGradient id="dispatch-grad">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </radialGradient>
          <filter id="pulse-glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Dispatcher node */}
        <circle cx={DISPATCH_X} cy={VIEW_H / 2} r="28" fill="url(#dispatch-grad)" opacity="0.85" />
        <circle cx={DISPATCH_X} cy={VIEW_H / 2} r="36" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1">
          <animate attributeName="r" values="32;44;32" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x={DISPATCH_X} y={VIEW_H / 2 + 56} textAnchor="middle" fontSize="10" className="font-mono" fill="#94A3B8" letterSpacing="1.5">
          dispatcher
        </text>

        {/* Lanes */}
        {DESTINATIONS.map((dest) => (
          <g key={dest.id}>
            <line
              x1={DISPATCH_X + 30}
              y1={VIEW_H / 2}
              x2={DEST_X - 60}
              y2={dest.y}
              stroke="rgba(59, 130, 246, 0.18)"
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />
            <rect
              x={DEST_X - 56}
              y={dest.y - 14}
              width="110"
              height="28"
              rx="14"
              fill="#F9FAFB"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
            />
            <circle cx={DEST_X - 40} cy={dest.y} r="3" fill="#10B981">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <text x={DEST_X - 30} y={dest.y + 3} fontSize="10" className="font-mono" fill="#475569">
              {dest.label}
            </text>
          </g>
        ))}

        {/* Active pulses */}
        {pulsesRef.current.map((p) => {
          const dest = DESTINATIONS[p.lane];
          const progress = Math.min((now - p.start) / CYCLE_MS, 1);
          const x = DISPATCH_X + 30 + ((DEST_X - 60) - (DISPATCH_X + 30)) * progress;
          const y = VIEW_H / 2 + (dest.y - VIEW_H / 2) * progress;
          const opacity = progress < 0.85 ? 1 : (1 - progress) / 0.15;
          return (
            <circle
              key={p.id}
              cx={x}
              cy={y}
              r="3.5"
              fill="#60A5FA"
              opacity={opacity}
              filter="url(#pulse-glow)"
            />
          );
        })}

        {/* Silence the unused-var lint on tick (reactivity trigger) */}
        <g style={{ display: "none" }}>{tick}</g>
      </svg>
    </div>
  );
}

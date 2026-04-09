"use client";

import { useEffect, useState } from "react";

/**
 * Static bird's-eye overview of the 8 methodology stages laid out on a
 * horizontal rail. A "focus" node pulses and advances every 2.5s to show
 * that the system is alive and moves through every step.
 */

const NODES = [
  { id: "discover", label: "Discover", x: 80 },
  { id: "cluster", label: "Cluster", x: 200 },
  { id: "measure", label: "Measure", x: 320 },
  { id: "critic", label: "Critic", x: 440 },
  { id: "learn", label: "Learn", x: 560 },
  { id: "optimize", label: "Optimize", x: 680 },
  { id: "deploy", label: "Deploy", x: 800 },
  { id: "monitor", label: "Monitor", x: 920 },
];

const VIEW_W = 1000;
const VIEW_H = 220;
const RAIL_Y = 110;

export default function SystemMap() {
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setFocus((f) => (f + 1) % NODES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-surface/30 p-6 sm:p-10">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full"
        aria-label="System overview showing the eight methodology stages on a connected rail."
      >
        <defs>
          <linearGradient id="rail-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.55)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.25)" />
          </linearGradient>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Rail */}
        <line
          x1={NODES[0].x}
          y1={RAIL_Y}
          x2={NODES[NODES.length - 1].x}
          y2={RAIL_Y}
          stroke="url(#rail-grad)"
          strokeWidth="2"
          strokeDasharray="2 6"
        />

        {/* Loop-back arc on top */}
        <path
          d={`M ${NODES[NODES.length - 1].x} ${RAIL_Y} Q ${VIEW_W / 2} ${RAIL_Y - 90}, ${NODES[0].x} ${RAIL_Y}`}
          fill="none"
          stroke="rgba(59, 130, 246, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="3 6"
        />
        <text
          x={VIEW_W / 2}
          y={RAIL_Y - 72}
          textAnchor="middle"
          className="fill-muted font-mono"
          fontSize="10"
          letterSpacing="2"
        >
          continuous feedback
        </text>

        {/* Nodes */}
        {NODES.map((n, i) => {
          const active = i === focus;
          return (
            <g key={n.id}>
              {active && (
                <circle
                  cx={n.x}
                  cy={RAIL_Y}
                  r="22"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="r"
                    values="16;28;16"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;0;0.8"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                cx={n.x}
                cy={RAIL_Y}
                r={active ? 9 : 6}
                fill={active ? "#3B82F6" : "#1E293B"}
                stroke={active ? "#60A5FA" : "#334155"}
                strokeWidth="1.5"
                filter={active ? "url(#node-glow)" : undefined}
                style={{ transition: "r 0.4s ease" }}
              />
              <text
                x={n.x}
                y={RAIL_Y + 34}
                textAnchor="middle"
                fontSize="11"
                className="font-heading"
                fill={active ? "#F1F5F9" : "#64748B"}
                style={{ transition: "fill 0.4s ease" }}
              >
                {n.label}
              </text>
              <text
                x={n.x}
                y={RAIL_Y - 22}
                textAnchor="middle"
                fontSize="9"
                className="font-mono"
                fill={active ? "#60A5FA" : "#334155"}
                letterSpacing="1.5"
                style={{ transition: "fill 0.4s ease" }}
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

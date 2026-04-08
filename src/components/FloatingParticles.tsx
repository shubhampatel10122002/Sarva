"use client";

import { useEffect, useRef } from "react";

type ShapeKind = "ring" | "hexagon" | "diamond" | "cross" | "dot" | "arc";

interface Mote {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  pulse: number;
  pulseSpeed: number;
  shape: ShapeKind;
  proximity: number;
}

const SHAPES: ShapeKind[] = ["ring", "hexagon", "diamond", "cross", "dot", "arc"];

const COLORS = [
  "245, 158, 11",
  "6, 182, 212",
  "16, 185, 129",
  "241, 245, 249",
  "251, 191, 36",
];

function drawShape(ctx: CanvasRenderingContext2D, m: Mote, currentOpacity: number) {
  ctx.save();
  ctx.translate(m.x, m.y);
  ctx.rotate(m.rotation);

  const s = m.size;
  const col = `rgba(${m.color}, ${currentOpacity})`;
  const glowCol = `rgba(${m.color}, ${currentOpacity * 0.35})`;

  const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 3);
  grad.addColorStop(0, glowCol);
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.beginPath();
  ctx.arc(0, 0, s * 3, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.strokeStyle = col;
  ctx.fillStyle = col;
  ctx.lineWidth = Math.max(0.8, s * 0.12);

  switch (m.shape) {
    case "ring":
      ctx.beginPath();
      ctx.arc(0, 0, s, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case "hexagon": {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = Math.cos(angle) * s;
        const py = Math.sin(angle) * s;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      break;
    }
    case "diamond":
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.6, 0);
      ctx.lineTo(0, s);
      ctx.lineTo(-s * 0.6, 0);
      ctx.closePath();
      ctx.stroke();
      break;
    case "cross": {
      const arm = s * 0.7;
      ctx.beginPath();
      ctx.moveTo(-arm, 0);
      ctx.lineTo(arm, 0);
      ctx.moveTo(0, -arm);
      ctx.lineTo(0, arm);
      ctx.stroke();
      break;
    }
    case "arc":
      ctx.beginPath();
      ctx.arc(0, 0, s, 0, Math.PI * 1.3);
      ctx.stroke();
      break;
    case "dot":
    default:
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.5, 0, Math.PI * 2);
      ctx.fill();
      break;
  }

  ctx.restore();
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const motesRef = useRef<Mote[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createMotes = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = Math.min(Math.floor((w * h) / 10000), 180);

      motesRef.current = Array.from({ length: count }, () => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return {
          x, y,
          homeX: x,
          homeY: y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 12 + 5,
          baseOpacity: Math.random() * 0.09 + 0.04,
          opacity: 0,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.004,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.015 + 0.005,
          shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
          proximity: 0,
        };
      });
    };

    const MOUSE_RADIUS = 250;
    const REPEL_STRENGTH = 0.5;
    const HOME_PULL = 0.004;

    const tick = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const motes = motesRef.current;

      for (const m of motes) {
        m.homeX += m.vx;
        m.homeY += m.vy;

        // Wrap around viewport
        if (m.homeX < -50) m.homeX = w + 50;
        if (m.homeX > w + 50) m.homeX = -50;
        if (m.homeY < -50) m.homeY = h + 50;
        if (m.homeY > h + 50) m.homeY = -50;

        // Mouse repulsion
        const dx = m.x - mx;
        const dy = m.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && mouseRef.current.active) {
          const force = (1 - dist / MOUSE_RADIUS) * REPEL_STRENGTH;
          const angle = Math.atan2(dy, dx);
          m.x += Math.cos(angle) * force * 2.5;
          m.y += Math.sin(angle) * force * 2.5;
          m.proximity += (1 - dist / MOUSE_RADIUS - m.proximity) * 0.1;
        } else {
          m.proximity *= 0.95;
        }

        // Spring back
        m.x += (m.homeX - m.x) * HOME_PULL;
        m.y += (m.homeY - m.y) * HOME_PULL;

        m.rotation += m.rotationSpeed + m.proximity * 0.015;
        m.pulse += m.pulseSpeed;

        const pulseFactor = 0.6 + 0.4 * Math.sin(m.pulse);
        const targetOpacity = m.baseOpacity * pulseFactor + m.proximity * 0.15;
        m.opacity += (targetOpacity - m.opacity) * 0.12;

        drawShape(ctx, m, m.opacity);
      }

      // Connection lines
      for (let i = 0; i < motes.length; i++) {
        for (let j = i + 1; j < motes.length; j++) {
          const ddx = motes[i].x - motes[j].x;
          const ddy = motes[i].y - motes[j].y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 160) {
            const boost = Math.max(motes[i].proximity, motes[j].proximity);
            const lineAlpha = (1 - d / 160) * (0.03 + boost * 0.08);
            ctx.beginPath();
            ctx.moveTo(motes[i].x, motes[i].y);
            ctx.lineTo(motes[j].x, motes[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onLeave = () => { mouseRef.current.active = false; };
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };
    const onTouchEnd = () => { mouseRef.current.active = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", () => { resize(); createMotes(); });

    resize();
    createMotes();
    tick();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 1 }}
    />
  );
}

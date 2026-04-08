"use client";

import { useEffect, useRef, useState, useCallback } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Plotly: any;
  }
}

function fibonacciSphere(n: number, radius: number) {
  const points: { x: number; y: number; z: number }[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return points;
}

function gaussianRandom(mean: number, std: number) {
  const u1 = Math.random();
  const u2 = Math.random();
  return mean + std * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

export default function QuerySphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const rotationRef = useRef<number | null>(null);
  const interactingRef = useRef(false);
  const interactTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.Plotly) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.plot.ly/plotly-2.35.2.min.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const startIdleRotation = useCallback(() => {
    if (!containerRef.current || !window.Plotly) return;

    let angle = 0;
    const baseEye = { x: 1.6, y: 0.8, z: 1.2 };
    const radius = Math.sqrt(baseEye.x ** 2 + baseEye.z ** 2);

    const rotate = () => {
      if (interactingRef.current || !containerRef.current) {
        rotationRef.current = requestAnimationFrame(rotate);
        return;
      }

      angle += 0.002;
      const newEye = {
        x: radius * Math.cos(angle),
        y: baseEye.y,
        z: radius * Math.sin(angle),
      };

      window.Plotly.relayout(containerRef.current, {
        "scene.camera.eye": newEye,
      });

      rotationRef.current = requestAnimationFrame(rotate);
    };

    rotationRef.current = requestAnimationFrame(rotate);
  }, []);

  useEffect(() => {
    if (!loaded || !containerRef.current || !window.Plotly) return;

    const outerR = 1.8;
    const outerPoints = fibonacciSphere(350, outerR);
    const jitteredOuter = outerPoints.map((p) => ({
      x: p.x + gaussianRandom(0, 0.05),
      y: p.y + gaussianRandom(0, 0.05),
      z: p.z + gaussianRandom(0, 0.05),
    }));

    const innerR = 1.2;
    const innerPoints = fibonacciSphere(80, innerR);
    const jitteredInner = innerPoints.map((p) => ({
      x: p.x + gaussianRandom(0, 0.04),
      y: p.y + gaussianRandom(0, 0.04),
      z: p.z + gaussianRandom(0, 0.04),
    }));

    const centroidIdx = 170;
    const centroid = jitteredOuter[centroidIdx];
    const mag = Math.sqrt(centroid.x ** 2 + centroid.y ** 2 + centroid.z ** 2);
    const norm = { x: centroid.x / mag, y: centroid.y / mag, z: centroid.z / mag };
    const rayEnd = { x: norm.x * 3.5, y: norm.y * 3.5, z: norm.z * 3.5 };

    const raySteps = 60;
    const rayX: number[] = [], rayY: number[] = [], rayZ: number[] = [];
    for (let i = 0; i < raySteps; i++) {
      const t = i / (raySteps - 1);
      rayX.push(centroid.x + (rayEnd.x - centroid.x) * t);
      rayY.push(centroid.y + (rayEnd.y - centroid.y) * t);
      rayZ.push(centroid.z + (rayEnd.z - centroid.z) * t);
    }

    const arrowSteps = 40;
    const arrowX: number[] = [], arrowY: number[] = [], arrowZ: number[] = [];
    for (let i = 0; i < arrowSteps; i++) {
      const t = i / (arrowSteps - 1);
      arrowX.push(centroid.x * t);
      arrowY.push(centroid.y * t);
      arrowZ.push(centroid.z * t);
    }

    const innerRaySteps = 30;
    const innerRayX: number[] = [], innerRayY: number[] = [], innerRayZ: number[] = [];
    const rayStart = { x: -norm.x * 3.5, y: -norm.y * 3.5, z: -norm.z * 3.5 };
    for (let i = 0; i < innerRaySteps; i++) {
      const t = i / (innerRaySteps - 1);
      innerRayX.push(rayStart.x + centroid.x * 0.15 * t);
      innerRayY.push(rayStart.y + centroid.y * 0.15 * t);
      innerRayZ.push(rayStart.z + centroid.z * 0.15 * t);
    }

    const outerSizes = jitteredOuter.map((p) => {
      const dist = Math.sqrt(p.x ** 2 + p.y ** 2 + p.z ** 2);
      return 3 + (dist / outerR) * 2;
    });

    const outerColors = jitteredOuter.map((p) => {
      const dist = Math.sqrt(p.x ** 2 + p.y ** 2 + p.z ** 2);
      const brightness = 0.55 + (dist / (outerR + 0.2)) * 0.45;
      const r = Math.round(190 * brightness);
      const g = Math.round(200 * brightness);
      const b = Math.round(220 * brightness);
      return `rgba(${r},${g},${b},${0.5 + brightness * 0.4})`;
    });

    const innerColors = jitteredInner.map((p) => {
      const dist = Math.sqrt(p.x ** 2 + p.y ** 2 + p.z ** 2);
      const brightness = 0.3 + (dist / innerR) * 0.5;
      const r = Math.round(170 * brightness);
      const g = Math.round(180 * brightness);
      const b = Math.round(200 * brightness);
      return `rgba(${r},${g},${b},${0.3 + brightness * 0.3})`;
    });

    const glowRings = [0.15, 0.3, 0.5, 0.75].map((r) => {
      const pts = fibonacciSphere(30, r);
      return {
        x: pts.map((p) => p.x),
        y: pts.map((p) => p.y),
        z: pts.map((p) => p.z),
        mode: "markers" as const,
        type: "scatter3d" as const,
        marker: {
          size: 8 - r * 5,
          color: `rgba(245, ${Math.round(158 - r * 50)}, ${Math.round(11 + r * 20)}, ${0.55 - r * 0.4})`,
          line: { width: 0 },
        },
        hoverinfo: "skip" as const,
        showlegend: false,
      };
    });

    const raySizes = rayX.map((_, i) => 3.5 - (i / (raySteps - 1)) * 2);
    const rayColors = rayX.map((_, i) => {
      const alpha = 0.9 - (i / (raySteps - 1)) * 0.6;
      return `rgba(16, 185, 129, ${alpha})`;
    });

    const arrowSizes = arrowX.map((_, i) => 1.5 + (i / (arrowSteps - 1)) * 2.5);
    const arrowColors = arrowX.map((_, i) => `rgba(16, 185, 129, ${0.15 + (i / (arrowSteps - 1)) * 0.6})`);

    const data = [
      {
        x: jitteredOuter.map((p) => p.x),
        y: jitteredOuter.map((p) => p.y),
        z: jitteredOuter.map((p) => p.z),
        mode: "markers", type: "scatter3d",
        marker: { size: outerSizes, color: outerColors, line: { width: 0 }, opacity: 1 },
        hoverinfo: "skip", showlegend: false,
      },
      {
        x: jitteredInner.map((p) => p.x),
        y: jitteredInner.map((p) => p.y),
        z: jitteredInner.map((p) => p.z),
        mode: "markers", type: "scatter3d",
        marker: { size: 3.5, color: innerColors, line: { width: 0 }, opacity: 1 },
        hoverinfo: "skip", showlegend: false,
      },
      {
        x: [0], y: [0], z: [0],
        mode: "markers", type: "scatter3d",
        marker: { size: 28, color: "rgba(245, 158, 11, 1)", line: { width: 0 }, opacity: 1 },
        hoverinfo: "skip", showlegend: false,
      },
      ...glowRings,
      {
        x: [centroid.x], y: [centroid.y], z: [centroid.z],
        mode: "markers", type: "scatter3d",
        marker: { size: 10, color: "rgba(16, 185, 129, 1)", line: { width: 2, color: "rgba(16, 185, 129, 0.6)" } },
        hoverinfo: "skip", showlegend: false,
      },
      {
        x: rayX, y: rayY, z: rayZ,
        mode: "markers", type: "scatter3d",
        marker: { size: raySizes, color: rayColors, line: { width: 0 } },
        hoverinfo: "skip", showlegend: false,
      },
      {
        x: innerRayX, y: innerRayY, z: innerRayZ,
        mode: "markers", type: "scatter3d",
        marker: {
          size: raySizes.slice(0, innerRaySteps).reverse(),
          color: innerRayX.map((_, i) => `rgba(16, 185, 129, ${0.6 - (i / (innerRaySteps - 1)) * 0.45})`),
          line: { width: 0 },
        },
        hoverinfo: "skip", showlegend: false,
      },
      {
        x: arrowX, y: arrowY, z: arrowZ,
        mode: "markers", type: "scatter3d",
        marker: { size: arrowSizes, color: arrowColors, symbol: "circle", line: { width: 0 } },
        hoverinfo: "skip", showlegend: false,
      },
    ];

    const layout = {
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      scene: {
        xaxis: { visible: false, showgrid: false, zeroline: false, showticklabels: false, showspikes: false, title: "" },
        yaxis: { visible: false, showgrid: false, zeroline: false, showticklabels: false, showspikes: false, title: "" },
        zaxis: { visible: false, showgrid: false, zeroline: false, showticklabels: false, showspikes: false, title: "" },
        bgcolor: "rgba(0,0,0,0)",
        camera: { eye: { x: 1.6, y: 0.8, z: 1.2 }, center: { x: 0, y: 0, z: 0 } },
        aspectmode: "cube" as const,
        dragmode: "orbit" as const,
      },
      margin: { l: 0, r: 0, t: 0, b: 0 },
      showlegend: false,
      hovermode: false as const,
    };

    const config = {
      displayModeBar: false,
      scrollZoom: true,
      responsive: true,
      staticPlot: false,
    };

    window.Plotly.newPlot(
      containerRef.current,
      data,
      layout,
      config
    ).then(() => {
      startIdleRotation();
    });

    const el = containerRef.current;
    const onInteractStart = () => {
      interactingRef.current = true;
      if (interactTimerRef.current) clearTimeout(interactTimerRef.current);
    };
    const onInteractEnd = () => {
      if (interactTimerRef.current) clearTimeout(interactTimerRef.current);
      interactTimerRef.current = setTimeout(() => {
        interactingRef.current = false;
      }, 3000);
    };

    el.addEventListener("mousedown", onInteractStart);
    el.addEventListener("mouseup", onInteractEnd);
    el.addEventListener("touchstart", onInteractStart);
    el.addEventListener("touchend", onInteractEnd);

    const handleResize = () => {
      if (containerRef.current) window.Plotly.Plots.resize(containerRef.current);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      el.removeEventListener("mousedown", onInteractStart);
      el.removeEventListener("mouseup", onInteractEnd);
      el.removeEventListener("touchstart", onInteractStart);
      el.removeEventListener("touchend", onInteractEnd);
      if (rotationRef.current) cancelAnimationFrame(rotationRef.current);
      if (interactTimerRef.current) clearTimeout(interactTimerRef.current);
      if (containerRef.current) window.Plotly.purge(containerRef.current);
    };
  }, [loaded, startIdleRotation]);

  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 1", maxWidth: 580 }}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        </div>
      )}
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      />
    </div>
  );
}

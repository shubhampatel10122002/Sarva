"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    id: "discover",
    title: "AI Discovery Agent",
    shortDesc: "50K+ queries from Google Trends, Reddit, Quora",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    color: "6, 182, 212",
  },
  {
    id: "embed",
    title: "Embedding & Clustering",
    shortDesc: "30-50 cluster centroids as optimization targets",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    color: "245, 158, 11",
  },
  {
    id: "audit",
    title: "AI Visibility Audit",
    shortDesc: "1000s of agents crawl real ChatGPT UI",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "16, 185, 129",
  },
  {
    id: "critic",
    title: "Domain Critic Agent",
    shortDesc: "Fine-tuned exclusively for your brand",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    color: "245, 158, 11",
  },
  {
    id: "optimize",
    title: "Optimize & Deploy",
    shortDesc: "Sandbox-tested, client-approved rewrites",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: "6, 182, 212",
  },
  {
    id: "learn",
    title: "Continuous Learning",
    shortDesc: "Daily scans, RL-powered adaptation",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    color: "16, 185, 129",
  },
];

export default function MethodologyPipeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-cycle through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Desktop: horizontal flow */}
      <div className="hidden lg:block">
        {/* Connection line */}
        <div className="absolute left-[40px] right-[40px] top-[40px] h-[2px]">
          <div className="h-full w-full rounded-full bg-border" />
          <div
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${(activeIdx / (stages.length - 1)) * 100}%`,
              background: `linear-gradient(90deg, rgba(6,182,212,0.6), rgba(245,158,11,0.8))`,
              boxShadow: `0 0 20px rgba(245,158,11,0.3)`,
            }}
          />
          {/* Flowing particle on the line */}
          <div
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full transition-all duration-700 ease-out"
            style={{
              left: `${(activeIdx / (stages.length - 1)) * 100}%`,
              transform: `translate(-50%, -50%)`,
              background: `rgba(245, 158, 11, 1)`,
              boxShadow: `0 0 15px rgba(245,158,11,0.8), 0 0 30px rgba(245,158,11,0.4)`,
            }}
          />
        </div>

        <div className="grid grid-cols-6 gap-4">
          {stages.map((stage, i) => (
            <button
              key={stage.id}
              onClick={() => setActiveIdx(i)}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Node */}
              <div
                className="relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-2xl border-2 transition-all duration-500"
                style={{
                  borderColor: i <= activeIdx ? `rgba(${stage.color}, 0.6)` : "#1E293B",
                  background: i <= activeIdx ? `rgba(${stage.color}, 0.1)` : "#111827",
                  boxShadow: i === activeIdx ? `0 0 30px rgba(${stage.color}, 0.3), inset 0 0 20px rgba(${stage.color}, 0.05)` : "none",
                }}
              >
                <div
                  className="transition-all duration-500"
                  style={{
                    color: i <= activeIdx ? `rgba(${stage.color}, 1)` : "#64748B",
                    transform: i === activeIdx ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {stage.icon}
                </div>
                {/* Pulse ring on active */}
                {i === activeIdx && (
                  <div
                    className="absolute inset-0 animate-ping rounded-2xl border-2 opacity-20"
                    style={{ borderColor: `rgba(${stage.color}, 0.5)` }}
                  />
                )}
              </div>
              {/* Label */}
              <h4
                className="mt-4 text-sm font-semibold transition-colors duration-300"
                style={{ color: i <= activeIdx ? "#F1F5F9" : "#64748B" }}
              >
                {stage.title}
              </h4>
              <p
                className="mt-1 text-xs leading-snug transition-colors duration-300"
                style={{ color: i <= activeIdx ? "#94A3B8" : "#475569" }}
              >
                {stage.shortDesc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile/tablet: vertical flow */}
      <div className="lg:hidden">
        <div className="relative ml-[39px] border-l-2 border-border pl-10">
          {/* Animated fill line */}
          <div
            className="absolute left-[-2px] top-0 w-[2px] transition-all duration-700 ease-out"
            style={{
              height: `${((activeIdx + 1) / stages.length) * 100}%`,
              background: `linear-gradient(180deg, rgba(6,182,212,0.6), rgba(245,158,11,0.8))`,
            }}
          />

          {stages.map((stage, i) => (
            <button
              key={stage.id}
              onClick={() => setActiveIdx(i)}
              className="relative mb-10 flex items-start text-left last:mb-0"
            >
              {/* Node on timeline */}
              <div
                className="absolute -left-[56px] flex h-[34px] w-[34px] items-center justify-center rounded-xl border-2 transition-all duration-500"
                style={{
                  borderColor: i <= activeIdx ? `rgba(${stage.color}, 0.6)` : "#1E293B",
                  background: i <= activeIdx ? `rgba(${stage.color}, 0.1)` : "#0B1120",
                }}
              >
                <div
                  className="scale-75 transition-colors duration-300"
                  style={{ color: i <= activeIdx ? `rgba(${stage.color}, 1)` : "#64748B" }}
                >
                  {stage.icon}
                </div>
                {i === activeIdx && (
                  <div
                    className="absolute inset-0 animate-ping rounded-xl border opacity-20"
                    style={{ borderColor: `rgba(${stage.color}, 0.5)` }}
                  />
                )}
              </div>
              <div>
                <h4
                  className="text-sm font-semibold transition-colors duration-300"
                  style={{ color: i <= activeIdx ? "#F1F5F9" : "#64748B" }}
                >
                  {stage.title}
                </h4>
                <p
                  className="mt-1 text-xs leading-relaxed transition-colors duration-300"
                  style={{ color: i <= activeIdx ? "#94A3B8" : "#475569" }}
                >
                  {stage.shortDesc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stage detail card */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-light/50 p-6 backdrop-blur-sm sm:p-8">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
            style={{
              background: `rgba(${stages[activeIdx].color}, 0.1)`,
              color: `rgba(${stages[activeIdx].color}, 1)`,
            }}
          >
            {stages[activeIdx].icon}
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold text-secondary">
              {stages[activeIdx].title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-light">
              {[
                "Our AI discovery agent scans Google Trends, Reddit, Quora, and keyword tools to build ~50,000 conversational queries that mirror real shopper behavior across seasons, events, and micro-trends.",
                "All discovered queries are embedded into a high-dimensional vector space. We cluster them into 30\u201350 groups and select each cluster centroid as an optimization target \u2014 mathematically optimal coverage.",
                "Thousands of parallel AI agents crawl the actual ChatGPT UI (not the API \u2014 responses differ). They record which brands are cited per query and exactly where your brand stands in the spectrum.",
                "Trained on millions of real query-response pairs collected for your domain. This model learns what content structures, formats, and features drive top LLM visibility \u2014 fine-tuned exclusively for your brand.",
                "The critic agent rewrites your product pages, descriptions, and docs. Every change goes through sandbox testing for bugs, loading time, and UX before you review and approve.",
                "Our agents run daily, monitoring live performance across ChatGPT, Perplexity, and Gemini. The critic model uses reinforcement learning to continuously adapt as user behavior evolves.",
              ][activeIdx]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

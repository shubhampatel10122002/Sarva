"use client";

import { useState } from "react";

const TABS = [
  {
    id: "critic",
    label: "AI Critic Model",
    title: "Custom AI Critic Model",
    subtitle: "Training & Optimization",
    description:
      "Train a domain-specific AI critic that understands what content structures generative engines prefer for your vertical.",
    summary:
      "Build a proprietary AI model that continuously learns what makes your brand get cited by LLMs.",
    features: [
      { bold: "Domain-specific model", rest: " fine-tuned on your vertical" },
      { bold: "Automated content scoring", rest: " against AI preferences" },
      { bold: "Continuous learning", rest: " from measurement feedback" },
      { bold: "Content generation", rest: " recommendations" },
    ],
    before: "Generic content\nthat AI ignores",
    after: "AI-optimized content\nthat gets cited",
    stat: "5",
    statUnit: "x increase",
    statCaption: "in AI content citations",
    svgType: "critic" as const,
  },
  {
    id: "visibility",
    label: "Visibility Tracking",
    title: "AI Visibility",
    subtitle: "Measurement Dashboard",
    description:
      "Track how AI platforms discuss your brand across ChatGPT, Perplexity, Gemini, and 5+ other LLMs in real-time.",
    summary:
      "Get executive-level insights to drive AI search strategy and investment decisions.",
    features: [
      { bold: "Cross-platform tracking", rest: " across 8+ LLMs" },
      { bold: "Real-time brand mention", rest: " alerts" },
      { bold: "Competitor intelligence", rest: " summaries" },
      { bold: "ROI tracking", rest: " for AI optimization efforts" },
    ],
    before: "No visibility\ninto AI channel",
    after: "Full strategic control\nof AI presence",
    stat: "50",
    statUnit: "% reduction",
    statCaption: "in time spent on AI visibility tracking",
    svgType: "dashboard" as const,
  },
  {
    id: "seo",
    label: "GEO / SEO",
    title: "Toolkit for",
    subtitle: "AI Search Optimization",
    description:
      "Unlock insights and opportunities to drive search rankings in both traditional and AI-powered search.",
    summary:
      "Optimize your content to rank in AI-powered search results and increase organic visibility.",
    features: [
      { bold: "Track brand mentions", rest: " across 8+ major LLMs" },
      { bold: "Identify content gaps", rest: " AI can't answer" },
      { bold: "Monitor competitor", rest: " AI visibility in real-time" },
    ],
    before: "Invisible in\nAI search results",
    after: "Top positions in\nsearch responses",
    stat: "2.5",
    statUnit: "x increase",
    statCaption: "in AI-driven organic traffic",
    svgType: "search" as const,
  },
  {
    id: "content",
    label: "Content Strategy",
    title: "AI-Optimized",
    subtitle: "Content Strategy",
    description:
      "Create content that AI platforms love to cite. Our critic model tells you exactly what to write and how to structure it.",
    summary:
      "Develop content strategies that maximize visibility in AI-generated answers.",
    features: [
      { bold: "Content gap analysis", rest: " for AI queries" },
      { bold: "AI-friendly content", rest: " templates" },
      { bold: "Citation tracking", rest: " and optimization" },
    ],
    before: "Content\nignored by AI",
    after: "Primary source\nfor AI answers",
    stat: "3",
    statUnit: "x increase",
    statCaption: "in AI content citations",
    svgType: "content" as const,
  },
  {
    id: "brand",
    label: "Brand Monitoring",
    title: "AI-Powered",
    subtitle: "Brand Intelligence",
    description:
      "Track how AI platforms discuss your brand. Get real-time alerts on mentions, sentiment, and competitive positioning.",
    summary:
      "Optimize your content to rank in AI-powered search results and increase organic visibility.",
    features: [
      { bold: "Press kits", rest: " optimized for AI citation" },
      { bold: "Real-time brand mention", rest: " alerts" },
      { bold: "Sentiment analysis", rest: " across AI platforms" },
      { bold: "Crisis detection", rest: " and response tools" },
    ],
    before: "Reactive to\nAI misinformation",
    after: "Proactive brand\nnarrative control",
    stat: "85",
    statUnit: "% faster",
    statCaption: "response to brand mentions",
    svgType: "brand" as const,
  },
];

function TabSVG({ type }: { type: (typeof TABS)[number]["svgType"] }) {
  const commonBg = "#F0F4FF";
  const bar = "#3B82F6";
  const barLight = "#93C5FD";
  const cardBg = "#FFFFFF";
  const borderColor = "#E0E7FF";

  if (type === "dashboard") {
    return (
      <svg viewBox="0 0 480 340" className="h-full w-full" aria-hidden>
        <rect width="480" height="340" rx="16" fill={commonBg} />
        {/* Sidebar */}
        <rect x="16" y="16" width="60" height="308" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
        {[40, 70, 100, 130, 160].map((y, i) => (
          <rect key={i} x="26" y={y} width="40" height="6" rx="3" fill={i === 0 ? bar : borderColor} />
        ))}
        {/* Main area */}
        <rect x="92" y="16" width="372" height="40" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
        <rect x="104" y="30" width="80" height="10" rx="4" fill={borderColor} />
        <rect x="200" y="30" width="60" height="10" rx="4" fill={borderColor} />
        {/* Bar chart */}
        <rect x="92" y="72" width="240" height="180" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
        {[120, 155, 190, 225, 260, 295].map((x, i) => (
          <rect key={i} x={x} y={252 - [90, 130, 70, 110, 150, 95][i]} width="22" height={[90, 130, 70, 110, 150, 95][i]} rx="3" fill={i === 4 ? bar : barLight} />
        ))}
        {/* Side cards */}
        <rect x="348" y="72" width="116" height="84" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
        <circle cx="406" cy="114" r="28" fill="none" stroke={bar} strokeWidth="6" strokeDasharray="120 176" />
        <rect x="348" y="168" width="116" height="84" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
        <rect x="362" y="188" width="88" height="8" rx="4" fill={borderColor} />
        <rect x="362" y="208" width="60" height="8" rx="4" fill={barLight} />
        {/* Bottom cards */}
        <rect x="92" y="268" width="180" height="56" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
        <rect x="106" y="284" width="100" height="8" rx="4" fill={borderColor} />
        <rect x="106" y="300" width="70" height="8" rx="4" fill={barLight} />
        <rect x="288" y="268" width="176" height="56" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
        <rect x="302" y="284" width="100" height="8" rx="4" fill={borderColor} />
        <rect x="302" y="300" width="70" height="8" rx="4" fill={barLight} />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg viewBox="0 0 480 340" className="h-full w-full" aria-hidden>
        <rect width="480" height="340" rx="16" fill={commonBg} />
        {/* Search results list */}
        {[30, 80, 130, 180, 230, 280].map((y, i) => (
          <g key={i}>
            <rect x="32" y={y} width="360" height="38" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
            <circle cx="52" cy={y + 19} r="8" fill={borderColor} />
            <rect x="68" y={y + 10} width={120 + Math.sin(i) * 30} height="8" rx="4" fill={borderColor} />
            <rect x="68" y={y + 24} width={80 + Math.cos(i) * 20} height="6" rx="3" fill={barLight} />
            <rect x={310} y={y + 10} width={60} height="8" rx="4" fill={borderColor} />
          </g>
        ))}
        {/* Highlighted result */}
        <rect x="404" y="130" width="68" height="38" rx="8" fill={bar} opacity="0.9" />
        <rect x="414" y="143" width="48" height="6" rx="3" fill="#DBEAFE" />
        <rect x="414" y="154" width="36" height="5" rx="2.5" fill="#93C5FD" />
      </svg>
    );
  }

  if (type === "brand") {
    return (
      <svg viewBox="0 0 480 340" className="h-full w-full" aria-hidden>
        <rect width="480" height="340" rx="16" fill={commonBg} />
        {/* Bar chart */}
        {[60, 110, 160, 210, 260, 310, 360, 410].map((x, i) => {
          const heights = [100, 170, 80, 200, 120, 160, 90, 140];
          const h = heights[i];
          return (
            <rect key={i} x={x} y={300 - h} width="28" height={h} rx="4" fill={i === 3 ? bar : barLight} opacity={i === 3 ? 1 : 0.6} />
          );
        })}
        {/* Top labels */}
        <rect x="32" y="20" width="80" height="6" rx="3" fill={borderColor} />
        <rect x="32" y="34" width="50" height="6" rx="3" fill={barLight} />
      </svg>
    );
  }

  if (type === "content") {
    return (
      <svg viewBox="0 0 480 340" className="h-full w-full" aria-hidden>
        <rect width="480" height="340" rx="16" fill={commonBg} />
        {/* Document cards */}
        {[40, 130, 220, 310, 400].map((x, i) => (
          <g key={i}>
            <rect x={x} y="40" width="80" height="110" rx="6" fill={cardBg} stroke={i === 4 ? bar : borderColor} strokeWidth={i === 4 ? "2" : "1"} />
            <rect x={x + 10} y="54" width="60" height="5" rx="2.5" fill={borderColor} />
            <rect x={x + 10} y="66" width="50" height="5" rx="2.5" fill={borderColor} />
            {i === 2 && <circle cx={x + 40} cy="104" r="14" fill="none" stroke={bar} strokeWidth="1.5" />}
            {i === 2 && <line x1={x + 50} y1="114" x2={x + 58} y2="122" stroke={bar} strokeWidth="1.5" strokeLinecap="round" />}
            <rect x={x + 10} y="80" width="40" height="4" rx="2" fill={i === 4 ? barLight : borderColor} />
            <rect x={x + 10} y="90" width="55" height="4" rx="2" fill={i === 4 ? barLight : borderColor} />
            {i === 4 && <rect x={x + 10} y="100" width="60" height="4" rx="2" fill={barLight} />}
            {i === 4 && <rect x={x + 10} y="110" width="60" height="4" rx="2" fill={barLight} />}
            {i === 4 && <rect x={x + 10} y="120" width="60" height="4" rx="2" fill={barLight} />}
            {i === 4 && <rect x={x + 10} y="130" width="45" height="4" rx="2" fill={barLight} />}
          </g>
        ))}
        {/* Bottom row */}
        {[40, 130].map((x, i) => (
          <g key={`b-${i}`}>
            <rect x={x} y="170" width="80" height="110" rx="6" fill={cardBg} stroke={borderColor} strokeWidth="1" />
            <rect x={x + 10} y="184" width="60" height="5" rx="2.5" fill={borderColor} />
            <rect x={x + 10} y="196" width="50" height="5" rx="2.5" fill={borderColor} />
          </g>
        ))}
      </svg>
    );
  }

  // critic (default)
  return (
    <svg viewBox="0 0 480 340" className="h-full w-full" aria-hidden>
      <rect width="480" height="340" rx="16" fill={commonBg} />
      {/* Central brain/model visualization */}
      <circle cx="240" cy="140" r="50" fill={cardBg} stroke={bar} strokeWidth="2" />
      <circle cx="240" cy="140" r="35" fill="none" stroke={barLight} strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="240" cy="140" r="12" fill={bar} opacity="0.8" />
      {/* Input signals */}
      {[-80, -40, 0, 40, 80].map((dx, i) => (
        <g key={`in-${i}`}>
          <line x1={160 + dx} y1="30" x2={220 + dx * 0.3} y2="100" stroke={barLight} strokeWidth="1" strokeDasharray="3 3" />
          <rect x={150 + dx} y="16" width="20" height="16" rx="4" fill={cardBg} stroke={borderColor} strokeWidth="1" />
        </g>
      ))}
      {/* Output arrows */}
      {[-60, 0, 60].map((dx, i) => (
        <g key={`out-${i}`}>
          <line x1={240 + dx * 0.3} y1="190" x2={240 + dx} y2="260" stroke={bar} strokeWidth="1.5" />
          <rect x={220 + dx} y="264" width="40" height="24" rx="6" fill={bar} opacity="0.15" />
          <rect x={228 + dx} y="272" width="24" height="6" rx="3" fill={bar} opacity="0.6" />
        </g>
      ))}
      {/* Score chart on side */}
      <rect x="360" y="60" width="100" height="220" rx="8" fill={cardBg} stroke={borderColor} strokeWidth="1" />
      <polyline points="372,250 388,230 404,240 420,210 436,190 448,170" fill="none" stroke={bar} strokeWidth="2" strokeLinecap="round" />
      <text x="374" y="80" fontSize="9" fill="#6B7280" fontFamily="monospace">score ↗</text>
    </svg>
  );
}

export default function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              i === active
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "bg-white text-muted-light hover:bg-surface hover:text-secondary border border-border"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
        {/* Left: text content */}
        <div>
          <h3 className="font-heading text-3xl font-bold leading-tight text-secondary sm:text-4xl">
            {tab.title}
            <br />
            <span className="text-accent">{tab.subtitle}</span>
          </h3>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            {tab.description}
          </p>

          {/* Right-side summary on mobile / hidden on desktop */}
          <p className="mt-6 text-sm font-medium text-secondary lg:hidden">
            {tab.summary}
          </p>

          {/* Feature list */}
          <ul className="mt-8 space-y-4">
            {tab.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-muted-light leading-relaxed">
                  <strong className="font-semibold text-secondary">{f.bold}</strong>
                  {f.rest}
                </span>
              </li>
            ))}
          </ul>

          {/* Before → After */}
          <div className="mt-10 flex items-center gap-4">
            <div className="rounded-lg bg-surface px-4 py-3">
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted">Before</span>
              <p className="mt-1 whitespace-pre-line text-sm font-semibold text-secondary">{tab.before}</p>
            </div>
            <div className="flex shrink-0 items-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="h-3 w-3 -mx-0.5 text-accent/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 6l3-3v2h4V3l3 3-3 3V7H5v2L2 6z" />
                </svg>
              ))}
            </div>
            <div className="rounded-lg bg-surface px-4 py-3">
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted">After</span>
              <p className="mt-1 whitespace-pre-line text-sm font-semibold text-secondary">{tab.after}</p>
            </div>
          </div>

          {/* Stat badge */}
          <div className="mt-6 inline-flex items-baseline gap-2 rounded-xl bg-accent px-6 py-4 text-white">
            <span className="font-heading text-3xl font-extrabold">{tab.stat}</span>
            <span className="text-sm font-semibold">{tab.statUnit}</span>
            <span className="text-sm opacity-80">{tab.statCaption}</span>
          </div>
        </div>

        {/* Right: SVG visualization + summary */}
        <div>
          <p className="mb-6 hidden text-right text-sm font-medium text-secondary lg:block">
            {tab.summary}
          </p>
          <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-blue-50/80 to-indigo-50/40 p-2 shadow-sm">
            <TabSVG type={tab.svgType} />
          </div>
        </div>
      </div>
    </div>
  );
}

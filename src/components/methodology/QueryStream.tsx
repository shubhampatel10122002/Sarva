"use client";

const QUERIES = [
  "best running shoes for marathon training under $200",
  "waterproof hiking boots women's wide feet",
  "minimalist daily sneakers for walking all day",
  "formal leather shoes for office work breathable",
  "basketball shoes with best ankle support 2025",
  "budget running shoes under $100 with good cushion",
  "are carbon plate shoes worth it for half marathon",
  "white sneakers that don't turn yellow in washing machine",
  "best trail running shoes for rocky terrain",
  "comfortable work boots for standing 12 hours",
  "kids soccer cleats for wide feet size 5",
  "lightweight tennis shoes for hard court",
  "vegan leather dress shoes men black",
  "what shoes do nurses recommend for long shifts",
  "waterproof winter boots with arctic grip sole",
  "slip-on sneakers with arch support for plantar fasciitis",
];

export default function QueryStream() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-2xl border border-border bg-surface/40 p-6">
      {/* Source labels */}
      <div className="absolute left-6 top-6 z-10 flex flex-wrap gap-2">
        {["Google Trends", "Reddit", "Quora"].map((src) => (
          <span
            key={src}
            className="rounded-full border border-border-light bg-surface-elevated/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-light backdrop-blur-sm"
          >
            {src}
          </span>
        ))}
      </div>

      {/* Count badge */}
      <div className="absolute right-6 top-6 z-10 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur-sm">
        ~50,000 queries
      </div>

      {/* Stream container with mask */}
      <div
        className="absolute inset-x-0 bottom-0 top-20 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(180deg, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      >
        <div className="animate-stream-up flex flex-col gap-2 px-6">
          {[...QUERIES, ...QUERIES].map((q, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-border/60 bg-surface/80 px-4 py-2.5 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
              <span className="font-mono text-[11px] leading-relaxed text-muted-light">
                {q}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

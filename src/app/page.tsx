import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuerySphereWrapper from "@/components/QuerySphereWrapper";
import FloatingParticlesWrapper from "@/components/FloatingParticlesWrapper";
import MethodologyPipelineWrapper from "@/components/MethodologyPipelineWrapper";
import {
  FootLockerLogo,
  PacSunLogo,
  ArkosHealthLogo,
  DeepMindLogo,
  StanfordLogo,
  MITLogo,
  NYULogo,
  AntlerLogo,
} from "@/components/logos";

export default function Home() {
  return (
    <>
      <FloatingParticlesWrapper />
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — Centered text with animated mesh
      ═══════════════════════════════════════════ */}
      <section className="noise-overlay grid-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        {/* Moving gradient mesh */}
        <div className="gradient-mesh absolute inset-0" />
        <div className="glow-orb glow-orb-amber absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-float" />
        <div className="glow-orb glow-orb-teal absolute bottom-1/4 right-1/4 h-[300px] w-[300px] opacity-30 animate-float" style={{ animationDelay: "-3s" }} />

        {/* Orbiting ring */}
        <div className="orbit-ring absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border-light bg-surface/60 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-xs font-medium tracking-wide text-muted-light">
              Backed by Antler &middot; New York City
            </span>
          </div>

          <h1 className="animate-fade-in-up font-heading text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Make AI search
            <br />
            <span className="gradient-text">find you first.</span>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-light sm:text-xl"
            style={{ animationDelay: "0.15s" }}
          >
            Generative Engine Optimization for e-commerce. We restructure your
            product content so LLMs cite, recommend, and surface your brand.
          </p>

          <div
            className="animate-fade-in-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="animate-pulse-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-accent-light"
            >
              Optimize Your Visibility
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#technology"
              className="rounded-xl border border-border-light px-8 py-4 text-sm font-semibold text-secondary transition-all hover:border-accent/30 hover:bg-surface-light"
            >
              See Our Technology
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          MARQUEE — Trust bar
      ═══════════════════════════════════════════ */}
      <section className="relative border-y border-border bg-surface/80 py-5 backdrop-blur-sm">
        <div className="marquee-container">
          <div className="marquee-track animate-marquee">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-14 px-8">
                <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.25em] text-accent/60">
                  Trusted by
                </span>
                <FootLockerLogo className="h-5 w-auto text-muted-light logo-item" />
                <PacSunLogo className="h-5 w-auto text-muted-light logo-item" />
                <ArkosHealthLogo className="h-5 w-auto text-muted-light logo-item" />
                <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.25em] text-accent/60">
                  Team from
                </span>
                <DeepMindLogo className="h-6 w-auto text-muted-light logo-item" />
                <StanfordLogo className="h-6 w-auto text-muted-light logo-item" />
                <MITLogo className="h-5 w-auto text-muted-light logo-item" />
                <NYULogo className="h-5 w-auto text-muted-light logo-item" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM — Minimal text + animated counter
      ═══════════════════════════════════════════ */}
      <section id="problem" className="relative px-6 py-28 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                The shift
              </span>
              <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-secondary sm:text-5xl">
                Search is no longer
                <br />
                <span className="gradient-text-subtle">ten blue links.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base text-muted-light leading-relaxed">
                LLMs synthesize answers and cite sources. If your content isn&apos;t
                structured for generative engines, you&apos;re invisible.
              </p>
            </div>
            {/* Animated visual: shifting search paradigm */}
            <div className="relative">
              <div className="rounded-2xl border border-border bg-surface p-6">
                {/* Old way - fading out */}
                <div className="mb-6 opacity-40">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Traditional SEO</span>
                  <div className="mt-3 space-y-2">
                    {[85, 70, 55, 40, 25].map((w, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-2 rounded-full bg-border" style={{ width: `${w}%` }} />
                        <span className="text-[10px] text-muted">#{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* New way - glowing */}
                <div className="relative">
                  <div className="absolute -inset-3 rounded-xl bg-accent/5 blur-sm" />
                  <div className="relative">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">GEO</span>
                    <div className="mt-3 rounded-lg border border-accent/20 bg-surface-elevated p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent animate-pulse-glow" />
                        <div>
                          <p className="text-xs text-secondary leading-relaxed">
                            &ldquo;The best running shoes for marathon training are the <span className="font-semibold text-accent">Nike Vaporfly Next%</span> and...&rdquo;
                          </p>
                          <span className="mt-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-medium text-accent">
                            AI-generated answer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════════
          TECHNOLOGY — Visualization + Animated Pipeline
      ═══════════════════════════════════════════ */}
      <section id="technology" className="relative overflow-hidden py-28 lg:py-44" style={{ background: "linear-gradient(180deg, #0B1120 0%, #070D19 50%, #0B1120 100%)" }}>
        <div className="glow-orb glow-orb-amber absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-15 animate-float" />
        <div className="glow-orb glow-orb-teal absolute right-0 bottom-0 h-[400px] w-[400px] opacity-10 animate-float" style={{ animationDelay: "-2s" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Section header */}
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our technology
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-secondary sm:text-5xl lg:text-6xl">
              Mapping the query
              <br />
              <span className="gradient-text-subtle">space of LLMs.</span>
            </h2>
          </div>

          {/* 3D Visualization */}
          <div className="mx-auto mt-12 max-w-xl">
            <QuerySphereWrapper />
          </div>

          {/* Diagram legend */}
          <div className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-6">
            {[
              { color: "bg-muted-light", label: "User queries" },
              { color: "bg-accent", label: "Cluster centroids" },
              { color: "bg-green", label: "Optimization vector" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                <span className="text-xs text-muted">{item.label}</span>
              </div>
            ))}
          </div>

          {/* ─── Animated Methodology Pipeline ─── */}
          <div className="mt-24">
            <h3 className="text-center font-heading text-2xl font-bold text-secondary sm:text-3xl">
              How our agents work
            </h3>
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted">
              Six autonomous agents. One continuous loop. Built for your brand.
            </p>

            <div className="mt-12">
              <MethodologyPipelineWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — Visual cards with animated micro-illustrations
      ═══════════════════════════════════════════ */}
      <section id="services" className="relative px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              What we deploy
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-secondary sm:text-5xl">
              Domain-specific AI agents
              <br />
              <span className="gradient-text-subtle">for your brand.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1: Discovery Agent with animated bar chart */}
            <div className="bento-card rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-lg border border-teal/20 bg-teal/5 p-3">
                  <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                {/* Mini animated bar chart */}
                <div className="flex items-end gap-1">
                  {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 rounded-t bg-teal/30 animate-bar-rise"
                      style={{
                        height: `${h * 0.4}px`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-secondary">AI Discovery Agent</h3>
              <p className="mt-2 text-sm text-muted-light leading-relaxed">
                Monitors trends across Google, Reddit, and Quora in your domain. Generates 50K+ conversational queries.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Google Trends", "Reddit", "Quora", "50K+ Queries"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border-light bg-surface-elevated px-3 py-1 text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Critic Agent with radial gauge */}
            <div className="bento-card rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-lg border border-accent/20 bg-accent/5 p-3">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                {/* Radial gauge */}
                <svg className="h-14 w-14" viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="24" fill="none" stroke="#1E293B" strokeWidth="4" />
                  <circle
                    cx="30" cy="30" r="24" fill="none"
                    stroke="url(#gaugeGrad)" strokeWidth="4"
                    strokeDasharray="150.8" strokeDashoffset="45"
                    strokeLinecap="round"
                    className="animate-gauge-fill"
                    transform="rotate(-90 30 30)"
                  />
                  <defs>
                    <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#FBBF24" />
                    </linearGradient>
                  </defs>
                  <text x="30" y="33" textAnchor="middle" className="fill-accent text-[11px] font-bold">87%</text>
                </svg>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-secondary">Domain Critic Agent</h3>
              <p className="mt-2 text-sm text-muted-light leading-relaxed">
                Fine-tuned exclusively for your brand. Learns from millions of real AI interactions in your vertical.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Brand-Tuned", "Pattern Learning", "Visibility Scoring"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border-light bg-surface-elevated px-3 py-1 text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Content Optimization with code-like animation */}
            <div className="bento-card rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-lg border border-green/20 bg-green/5 p-3">
                  <svg className="h-6 w-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                {/* Mini diff visualization */}
                <div className="rounded-lg border border-border-light bg-surface-elevated p-2 font-mono text-[9px]">
                  <div className="text-red-400/60 line-through">- generic description...</div>
                  <div className="text-green/80">+ optimized for LLMs</div>
                </div>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-secondary">Content Optimization Agent</h3>
              <p className="mt-2 text-sm text-muted-light leading-relaxed">
                Rewrites product pages using critic-guided strategies. Sandbox-tested, client-approved.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Auto-Rewrite", "Sandbox QA", "Client Approval"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border-light bg-surface-elevated px-3 py-1 text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 4: Continuous Monitoring with live pulse */}
            <div className="bento-card rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-lg border border-teal/20 bg-teal/5 p-3">
                  <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                </div>
                {/* Live heartbeat line */}
                <svg className="h-10 w-24" viewBox="0 0 100 40" fill="none">
                  <path
                    d="M0 20 L15 20 L20 8 L25 32 L30 15 L35 25 L40 20 L55 20 L60 8 L65 32 L70 15 L75 25 L80 20 L100 20"
                    stroke="rgba(6, 182, 212, 0.5)"
                    strokeWidth="1.5"
                    fill="none"
                    className="animate-heartbeat-line"
                  />
                </svg>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-secondary">Continuous Monitoring Agent</h3>
              <p className="mt-2 text-sm text-muted-light leading-relaxed">
                Daily visibility scans across ChatGPT, Perplexity, Gemini. RL-powered adaptation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Daily Scans", "Reinforcement Learning", "Multi-Engine"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border-light bg-surface-elevated px-3 py-1 text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════════
          TEAM
      ═══════════════════════════════════════════ */}
      <section id="team" className="relative px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our team
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-secondary sm:text-5xl lg:text-6xl">
              Built by researchers
              <br />
              <span className="gradient-text-subtle">who&apos;ve done this at scale.</span>
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { Logo: DeepMindLogo, label: "Experience" },
              { Logo: StanfordLogo, label: "Education" },
              { Logo: MITLogo, label: "Education" },
              { Logo: NYULogo, label: "Education" },
            ].map(({ Logo, label }) => (
              <div key={label + Logo.name} className="group text-center">
                <div className="mx-auto flex h-20 w-full items-center justify-center rounded-xl border border-border bg-surface transition-all group-hover:border-accent/20 group-hover:bg-surface-light">
                  <Logo className="h-7 w-auto text-muted-light transition-all group-hover:text-secondary" />
                </div>
                <span className="mt-3 block text-xs uppercase tracking-widest text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BACKED BY
      ═══════════════════════════════════════════ */}
      <section id="backed-by" className="relative overflow-hidden px-6 py-20 lg:py-28">
        <div className="glow-orb glow-orb-amber absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-10" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-surface p-12 text-center md:p-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Backed by
            </span>
            <div className="mx-auto mt-8 flex justify-center">
              <AntlerLogo className="h-10 w-auto text-secondary" />
            </div>
            <p className="mt-6 text-sm text-muted">
              New York City
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA / CONTACT
      ═══════════════════════════════════════════ */}
      <section id="contact" className="relative overflow-hidden px-6 py-28 lg:py-36">
        <div className="glow-orb glow-orb-amber absolute left-1/4 bottom-0 h-[400px] w-[400px] opacity-15 animate-float" />
        <div className="glow-orb glow-orb-teal absolute right-1/4 top-0 h-[300px] w-[300px] opacity-10 animate-float" style={{ animationDelay: "-4s" }} />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
            Ready to own
            <br />
            <span className="gradient-text">AI search results?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-base text-muted-light leading-relaxed">
            Tell us about your products. We&apos;ll show you exactly how much
            visibility you&apos;re leaving on the table.
          </p>

          <div className="mt-12">
            <a
              href="mailto:shubham@sarvahq.com"
              className="animate-pulse-glow group inline-flex items-center gap-3 rounded-xl bg-accent px-10 py-5 text-base font-semibold text-primary transition-all hover:bg-accent-light"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              shubham@sarvahq.com
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

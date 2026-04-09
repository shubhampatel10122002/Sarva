import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UseCaseTabs from "@/components/UseCaseTabs";
import StepHeader from "@/components/methodology/StepHeader";
import MethodologySpine from "@/components/methodology/MethodologySpine";
import SystemMap from "@/components/methodology/SystemMap";
import QueryStream from "@/components/methodology/QueryStream";
import ClusterFormation from "@/components/methodology/ClusterFormation";
import AgentSwarm from "@/components/methodology/AgentSwarm";
import CriticEvolution from "@/components/methodology/CriticEvolution";
import OptimizationLoop from "@/components/methodology/OptimizationLoop";
import DeployFlow from "@/components/methodology/DeployFlow";
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
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — Gradient background with visual elements
      ═══════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* Subtle mesh overlay */}
        <div className="gradient-mesh absolute inset-0" />

        {/* Decorative orbs */}
        <div className="glow-orb glow-orb-blue absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-float" />
        <div className="glow-orb glow-orb-teal absolute bottom-1/4 right-1/4 h-[300px] w-[300px] animate-float" style={{ animationDelay: "-3s" }} />

        {/* Orbiting ring */}
        <div className="orbit-ring absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-60" />

        {/* Grid pattern */}
        <div className="grid-bg absolute inset-0 opacity-40" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-5 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-xs font-medium tracking-wide text-muted">
              Backed by Antler &middot; New York City
            </span>
          </div>

          <h1 className="animate-fade-in-up font-heading text-5xl font-extrabold leading-[1.08] tracking-tight text-secondary sm:text-6xl md:text-7xl lg:text-8xl">
            Make AI search
            <br />
            <span className="gradient-text">find you first.</span>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "0.15s" }}
          >
            Generative Engine Optimization for brands. We restructure and 
            optimize your content so LLMs like ChatGPT recommend, and
            surface your brand/products at the top of every answer.
          </p>

          <div
            className="animate-fade-in-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="animate-pulse-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-dim"
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
              href="#methodology"
              className="rounded-xl border border-border px-8 py-4 text-sm font-semibold text-secondary transition-all hover:border-accent/30 hover:bg-surface"
            >
              See Our Methodology
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
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
                <FootLockerLogo className="h-5 w-auto text-muted logo-item" />
                <PacSunLogo className="h-5 w-auto text-muted logo-item" />
                <ArkosHealthLogo className="h-5 w-auto text-muted logo-item" />
                <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.25em] text-accent/60">
                  Team from
                </span>
                <DeepMindLogo className="h-6 w-auto text-muted logo-item" />
                <StanfordLogo className="h-6 w-auto text-muted logo-item" />
                <MITLogo className="h-5 w-auto text-muted logo-item" />
                <NYULogo className="h-5 w-auto text-muted logo-item" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          USE CASES — Tabbed section
      ═══════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Platform
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-secondary sm:text-5xl">
              How Teams Use Sarva
              <br />
              <span className="gradient-text-subtle">for AI Search</span>
            </h2>
          </div>
          <div className="mt-16">
            <UseCaseTabs />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          METHODOLOGY — Inline (all on one page)
      ═══════════════════════════════════════════ */}
      <section id="methodology" className="relative overflow-hidden">
        <MethodologySpine />

        {/* Overview */}
        <div className="relative px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                Our Methodology
              </span>
              <h2 className="mt-4 font-heading text-4xl font-bold text-secondary sm:text-5xl">
                Eight systems.{" "}
                <span className="gradient-text">One continuous loop.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Eight autonomous agents, one feedback loop. Each step feeds the next —
                the system never stops re-measuring, re-training, re-deploying.
              </p>
            </div>
            <div className="mt-12">
              <SystemMap />
            </div>
          </div>
        </div>

        {/* Step 01 */}
        <div className="relative px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <StepHeader
              index="01"
              title="Query Discovery &amp; Intent Mapping"
              caption="We scan Google Trends, Reddit, Quora, and real-time conversations to generate ~50K conversational queries that mirror how users actually ask — adapting to seasons, events, and micro-trends."
            />
            <QueryStream />
          </div>
        </div>

        {/* Step 02 */}
        <div className="relative px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <StepHeader
              index="02"
              align="center"
              title="Embedding &amp; Query Clustering"
              caption="Queries collapse into 30–50 semantic clusters. Each centroid becomes an optimization target — mathematically optimal coverage."
            />
            <div className="mt-16">
              <ClusterFormation />
            </div>
          </div>
        </div>

        {/* Step 03 */}
        <div className="relative px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              <AgentSwarm />
            </div>
            <div className="lg:order-1">
              <StepHeader
                index="03"
                title="Real-World AI Visibility Measurement"
                caption="Thousands of parallel agents interact directly with live AI interfaces — not APIs — replicating real user behavior. We measure brand mentions, ranking, and response structure across ChatGPT, Perplexity, and Gemini."
              />
            </div>
          </div>
        </div>

        {/* Step 04 */}
        <div className="relative px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <StepHeader
              index="04"
              align="center"
              title="Domain-Specific Critic Model"
              caption="A model fine-tuned on your vertical's AI interactions. It learns what content structures AI systems prefer — and improves as it keeps measuring."
            />
            <div className="mt-16">
              <CriticEvolution />
            </div>
          </div>
        </div>

        {/* Step 05 */}
        <div className="relative px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <StepHeader
              index="05"
              align="center"
              highlight="Core differentiator"
              title="Continuous Learning &amp; Adaptation"
              caption="Click any node. The loop never stops — it just keeps re-measuring, re-training, and re-deploying as user intent and AI platforms evolve."
            />
            <div className="mt-16">
              <OptimizationLoop />
            </div>
          </div>
        </div>

        {/* Steps 06–08 */}
        <div className="relative px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <StepHeader
              index="06 — 08"
              title="Optimize, Sandbox, Deploy, Monitor"
              caption="The critic generates new content, every change is sandbox-tested for regressions, approved updates ship, and post-deploy performance feeds back into the loop."
            />
            <div className="mt-12">
              <DeployFlow />
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
                <div className="mx-auto flex h-20 w-full items-center justify-center rounded-xl border border-border bg-white transition-all group-hover:border-accent/20 group-hover:bg-surface">
                  <Logo className="h-7 w-auto text-muted transition-all group-hover:text-secondary" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
            Ready to own
            <br />
            <span className="gradient-text">AI search results?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-base text-muted leading-relaxed">
            Tell us about your brand. We&apos;ll show you exactly how much
            visibility you&apos;re leaving on the table.
          </p>

          <div className="mt-12">
            <a
              href="mailto:shubham@sarvahq.com"
              className="animate-pulse-glow group inline-flex items-center gap-3 rounded-xl bg-accent px-10 py-5 text-base font-semibold text-white transition-all hover:bg-accent-dim"
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

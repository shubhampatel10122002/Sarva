import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FootLockerLogo,
  PacSunLogo,
  ArkosHealthLogo,
  DeepMindLogo,
  StanfordLogo,
  MITLogo,
  NYULogo,
  SilverTechLogo,
} from "@/components/logos";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — Full viewport, cinematic feel
      ═══════════════════════════════════════════ */}
      <section className="noise-overlay grid-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background orbs */}
        <div className="glow-orb glow-orb-blue absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />
        <div className="glow-orb glow-orb-white absolute right-0 top-0 h-[400px] w-[400px]" />
        <div className="glow-orb glow-orb-blue absolute bottom-0 left-0 h-[300px] w-[300px] opacity-50" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border-light bg-surface/60 px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-xs font-medium tracking-wide text-muted-light">
              Backed by SilverTech Ventures &middot; 7 World Trade Center, NYC
            </span>
          </div>

          <h1 className="animate-fade-in-up text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Your operations,
            <br />
            <span className="gradient-text">fully autonomous.</span>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-light sm:text-xl"
            style={{ animationDelay: "0.15s" }}
          >
            We build custom AI agents and autonomous workflows — engineered from
            scratch after deeply understanding your business. Not templates.
            Not off-the-shelf. Built for you.
          </p>

          <div
            className="animate-fade-in-up mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="animate-pulse-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-light"
            >
              Start a Project
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
              href="#how-it-works"
              className="rounded-xl border border-border-light px-8 py-4 text-sm font-semibold text-secondary transition-all hover:border-muted hover:bg-surface-light"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          MARQUEE — Continuous scrolling trust bar
      ═══════════════════════════════════════════ */}
      <section className="relative border-y border-border bg-surface py-6">
        <div className="marquee-container">
          <div className="marquee-track animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  Trusted by
                </span>
                <FootLockerLogo className="h-5 w-auto text-muted-light logo-item" />
                <PacSunLogo className="h-5 w-auto text-muted-light logo-item" />
                <ArkosHealthLogo className="h-5 w-auto text-muted-light logo-item" />
                <span className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] text-muted">
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
          WHAT WE DO — Bento grid (asymmetric)
      ═══════════════════════════════════════════ */}
      <section id="services" className="px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              What we build
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-secondary sm:text-5xl">
              AI that runs your
              <br />
              business operations.
            </h2>
          </div>

          {/* Bento Grid — varying sizes, not repetitive cards */}
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Large card — spans 2 cols */}
            <div className="bento-card rounded-2xl border border-border bg-surface p-10 md:col-span-2 md:row-span-1">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex rounded-lg border border-accent/20 bg-accent/5 p-3">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary">
                    Autonomous AI Agents
                  </h3>
                  <p className="mt-3 max-w-lg text-muted-light leading-relaxed">
                    We design intelligent agents that handle complex business processes
                    end-to-end — customer interactions, data pipelines, decision-making
                    — running 24/7 without human intervention.
                  </p>
                </div>
                <div className="mt-8 flex gap-3">
                  {["NLP", "Computer Vision", "Decision Systems", "Multi-Agent"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-light bg-surface-elevated px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Tall card — spans 2 rows */}
            <div className="bento-card rounded-2xl border border-border bg-surface p-10 md:row-span-2">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex rounded-lg border border-accent/20 bg-accent/5 p-3">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary">
                    Deep Workflow Analysis
                  </h3>
                  <p className="mt-3 text-muted-light leading-relaxed">
                    We don&apos;t start coding on day one. We embed with your team,
                    map every workflow, identify bottlenecks, and understand your
                    operations before designing a solution.
                  </p>
                </div>

                {/* Visual: workflow steps */}
                <div className="mt-8 space-y-4">
                  {["Observe", "Map", "Identify", "Design"].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium text-muted-light">{step}</span>
                      {i < 3 && (
                        <div className="h-px flex-1 bg-gradient-to-r from-border-light to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom left — medium card */}
            <div className="bento-card rounded-2xl border border-border bg-surface p-10">
              <div className="mb-6 inline-flex rounded-lg border border-accent/20 bg-accent/5 p-3">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary">
                Custom Tech Stack
              </h3>
              <p className="mt-3 text-sm text-muted-light leading-relaxed">
                Every project gets a handpicked architecture — frameworks, models,
                infrastructure — chosen specifically for your scale and requirements.
              </p>
            </div>

            {/* Bottom center — medium card */}
            <div className="bento-card rounded-2xl border border-border bg-surface p-10">
              <div className="mb-6 inline-flex rounded-lg border border-accent/20 bg-accent/5 p-3">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary">
                End-to-End Delivery
              </h3>
              <p className="mt-3 text-sm text-muted-light leading-relaxed">
                From scoping to deployment to ongoing optimization. We own the
                entire lifecycle so you get results, not handoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW IT WORKS — Connected timeline
      ═══════════════════════════════════════════ */}
      <section id="how-it-works" className="relative overflow-hidden px-6 py-28 lg:py-36">
        {/* Subtle background accent */}
        <div className="glow-orb glow-orb-blue absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              How it works
            </span>
            <h2 className="mt-4 text-4xl font-bold text-secondary sm:text-5xl">
              From conversation to production.
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

            {[
              {
                step: "01",
                title: "Discovery Call",
                description:
                  "We listen. You walk us through your operations — where things work, where they break, what you wish was automated. No slides, no sales pitch.",
                align: "right" as const,
              },
              {
                step: "02",
                title: "Workflow Deep-Dive",
                description:
                  "Our team maps your end-to-end processes. We identify every decision point, bottleneck, and opportunity for AI automation.",
                align: "left" as const,
              },
              {
                step: "03",
                title: "Custom Build",
                description:
                  "We select the optimal tech stack and build your solution from scratch — custom models, custom integrations, custom everything.",
                align: "right" as const,
              },
              {
                step: "04",
                title: "Deploy & Iterate",
                description:
                  "We deploy into your operations, monitor performance, and continuously improve. Your AI gets smarter as your business evolves.",
                align: "left" as const,
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`relative mb-16 flex items-start gap-8 last:mb-0 md:items-center ${
                  item.align === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-surface-elevated">
                  <span className="text-lg font-bold text-accent">{item.step}</span>
                </div>

                {/* Content */}
                <div
                  className={`max-w-md ${
                    item.align === "left" ? "md:text-right" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden flex-1 md:block" />

                {/* Timeline spacer for alignment */}
                {i === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider mx-auto max-w-4xl" />

      {/* ═══════════════════════════════════════════
          TEAM — Bold statement + credential logos
          (NOT cards — a different visual approach)
      ═══════════════════════════════════════════ */}
      <section id="team" className="px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          {/* Big statement */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Our team
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-secondary sm:text-5xl lg:text-6xl">
              Built by researchers and engineers
              <br />
              <span className="gradient-text-subtle">who&apos;ve done this at scale.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-light leading-relaxed">
              Our team comes from the world&apos;s best AI labs and universities.
              We&apos;ve shipped production AI systems for Fortune 500 companies
              and scaled startups from zero to millions of users.
            </p>
          </div>

          {/* Credential logos — horizontal strip, not cards */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { Logo: DeepMindLogo, label: "Experience" },
              { Logo: StanfordLogo, label: "Education" },
              { Logo: MITLogo, label: "Education" },
              { Logo: NYULogo, label: "Education" },
            ].map(({ Logo, label }) => (
              <div key={label + Logo.name} className="group text-center">
                <div className="mx-auto flex h-20 w-full items-center justify-center rounded-xl border border-border bg-surface transition-all group-hover:border-border-light group-hover:bg-surface-light">
                  <Logo className="h-7 w-auto text-muted-light transition-all group-hover:text-secondary" />
                </div>
                <span className="mt-3 block text-xs uppercase tracking-widest text-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Enterprise experience callout — distinct from above */}
          <div className="mt-16 rounded-2xl border border-border bg-surface-light p-10 md:p-14">
            <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
              <div className="max-w-lg">
                <h3 className="text-2xl font-semibold text-secondary">
                  Shipped AI at enterprise scale.
                </h3>
                <p className="mt-3 text-muted-light leading-relaxed">
                  Our team has built and deployed AI solutions at major enterprises —
                  solving real operational problems, not demos.
                </p>
              </div>
              <div className="flex items-center gap-10">
                <FootLockerLogo className="h-6 w-auto text-muted-light logo-item" />
                <PacSunLogo className="h-6 w-auto text-muted-light logo-item" />
                <ArkosHealthLogo className="h-6 w-auto text-muted-light logo-item" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BACKED BY — Not a generic card, a bold statement
      ═══════════════════════════════════════════ */}
      <section id="backed-by" className="relative overflow-hidden px-6 py-28 lg:py-36">
        <div className="glow-orb glow-orb-blue absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-20" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-surface p-12 text-center md:p-20">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Backed by
            </span>

            <div className="mx-auto mt-8 flex justify-center">
              <SilverTechLogo className="h-10 w-auto text-secondary" />
            </div>

            <div className="mx-auto mt-10 flex max-w-sm flex-col gap-6 sm:flex-row sm:max-w-none sm:justify-center sm:gap-12">
              {[
                { value: "Funding", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { value: "Mentorship", icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" },
                { value: "Office Space", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" },
              ].map((item) => (
                <div key={item.value} className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                  <span className="text-sm font-medium text-secondary">{item.value}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted">
              7 World Trade Center, New York City
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA / CONTACT — Full-width, dramatic
      ═══════════════════════════════════════════ */}
      <section id="contact" className="relative overflow-hidden px-6 py-28 lg:py-36">
        <div className="glow-orb glow-orb-blue absolute left-1/4 bottom-0 h-[400px] w-[400px] opacity-20" />
        <div className="glow-orb glow-orb-blue absolute right-1/4 top-0 h-[300px] w-[300px] opacity-15" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
            Ready to automate
            <br />
            <span className="gradient-text">what matters?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-light leading-relaxed">
            Tell us about the workflows you want to transform. We&apos;ll
            show you exactly how we&apos;d build the solution.
          </p>

          <div className="mt-12">
            <a
              href="mailto:shubham@sarvahq.com"
              className="animate-pulse-glow group inline-flex items-center gap-3 rounded-xl bg-accent px-10 py-5 text-base font-semibold text-white transition-all hover:bg-accent-light"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              shubham@sarvahq.com
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="mt-8 text-sm text-muted">
            Or find us at 7 World Trade Center, New York, NY
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

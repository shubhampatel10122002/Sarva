import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingParticlesWrapper from "@/components/FloatingParticlesWrapper";
import StepHeader from "@/components/methodology/StepHeader";
import MethodologySpine from "@/components/methodology/MethodologySpine";
import SystemMap from "@/components/methodology/SystemMap";
import QueryStream from "@/components/methodology/QueryStream";
import ClusterFormation from "@/components/methodology/ClusterFormation";
import AgentSwarm from "@/components/methodology/AgentSwarm";
import CriticEvolution from "@/components/methodology/CriticEvolution";
import OptimizationLoop from "@/components/methodology/OptimizationLoop";
import DeployFlow from "@/components/methodology/DeployFlow";

export const metadata: Metadata = {
  title: "Methodology — How SarvaHQ Makes AI Recommend Your Brand",
  description:
    "Eight engineered systems in one continuous loop. How we discover, cluster, measure, train, and adapt content for generative search.",
};

export default function MethodologyPage() {
  return (
    <>
      <FloatingParticlesWrapper />
      <Navbar />

      <main className="relative overflow-hidden">
        <MethodologySpine />

        {/* ─── HERO ─── */}
        <section className="noise-overlay grid-bg relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-32">
          <div className="gradient-mesh absolute inset-0" />
          <div className="glow-orb glow-orb-blue absolute right-0 top-1/3 h-[600px] w-[600px] opacity-70 animate-float" />
          <div className="glow-orb glow-orb-teal absolute bottom-0 left-10 h-[320px] w-[320px] opacity-40 animate-float" style={{ animationDelay: "-3s" }} />

          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-border-light bg-surface/60 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-light">
                Methodology
              </span>
            </div>

            <h1 className="animate-fade-in-up mt-8 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Eight systems.
              <br />
              <span className="gradient-text">One continuous loop.</span>
            </h1>

            <p
              className="animate-fade-in-up mt-8 max-w-2xl text-base leading-relaxed text-muted-light sm:text-lg"
              style={{ animationDelay: "0.15s" }}
            >
              How we map every query space an LLM can reach — and rebuild your content to live inside it.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
        </section>

        {/* ─── OVERVIEW ─── */}
        <section className="relative px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                System Overview
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-light sm:text-base">
                Eight autonomous agents, one feedback loop. Each step feeds the next —
                the system never stops re-measuring, re-training, re-deploying.
              </p>
            </div>
            <div className="mt-12">
              <SystemMap />
            </div>
          </div>
        </section>

        {/* ─── STEP 01 — DISCOVERY ─── */}
        <section className="relative px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <StepHeader
              index="01"
              title="Query Discovery &amp; Intent Mapping"
              caption="We scan Google Trends, Reddit, Quora, and real-time conversations to generate ~50K conversational queries that mirror how users actually ask — adapting to seasons, events, and micro-trends."
            />
            <QueryStream />
          </div>
        </section>

        {/* ─── STEP 02 — CLUSTERING (BIG VIS #1) ─── */}
        <section className="relative px-6 py-24 lg:py-32">
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
        </section>

        {/* ─── STEP 03 — MEASUREMENT ─── */}
        <section className="relative px-6 py-24 lg:py-32">
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
        </section>

        {/* ─── STEP 04 — CRITIC (BIG VIS #3) ─── */}
        <section className="relative px-6 py-24 lg:py-32">
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
        </section>

        {/* ─── STEP 05 — LOOP (BIG VIS #2 — core differentiator) ─── */}
        <section className="relative px-6 py-24 lg:py-32">
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
        </section>

        {/* ─── STEPS 06–08 — DEPLOY FLOW ─── */}
        <section className="relative px-6 py-24 lg:py-32">
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
        </section>

        {/* ─── CTA ─── */}
        <section className="relative overflow-hidden px-6 py-28 lg:py-36">
          <div className="glow-orb glow-orb-blue absolute left-1/4 bottom-0 h-[400px] w-[400px] opacity-60 animate-float" />
          <div className="glow-orb glow-orb-teal absolute right-1/4 top-0 h-[300px] w-[300px] opacity-40 animate-float" style={{ animationDelay: "-4s" }} />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold text-secondary sm:text-5xl">
              Want this system
              <br />
              <span className="gradient-text">running on your catalog?</span>
            </h2>
            <div className="mt-12">
              <a
                href="mailto:shubham@sarvahq.com"
                className="animate-pulse-glow group inline-flex items-center gap-3 rounded-xl bg-accent px-10 py-5 text-base font-semibold text-primary transition-all hover:bg-accent-light"
              >
                shubham@sarvahq.com
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

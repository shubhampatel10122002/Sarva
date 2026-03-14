import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI Agent Development",
    description:
      "We design and build intelligent AI agents that autonomously handle complex business processes — from customer interactions to data pipelines.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Autonomous Workflows",
    description:
      "We map your end-to-end operations, identify bottlenecks, and deploy autonomous AI workflows that run 24/7 without human intervention.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Custom Software Engineering",
    description:
      "Every solution is built from scratch — custom tech stack selection, architecture design, and implementation tailored to your unique requirements.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Workflow Analysis & Scoping",
    description:
      "We deeply understand your current operations before writing a single line of code. Our scoping process ensures every solution fits like a glove.",
  },
];

const team = [
  {
    name: "Google DeepMind",
    type: "Experience" as const,
    description: "Team members with deep AI/ML expertise from Google DeepMind, bringing cutting-edge research into production systems.",
  },
  {
    name: "Stanford University",
    type: "Education" as const,
    description: "Academic foundation from Stanford — one of the world's leading institutions in AI and computer science research.",
  },
  {
    name: "MIT",
    type: "Education" as const,
    description: "Engineering excellence from MIT, combining rigorous technical training with innovative problem-solving.",
  },
  {
    name: "NYU",
    type: "Education" as const,
    description: "Research-driven approach from NYU, with expertise in applied machine learning and data science.",
  },
  {
    name: "Enterprise Startups",
    type: "Experience" as const,
    description: "Hands-on experience shipping AI solutions at scale for major enterprises including Foot Locker, PacSun, and Arkos Health.",
  },
];

const enterprises = [
  { name: "Foot Locker" },
  { name: "PacSun" },
  { name: "Arkos Health" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your current operations, understand your end-to-end workflow, and identify where AI can create the most impact.",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "We scope out a custom solution — selecting the ideal tech stack, architecture, and AI models tailored to your specific needs.",
  },
  {
    step: "03",
    title: "Build & Deploy",
    description: "Our team builds your autonomous AI software from the ground up, with rigorous testing and seamless deployment into your operations.",
  },
  {
    step: "04",
    title: "Iterate & Scale",
    description: "We continuously optimize performance, add capabilities, and scale the solution as your business grows.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="grid-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        {/* Radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in mb-6 inline-block rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
            Backed by SilverTech Ventures
          </div>

          <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We Build{" "}
            <span className="gradient-text">Autonomous AI</span>
            <br />
            Software for Your Business
          </h1>

          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl" style={{ animationDelay: "0.2s" }}>
            Custom AI agents and intelligent workflows — engineered from scratch
            to transform your operations. Built by a team from Google DeepMind,
            Stanford, and MIT.
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="animate-pulse-glow rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-light"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-secondary transition-all hover:border-muted hover:bg-surface"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="What We Do"
            title="End-to-End AI Solutions"
            description="We don't sell off-the-shelf products. Every solution is custom-built after deeply understanding your operations."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:bg-surface-light"
              >
                <div className="mb-4 inline-flex rounded-xl border border-border bg-primary p-3 text-accent transition-colors group-hover:border-accent/30">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-secondary">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="border-y border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="How We Work"
            title="Our Process"
            description="A systematic approach to delivering AI solutions that actually work in production."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <span className="text-6xl font-black text-accent/10">
                  {item.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our Team"
            title="World-Class Talent"
            description="Our team brings together deep AI research expertise and enterprise-scale engineering experience."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30"
              >
                <span className="inline-block rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                  {member.type}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-secondary">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enterprise logos */}
          <div className="mt-16 text-center">
            <p className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">
              Trusted by Leading Enterprises
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {enterprises.map((enterprise) => (
                <span
                  key={enterprise.name}
                  className="text-2xl font-bold text-muted/40 transition-colors hover:text-muted/70"
                >
                  {enterprise.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Backed By ── */}
      <section id="backed-by" className="border-y border-border px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            label="Backed By"
            title="SilverTech Ventures"
            description="We are proud to be part of the SilverTech Venture Hub."
          />

          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-10">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/5">
              <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <p className="text-lg text-muted leading-relaxed">
              SilverTech Ventures provides us with{" "}
              <span className="text-secondary font-medium">funding</span>,{" "}
              <span className="text-secondary font-medium">mentorship</span>, and{" "}
              <span className="text-secondary font-medium">office space</span> at their
              venture hub located at{" "}
              <span className="text-secondary font-medium">
                7 World Trade Center, New York City
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            label="Get Started"
            title="Let's Build Something Extraordinary"
            description="Tell us about your business challenges and we'll show you how autonomous AI can transform your operations."
          />

          <div className="mx-auto max-w-lg">
            <a
              href="mailto:shubham@sarvahq.com"
              className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-surface px-10 py-5 transition-all hover:border-accent/30 hover:bg-surface-light"
            >
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-lg font-medium text-secondary">
                shubham@sarvahq.com
              </span>
            </a>

            <p className="mt-6 text-sm text-muted">
              7 World Trade Center, New York, NY &mdash; Part of the SilverTech Venture Hub
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

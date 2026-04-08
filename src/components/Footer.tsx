export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <span className="font-heading text-lg font-bold text-secondary">
              sarva<span className="text-accent">hq</span>
            </span>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Generative Engine Optimization for e-commerce.
              Make LLMs find your products first. Based in New York City.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Navigate
              </span>
              <div className="mt-4 flex flex-col gap-3">
                <a href="#technology" className="text-sm text-muted-light transition-colors hover:text-accent">
                  Technology
                </a>
                <a href="#services" className="text-sm text-muted-light transition-colors hover:text-accent">
                  Services
                </a>
                <a href="#team" className="text-sm text-muted-light transition-colors hover:text-accent">
                  Team
                </a>
              </div>
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Connect
              </span>
              <div className="mt-4 flex flex-col gap-3">
                <a href="mailto:shubham@sarvahq.com" className="text-sm text-muted-light transition-colors hover:text-accent">
                  shubham@sarvahq.com
                </a>
                <span className="text-sm text-muted-light">
                  7 World Trade Center
                </span>
                <span className="text-sm text-muted-light">
                  New York, NY
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <span className="text-xs text-muted">
            &copy; {new Date().getFullYear()} SarvaHQ. All rights reserved.
          </span>
          <span className="text-xs text-muted">
            Backed by Antler
          </span>
        </div>
      </div>
    </footer>
  );
}

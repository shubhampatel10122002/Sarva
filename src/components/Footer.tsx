export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-lg font-bold text-secondary">
              Sarva<span className="text-accent">HQ</span>
            </span>
            <p className="mt-1 text-sm text-muted">
              Building autonomous AI software for enterprise.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm text-muted transition-colors hover:text-secondary">
              Services
            </a>
            <a href="#team" className="text-sm text-muted transition-colors hover:text-secondary">
              Team
            </a>
            <a href="#contact" className="text-sm text-muted transition-colors hover:text-secondary">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} SarvaHQ. All rights reserved. &mdash;{" "}
          <span className="text-muted/70">
            7 World Trade Center, New York, NY
          </span>
        </div>
      </div>
    </footer>
  );
}

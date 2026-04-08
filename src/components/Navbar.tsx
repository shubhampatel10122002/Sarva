"use client";

import { useState } from "react";

const navLinks = [
  { label: "Technology", href: "#technology" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-primary/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-xl font-bold tracking-tight text-secondary">
          sarva<span className="text-accent">hq</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-accent px-5 py-2 text-[13px] font-medium text-primary transition-all hover:bg-accent-light"
          >
            Get Your GEO Audit
          </a>
        </div>

        <button
          className="text-secondary md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/5 bg-primary/95 px-6 py-6 backdrop-blur-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-muted-light transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-primary"
          >
            Get Your GEO Audit
          </a>
        </div>
      )}
    </nav>
  );
}

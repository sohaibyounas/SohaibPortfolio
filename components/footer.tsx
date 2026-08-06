"use client";

import * as React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sohaib-younas",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/sohaib-younas",
    icon: Github,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:sohaibyounas24@gmail.com",
    icon: Mail,
    external: false,
  },
];

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background" aria-label="Site footer">
      <div className="container mx-auto py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mb-4 block font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase hover:text-accent transition-colors"
            >
              SOHAIB<span className="text-accent">.</span>DEV
            </button>
            <p className="max-w-xs text-sm text-muted-foreground">
              Frontend Developer building modern digital experiences with React,
              Next.js and TypeScript.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-foreground/20 hover:text-foreground"
                >
                  <link.icon size={15} />
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#84cc16] px-3 py-1 text-xs font-semibold text-black opacity-0 transition-all duration-300 group-hover:-top-11 group-hover:opacity-100">
                    {link.label}
                  </span>
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 items-center gap-2 rounded-lg border border-border px-3 font-mono text-xs text-muted-foreground transition-all hover:border-foreground/20 hover:text-foreground"
              >
                <Download size={12} /> Resume
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Navigation
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground link-underline"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Status */}
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Status
            </p>
            <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-2 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent">
                Available for work
              </span>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Based in Pakistan
              <br />
              Open to remote opportunities
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground hover:text-white">
            © 2026 Sohaib Younas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

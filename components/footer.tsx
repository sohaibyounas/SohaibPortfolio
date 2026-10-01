"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Linkedin, Mail, Download } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { smoothScrollTo } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sohaibyounas/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/sohaibyounas",
    icon: GithubIcon,
    external: true,
  },
  {
    label: "Email",
    href: "#contact",
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
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (href: string) => {
    if (pathname !== "/") {
      if (href === "#top") {
        router.push("/");
      } else {
        router.push("/" + href);
      }
      return;
    }
    smoothScrollTo(href);
  };

  return (
    <footer
      className="border-t border-border bg-background"
      aria-label="Site footer"
    >
      <div className="container mx-auto py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (pathname !== "/") {
                  router.push("/");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="mb-4 block font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase hover:text-accent transition-colors"
            >
              SOHAIB<span className="text-accent">.</span>DEV
            </motion.button>
            <p className="max-w-xs text-sm text-foreground">
              Frontend Developer building modern digital experiences with React,
              Next.js and TypeScript.
            </p>

            {/* Social Links with smooth hover animations */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={
                    !link.external
                      ? (e) => {
                          e.preventDefault();
                          scrollTo(link.href);
                        }
                      : undefined
                  }
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/50 text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_4px_12px_rgba(var(--accent-rgb),0.18)]"
                >
                  <div className="transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3">
                    <link.icon size={15} />
                  </div>

                  {/* Tooltip matching theme palette with spring-like appearance */}
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground opacity-0 scale-90 translate-y-1 shadow-md transition-all duration-200 hidden sm:block group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
                    {link.label}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-accent" />
                  </span>
                </motion.a>
              ))}

              {/* Resume CTA */}
              <motion.a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group flex h-9 items-center gap-2 rounded-lg border border-border bg-card/50 px-3 font-mono text-xs text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_4px_12px_rgba(var(--accent-rgb),0.18)]"
              >
                <Download
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>

          {/* Navigation with hover slide & glowing dot animation */}
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-foreground uppercase">
              Navigation
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  className="group flex items-center gap-2 w-fit text-sm text-foreground/80 hover:text-accent transition-colors py-0.5 text-left"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 -translate-x-1.5 scale-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-200 shrink-0" />
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Status */}
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-foreground uppercase">
              Status
            </p>
            <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-2 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent">
                Available for work
              </span>
            </div>
            <p className="mt-4 font-mono text-xs text-foreground">
              Based in Pakistan
              <br />
              Open to remote opportunities
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-6 sm:pt-8">
          <p className="font-mono text-xs text-foreground hover:text-white text-center">
            © {new Date().getFullYear()} Sohaib Younas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";

const CATEGORIES = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", desc: "Primary library for building UI" },
      { name: "Next.js", desc: "Full-stack React framework" },
      { name: "JavaScript", desc: "3+ years production experience" },
      { name: "TypeScript", desc: "Type-safe application development" },
      { name: "HTML & CSS", desc: "Semantic, accessible markup" },
      { name: "Tailwind CSS", desc: "Utility-first styling system" },
    ],
  },
  {
    title: "UI / UX",
    items: [
      { name: "Responsive Design", desc: "Mobile-first approach" },
      { name: "Component Systems", desc: "Reusable, scalable UI" },
      { name: "Accessibility", desc: "WCAG best practices" },
      { name: "Animations", desc: "Framer Motion & CSS" },
      { name: "Design Systems", desc: "Token-based design" },
    ],
  },
  {
    title: "Data / APIs",
    items: [
      { name: "REST APIs", desc: "Integration & consumption" },
      { name: "Axios", desc: "HTTP client" },
      { name: "React Query", desc: "Server state management" },
      { name: "Authentication", desc: "JWT & session-based auth" },
      { name: "Zod", desc: "Schema validation" },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "Git & GitHub", desc: "Version control & collaboration" },
      { name: "VS Code", desc: "Primary IDE" },
      { name: "npm", desc: "Package management" },
      { name: "Vercel", desc: "Deployment & hosting" },
      { name: "ESLint", desc: "Code quality" },
    ],
  },
];

function TechBadge({ name, desc }: { name: string; desc: string }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="relative">
      <motion.button
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="relative w-full rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-left font-mono text-xs text-muted-foreground transition-all hover:border-foreground/20 hover:text-foreground"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.button>

      {/* Tooltip */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? -4 : 0 }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none absolute -top-10 left-1/2 z-20 -translate-x-1/2 max-w-[220px] text-center rounded-md border border-border bg-card px-2.5 py-1.5 text-xs text-muted-foreground shadow-lg hidden sm:block"
      >
        {desc}
        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-card" />
      </motion.div>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="stack"
      className="border-b border-border bg-background py-16 sm:py-24 lg:py-32"
      aria-labelledby="stack-heading"
    >
      <div className="container mx-auto">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Tech Stack
          </p>
          <h2
            id="stack-heading"
            className="mb-10 sm:mb-16 font-display text-display-lg font-bold text-foreground"
          >
            Tools I use to{" "}
            <br className="hidden sm:inline" />
            <span className="text-muted-foreground">build products.</span>
          </h2>
        </SectionReveal>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <SectionReveal key={cat.title} delay={i * 0.08}>
              <div>
                <h3 className="mb-4 font-mono text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {cat.items.map((item) => (
                    <TechBadge key={item.name} name={item.name} desc={item.desc} />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

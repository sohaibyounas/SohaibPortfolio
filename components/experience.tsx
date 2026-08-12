"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const EXPERIENCES = [
  {
    id: "drudots",
    role: "React Developer",
    company: "Drudots Technologies",
    duration: "2025 — Present",
    type: "Full-time",
    description:
      "Building and maintaining production-ready React applications, collaborating with design and backend teams to deliver scalable frontend solutions.",
    responsibilities: [
      "Developed responsive user interfaces using React.js and Tailwind CSS",
      "Integrated REST APIs and handled complex state management",
      "Built reusable component libraries following design system principles",
      "Optimized application performance and load times",
      "Collaborated in agile sprints with cross-functional teams",
    ],
    tech: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "REST APIs", "Git", "Redux Toolkit"],
    current: true,
  },
  {
    id: "freelance",
    role: "Frontend Developer",
    company: "Freelance",
    duration: "2022 — 2024",
    type: "Contract",
    description:
      "Delivered bespoke web applications and landing pages for clients across various industries, focusing on performance and user experience.",
    responsibilities: [
      "Designed and developed custom web interfaces from Figma designs",
      "Built responsive layouts with HTML, CSS and JavaScript",
      "Delivered client projects on schedule with iterative feedback",
      "Managed client communications and technical requirements",
    ],
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design"],
    current: false,
  },
];

export function Experience() {
  const [activeId, setActiveId] = React.useState<string | null>("drudots");

  return (
    <section
      id="experience"
      className="border-b border-border bg-background py-16 sm:py-24 lg:py-32 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="mb-8 sm:mb-16 font-display text-display-lg font-bold text-foreground"
          >
            Where I&apos;ve worked.
          </h2>
        </SectionReveal>

        <div className="grid gap-6 sm:gap-12 lg:grid-cols-12">
          {/* Timeline column */}
          <div className="relative hidden lg:col-span-1 lg:block">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
          </div>

          {/* Experience list */}
          <div className="space-y-4 lg:col-span-11">
            {EXPERIENCES.map((exp, i) => (
              <SectionReveal key={exp.id} delay={i * 0.1}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[2.75rem] top-6 hidden h-3 w-3 rounded-full border-2 border-background ring-2 ring-border lg:block"
                    style={{ backgroundColor: exp.current ? "hsl(var(--accent))" : "hsl(var(--border))" }}
                  />

                  <button
                    onClick={() =>
                      setActiveId(activeId === exp.id ? null : exp.id)
                    }
                    className="group w-full rounded-xl border border-border bg-card p-4 sm:p-6 text-left transition-all hover:border-foreground/20"
                    aria-expanded={activeId === exp.id}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent border border-accent/20">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              Current
                            </span>
                          )}
                          <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                            {exp.type}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-3">
                          <span className="text-sm font-medium text-muted-foreground">
                            {exp.company}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: activeId === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown
                          size={18}
                          className="mt-1 shrink-0 text-muted-foreground"
                        />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {activeId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 border-t border-border pt-5">
                            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                              {exp.description}
                            </p>

                            <ul className="mb-5 space-y-2">
                              {exp.responsibilities.map((r, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                  {r}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

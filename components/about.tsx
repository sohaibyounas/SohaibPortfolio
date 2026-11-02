"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";

const STATS = [
  { value: "3+", label: "Years Frontend" },
  { value: "React / Next.js", label: "Frontend" },
  { value: "Node / Express", label: "Backend" },
  { value: "MongoDB", label: "Database" },
  { value: "REST", label: "API Design" },
  { value: "Production", label: "Applications" },
];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border bg-background py-16 sm:py-24 lg:py-32 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto">
        <div className="grid gap-8 sm:gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: editorial heading */}
          <div className="lg:col-span-5">
            <SectionReveal>
              <p className="mb-4 sm:mb-6 font-mono text-xs tracking-[0.2em] text-foreground uppercase">
                About
              </p>
              <h2
                id="about-heading"
                className="font-display text-display-lg font-bold leading-tight text-foreground"
              >
                More than just <br className="hidden sm:inline" />
                <span className="text-muted-foreground">
                  shipping screens.
                </span>
              </h2>
            </SectionReveal>
          </div>

          {/* Right: prose + stats */}
          <div className="lg:col-span-7">
            <SectionReveal delay={0.15}>
              <p className="mb-4 sm:mb-6 text-sm leading-relaxed text-foreground sm:text-base md:text-lg">
                I&apos;m a full stack developer with 3+ years of frontend
                experience (React, Next.js) and hands-on backend work with
                Node.js, Express and MongoDB — focused on turning complex
                product requirements into fast, accessible and reliable web
                applications.
              </p>
              <p className="text-sm leading-relaxed text-foreground sm:text-base md:text-lg">
                On the frontend I build responsive interfaces with React and
                Next.js; on the backend I design REST APIs with Node.js and
                Express, model data in MongoDB and wire it together with
                Next.js API routes and Server Actions. My approach is to treat
                every feature as a product decision—not just a coding task.
              </p>
            </SectionReveal>

            {/* Stats grid */}
            <SectionReveal delay={0.3}>
              <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background p-3.5 sm:p-5 transition-colors hover:bg-muted"
                  >
                    <p className="font-display text-sm sm:text-lg font-semibold text-foreground truncate">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] sm:text-xs text-foreground truncate">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

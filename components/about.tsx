"use client";

import * as React from "react";
import { SectionReveal } from "@/components/section-reveal";

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "React / Next.js", label: "Primary Stack" },
  { value: "Production", label: "Applications" },
  { value: "API", label: "Integration" },
  { value: "Responsive", label: "UI Systems" },
  { value: "Component", label: "Architecture" },
];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border bg-background py-16 sm:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto">
        <div className="grid gap-8 sm:gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left: editorial heading */}
          <div className="lg:col-span-5">
            <SectionReveal>
              <p className="mb-4 sm:mb-6 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                About
              </p>
              <h2
                id="about-heading"
                className="font-display text-display-lg font-bold leading-tight text-foreground"
              >
                More than just{" "}
                <br className="hidden sm:inline" />
                <span className="text-muted-foreground">
                  writing components.
                </span>
              </h2>
            </SectionReveal>
          </div>

          {/* Right: prose + stats */}
          <div className="lg:col-span-7">
            <SectionReveal delay={0.15}>
              <p className="mb-4 sm:mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                I&apos;m a frontend developer focused on turning complex product
                requirements into fast, accessible and intuitive web
                experiences.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                I build responsive interfaces that balance product requirements,
                performance and maintainable frontend architecture. My approach
                is to treat every component as a product decision—not just a
                coding task.
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
                    <p className="mt-0.5 font-mono text-[10px] sm:text-xs text-muted-foreground truncate">
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

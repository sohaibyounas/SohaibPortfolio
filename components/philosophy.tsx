"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";

const PRINCIPLES = [
  {
    number: "01",
    title: "Performance",
    description:
      "Fast interfaces through optimized rendering, code splitting and lazy loading. Speed is a feature.",
  },
  {
    number: "02",
    title: "Usability",
    description:
      "Interfaces should feel natural and intuitive. Good UX is invisible—users never have to think about how to use it.",
  },
  {
    number: "03",
    title: "Scalability",
    description:
      "Components should remain maintainable as products grow. Architecture decisions today determine velocity tomorrow.",
  },
  {
    number: "04",
    title: "Detail",
    description:
      "Small interactions create memorable experiences. The difference between good and great is in the micro-details.",
  },
];

function PrincipleCard({
  principle,
  index,
}: {
  principle: (typeof PRINCIPLES)[0];
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group border-l-2 border-border pl-5 sm:pl-8 py-2 transition-all hover:border-accent"
    >
      <span className="block font-mono text-4xl sm:text-5xl font-bold text-border transition-colors group-hover:text-accent/40 mb-3 sm:mb-4 leading-none">
        {principle.number}
      </span>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
        {principle.title}
      </h3>
      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
        {principle.description}
      </p>
    </motion.div>
  );
}

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="border-b border-border bg-background py-16 sm:py-24 lg:py-32 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="philosophy-heading"
    >
      <div className="container mx-auto">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Engineering Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="mb-10 sm:mb-16 max-w-2xl font-display text-display-lg font-bold text-foreground"
          >
            Good frontend isn&apos;t just{" "}
            <br className="hidden sm:inline" />
            <span className="text-muted-foreground">about looking good.</span>
          </h2>
        </SectionReveal>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((principle, i) => (
            <PrincipleCard key={principle.number} principle={principle} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

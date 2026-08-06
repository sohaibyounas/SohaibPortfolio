"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";

const METRICS = [
  { value: 3, suffix: "+", label: "Years Experience", description: "Building production web applications" },
  { value: 20, suffix: "+", label: "Projects & Features", description: "Shipped across multiple products" },
  { value: 100, suffix: "%", label: "Responsive", description: "Every interface I build is mobile-first" },
  { value: 24, suffix: "/7", label: "Learning", description: "Continuously improving and growing" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section
      className="border-b border-border bg-background py-24 lg:py-32"
      aria-label="Key metrics"
    >
      <div className="container mx-auto">
        <SectionReveal>
          <p className="mb-12 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            By the numbers
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <SectionReveal key={metric.label} delay={i * 0.1}>
              <div className="group bg-background p-8 transition-colors hover:bg-muted lg:p-12">
                <p className="font-display text-display-xl font-bold text-foreground">
                  <CountUp target={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-2 font-display text-sm font-semibold text-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

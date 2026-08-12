"use client";

import * as React from "react";
import { motion } from "framer-motion";

const TECH_ITEMS = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "Node.js",
  "Zod",
  "Framer Motion",
  "Vercel",
  "React Query",
];

function TechItem({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-6">
      <span className="font-display text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
        {name}
      </span>
      <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
    </div>
  );
}

export function TechMarquee() {
  const doubled = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section id="marquee" className="border-y border-border bg-background py-10 sm:py-16">
      <div className="container mx-auto mb-6 sm:mb-10">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Focused on building products where performance, usability and
          engineering quality meet.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-6 whitespace-nowrap">
            {doubled.map((item, i) => (
              <TechItem key={`a-${i}`} name={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

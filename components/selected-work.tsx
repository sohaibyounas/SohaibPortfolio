"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const PROJECTS = [
  {
    slug: "mixxer",
    index: "01",
    name: "Mixxer",
    category: "Web Application",
    description:
      "A production-focused web application with modern responsive interfaces and API-driven functionality. Built with emphasis on component architecture and user experience.",
    tech: ["React.js", "JavaScript", "REST APIs", "Responsive UI"],
    image: "/mixxer.png",
    live: "#",
    github: "#",
    color: "#22c55e",
  },
  {
    slug: "dewis",
    index: "02",
    name: "Dewis",
    category: "Web Application",
    description:
      "A data-driven web platform built with React.js and integrated REST APIs. Focused on delivering a smooth, performant user experience across all device sizes.",
    tech: ["React.js", "JavaScript", "REST APIs", "Component Architecture"],
    image: "/dewis.png",
    live: "#",
    github: "#",
    color: "#3b82f6",
  },
  {
    slug: "amexio",
    index: "03",
    name: "AmeXio",
    category: "Web Application",
    description:
      "Enterprise-grade web application built with React.js and Next.js, featuring API integration and a scalable component system.",
    tech: ["React.js", "Next.js", "API Integration", "TypeScript"],
    image: "/amexio.png",
    live: "#",
    github: "#",
    color: "#a78bfa",
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <SectionReveal delay={index * 0.1}>
      <article
        className="group grid gap-6 sm:gap-8 border-b border-border py-10 sm:py-16 last:border-b-0 lg:grid-cols-2 lg:items-center lg:gap-16"
        data-cursor="view"
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-xl border border-border ${
            isEven ? "lg:order-first" : "lg:order-last"
          }`}
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={project.image}
              alt={`${project.name} project screenshot`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View Case Study <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className={isEven ? "lg:order-last" : "lg:order-first"}>
          <div className="flex items-center gap-3 mb-3 sm:mb-5">
            <span className="font-mono text-xs text-muted-foreground">
              {project.index}
            </span>
            <span className="h-px flex-1 bg-border max-w-[40px]" />
            <span className="font-mono text-xs text-muted-foreground">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-display-md font-bold text-foreground mb-3 sm:mb-4 group-hover:text-accent transition-colors">
            {project.name}
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base mb-4 sm:mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-muted px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[11px] sm:text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="group/link flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Case Study
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </Link>
            <a
              href={project.live}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <ArrowUpRight size={12} />
            </a>
            <a
              href={project.github}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="border-b border-border bg-background py-16 sm:py-24 lg:py-32"
      aria-labelledby="work-heading"
    >
      <div className="container mx-auto">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Selected Work
          </p>
          <h2
            id="work-heading"
            className="mb-2 font-display text-display-lg font-bold text-foreground"
          >
            Projects I&apos;ve{" "}
            <br className="hidden sm:inline" />
            helped bring to life.
          </h2>
          <p className="mb-10 sm:mb-16 max-w-lg text-sm sm:text-base text-muted-foreground">
            Products, interfaces and experiences built with a focus on performance
            and engineering quality.
          </p>
        </SectionReveal>

        <div>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { PROJECTS };

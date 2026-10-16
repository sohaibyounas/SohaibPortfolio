"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionReveal } from "@/components/section-reveal";
import { PROJECTS, FEATURED_PROJECTS } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <SectionReveal delay={index * 0.1}>
      <article
        className="group grid gap-6 sm:gap-8 border-b border-border py-10 sm:py-16 last:border-b-0 lg:grid-cols-2 lg:items-center lg:gap-16"
      >
        {/* Image */}
        <Link
          href={`/projects/${project.slug}`}
          data-cursor="view"
          aria-label={`View ${project.name} case study`}
          className={`relative block overflow-hidden rounded-xl border border-border ${
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

          {/* Hover overlay — on desktop the custom "View" cursor replaces the pill */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:bg-black/25">
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 lg:hidden">
              View Case Study <ArrowUpRight size={14} />
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className={isEven ? "lg:order-last" : "lg:order-first"}>
          <div className="flex items-center gap-3 mb-3 sm:mb-5">
            <span className="font-mono text-xs text-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-border max-w-[40px]" />
            <span className="font-mono text-xs text-foreground">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-display-md font-bold text-foreground mb-3 sm:mb-4 transition-colors">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-accent"
            >
              {project.name}
            </Link>
          </h3>

          <p className="text-sm leading-relaxed text-foreground sm:text-base mb-4 sm:mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-muted px-2.5 py-0.5 sm:px-3 sm:py-1 font-mono text-[11px] sm:text-xs text-foreground"
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
              className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <ArrowUpRight size={12} />
            </a>
            {project.github && (
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={14} /> GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}

function MoreProjectsCta() {
  const others = PROJECTS.filter((p) => !p.featured);
  const preview = others.slice(0, 4);

  return (
    <SectionReveal>
      <Link
        href="/projects"
        className="group mt-6 flex flex-col items-start gap-6 rounded-2xl border border-border bg-muted/40 p-6 transition-all hover:border-accent/50 hover:bg-muted sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="flex shrink-0 -space-x-4">
            {preview.map((p) => (
              <div
                key={p.slug}
                className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-background sm:h-14 sm:w-14"
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="font-display text-lg font-bold text-foreground sm:text-xl">
              +{others.length} more projects
            </p>
            <p className="text-sm text-foreground/70">
              Browse the full archive — filter by stack or search.
            </p>
          </div>
        </div>

        <span className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all group-hover:shadow-[0_0_30px_rgba(48,175,255,0.4)] sm:w-auto">
          View all {PROJECTS.length} projects
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </Link>
    </SectionReveal>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      className="border-b border-border bg-background py-16 sm:py-24 lg:py-32 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="work-heading"
    >
      <div className="container mx-auto">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-foreground uppercase">
            Selected Work
          </p>
          <h2
            id="work-heading"
            className="mb-2 font-display text-display-lg font-bold text-foreground"
          >
            Projects I&apos;ve <br className="hidden sm:inline" />
            helped bring to life.
          </h2>
          <p className="mb-10 sm:mb-16 max-w-lg text-sm sm:text-base text-foreground">
            Products, interfaces and experiences built with a focus on
            performance and engineering quality.
          </p>
        </SectionReveal>

        <div>
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <MoreProjectsCta />
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  challenges: string[];
  learnings: string[];
};

export function ProjectCaseStudy({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#work"
                className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft size={14} /> Back to Work
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
              </div>

              <h1 className="font-display text-display-xl font-bold text-foreground mb-6">
                {project.name}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg mb-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Project Image ── */}
        <section className="border-y border-border">
          <div className="container mx-auto py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="grid gap-16 lg:grid-cols-3">
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <SectionReveal>
                  <div className="sticky top-24 space-y-8">
                    <div>
                      <p className="mb-3 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        My Role
                      </p>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                  </div>
                </SectionReveal>
              </aside>

              {/* Main content */}
              <div className="space-y-12 lg:col-span-2">
                <SectionReveal>
                  <div>
                    <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                      Overview
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.overview}
                    </p>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.1}>
                  <div>
                    <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                      The Problem
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.problem}
                    </p>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.15}>
                  <div>
                    <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                      The Solution
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.solution}
                    </p>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <div>
                    <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                      Challenges
                    </h2>
                    <ul className="space-y-3">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.25}>
                  <div>
                    <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                      Key Learnings
                    </h2>
                    <ul className="space-y-3">
                      {project.learnings.map((l, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Next Project ── */}
        <section className="border-t border-border py-16">
          <div className="container mx-auto">
            <p className="mb-4 font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">
              Next Project
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between rounded-xl border border-border p-8 transition-all hover:border-foreground/20 hover:bg-muted"
            >
              <div>
                <h3 className="font-display text-display-md font-bold text-foreground transition-colors group-hover:text-accent">
                  {nextProject.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {nextProject.category}
                </p>
              </div>
              <ArrowUpRight
                size={24}
                className="text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

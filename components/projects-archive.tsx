"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Search, X } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PROJECTS, type ProjectCaseStudy } from "@/data/projects";

/** Tech tags used by at least 3 projects become filter chips */
const FILTERS = (() => {
  const counts = new Map<string, number>();
  PROJECTS.forEach((p) =>
    p.tech.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1))
  );
  return [...counts.entries()]
    .filter(([, n]) => n >= 3)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
})();

function ArchiveCard({ project }: { project: ProjectCaseStudy }) {
  const extraTech = project.tech.length - 3;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 transition-colors hover:border-accent/50"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-16/10 overflow-hidden border-b border-border"
      >
        <Image
          src={project.image}
          alt={`${project.name} project screenshot`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
            Featured
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 font-mono text-[11px] text-foreground/70">
          <span>{project.index}</span>
          <span className="h-px w-4 bg-border" />
          <span className="truncate">{project.category}</span>
        </div>

        <h2 className="mb-2 font-display text-lg font-bold text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.name}
          </Link>
        </h2>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-foreground/80">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[11px] text-foreground"
            >
              {t}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="rounded-full px-1.5 py-0.5 font-mono text-[11px] text-foreground/60">
              +{extraTech}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
          >
            Case Study <ArrowUpRight size={13} />
          </Link>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-foreground/80 transition-colors hover:text-foreground"
          >
            Live <ArrowUpRight size={12} />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="ml-auto text-foreground/70 transition-colors hover:text-foreground"
            >
              <GithubIcon size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsArchive() {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<string | null>(null);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      if (filter && !p.tech.includes(filter)) return false;
      if (!q) return true;
      return [p.name, p.category, p.description, ...p.tech]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [query, filter]);

  const reset = () => {
    setQuery("");
    setFilter(null);
  };

  return (
    <section className="relative pt-28 pb-20 sm:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" />
      <div className="container relative mx-auto">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-foreground">
          Project Archive
        </p>
        <h1 className="mb-3 font-display text-display-lg font-bold text-foreground">
          Everything I&apos;ve built.
        </h1>
        <p className="mb-10 max-w-lg text-sm text-foreground sm:text-base">
          {PROJECTS.length} production projects — client work, products and
          experiments. Search or filter by stack.
        </p>

        {/* Controls */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10">
          <div className="relative max-w-md">
            <Search
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/50"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, category…"
              aria-label="Search projects"
              className="w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/50 outline-hidden transition-colors focus:border-accent"
            />
          </div>

          <div
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
            role="group"
            aria-label="Filter by technology"
          >
            {[null, ...FILTERS].map((tag) => {
              const active = filter === tag;
              return (
                <button
                  key={tag ?? "all"}
                  onClick={() => setFilter(tag)}
                  aria-pressed={active}
                  className={`shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                    active
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-foreground hover:border-foreground/30 hover:bg-muted"
                  }`}
                >
                  {tag ?? "All"}
                </button>
              );
            })}
          </div>

          <p className="font-mono text-xs text-foreground/60" aria-live="polite">
            Showing {results.length} of {PROJECTS.length}
          </p>
        </div>

        {/* Grid */}
        {results.length > 0 ? (
          <motion.div
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {results.map((p) => (
                <ArchiveCard key={p.slug} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-border py-16 text-center">
            <p className="text-sm text-foreground">
              No projects match your search.
            </p>
            <button
              onClick={reset}
              className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:bg-muted"
            >
              <X size={12} /> Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

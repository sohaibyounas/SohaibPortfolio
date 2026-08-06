"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";

type TabId = "who am i" | "skills" | "projects" | "contact";

const TABS: { id: TabId; label: string }[] = [
  { id: "who am i", label: "who am i" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

const TAB_CONTENT: Record<TabId, { lines: { text: string; type: "cmd" | "success" | "info" | "muted" | "accent" }[] }> = {
  "who am i": {
    lines: [
      { text: "$ who am i", type: "cmd" },
      { text: "", type: "muted" },
      { text: "sohaib younas", type: "accent" },
      { text: "role       → Frontend Developer", type: "info" },
      { text: "location   → Pakistan", type: "info" },
      { text: "experience → 2+ years", type: "info" },
      { text: "stack      → React · Next.js · TypeScript", type: "info" },
      { text: "status     → Available for opportunities", type: "success" },
      { text: "", type: "muted" },
      { text: "✓ open to full-time · freelance · remote", type: "success" },
    ],
  },
  skills: {
    lines: [
      { text: "$ skills --list", type: "cmd" },
      { text: "", type: "muted" },
      { text: "frontend/", type: "accent" },
      { text: "  ├── react.js           ████████████ expert", type: "info" },
      { text: "  ├── next.js            ██████████░░ advanced", type: "info" },
      { text: "  ├── typescript         ████████░░░░ advanced", type: "info" },
      { text: "  ├── tailwind-css       ████████████ expert", type: "info" },
      { text: "  └── framer-motion      ██████░░░░░░ proficient", type: "info" },
      { text: "", type: "muted" },
      { text: "apis/", type: "accent" },
      { text: "  ├── rest-apis          ████████████ expert", type: "info" },
      { text: "  └── react-query        ██████░░░░░░ proficient", type: "info" },
      { text: "", type: "muted" },
      { text: "✓ all skills verified from production work", type: "success" },
    ],
  },
  projects: {
    lines: [
      { text: "$ ls ./projects", type: "cmd" },
      { text: "", type: "muted" },
      { text: "total 3 projects", type: "muted" },
      { text: "", type: "muted" },
      { text: "drwxr  mixxer/     → Web Application · React.js", type: "info" },
      { text: "drwxr  dewis/      → Web Application · React.js + APIs", type: "info" },
      { text: "drwxr  amexio/     → Web Application · React + Next.js", type: "info" },
      { text: "", type: "muted" },
      { text: "$ cat mixxer/README.md", type: "cmd" },
      { text: "Production web app · responsive UI · API integration", type: "muted" },
      { text: "", type: "muted" },
      { text: "✓ 3 projects · all production-deployed", type: "success" },
    ],
  },
  contact: {
    lines: [
      { text: "$ contact --reach-out", type: "cmd" },
      { text: "", type: "muted" },
      { text: "initiating connection...", type: "muted" },
      { text: "", type: "muted" },
      { text: "email     → sohaib@dev.pk", type: "info" },
      { text: "linkedin  → linkedin.com/in/sohaib-younas", type: "info" },
      { text: "github    → github.com/sohaib-younas", type: "info" },
      { text: "", type: "muted" },
      { text: "response_time → < 24 hours", type: "accent" },
      { text: "availability  → open to work", type: "success" },
      { text: "", type: "muted" },
      { text: "✓ best way: scroll down and use the contact form", type: "success" },
    ],
  },
};

const TYPE_COLORS: Record<string, string> = {
  cmd: "text-accent font-semibold",
  success: "text-emerald-400",
  info: "text-foreground/80",
  muted: "text-muted-foreground",
  accent: "text-accent",
};

function TypewriterLines({ lines }: { lines: { text: string; type: string }[] }) {
  const [visibleCount, setVisibleCount] = React.useState(0);

  React.useEffect(() => {
    setVisibleCount(0);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= lines.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, [lines]);

  return (
    <div className="space-y-0.5">
      {lines.slice(0, visibleCount).map((line, i) => (
        <motion.div
          key={`${i}-${line.text}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className={`font-mono text-xs leading-6 sm:text-sm ${TYPE_COLORS[line.type] ?? "text-foreground"}`}
        >
          {line.text || "\u00A0"}
        </motion.div>
      ))}
      {visibleCount < lines.length && (
        <span className="inline-block h-4 w-2 bg-accent terminal-cursor" />
      )}
    </div>
  );
}

export function Terminal() {
  const [activeTab, setActiveTab] = React.useState<TabId>("who am i");
  const [prevTab, setPrevTab] = React.useState<TabId>("who am i");

  const switchTab = (id: TabId) => {
    if (id === activeTab) return;
    setPrevTab(activeTab);
    setActiveTab(id);
  };

  return (
    <section
      className="border-b border-border bg-background py-24 lg:py-32"
      aria-label="Interactive terminal"
    >
      <div className="container mx-auto">
        <SectionReveal>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Terminal
          </p>
          <h2 className="mb-12 font-display text-display-md font-bold text-foreground">
            Get to know me
            <br />
            <span className="text-muted-foreground">in developer mode.</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="overflow-hidden rounded-xl border border-border bg-[#0d0d0d]">
            {/* Terminal titlebar */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-accent/70" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                sohaib@portfolio:~$
              </span>
              <div className="w-16" />
            </div>

            {/* Tab buttons */}
            <div className="flex overflow-x-auto border-b border-border">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className={`relative shrink-0 px-4 py-2.5 font-mono text-xs transition-colors ${activeTab === tab.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 bg-white/5"
                      transition={{ type: "spring", damping: 25, stiffness: 350 }}
                    />
                  )}
                  <span className="relative">$ {tab.label}</span>
                </button>
              ))}
            </div>

            {/* Terminal output */}
            <div className="min-h-[280px] p-5 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <TypewriterLines lines={TAB_CONTENT[activeTab].lines} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

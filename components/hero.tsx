"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

// ─── Tech Flow Diagram ───
const nodes = [
  { id: "ui", label: "User Interface", x: 160, y: 30, color: "#22c55e" },
  { id: "react", label: "React", x: 160, y: 120, color: "#61dafb" },
  { id: "nextjs", label: "Next.js", x: 160, y: 210, color: "#ffffff" },
  { id: "api", label: "REST API", x: 160, y: 300, color: "#a78bfa" },
  { id: "db", label: "Database", x: 160, y: 390, color: "#f59e0b" },
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
];

function TechFlowDiagram() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        width="320"
        height="440"
        viewBox="0 0 320 440"
        className="overflow-visible"
        aria-hidden="true"
      >
        {/* Grid lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 64}
            y1={0}
            x2={i * 64}
            y2={440}
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 64}
            x2={320}
            y2={i * 64}
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        ))}

        {/* Connection lines */}
        {connections.map((conn, i) => {
          const from = nodes[conn.from];
          const to = nodes[conn.to];
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y + 20}
              x2={to.x}
              y2={to.y - 20}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
            />
          );
        })}

        {/* Animated data packets */}
        {connections.map((conn, i) => {
          const from = nodes[conn.from];
          const to = nodes[conn.to];
          return (
            <motion.circle
              key={`packet-${i}`}
              r={3}
              fill={nodes[conn.from].color}
              initial={{ opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y + 20, to.y - 20],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 1.5 + i * 0.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
          >
            {/* Node glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={32}
              fill={`${node.color}08`}
              stroke={`${node.color}20`}
              strokeWidth="1"
            />

            {/* Node circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={20}
              fill="#0a0a0a"
              stroke={node.color}
              strokeWidth="1.5"
              animate={{ r: [20, 21, 20] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />

            {/* Node dot */}
            <circle cx={node.x} cy={node.y} r={4} fill={node.color} />

            {/* Label */}
            <text
              x={node.x + 34}
              y={node.y + 4}
              fill="hsl(var(--muted-foreground))"
              fontSize="11"
              fontFamily="var(--font-mono)"
              fontWeight="500"
            >
              {node.label}
            </text>

            {/* Left side label index */}
            <text
              x={node.x - 34}
              y={node.y + 4}
              fill="hsl(var(--border))"
              fontSize="9"
              fontFamily="var(--font-mono)"
              textAnchor="end"
            >
              0{i + 1}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// ─── Word stagger animation ───
function StaggerText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 200 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-background pt-16"
      onMouseMove={handleMouseMove}
      aria-label="Hero section"
    >
      {/* Cursor glow */}
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px]"
        style={{
          left: glowX,
          top: glowY,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, hsl(142 70% 45% / 0.4), transparent 70%)",
        }}
      />

      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[140px]" />

      <div className="container relative mx-auto flex flex-1 items-center">
        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* ── Left Column ── */}
          <div className="flex flex-col">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              <span className="font-mono text-xs text-accent">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="font-display text-display-2xl font-bold text-foreground">
              <StaggerText text="Frontend experiences" />
              <br />
              <StaggerText
                text="built for the"
                className="text-muted-foreground"
              />
              <br />
              <StaggerText text="real world." />
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I build fast, scalable and polished web applications with React,
              Next.js and modern frontend technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo("work")}
                className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.4)]"
              >
                View My Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-muted"
              >
                Let&apos;s Connect
              </button>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-10 flex items-center gap-6 border-t border-border pt-8"
            >
              {[
                { value: "3+", label: "Years" },
                { value: "20+", label: "Projects" },
                { value: "React", label: "Primary Stack" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Tech Flow ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden justify-center lg:flex"
          >
            <div className="relative">
              {/* Frame border */}
              <div className="absolute inset-0 rounded-2xl border border-border/60" />
              <div className="relative rounded-2xl bg-card/30 p-8 backdrop-blur-sm">
                {/* Header bar */}
                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    architecture.tsx
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                </div>

                <TechFlowDiagram />

                {/* Footer bar */}
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    Full-stack ready
                  </span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="font-mono text-xs text-accent">
                    ● Live
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 flex justify-center pb-10"
      >
        <motion.button
          onClick={() => scrollTo("marquee")}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll down"
        >
          <span className="font-mono text-xs">scroll</span>
          <ArrowDown size={14} />
        </motion.button>
      </motion.div>
    </section>
  );
}

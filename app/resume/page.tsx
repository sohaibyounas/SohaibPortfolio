"use client";

import Link from "next/link";
import { Download, ExternalLink, ArrowLeft } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="flex h-screen w-screen flex-col bg-background text-foreground">
      {/* Top action bar */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-6 bg-card/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-mono text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to Portfolio</span>
          </Link>
          <span className="font-display text-sm font-semibold tracking-wide text-foreground">
            Sohaib Younas{" "}
            <span className="text-muted-foreground font-normal">/ Resume</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-mono text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">Raw PDF</span>
          </a>
          <a
            href="/resume.pdf"
            download="Sohaib_Younas_Resume.pdf"
            className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Download size={13} />
            <span>Download</span>
          </a>
        </div>
      </header>

      {/* PDF Viewport */}
      <main className="relative flex-1 w-full bg-neutral-900">
        <embed
          src="/resume.pdf"
          type="application/pdf"
          className="h-full w-full"
        />
      </main>
    </div>
  );
}

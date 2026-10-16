"use client";

import * as React from "react";
import { Download, Loader2 } from "lucide-react";
import type { PDFDocumentProxy } from "pdfjs-dist";

/**
 * Renders a PDF onto <canvas> elements with pdf.js instead of relying on the
 * browser's built-in PDF plugin. <embed>/<iframe> fall back to downloading the
 * file on Android, some iOS browsers, download-manager extensions, or when
 * Chrome's "Download PDFs" setting is on — this works everywhere.
 */
export function PdfViewer({
  src,
  dataSrc,
  downloadName,
}: {
  /** Real PDF URL — only used for the download fallback */
  src: string;
  /** Endpoint returning the PDF as base64 text (invisible to download managers) */
  dataSrc: string;
  downloadName: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [doc, setDoc] = React.useState<PDFDocumentProxy | null>(null);
  const [status, setStatus] = React.useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [width, setWidth] = React.useState(0);

  // Load the document once
  React.useEffect(() => {
    let cancelled = false;
    let loadingTask: { destroy: () => Promise<void> } | null = null;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url
        ).toString();

        const res = await fetch(dataSrc);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const binary = atob((await res.text()).trim());
        const data = Uint8Array.from(binary, (c) => c.charCodeAt(0));
        if (cancelled) return;

        const task = pdfjs.getDocument({ data });
        loadingTask = task;
        const loaded = await task.promise;
        if (cancelled) return;
        setDoc(loaded);
        setStatus("ready");
      } catch (err) {
        console.error("Failed to load PDF:", err);
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      loadingTask?.destroy();
    };
  }, [dataSrc]);

  // Track container width so pages re-render crisply on resize
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let frame = 0;
    const observer = new ResizeObserver(([entry]) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setWidth(Math.floor(entry.contentRect.width))
      );
    });
    observer.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-[900px]">
      {status === "loading" && (
        <div className="flex h-[60vh] flex-col items-center justify-center gap-3 text-neutral-400">
          <Loader2 size={22} className="animate-spin" />
          <span className="font-mono text-xs">Loading resume…</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center text-neutral-300">
          <p className="text-sm">The resume preview couldn&apos;t be loaded.</p>
          <a
            href={src}
            download={downloadName}
            className="flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Download size={13} />
            Download PDF instead
          </a>
        </div>
      )}

      {doc && width > 0 && (
        <div className="flex flex-col gap-4 sm:gap-6">
          {Array.from({ length: doc.numPages }, (_, i) => (
            <PdfPage key={i} doc={doc} pageNumber={i + 1} width={width} />
          ))}
        </div>
      )}
    </div>
  );
}

function PdfPage({
  doc,
  pageNumber,
  width,
}: {
  doc: PDFDocumentProxy;
  pageNumber: number;
  width: number;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    let cancelled = false;
    let task: { cancel: () => void; promise: Promise<void> } | null = null;

    (async () => {
      const page = await doc.getPage(pageNumber);
      const canvas = canvasRef.current;
      if (cancelled || !canvas) return;

      const base = page.getViewport({ scale: 1 });
      const scale = width / base.width;
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const viewport = page.getViewport({ scale: scale * dpr });

      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
      canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;

      task = page.render({ canvas, viewport });
      try {
        await task.promise;
      } catch {
        // Render cancelled by a newer resize — ignore
      }
    })();

    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [doc, pageNumber, width]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={`Resume page ${pageNumber}`}
      className="mx-auto block rounded-sm bg-white shadow-2xl"
    />
  );
}

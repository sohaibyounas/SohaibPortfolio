import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Serves resume.pdf as base64 text for the in-page viewer. Download managers
 * (IDM etc.) hijack any request ending in ".pdf" or returning application/pdf,
 * which turned the preview into a "Save As" dialog — plain text is left alone.
 * Rendered once at build time.
 */
export const dynamic = "force-static";

export async function GET() {
  const pdf = await readFile(path.join(process.cwd(), "public", "resume.pdf"));
  return new Response(pdf.toString("base64"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

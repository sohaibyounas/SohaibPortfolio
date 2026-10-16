/**
 * Small in-memory sliding-window rate limiter.
 *
 * Serverless instances don't share memory, so this is best-effort — but it
 * stops a single client from hammering an endpoint (and burning API quota)
 * without needing an external store.
 */
type Window = { limit: number; windowMs: number };

const hits = new Map<string, number[]>();
const MAX_KEYS = 5000;

export function rateLimit(key: string, windows: Window[]) {
  const now = Date.now();
  const longest = Math.max(...windows.map((w) => w.windowMs));
  const recent = (hits.get(key) ?? []).filter((t) => now - t < longest);

  for (const { limit, windowMs } of windows) {
    const inWindow = recent.filter((t) => now - t < windowMs);
    if (inWindow.length >= limit) {
      hits.set(key, recent);
      const retryAfterMs = windowMs - (now - inWindow[0]);
      return { ok: false as const, retryAfter: Math.ceil(retryAfterMs / 1000) };
    }
  }

  recent.push(now);
  hits.set(key, recent);

  // Keep memory bounded on long-lived instances
  if (hits.size > MAX_KEYS) {
    const oldest = hits.keys().next().value;
    if (oldest !== undefined) hits.delete(oldest);
  }

  return { ok: true as const };
}

/** Best-effort client IP from proxy headers (Vercel sets x-forwarded-for) */
export function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

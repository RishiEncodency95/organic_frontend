import { API_URL } from "./api";

// A handful of admin upload flows fall back to embedding the raw file as a
// `data:` URI directly in the saved content when the upload server is
// unreachable (see e.g. admin's gallery/testimonials "Could not reach the
// upload server; embedding image as a data URL instead"). That's a fine
// last-resort save for the admin, but a single such image can be hundreds of
// KB to several MB of base64 text (the testimonials logos this was written
// for ranged 298 KB–2 MB). If it ever ends up server-side content,
// `getSectionData` results get embedded into the page's RSC payload for
// every visitor on every request — turning one bad upload into a
// multi-megabyte page for the whole site. Strip those out here, at the one
// place all server-rendered section content flows through, so a stray
// base64 blob degrades to "this one image is missing" instead of "the whole
// site is unusably slow."
//
// The threshold is deliberately well above small intentional data URIs —
// e.g. the gallery's Instagram video-highlight thumbnails are a ~5 KB
// generated SVG placeholder by design (Instagram doesn't hand out real
// thumbnails without their API), not a broken upload. Only genuinely
// oversized blobs should be stripped.
const LARGE_DATA_URI_THRESHOLD = 40 * 1024; // 40 KB
const isLargeDataUri = (value: unknown): value is string =>
  typeof value === "string" && value.startsWith("data:") && value.length > LARGE_DATA_URI_THRESHOLD;

function stripLargeDataUris<T>(value: T, seen: WeakSet<object> = new WeakSet()): T {
  if (Array.isArray(value)) {
    return value.map((item) => stripLargeDataUris(item, seen)) as unknown as T;
  }
  if (value && typeof value === "object") {
    if (seen.has(value as object)) return value;
    seen.add(value as object);
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      out[key] = isLargeDataUri(val) ? null : stripLargeDataUris(val, seen);
    }
    return out as T;
  }
  return isLargeDataUri(value) ? (null as unknown as T) : value;
}

/**
 * Server-side JSON fetch for section content, cached with the page (ISR, 60s).
 * Returns the unwrapped `data` payload, or null if the backend is unreachable,
 * so the calling component can fall back to its built-in defaults.
 */
export async function getSectionData<T = any>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    const data = (json?.data ?? json) as T;
    return stripLargeDataUris(data);
  } catch {
    return null;
  }
}

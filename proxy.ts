import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchHiddenPageKeysFresh, pageKeyForPath } from "@/lib/pageVisibility";

// Pages unpublished from admin (Pages & CMS → Published toggle) return 404.
// Statuses are cached in memory briefly so this doesn't hit the backend on every
// request; fetch caching options have no effect in Proxy.
const CACHE_TTL_MS = 5_000;
let cache: { keys: Set<string>; expiresAt: number } | null = null;
let inFlight: Promise<Set<string>> | null = null;

async function getHiddenKeys(): Promise<Set<string>> {
  if (cache && cache.expiresAt > Date.now()) return cache.keys;
  if (!inFlight) {
    inFlight = fetchHiddenPageKeysFresh(1500)
      .then((keys) => {
        // Backend unreachable: keep the last known state (or show everything) rather than 404 the site.
        const next = keys ? new Set(keys) : cache?.keys ?? new Set<string>();
        cache = { keys: next, expiresAt: Date.now() + CACHE_TTL_MS };
        return next;
      })
      .finally(() => {
        inFlight = null;
      });
  }
  return inFlight;
}

export async function proxy(request: NextRequest) {
  const pageKey = pageKeyForPath(request.nextUrl.pathname);
  if (!pageKey) return NextResponse.next();

  const hidden = await getHiddenKeys();
  if (!hidden.has(pageKey)) return NextResponse.next();

  // No route exists at this path, so the app's not-found page renders with a 404 status.
  return NextResponse.rewrite(new URL("/__page-unpublished", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

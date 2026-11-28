"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { API_URL } from "@/lib/api";

function getOrCreateId(storage: Storage, key: string): string {
  try {
    const existing = storage.getItem(key);
    if (existing) return existing;
    const next =
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    storage.setItem(key, next);
    return next;
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

export default function SiteAnalyticsTracker() {
  const pathname = usePathname() || "/";
  const startTimeRef = useRef<number>(0);
  const activePathRef = useRef<string>(pathname);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sessionId = getOrCreateId(window.sessionStorage, "bo_sid");
    const visitorId = getOrCreateId(window.localStorage, "bo_vid");
    const currentPath = `${pathname}${window.location.search || ""}`;
    activePathRef.current = currentPath;
    startTimeRef.current = Date.now();

    const base = API_URL.replace(/\/+$/, "");
    const endpoint = `${base}/analytics/track`;

    const sendEvent = (payload: Record<string, unknown>, useBeacon = false) => {
      const body = JSON.stringify(payload);
      if (useBeacon && typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
        try {
          navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
          return;
        } catch {
          // Fall back to keepalive fetch
        }
      }
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    };

    sendEvent({
      eventType: "pageview",
      sessionId,
      visitorId,
      path: currentPath,
      title: document.title,
      referrer: document.referrer || undefined,
      durationSeconds: 0,
    });

    const flushDuration = () => {
      const elapsedSec = Math.max(0, Math.round((Date.now() - startTimeRef.current) / 1000));
      if (elapsedSec < 1) return;
      sendEvent(
        {
          eventType: "leave",
          sessionId,
          visitorId,
          path: activePathRef.current,
          durationSeconds: elapsedSec,
        },
        true
      );
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") flushDuration();
    };

    window.addEventListener("pagehide", flushDuration);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      flushDuration();
      window.removeEventListener("pagehide", flushDuration);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [pathname]);

  return null;
}


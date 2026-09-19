"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ClientScriptTracker({
  headerHtml,
}: {
  headerHtml?: string;
}) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // 1. Track route changes in Google Tag Manager / Analytics dataLayer
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== "undefined" && Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  // 2. Client-side fallback: ensure scripts execute if dynamically loaded
  useEffect(() => {
    if (!headerHtml || typeof window === "undefined") return;

    // If GTM snippet is in headerHtml but window.dataLayer is not yet defined,
    // execute inline scripts as a fallback.
    if (headerHtml.includes("gtm.js") && !(window as any).dataLayer) {
      const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
      let match: RegExpExecArray | null;
      while ((match = scriptRegex.exec(headerHtml)) !== null) {
        const code = match[1]?.trim();
        if (code) {
          try {
            const runFn = new Function(code);
            runFn();
          } catch (e) {
            console.warn("[ClientScriptTracker] Script execution fallback:", e);
          }
        }
      }
    }
  }, [headerHtml]);

  return null;
}

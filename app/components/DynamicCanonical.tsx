"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DynamicCanonical() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    const defaultOrigin = isLocal
      ? "http://localhost:3002"
      : (process.env.NEXT_PUBLIC_SITE_URL || "https://bharatorganicexpo.com");

    const cleanPath = !pathname || pathname === "/" ? "" : pathname;
    const defaultCanonicalUrl = `${defaultOrigin}${cleanPath}`;

    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    // Immediately set default canonical url if not present or points to wrong domain
    const currentHref = link.getAttribute("href") || "";
    if (!currentHref) {
      link.setAttribute("href", defaultCanonicalUrl);
    } else if (isLocal && currentHref.includes("bharatorganicexpo.com")) {
      link.setAttribute("href", currentHref.replace("https://bharatorganicexpo.com", "http://localhost:3002"));
    } else if (!isLocal && currentHref.includes("localhost:3002")) {
      link.setAttribute("href", currentHref.replace("http://localhost:3002", "https://bharatorganicexpo.com"));
    }

    // Check backend API for any manual canonical tag override saved by admin
    const pageKey = !pathname || pathname === "/" ? "home" : pathname.replace(/^\/+|\/+$/g, "");
    const apiUrl = isLocal ? "http://localhost:4000" : (process.env.NEXT_PUBLIC_API_URL || "https://bharatorganicexpo.com/api");

    fetch(`${apiUrl}/api/seo/${pageKey}?envType=${isLocal ? "local" : "live"}`)
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        const seo = data?.data || data;
        const customTag = (seo?.canonicalTag || seo?.canonicalUrl || "").trim();
        if (customTag && link) {
          const match = customTag.match(/href=["']([^"']+)["']/i);
          const customUrl = match ? match[1] : customTag.replace(/<[^>]*>/g, "").trim();
          if (customUrl && (customUrl.startsWith("http://") || customUrl.startsWith("https://") || customUrl.startsWith("/"))) {
            const finalUrl = customUrl.startsWith("/") ? `${defaultOrigin}${customUrl}` : customUrl;
            link.setAttribute("href", finalUrl);
          }
        }
      })
      .catch(() => {
        // keep default canonical
      });
  }, [pathname]);

  return null;
}

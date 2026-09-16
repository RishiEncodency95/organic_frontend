"use client";

import { useEffect, useLayoutEffect } from "react";

export default function SchemaInjector({ schema }: { schema: any }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!schema) {
      const script = document.head.querySelector<HTMLScriptElement>("script[type='application/ld+json']");
      if (script) script.remove();
      return;
    }

    try {
      const content = typeof schema === "string" ? schema.trim() : JSON.stringify(schema);
      if (!content) return;

      let script = document.head.querySelector<HTMLScriptElement>("script[type='application/ld+json']");
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = content;
    } catch (err) {
      console.error("SchemaInjector error:", err);
    }
  }, [schema]);

  return null;
}

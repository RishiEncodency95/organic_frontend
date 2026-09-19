import React from "react";
import ClientScriptTracker from "./ClientScriptTracker";

interface ParsedScript {
  src?: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
  type?: string;
  code: string;
}

export function parseCustomScripts(html?: string): {
  scripts: ParsedScript[];
  noscripts: string[];
} {
  if (!html || typeof html !== "string") {
    return { scripts: [], noscripts: [] };
  }

  const scripts: ParsedScript[] = [];
  const noscripts: string[] = [];

  // 1. Extract <noscript> blocks
  const noscriptRegex = /<noscript\b[^>]*>([\s\S]*?)<\/noscript>/gi;
  let noMatch: RegExpExecArray | null;
  while ((noMatch = noscriptRegex.exec(html)) !== null) {
    if (noMatch[1]?.trim()) {
      noscripts.push(noMatch[1].trim());
    }
  }

  // 2. Extract <script> blocks
  const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let scMatch: RegExpExecArray | null;
  let foundScript = false;

  while ((scMatch = scriptRegex.exec(html)) !== null) {
    foundScript = true;
    const rawAttrs = scMatch[1] || "";
    const code = (scMatch[2] || "").trim();

    const srcMatch = rawAttrs.match(/src=["']([^"']+)["']/i);
    const idMatch = rawAttrs.match(/id=["']([^"']+)["']/i);
    const typeMatch = rawAttrs.match(/type=["']([^"']+)["']/i);
    const asyncAttr = /\basync\b/i.test(rawAttrs);
    const deferAttr = /\bdefer\b/i.test(rawAttrs);

    scripts.push({
      src: srcMatch ? srcMatch[1] : undefined,
      id: idMatch ? idMatch[1] : undefined,
      type: typeMatch ? typeMatch[1] : undefined,
      async: asyncAttr,
      defer: deferAttr,
      code,
    });
  }

  // 3. Fallback: if user pasted raw JS without <script> tag and without <noscript>
  if (!foundScript && noscripts.length === 0 && html.trim()) {
    const stripped = html.replace(/<!--[\s\S]*?-->/g, "").trim();
    if (stripped) {
      scripts.push({
        code: stripped,
      });
    }
  }

  return { scripts, noscripts };
}

/**
 * Renders custom scripts and noscripts intended for <head>
 */
export function HeadScripts({ html }: { html?: string }) {
  if (!html) return null;
  const { scripts, noscripts } = parseCustomScripts(html);

  return (
    <>
      {scripts.map((s, idx) => {
        if (s.src) {
          return (
            <script
              key={`head-script-src-${idx}`}
              id={s.id || `custom-head-script-${idx}`}
              src={s.src}
              async={s.async}
              defer={s.defer}
              type={s.type || "text/javascript"}
            />
          );
        }
        if (s.code) {
          return (
            <script
              key={`head-script-inline-${idx}`}
              id={s.id || `custom-head-inline-${idx}`}
              type={s.type || "text/javascript"}
              dangerouslySetInnerHTML={{ __html: s.code }}
            />
          );
        }
        return null;
      })}
      {noscripts.map((content, idx) => (
        <noscript
          key={`head-noscript-${idx}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ))}
    </>
  );
}

/**
 * Renders custom scripts and noscripts intended before </body>
 */
export function FooterScripts({ html }: { html?: string }) {
  if (!html) return null;
  const { scripts, noscripts } = parseCustomScripts(html);

  return (
    <>
      {noscripts.map((content, idx) => (
        <noscript
          key={`footer-noscript-${idx}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ))}
      {scripts.map((s, idx) => {
        if (s.src) {
          return (
            <script
              key={`footer-script-src-${idx}`}
              id={s.id || `custom-footer-script-${idx}`}
              src={s.src}
              async={s.async}
              defer={s.defer}
              type={s.type || "text/javascript"}
            />
          );
        }
        if (s.code) {
          return (
            <script
              key={`footer-script-inline-${idx}`}
              id={s.id || `custom-footer-inline-${idx}`}
              type={s.type || "text/javascript"}
              dangerouslySetInnerHTML={{ __html: s.code }}
            />
          );
        }
        return null;
      })}
    </>
  );
}

export { ClientScriptTracker };

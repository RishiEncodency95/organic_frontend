import React from "react";

/**
 * Renders the admin-entered "Schema Markup (JSON-LD)" server-side, so it is in the page source
 * that Google / Rich Results Test / schema.org validator read.
 *
 * Admins often paste the markup with its own <script type="application/ld+json"> wrapper, sometimes
 * several blocks at once. Putting that raw text inside our own <script> nests script tags and breaks
 * the page's schema, so the wrappers are stripped here and each block is parsed on its own.
 * Blocks that are not valid JSON are skipped rather than emitted broken.
 */
export function parseSchemaBlocks(schema: unknown): string[] {
  if (!schema) return [];
  if (Array.isArray(schema)) return schema.flatMap(parseSchemaBlocks);
  if (typeof schema === "object") return [JSON.stringify(schema)];
  if (typeof schema !== "string") return [];

  const raw = schema.replace(/<!--[\s\S]*?-->/g, "").trim();
  if (!raw) return [];

  const wrapped = [...raw.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const chunks = wrapped.length > 0 ? wrapped : [raw];

  const blocks: string[] = [];
  for (const chunk of chunks) {
    const text = chunk.trim();
    if (!text) continue;
    try {
      blocks.push(JSON.stringify(JSON.parse(text)));
    } catch {
      console.warn("[AdminSchema] Skipping invalid JSON-LD block:", text.slice(0, 120));
    }
  }
  return blocks;
}

export default function AdminSchema({ schema }: { schema: unknown }) {
  const blocks = parseSchemaBlocks(schema);
  if (blocks.length === 0) return null;

  return (
    <>
      {blocks.map((json, idx) => (
        <script
          key={`admin-schema-${idx}`}
          type="application/ld+json"
          // Escape "<" so JSON text can never close the script tag early.
          dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

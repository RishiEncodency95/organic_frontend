"use client";

import { useRef } from "react";
import { primeClientApiCache } from "@/lib/api";

export default function HomeApiPrimer({
  responses,
}: {
  responses: Partial<Record<string, unknown>>;
}) {
  const primed = useRef(false);

  if (!primed.current) {
    primeClientApiCache(responses);
    primed.current = true;
  }

  return null;
}

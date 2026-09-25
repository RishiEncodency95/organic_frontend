import { API_URL } from "./api";

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
    return (json?.data ?? json) as T;
  } catch {
    return null;
  }
}

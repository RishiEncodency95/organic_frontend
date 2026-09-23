import type Lenis from "lenis";

// The site's global smooth-scroll (see app/components/SmoothScroll.tsx) drives scrolling
// itself via requestAnimationFrame, so plain `document.body.style.overflow = "hidden"`
// does nothing to stop it — Lenis has to be told to stop directly. Modals call
// lockScroll()/unlockScroll() (instead of touching body.style.overflow themselves) so
// both the native scrollbar and Lenis are paused together. A simple counter lets more
// than one modal be open/closing at once without one unlock prematurely re-enabling
// scroll for another that's still open.

let lenisInstance: Lenis | null = null;
let lockCount = 0;

export function setLenisInstance(instance: Lenis | null): void {
  lenisInstance = instance;
}

export function lockScroll(): void {
  lockCount += 1;
  if (typeof document === "undefined") return;
  lenisInstance?.stop();
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

export function unlockScroll(): void {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0 || typeof document === "undefined") return;
  lenisInstance?.start();
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

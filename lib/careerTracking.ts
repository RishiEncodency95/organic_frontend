/**
 * Counts careers page activity for the admin Careers Dashboard: the careers page opened, a
 * job's details opened and "Apply Now" clicked. Fire-and-forget: never waits, never throws.
 */
export type CareerEvent = "page_view" | "job_view" | "apply_click";

export const trackCareer = (type: CareerEvent, jobId?: string) => {
  if (typeof window === "undefined") return;
  fetch("/api/careers/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({ type, ...(jobId ? { jobId } : {}) }),
  }).catch(() => {});
};

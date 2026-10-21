"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackCareer } from "@/lib/careerTracking";
import { CAREER_STEP_URL, careerFlow, type CareerJob } from "./careerFlow";

/**
 * Opens the job's application page (Careers → Apply), where the candidate uploads a CV.
 * `gold`: a single gold "Apply Now" button (careers page job cards); `default`: Apply Now + View Details.
 */
export default function JobCardButtons({ job, variant = "default" }: { job: CareerJob; variant?: "default" | "gold" }) {
  const href = CAREER_STEP_URL.apply(job);
  // Hand the job to the Apply page so it does not have to load it again
  const open = (event: "apply_click" | "job_view") => {
    trackCareer(event, job._id || job.id);
    careerFlow.start(job);
  };

  if (variant === "gold") {
    return (
      <Link
        href={href}
        onClick={() => open("apply_click")}
        className="inline-flex h-[34px] shrink-0 items-center justify-center gap-[7px] rounded-[4px] px-[14px] text-[12px] font-semibold uppercase tracking-[0.04em] text-white shadow-[0_2px_6px_rgba(150,98,20,0.35)] transition hover:brightness-105"
        style={{ background: "linear-gradient(180deg, #dda33a 0%, #bf7d1c 100%)" }}
      >
        Apply Now <ArrowRight className="h-[15px] w-[15px]" strokeWidth={2.4} />
      </Link>
    );
  }

  return (
    <div className="mt-auto grid grid-cols-2 gap-3 pt-[clamp(10px,1vh,14px)]">
      <Link
        href={href}
        onClick={() => open("apply_click")}
        className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#05753e] px-3 py-1 text-[13px] font-semibold text-white transition hover:bg-[#046334]"
      >
        Apply Now <ArrowRight className="h-[18px] w-[18px]" />
      </Link>
      <Link
        href={href}
        onClick={() => open("job_view")}
        className="inline-flex items-center justify-center rounded-[4px] border border-[#0b7a47] bg-white px-3 py-1 text-[13px] font-semibold text-[#05683a] transition hover:bg-[#f2faf5]"
      >
        View Details
      </Link>
    </div>
  );
}

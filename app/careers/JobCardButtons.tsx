"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";
import UploadCvModal from "@/app/components/careers/uploade_cv/page";

export default function JobCardButtons({ job }: { job: any }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div className="mt-auto grid grid-cols-2 gap-3 pt-[clamp(10px,1vh,14px)]">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex py-1 items-center justify-center gap-2 rounded-[4px] bg-[#05753e] px-3 text-[13px] font-semibold text-white transition hover:bg-[#046334]"
        >
          Apply Now <ArrowRight className="h-[18px] w-[18px]" />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex py-1 items-center justify-center rounded-[4px] border border-[#0b7a47] bg-white px-3 text-[13px] font-semibold text-[#05683a] transition hover:bg-[#f2faf5]"
        >
          View Details
        </button>
      </div>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
          <UploadCvModal job={job} onClose={() => setIsOpen(false)} />,
          document.body
        )
        : null}
    </>
  );
}

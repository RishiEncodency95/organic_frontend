"use client";

import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import UploadCvModal from "@/app/components/careers/uploade_cv/page";
import { EligibilityModal } from "./submit-resume/page";
import { ApplicationFormModal } from "./application-form/page";
import { ReviewSubmitModal } from "./review-submit/page";

interface Props {
  variant?: "solid" | "outline";
}

export default function ResumeUploadButton({ variant = "solid" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isAppFormOpen, setIsAppFormOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [currentScore, setCurrentScore] = useState(72);

  useEffect(() => {
    if (isOpen || isEligibilityOpen || isAppFormOpen || isReviewOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isEligibilityOpen, isAppFormOpen, isReviewOpen]);

  const className = variant === "solid"
    ? "inline-flex h-[46px] w-auto items-center justify-center gap-2 rounded-full bg-[#0a7140] px-8 text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(10,113,64,0.25)] transition-all hover:-translate-y-[1px] hover:bg-[#085a33] hover:shadow-[0_6px_16px_rgba(10,113,64,0.35)] cursor-pointer"
    : "inline-flex h-[36px] w-auto items-center justify-center gap-2 rounded-full border-2 border-[#0a7140] bg-white px-8 text-[15px] font-bold text-[#0a7140] shadow-sm transition-all hover:bg-[#f4fcf6] cursor-pointer";

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        Submit Your Resume <ArrowRight className="h-[18px] w-[18px]" />
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <UploadCvModal
              job={{
                title: "General Application",
                location: "New Delhi",
                type: "Full Time",
                experience: "Any",
              }}
              onClose={() => setIsOpen(false)}
              onAnalyze={(score) => {
                if (score !== undefined) {
                  setCurrentScore(score);
                }
                setIsOpen(false);
                setIsEligibilityOpen(true);
              }}
            />,
            document.body
          )
        : null}

      {isEligibilityOpen && typeof document !== "undefined"
        ? createPortal(
            <EligibilityModal
              isOpen={isEligibilityOpen}
              score={currentScore}
              onClose={() => setIsEligibilityOpen(false)}
              onApply={() => {
                setIsEligibilityOpen(false);
                setIsAppFormOpen(true);
              }}
            />,
            document.body
          )
        : null}

      {isAppFormOpen && typeof document !== "undefined"
        ? createPortal(
            <ApplicationFormModal
              isOpen={isAppFormOpen}
              onClose={() => setIsAppFormOpen(false)}
              onNext={() => {
                setIsAppFormOpen(false);
                setIsReviewOpen(true);
              }}
            />,
            document.body
          )
        : null}

      {isReviewOpen && typeof document !== "undefined"
        ? createPortal(
            <ReviewSubmitModal
              isOpen={isReviewOpen}
              onClose={() => setIsReviewOpen(false)}
            />,
            document.body
          )
        : null}
    </>
  );
}

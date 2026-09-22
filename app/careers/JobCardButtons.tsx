"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";
import UploadCvModal, { CandidateAnalysisData } from "@/app/components/careers/uploade_cv/page";
import { EligibilityModal, CandidateProfileData, defaultCandidateData } from "./submit-resume/page";
import { ApplicationFormModal } from "./application-form/page";
import { ReviewSubmitModal } from "./review-submit/page";

export default function JobCardButtons({ job }: { job: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isAppFormOpen, setIsAppFormOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [candidateData, setCandidateData] = useState<CandidateProfileData>(defaultCandidateData);

  // Prevent scrolling when modal is open
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
          <UploadCvModal
            job={job}
            onClose={() => setIsOpen(false)}
            onAnalyze={(data) => {
              if (data) {
                setCandidateData(data);
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
            candidate={candidateData}
            score={candidateData.score}
            onClose={() => {
              setIsEligibilityOpen(false);
              setIsOpen(true);
            }}
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
            candidateData={candidateData}
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
            candidateData={candidateData}
            onClose={() => setIsReviewOpen(false)}
          />,
          document.body
        )
        : null}
    </>
  );
}

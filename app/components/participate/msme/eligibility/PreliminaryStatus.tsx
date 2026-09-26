"use client";

import React from 'react';
import { useEligibility } from './EligibilityContext';

const RibbonStarIcon = ({ className, size = 48 }: { className?: string, size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8.5" r="7" />
    <path d="M8.21 14.39L7 23l5-3 5 3-1.21-8.61" />
    <polygon points="12 4.5 13.5 7 16 7.5 14 9.5 14.5 12 12 11 9.5 12 10 9.5 8 7.5 10.5 7 12 4.5" fill="currentColor" stroke="none" />
  </svg>
);

const PreliminaryStatus = ({ customProps }: { customProps?: any }) => {
  const { result, isUploading } = useEligibility();

  // Nothing uploaded yet — a neutral prompt, not a fake verdict.
  if (!result && !isUploading) {
    return (
      <div className="w-full bg-[#F9F9F9] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-dashed border-gray-300 mt-4 flex items-center justify-center px-6 py-8 text-center">
        <p className="text-[14px] font-medium text-gray-500 max-w-md">
          {customProps?.emptySubtitle || "Upload your Udyam Registration Certificate above and our Software will read the details for you."}
        </p>
      </div>
    );
  }

  if (isUploading) {
    return (
      <div className="w-full bg-[#F9F9F9] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 mt-4 flex items-center justify-center px-6 py-8 text-center">
        <p className="text-[14px] font-semibold text-gray-600">Reading your certificate…</p>
      </div>
    );
  }

  if (!result) return null;

  if (result.documentType !== "valid_udyam_certificate") {
    return (
      <div className="w-full bg-[#fff8ed] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-[#efc080] mt-4 flex items-center gap-4 px-5 py-5">
        <div className="shrink-0 text-[#e98218] text-3xl font-bold">!</div>
        <div>
          <h3 className="text-[16px] font-semibold text-[#b26a2e] mb-1">
            {result.documentType === "not_a_udyam_certificate" ? "This doesn't look like a Udyam Certificate" : "Couldn't read this document clearly"}
          </h3>
          <p className="text-[13px] text-gray-700 font-medium">
            Please upload a clear PDF or photo of your official Udyam Registration Certificate, with all text visible.
          </p>
        </div>
      </div>
    );
  }

  const genderCategory = result.gender === "Female" ? "Women-led Enterprise" : result.socialCategory || "General";

  return (
    <div className="w-full bg-[#F9F9F9] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 mt-4 flex flex-col md:flex-row overflow-hidden relative">

      {/* Left Block - Green Ribbon style */}
      <div className="bg-[#1b5e20] text-white px-4 md:px-5 md:py-2 flex-[0.8] relative flex items-center shrink-0 z-10">

        <div className="hidden md:block absolute -right-[14px] top-0 bottom-0 h-full w-[15px] text-[#1b5e20] z-0">
          <svg preserveAspectRatio="none" viewBox="0 0 15 100" className="h-full w-full fill-current">
            <path d="M0,0 C6,15 15,35 15,50 C15,65 6,85 0,100 Z" />
          </svg>
        </div>

        <div className="flex gap-4 items-center w-full z-10 relative pr-2">
          <div className="shrink-0 text-[#facc15]">
            <RibbonStarIcon size={46} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10.5px] md:text-[11.5px] font-semibold tracking-widest text-white/90 uppercase mb-0.5">
              Details Extracted
            </span>
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide mb-1 leading-tight text-white">
              {result.enterpriseName || "Enterprise Name Not Found"}
            </h3>
            <p className="text-[12.5px] md:text-[14px] font-medium text-white/90 leading-snug">
              {result.udyamRegistrationNumber || "Udyam number not found"}
            </p>
          </div>
        </div>
      </div>

      {/* Middle Block */}
      <div className="px-4 md:px-5 md:py-2 flex-1 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center">
        <span className="text-[12px] md:text-[14px] font-semibold text-[#1b5e20] uppercase tracking-wider mb-1">
          Enterprise Type
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-[#1b5e20] mb-1 leading-none">
          {result.enterpriseType || "—"}
        </h3>
        <p className="text-[14px] font-semibold text-gray-800 mb-2.5">
          {result.majorActivity || "Major activity not found"}
        </p>
        <div className="inline-flex items-center gap-1.5 border border-[#1b5e20]/30 text-[#1b5e20] bg-[#f0f9f0] px-2.5 py-1 rounded-md w-fit">
          <span className="text-[12px] font-semibold">{genderCategory}</span>
        </div>
      </div>

      {/* Right Block */}
      <div className="px-4 md:px-5 md:py-2 flex-[1.2] flex flex-col justify-center">
        <span className="text-[10px] md:text-[14px] font-semibold text-[#1b5e20] uppercase tracking-wider mb-2">
          What Happens Next?
        </span>
        <p className="text-[12px] md:text-[14px] text-gray-800 leading-relaxed font-medium">
          We've read these details from your certificate. Your final PMS eligibility and assistance amount (if any) will be assessed by our team and the Ministry of MSME as per scheme guidelines — continue to the application to submit your details for review.
        </p>
      </div>

    </div>
  );
};

export default PreliminaryStatus;

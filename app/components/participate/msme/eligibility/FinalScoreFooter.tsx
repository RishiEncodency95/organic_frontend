"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Factory,
  FileCheck2,
  Sprout,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  Download,
  Headphones,
} from "lucide-react";
import { useEligibility } from "./EligibilityContext";

/* =========================================================
   STATUS ITEM
========================================================= */

interface StatusItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  found: boolean;
  size?: number;
}

const StatusItem = ({ icon, title, found, size = 60 }: StatusItemProps) => {
  return (
    <div className="flex flex-col items-center text-center min-w-0">
      <div
        className={`rounded-full flex items-center justify-center mb-3 ${found ? "bg-[#f1f6f1] border border-[#dce7dc]" : "bg-[#f4f4f4] border border-[#e2e2e2]"}`}
        style={{ width: size, height: size }}
      >
        {icon}
      </div>
      <div className="min-h-[32px] flex items-center justify-center">
        <span className="text-[12px] leading-[1.3] font-semibold text-[#424942]">{title}</span>
      </div>
      <div className="mt-2.5">
        {found ? (
          <div className="w-[28px] h-[28px] rounded-full bg-[#17732a] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        ) : (
          <div className="w-[28px] h-[28px] rounded-full bg-[#e98218] flex items-center justify-center">
            <span className="text-white text-[18px] font-semibold">!</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* =========================================================
   BUTTON
========================================================= */

interface ActionButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  icon: React.ReactNode;
  href?: string;
  target?: string;
}

const ActionButton = ({ children, primary = false, icon, href, target }: ActionButtonProps) => {
  const className = `h-[44px] w-full rounded-[6px] px-4 flex items-center justify-center gap-2 text-[12px] font-semibold uppercase transition-all ${primary ? `bg-[#176b27] text-white hover:bg-[#115d20]` : `bg-white border border-[#91a592] text-[#28552f] hover:bg-[#f7faf7]`}`;

  if (href) {
    return (
      <Link href={href} target={target} className={className}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      <span>{children}</span>
      {icon}
    </button>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const FinalScoreFooter = () => {
  const { result } = useEligibility();
  const hasResult = result && result.documentType === "valid_udyam_certificate";

  const statusItems = [
    { title: "Udyam Certificate", found: !!hasResult, icon: <FileCheck2 size={36} strokeWidth={1.6} className="text-[#58745c]" /> },
    { title: "Enterprise Type", found: !!result?.enterpriseType, icon: <Building2 size={36} strokeWidth={1.6} className="text-[#58745c]" /> },
    { title: "Major Activity", found: !!result?.majorActivity, icon: <Factory size={36} strokeWidth={1.6} className="text-[#58745c]" /> },
    { title: "Entrepreneur Category", found: !!(result?.socialCategory || result?.gender), icon: <Sprout size={36} strokeWidth={1.6} className="text-[#58745c]" /> },
  ];

  return (
    <div className="w-full mt-4 bg-white border border-[#dfe5df] rounded-[16px] overflow-hidden shadow-[0_1px_5px_rgba(0,0,0,0.03)]">

      {/* =====================================================
          TOP SECTION (desktop)
      ====================================================== */}
      <div className="hidden lg:flex w-full">
        <div className="w-full lg:w-[290px] xl:w-[320px] shrink-0 flex flex-col items-center lg:items-start border-b lg:border-b-0 lg:border-r border-[#e6ebe6] px-5 lg:px-7 pt-4 pb-4 justify-center">
          <h2 className="text-[12px] lg:text-[13px] font-semibold uppercase text-[#265a29] tracking-wide mb-3 text-center lg:text-left w-full whitespace-nowrap">
            Certificate Read Status
          </h2>
          <div className="flex items-center gap-2">
            {hasResult ? (
              <>
                <ShieldCheck size={22} className="text-white fill-[#1b6e27]" />
                <span className="text-[13px] font-semibold uppercase text-[#1b6e27]">Details Extracted</span>
              </>
            ) : (
              <>
                <AlertCircle size={22} className="text-[#e17f19]" />
                <span className="text-[13px] font-semibold uppercase text-[#a15a10]">Awaiting Upload</span>
              </>
            )}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 items-center py-1 lg:py-2 w-full">
          {statusItems.map((item) => (
            <StatusItem key={item.title} title={item.title} icon={item.icon} found={item.found} />
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM SECTION
      ====================================================== */}
      <div className="border-t border-[#e6ebe6] bg-white p-3 flex flex-col xl:flex-row gap-3 w-full">
        <div className="bg-[#f5f8f5] rounded-[8px] px-4 py-2 flex flex-col justify-center w-full xl:w-[420px] shrink-0 border border-[#e6ebe6]/50">
          <h3 className="text-[14px] font-semibold uppercase text-[#265a29] mb-1 tracking-wide">
            Recommended Next Step
          </h3>
          <p className="text-[14px] leading-[1.3] font-semibold text-[#374151]">
            {hasResult
              ? "Continue to the application to submit your details for review."
              : "Upload your Udyam certificate above, or continue straight to the application."}
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
          <ActionButton primary href="/participate/msme/apply" icon={<ArrowRight size={18} strokeWidth={2.3} />}>
            Apply for PMS Support
          </ActionButton>

          <ActionButton href="/participate/why-exhibit" icon={<ArrowRight size={28} strokeWidth={2.3} />}>
            Book Your Stall
          </ActionButton>

          <ActionButton icon={<Download size={27} strokeWidth={2.2} />}>
            Download Eligibility Summary
          </ActionButton>

          <ActionButton href="/contact" icon={<Headphones size={27} strokeWidth={2.2} />}>
            Talk to PMS Support Team
          </ActionButton>
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}
      <div className="block lg:hidden p-5">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-[15px] font-semibold uppercase text-[#35653c] mb-3 text-center">
            Certificate Read Status
          </h2>
          {hasResult ? (
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-white fill-[#176b27]" />
              <span className="text-[12px] font-semibold uppercase text-[#35653c]">Details Extracted</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <AlertCircle size={18} className="text-[#e17f19]" />
              <span className="text-[12px] font-semibold uppercase text-[#a15a10]">Awaiting Upload</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 mb-6">
          {statusItems.map((item) => (
            <StatusItem key={item.title} title={item.title} icon={item.icon} found={item.found} size={48} />
          ))}
        </div>

        <div className="bg-[#f5f8f5] rounded-[10px] p-5 mb-4">
          <h3 className="text-[13px] font-semibold uppercase text-[#35653c] mb-2">Recommended Next Step</h3>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            {hasResult
              ? "Continue to the application to submit your details for review."
              : "Upload your Udyam certificate above, or continue straight to the application."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <ActionButton primary href="/participate/msme/apply" icon={<ArrowRight size={20} />}>
            Apply for PMS Support
          </ActionButton>
          <ActionButton href="/participate/why-exhibit" icon={<ArrowRight size={20} />}>
            Book Your Stall
          </ActionButton>
          <ActionButton icon={<Download size={20} />}>
            Download Eligibility Summary
          </ActionButton>
          <ActionButton href="/contact" icon={<Headphones size={20} />}>
            Talk to PMS Support Team
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default FinalScoreFooter;

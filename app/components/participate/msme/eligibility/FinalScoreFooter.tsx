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

/* =========================================================
   SCORE
========================================================= */

const EligibilityScore = ({ score = 95 }: { score?: number }) => {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  // The arc spans 280 degrees, leaving an 80-degree gap at the bottom
  const arcDegrees = 280;
  const arcPercentage = arcDegrees / 360;
  const arcLength = circumference * arcPercentage;

  // To place the 80-degree gap symmetrically at the bottom (around 90 deg SVG coords),
  // it needs to start at 90 + (80/2) = 130 degrees.
  const rotation = 130;

  const scoreLength = arcLength * (score / 100);

  return (
    <div className="relative w-[210px] h-[170px] flex items-center justify-center">
      <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full">
        {/* Background Track */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#edf0ed"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${arcLength} ${circumference}`}
          transform={`rotate(${rotation} 60 60)`}
        />
        {/* Green Progress Arc */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#1b6e27"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${scoreLength} ${circumference}`}
          strokeDashoffset={0}
          transform={`rotate(${rotation} 60 60)`}
        />
      </svg>
      {/* Score text */}
      <div className="absolute inset-0 flex flex-col mb-2 items-center justify-center">
        <div className="flex items-baseline">
          <span className="text-[30px] font-black text-[#1b6e27] leading-none tracking-tight">{score}</span>
          <span className="ml-1 text-[24px] font-semibold text-[#626a64]">/ 100</span>
        </div>
      </div>

      {/* High eligibility badge */}
      <div className="absolute bottom-14 left-0 right-0 flex justify-center items-center gap-1.5 mx-auto w-fit px-2">
        <ShieldCheck size={18} strokeWidth={2.5} className="text-white fill-[#1b6e27]" />
        <span className="text-[10px] font-semibold uppercase text-[#1b6e27]">High Eligibility</span>
      </div>
    </div>
  );
};


/* =========================================================
   STATUS ITEM
========================================================= */

interface StatusItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  warning?: boolean;
}

const StatusItem = ({
  icon,
  title,
  warning = false,
}: StatusItemProps) => {
  return (
    <div
      className="flex flex-col items-center text-center min-w-0"
    >
      {/* Icon */}
      <div
        className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mb-3 ${warning ? "bg-[#fff8ed] border border-[#efc080]" : "bg-[#f1f6f1] border border-[#dce7dc]"}`}
      >
        {icon}
      </div>

      {/* Title */}
      <div
        className="min-h-[32px] flex items-center justify-center"
      >
        <span
          className="text-[12px] leading-[1.3] font-semibold text-[#424942]"
        >
          {title}
        </span>
      </div>

      {/* Status */}
      <div className="mt-2.5">
        {warning ? (
          <div
            className="w-[28px] h-[28px] rounded-full bg-[#e98218] flex items-center justify-center"
          >
            <span className="text-white text-[18px] font-semibold">
              !
            </span>
          </div>
        ) : (
          <div
            className="w-[28px] h-[28px] rounded-full bg-[#17732a] flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
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
}

const ActionButton = ({
  children,
  primary = false,
  icon,
  href,
}: ActionButtonProps) => {
  const className = `h-[44px] w-full rounded-[6px] px-4 flex items-center justify-center gap-2 text-[12px] font-semibold uppercase transition-all ${primary ? `bg-[#176b27] text-white hover:bg-[#115d20]` : `bg-white border border-[#91a592] text-[#28552f] hover:bg-[#f7faf7]`}`;
  
  if (href) {
    return (
      <Link href={href} target="_blank" className={className}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

const FinalScoreFooter = () => {
  return (
    <div className="w-full mt-4 bg-white border border-[#dfe5df] rounded-[16px] overflow-hidden shadow-[0_1px_5px_rgba(0,0,0,0.03)]">

      {/* =====================================================
          TOP SECTION
      ====================================================== */}
      <div className="flex flex-col lg:flex-row w-full">

        {/* ===================================================
            SCORE SECTION (Left Column)
        ==================================================== */}
        <div className="w-full lg:w-[290px] xl:w-[320px] shrink-0 flex flex-col items-center lg:items-start border-b lg:border-b-0 lg:border-r border-[#e6ebe6] px-5 lg:px-7 pt-4">
          <h2 className="text-[12px] lg:text-[13px] font-semibold uppercase text-[#265a29] tracking-wide mb-3 text-center lg:text-left w-full whitespace-nowrap">
            Your Preliminary Eligibility Score
          </h2>
          <div className="w-full flex justify-center">
            <EligibilityScore score={95} />
          </div>
        </div>


        {/* ===================================================
            STATUS SECTION
        ==================================================== */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center py-1 lg:py-2 w-full">

          {/* 1 */}
          <StatusItem
            title="Micro Enterprise"
            icon={
              <Building2
                size={36}
                strokeWidth={1.6}
                className="text-[#58745c]"
              />
            }
          />

          {/* 2 */}
          <StatusItem
            title="Manufacturing"
            icon={
              <Factory
                size={36}
                strokeWidth={1.6}
                className="text-[#58745c]"
              />
            }
          />

          {/* 3 */}
          <StatusItem
            title={
              <>
                Approved
                <br />
                Industry Match
              </>
            }
            icon={
              <FileCheck2
                size={36}
                strokeWidth={1.6}
                className="text-[#58745c]"
              />
            }
          />

          {/* 4 */}
          <StatusItem
            title="Valid Udyam"
            icon={
              <FileCheck2
                size={36}
                strokeWidth={1.6}
                className="text-[#58745c]"
              />
            }
          />

          {/* 5 */}
          <StatusItem
            title="Women Category"
            icon={
              <Sprout
                size={36}
                strokeWidth={1.6}
                className="text-[#58745c]"
              />
            }
          />

          {/* 6 */}
          <StatusItem
            warning
            title={
              <>
                Additional Financial
                <br />
                Verification
              </>
            }
            icon={
              <AlertCircle
                size={36}
                strokeWidth={1.8}
                className="text-[#e17f19]"
              />
            }
          />
        </div>

      </div>

      {/* =====================================================
          BOTTOM SECTION
      ====================================================== */}
      <div className="border-t border-[#e6ebe6] bg-white p-3 flex flex-col xl:flex-row gap-3 w-full">

        {/* ===================================================
            RECOMMENDED NEXT STEP
        ==================================================== */}
        <div className="bg-[#f5f8f5] rounded-[8px] px-4 py-2 flex flex-col justify-center w-full xl:w-[420px] shrink-0 border border-[#e6ebe6]/50">
          <h3 className="text-[14px] font-semibold uppercase text-[#265a29] mb-1 tracking-wide">
            Recommended Next Step
          </h3>
          <p className="text-[14px] leading-[1.3] font-semibold text-[#374151]">
            You appear eligible. Proceed with your Bharat Organic Expo participation.
          </p>
        </div>

        {/* ===================================================
            BUTTONS
        ==================================================== */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">

          {/* Apply */}
          <ActionButton
            primary
            icon={<ArrowRight size={18} strokeWidth={2.3} />}
          >
            Apply for PMS Support
          </ActionButton>


          {/* Book */}
          <ActionButton
            icon={
              <ArrowRight
                size={28}
                strokeWidth={2.3}
              />
            }
          >
            Book Your Stall
          </ActionButton>


          {/* Download */}
          <ActionButton
            icon={
              <Download
                size={27}
                strokeWidth={2.2}
              />
            }
          >
            Download Eligibility Summary
          </ActionButton>


          {/* Support */}
          <ActionButton
            icon={
              <Headphones
                size={27}
                strokeWidth={2.2}
              />
            }
          >
            Talk to PMS Support Team
          </ActionButton>

        </div>

      </div>


      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="hidden max-lg:block p-5">

        {/* Score */}
        <div className="flex flex-col items-center">

          <h2 className="text-[15px] font-semibold uppercase text-[#35653c] mb-4 text-center">
            Your Preliminary Eligibility Score
          </h2>

          <EligibilityScore score={95} />

          <div className="flex items-center gap-2 -mt-3 mb-6">

            <ShieldCheck
              size={18}
              className="text-white fill-[#176b27]"
            />

            <span className="text-[12px] font-semibold uppercase text-[#35653c]">
              High Eligibility
            </span>

          </div>

        </div>


        {/* Status */}
        <div className="grid grid-cols-2 gap-5 mb-6">

          <StatusItem
            title="Micro Enterprise"
            icon={<Building2 size={24} className="text-[#58745c]" />}
          />

          <StatusItem
            title="Manufacturing"
            icon={<Factory size={24} className="text-[#58745c]" />}
          />

          <StatusItem
            title={
              <>
                Approved
                <br />
                Industry Match
              </>
            }
            icon={<FileCheck2 size={24} className="text-[#58745c]" />}
          />

          <StatusItem
            title="Valid Udyam"
            icon={<FileCheck2 size={24} className="text-[#58745c]" />}
          />

          <StatusItem
            title="Women Category"
            icon={<Sprout size={24} className="text-[#58745c]" />}
          />

          <StatusItem
            warning
            title={
              <>
                Additional Financial
                <br />
                Verification
              </>
            }
            icon={<AlertCircle size={24} className="text-[#e17f19]" />}
          />

        </div>


        {/* Recommended */}
        <div className="bg-[#f5f8f5] rounded-[10px] p-5 mb-4">

          <h3 className="text-[13px] font-semibold uppercase text-[#35653c] mb-2">
            Recommended Next Step
          </h3>

          <p className="text-[11px] text-gray-600 leading-relaxed">
            You appear eligible. Proceed with your Bharat Organic Expo
            participation.
          </p>

        </div>


        {/* Buttons */}
        <div className="grid grid-cols-1 gap-2">

          <ActionButton
            primary
            icon={<ArrowRight size={20} />}
          >
            Apply for PMS Support
          </ActionButton>

          <ActionButton
            icon={<ArrowRight size={20} />}
          >
            Book Your Stall
          </ActionButton>

          <ActionButton
            icon={<Download size={20} />}
          >
            Download Eligibility Summary
          </ActionButton>

          <ActionButton
            icon={<Headphones size={20} />}
          >
            Talk to PMS Support Team
          </ActionButton>

        </div>

      </div>

    </div>
  );
};

export default FinalScoreFooter;
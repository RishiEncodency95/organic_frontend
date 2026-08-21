import React from "react";
import {
  FileBadge2,
  ClipboardList,
  Upload,
  CircleUserRound,
  ArrowRight,
  ShieldCheck,
  FileText,
  Folder,
  Headphones,
  ShieldAlert,
} from "lucide-react";
import readyToExploreImg from "@/app/assets/participate/msme/ready_to_explore.jpeg";

/**
 * Section 11 — Final CTA
 * "Ready to Explore PMS Support?" banner.
 * Background image/graphics are handled outside this component —
 * this only renders the foreground content (badge, heading, cards,
 * CTAs, feature strip and disclaimer).
 */

interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center rounded-2xl bg-white/95 px-4 py-4 text-center shadow-lg ring-1 ring-black/5 sm:px-5">
    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#d5e8cc]">
      {icon}
    </div>
    <h3 className="text-sm font-semibold text-[#0F2A1D] sm:text-base">{title}</h3>
    <span className="my-1.5 h-[3px] w-8 rounded-full bg-[#1B5E20]" />
    <p className="text-[11px] leading-relaxed text-gray-900 sm:text-xs">
      {description}
    </p>
  </div>
);

interface FeatureProps {
  icon: React.ReactNode;
  label: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-white">
    <span className="shrink-0">{icon}</span>
    <span className="text-xs font-semibold sm:text-sm">{label}</span>
  </div>
);

const PMSFinalCTASection: React.FC = () => {
  return (
    <section
      aria-labelledby="pms-final-cta-heading"
      className="relative w-full overflow-hidden px-4 py-4 md:px-11"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={readyToExploreImg.src}
          alt=""
          className="h-full w-full object-cover pointer-events-none"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-2 lg:max-w-[50%]">
        {/* Heading */}
        <h2
          id="pms-final-cta-heading"
          className="text-center text-[30px] font-semibold leading-tight text-[#0F2A44] sm:text-[32px]"
        >
          Ready to Explore <span className="text-[#1B5E20]">PMS Support?</span>
        </h2>

        {/* Subheading with dashed dividers */}
        <div className="mt-3 flex items-center gap-3 text-[#173B1F] sm:gap-4">
          <span className="hidden h-px w-10 border-t-2 border-[#1B5E20]/50 sm:block" aria-hidden="true" />
          <p className="text-center text-sm font-medium sm:text-base">
            Start with a Simple Eligibility Check.
          </p>
          <span className="hidden h-px w-10 border-t-2 border-[#1B5E20]/50 sm:block" aria-hidden="true" />
        </div>

        {/* Option cards */}
        <div className="relative mt-4 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <OptionCard
            icon={<FileBadge2 className="h-7 w-7 text-[#1B5E20]" strokeWidth={1.75} />}
            title="Already Udyam registered?"
            description="Upload your certificate and let us conduct a preliminary screening."
          />

          {/* OR divider badge */}
          <span
            className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1B5E20] text-sm font-semibold text-white ring-4 ring-white sm:flex"
            aria-hidden="true"
          >
            OR
          </span>
          <div className="flex items-center justify-center sm:hidden" aria-hidden="true">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B5E20] text-sm font-semibold text-white ring-4 ring-white">
              OR
            </span>
          </div>

          <OptionCard
            icon={<ClipboardList className="h-7 w-7 text-[#1B5E20]" strokeWidth={1.75} />}
            title="Not registered yet?"
            description="Start with Udyam Registration guidance."
          />
        </div>

        {/* CTA buttons */}
        <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#1B5E20] px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#164C1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20] sm:text-xs"
          >
            <Upload className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Check Your PMS Eligibility
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-[#1B5E20] bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-[#1B5E20] shadow-sm transition hover:bg-[#EAF3E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20] sm:text-xs"
          >
            <CircleUserRound className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Get Udyam Registration Guidance
          </button>
        </div>

        {/* Talk to support link */}
        <a
          href="#pms-support-team"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B5E20] underline-offset-4 hover:underline sm:text-sm"
        >
          Talk to PMS Support Team
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
        </a>
      </div>

      {/* Feature strip + Disclaimer - wider width */}
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <ul className="mt-5 flex w-full flex-wrap items-center justify-center gap-x-0 divide-x divide-white/30 rounded-lg bg-[#ea580c] px-2 py-2">
          <li className="px-3">
            <Feature
              icon={<ShieldCheck className="h-5 w-5" strokeWidth={2} />}
              label="Registration Guidance"
            />
          </li>
          <li className="px-3">
            <Feature
              icon={<CircleUserRound className="h-5 w-5" strokeWidth={2} />}
              label="Eligibility Screening"
            />
          </li>
          <li className="px-3">
            <Feature
              icon={<FileText className="h-5 w-5" strokeWidth={2} />}
              label="Application Support"
            />
          </li>
          <li className="px-3">
            <Feature icon={<Folder className="h-5 w-5" strokeWidth={2} />} label="Documentation" />
          </li>
          <li className="px-3">
            <Feature
              icon={<Headphones className="h-5 w-5" strokeWidth={2} />}
              label="Claim Assistance"
            />
          </li>
        </ul>

      </div>

      {/* Disclaimer - full section width */}
      <div className="relative z-10 w-full px-4 md:px-11">
        <div className="mt-5 flex w-full items-start gap-5 rounded-xl bg-white/95 p-6 shadow-lg ring-1 ring-black/5 sm:p-4">
          <div className="flex shrink-0 items-center gap-3">
            <ShieldAlert className="h-12 w-12 text-[#1B5E20]" strokeWidth={2} aria-hidden="true" />
            <span className="text-sm font-semibold uppercase leading-tight text-[#1B5E20] sm:text-base">
              Important
              <br />Disclaimer
            </span>
          </div>
          <p className="border-l-2 border-[#1B5E20]/30 pl-5 text-xs leading-relaxed text-gray-900 sm:text-sm">
            Bharat Organic Expo / Organiser provides PMS facilitation, preliminary eligibility
            screening, Udyam Registration guidance, documentation and claim-process assistance.
            Event approval does not constitute automatic approval of an individual MSE
            application or reimbursement claim. Eligibility, sanction, permissible assistance and
            reimbursement are subject to applicable Ministry of MSME guidelines and decisions of
            the competent authority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PMSFinalCTASection;
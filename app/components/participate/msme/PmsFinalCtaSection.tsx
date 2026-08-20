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
  <div className="flex flex-col items-center rounded-2xl bg-white/95 px-6 py-8 text-center shadow-sm ring-1 ring-black/5 sm:px-8">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF3E7]">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-[#0F2A1D] sm:text-xl">{title}</h3>
    <span className="my-2 h-[3px] w-8 rounded-full bg-[#1B5E20]" />
    <p className="max-w-[22ch] text-sm leading-relaxed text-slate-600 sm:text-[15px]">
      {description}
    </p>
  </div>
);

interface FeatureProps {
  icon: React.ReactNode;
  label: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-[#1B5E20]">
    <span className="shrink-0">{icon}</span>
    <span className="text-xs font-semibold text-[#173B1F] sm:text-sm">{label}</span>
  </div>
);

const PMSFinalCTASection: React.FC = () => {
  return (
    <section
      aria-labelledby="pms-final-cta-heading"
      className="relative w-full px-4 py-10 md:px-11 sm:py-14"
    >
      <div className="mx-auto flex w-full flex-col items-center">
        {/* Eyebrow badge */}
        <span className="mb-4 rounded-md bg-[#1B5E20] px-4 py-1.5 text-[11px] font-bold tracking-wider text-white sm:text-xs">
          SECTION 11 — FINAL CTA
        </span>

        {/* Heading */}
        <h2
          id="pms-final-cta-heading"
          className="text-center text-3xl font-extrabold leading-tight text-[#0F2A44] sm:text-4xl lg:text-[42px]"
        >
          Ready to Explore <span className="text-[#1B5E20]">PMS Support?</span>
        </h2>

        {/* Subheading with dashed dividers */}
        <div className="mt-3 flex items-center gap-3 text-[#173B1F] sm:gap-4">
          <span className="hidden h-px w-10 border-t-2 border-dashed border-[#1B5E20]/50 sm:block" aria-hidden="true" />
          <p className="text-center text-base font-medium sm:text-lg">
            Start with a Simple Eligibility Check.
          </p>
          <span className="hidden h-px w-10 border-t-2 border-dashed border-[#1B5E20]/50 sm:block" aria-hidden="true" />
        </div>

        {/* Option cards */}
        <div className="relative mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <OptionCard
            icon={<FileBadge2 className="h-7 w-7 text-[#1B5E20]" strokeWidth={1.75} />}
            title="Already Udyam registered?"
            description="Upload your certificate and let us conduct a preliminary screening."
          />

          {/* OR divider badge */}
          <span
            className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1B5E20] text-sm font-bold text-white ring-4 ring-white sm:flex"
            aria-hidden="true"
          >
            OR
          </span>
          <div className="flex items-center justify-center sm:hidden" aria-hidden="true">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B5E20] text-sm font-bold text-white ring-4 ring-white">
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
        <div className="mt-6 flex w-full flex-col gap-4 sm:flex-row">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#1B5E20] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#164C1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20] sm:text-[15px]"
          >
            <Upload className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Check Your PMS Eligibility
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-[#1B5E20] bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-[#1B5E20] shadow-sm transition hover:bg-[#EAF3E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E20] sm:text-[15px]"
          >
            <CircleUserRound className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Get Udyam Registration Guidance
          </button>
        </div>

        {/* Talk to support link */}
        <a
          href="#pms-support-team"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#1B5E20] underline-offset-4 hover:underline sm:text-base"
        >
          Talk to PMS Support Team
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
        </a>

        {/* Feature strip */}
        <ul className="mt-7 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
          <li>
            <Feature
              icon={<ShieldCheck className="h-4 w-4" strokeWidth={2} />}
              label="Registration Guidance"
            />
          </li>
          <li>
            <Feature
              icon={<CircleUserRound className="h-4 w-4" strokeWidth={2} />}
              label="Eligibility Screening"
            />
          </li>
          <li>
            <Feature
              icon={<FileText className="h-4 w-4" strokeWidth={2} />}
              label="Application Support"
            />
          </li>
          <li>
            <Feature icon={<Folder className="h-4 w-4" strokeWidth={2} />} label="Documentation" />
          </li>
          <li>
            <Feature
              icon={<Headphones className="h-4 w-4" strokeWidth={2} />}
              label="Claim Assistance"
            />
          </li>
        </ul>

        {/* Disclaimer */}
        <div className="mt-7 flex w-full flex-col items-start gap-3 rounded-xl bg-white/95 p-4 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-start sm:gap-4 sm:p-5">
          <div className="flex shrink-0 flex-col items-center gap-1 sm:w-32">
            <ShieldAlert className="h-6 w-6 text-[#1B5E20]" strokeWidth={2} aria-hidden="true" />
            <span className="text-center text-xs font-extrabold uppercase leading-tight text-[#1B5E20] sm:text-[13px]">
              Important
              <br className="hidden sm:block" /> Disclaimer
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-700 sm:text-[13px]">
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
import type { FC } from "react";
import {
  Store,
  Plane,
  Truck,
  Megaphone,
  CheckCircle,
  AlertCircle,
  FileText,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Clock,
  Headphones,
  FileCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import SectionContainer from "@/app/components/layout/SectionContainer";
import whatYourPmsImg from "@/app/assets/participate/msme/what_your_pms.png";
import calcImg from "@/app/assets/participate/msme/calc.png";

interface EligibleExpense {
  icon: FC<{ className?: string }>;
  descIcon: FC<{ className?: string }>;
  number: number;
  title: string;
  subtitle: string;
  description: string;
}

const ELIGIBLE_EXPENSES: EligibleExpense[] = [
  {
    icon: Store,
    descIcon: CheckCircle,
    number: 1,
    title: "SPACE RENT",
    subtitle: "Stall / Built-up Space",
    description: "Up to 80% / 100%* of eligible space rent",
  },
  {
    icon: Plane,
    descIcon: CheckCircle,
    number: 2,
    title: "TRAVEL",
    subtitle: "One Representative*",
    description: "Eligible travel expenditure*",
  },
  {
    icon: Truck,
    descIcon: CheckCircle,
    number: 3,
    title: "FREIGHT",
    subtitle: "Exhibition Material",
    description: "Transportation of products / display material*",
  },
  {
    icon: Megaphone,
    descIcon: CheckCircle,
    number: 4,
    title: "PUBLICITY",
    subtitle: "Eligible Promotion",
    description: "Eligible publicity expenditure*",
  },
];

const FOOTER_BADGES = [
  { icon: ShieldCheck, label: "Government Approved Scheme" },
  { icon: CheckCircle, label: "Transparent Process" },
  { icon: Clock, label: "Timely Support" },
  { icon: FileCheck, label: "Hassle-free Documentation" },
  { icon: Users, label: "For Micro & Small Enterprises Only" },
];

const PmsSupportCoverSection: FC = () => {
  return (
    <section
      aria-labelledby="pms-support-cover-heading"
      className="relative w-full overflow-hidden bg-[#f8faf5]"
    >
      {/* Top green banner */}
      <div className="flex justify-center bg-[#1b5e20] py-2">
        <div className="flex w-auto items-center gap-2 px-6 py-0.5">
          <Users className="h-5 w-5 text-white" aria-hidden="true" />
          <h2
            id="pms-support-cover-heading"
            className="text-sm font-semibold uppercase tracking-wide text-white sm:text-base"
          >
            What Can Your PMS Support Cover?
          </h2>
        </div>
      </div>

      <SectionContainer>
        <div className="relative mx-auto w-full py-8 md:py-10">
          {/* Top-right absolute image */}
          <img
            src={whatYourPmsImg.src}
            alt="What your PMS covers"
            className="absolute right-0 top-0 hidden h-48 w-auto object-contain lg:block"
          />

          {/* Main content grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left side - Title and description */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[24px] font-bold leading-tight text-[#1b5e20] sm:text-[28px] md:text-[32px]">
                More Than Just
                <br />
                Stall Space Rent
              </h3>
              <p className="max-w-md text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                For eligible MSE participation in an approved exhibition, PMS
                assistance may cover eligible exhibition space rent along with
                specified contingency expenses, subject to applicable scheme
                guidelines and approval.
              </p>
            </div>

            {/* Right side - Maximum assistance box */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md rounded-2xl border-2 border-[#1b5e20]/20 bg-white p-6 text-center shadow-md">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#1b5e20]">
                  Up To
                </p>
                <p className="mt-2 text-[36px] font-bold leading-none text-[#1b5e20] sm:text-[42px]">
                  ₹1.50 LAKH*
                </p>
                <div className="mx-auto mt-2 flex items-center justify-center gap-2">
                  <span className="h-px flex-1 bg-[#1b5e20]/30" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#1b5e20]">
                    Maximum Overall Assistance
                  </p>
                  <span className="h-px flex-1 bg-[#1b5e20]/30" />
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  per Eligible Enterprise / Event
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  (All taxes included and subject to actual eligible expenditure)
                </p>
              </div>
            </div>
          </div>

          {/* Eligible Expenses Section */}
          <div className="relative mt-10 overflow-visible rounded-2xl bg-white pt-8 shadow-sm ring-1 ring-black/5">
            {/* Green banner header - absolute, half outside */}
            <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="w-auto rounded-full bg-[#1b5e20] px-6 py-2 shadow-lg">
                <h4 className="whitespace-nowrap text-center text-[13px] font-bold uppercase tracking-wide text-white sm:text-[15px]">
                  Eligible Expenses Covered Under PMS for Exhibition Participation
                </h4>
              </div>
            </div>

            <div className="p-4 sm:p-6">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ELIGIBLE_EXPENSES.map((expense, index) => {
                const Icon = expense.icon;
                const DescIcon = expense.descIcon;
                return (
                  <div
                    key={expense.title}
                    className="relative flex flex-col gap-3 pl-6"
                  >
                    {/* Left divider with plus icon */}
                 {index!==0 && (
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                      <div className="h-1/2 w-px bg-[#1b5e20]/20" />
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
                        <span className="text-[14px] font-bold leading-none text-white">+</span>
                      </div>
                      <div className="h-1/2 w-px bg-[#1b5e20]/20" />
                    </div>)}

                    {/* Top card: Icon + Number + Title + Subtitle */}
                    <div className="rounded-xl border border-[#1b5e20]/10 bg-[#f8faf5] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200">
                          <Icon className="h-6 w-6 text-[#1b5e20]" aria-hidden="true" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1b5e20] text-[11px] font-bold text-white">
                            {expense.number}
                          </span>
                          <div>
                            <p className="text-[13px] font-bold uppercase text-slate-900">
                              {expense.title}
                            </p>
                            <p className="text-[11px] text-slate-500">
                              {expense.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Bottom divider */}
                    </div>
                      <div className="h-px bg-[#1b5e20]/20" />

                    {/* Bottom card: Description */}
                    <div className="rounded-xl border border-[#1b5e20]/10 bg-white p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                          <DescIcon className="h-4 w-4 text-[#1b5e20]" aria-hidden="true" />
                        </div>
                        <p className="text-[12px] leading-snug text-slate-600">
                          {expense.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </div>

          {/* Additional Contingency Support */}
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Left - Contingency box */}
            <div className="rounded-2xl border border-[#1b5e20]/20 bg-white p-5">
              <h4 className="text-[14px] font-bold uppercase text-slate-900 sm:text-[16px]">
                Additional Contingency Support
              </h4>
              <p className="mt-3 text-[28px] font-bold text-[#1b5e20] sm:text-[32px]">
                Up to ₹25,000*
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#1b5e20]/10 px-3 py-1 text-[12px] font-semibold text-[#1b5e20]">
                  Travel
                </span>
                <span className="text-[#1b5e20]">+</span>
                <span className="rounded-full bg-[#1b5e20]/10 px-3 py-1 text-[12px] font-semibold text-[#1b5e20]">
                  Freight
                </span>
                <span className="text-[#1b5e20]">+</span>
                <span className="rounded-full bg-[#1b5e20]/10 px-3 py-1 text-[12px] font-semibold text-[#1b5e20]">
                  Publicity
                </span>
              </div>
            </div>

            {/* Middle - Notes */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1b5e20]" />
                <p className="text-[13px] leading-relaxed text-slate-600">
                  100% of eligible contingency expenditure, subject to the
                  applicable ceiling and PMS guidelines.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-[#fff8e1] p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#f58220]" />
                <p className="text-[13px] leading-relaxed text-slate-600">
                  <strong className="font-semibold text-slate-900">
                    Important:
                  </strong>{" "}
                  The ₹25,000 contingency support is part of the overall
                  assistance ceiling and not ₹25,000 over and above ₹1.50 lakh.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex items-center justify-center">
              <img
                src={calcImg.src}
                alt="PMS Calculation"
                className="h-48 w-auto object-contain lg:h-56"
              />
            </div>
          </div>

          {/* Know Before You Apply + CTA Buttons */}
          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#f0f7f0] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <h4 className="text-[14px] font-bold uppercase text-slate-900 sm:text-[16px]">
                Know Before You Apply
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                Actual assistance depends on the enterprise category, eligible
                expenditure, approved participation, applicable limits, supporting
                documents and final sanction by the competent authority.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/participate/msme/eligibility-check"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1b5e20] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-[#2d7a2d]"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Check Your PMS Eligibility
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/participate/msme/eligibility-check"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#1b5e20] bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-[#1b5e20] transition-colors hover:bg-[#f0f7f0]"
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                Understand Your Estimated Support
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Footer row: Terms left + Badges right */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#1b5e20]/10 pt-6 sm:flex-row">
            {/* Terms note - left */}
            <p className="text-[10px] text-slate-500 sm:text-[11px]">
              * Terms, limits and eligibility are subject to the applicable
              Procurement &amp; Marketing Support (PMS) Scheme guidelines and
              competent authority approval.
            </p>

            {/* Badges - right, single row */}
            <div className="flex shrink-0 flex-nowrap items-center gap-3">
              {FOOTER_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-1.5 text-[12px] text-slate-600 sm:text-[13px]"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0 text-[#1b5e20]" aria-hidden="true" />
                    <span className="whitespace-nowrap">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default PmsSupportCoverSection;

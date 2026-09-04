import React from "react";
import {
  FileText,
  ShieldCheck,
  HandCoins,
  TrendingUp,
  MousePointerClick,
  UploadCloud,
  Search,
  ClipboardCheck,
  Headphones,
  Users,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";
import howToApplyImg from "@/app/assets/participate/msme/how_to_apply.png";
import everySupportImg from "@/app/assets/participate/msme/every_support.png";
import readyToApplyImg from "@/app/assets/participate/msme/ready_to_apply_right.png";
import leftImage from "@/app/assets/participate/msme/left_image.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const highlightCards = [
  {
    icon: FileText,
    title: "Easy Application",
    description: "Simple documentation with expert support.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Eligibility",
    description: "Our team screens your documents & eligibility.",
  },
  {
    icon: HandCoins,
    title: "Financial Assistance",
    description: "Get up to applicable support as per PMS.",
  },
  {
    icon: TrendingUp,
    title: "Focus On Growth",
    description: "We handle the process, you grow your business.",
  },
];

const journeySteps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Apply Online",
    description:
      "Fill in the PMS application form and share basic business details.",
  },
  {
    number: "02",
    icon: UploadCloud,
    title: "Submit Documents",
    description:
      "Upload required documents for verification and PMS eligibility.",
  },
  {
    number: "03",
    icon: Search,
    title: "Screening & Verification",
    description:
      "Our team verifies eligibility and matches with PMS scheme guidelines.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Approval & Submission",
    description:
      "We prepare and submit your application to the concerned MSME-DFO.",
  },
];

export default function PmsSupportSection() {
  return (
    <section
      aria-labelledby="pms-support-heading"
      className="relative w-full overflow-hidden bg-[#F7F8F0] py-4"
    >
      {/* Background image - half height from top */}
      <div
        className="absolute left-0 top-0 z-0 h-[50%] w-full bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${howToApplyImg.src})` }}
      />

      <SectionContainer>
      <div className="relative z-10 mx-auto flex w-full flex-col gap-4">
        {/* ---------- Top block: heading + highlight cards ---------- */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h2
              id="pms-support-heading"
              className="text-[18px] font-semibold uppercase leading-[1.05] tracking-tight text-slate-900 md:text-[28px] lg:text-[32px]"
            >
              <span className="text-[#1b5e20]">
                How to Apply
                </span>
              <br />
              &amp; Get PMS Support
            </h2>

            <p className="max-w-xl text-[14px] text-slate-600 sm:text-[15px]">
              A simple, guided process to help eligible MSEs receive financial
              assistance for participation.
            </p>

            <span
              className="h-1 w-16 mt-2 rounded-full bg-[#3b8c2a]"
              aria-hidden="true"
            />
          </div>

          {/* Highlight cards */}
          <div className="w-[60%] rounded-2xl bg-white p-4 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]">
            <ul className="flex flex-col sm:flex-row sm:items-stretch">
              {highlightCards.map(
                ({ icon: Icon, title, description }, index) => (
                  <li
                    key={title}
                    className={`py-3 px-3 ${index < highlightCards.length - 1 ? "sm:border-r sm:border-gray-200" : ""}`}
                  >
                    <div className="flex flex-row items-start gap-3 sm:gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFF7EE] sm:h-12 sm:w-12">
                        <Icon
                          className="h-5 w-5 text-[#1b5e20] sm:h-6 sm:w-6"
                          aria-hidden="true"
                        />
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[13px] font-semibold uppercase leading-tight text-slate-900 sm:text-[14px]">
                          {title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[13px] leading-snug text-slate-600 sm:text-sm">
                      {description}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* ---------- 4-step journey ---------- */}
        <div className="relative rounded-3xl bg-gray-100 p-4 pt-4 ring-1 ring-black/5 sm:p-5 sm:pt-4">
          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
            <h3 className="whitespace-nowrap rounded-lg bg-[#1b5e20] px-4 py-1 text-[16px] font-semibold tracking-tight text-white shadow-lg md:text-[18px] lg:text-[20px]">
              Your 4-Step Journey
            </h3>
          </div>

          <ol className="grid grid-cols-1 gap-y-8 pt-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-4">
            {journeySteps.map(
              ({ number, icon: Icon, title, description }, index) => (
                <li
                  key={number}
                  className="relative flex flex-col items-center text-center pt-8"
                >
                  {index < journeySteps.length - 1 && (
                    <span
                      className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block z-20"
                      aria-hidden="true"
                    >
                      <svg width="44" height="14" viewBox="0 0 44 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7H38M38 7L30 1M38 7L30 13" stroke="#0d4a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}

                  <span className="absolute top-[8px] left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#1b5e20] text-[13px] font-bold text-white shadow-lg ring-4 ring-gray-100">
                    {number}
                  </span>

                  <div className="flex h-full flex-col rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-4">
                    <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EFF7EE] sm:h-16 sm:w-16">
                      <Icon
                        className="h-6 w-6 text-[#1b5e20] sm:h-7 sm:w-7"
                        aria-hidden="true"
                      />
                    </span>

                    <h4 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-slate-900 sm:text-[14px]">
                      {title}
                    </h4>
                    <p className="mx-auto max-w-[16rem] text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                      {description}
                    </p>
                  </div>
                </li>
              )
            )}
          </ol>
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 mt-2">
          {/* Expert support at every step */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0b2912] text-white">
            <img
              src={everySupportImg.src}
              alt="Bharat Organic Expo support specialist ready to help with PMS applications"
              className="absolute -top-4 left-0 h-[calc(100%+2rem)] w-[40%] object-cover object-top"
              loading="lazy"
            />
            <div className="relative ml-[42%] flex flex-col justify-center gap-2 p-4 sm:p-5">
              <div className="flex gap-2">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Headphones className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[14px] font-semibold uppercase leading-tight sm:text-[15px]">
                    Expert Support at Every Step
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/70 sm:text-sm">
                    Our PMS experts guide you through documentation, submissions
                    and follow-ups—so you get the support you deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Have questions / contact */}
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-[#f3f4f6] p-5 shadow-sm sm:p-6">
            <div className="flex flex-row gap-2">
              <span className="flex h-16 w-16 min-h-16 min-w-16 items-center justify-center rounded-full bg-white">
                <Users className="h-6 w-6 text-[#1b5e20]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[14px] font-semibold uppercase leading-tight text-slate-900 sm:text-[15px]">
                  Have Questions?
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  Our team is here to help you with eligibility, documents and
                  the PMS process.
                </p>
              </div>
            </div>
            <address className="mt-1 flex flex-col gap-1.5 text-[13px] not-italic text-slate-700 sm:text-sm">
              <a
                href="mailto:info@namogangewellness.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail
                  className="h-5 w-5 shrink-0 text-[#1b5e20]"
                  aria-hidden="true"
                />
                info@namogangewellness.com
              </a>
              <a
                href="tel:+919654900525"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone
                  className="h-5 w-5 shrink-0 text-[#1b5e20]"
                  aria-hidden="true"
                />
                +91 96549 00525
              </a>
            </address>
          </div>

          {/* Ready to apply / CTA */}
          <div className="relative flex max-w-sm overflow-visible rounded-2xl bg-[#0b2912] text-white">
            <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <FileText className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[14px] font-semibold uppercase leading-tight sm:text-[15px]">
                    Ready to Apply?
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/70 sm:text-sm">
                    Take the first step towards financial support and grow your
                    business with us.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#F2B40E] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-[#0b2912] transition-colors hover:bg-[#d4a00c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B40E] sm:text-sm"
              >
                Start Your Application
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <img
              src={leftImage.src}
              alt="Ready to apply for PMS"
              className="absolute -right-28 top-1/2 -translate-y-1/2 h-[160px] w-auto object-contain z-10"
              loading="lazy"
            />
          </div>
        </div>
        </div>

        {/* ---------- Bottom row: support / contact / CTA ---------- */}
      </div>
      </SectionContainer>
    </section>
  );
}

import React from "react";
import {
  FileText,
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
import applyOnlineImg from "@/app/assets/participate/msme/reference-icons/apply-online.png";
import submitDocsImg from "@/app/assets/participate/msme/submit_documents.png";
import screeningImg from "@/app/assets/participate/msme/screening_verification.png";
import approvalImg from "@/app/assets/participate/msme/approval_and_submission.png";
import easyAppImg from "@/app/assets/participate/msme/easy_application.png";
import verifiedEligImg from "@/app/assets/participate/msme/verified_eligibility.png";
import financialAssistImg from "@/app/assets/participate/msme/finaancial_assist.png";
import betterOppImg from "@/app/assets/participate/msme/better_opportunities.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const highlightCards = [
  {
    icon: easyAppImg,
    title: "Easy Application",
    description: "Simple documentation with expert support.",
  },
  {
    icon: verifiedEligImg,
    title: "Verified Eligibility",
    description: "Our team screens your documents & eligibility.",
  },
  {
    icon: financialAssistImg,
    title: "Financial Assistance",
    description: "Get up to applicable support as per PMS.",
  },
  {
    icon: betterOppImg,
    title: "Focus On Growth",
    description: "We handle the process, you grow your business.",
  },
];

const journeySteps = [
  {
    number: "01",
    icon: applyOnlineImg,
    title: "Apply Online",
    description:
      "Fill in the PMS application form and share basic business details.",
  },
  {
    number: "02",
    icon: submitDocsImg,
    title: "Submit Documents",
    description:
      "Upload required documents for verification and PMS eligibility.",
  },
  {
    number: "03",
    icon: screeningImg,
    title: "Screening & Verification",
    description:
      "Our team verifies eligibility and matches with PMS scheme guidelines.",
  },
  {
    number: "04",
    icon: approvalImg,
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
      <div className="absolute left-0 top-0 z-0 h-[60%] w-full">
        <div
          className="h-full w-full bg-cover bg-right-top bg-no-repeat"
          style={{ backgroundImage: `url(${howToApplyImg.src})` }}
        />
        {/* Bottom dissolve gradient */}
        <div className="absolute bottom-0 left-0 h-[10%] w-full bg-gradient-to-b from-transparent to-[#F7F8F0]" />
      </div>

      <SectionContainer>
      <div className="relative z-10 mx-auto flex w-full flex-col gap-4">
        {/* ---------- Top block: heading + highlight cards ---------- */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h2
              id="pms-support-heading"
              className="text-[18px] font-semibold uppercase leading-[1.05] tracking-tight md:text-[28px] lg:text-[46px]"
            >
              <span className="text-[#1b5e20]">
                How to Apply
              </span>
                <br />
                &amp; Get PMS Support
            </h2>

            <p className="max-w-lg text-base">
              A simple, guided process to help eligible MSEs<br/> receive financial
              assistance for participation.
            </p>

            <span
              className="h-1 w-16 mt-2 rounded-full bg-[#3b8c2a]"
              aria-hidden="true"
            />
          </div>

          {/* Highlight cards */}
          <div className="w-[56%] rounded-2xl border border-gray-200 bg-white p-4 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]">
            <ul className="flex flex-col sm:flex-row sm:items-stretch">
              {highlightCards.map(
                ({ icon, title, description }, index) => (
                  <li
                    key={title}
                    className={`py-3 px-3 ${index < highlightCards.length - 1 ? "sm:border-r sm:border-gray-200" : ""}`}
                  >
                    <div className="flex flex-row items-start gap-3 sm:gap-4">
                      <img
                        src={icon.src}
                        alt=""
                        className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[13px] font-semibold uppercase leading-tight text-[#1b5e20] sm:text-[14px]">
                          {title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[13px] leading-snug sm:text-sm">
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
            <h3 className="whitespace-nowrap rounded-lg bg-[#1b5e20] px-8 py-1 text-[16px] font-semibold tracking-tight text-white shadow-lg md:text-[18px] lg:text-[20px]">
              Your 4-Step Journey
            </h3>
          </div>

          <ol className="grid grid-cols-1 gap-y-8 pt-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-4">
            {journeySteps.map(
              ({ number, icon, title, description }, index) => (
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

                  <span className="absolute top-[8px] left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#1b5e20] text-[11px] font-bold text-white shadow-lg ring-3 ring-gray-100">
                    {number}
                  </span>

                  <div className="flex h-full flex-col rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-4">
                    <img
                      src={icon.src}
                      alt=""
                      className="mx-auto mb-4 h-16 w-16 object-contain sm:h-20 sm:w-20"
                      aria-hidden="true"
                    />

                    <h4 className="mb-2 text-[13px] font-semibold uppercase tracking-wide sm:text-[14px]">
                      {title}
                    </h4>
                    <p className="mx-auto max-w-[16rem] text-[13px] leading-relaxed sm:text-sm">
                      {description}
                    </p>
                  </div>
                </li>
              )
            )}
          </ol>
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[1fr_0.8fr_1fr] mt-2">
          {/* Expert support at every step */}
          <div className="relative rounded-2xl bg-[#0b2912] text-white">
            <img
              src={everySupportImg.src}
              alt="Bharat Organic Expo support specialist ready to help with PMS applications"
              className="absolute -top-4 left-0 h-[calc(100%+1rem)] w-[55%] object-cover object-top"
              loading="lazy"
            />
            <div className="relative ml-[42%] flex flex-col justify-center gap-2 p-4 sm:p-5">
              <div className="flex gap-2">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white">
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
          <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-gray-200 bg-[#e5e7eb] p-5 shadow-sm sm:p-6">
            <div className="flex flex-row gap-2">
              <span className="flex h-16 w-16 min-h-16 min-w-16 items-center justify-center rounded-full bg-[#a5d6a7]">
                <Users className="h-6 w-6 text-[#1b5e20]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[14px] font-semibold uppercase leading-tight text-[#1b5e20] sm:text-[15px]">
                  Have Questions?
                </h3>
                <p className="text-[13px] leading-relaxed sm:text-sm">
                  Our team is here to help you with eligibility, documents and
                  the PMS process.
                </p>
              </div>
            </div>
            <address className="mt-1 flex flex-col gap-1.5 text-[13px] not-italic sm:text-sm">
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
          <div className="flex items-center gap-4">
            <div className="relative flex max-w-xs overflow-visible rounded-2xl bg-[#0b2912] text-white">
              <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white p-1">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-white">
                      <FileText className="h-6 w-6 text-[#0b2912]" aria-hidden="true" />
                    </span>
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
            </div>
            <img
              src={leftImage.src}
              alt="Ready to apply for PMS"
              className="h-[180px] w-auto object-contain"
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

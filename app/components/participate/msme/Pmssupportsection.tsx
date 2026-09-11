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
import stepsTitleLeftLeafIcon from "@/app/assets/participate/msme/reference-icons/steps-title-left-leaf.png";
import stepsTitleRightLeafIcon from "@/app/assets/participate/msme/reference-icons/steps-title-right-leaf.png";
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
import Image from "next/image";
import haveQuestionsImg from "@/app/assets/participate/msme/have-questions.png";

const PMS_SUPPORT_SECTION_DATA = [
  {
    id: 1,
    titleLine1: "How to Apply",
    titleLine2: "& Get PMS Support",
    subtitleLine1: "A simple, guided process to help eligible MSMEs",
    subtitleLine2: "receive financial assistance for participation.",
    highlightCards: [
      { id: 1, icon: easyAppImg, title: "Easy Application", description: "Simple documentation with expert support." },
      { id: 2, icon: verifiedEligImg, title: "Verified Eligibility", description: "Our team screens your documents & eligibility." },
      { id: 3, icon: financialAssistImg, title: "Financial Assistance", description: "Get up to applicable support as per PMS." },
      { id: 4, icon: betterOppImg, title: "Focus On Growth", description: "We handle the process, you grow your business." },
    ],
    journeyTitle: "Your 4-Step Journey",
    journeySteps: [
      { id: 1, number: "01", icon: applyOnlineImg, title: "Apply Online", description: "Fill in the PMS application<br/> form and share basic<br/> business details." },
      { id: 2, number: "02", icon: submitDocsImg, title: "Submit Documents", description: "Upload required documents<br/> for verification and <br/>PMS eligibility." },
      { id: 3, number: "03", icon: screeningImg, title: "Screening & Verification", description: "Our team verifies eligibility<br/> and matches with PMS<br/> scheme guidelines." },
      { id: 4, number: "04", icon: approvalImg, title: "Approval & Submission", description: "We prepare and submit <br/>your application to the concerned<br/> MSME-DFO." },
    ],
    expertSupportTitle: "Expert Support at Every Step",
    expertSupportDesc: "Our PMS experts guide you through documentation, submissions and follow-ups—so you get the support you deserve.",
    questionsTitle: "Have Questions?",
    questionsDesc: "Our team is here to help you with eligibility, documents and the PMS process.",
    email: "info@namogangewellness.com",
    phone: "+91 96549 00525",
    readyTitle: "Ready to Apply?",
    readyDesc: "Take the first step towards financial support and grow your business with us.",
    ctaText: "Start Your Application",
    ctaHref: "/registration/book-a-stand"
  }
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
        <div className="absolute bottom-0 left-0 h-[10%] w-full bg-gradient-to-b from-transparent to-[#F7F8F0]" />
      </div>

      <SectionContainer>
        {PMS_SUPPORT_SECTION_DATA.map((data) => (
          <div key={data.id} className="relative z-10 mx-auto flex w-full flex-col gap-8 pt-10">
            {/* ---------- Top block: heading + highlight cards ---------- */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h2
                  id="pms-support-heading"
                  className="text-[18px] font-semibold uppercase leading-[1.05] tracking-tight md:text-[28px] lg:text-[56px]"
                >
                  <span className="text-[#1b5e20]">
                    {data.titleLine1}
                  </span>
                  <br />
                  {data.titleLine2}
                </h2>

                <p className="max-w-lg text-md">
                  {data.subtitleLine1}<br/> {data.subtitleLine2}
                </p>

                <span
                  className="h-1 w-16 mt-2 rounded-full bg-[#3b8c2a]"
                  aria-hidden="true"
                />
              </div>

              {/* Highlight cards */}
              <div className="w-full sm:w-[62%] 2xl:w-[56%] rounded-2xl border border-gray-200 bg-white p-4 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px]">
                <ul className="flex flex-col sm:flex-row sm:items-stretch">
                  {data.highlightCards.map(
                    ({ id, icon, title, description }, index) => (
                      <li
                        key={id}
                        className={`py-3 px-3 ${index < data.highlightCards.length - 1 ? "sm:border-r sm:border-gray-200" : ""}`}
                      >
                        <div className="flex flex-row items-center gap-3 sm:gap-4">
                          <img
                            src={icon.src}
                            alt=""
                            className="h-11 w-11 shrink-0 object-contain sm:h-16 sm:w-16"
                            aria-hidden="true"
                          />
                          <div className="flex flex-col gap-1">
                            <h3 className="text-[13px] font-semibold uppercase leading-tight text-[#1b5e20] sm:text-[14px]">
                              {title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-[14px] leading-snug sm:text-sm mt-2">
                          {description}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* ---------- 4-step journey ---------- */}
            <div className="relative rounded-3xl bg-[#f5f5ed] p-4 pt-4 ring-1 ring-black/5 sm:p-5 sm:pt-4">
              <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 flex items-center">
                <img
                  src={stepsTitleLeftLeafIcon.src}
                  alt=""
                  className="mr-2 hidden h-7 w-auto object-contain sm:block"
                  aria-hidden="true"
                />
                <h3 className="whitespace-nowrap rounded-lg bg-[#1b5e20] px-8 py-1 text-[16px] font-semibold text-white shadow-lg md:text-[18px] lg:text-[20px] uppercase">
                  {data.journeyTitle}
                </h3>
                <img
                  src={stepsTitleRightLeafIcon.src}
                  alt=""
                  className="ml-2 hidden h-7 w-auto object-contain sm:block"
                  aria-hidden="true"
                />
              </div>

              <ol className="grid grid-cols-1 gap-y-8 pt-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-4">
                {data.journeySteps.map(
                  ({ id, number, icon, title, description }, index) => (
                    <li
                      key={id}
                      className="relative flex flex-col items-center text-center pt-8 w-full"
                    >
                      {index < data.journeySteps.length - 1 && (
                        <span
                          className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block z-20"
                          aria-hidden="true"
                        >
                          <svg
                            width="60"
                            height="19"
                            viewBox="0 0 60 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 9.5H51.8M51.8 9.5L40.9 1M51.8 9.5L40.9 18"
                              stroke="#0d4a1a"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}

                      <span className="absolute top-[8px] left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#1b5e20] text-sm font-bold text-white shadow-lg ring-3 ring-gray-100">
                        {number}
                      </span>

                      <div className="flex h-full w-full flex-col rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 sm:px-6 sm:py-4">
                        <img
                          src={icon.src}
                          alt=""
                          className="mx-auto mb-4 h-16 w-16 object-contain sm:h-20 sm:w-20"
                          aria-hidden="true"
                        />

                        <h4 className="mb-2 text-[17px] font-semibold uppercase tracking-wide text-[#1b5e20]">
                          {title}
                        </h4>
                        <p className="mx-auto max-w-[16rem] text-[13px] leading-relaxed sm:text-sm" dangerouslySetInnerHTML={{__html:description}}>
                        </p>
                      </div>
                    </li>
                  )
                )}
              </ol>
              <div className="flex">
                <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[1fr_0.7fr_0.7fr] mt-4">
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
                        <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-white">
                          <Headphones className="h-12 w-12" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-[14px] font-semibold uppercase leading-tight sm:text-[15px]">
                            {data.expertSupportTitle}
                          </h3>
                          <p className="text-[13px] leading-relaxed text-white/70 sm:text-sm">
                            {data.expertSupportDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Have questions / contact */}
                  <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-gray-200 bg-[#eff1e4] p-5 shadow-sm sm:p-6">
                    <div className="flex flex-row gap-4">
                      <span className="flex h-16 w-16 min-h-20 min-w-20 items-center justify-center rounded-full bg-[#a5d6a7]">
                        <Image src={haveQuestionsImg} alt="Have questions?" className="h-16 w-16 object-contain" />
                      </span>
                      <div>
                        <h3 className="text-[14px] font-semibold uppercase leading-tight text-[#1b5e20] sm:text-[15px]">
                          {data.questionsTitle}
                        </h3>
                        <p className="text-[13px] leading-relaxed sm:text-sm">
                          {data.questionsDesc}
                        </p>
                      </div>
                    </div>
                    <address className="mt-1 flex flex-col gap-1.5 text-[13px] not-italic sm:text-sm border-t pt-3 border-[#e4e7d2]">
                      <a
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Mail
                          className="h-5 w-5 shrink-0 text-[#1b5e20]"
                          aria-hidden="true"
                        />
                        {data.email}
                      </a>
                      <a
                        href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Phone
                          className="h-5 w-5 shrink-0 text-[#1b5e20]"
                          aria-hidden="true"
                        />
                        {data.phone}
                      </a>
                    </address>
                  </div>

                  {/* Ready to apply / CTA */}
                  <div className="flex items-center h-full">
                    <div className="relative flex overflow-visible rounded-2xl bg-[#0b2912] text-white h-full">
                      <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                          <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-white p-1">
                            <span className="flex h-full w-full items-center justify-center rounded-full bg-white">
                              <FileText className="h-12 w-12 text-[#0b2912]" aria-hidden="true" />
                            </span>
                          </span>
                          <div className="flex flex-col gap-2">
                            <h3 className="text-[14px] font-semibold uppercase leading-tight sm:text-[15px]">
                              {data.readyTitle}
                            </h3>
                            <p className="text-[13px] leading-relaxed text-white/70 sm:text-sm">
                              {data.readyDesc}
                            </p>
                          </div>
                        </div>

                        <a
                          href={data.ctaHref}
                          className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#F2B40E] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-[#0b2912] transition-colors hover:bg-[#d4a00c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B40E] sm:text-sm"
                        >
                          {data.ctaText}
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={leftImage.src}
                  alt="Ready to apply for PMS"
                  className="h-[180px] w-[120px] object-contain self-end mb-5 -ml-1"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </SectionContainer>
    </section>
  );
}


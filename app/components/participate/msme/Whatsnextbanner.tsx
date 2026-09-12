"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

import globalExposureIcon from "@/app/assets/participate/msme/reference-icons/global-exposure.png";
import growNetworkIcon from "@/app/assets/participate/msme/reference-icons/grow-network.png";
import expandBusinessIcon from "@/app/assets/participate/msme/reference-icons/expand-business.png";
import movementIcon from "@/app/assets/participate/msme/reference-icons/movement.png";

import applyOnlineIcon from "@/app/assets/participate/msme/reference-icons/apply-online.png";
import submitReviewIcon from "@/app/assets/participate/msme/reference-icons/submit-review.png";
import approvedParticipateIcon from "@/app/assets/participate/msme/reference-icons/approved-participate.png";

import helpHeadsetIcon from "@/app/assets/participate/msme/reference-icons/help-headset.png";
import mailIcon from "@/app/assets/participate/msme/reference-icons/mail.png";
import phoneIcon from "@/app/assets/participate/msme/reference-icons/phone.png";

import growTogetherIcon from "@/app/assets/participate/msme/reference-icons/grow-together.png";
import readyNextStepIcon from "@/app/assets/participate/msme/reference-icons/ready-next-step.png";
import applyArrowIcon from "@/app/assets/participate/msme/reference-icons/apply-arrow.png";

import titleLeavesIcon from "@/app/assets/participate/msme/reference-icons/title-leaves.png";
import dividerLeafIcon from "@/app/assets/participate/msme/reference-icons/divider-leaf.png";
import logoLeafMarkIcon from "@/app/assets/participate/msme/reference-icons/logo-leaf-mark.png";
import stepsTitleLeftLeafIcon from "@/app/assets/participate/msme/reference-icons/steps-title-left-leaf.png";
import stepsTitleRightLeafIcon from "@/app/assets/participate/msme/reference-icons/steps-title-right-leaf.png";
import topRightCornerLeavesIcon from "@/app/assets/participate/msme/reference-icons/top-right-corner-leaves.png";
import bottomLeftClusterIcon from "@/app/assets/participate/msme/reference-icons/bottom-left-cluster.png";
import helpCardLeafArtIcon from "@/app/assets/participate/msme/reference-icons/help-card-leaf-art.png";

import SectionContainer from "@/app/components/layout/SectionContainer";

const WHATS_NEXT_BANNER_DATA = [
  {
    id: 1,
    headingLine1: "What's Next?",
    headingLine2: "Take the Next Step Today",
    introTextLine1: "Join ",
    introTextHighlight: "Bharat Organic Expo 2027",
    introTextLine2: " and be part of India's fastest growing Organic & Natural marketplace.",
    benefits: [
      { id: 1, icon: globalExposureIcon, titleLine1: "GLOBAL", titleLine2: "EXPOSURE", descLine1: "Connect with international", descLine2: "buyers & partners." },
      { id: 2, icon: growNetworkIcon, titleLine1: "GROW YOUR", titleLine2: "NETWORK", descLine1: "Meet industry leaders,", descLine2: "buyers & decision makers." },
      { id: 3, icon: expandBusinessIcon, titleLine1: "EXPAND YOUR BUSINESS", titleLine2: "", descLine1: "Access new markets and", descLine2: "increase visibility." },
      { id: 4, icon: movementIcon, titleLine1: "BE PART OF A MOVEMENT", titleLine2: "", descLine1: "Promote health, sustainability &", descLine2: "a better future." },
    ],
    stepsTitle: "Get Started in 3 Easy Steps",
    steps: [
      { id: 1, number: "01", icon: applyOnlineIcon, title: "APPLY ONLINE", descLine1: "Fill the application form", descLine2: "on our website." },
      { id: 2, number: "02", icon: submitReviewIcon, title: "SUBMIT & REVIEW", descLine1: "Submit documents and our team", descLine2: "will review your eligibility." },
      { id: 3, number: "03", icon: approvedParticipateIcon, title: "GET APPROVED & PARTICIPATE", descLine1: "Receive approval and join", descLine2: "Bharat Organic Expo 2027." },
    ],
    helpTitle: "We're Here to Help!",
    helpDesc: "Our team is ready to assist you at every step of the PMS application process.",
    email: "info@namogangewellness.com",
    phone: "+91 96549 00525",
    growTagline: "Let's Grow Together",
    growSub: "Your participation makes a healthier planet and a stronger future.",
    ctaTitle: "Ready to Take the Next Step?",
    ctaSub: "Apply now and grow your business with government support.",
    ctaText: "Apply Now",
    ctaHref: "#apply"
  }
];

export default function WhatsNextBanner() {
  return (
    <section
      aria-labelledby="whats-next-heading"
      className="relative w-full overflow-hidden bg-white py-4"
    >
      {/* top-right same cropped leaves */}
      <img
        src={topRightCornerLeavesIcon.src}
        alt=""
        className="pointer-events-none absolute right-0 top-0 h-[110px] w-auto object-contain opacity-90 z-0"
        aria-hidden="true"
      />

      <SectionContainer>
        {WHATS_NEXT_BANNER_DATA.map((data) => (
          <div key={data.id} className="mx-auto w-full">
            {/* ============ TOP: Heading+Intro | Logo+Benefits ============ */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
              {/* LEFT */}
              <div className="flex flex-col justify-start pt-3 sm:pt-4 lg:pt-6 lg:col-span-6">
                <div className="flex flex-wrap items-end gap-2">
                  <h2
                    id="whats-next-heading"
                    className="inline-block transform scale-y-[1.35] origin-bottom text-[22px] font-bold uppercase leading-[1.15] tracking-tight text-[#0c4518] md:text-[52px] lg:text-[74px] pt-10"
                  >
                    {data.headingLine1}
                  </h2>

                  <img
                    src={titleLeavesIcon.src}
                    alt=""
                    className="mb-[2px] h-16 w-auto object-contain"
                    aria-hidden="true"
                  />
                </div>

                <p className="inline-block transform scale-y-[1.35] origin-bottom mt-2 text-[22px] font-bold uppercase leading-[1.15] tracking-tight md:text-[28px] lg:text-[44px]">
                  {data.headingLine2}
                </p>

                <div className="my-3 flex items-center gap-3" aria-hidden="true">
                  <span className="h-[3px] w-[230px] bg-[#3b8c2a]" />
                  <img
                    src={dividerLeafIcon.src}
                    alt=""
                    className="h-8 w-auto object-contain"
                    aria-hidden="true"
                  />
                  <span className="h-px w-[150px] bg-[#3b8c2a]/40" />
                </div>

                <p className="text-[20px] font-semibold leading-relaxed z-10 relative">
                  {data.introTextLine1}
                  <span className="text-[#1f4425]">{data.introTextHighlight}</span>
                  {data.introTextLine2}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-4 lg:col-span-6">
                {/* LOGO */}
                <div className="grid grid-cols-2 sm:grid-cols-4 sm:px-6">
                  <div className="col-span-2 col-start-1 flex items-center justify-end gap-3 pr-4 sm:col-span-2 sm:col-start-3 sm:pr-8">
                    <img
                      src={logoLeafMarkIcon.src}
                      alt=""
                      className="relative z-10 h-[110px] w-auto shrink-0 object-contain"
                      aria-hidden="true"
                    />

                    <p className="relative z-20 text-[22px] font-semibold leading-8 text-[#1b5e20] sm:text-[32px]">
                      Bharat
                      <br />
                      Organic
                      <br />
                      Expo <span className="text-[#986223]">2027</span>
                    </p>
                  </div>
                </div>

                {/* BENEFITS */}
                <div
                  className="rounded-2xl bg-white px-4 py-3 sm:px-6 sm:py-4"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 sm:gap-x-0 sm:divide-x sm:divide-dashed sm:divide-gray-200">
                    {data.benefits.map((benefit) => (
                      <li
                        key={benefit.id}
                        className="flex flex-col items-center px-2 text-center sm:px-3"
                      >
                        <img
                          src={benefit.icon.src}
                          alt=""
                          className="mb-2 h-20 w-20 object-contain"
                          aria-hidden="true"
                        />

                        <h3 className="text-[18px] font-semibold uppercase leading-tight text-[#0c4416] ">
                          {benefit.titleLine1}
                          {benefit.titleLine2 && <br />}
                          {benefit.titleLine2}
                        </h3>

                        <p className="mt-1 text-[13px] leading-snug sm:text-sm">
                          {benefit.descLine1}
                          <br />
                          {benefit.descLine2}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ============ BOTTOM: STEPS | HELP ============ */}
            <div className="relative mt-6 grid grid-cols-1 gap-4 lg:mt-8 lg:grid-cols-12 lg:items-stretch lg:gap-6">
              {/* STEPS */}
              <div
                className="relative overflow-visible rounded-2xl bg-white px-4 pt-8 pb-3 sm:px-5 sm:pt-8 sm:pb-3 lg:col-span-8"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
              >
                <div className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center">
                  <img
                    src={stepsTitleLeftLeafIcon.src}
                    alt=""
                    className="mr-2 hidden h-7 w-auto object-contain sm:block"
                    aria-hidden="true"
                  />

                  <h3 className="whitespace-nowrap rounded-lg bg-[#1b5e20] px-4 py-1 text-center text-[16px] font-semibold text-white shadow-lg md:text-[18px] lg:text-[20px] uppercase">
                    {data.stepsTitle}
                  </h3>

                  <img
                    src={stepsTitleRightLeafIcon.src}
                    alt=""
                    className="ml-2 hidden h-7 w-auto object-contain sm:block"
                    aria-hidden="true"
                  />
                </div>

                <ol className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-10">
                  {data.steps.map((step, i) => (
                    <li
                      key={step.id}
                      className="relative flex flex-col items-center text-center border border-gray-200 rounded-lg px-3 py-4 sm:px-4 sm:py-5"
                    >
                      {i < data.steps.length - 1 && (
                        <span
                          className="absolute right-[-3.5rem] top-10 hidden text-[#1b5e20] sm:block flex"
                          aria-hidden="true"
                        >
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1b5e20]"/><div className="w-1.5 h-1.5 rounded-full bg-[#1b5e20]"/><div className="w-1.5 h-1.5 rounded-full bg-[#1b5e20]"/>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1b5e20]"/><ArrowRight className="h-5 w-5" strokeWidth={3} />
                          </div>
                        </span>
                      )}

                      <span className="relative mb-2 flex h-20 w-20 items-center justify-center">
                        <img
                          src={step.icon.src}
                          alt=""
                          className="h-20 w-20 object-contain"
                          aria-hidden="true"
                        />

                        <span className="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#1b5e20] text-[11px] font-semibold text-white">
                          {step.number}
                        </span>
                      </span>

                      <h3 className="text-[16px] font-semibold uppercase leading-snug text-[#1e5121] sm:text-[16px]">
                        {step.title}
                      </h3>

                      <span
                        className="mb-1 mt-1 h-0.5 w-6 bg-[#3b8c2a]"
                        aria-hidden="true"
                      />

                      <p className="max-w-[16rem] text-[13px] leading-relaxed sm:text-sm">
                        {step.descLine1}
                        <br />
                        {step.descLine2}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* HELP */}
              <div className="relative flex overflow-hidden rounded-2xl bg-[#0b2912] text-white shadow-sm lg:col-span-4">
                <div className="flex flex-1 flex-col p-4 pb-3 sm:p-4 sm:pb-3">
                  <div className="flex items-start gap-3">
                    <img
                      src={helpHeadsetIcon.src}
                      alt=""
                      className="h-12 w-12 shrink-0 object-contain"
                      aria-hidden="true"
                    />

                    <h3 className="pt-1 text-[20px] font-semibold leading-tight sm:text-[24px] uppercase">
                      {data.helpTitle}
                    </h3>
                  </div>

                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                    {data.helpDesc}
                  </p>

                  <span
                    className="mt-4 block h-px w-full bg-[#577731]"
                    aria-hidden="true"
                  />

                  <div className="mt-3 flex flex-col gap-2 text-[14px] sm:text-[15px]">
                    <a
                      href={`mailto:${data.email}`}
                      className="flex items-center gap-3 text-white/90 hover:text-white"
                    >
                      <img
                        src={mailIcon.src}
                        alt=""
                        className="h-5 w-5 shrink-0 object-contain"
                        aria-hidden="true"
                      />
                      <span>{data.email}</span>
                    </a>

                    <a
                      href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-3 text-white/90 hover:text-white"
                    >
                      <img
                        src={phoneIcon.src}
                        alt=""
                        className="h-5 w-5 shrink-0 object-contain"
                        aria-hidden="true"
                      />
                      <span>{data.phone}</span>
                    </a>
                  </div>
                </div>

                <img
                  src={helpCardLeafArtIcon.src}
                  alt=""
                  className="h-auto w-[30%] shrink-0 object-contain object-bottom"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        ))}
      </SectionContainer>

      {/* ============ FOOTER STRIP ============ */}
      <div className="relative mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-[#EFF7EE] lg:mt-2.5">
        <img
          src={bottomLeftClusterIcon.src}
          alt=""
          className="absolute left-0 top-1/2 z-10 h-[120px] w-auto -translate-y-1/2 object-contain hidden sm:block"
          loading="lazy"
          aria-hidden="true"
        />

        <SectionContainer>
          {WHATS_NEXT_BANNER_DATA.map((data) => (
            <div key={data.id} className="flex flex-col sm:flex-row sm:items-center">
              {/* LET'S GROW */}
              <div className="relative flex items-center gap-3 overflow-hidden pr-4 py-3 sm:w-1/2 sm:pr-5 pl-16">
                <img
                  src={growTogetherIcon.src}
                  alt=""
                  className="relative hidden h-16 w-16 shrink-0 object-contain sm:block"
                  aria-hidden="true"
                />

                <div className="relative border-l-[2px] border-l-[#1b5e20] pl-4">
                  <p className="text-[18px] font-semibold sm:text-[20px] italic text-[#254b27]">
                    {data.growTagline}
                  </p>

                  <p className="mt-1 max-w-xs text-[13px]">
                    {data.growSub}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-1 flex-col gap-3 rounded-lg bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:border-l sm:border-gray-200 sm:px-5">
                <div className="flex items-center gap-3">
                  <img
                    src={readyNextStepIcon.src}
                    alt=""
                    className="h-16 w-16 shrink-0 object-contain"
                    aria-hidden="true"
                  />

                  <div>
                    <p className="text-[16px] font-semibold uppercase text-[#033d19] leading-tight sm:text-[16px]">
                      {data.ctaTitle}
                    </p>

                    <p className="mt-0.5 text-[16px] font-semibold">
                      {data.ctaSub}
                    </p>
                  </div>
                </div>

                <a
                  href={data.ctaHref}
                  className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg bg-[#1b5e20] px-6 py-2 text-[14px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2d7a2d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b8c2a] focus-visible:ring-offset-2 sm:text-[15px]"
                >
                  {data.ctaText}

                  <img
                    src={applyArrowIcon.src}
                    alt=""
                    className="h-8 w-8 object-contain"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          ))}
        </SectionContainer>
      </div>
    </section>
  );
}
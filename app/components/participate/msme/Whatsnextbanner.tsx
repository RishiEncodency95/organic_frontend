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

const benefits = [
  {
    icon: globalExposureIcon,
    title: (
      <>
        GLOBAL
        <br />
        EXPOSURE
      </>
    ),
    desc: (
      <>
        Connect with international
        <br />
        buyers &amp; partners.
      </>
    ),
  },
  {
    icon: growNetworkIcon,
    title: (
      <>
        GROW YOUR
        <br />
        NETWORK
      </>
    ),
    desc: (
      <>
        Meet industry
        <br />
        leaders, buyers &amp;
        <br />
        decision makers.
      </>
    ),
  },
  {
    icon: expandBusinessIcon,
    title: "EXPAND YOUR BUSINESS",
    desc: (
      <>
        Access new
        <br />
        markets and
        <br />
        increase visibility.
      </>
    ),
  },
  {
    icon: movementIcon,
    title: "BE PART OF A MOVEMENT",
    desc: (
      <>
        Promote health, sustainability &amp;
        <br />
        a better future.
      </>
    ),
  },
];

const steps = [
  {
    number: "01",
    icon: applyOnlineIcon,
    title: "APPLY ONLINE",
    desc: (
      <>
        Fill the application form
        <br />
        on our website.
      </>
    ),
  },
  {
    number: "02",
    icon: submitReviewIcon,
    title: "SUBMIT & REVIEW",
    desc: (
      <>
        Submit documents and our team
        <br />
        will review your eligibility.
      </>
    ),
  },
  {
    number: "03",
    icon: approvedParticipateIcon,
    title: (
      <>
        GET APPROVED
        <br />
        &amp; PARTICIPATE
      </>
    ),
    desc: (
      <>
        Receive approval and join
        <br />
        Bharat Organic Expo 2027.
      </>
    ),
  },
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
        <div className="mx-auto w-full">
          {/* ============ TOP: Heading+Intro | Logo+Benefits ============ */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
            {/* LEFT */}
            <div className="flex flex-col justify-start pt-3 sm:pt-4 lg:pt-6 lg:col-span-6">
              <div className="flex flex-wrap items-end gap-2">
                <h2
                  id="whats-next-heading"
                  className="inline-block transform scale-y-[1.35] origin-bottom text-[22px] font-bold uppercase leading-[1.15] tracking-tight text-[#0c4518] md:text-[52px] lg:text-[74px] pt-10"
                >
                  What&apos;s Next?
                </h2>

                <img
                  src={titleLeavesIcon.src}
                  alt=""
                  className="mb-[2px] h-16 w-auto object-contain"
                  aria-hidden="true"
                />
              </div>

              <p className="inline-block transform scale-y-[1.35] origin-bottom mt-2 text-[22px] font-bold uppercase leading-[1.15] tracking-tight md:text-[28px] lg:text-[44px]">
                Take the Next Step Today
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
                Join{" "}
                <span className="text-[#1f4425]">Bharat Organic Expo 2027</span>{" "}
                and be part <br className="hidden sm:inline" />of India&apos;s fastest growing Organic &amp;
                Natural marketplace.
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
                  {benefits.map(({ icon, title, desc }, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center px-2 text-center sm:px-3"
                    >
                      <img
                        src={icon.src}
                        alt=""
                        className="mb-2 h-20 w-20 object-contain"
                        aria-hidden="true"
                      />

                      <h3 className="text-[18px] font-semibold uppercase leading-tight text-[#0c4416] ">
                        {title}
                      </h3>

                      <p className="mt-1 text-[13px] leading-snug sm:text-sm">
                        {desc}
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
                  Get Started in 3 Easy Steps
                </h3>

                <img
                  src={stepsTitleRightLeafIcon.src}
                  alt=""
                  className="ml-2 hidden h-7 w-auto object-contain sm:block"
                  aria-hidden="true"
                />
              </div>

              <ol className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-10">
                {steps.map(({ number, icon, title, desc }, i) => (
                  <li
                    key={number}
                    className="relative flex flex-col items-center text-center border border-gray-200 rounded-lg px-3 py-4 sm:px-4 sm:py-5"
                  >
                    {i < steps.length - 1 && (
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
                        src={icon.src}
                        alt=""
                        className="h-20 w-20 object-contain"
                        aria-hidden="true"
                      />

                      <span className="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#1b5e20] text-[11px] font-semibold text-white">
                        {number}
                      </span>
                    </span>

                    <h3 className="text-[16px] font-semibold uppercase leading-snug text-[#1e5121] sm:text-[16px]">
                      {title}
                    </h3>

                    <span
                      className="mb-1 mt-1 h-0.5 w-6 bg-[#3b8c2a]"
                      aria-hidden="true"
                    />

                    <p className="max-w-[16rem] text-[13px] leading-relaxed sm:text-sm">
                      {desc}
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
                    We&apos;re Here <br/>to Help!
                  </h3>
                </div>

                <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                  Our team is ready to assist you <br/>at every step of the PMS<br/>
                  application process.
                </p>

                <span
                  className="mt-4 block h-px w-full bg-[#577731]"
                  aria-hidden="true"
                />

                <div className="mt-3 flex flex-col gap-2 text-[14px] sm:text-[15px]">
                  <a
                    href="mailto:info@namogangewellness.com"
                    className="flex items-center gap-3 text-white/90 hover:text-white"
                  >
                    <img
                      src={mailIcon.src}
                      alt=""
                      className="h-5 w-5 shrink-0 object-contain"
                      aria-hidden="true"
                    />
                    <span >info@namogangewellness.com</span>
                  </a>

                  <a
                    href="tel:+919654900525"
                    className="flex items-center gap-3 text-white/90 hover:text-white"
                  >
                    <img
                      src={phoneIcon.src}
                      alt=""
                      className="h-5 w-5 shrink-0 object-contain"
                      aria-hidden="true"
                    />
                    <span>+91 96549 00525</span>
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
          <div className="flex flex-col lg:flex-row sm:items-center">
            {/* LET'S GROW */}
            <div className="relative flex items-center gap-3 overflow-hidden pr-4 py-3 lg:w-1/2 lg:pr-5 pl-4 lg:pl-16">
              <img
                src={growTogetherIcon.src}
                alt=""
                className="relative h-16 w-16 shrink-0 object-contain"
                aria-hidden="true"
              />

              <div className="relative border-l-[2px] border-l-[#1b5e20] pl-4">
                <p className="text-[18px] font-semibold sm:text-[20px] italic text-[#254b27]">
                  Let&apos;s Grow Together
                </p>

                <p className="mt-1 max-w-xs text-[13px]">
                  Your participation makes a healthier <br/>planet and a stronger
                  future.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-1 flex-col gap-3 rounded-lg bg-white px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:border-l lg:border-gray-200 lg:px-5">
              <div className="flex items-center gap-3">
                <img
                  src={readyNextStepIcon.src}
                  alt=""
                  className="h-16 w-16 shrink-0 object-contain"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-[16px] font-semibold uppercase text-[#033d19] leading-tight sm:text-[16px]">
                    Ready to Take the Next Step?
                  </p>

                  <p className="mt-0.5 text-[16px] font-semibold">
                    Apply now and grow your business with government support.
                  </p>
                </div>
              </div>

              <a
                href="#apply"
                className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg bg-[#1b5e20] px-6 py-2 text-[14px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2d7a2d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b8c2a] focus-visible:ring-offset-2 sm:text-[15px]"
              >
                Apply Now

                <img
                  src={applyArrowIcon.src}
                  alt=""
                  className="h-8 w-8 object-contain"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
}
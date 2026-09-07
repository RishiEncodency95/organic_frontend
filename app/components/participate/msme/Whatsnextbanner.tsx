"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

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
            <div className="flex flex-col justify-start pt-3 sm:pt-4 lg:pt-6 lg:col-span-5">
              <div className="flex flex-wrap items-end gap-2">
                <h2
                  id="whats-next-heading"
                  className="inline-block transform scale-y-[1.35] origin-bottom text-[22px] font-semibold uppercase leading-[1.15] tracking-tight text-[#0c4518] md:text-[32px] lg:text-[42px]"
                >
                  What&apos;s Next?
                </h2>

                <img
                  src={titleLeavesIcon.src}
                  alt=""
                  className="mb-[2px] h-9 w-auto object-contain"
                  aria-hidden="true"
                />
              </div>

              <p className="inline-block transform scale-y-[1.35] origin-bottom mt-2 text-[22px] font-semibold uppercase leading-[1.15] tracking-tight md:text-[28px] lg:text-[34px]">
                Take the Next Step Today
              </p>

              <div className="my-3 flex items-center gap-3" aria-hidden="true">
                <span className="h-[3px] w-16 bg-[#3b8c2a]" />
                <img
                  src={dividerLeafIcon.src}
                  alt=""
                  className="h-4 w-auto object-contain"
                  aria-hidden="true"
                />
                <span className="h-px flex-1 bg-[#3b8c2a]/40" />
              </div>

              <p className="max-w-md text-[15px] font-semibold leading-relaxed z-10 relative">
                Join{" "}
                <span className="text-[#1f4425]">Bharat Organic Expo 2027</span>{" "}
                and be part of India&apos;s fastest growing Organic &amp;
                Natural marketplace.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-4 lg:col-span-7">
              {/* LOGO */}
              <div className="grid grid-cols-2 sm:grid-cols-4 sm:px-6">
                <div className="col-span-2 col-start-1 flex items-center justify-start gap-3 pl-3 sm:col-span-2 sm:col-start-3 sm:pl-3">
                  <img
                    src={logoLeafMarkIcon.src}
                    alt=""
                    className="relative z-10 h-[72px] w-auto shrink-0 object-contain"
                    aria-hidden="true"
                  />

                  <p className="relative z-20 text-[16px] font-semibold leading-tight text-[#1b5e20] sm:text-[18px]">
                    Bharat
                    <br />
                    Organic
                    <br />
                    Expo <span className="text-[#F2B40E]">2027</span>
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
                        className="mb-2 h-16 w-16 object-contain"
                        aria-hidden="true"
                      />

                      <h3 className="text-[13px] font-semibold uppercase leading-tight text-[#0c4416] sm:text-[14px]">
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
              className="relative overflow-visible rounded-2xl bg-white px-4 pt-8 pb-3 sm:px-5 sm:pt-8 sm:pb-3 lg:col-span-7"
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

                <h3 className="whitespace-nowrap rounded-lg bg-[#1b5e20] px-4 py-1 text-center text-[16px] font-semibold tracking-tight text-white shadow-lg md:text-[18px] lg:text-[20px]">
                  Get Started in 3 Easy Steps
                </h3>

                <img
                  src={stepsTitleRightLeafIcon.src}
                  alt=""
                  className="ml-2 hidden h-7 w-auto object-contain sm:block"
                  aria-hidden="true"
                />
              </div>

              <ol className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
                {steps.map(({ number, icon, title, desc }, i) => (
                  <li
                    key={number}
                    className="relative flex flex-col items-center text-center"
                  >
                    {i < steps.length - 1 && (
                      <span
                        className="absolute right-[-1.1rem] top-10 hidden text-[#1b5e20] sm:block"
                        aria-hidden="true"
                      >
                        <ChevronRight className="h-5 w-5" strokeWidth={3} />
                      </span>
                    )}

                    <span className="relative mb-2 flex h-16 w-16 items-center justify-center">
                      <img
                        src={icon.src}
                        alt=""
                        className="h-16 w-16 object-contain"
                        aria-hidden="true"
                      />

                      <span className="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#1b5e20] text-[11px] font-semibold text-white">
                        {number}
                      </span>
                    </span>

                    <h3 className="text-[13px] font-semibold uppercase leading-snug text-[#1e5121] sm:text-[14px]">
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
            <div className="relative flex overflow-hidden rounded-2xl bg-[#0b2912] text-white shadow-sm lg:col-span-5">
              <div className="flex flex-1 flex-col p-4 pb-3 sm:p-4 sm:pb-3">
                <div className="flex items-start gap-3">
                  <img
                    src={helpHeadsetIcon.src}
                    alt=""
                    className="h-12 w-12 shrink-0 object-contain"
                    aria-hidden="true"
                  />

                  <h3 className="pt-1 text-[20px] font-semibold leading-tight sm:text-[24px]">
                    We&apos;re Here to Help!
                  </h3>
                </div>

                <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                  Our team is ready to assist you at every step of the PMS
                  application process.
                </p>

                <span
                  className="mt-4 block h-px w-full bg-white/20"
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
                    <span className="break-all">info@namogangewellness.com</span>
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
                className="h-full w-[30%] shrink-0 object-cover"
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
          className="absolute left-0 top-1/2 z-10 h-[120px] w-auto -translate-y-1/2 object-contain"
          loading="lazy"
          aria-hidden="true"
        />

        <SectionContainer>
          <div className="flex flex-col sm:flex-row sm:items-center">
            {/* LET'S GROW */}
            <div className="relative flex items-center gap-3 overflow-hidden px-4 py-3 sm:w-1/2 sm:px-5">
              <img
                src={growTogetherIcon.src}
                alt=""
                className="relative hidden h-10 w-10 shrink-0 object-contain sm:block"
                aria-hidden="true"
              />

              <div className="relative border-l-[3px] border-l-[#1b5e20] pl-4">
                <p className="text-[18px] font-semibold sm:text-[20px]">
                  Let&apos;s Grow Together
                </p>

                <p className="mt-1 max-w-xs text-[13px]">
                  Your participation makes a healthier planet and a stronger
                  future.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-1 flex-col gap-3 rounded-lg bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:border-l sm:border-gray-200 sm:px-5">
              <div className="flex items-center gap-3">
                <img
                  src={readyNextStepIcon.src}
                  alt=""
                  className="h-8 w-8 shrink-0 object-contain"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-[14px] font-semibold uppercase leading-tight sm:text-[15px]">
                    Ready to Take the Next Step?
                  </p>

                  <p className="mt-0.5 text-[14px]">
                    Apply now and grow your business with government support.
                  </p>
                </div>
              </div>

              <a
                href="#apply"
                className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg bg-[#1b5e20] px-6 py-3 text-[14px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2d7a2d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b8c2a] focus-visible:ring-offset-2 sm:text-[15px]"
              >
                Apply Now

                <img
                  src={applyArrowIcon.src}
                  alt=""
                  className="h-5 w-5 object-contain"
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
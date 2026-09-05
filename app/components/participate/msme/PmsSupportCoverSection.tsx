"use client";

import type { FC } from "react";
import Link from "next/link";

import SectionContainer from "@/app/components/layout/SectionContainer";

/* =========================================================
   EXACT CROPPED REFERENCE ASSETS
========================================================= */

import topLeftLeaves from "@/app/assets/participate/msme/support-reference/top-left-leaves.png";
import topBannerIcon from "@/app/assets/participate/msme/support-reference/top-banner-icon.png";
import approvedSchemeSeal from "@/app/assets/participate/msme/support-reference/approved-scheme-seal.png";
// import topRightVisual from "@/app/assets/participate/msme/support-reference/top-right-visual.png";
import topRightVisual from "@/app/assets/participate/msme/what_your_pms.png";

/* Expense top icons */
import spaceRentIcon from "@/app/assets/participate/msme/support-reference/space-rent-icon.png";
import travelIcon from "@/app/assets/participate/msme/support-reference/travel-icon.png";
import freightIcon from "@/app/assets/participate/msme/support-reference/freight-icon.png";
import publicityIcon from "@/app/assets/participate/msme/support-reference/publicity-icon.png";

/* Expense bottom icons */
import rentSupportIcon from "@/app/assets/participate/msme/support-reference/rent-support-icon.png";
import travelSupportIcon from "@/app/assets/participate/msme/support-reference/travel-support-icon.png";
import freightSupportIcon from "@/app/assets/participate/msme/support-reference/freight-support-icon.png";
import publicitySupportIcon from "@/app/assets/participate/msme/support-reference/publicity-support-icon.png";

/* Additional support */
import additionalSupportIcon from "@/app/assets/participate/msme/support-reference/additional-support-icon.png";
import calculatorVisual from "@/app/assets/participate/msme/support-reference/calculator-visual.png";
import checkCircleIcon from "@/app/assets/participate/msme/support-reference/check-circle.png";
import infoCircleIcon from "@/app/assets/participate/msme/support-reference/info-circle.png";

/* Know before + CTAs */
import knowBeforeIcon from "@/app/assets/participate/msme/support-reference/know-before-icon.png";
import eligibilityCtaIcon from "@/app/assets/participate/msme/support-reference/eligibility-cta-icon.png";
import supportCtaIcon from "@/app/assets/participate/msme/support-reference/support-cta-icon.png";

/* Footer icons */
import badgeGovernment from "@/app/assets/participate/msme/support-reference/badge-government.png";
import badgeTransparent from "@/app/assets/participate/msme/support-reference/badge-transparent.png";
import badgeTimely from "@/app/assets/participate/msme/support-reference/badge-timely.png";
import badgeDocs from "@/app/assets/participate/msme/support-reference/badge-docs.png";
import badgeMsme from "@/app/assets/participate/msme/support-reference/badge-msme.png";

/* =========================================================
   DATA
========================================================= */

const ELIGIBLE_EXPENSES = [
  {
    number: "1",
    title: "SPACE RENT",
    subtitle: "Stall / Built-up Space",
    icon: spaceRentIcon,
    descIcon: rentSupportIcon,
    description: (
      <>
        Up to <strong>80% / 100%*</strong>
        <br />
        of eligible space rent
      </>
    ),
  },
  {
    number: "2",
    title: "TRAVEL",
    subtitle: "One Representative*",
    icon: travelIcon,
    descIcon: travelSupportIcon,
    description: (
      <>
        Eligible travel
        <br />
        expenditure*
      </>
    ),
  },
  {
    number: "3",
    title: "FREIGHT",
    subtitle: "Exhibition Material",
    icon: freightIcon,
    descIcon: freightSupportIcon,
    description: (
      <>
        Transportation of
        <br />
        products / display
        <br />
        material*
      </>
    ),
  },
  {
    number: "4",
    title: "PUBLICITY",
    subtitle: "Eligible Promotion",
    icon: publicityIcon,
    descIcon: publicitySupportIcon,
    description: (
      <>
        Eligible publicity
        <br />
        expenditure*
      </>
    ),
  },
];

const FOOTER_BADGES = [
  {
    icon: badgeGovernment,
    label: (
      <>
        Government
        <br />
        Approved Scheme
      </>
    ),
  },
  {
    icon: badgeTransparent,
    label: (
      <>
        Transparent
        <br />
        Process
      </>
    ),
  },
  {
    icon: badgeTimely,
    label: (
      <>
        Timely
        <br />
        Support
      </>
    ),
  },
  {
    icon: badgeDocs,
    label: (
      <>
        Hassle-free
        <br />
        Documentation
      </>
    ),
  },
  {
    icon: badgeMsme,
    label: (
      <>
        For Micro &amp; Small
        <br />
        Enterprises Only
      </>
    ),
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const PmsSupportCoverSection: FC = () => {
  return (
    <section
      aria-labelledby="pms-support-cover-heading"
      className="relative w-full overflow-hidden bg-[#fbfcf8]"
    >
      {/* =====================================================
          LEFT CROPPED LEAVES
      ====================================================== */}

   

      {/* =====================================================
          TOP GREEN LABEL
      ====================================================== */}

      <div className="relative z-20 flex justify-center">
        <div
          className="
            flex
            min-h-[40px]
            items-center
            gap-[8px]
            rounded-b-[12px]
            bg-[#07582c]
            px-[22px]
            py-[5px]
          "
        >
          <img
            src={topBannerIcon.src}
            alt=""
            aria-hidden="true"
            className="h-[26px] w-[26px] shrink-0 object-contain"
          />

          <h2
            id="pms-support-cover-heading"
            className="
              whitespace-nowrap
              text-[13px]
              font-semibold
              uppercase
              leading-none
              tracking-[0.015em]
              text-white
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            What Can Your PMS Support Cover?
          </h2>
        </div>
      </div>

      {/* =====================================================
          RIGHT CROPPED VISUAL
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-[1]
          hidden
          h-[300px]
          lg:block
        "
      >
        <img
          src={topRightVisual.src}
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-auto
            object-contain
            object-right-top
          "
        />
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[40%]
            bg-gradient-to-r from-[#fbfcf8] to-transparent
          "
        />
      </div>

      <SectionContainer>
        <div className="relative z-10 mx-auto w-full pb-3 pt-1">
          {/* ===================================================
              TOP MAIN ROW
          ==================================================== */}

          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-[20px]
              lg:grid-cols-[1fr_1.12fr_0.78fr]
              lg:gap-[22px]
            "
          >
            {/* =================================================
                LEFT TITLE
            ================================================== */}
<div className="flex">
     <img
        src={topLeftLeaves.src}
        alt=""
        aria-hidden="true"
        className="
        
          hidden
          h-[205px]
          w-auto
          object-contain
          object-center
          lg:block
        "
      />
            <div
              className="
                flex
                min-h-[190px]
                flex-col
                justify-center
                pl-[16px]
                lg:pl-[16px]
              "
            >
              <h3
                className="
                  text-[29px]
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#07582c]
                  sm:text-[34px]
                  lg:text-[39px]
                "
              >
                More Than Just
                <br />

                <span className="">
                  Stall Space Rent
                </span>
              </h3>

              <span
                className="
                  mt-[14px]
                  h-[2px]
                  w-[93px]
                  bg-[#b89528]
                "
                aria-hidden="true"
              />

              <p
                className="
                  mt-[12px]
                  max-w-[330px]
                  text-[12px]
                  font-medium
                  leading-[1.55]
                  text-[#151515]
                  sm:text-[13px]
                "
              >
                For eligible MSE participation in an approved exhibition,
                PMS assistance may cover eligible exhibition space rent
                along with specified contingency expenses, subject to
                applicable scheme guidelines and approval.
              </p>
            </div>
</div>

            {/* =================================================
                MAXIMUM ASSISTANCE
            ================================================== */}

            <div className="flex min-h-[194px] items-center justify-center">
              <div
                className="
                  relative
                  w-full
                  rounded-[12px]
                  border
                  border-[#bdc9b4]
                  bg-[#f7faf2]
                  px-[18px]
                  pb-[10px]
                  pt-[25px]
                  text-center
                "
              >
                {/* UP TO */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    -translate-x-1/2
                    -translate-y-[35%]
                  "
                >
                  <div
                    className="
                      min-w-[82px]
                      rounded-[4px]
                      bg-[#07582c]
                      px-[12px]
                      py-[4px]
                      text-[14px]
                      font-semibold
                      uppercase
                      leading-none
                      text-white
                    "
                  >
                    UP TO
                  </div>
                </div>

                {/* amount */}
                <div
                  className="
                    whitespace-nowrap
                    text-[42px]
                    font-black
                    leading-none
                    tracking-[-0.045em]
                    text-[#07582c]
                    sm:text-[49px]
                    lg:text-[52px]
                  "
                >
                  ₹1.50 LAKH
                  <sup className="ml-[2px] align-top text-[13px]">*</sup>
                </div>

                {/* ribbon */}
                <div
                  className="
                    relative
                    mx-auto
                    mt-[7px]
                    flex
                    max-w-[310px]
                    items-center
                    justify-center
                  "
                >
                  {/* <span
                    className="
                      mr-[4px]
                      h-0
                      w-0
                      border-b-[11px]
                      border-r-[14px]
                      border-t-[11px]
                      border-b-transparent
                      border-r-[#07582c]
                      border-t-transparent
                    "
                  /> */}

                  <div
                    className="
                      flex
                      h-[25px]
                      flex-1
                      items-center
                      justify-center
                      bg-[#07582c]
                      px-[7px]
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.02em]
                      text-white
                    "
                  >
                    Maximum Overall Assistance
                  </div>

                  {/* <span
                    className="
                      ml-[4px]
                      h-0
                      w-0
                      border-b-[11px]
                      border-l-[14px]
                      border-t-[11px]
                      border-b-transparent
                      border-l-[#07582c]
                      border-t-transparent
                    "
                  /> */}
                </div>

                <p
                  className="
                    mt-[6px]
                    text-[14px]
                    font-bold
                    leading-tight
                    text-[#102038]
                  "
                >
                  per Eligible Enterprise / Event
                </p>

                <p
                  className="
                    mt-[4px]
                    text-[10px]
                    font-medium
                    leading-tight
                    text-[#222]
                    sm:text-[11px]
                  "
                >
                  (All taxes included and subject to actual eligible expenditure)
                </p>
              </div>
            </div>

            {/* =================================================
                APPROVED SEAL
            ================================================== */}

            <div
              className="
                relative
                hidden
                min-h-[194px]
                items-center
                justify-start
                lg:flex
              "
            >
              {/* <img
                src={approvedSchemeSeal.src}
                alt="PMS Approved Scheme"
                className="
                  relative
                  z-10
                  h-[160px]
                  w-[160px]
                  object-contain
                "
              /> */}
            </div>
          </div>

          {/* ===================================================
              EXPENSES CARD
          ==================================================== */}

          <div
            className="
              relative
              mt-[15px]
              rounded-[13px]
              border
              border-[#d7ded0]
              bg-white/80
              px-[16px]
              pb-[14px]
              pt-[23px]
            "
          >
            {/* header */}
            <div
              className="
                absolute
                left-1/2
                top-0
                z-20
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <div className="flex items-center gap-[8px]">
                <span
                  className="
                    hidden
                    h-[7px]
                    w-[7px]
                    rotate-45
                    border
                    border-[#07582c]
                    sm:block
                  "
                />

                <h4
                  className="
                    whitespace-nowrap
                    rounded-[5px]
                    bg-[#07582c]
                    px-[14px]
                    py-[5px]
                    text-[11px]
                    font-semibold
                    uppercase
                    leading-none
                    tracking-[0.01em]
                    text-white
                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  Eligible Expenses Covered Under PMS for Exhibition Participation
                </h4>

                <span
                  className="
                    hidden
                    h-[7px]
                    w-[7px]
                    rotate-45
                    border
                    border-[#07582c]
                    sm:block
                  "
                />
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {ELIGIBLE_EXPENSES.map((expense, index) => (
                <div
                  key={expense.title}
                  className={`
                    relative
                    px-[17px]
                    py-[3px]

                    ${
                      index !== 0
                        ? "lg:border-l lg:border-[#d6ddd1]"
                        : ""
                    }
                  `}
                >
                  {/* plus between columns */}
                  {index !== 0 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -left-[14px]
                        top-[78px]
                        z-20
                        hidden
                        h-[28px]
                        w-[28px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#07582c]
                        text-[24px]
                        font-bold
                        leading-none
                        text-white
                        lg:flex
                      "
                    >
                      +
                    </span>
                  )}

                  {/* top */}
                  <div className="flex min-h-[91px] items-center gap-[8px]">
                    <img
                      src={expense.icon.src}
                      alt=""
                      aria-hidden="true"
                      className="
                        h-[75px]
                        w-[75px]
                        shrink-0
                        object-contain
                      "
                    />

                    <div className="min-w-0">
                      <div className="flex items-center gap-[6px]">
                        <span
                          className="
                            flex
                            h-[24px]
                            w-[24px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#07582c]
                            text-[13px]
                            font-semibold
                            text-white
                          "
                        >
                          {expense.number}
                        </span>

                        <p
                          className="
                            whitespace-nowrap
                            text-[14px]
                            font-semibold
                            uppercase
                            leading-none
                            text-[#07582c]
                            lg:text-[16px]
                          "
                        >
                          {expense.title}
                        </p>
                      </div>

                      <p
                        className="
                          mt-[4px]
                          text-[11px]
                          font-semibold
                          leading-tight
                          text-[#202020]
                          lg:text-[12px]
                        "
                      >
                        {expense.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* thin line */}
                  <span
                    className="
                      my-[5px]
                      block
                      h-px
                      w-full
                      bg-[#d9ded5]
                    "
                  />

                  {/* bottom description */}
                  <div
                    className="
                      flex
                      min-h-[65px]
                      items-center
                      rounded-[8px]
                      bg-[#f1f5e8]
                      px-[9px]
                      py-[7px]
                    "
                  >
                    <div
                      className="
                        flex
                        h-[48px]
                        w-[59px]
                        shrink-0
                        items-center
                        justify-center
                        border-r
                        border-[#cad2c4]
                        pr-[8px]
                      "
                    >
                      <img
                        src={expense.descIcon.src}
                        alt=""
                        aria-hidden="true"
                        className="
                          h-[46px]
                          w-[46px]
                          object-contain
                        "
                      />
                    </div>

                    <p
                      className="
                        ml-[11px]
                        text-[12px]
                        font-medium
                        leading-[1.35]
                        text-[#121212]
                        lg:text-[13px]
                      "
                    >
                      {expense.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===================================================
              ADDITIONAL CONTINGENCY SUPPORT
          ==================================================== */}

          <div
            className="
              mt-[12px]
              grid
              grid-cols-1
              items-center
              rounded-[13px]
              border
              border-[#dce2d6]
              bg-[#f1f5e8]
              px-[16px]
              py-[10px]
              lg:grid-cols-[115px_330px_1fr_170px]
            "
          >
            {/* icon */}
            <div className="flex items-center justify-center">
              <img
                src={additionalSupportIcon.src}
                alt=""
                aria-hidden="true"
                className="h-[98px] w-[98px] object-contain"
              />
            </div>

            {/* amount */}
            <div className="px-[8px]">
              <h4
                className="
                  text-center
                  text-[14px]
                  font-semibold
                  uppercase
                  leading-tight
                  text-[#07582c]
                  sm:text-[16px]
                "
              >
                Additional Contingency Support
              </h4>

              <div
                className="
                  mt-[5px]
                  rounded-[6px]
                  bg-[#07582c]
                  px-[15px]
                  py-[7px]
                  text-center
                  text-[22px]
                  font-bold
                  leading-none
                  text-white
                "
              >
                Up to ₹25,000*
              </div>

              <div
                className="
                  mt-[2px]
                  flex
                  items-center
                  justify-center
                  rounded-[5px]
                  bg-[#ffd552]
                  px-[8px]
                  py-[4px]
                  text-[13px]
                  font-semibold
                  leading-none
                "
              >
                Travel
                <span className="px-[10px]">+</span>
                Freight
                <span className="px-[10px]">+</span>
                Publicity
              </div>
            </div>

            {/* notes */}
            <div
              className="
                border-[#d5dcd0]
                px-[20px]
                lg:border-x
              "
            >
              <div className="flex items-start gap-[10px]">
                <img
                  src={checkCircleIcon.src}
                  alt=""
                  aria-hidden="true"
                  className="mt-[1px] h-[23px] w-[23px] shrink-0 object-contain"
                />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    leading-[1.4]
                    text-[#191919]
                    sm:text-[12px]
                  "
                >
                  100% of eligible contingency expenditure,
                  <br className="hidden lg:block" />
                  subject to the applicable ceiling and PMS guidelines.
                </p>
              </div>

              <div
                className="
                  mt-[8px]
                  flex
                  items-start
                  gap-[10px]
                  rounded-[8px]
                  bg-[#fff2c9]
                  px-[9px]
                  py-[6px]
                "
              >
                <img
                  src={infoCircleIcon.src}
                  alt=""
                  aria-hidden="true"
                  className="mt-[1px] h-[22px] w-[22px] shrink-0 object-contain"
                />

                <p
                  className="
                    text-[10px]
                    font-medium
                    leading-[1.35]
                    text-[#27220f]
                    sm:text-[11px]
                  "
                >
                  <strong>Important:</strong> The ₹25,000 contingency support
                  is part of the overall assistance ceiling and not ₹25,000
                  over and above ₹1.50 lakh.
                </p>
              </div>
            </div>

            {/* calculator */}
            <div className="flex items-center justify-center">
              <img
                src={calculatorVisual.src}
                alt="PMS support calculation"
                className="
                  h-[105px]
                  w-[145px]
                  object-contain
                "
              />
            </div>
          </div>

          {/* ===================================================
              KNOW BEFORE + CTA
          ==================================================== */}

          <div
            className="
              mt-[9px]
              grid
              grid-cols-1
              items-center
              gap-[12px]
              rounded-[12px]
              border
              border-[#e0e5db]
              bg-[#f7f8f3]
              px-[15px]
              py-[8px]
              lg:grid-cols-[78px_1fr_250px_280px]
            "
          >
            {/* icon */}
            <div className="flex justify-center">
              <img
                src={knowBeforeIcon.src}
                alt=""
                aria-hidden="true"
                className="h-[74px] w-[74px] object-contain"
              />
            </div>

            {/* text */}
            <div>
              <h4
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  leading-tight
                  text-[#07582c]
                  sm:text-[14px]
                "
              >
                Know Before You Apply
              </h4>

              <p
                className="
                  mt-[4px]
                  max-w-[450px]
                  text-[10px]
                  font-semibold
                  leading-[1.55]
                  text-[#202020]
                  sm:text-[11px]
                "
              >
                Actual assistance depends on the enterprise category,
                <br className="hidden lg:block" />
                eligible expenditure, approved participation, applicable limits,
                <br className="hidden lg:block" />
                supporting documents and final sanction by the competent authority.
              </p>
            </div>

            {/* CTA 1 */}
            <Link
              href="/participate/msme/eligibility-check"
              target="_blank"
              className="
                flex
                min-h-[71px]
                items-center
                justify-center
                gap-[10px]
                rounded-[7px]
                bg-[#07582c]
                px-[15px]
                text-white
              "
            >
              <img
                src={eligibilityCtaIcon.src}
                alt=""
                aria-hidden="true"
                className="h-[48px] w-[48px] shrink-0 object-contain"
              />

              <span
                className="
                  text-[14px]
                  font-semibold
                  uppercase
                  leading-[1.2]
                  sm:text-[15px]
                "
              >
                Check Your
                <br />
                PMS Eligibility
              </span>

              <span
                aria-hidden="true"
                className="
                  ml-auto
                  text-[30px]
                  font-light
                  leading-none
                "
              >
                →
              </span>
            </Link>

            {/* CTA 2 */}
            <Link
              href="/participate/msme/eligibility-check"
              target="_blank"
              className="
                flex
                min-h-[71px]
                items-center
                justify-center
                gap-[10px]
                rounded-[7px]
                border
                border-[#07582c]
                bg-white
                px-[15px]
                text-[#07582c]
              "
            >
              <img
                src={supportCtaIcon.src}
                alt=""
                aria-hidden="true"
                className="h-[47px] w-[47px] shrink-0 object-contain"
              />

              <span
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  leading-[1.2]
                  sm:text-[14px]
                "
              >
                Understand Your
                <br />
                Estimated Support
              </span>

              <span
                aria-hidden="true"
                className="
                  ml-auto
                  text-[30px]
                  font-light
                  leading-none
                "
              >
                →
              </span>
            </Link>
          </div>

          {/* ===================================================
              FOOTER ROW
          ==================================================== */}

          <div
            className="
              mt-[7px]
              grid
              grid-cols-1
              items-center
              rounded-[8px]
              border
              border-[#e2e5df]
              bg-white
              px-[12px]
              py-[6px]
              lg:grid-cols-[290px_1fr]
            "
          >
            {/* Terms */}
            <p
              className="
                pr-[15px]
                text-[8px]
                font-semibold
                leading-[1.5]
                text-[#252525]
                sm:text-[9px]
                lg:border-r
                lg:border-[#d8ddd4]
              "
            >
              * Terms, limits and eligibility are subject to the applicable
              <br />
              Procurement &amp; Marketing Support (PMS) Scheme guidelines
              <br />
              and competent-authority approval.
            </p>

            {/* badges */}
            <div
              className="
                grid
                grid-cols-2
                items-center
                sm:grid-cols-5
              "
            >
              {FOOTER_BADGES.map((badge, index) => (
                <div
                  key={index}
                  className={`
                    flex
                    min-h-[43px]
                    items-center
                    justify-center
                    gap-[7px]
                    px-[8px]

                    ${
                      index !== FOOTER_BADGES.length - 1
                        ? "sm:border-r sm:border-[#d8ddd4]"
                        : ""
                    }
                  `}
                >
                  <img
                    src={badge.icon.src}
                    alt=""
                    aria-hidden="true"
                    className="
                      h-[27px]
                      w-[27px]
                      shrink-0
                      object-contain
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-medium
                      leading-[1.25]
                      text-[#191919]
                      sm:text-[9px]
                    "
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default PmsSupportCoverSection;
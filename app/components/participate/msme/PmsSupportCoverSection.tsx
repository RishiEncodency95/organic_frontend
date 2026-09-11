"use client";

import React, { type FC } from "react";
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
import { ArrowRight } from "lucide-react";

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

const PMS_SUPPORT_COVER_DATA = [
  {
    id: 1,
    bannerTitle: "What Can Your PMS Support Cover?",
    leftHeadingLine1: "More Than Just",
    leftHeadingLine2: "Stall Space Rent",
    leftDescription: "For eligible MSME participation in an approved exhibition, PMS assistance may cover eligible exhibition space rent along with specified contingency expenses, subject to applicable scheme guidelines and approval.",
    maxAssistanceAmount: "1.50 LAKH",
    maxAssistanceLabel: "Maximum Overall Assistance",
    maxAssistanceSub1: "per Eligible Enterprise / Event",
    maxAssistanceSub2: "(All taxes included and subject to actual eligible expenditure)",
    eligibleExpenses: [
      {
        id: 1,
        number: "1",
        title: "SPACE RENT",
        subtitle: "Stall / Built-up Space",
        icon: spaceRentIcon,
        descIcon: rentSupportIcon,
        descLine1: "Up to ",
        descHighlight: "80% / 100%*",
        descLine2: "of eligible space rent",
      },
      {
        id: 2,
        number: "2",
        title: "TRAVEL",
        subtitle: "One Representative*",
        icon: travelIcon,
        descIcon: travelSupportIcon,
        descLine1: "Eligible travel",
        descLine2: "expenditure*",
      },
      {
        id: 3,
        number: "3",
        title: "FREIGHT",
        subtitle: "Exhibition Material",
        icon: freightIcon,
        descIcon: freightSupportIcon,
        descLine1: "Transportation of",
        descLine2: "products / display material*",
      },
      {
        id: 4,
        number: "4",
        title: "PUBLICITY",
        subtitle: "Eligible Promotion",
        icon: publicityIcon,
        descIcon: publicitySupportIcon,
        descLine1: "Eligible publicity",
        descLine2: "expenditure*",
      },
    ],
    additionalSupportTitle: "Additional Contingency Support",
    additionalSupportAmount: "Up to ₹25,000*",
    contingencyItems: ["Travel", "Freight", "Publicity"],
    contingencyNote: "100% of eligible contingency expenditure, subject to the applicable ceiling and PMS guidelines.",
    contingencyImportantNote: "Important: The ₹25,000 contingency support is part of the overall assistance ceiling and not ₹25,000 over and above ₹1.50 lakh.",
    knowBeforeTitle: "Know Before You Apply",
    knowBeforeDescription: "Actual assistance depends on the enterprise category, eligible expenditure, approved participation, applicable limits, supporting documents and final sanction by the competent authority.",
    ctas: [
      {
        id: 1,
        labelLine1: "Check Your",
        labelLine2: "PMS Eligibility",
        href: "/participate/msme/eligibility-check",
        icon: eligibilityCtaIcon,
        variant: "primary"
      },
      {
        id: 2,
        labelLine1: "Understand Your",
        labelLine2: "Estimated Support",
        href: "/participate/msme/eligibility-check",
        icon: supportCtaIcon,
        variant: "secondary"
      }
    ],
    disclaimerText: "* Terms, limits and eligibility are subject to the applicable Procurement & Marketing Support (PMS) Scheme guidelines and competent-authority approval.",
    badges: [
      { id: 1, labelLine1: "Government", labelLine2: "Approved Scheme", icon: badgeGovernment },
      { id: 2, labelLine1: "Transparent", labelLine2: "Process", icon: badgeTransparent },
      { id: 3, labelLine1: "Timely", labelLine2: "Support", icon: badgeTimely },
      { id: 4, labelLine1: "Hassle-free", labelLine2: "Documentation", icon: badgeDocs },
      { id: 5, labelLine1: "For Micro & Small", labelLine2: "Enterprises Only", icon: badgeMsme },
    ]
  }
];

const PmsSupportCoverSection: FC = () => {
  return (
    <section
      aria-labelledby="pms-support-cover-heading"
      className="relative w-full overflow-hidden bg-[#fbfcf8]"
    >
      {PMS_SUPPORT_COVER_DATA.map((data) => (
        <React.Fragment key={data.id}>
          {/* =====================================================
              TOP GREEN LABEL
          ====================================================== */}

          <div className="relative z-20 flex justify-center">
            <div
              className="
                flex
                min-h-[40px]
                items-center
                gap-3
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
                  text-[16px]
                  font-semibold
                  uppercase
                  leading-none
                  text-white
                "
              >
                {data.bannerTitle}
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
                      {data.leftHeadingLine1}
                      <br />
                      <span className="text-[#051323]">
                        {data.leftHeadingLine2}
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
                        text-[14px]
                        font-medium
                        leading-[1.55]
                        text-[#151515]
                        text-justify
                      "
                    >
                      {data.leftDescription}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    MAXIMUM ASSISTANCE
                ================================================== */}

                <div className="flex min-h-[194px] items-center justify-center pt-8">
                  <div
                    className="
                      relative
                      w-full
                      rounded-[12px]
                      border
                      border-[#bdc9b4]
                      bg-[#f5f7f1]
                      px-[18px]
                      pb-[10px]
                      pt-[25px]
                      text-center
                    "
                  >
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

                    <div
                      className="
                        whitespace-nowrap
                        text-[42px]
                        font-extrabold
                        leading-none
                        tracking-[-0.045em]
                        text-[#07582c]
                        sm:text-[50px]
                        lg:text-[65px]
                      "
                    >
                      <span className="text-[40px] lg:text-[50px] font-extrabold">₹</span>{data.maxAssistanceAmount}
                      <sup className="ml-[2px] align-top text-[13px]">*</sup>
                    </div>

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
                      <div
                        className="
                          flex
                          h-[25px]
                          flex-1
                          items-center
                          justify-center
                          bg-[#07582c]
                          px-[7px]
                          text-[14px]
                          font-semibold
                          uppercase
                          tracking-[0.02em]
                          text-white
                        "
                      >
                        {data.maxAssistanceLabel}
                      </div>
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
                      {data.maxAssistanceSub1}
                    </p>

                    <p
                      className="
                        mt-[4px]
                        text-[14px]
                        font-medium
                        leading-tight
                        text-[#222]
                      "
                    >
                      {data.maxAssistanceSub2}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    relative
                    hidden
                    min-h-[194px]
                    items-center
                    justify-start
                    lg:flex
                  "
                />
              </div>

              {/* ===================================================
                  EXPENSES CARD
              ==================================================== */}

              <div
                className="
                  relative
                  mt-[26px]
                  rounded-[13px]
                  border
                  border-[#d7ded0]
                  bg-white/80
                  px-[16px]
                  pb-[14px]
                  pt-[14px]
                "
              >
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
                        text-[14px]
                        font-semibold
                        uppercase
                        leading-none
                        tracking-[0.01em]
                        text-white
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
                  {data.eligibleExpenses.map((expense, index) => (
                    <div
                      key={expense.id}
                      className={`
                        relative
                        px-[17px]
                        py-[3px]
                        ${index !== 0 ? "lg:border-l lg:border-[#d6ddd1]" : ""}
                      `}
                    >
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
                                text-[14px]
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
                              text-[14px]
                              font-semibold
                              leading-tight
                              text-[#202020]
                            "
                          >
                            {expense.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className="
                          my-[5px]
                          block
                          h-px
                          w-full
                          bg-[#d9ded5]
                        "
                      />

                      <div
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                        }}
                        className="
                          flex
                          min-h-[65px]
                          items-center
                          rounded-[8px]
                          bg-[#edf1e3]
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
                            text-[14px]
                            font-medium
                            leading-[1.35]
                            text-[#121212]
                            lg:text-[14px]
                          "
                        >
                          {expense.descLine1}
                          {expense.descHighlight && <strong>{expense.descHighlight}</strong>}
                          {expense.descHighlight && <br />}
                          {expense.descLine2}
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
                  lg:grid-cols-[115px_450px_1fr_250px]
                "
              >
                <div className="flex items-center justify-center">
                  <img
                    src={additionalSupportIcon.src}
                    alt=""
                    aria-hidden="true"
                    className="h-[98px] w-[98px] object-contain"
                  />
                </div>

                <div className="pl-[8px] pr-4">
                  <h4
                    className="
                      text-left
                      text-[22px]
                      font-semibold
                      uppercase
                      leading-tight
                      text-[#07582c]
                    "
                  >
                    {data.additionalSupportTitle}
                  </h4>

                  <div
                    className="
                      mt-[5px] max-w-[365px]
                      rounded-[6px]
                      bg-[#07582c]
                      px-[15px]
                      py-2
                      text-center
                      text-[32px]
                      font-bold
                      leading-none
                      text-white
                    "
                  >
                    {data.additionalSupportAmount}
                  </div>

                  <div
                    className="
                      mt-[2px]
                      max-w-[365px]
                      flex
                      items-center
                      justify-center
                      rounded-[5px]
                      bg-[#ffd552]
                      px-[8px]
                      py-[4px]
                      text-[14px]
                      font-bold
                      leading-none
                    "
                  >
                    {data.contingencyItems.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {item}
                        {idx < data.contingencyItems.length - 1 && <span className="px-[10px] font-bold">+</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div
                  className="
                    border-[#d5dcd0]
                    px-[30px]
                    lg:border-x pr-[10%]
                  "
                >
                  <div className="flex items-start gap-[10px]">
                    <img
                      src={checkCircleIcon.src}
                      alt=""
                      aria-hidden="true"
                      className="mt-[1px] h-[28px] w-[28px] shrink-0 object-contain"
                    />

                    <p
                      className="
                        text-[14px]
                        font-semibold
                        leading-[1.4]
                        text-[#191919]
                      "
                    >
                      {data.contingencyNote}
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
                      className="mt-[1px] h-[28px] w-[28px] shrink-0 object-contain"
                    />

                    <p
                      className="
                        text-[16px]
                        font-medium
                        leading-[1.35]
                        text-[#27220f]
                      "
                    >
                      {data.contingencyImportantNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <img
                    src={calculatorVisual.src}
                    alt="PMS support calculation"
                    className="
                      h-[135px]
                      w-[185px]
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
                  lg:grid-cols-[78px_1fr_0.8fr_auto_0.9fr]
                "
              >
                <div className="flex justify-center">
                  <img
                    src={knowBeforeIcon.src}
                    alt=""
                    aria-hidden="true"
                    className="h-[74px] w-[74px] object-contain"
                  />
                </div>

                <div>
                  <h4
                    className="
                      text-[18px]
                      font-semibold
                      uppercase
                      leading-tight
                      text-[#07582c]
                    "
                  >
                    {data.knowBeforeTitle}
                  </h4>

                  <p
                    className="
                      mt-[4px]
                      text-[14px]
                      font-semibold
                      leading-[1.55]
                      text-[#202020]
                      sm:text-[14px]
                    "
                  >
                    {data.knowBeforeDescription}
                  </p>
                </div>

                {data.ctas.map((cta, index) => (
                  <React.Fragment key={cta.id}>
                    <Link
                      href={cta.href}
                      target="_blank"
                      className={`
                        flex
                        min-h-[71px]
                        items-center
                        justify-center
                        gap-[10px]
                        rounded-[7px]
                        px-[15px]
                        py-2
                        ${cta.variant === "primary" ? "bg-[#07582c] text-white" : "border border-[#07582c] bg-white text-[#07582c]"}
                      `}
                    >
                      <img
                        src={cta.icon.src}
                        alt=""
                        aria-hidden="true"
                        className="h-[60px] w-[60px] shrink-0 object-contain"
                      />

                      <span
                        className="
                          text-[20px]
                          font-semibold
                          uppercase
                          leading-[1.5]
                        "
                      >
                        {cta.labelLine1}
                        <br />
                        {cta.labelLine2}
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
                        <ArrowRight />
                      </span>
                    </Link>
                    {index === 0 && <div className="w-px h-[80%] bg-[#07582c]/50 hidden lg:block" />}
                  </React.Fragment>
                ))}
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
                  lg:grid-cols-[390px_1fr]
                "
              >
                <p
                  className="
                    pr-[15px]
                    text-[14px]
                    leading-[1.5]
                    text-[#252525]
                    lg:border-r
                    lg:border-[#d8ddd4]
                  "
                >
                  {data.disclaimerText}
                </p>

                <div
                  className="
                    grid
                    grid-cols-2
                    items-center
                    sm:grid-cols-5
                  "
                >
                  {data.badges.map((badge, index) => (
                    <div
                      key={badge.id}
                      className={`
                        flex
                        min-h-[43px]
                        items-center
                        justify-center
                        gap-[7px]
                        px-[8px]
                        ${index !== data.badges.length - 1 ? "sm:border-r sm:border-[#d8ddd4]" : ""}
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
                          text-[14px]
                          font-medium
                          leading-[1.25]
                          text-[#191919]
                        "
                      >
                        {badge.labelLine1}
                        <br />
                        {badge.labelLine2}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContainer>
        </React.Fragment>
      ))}
    </section>
  );
};

export default PmsSupportCoverSection;
"use client";

import React from "react";
import SectionContainer from "@/app/components/layout/SectionContainer";

/* =========================================================
   EXACT CROPPED ASSETS FROM REFERENCE IMAGE
========================================================= */

import knowSchemeIcon from "@/app/assets/participate/msme/scheme-reference/know-scheme-icon.png";

import marketAccessIcon from "@/app/assets/participate/msme/scheme-reference/market-access-icon.png";
import exhibitionSupportIcon from "@/app/assets/participate/msme/scheme-reference/exhibition-support-icon.png";
import buyerConnectionsIcon from "@/app/assets/participate/msme/scheme-reference/buyer-connections-icon.png";
import businessGrowthIcon from "@/app/assets/participate/msme/scheme-reference/business-growth-icon.png";

import cardBottom01 from "@/app/assets/participate/msme/scheme-reference/card-bottom-01.png";
import cardBottom02 from "@/app/assets/participate/msme/scheme-reference/card-bottom-02.png";
import cardBottom03 from "@/app/assets/participate/msme/scheme-reference/card-bottom-03.png";
import cardBottom04 from "@/app/assets/participate/msme/scheme-reference/card-bottom-04.png";

import leftLeaves from "@/app/assets/participate/msme/scheme-reference/left-leaves.png";
import bottomShield from "@/app/assets/participate/msme/scheme-reference/bottom-shield.png";
import bottomRightLeaves from "@/app/assets/participate/msme/scheme-reference/bottom-right-leaves.png";

/* =========================================================
   DATA
========================================================= */

const SCHEME_FEATURES = [
  {
    id: "market-access",
    title: "Market Access",
    description: (
      <>
        Explore new domestic
        <br />
        and international markets
        <br />
        for your products
        <br />
        and services.
      </>
    ),
    icon: marketAccessIcon,
    bottom: cardBottom01,
  },
  {
    id: "exhibition-support",
    title: "Exhibition Support",
    description: (
      <>
        Reduce the cost of
        <br />
        participation in approved
        <br />
        exhibitions and
        <br />
        trade fairs.
      </>
    ),
    icon: exhibitionSupportIcon,
    bottom: cardBottom02,
  },
  {
    id: "buyer-connections",
    title: "Buyer Connections",
    description: (
      <>
        Meet buyers, distributors
        <br />
        and industry professionals
        <br />
        to grow your business
        <br />
        network.
      </>
    ),
    icon: buyerConnectionsIcon,
    bottom: cardBottom03,
  },
  {
    id: "business-growth",
    title: "Business Growth",
    description: (
      <>
        Strengthen your brand,
        <br />
        increase visibility and
        <br />
        create new business
        <br />
        opportunities.
      </>
    ),
    icon: businessGrowthIcon,
    bottom: cardBottom04,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function MsmePmsScheme() {
  return (
    <section
      aria-labelledby="msme-pms-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fdfdf9]
        py-4
      "
    >
      {/* =====================================================
          LEFT REFERENCE LEAVES
      ====================================================== */}

      <img
        src={leftLeaves.src}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-[118px]
          z-0
          hidden
          h-[165px]
          w-auto
          object-contain
          opacity-70
          lg:block
        "
      />

      <SectionContainer>
        <div className="relative z-10 mx-auto w-full">
          {/* ===================================================
              KNOW THE SCHEME HEADER
          ==================================================== */}

          <div className="flex w-full items-center justify-center">
            {/* left golden line */}
            <div className="flex flex-1 items-center">
              <span className="h-px flex-1 bg-[#c5a23a]/75" />

              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#b79427]" />
            </div>

            {/* center title */}
            <div
              className="
                mx-[14px]
                flex
                shrink-0
                items-center
                gap-[10px]
                sm:mx-[18px]
              "
            >
              <img
                src={knowSchemeIcon.src}
                alt=""
                aria-hidden="true"
                className="
                  h-[48px]
                  w-[48px]
                  shrink-0
                  object-contain
                "
              />

              <p
                className="
                  whitespace-nowrap
                  text-[15px]
                  font-bold
                  uppercase
                  leading-none
                  tracking-[0.01em]
                  text-[#0d5129]
                  sm:text-[17px]
                  lg:text-[19px]
                "
              >
                KNOW THE SCHEME
              </p>
            </div>

            {/* right golden line */}
            <div className="flex flex-1 items-center">
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#b79427]" />

              <span className="h-px flex-1 bg-[#c5a23a]/75" />
            </div>
          </div>

          {/* ===================================================
              MAIN HEADING
          ==================================================== */}

          <h2
            id="msme-pms-heading"
            className="
              mt-[13px]
              text-center
              text-[27px]
              font-semibold
              leading-[1.05]
              tracking-[-0.025em]
              text-[#075128]
              sm:text-[34px]
              md:text-[40px]
              lg:text-[48px]
            "
          >
            What is the MSME PMS Scheme?
          </h2>

          {/* ===================================================
              GOLDEN BORDER WITH DIAMOND
          ==================================================== */}

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-[14px]
              flex
              w-full
              max-w-[280px]
              items-center
              justify-center
            "
          >
            <span className="h-[2px] flex-1 bg-[#b89528]" />
            <span className="mx-[6px] h-[10px] w-[10px] rotate-45 bg-[#b89528]" />
            <span className="h-[2px] flex-1 bg-[#b89528]" />
          </div>

          {/* ===================================================
              INTRO TEXT
          ==================================================== */}

          <p
            className="
              mx-auto
              mt-[22px]
              max-w-[800px]
              text-center
              text-[14px]
              leading-[1.45]
              text-[#171717]
              sm:text-[16px]
              lg:text-[17px]
            "
          >
            The{" "}
            <strong className="font-bold text-[#075128]">
              Procurement &amp; Marketing Support (PMS) Scheme
            </strong>{" "}
            is an initiative of the Ministry of MSME
            <br className="hidden md:block" />
            aimed at improving market access for Micro &amp; Small Enterprises.
            <br className="hidden md:block" />
            Eligible MSEs can explore applicable financial assistance for
            participation in
            <br className="hidden md:block" />
            approved trade fairs and exhibitions.
          </p>

          {/* ===================================================
              FEATURE CARDS
          ==================================================== */}

          <ul
            className="
              mt-[24px]
              grid
              grid-cols-1
              gap-[14px]
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-[15px]
            "
          >
            {SCHEME_FEATURES.map((feature) => (
              <li
                key={feature.id}
                className="
                  relative
                  flex
                  min-h-[315px]
                  flex-col
                  items-center
                  overflow-hidden
                  rounded-[15px]
                  border
                  border-[#ebece7]
                  bg-white
                  px-[13px]
                  pb-[43px]
                  pt-[18px]
                  text-center
                  shadow-[0_2px_9px_rgba(0,0,0,0.06)]
                "
              >
                {/* =============================================
                    EXACT CROPPED ICON
                ============================================== */}

                <img
                  src={feature.icon.src}
                  alt=""
                  aria-hidden="true"
                  className="
                    h-[102px]
                    w-[102px]
                    shrink-0
                    object-contain
                  "
                />

                {/* =============================================
                    TITLE
                ============================================== */}

                <h3
                  className="
                    mt-[5px]
                    text-[17px]
                    font-semibold
                    leading-[1.15]
                    tracking-[-0.015em]
                    text-[#075128]
                    sm:text-[19px]
                    lg:text-[20px]
                  "
                >
                  {feature.title}
                </h3>

                {/* =============================================
                    GOLD DIVIDER
                ============================================== */}

                <div
                  aria-hidden="true"
                  className="
                    mt-[9px]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span className="h-px w-[57px] bg-[#c3a039]" />

                  <span
                    className="
                      mx-[5px]
                      h-[7px]
                      w-[7px]
                      rounded-full
                      bg-[#b99727]
                    "
                  />

                  <span className="h-px w-[57px] bg-[#c3a039]" />
                </div>

                {/* =============================================
                    DESCRIPTION
                ============================================== */}

                <p
                  className="
                    mt-[14px]
                    text-[13px]
                    leading-[1.42]
                    text-[#181818]
                    sm:text-[14px]
                    lg:text-[15px]
                  "
                >
                  {feature.description}
                </p>

                {/* =============================================
                    EXACT CROPPED GREEN NUMBER SHAPE
                ============================================== */}

                <img
                  src={feature.bottom.src}
                  alt=""
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-1px]
                    left-1/2
                    h-[39px]
                    w-[185px]
                    -translate-x-1/2
                    object-contain
                    object-bottom
                  "
                />
              </li>
            ))}
          </ul>

          {/* ===================================================
              BOTTOM MESSAGE BANNER
          ==================================================== */}

          <div
            className="
              relative
              mt-[18px]
              flex
              min-h-[96px]
              items-center
              overflow-hidden
              rounded-[15px]
              bg-[#eef3e6]
              px-[20px]
              py-[12px]
              sm:px-[32px]
            "
          >
            {/* exact shield */}
            <img
              src={bottomShield.src}
              alt=""
              aria-hidden="true"
              className="
                relative
                z-10
                h-[65px]
                w-[65px]
                shrink-0
                object-contain
              "
            />

            {/* text */}
            <div
              className="
                relative
                z-10
                ml-[17px]
                pr-[120px]
              "
            >
              <p
                className="
                  text-[14px]
                  leading-[1.45]
                  text-[#151515]
                  sm:text-[16px]
                  lg:text-[17px]
                "
              >
                The PMS Scheme empowers MSEs to participate, promote and
                prosper.
              </p>

              <p
                className="
                  mt-[2px]
                  text-[14px]
                  font-extrabold
                  leading-[1.35]
                  text-[#075128]
                  sm:text-[16px]
                  lg:text-[17px]
                "
              >
                More Participation. More Exposure. More Growth.
              </p>
            </div>

            {/* exact reference right leaves */}
            <img
              src={bottomRightLeaves.src}
              alt=""
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                z-0
                h-[88px]
                w-auto
                object-contain
                object-right-bottom
              "
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
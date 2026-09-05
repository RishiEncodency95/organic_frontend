"use client";

import Image, { StaticImageData } from "next/image";
import type {
  ReactNode,
  SVGProps,
} from "react";
import bgImage from "@/app/assets/participate/msme/ready_to_explore.png"

/* ================================================================
   TYPES
================================================================ */

export type PmsFinalCtaContent = {
  sectionLabel: string;

  headingBefore: string;
  headingHighlight: string;

  subtitle: string;

  leftCardTitle: string;
  leftCardDescription: string;

  rightCardTitle: string;
  rightCardDescription: string;

  primaryButton: string;
  secondaryButton: string;

  supportText: string;

  services: string[];

  disclaimerTitle: string;
  disclaimerText: string;
};

type Props = {
  content?: Partial<PmsFinalCtaContent>;

  /**
   * Save uploaded reference at:
   * /public/images/pms-final-reference.png
   *
   * We only reveal the side artwork regions from it.
   */
  referenceImage?: string|StaticImageData;

  onCheckEligibility?: () => void;
  onUdyamGuidance?: () => void;

  supportHref?: string;
};

/* ================================================================
   DEFAULT EDITABLE CONTENT
================================================================ */

export const DEFAULT_PMS_FINAL_CTA_CONTENT: PmsFinalCtaContent = {
  sectionLabel:
    "SECTION 11 — FINAL CTA",

  headingBefore:
    "Ready to Explore",

  headingHighlight:
    "PMS Support?",

  subtitle:
    "Start with a Simple Eligibility Check.",

  leftCardTitle:
    "Already Udyam registered?",

  leftCardDescription:
    "Upload your certificate and let us conduct a preliminary screening.",

  rightCardTitle:
    "Not registered yet?",

  rightCardDescription:
    "Start with Udyam Registration guidance.",

  primaryButton:
    "CHECK YOUR PMS ELIGIBILITY",

  secondaryButton:
    "GET UDYAM REGISTRATION GUIDANCE",

  supportText:
    "Talk to PMS Support Team",

  services: [
    "Registration Guidance",
    "Eligibility Screening",
    "Application Support",
    "Documentation",
    "Claim Assistance",
  ],

  disclaimerTitle:
    "IMPORTANT DISCLAIMER",

  disclaimerText:
    "Bharat Organic Expo / Organiser provides PMS facilitation, preliminary eligibility screening, Udyam Registration guidance, documentation and claim-process assistance. Event approval does not constitute automatic approval of an individual MSE application or reimbursement claim. Eligibility, sanction, permissible assistance and reimbursement are subject to applicable Ministry of MSME guidelines and decisions of the competent authority.",
};

/* ================================================================
   ICON — CERTIFICATE
================================================================ */

function IconCertificate(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.4 5.7h14.1l7.1 7.1v21.4H9.4z" />

      <path d="M23.5 5.7v7.1h7.1" />

      <path d="M14 13.2h5" />
      <path d="M14 18.1h11" />
      <path d="M14 22.9h7" />

      <circle
        cx="26"
        cy="28"
        r="5"
      />

      <path d="M22.7 31.6v6.1l3.3-1.9 3.3 1.9v-6.1" />

      <path d="M26 25.9v4" />
      <path d="M24.1 27.9h3.8" />
    </svg>
  );
}

/* ================================================================
   ICON — CLIPBOARD
================================================================ */

function IconClipboard(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.6 7.7h-3.5a2 2 0 0 0-2 2v23.8a2 2 0 0 0 2 2h19.8a2 2 0 0 0 2-2V9.7a2 2 0 0 0-2-2h-3.5" />

      <path d="M15.1 5.1h9.8a1.6 1.6 0 0 1 1.6 1.6v2.9h-13V6.7a1.6 1.6 0 0 1 1.6-1.6Z" />

      <path d="m13 16.4 1.6 1.7 2.7-3" />
      <path d="M21 17h6" />

      <path d="m13 22.5 1.6 1.6 2.7-3" />
      <path d="M21 23h6" />

      <path d="m13 28.5 1.6 1.6 2.7-3" />
      <path d="M21 29h6" />
    </svg>
  );
}

/* ================================================================
   ICON — UPLOAD
================================================================ */

function IconUpload(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 14V3.5" />

      <path d="m8.1 7.2 3.9-3.7 3.9 3.7" />

      <path d="M4.4 13.4v6.1a1 1 0 0 0 1 1h13.2a1 1 0 0 0 1-1v-6.1" />
    </svg>
  );
}

/* ================================================================
   ICON — USER CIRCLE
================================================================ */

function IconUserCircle(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9.2"
      />

      <circle
        cx="12"
        cy="9.5"
        r="2.8"
      />

      <path d="M6.5 18.4a6.1 6.1 0 0 1 11 0" />
    </svg>
  );
}

/* ================================================================
   SERVICE ICONS
================================================================ */

function IconShield(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2.8 4.9 5.5v5.9c0 4.3 2.9 8.2 7.1 9.7 4.2-1.5 7.1-5.4 7.1-9.7V5.5z" />

      <path d="m8.6 11.8 2.2 2.2 4.5-4.7" />
    </svg>
  );
}

function IconScreening(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle
        cx="10"
        cy="10"
        r="6"
      />

      <circle
        cx="10"
        cy="8.6"
        r="2"
      />

      <path d="M6.8 14.8a3.7 3.7 0 0 1 6.4 0" />

      <path d="m19.5 19.5-4.6-4.6" />
    </svg>
  );
}

function IconApplication(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.7 3H6.3A1.3 1.3 0 0 0 5 4.3v15.4A1.3 1.3 0 0 0 6.3 21h8.3" />

      <path d="M13.7 3 18 7.3v3" />

      <path d="M8.5 8.3h4" />
      <path d="M8.5 11.7h4.5" />
      <path d="M8.5 15h3" />

      <path d="m20.5 12.7-5.6 5.6-2.5.7.7-2.5 5.6-5.6a1.27 1.27 0 0 1 1.8 1.8Z" />
    </svg>
  );
}

function IconFolder(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3.3 7.4a1.8 1.8 0 0 1 1.8-1.8h3.6l2.1 2.3h8.1a1.8 1.8 0 0 1 1.8 1.8v7a1.8 1.8 0 0 1-1.8 1.8H5.1a1.8 1.8 0 0 1-1.8-1.8Z" />
    </svg>
  );
}

function IconHeadset(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 13.2V12a7.5 7.5 0 0 1 15 0v1.2" />

      <rect
        x="3"
        y="12.5"
        width="3.5"
        height="5.5"
        rx="1.5"
      />

      <rect
        x="17.5"
        y="12.5"
        width="3.5"
        height="5.5"
        rx="1.5"
      />

      <path d="M19.5 18v.8a2.2 2.2 0 0 1-2.2 2.2H13" />
    </svg>
  );
}

/* ================================================================
   DISCLAIMER ICON
================================================================ */

function IconDisclaimer(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      {...props}
    >
      <path d="M16 2.3 5.6 6.5v8.3c0 6.3 4.3 12 10.4 14.1 6.1-2.1 10.4-7.8 10.4-14.1V6.5Z" />

      <path
        fill="#fff"
        d="M16 8.7a1.3 1.3 0 0 0-1.3 1.4l.3 7a1 1 0 0 0 2 0l.3-7A1.3 1.3 0 0 0 16 8.7Zm0 10.8a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"
      />
    </svg>
  );
}

/* ================================================================
   FLOURISH
================================================================ */

function Flourish({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  return (
    <span
      className="
        flex
        items-center
        text-[#4D762F]
      "
    >
      {!reverse && (
        <span
          className="
            mr-[0.55vw]
            h-px
            w-[3.1vw]
            bg-current
            opacity-60
          "
        />
      )}

      <svg
        viewBox="0 0 15 12"
        className={`
          h-[0.85vw]
          min-h-[8px]
          w-[1.1vw]
          min-w-[11px]

          ${
            reverse
              ? "rotate-180"
              : ""
          }
        `}
      >
        <path
          d="M6.5 1 1.5 6l5 5M13 1 8 6l5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {reverse && (
        <span
          className="
            ml-[0.55vw]
            h-px
            w-[3.1vw]
            bg-current
            opacity-60
          "
        />
      )}
    </span>
  );
}

/* ================================================================
   CARD
================================================================ */

function ChoiceCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<
    SVGProps<SVGSVGElement>
  >;

  title: string;

  children: ReactNode;
}) {
  return (
    <div
      className="
        flex
        h-full
        w-full
        flex-col
        items-center
        rounded-[0.8vw]
        border
        border-[#ECEEE7]
        bg-[rgba(255,255,255,0.96)]
        text-center
        shadow-[0_5px_14px_rgba(41,58,29,0.13)]
      "
    >
      <div
        className="
          mt-[6.5%]
          flex
          aspect-square
          w-[18%]
          min-w-[46px]
          max-w-[62px]
          items-center
          justify-center
          rounded-full
          bg-[#EFF5E6]
          text-[#315C17]
        "
      >
        <Icon
          className="
            h-[55%]
            w-[55%]
          "
        />
      </div>

      <h3
        className="
          mt-[3.7%]
          px-[4%]
          text-[clamp(14px,1.47vw,23px)]
          font-semibold
          leading-[1.15]
          tracking-[-0.018em]
          text-[#154A0D]
        "
      >
        {title}
      </h3>

      <span
        className="
          mt-[4%]
          h-px
          w-[26%]
          bg-[#C8D4BF]
        "
      />

      <p
        className="
          mt-[4%]
          max-w-[84%]
          text-[clamp(11px,1.08vw,17px)]
          font-medium
          leading-[1.55]
          text-[#242938]
        "
      >
        {children}
      </p>
    </div>
  );
}

/* ================================================================
   MAIN
================================================================ */

export default function PmsFinalCta({
  content,

  referenceImage =
    bgImage,

  onCheckEligibility,

  onUdyamGuidance,

  supportHref =
    "#pms-support",
}: Props) {
  const c: PmsFinalCtaContent = {
    ...DEFAULT_PMS_FINAL_CTA_CONTENT,
    ...content,

    services:
      content?.services ??
      DEFAULT_PMS_FINAL_CTA_CONTENT.services,
  };

  const serviceIcons = [
    IconShield,
    IconScreening,
    IconApplication,
    IconFolder,
    IconHeadset,
  ];

  return (
    <section
      id="final-cta"
      className="
        relative
        left-1/2
        isolate
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#FAFAF5]

        lg:aspect-[2/1]
      "
    >
      {/* ==========================================================
          DESKTOP REFERENCE SIDE ART

          Same uploaded screenshot is used only as artwork.

          LEFT:
          x = 0 → ~27.7%

          RIGHT:
          x = ~77.8% → 100%

          Central screenshot text/cards are NEVER displayed.
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          hidden
          lg:block
        "
        style={{
          clipPath:
            "inset(0 74.55% 0 0)",
        }}
      >
        <Image
          src={referenceImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            object-fill
          "
        />
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          hidden
          lg:block
        "
        style={{
          clipPath:
            "inset(0 0 0 77.8%)",
        }}
      >
        <Image
          src={referenceImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            object-fill
          "
        />
      </div>

      {/* ==========================================================
          CENTRE BACKGROUND
      ========================================================== */}
{/* 
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          hidden
          lg:block
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(250,250,245,0) 0%,
              rgba(250,250,245,0.08) 21%,
              rgba(250,250,245,0.94) 27%,
              rgba(250,250,245,1) 31%,
              rgba(250,250,245,1) 76%,
              rgba(250,250,245,0.85) 82%,
              rgba(250,250,245,0) 100%
            )
          `,
        }}
      /> */}

      {/* subtle centre haze */}

      {/* <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          hidden
          lg:block
        "
        style={{
          background:
            "radial-gradient(ellipse 52% 74% at 51% 44%, rgba(255,255,252,.88) 0%, rgba(255,255,252,.65) 56%, rgba(255,255,252,0) 100%)",
        }}
      /> */}

      {/* ==========================================================
          DESKTOP PIXEL-MATCHED CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          h-full
          w-full
          lg:block
        "
      >
        {/* ========================================================
            SECTION BADGE

            reference:
            x 439–644
            y 24–50
        ======================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[4.4%]
            -translate-x-1/2
          "
        >
          <div
            className="
              flex
              h-[4.75%]
              min-h-[26px]
              items-center
              justify-center
              rounded-[0.42vw]
              bg-[#1F4C00]
              px-[1.5vw]
              py-[0.48vw]
              text-[clamp(9px,0.92vw,14px)]
              uppercase
              tracking-[0.055em]
              text-white
            "
          >
            {c.sectionLabel}
          </div>
        </div>

        {/* ========================================================
            TITLE

            reference top ≈ 64px / 545
        ======================================================== */}

        <h2
          className="
            absolute
            left-1/2
            top-[11.25%]
            w-[62%]
            -translate-x-1/2
            whitespace-nowrap
            text-center
            text-[clamp(36px,3.68vw,59px)]
            font-semibold
            leading-[1]
            tracking-[-0.036em]
            text-[#091934]
          "
        >
          {c.headingBefore}{" "}

          <span
            className="
              text-[#295D14]
            "
          >
            {c.headingHighlight}
          </span>
        </h2>

        {/* ========================================================
            SUBTITLE

            reference y ≈ 116px
        ======================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[21.2%]
            flex
            -translate-x-1/2
            items-center
            justify-center
            gap-[0.7vw]
          "
        >
          <Flourish />

          <p
            className="
              whitespace-nowrap
              text-[clamp(14px,1.55vw,24px)]
              font-[500]
              leading-none
              text-[#202A3E]
            "
          >
            {c.subtitle}
          </p>

          <Flourish reverse />
        </div>

        {/* ========================================================
            LEFT CARD

            reference:
            x 278
            y 151
            width ≈ 265
            height ≈ 162
        ======================================================== */}

        <div
          className="
            absolute
            left-[25.5%]
            top-[27.7%]
            h-[29.7%]
            w-[24.3%]
          "
        >
          <ChoiceCard
            icon={IconCertificate}
            title={
              c.leftCardTitle
            }
          >
            {
              c.leftCardDescription
            }
          </ChoiceCard>
        </div>

        {/* ========================================================
            OR

            reference:
            centre x ≈ 51.55%
            centre y ≈ 42.4%
        ======================================================== */}

        <div
          className="
            absolute
            left-[51.55%]
            top-[42.4%]
            z-20
            flex
            aspect-square
            w-[3.35%]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#587935]
            text-[clamp(8px,0.85vw,13px)]
            font-[800]
            uppercase
            text-white
          "
        >
          OR
        </div>

        {/* ========================================================
            RIGHT CARD
        ======================================================== */}

        <div
          className="
            absolute
            left-[53.2%]
            top-[27.7%]
            h-[29.7%]
            w-[24.4%]
          "
        >
          <ChoiceCard
            icon={IconClipboard}
            title={
              c.rightCardTitle
            }
          >
            {
              c.rightCardDescription
            }
          </ChoiceCard>
        </div>

        {/* ========================================================
            LEFT CTA

            reference y 331
        ======================================================== */}

        <button
          type="button"
          onClick={
            onCheckEligibility
          }
          className="
            absolute
            left-[25.5%]
            top-[60.7%]
            flex
            h-[7.35%]
            w-[24.5%]
            items-center
            justify-center
            gap-[0.8vw]
            rounded-[0.42vw]
            bg-[#204C00]
            px-[1vw]
            text-[clamp(9px,0.98vw,15px)]
            font-[800]
            uppercase
            tracking-[0.025em]
            text-white
            shadow-[0_5px_12px_rgba(31,73,0,0.16)]
            transition-colors
            hover:bg-[#2C5E08]
          "
        >
          <IconUpload
            className="
              h-[1.75vw]
              max-h-[25px]
              min-h-[17px]
              w-[1.75vw]
              max-w-[25px]
              min-w-[17px]
              shrink-0
            "
          />

          <span
            className="
              whitespace-nowrap
            "
          >
            {c.primaryButton}
          </span>
        </button>

        {/* ========================================================
            RIGHT CTA
        ======================================================== */}

        <button
          type="button"
          onClick={
            onUdyamGuidance
          }
          className="
            absolute
            left-[53.2%]
            top-[60.7%]
            flex
            h-[7.35%]
            w-[24.5%]
            items-center
            justify-center
            gap-[0.7vw]
            rounded-[0.42vw]
            border
            border-[#AFC39D]
            bg-[rgba(255,255,255,0.92)]
            px-[0.8vw]
            text-[clamp(8px,0.9vw,14px)]
            font-[800]
            uppercase
            tracking-[0.015em]
            text-[#244817]
            transition-colors
            hover:bg-white
          "
        >
          <IconUserCircle
            className="
              h-[1.72vw]
              max-h-[24px]
              min-h-[17px]
              w-[1.72vw]
              max-w-[24px]
              min-w-[17px]
              shrink-0
              text-[#537D35]
            "
          />

          <span
            className="
              whitespace-nowrap
            "
          >
            {c.secondaryButton}
          </span>
        </button>

        {/* ========================================================
            SUPPORT LINK
        ======================================================== */}

        <a
          href={supportHref}
          className="
            absolute
            left-[51.65%]
            top-[70.85%]
            flex
            -translate-x-1/2
            items-center
            gap-[0.6vw]
            whitespace-nowrap
            text-[clamp(11px,1.12vw,17px)]
            font-[700]
            text-[#35551F]
            hover:underline
            hover:underline-offset-4
          "
        >
          {c.supportText}

          <span
            className="
              text-[1.3em]
            "
          >
            →
          </span>
        </a>

        {/* ========================================================
            SERVICES

            reference roughly x 243 → 927
        ======================================================== */}

        <div
          className="
            absolute
            left-[52.5%]
            top-[76.35%]
            flex
            w-[63%]
            -translate-x-1/2
            items-center
            justify-center
          "
        >
          {c.services.map(
            (service, index) => {
              const ServiceIcon =
                serviceIcons[
                  index
                ] ??
                IconShield;

              return (
                <div
                  key={`${service}-${index}`}
                  className="
                    flex
                    min-w-0
                    items-center
                  "
                >
                  {index > 0 && (
                    <span
                      className="
                        mx-[1.05vw]
                        h-[1.65vw]
                        max-h-[20px]
                        min-h-[14px]
                        w-px
                        shrink-0
                        bg-[#CDD6C6]
                      "
                    />
                  )}

                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-[0.55vw]
                      whitespace-nowrap
                      text-[clamp(8px,0.94vw,14px)]
                      font-[500]
                      text-[#383D47]
                    "
                  >
                    <ServiceIcon
                      className="
                        h-[1.52vw]
                        max-h-[21px]
                        min-h-[15px]
                        w-[1.52vw]
                        max-w-[21px]
                        min-w-[15px]
                        shrink-0
                        text-[#778A65]
                      "
                    />

                    <span>
                      {service}
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* ========================================================
            DISCLAIMER

            reference:
            x ≈ 87
            y ≈ 451
            width ≈ 917
            height ≈ 72
        ======================================================== */}

        <div
          className="
            absolute
            left-[7.98%]
            top-[82.75%]
            h-[13.2%]
            w-[84.1%]
            overflow-hidden
            rounded-[0.6vw]
            border
            border-[#E0E0D4]
            bg-[rgba(250,249,244,0.96)]
            shadow-[0_2px_5px_rgba(39,46,29,0.08)]
          "
        >
          <div
            className="
              flex
              h-full
              w-full
              items-center
            "
          >
            {/* left disclaimer block */}

            <div
              className="
                flex
                h-full
                w-[22.8%]
                shrink-0
                items-center
                pl-[4.6%]
              "
            >
              <IconDisclaimer
                className="
                  h-[3.8vw]
                  max-h-[42px]
                  min-h-[30px]
                  w-[3.8vw]
                  max-w-[42px]
                  min-w-[30px]
                  shrink-0
                  text-[#224B06]
                "
              />

              <p
                className="
                  ml-[1.45vw]
                  text-[clamp(9px,1.02vw,16px)]
                  font-[800]
                  uppercase
                  leading-[1.2]
                  text-[#2B4A10]
                "
              >
                IMPORTANT
                <br />
                DISCLAIMER
              </p>
            </div>

            {/* divider */}

            <span
              className="
                h-[68%]
                w-px
                shrink-0
                bg-[#D8D8CC]
              "
            />

            {/* disclaimer text */}

            <div
              className="
                flex
                min-w-0
                flex-1
                items-center
                px-[1.7vw]
              "
            >
              <p
                className="
                  text-[clamp(7.5px,0.86vw,13px)]
                  font-[500]
                  leading-[1.45]
                  text-[#30343E]
                "
              >
                {c.disclaimerText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================
          MOBILE / TABLET

          Desktop above is locked to reference.
          Mobile intentionally becomes responsive so nothing cuts.
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[760px]
          flex-col
          items-center
          px-5
          py-10
          lg:hidden
        "
      >
        <span
          className="
            rounded-[5px]
            bg-[#204C00]
            px-4
            py-2
            text-[10px]
            font-[800]
            uppercase
            tracking-[0.05em]
            text-white
          "
        >
          {c.sectionLabel}
        </span>

        <h2
          className="
            mt-5
            text-center
            text-[32px]
            font-[850]
            leading-[1.08]
            tracking-[-0.035em]
            text-[#091934]
            sm:text-[40px]
          "
        >
          {c.headingBefore}{" "}

          <span
            className="
              text-[#295D14]
            "
          >
            {c.headingHighlight}
          </span>
        </h2>

        <p
          className="
            mt-3
            text-center
            text-[15px]
            font-[500]
            text-[#202A3E]
          "
        >
          {c.subtitle}
        </p>

        <div
          className="
            mt-7
            grid
            w-full
            gap-3
            md:grid-cols-2
          "
        >
          <div
            className="
              h-[210px]
            "
          >
            <ChoiceCard
              icon={
                IconCertificate
              }
              title={
                c.leftCardTitle
              }
            >
              {
                c.leftCardDescription
              }
            </ChoiceCard>
          </div>

          <div
            className="
              h-[210px]
            "
          >
            <ChoiceCard
              icon={
                IconClipboard
              }
              title={
                c.rightCardTitle
              }
            >
              {
                c.rightCardDescription
              }
            </ChoiceCard>
          </div>
        </div>

        <div
          className="
            mt-4
            grid
            w-full
            gap-3
            md:grid-cols-2
          "
        >
          <button
            type="button"
            onClick={
              onCheckEligibility
            }
            className="
              flex
              min-h-[50px]
              items-center
              justify-center
              gap-2
              rounded-md
              bg-[#204C00]
              px-5
              text-[11px]
              font-[800]
              uppercase
              text-white
            "
          >
            <IconUpload
              className="
                h-5
                w-5
              "
            />

            {c.primaryButton}
          </button>

          <button
            type="button"
            onClick={
              onUdyamGuidance
            }
            className="
              flex
              min-h-[50px]
              items-center
              justify-center
              gap-2
              rounded-md
              border
              border-[#AFC39D]
              bg-white
              px-5
              text-[11px]
              font-[800]
              uppercase
              text-[#244817]
            "
          >
            <IconUserCircle
              className="
                h-5
                w-5
              "
            />

            {c.secondaryButton}
          </button>
        </div>

        <a
          href={supportHref}
          className="
            mt-5
            font-[700]
            text-[#35551F]
          "
        >
          {c.supportText} →
        </a>

        <div
          className="
            mt-6
            flex
            flex-wrap
            justify-center
            gap-x-5
            gap-y-3
          "
        >
          {c.services.map(
            (service, index) => {
              const ServiceIcon =
                serviceIcons[
                  index
                ] ??
                IconShield;

              return (
                <div
                  key={service}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[12px]
                    text-[#383D47]
                  "
                >
                  <ServiceIcon
                    className="
                      h-5
                      w-5
                      text-[#778A65]
                    "
                  />

                  {service}
                </div>
              );
            }
          )}
        </div>

        <div
          className="
            mt-7
            w-full
            rounded-lg
            border
            border-[#E0E0D4]
            bg-[#FAF9F4]
            p-5
          "
        >
          <div
            className="
              flex
              items-start
              gap-4
            "
          >
            <IconDisclaimer
              className="
                h-10
                w-10
                shrink-0
                text-[#224B06]
              "
            />

            <div>
              <p
                className="
                  text-[12px]
                  font-[800]
                  uppercase
                  text-[#2B4A10]
                "
              >
                {
                  c.disclaimerTitle
                }
              </p>

              <p
                className="
                  mt-2
                  text-[11px]
                  leading-[1.6]
                  text-[#30343E]
                "
              >
                {
                  c.disclaimerText
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
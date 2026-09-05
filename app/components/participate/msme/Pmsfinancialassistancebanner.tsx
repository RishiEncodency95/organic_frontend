import type { FC } from "react";
import Image from "next/image";
import {
  Handshake,
  Target,
  ChevronRight,
} from "lucide-react";
import financialImg from "@/app/assets/participate/msme/financial_assitance.png";
import howMuchImg from "@/app/assets/participate/msme/how_much_support.png";
import supportRightTop from "@/app/assets/participate/msme/support_right_top.png";
import supportRight from "@/app/assets/participate/msme/support_right.png";
import secureImg from "@/app/assets/participate/msme/secure.png";
import moneyInHandImg from "@/app/assets/participate/msme/money_in_hand.png";
import percent from "@/app/assets/participate/msme/percent.png";
import eligibile from "@/app/assets/participate/msme/eligible.png";
import additionalSupport from "@/app/assets/participate/msme/addition_support.png";
import governmentmsme from "@/app/assets/participate/msme/government_msme.png";
import provisioning from "@/app/assets/participate/msme/provisioning.png";
import graph from "@/app/assets/participate/msme/graph.png";
/**
 * PMSFinancialAssistanceBanner
 * ------------------------------------------------------------------
 * Promotional banner: "How Much Support May You Get?" — PMS Scheme
 * financial assistance for eligible MSEs.
 *
 * NOTE: The left hero photograph and the bottom-right plant photograph
 * are intentionally left as placeholder containers (bg-hero-photo /
 * bg-plant-photo). Wire your own background image / next/image there —
 * no image asset is hardcoded in this component.
 * ------------------------------------------------------------------
 */

interface SupportCard {
  icon: any;
  iconBg: string;
  iconColor: string;
  cardBg: string;
  eyebrow: string;
  eyebrowColor: string;
  value: React.ReactNode;
  title: string;
  titleColor: string;
  description: string;
  footIcon: any;
  footIconColor: string;
  footIconBg: string;
  borderColor: string;
}

const SUPPORT_CARDS: SupportCard[] = [
  {
    icon: percent,
    iconBg: "bg-[#1b5e20]",
    iconColor: "text-[#1b5e20]",
    cardBg: "bg-[#1b5e20]/5",
    eyebrow: "UP TO",
    eyebrowColor: "text-[#1b5e20]",
    value: <>80%<sup>*</sup></>,
    title: "General MSEs",
    titleColor: "text-[#1b5e20]",
    description:
      "Of eligible built-up space rent assistance subject to PMS provisions.",
    footIcon: governmentmsme,
    footIconColor: "text-white",
    footIconBg: "bg-[#1b5e20]/10",
    borderColor: "#1b5e20",
  },
  {
    icon: eligibile,
    iconBg: "bg-[#cd9000]",
    iconColor: "text-[#cd9000]",
    cardBg: "bg-[#cd9000]/5",
    eyebrow: "UP TO",
    eyebrowColor: "text-[#cd9000]",
    value: <>100%<sup>*</sup></>,
    title: "Women / SC / ST & Applicable Eligible Categories",
    titleColor: "text-[#cd9000]",
    description: "As per applicable PMS scheme provisions and conditions.",
    footIcon: provisioning,
    footIconColor: "text-white",
    footIconBg: "bg-[#cd9000]/10",
    borderColor: "#cd9000",
  },
  {
    icon: additionalSupport,
    iconBg: "bg-[#1b5e20]",
    iconColor: "text-[#1b5e20]",
    cardBg: "bg-[#1b5e20]/5",
    eyebrow: "ADDITIONAL",
    eyebrowColor: "text-[#1b5e20]",
    value: <>SUPPORT<sup>*</sup></>,
    title: "Eligible Expenses",
    titleColor: "text-[#1b5e20]",
    description: "Other eligible expenses as applicable under current PMS guidelines.",
    footIcon: graph,
    footIconColor: "text-white",
    footIconBg: "bg-[#1b5e20]/10",
    borderColor: "#1b5e20",
  },
];

const PMSFinancialAssistanceBanner: FC = () => {
  return (
    <>
      <section
        aria-labelledby="pms-banner-heading"
        className="relative w-full overflow-hidden bg-white pb-4"
      >
        {/* Top-right absolute image */}
        <img
          src={supportRightTop.src}
          alt=""
          className="absolute right-0 top-0 hidden h-32 w-auto object-contain opacity-20 md:block"
        />

        {/* Left absolute image at section left-0 */}
        <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-[35%] overflow-hidden lg:block">
          <img
            src={howMuchImg.src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Right-side gradient */}
          <div className="absolute -right-1 top-0 h-full w-[10%] bg-gradient-to-r from-transparent to-white" />
        </div>

        {/* ============ Hero ============ */}
        <div className="relative mx-auto w-full px-4 md:px-11">

          <div className="relative flex flex-col lg:flex-row">
            {/* Left: spacer for absolute image */}
            <div className="relative w-full lg:w-[34%]">
              <div className="relative h-[220px] w-full sm:h-[260px] lg:h-full" />
            </div>

            {/* Right: heading content */}
            <div className="relative flex w-full flex-col px-4 py-4 sm:px-4 sm:py-5 lg:w-[72%] lg:py-5">
              {/* Eyebrow */}
              <div className="mb-2 flex items-center gap-3 sm:mb-3 md:pl-30">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]/10 sm:h-20 sm:w-20">
                  <Image src={moneyInHandImg} alt="Financial Assistance" className="h-12 w-12 object-contain sm:h-16 sm:w-16" />
                </span>
                <div>
                  <p className="text-lg font-semibold uppercase tracking-wide text-[#1b5e20] sm:text-xl">
                    Financial Assistance
                  </p>
                  <p className="text-base text-slate-700 sm:text-lg">
                    For Eligible MSEs
                  </p>
                </div>
              </div>
                {/* Heading with image next to "May You Get?" */}
                <h1
                  id="pms-banner-heading"
                  className="md:pl-0 max-w-3xl text-center text-[44px] font-semibold leading-[1.08] tracking-tight sm:text-[52px] md:text-[60px]"
                >
                  <span className="block text-[#1b5e20]">How Much Support</span>
                  <span className="relative inline-flex items-center gap-3 text-slate-900">
                    May You Get?
                    <img
                      src={supportRight.src}
                      alt=""
                      className="hidden h-8 w-auto object-contain opacity-40 sm:h-10 md:h-10 md:inline"
                    />
                  </span>
                </h1>
              <div className="md:pl-12">

                {/* Supporting copy */}
                <p className="mt-3 max-w-3xl text-[16px] leading-relaxed md:text-[18px] text-center">
                  The <strong className="font-semibold text-[#1b5e20]">PMS Scheme</strong>{" "}
                  provides financial assistance<br /> to reduce your participation cost
                  and help your business grow in new markets.
                </p>
              </div>
              {/* Support cards */}
              <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:mt-3 lg:grid-cols-3">
                {SUPPORT_CARDS.map((card) => (
                    <article
                      key={card.title}
                      className={`relative flex flex-col items-center rounded-2xl bg-white px-4 pb-10 pt-4 text-center shadow-lg ring-1 ring-black/5 overflow-visible`}
                    >
                      <img
                        src={card.icon.src}
                        alt=""
                        aria-hidden="true"
                        className="mb-2 h-[70px] w-[70px] object-contain"
                      />

                      <p
                        className={`text-base font-semibold uppercase tracking-wide ${card.eyebrowColor}`}
                      >
                        {card.eyebrow}
                      </p>
                      <p
                        className={`text-2xl font-semibold leading-tight sm:text-4xl ${card.titleColor}`}
                      >
                        {card.value}
                      </p>

                      <div className="my-1.5 flex w-full items-start justify-start" aria-hidden="true">
                        <span className={`h-[1.5px] flex-1 ${card.iconBg}`} />
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
                          <path d="M1 1L7 7L13 1" stroke={card.borderColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={`h-[1.5px] flex-1 ${card.iconBg}`} />
                      </div>

                      <h3 className={`text-base font-semibold leading-snug ${card.titleColor}`}>
                        {card.title}
                      </h3>
                      <p className="mt-1.5 mb-5 text-sm leading-relaxed">
                        {card.description}
                      </p>

                      {/* Bottom icon with background */}
                      <div className={`absolute bottom-0 left-0 right-0 h-7 rounded-b-2xl ${card.footIconBg}`}>
                        <span className={`absolute left-1/2 -top-7 flex h-[44px] w-[44px] -translate-x-1/2 items-center justify-center rounded-full ${card.footIconBg} z-0`}>
                          <img
                            src={card.footIcon.src}
                            alt=""
                            aria-hidden="true"
                            className="h-8 w-8 object-contain"
                          />
                        </span>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Footer strip (outside section so left image doesn't overlap) ============ */}
      <div className="relative px-4 pb-8 pt-2 md:px-11">
        <div className="relative overflow-visible rounded-2xl bg-white shadow-lg">
          {/* Background image - full width */}
          <div className="pointer-events-none absolute inset-0">
            <img
              src={financialImg.src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top rounded-2xl"
            />
          </div>

          <div className="relative flex flex-col gap-4 px-3 py-4 sm:px-4 sm:py-5 md:gap-6 md:px-5 md:py-6 border border-[#1b5e20]/20 rounded-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-16 ">
              {/* Important note */}
              <div className="flex w-full items-start gap-3 md:w-[38%] border-r border-dotted border-[#1b5e20] pr-3 md:pr-4">
                <img
                  src={secureImg.src}
                  alt=""
                  className="h-20 w-20 shrink-0 object-contain"
                />
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm pr-4 md:pr-8">
                  <strong className="font-semibold text-slate-900">
                    *Important Note:<br />
                  </strong>{" "}
                  Assistance is subject to applicable PMS guidelines,
                  prescribed financial limits, enterprise category, approved
                  event/component, documentation and final sanction.
                </p>
              </div>

              {/* Government support */}
              <div className="flex w-full items-center gap-3 md:w-[25%]">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]/10">
                  <Handshake className="h-12 w-12 text-[#1b5e20]" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-slate-900 ml-4">
                  Government Support.
                  <br />
                  Stronger Business.
                  <br />
                  <span className="font-semibold text-[#1b5e20]">
                    Sustainable Growth.
                  </span>
                </p>
              </div>
            </div>

            {/* CTA button - half inside half outside */}
            <div className="absolute left-1/2 bottom-0 z-10 -translate-x-1/2 translate-y-1/2">
              <a
                href="#eligibility"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#1b5e20] px-4 py-2 text-[14px] font-semibold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#2d7a2d]"
              >
                <Target className="h-4 w-4" aria-hidden="true" />
                Check My Eligibility
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PMSFinancialAssistanceBanner;
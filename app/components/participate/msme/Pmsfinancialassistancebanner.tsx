import type { FC } from "react";
import {
  HandCoins,
  Percent,
  Users,
  ReceiptIndianRupee,
  Landmark,
  HandHelping,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Leaf,
  Target,
  ChevronRight,
} from "lucide-react";
import financialImg from "@/app/assets/participate/msme/financial_assitance.png";
import howMuchImg from "@/app/assets/participate/msme/how_much_support.png";
import supportRightTop from "@/app/assets/participate/msme/support_right_top.png";
import supportRight from "@/app/assets/participate/msme/support_right.png";
import secureImg from "@/app/assets/participate/msme/secure.png";

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
  icon: FC<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  cardBg: string;
  eyebrow: string;
  eyebrowColor: string;
  value: string;
  title: string;
  titleColor: string;
  description: string;
  footIcon: FC<{ className?: string }>;
  footIconColor: string;
  footIconBg: string;
  borderColor: string;
}

const SUPPORT_CARDS: SupportCard[] = [
  {
    icon: Percent,
    iconBg: "bg-[#1b5e20]/10",
    iconColor: "text-[#1b5e20]",
    cardBg: "bg-[#1b5e20]/5",
    eyebrow: "UP TO",
    eyebrowColor: "text-[#1b5e20]",
    value: "80%*",
    title: "General MSEs",
    titleColor: "text-[#1b5e20]",
    description:
      "Of eligible built-up space rent assistance subject to PMS provisions.",
    footIcon: Landmark,
    footIconColor: "text-white",
    footIconBg: "bg-[#1b5e20]",
    borderColor: "#1b5e20",
  },
  {
    icon: Users,
    iconBg: "bg-[#C99A3B]/10",
    iconColor: "text-[#C99A3B]",
    cardBg: "bg-[#C99A3B]/5",
    eyebrow: "UP TO",
    eyebrowColor: "text-[#C99A3B]",
    value: "100%*",
    title: "Women / SC / ST & Applicable Eligible Categories",
    titleColor: "text-[#C99A3B]",
    description: "As per applicable PMS scheme provisions and conditions.",
    footIcon: HandHelping,
    footIconColor: "text-white",
    footIconBg: "bg-[#C99A3B]",
    borderColor: "#C99A3B",
  },
  {
    icon: ReceiptIndianRupee,
    iconBg: "bg-[#1b5e20]/10",
    iconColor: "text-[#1b5e20]",
    cardBg: "bg-[#1b5e20]/5",
    eyebrow: "ADDITIONAL",
    eyebrowColor: "text-[#1b5e20]",
    value: "SUPPORT*",
    title: "Eligible Expenses",
    titleColor: "text-[#1b5e20]",
    description: "Other eligible expenses as applicable under current PMS guidelines.",
    footIcon: TrendingUp,
    footIconColor: "text-white",
    footIconBg: "bg-[#1b5e20]",
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
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-[28%] overflow-hidden lg:block">
        <img
          src={howMuchImg.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Right-side gradient */}
        <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-r from-transparent to-white" />
      </div>

      {/* ============ Hero ============ */}
      <div className="relative mx-auto w-full px-4 md:px-11">

        <div className="relative flex flex-col lg:flex-row">
          {/* Left: spacer for absolute image */}
          <div className="relative w-full lg:w-[28%]">
            <div className="relative h-[220px] w-full sm:h-[260px] lg:h-full" />
          </div>

          {/* Right: heading content */}
          <div className="relative flex w-full flex-col justify-center px-4 py-4 sm:px-6 sm:py-5 lg:w-[72%] lg:px-8 lg:py-5">
            {/* Eyebrow */}
            <div className="mb-2 flex items-center gap-3 sm:mb-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]/10 sm:h-12 sm:w-12">
                <HandCoins className="h-5 w-5 text-[#1b5e20] sm:h-6 sm:w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#1b5e20] sm:text-base">
                  Financial Assistance
                </p>
                <p className="text-xs text-slate-700 sm:text-sm">
                  For Eligible MSEs
                </p>
              </div>
            </div>

            {/* Heading with image next to "May You Get?" */}
            <h1
              id="pms-banner-heading"
              className="max-w-lg text-center text-[28px] font-semibold leading-[1.08] tracking-tight sm:text-[32px]"
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

            {/* Supporting copy */}
            <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-slate-700 md:text-[14px] text-center">
              The <strong className="font-semibold text-[#1b5e20]">PMS Scheme</strong>{" "}
              provides financial assistance<br/> to reduce your participation cost
              and help your business grow in new markets.
            </p>

            {/* Support cards */}
            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:mt-3 lg:grid-cols-3">
              {SUPPORT_CARDS.map((card) => {
                const Icon = card.icon;
                const FootIcon = card.footIcon;
                return (
                  <article
                    key={card.title}
                    className={`relative flex flex-col items-center rounded-2xl ${card.cardBg} px-4 pb-10 pt-4 text-center shadow-sm ring-1 ring-black/5 overflow-visible`}
                  >
                    <span
                      className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${card.iconBg}`}
                    >
                      <Icon className={`h-6 w-6 ${card.iconColor}`} aria-hidden="true" />
                    </span>

                    <p
                      className={`text-xs font-semibold uppercase tracking-wide ${card.eyebrowColor}`}
                    >
                      {card.eyebrow}
                    </p>
                    <p
                      className={`text-2xl font-semibold leading-tight sm:text-[1.75rem] ${card.titleColor}`}
                    >
                      {card.value}
                    </p>

                    <div className="my-1.5 flex w-full items-start justify-start" aria-hidden="true">
                      <span className={`h-[2px] flex-1 ${card.iconBg}`} />
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="shrink-0">
                        <path d="M1 1L7 7L13 1" stroke={card.borderColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={`h-[2px] flex-1 ${card.iconBg}`} />
                    </div>

                    <h3 className={`text-sm font-semibold leading-snug ${card.titleColor}`}>
                      {card.title}
                    </h3>
                    <p className="mt-1.5 mb-5 text-xs leading-relaxed text-slate-600">
                      {card.description}
                    </p>

                    {/* Bottom border with icon on top */}
                    <div className={`absolute bottom-0 left-0 right-0 h-7 rounded-b-2xl ${card.footIconBg}`}>
                      <span className={`absolute left-1/2 -top-9 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full ${card.footIconBg} z-0`}>
                        <FootIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </article>
                );
              })}
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

        <div className="relative flex flex-col gap-4 px-3 py-4 sm:px-4 sm:py-5 md:gap-6 md:px-5 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 ">
            {/* Important note */}
            <div className="flex w-full items-start gap-3 md:w-[38%] border-r pr-3 md:pr-4">
              <img
                src={secureImg.src}
                alt=""
                className="h-10 w-10 shrink-0 object-contain"
              />
              <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                <strong className="font-semibold text-slate-900">
                  *Important Note:<br/>
                </strong>{" "}
                Assistance is subject to applicable PMS guidelines,
                prescribed financial limits, enterprise category, approved
                event/component, documentation and final sanction.
              </p>
            </div>

            {/* Government support */}
            <div className="flex w-full items-center gap-3 md:w-[25%]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]/10">
                <Handshake className="h-5 w-5 text-[#1b5e20]" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-snug text-slate-900">
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
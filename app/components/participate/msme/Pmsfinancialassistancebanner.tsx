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
import Link from "next/link";

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
  eyebrow: string;
  eyebrowColor: string;
  value: string;
  title: string;
  titleColor: string;
  description: string;
  footIcon: FC<{ className?: string }>;
  footIconColor: string;
  footIconBg: string;
}

const SUPPORT_CARDS: SupportCard[] = [
  {
    icon: Percent,
    iconBg: "bg-[#1b5e20]",
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
  },
  {
    icon: Users,
    iconBg: "bg-[#C99A3B]",
    eyebrow: "UP TO",
    eyebrowColor: "text-[#C99A3B]",
    value: "100%*",
    title: "Women / SC / ST & Applicable Eligible Categories",
    titleColor: "text-[#C99A3B]",
    description: "As per applicable PMS scheme provisions and conditions.",
    footIcon: HandHelping,
    footIconColor: "text-white",
    footIconBg: "bg-[#C99A3B]",
  },
  {
    icon: ReceiptIndianRupee,
    iconBg: "bg-[#1b5e20]",
    eyebrow: "ADDITIONAL",
    eyebrowColor: "text-[#1b5e20]",
    value: "SUPPORT*",
    title: "Eligible Expenses",
    titleColor: "text-[#1b5e20]",
    description: "Other eligible expenses as applicable under current PMS guidelines.",
    footIcon: TrendingUp,
    footIconColor: "text-white",
    footIconBg: "bg-[#1b5e20]",
  },
];

const PMSFinancialAssistanceBanner: FC = () => {
  return (
    <section
      aria-labelledby="pms-banner-heading"
      className="relative w-full overflow-hidden border-y-4 border-[#1b5e20] bg-[#EFF7EE]"
    >
      {/* ============ Hero ============ */}
      <div className="mx-auto w-full px-4 md:px-14">
      <div className="relative flex flex-col lg:flex-row">
        {/* Left: hero photo + empowering badge */}
        <div
          className="relative min-h-[280px] w-full sm:min-h-[360px] lg:min-h-0 lg:w-[36%]"
        >
          <img
            src={howMuchImg.src}
            alt="Financial assistance for MSEs"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Gradient overlay for badge legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

          {/* Empowering MSEs badge */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-[#1b5e20] px-5 py-4 sm:gap-4 sm:px-8 sm:py-5">
            <p className="text-sm leading-snug text-white sm:text-base md:text-lg">
              <span className="block font-semibold">Empowering MSEs</span>
              <span className="block font-semibold text-[#3b8c2a]">
                for a stronger tomorrow
              </span>
            </p>
          </div>
        </div>

        {/* Right: heading content */}
        <div className="relative flex w-full flex-col justify-center px-4 py-6 sm:px-6 sm:py-6 lg:w-[64%] lg:px-6 lg:py-6">
          {/* Eyebrow */}
          <div className="mb-2 flex items-center gap-3 sm:mb-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]/10 sm:h-14 sm:w-14">
              <HandCoins className="h-6 w-6 text-[#1b5e20] sm:h-7 sm:w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-base font-semibold uppercase tracking-wide text-[#1b5e20] sm:text-lg">
                Financial Assistance
              </p>
              <p className="text-sm text-slate-700 sm:text-base">
                For Eligible MSEs
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1
            id="pms-banner-heading"
            className="text-[32px] font-semibold leading-[1.08] tracking-tight"
          >
            <span className="block text-[#1b5e20]">How Much Support</span>
            <span className="relative inline-block text-slate-900">
              May You Get?
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-700 md:text-[15px]">
            The <strong className="font-semibold text-[#1b5e20]">PMS Scheme</strong>{" "}
            provides financial assistance to reduce your participation cost
            and help your business grow in new markets.
          </p>

          {/* Support cards */}
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-4 lg:grid-cols-3">
            {SUPPORT_CARDS.map((card) => {
              const Icon = card.icon;
              const FootIcon = card.footIcon;
              return (
                <article
                  key={card.title}
                  className="relative flex flex-col items-center rounded-2xl bg-white px-4 pb-12 pt-5 text-center shadow-sm ring-1 ring-black/5 overflow-visible"
                >
                  <span
                    className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${card.iconBg}`}
                  >
                    <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </span>

                  <p
                    className={`text-sm font-semibold uppercase tracking-wide ${card.eyebrowColor}`}
                  >
                    {card.eyebrow}
                  </p>
                  <p
                    className={`text-3xl font-semibold leading-tight sm:text-[2rem] ${card.titleColor}`}
                  >
                    {card.value}
                  </p>

                  <span className="my-2 h-px w-16 bg-[#1b5e20]/20" aria-hidden="true" />

                  <h3 className={`text-base font-semibold leading-snug ${card.titleColor}`}>
                    {card.title}
                  </h3>
                  <p className="mt-2 mb-6 text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>

                  {/* Bottom border with icon on top */}
                  <div className={`absolute bottom-0 left-0 right-0 h-8 rounded-b-2xl ${card.footIconBg}`}>
                    <span className={`absolute left-1/2 -top-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full ${card.footIconBg} z-0`}>
                      <FootIcon
                        className="h-7 w-7 text-white"
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

      {/* ============ Footer strip ============ */}
      <div className="relative px-4 pb-6 pt-2 md:px-14">
        <div className="relative overflow-hidden rounded-2xl bg-[#EFF7EE] shadow-lg">
          <div className="flex flex-col items-center gap-4 px-3 py-4 sm:px-4 sm:py-5 md:flex-row md:items-center md:gap-6 md:pl-4 md:py-4 md:pr-[220px]">
            {/* Important note */}
            <div className="flex w-full items-start gap-3 md:w-[38%]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
                <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                <strong className="font-semibold text-slate-900">
                  *Important Note:
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

            {/* CTA button */}
            <div className="relative z-10 flex w-full shrink-0 justify-start md:w-auto">
                      <Link
            href="/participate/msme/eligibility-check"
            target="_blank"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#1b5e20] px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#2d7a2d] sm:text-[14px]"
              >
                <Target className="h-3.5 w-3.5" aria-hidden="true" />
                Check My Eligibility
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Plant photo */}
            <div className="absolute top-0 bottom-0 right-0 hidden overflow-hidden rounded-r-2xl md:block">
              <img
                src={financialImg.src}
                alt="Government support for sustainable business growth"
                className="h-full w-40 object-cover sm:w-52"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PMSFinancialAssistanceBanner;
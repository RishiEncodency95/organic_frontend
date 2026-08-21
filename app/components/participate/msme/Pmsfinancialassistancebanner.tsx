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
    iconBg: "bg-[#0B5D34]",
    eyebrow: "UP TO",
    eyebrowColor: "text-[#0B5D34]",
    value: "80%*",
    title: "General MSEs",
    titleColor: "text-[#0B5D34]",
    description:
      "Of eligible built-up space rent assistance subject to PMS provisions.",
    footIcon: Landmark,
    footIconColor: "text-[#0B5D34]",
    footIconBg: "bg-[#0B5D34]/10",
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
    footIconColor: "text-[#C99A3B]",
    footIconBg: "bg-[#C99A3B]/10",
  },
  {
    icon: ReceiptIndianRupee,
    iconBg: "bg-[#0B5D34]",
    eyebrow: "ADDITIONAL",
    eyebrowColor: "text-[#0B5D34]",
    value: "SUPPORT*",
    title: "Eligible Expenses",
    titleColor: "text-[#0B5D34]",
    description: "Other eligible expenses as applicable under current PMS guidelines.",
    footIcon: TrendingUp,
    footIconColor: "text-[#0B5D34]",
    footIconBg: "bg-[#0B5D34]/10",
  },
];

const PMSFinancialAssistanceBanner: FC = () => {
  return (
    <section
      aria-labelledby="pms-banner-heading"
      className="relative w-full overflow-hidden border-y-4 border-[#0B5D34] bg-[#FAF8F2]"
    >
      {/* ============ Hero ============ */}
      <div className="mx-auto w-full px-4 md:px-11">
      <div className="relative flex flex-col lg:flex-row">
        {/* Left: hero photo + empowering badge */}
        <div
          className="relative min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[560px] lg:w-[36%]"
        >
          <img
            src={howMuchImg.src}
            alt="Financial assistance for MSEs"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Gradient overlay for badge legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          {/* Left side blur fade */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAF8F2] via-[#FAF8F2]/60 to-transparent" />

          {/* Empowering MSEs badge */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-[#0B5D34] px-5 py-4 sm:gap-4 sm:px-8 sm:py-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#C99A3B] bg-white sm:h-14 sm:w-14">
              <Leaf className="h-5 w-5 text-[#0B5D34] sm:h-6 sm:w-6" aria-hidden="true" />
            </span>
            <p className="text-sm leading-snug text-white sm:text-base md:text-lg">
              <span className="block font-semibold">Empowering MSEs</span>
              <span className="block font-semibold text-[#8FD19E]">
                for a stronger tomorrow
              </span>
            </p>
          </div>
        </div>

        {/* Right: heading content */}
        <div className="relative flex w-full flex-col justify-center px-4 py-6 sm:px-6 sm:py-6 lg:w-[64%] lg:px-10 lg:py-6">
          {/* Decorative watermark leaves, top-right */}
          <Leaf
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 top-2 hidden h-40 w-40 rotate-[20deg] text-[#0B5D34] sm:block lg:h-56 lg:w-56"
          />

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B5D34]/10 sm:h-14 sm:w-14">
              <HandCoins className="h-6 w-6 text-[#0B5D34] sm:h-7 sm:w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="text-base font-semibold uppercase tracking-wide text-[#0B5D34] sm:text-lg">
                Financial Assistance
              </p>
              <p className="text-sm text-[#1E293B] sm:text-base">
                For Eligible MSEs
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1
            id="pms-banner-heading"
            className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3rem]"
          >
            <span className="block text-[#0B5D34]">How Much Support</span>
            <span className="relative inline-block text-[#152238]">
              May You Get?
              <Leaf
                aria-hidden="true"
                className="ml-2 inline-block h-8 w-8 -translate-y-2 rotate-[15deg] fill-[#8FD19E] text-[#0B5D34] sm:h-9 sm:w-9 md:h-10 md:w-10"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-0 h-3 w-40 text-[#0B5D34] sm:w-52 md:w-60"
                fill="none"
              >
                <path
                  d="M2 10.5C40 2 90 2 110 7.5C130 13 180 4 218 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#334155] sm:text-lg">
            The <strong className="font-semibold text-[#0B5D34]">PMS Scheme</strong>{" "}
            provides financial assistance to reduce your participation cost
            and help your business grow in new markets.
          </p>

          {/* Support cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-3">
            {SUPPORT_CARDS.map((card) => {
              const Icon = card.icon;
              const FootIcon = card.footIcon;
              return (
                <article
                  key={card.title}
                  className="relative flex flex-col items-center rounded-2xl bg-white px-5 pb-12 pt-7 text-center shadow-[0_10px_30px_-12px_rgba(15,45,30,0.18)]"
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

                  <span className="my-3 h-px w-16 bg-[#0B5D34]/20" aria-hidden="true" />

                  <h3 className={`text-base font-semibold leading-snug ${card.titleColor}`}>
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    {card.description}
                  </p>

                  {/* Bottom border area with absolute icon */}
                  <div className="absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center border-t border-[#0B5D34]/10">
                    <span className={`absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full ${card.footIconBg}`}>
                      <FootIcon
                        className={`h-5 w-5 ${card.footIconColor}`}
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
      <div className="relative px-4 pb-6 pt-2 md:px-11">
        <div className="overflow-hidden rounded-2xl bg-[#F1EEE3]">
          <div className="flex flex-col items-center gap-4 px-4 py-5 sm:px-6 sm:py-6 md:flex-row md:items-center md:gap-6 md:px-6 md:py-5">
            {/* Important note */}
            <div className="flex w-full items-start gap-3 md:w-[38%]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B5D34]">
                <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <p className="text-xs leading-relaxed text-[#334155] sm:text-sm">
                <strong className="font-semibold text-[#152238]">
                  *Important Note:
                </strong>{" "}
                Assistance is subject to applicable PMS guidelines,
                prescribed financial limits, enterprise category, approved
                event/component, documentation and final sanction.
              </p>
            </div>

            {/* Government support */}
            <div className="flex w-full items-center gap-3 md:w-[25%]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B5D34]/10">
                <Handshake className="h-5 w-5 text-[#0B5D34]" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-snug text-[#152238]">
                Government Support.
                <br />
                Stronger Business.
                <br />
                <span className="font-semibold text-[#0B5D34]">
                  Sustainable Growth.
                </span>
              </p>
            </div>

            {/* CTA button */}
            <div className="flex w-full shrink-0 justify-center md:w-auto">
              <a
                href="#eligibility"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#0B5D34] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#0A4E2C] sm:text-sm"
              >
                <Target className="h-3.5 w-3.5" aria-hidden="true" />
                Check My Eligibility
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Plant photo */}
            <div className="w-full shrink-0 overflow-hidden rounded-xl md:ml-auto md:w-auto md:flex-shrink-0">
              <img
                src={financialImg.src}
                alt="Government support for sustainable business growth"
                className="h-20 w-28 object-cover sm:h-24 sm:w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PMSFinancialAssistanceBanner;
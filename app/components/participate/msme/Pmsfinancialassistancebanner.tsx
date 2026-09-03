import type { FC } from "react";
import {
  HandCoins,
  Percent,
  Users,
  ReceiptIndianRupee,
  Landmark,
  HandHelping,
  TrendingUp,
  Handshake,
  Target,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import SectionContainer from "@/app/components/layout/SectionContainer";

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
    footIconBg: "bg-[#1b5e20]",
  },
];

const PMSFinancialAssistanceBanner: FC = () => {
  return (
    <>
      {/* ============ Section 1: How Much Support May You Get ============ */}
      <section
        aria-labelledby="pms-banner-heading"
        className="relative w-full overflow-hidden bg-white"
      >
        <SectionContainer>
          <div className="relative mx-auto w-full py-8 md:py-10">
            {/* Eyebrow */}
            <div className="mb-2 flex items-center justify-center gap-3">
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

            {/* Heading */}
            <h1
              id="pms-banner-heading"
              className="text-center text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.1] tracking-tight"
            >
              <span className="block text-[#1b5e20]">How Much Support</span>
              <span className="text-slate-900">May You Get?</span>
            </h1>

            {/* Supporting copy */}
            <p className="mt-3 max-w-xl mx-auto text-center text-[14px] sm:text-[16px] leading-relaxed text-slate-700">
              The <strong className="font-semibold text-[#1b5e20]">PMS Scheme</strong>{" "}
              provides financial assistance to reduce your participation cost
              and help your business grow in new markets.
            </p>

            {/* Support cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {SUPPORT_CARDS.map((card) => {
                const Icon = card.icon;
                const FootIcon = card.footIcon;
                return (
                  <article
                    key={card.title}
                    className="relative flex flex-col items-center rounded-2xl bg-white px-4 pb-10 pt-4 text-center shadow-sm ring-1 ring-black/5 overflow-visible"
                  >
                    <span
                      className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full ${card.iconBg}`}
                    >
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
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

                    <span className="my-1.5 h-px w-14 bg-[#1b5e20]/20" aria-hidden="true" />

                    <h3 className={`text-sm font-semibold leading-snug ${card.titleColor}`}>
                      {card.title}
                    </h3>
                    <p className="mt-1.5 mb-5 text-xs leading-relaxed text-slate-600">
                      {card.description}
                    </p>

                    {/* Bottom border with icon on top */}
                    <div className={`absolute bottom-0 left-0 right-0 h-7 rounded-b-2xl ${card.footIconBg}`}>
                      <span className={`absolute left-1/2 -top-8 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full ${card.footIconBg} z-0`}>
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
        </SectionContainer>
      </section>

      {/* ============ Section 2: Important Note + CTA ============ */}
      <section className="relative w-full bg-white pt-2 pb-6">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#f0f7f0] to-[#e8f5e9] border border-[#1b5e20]/10">
            <div className="relative flex flex-col items-center gap-3 px-4 py-5 sm:px-6 sm:py-6 md:flex-row md:items-center md:gap-6 md:pl-6 md:py-5 md:pr-6">
              {/* Important note */}
              <div className="flex w-full items-start gap-3 md:w-[40%] border-b md:border-b-0 md:border-r-2 border-[#1b5e20]/20 pb-3 md:pb-0 md:pr-4">
                <ShieldCheck className="h-8 w-8 shrink-0 text-[#1b5e20]" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-slate-700">
                  <strong className="font-semibold text-slate-900">
                    *Important Note:
                  </strong>{" "}
                  Assistance is subject to applicable PMS guidelines,
                  prescribed financial limits, enterprise category, approved
                  event/component, documentation and final sanction.
                </p>
              </div>

              {/* Government support */}
              <div className="flex w-full items-center gap-3 md:w-[30%]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]/10">
                  <Handshake className="h-4 w-4 text-[#1b5e20]" aria-hidden="true" />
                </span>
                <p className="text-xs font-semibold leading-snug text-slate-900">
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
          </div>

          {/* CTA button */}
          <div className="flex justify-center mt-4">
            <Link
              href="/participate/msme/eligibility-check"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1b5e20] px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-[#2d7a2d]"
            >
              <Target className="h-4 w-4" aria-hidden="true" />
              Check My Eligibility
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </SectionContainer>
      </section>
    </>
  );
};

export default PMSFinancialAssistanceBanner;

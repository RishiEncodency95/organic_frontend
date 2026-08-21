import { Calendar, Leaf, ArrowRight } from "lucide-react";
import whyParticipateBg from "@/app/assets/participate/msme/why_participate_bg.jpeg";
import pmsApprovedIcon from "@/app/assets/participate/msme/pms_approved.jpg";
import focusedIndustryIcon from "@/app/assets/participate/msme/focused_industry.jpg";
import b2bOpportunitiesIcon from "@/app/assets/participate/msme/b2b_opporttunities.jpg";
import dedicatedSupportIcon from "@/app/assets/participate/msme/dedicated.jpg";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: pmsApprovedIcon.src,
    title: "PMS Approved Event*",
    description:
      "Opportunity for eligible MSEs to explore applicable PMS assistance.",
  },
  {
    icon: focusedIndustryIcon.src,
    title: "Focused Industry Platform",
    description:
      "Organic • Food • Nutrition • AYUSH • Herbal • Wellness • Agriculture • GreenTech",
  },
  {
    icon: b2bOpportunitiesIcon.src,
    title: "B2B Opportunities",
    description:
      "Connect with buyers, distributors and industry professionals.",
  },
  {
    icon: dedicatedSupportIcon.src,
    title: "Dedicated PMS Support",
    description: "Guidance before, during and after exhibition participation.",
  },
];

export default function WhyParticipateSection() {
  return (
    <section
      aria-labelledby="why-participate-heading"
      className="relative w-full overflow-hidden px-4 py-6 md:px-11"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={whyParticipateBg.src}
          alt=""
          className="h-full w-full object-cover pointer-events-none"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-col items-center">
        {/* Sub-eyebrow */}
        <div className="mt-2 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-emerald-700 sm:text-sm">
          <span className="h-px w-8 bg-emerald-600 sm:w-10" aria-hidden="true" />
          <span>WHY PARTICIPATE</span>
          <span className="h-px w-8 bg-emerald-600 sm:w-10" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="why-participate-heading"
          className="mt-2 max-w-4xl text-balance text-center text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-4xl"
        >
          More Than an{" "}
          <span className="relative inline-block text-emerald-700">
            Exhibition
            <svg
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-2.5 w-full text-emerald-600"
            >
              <path
                d="M2 8 C 40 2, 160 2, 198 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Opportunity
        </h2>

        {/* Cards */}
        <ul className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="relative flex flex-col items-center overflow-visible rounded-2xl border border-emerald-200 bg-white pt-14 pb-8 text-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[rgba(0,0,0,0.3)_0px_5px_12px]"
            >
              {/* Icon container - half outside, half inside */}
              <div className="absolute -top-10 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 items-center justify-center overflow-hidden">
                <img src={feature.icon} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-center px-5 pt-6 pb-2">
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {feature.title}
                </h3>
                <span
                  className="my-2 h-0.5 w-8 rounded-full bg-emerald-600"
                  aria-hidden="true"
                />
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {feature.description}
                </p>
              </div>
              <span
                className="absolute bottom-0 left-0 right-0 h-3 rounded-b-2xl bg-gradient-to-r from-emerald-700 to-emerald-500"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#book-stand"
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-800 to-emerald-700 px-12 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-emerald-900/20 transition-transform duration-200 hover:scale-[1.03] hover:shadow-emerald-900/30 sm:w-auto sm:text-base"
        >
          <Calendar className="h-7 w-7" aria-hidden="true" />
          BOOK YOUR STAND
          <ArrowRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
        </a>

        {/* Footnote */}
        <p className="mt-6 w-full text-left text-xs text-emerald-900 sm:text-sm">
          *Subject to approval under PMS Scheme guidelines.
        </p>
      </div>
    </section>
  );
}
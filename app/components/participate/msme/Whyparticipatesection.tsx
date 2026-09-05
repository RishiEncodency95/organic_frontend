import { Calendar, Leaf, ArrowRight } from "lucide-react";
import whyParticipateBg from "@/app/assets/participate/msme/why_participate_bg.jpeg";
import pmsApprovedIcon from "@/app/assets/participate/msme/pms_approved.png";
import focusedIndustryIcon from "@/app/assets/participate/msme/focused_industry.png";
import b2bOpportunitiesIcon from "@/app/assets/participate/msme/b2b_opporttunities.png";
import dedicatedSupportIcon from "@/app/assets/participate/msme/dedicated.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

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
      "Opportunity for eligible<br/> MSEs to explore applicable<br/> PMS assistance.",
  },
  {
    icon: focusedIndustryIcon.src,
    title: "Focused Industry Platform",
    description:
      "Organic • Food • Nutrition •<br/> AYUSH • Herbal • Wellness •<br/> Agriculture • GreenTech",
  },
  {
    icon: b2bOpportunitiesIcon.src,
    title: "B2B Opportunities",
    description:
      "Connect with buyers,<br/> distributors and industry<br/> professionals.",
  },
  {
    icon: dedicatedSupportIcon.src,
    title: "Dedicated PMS Support",
    description: "Guidance before, during<br/> and after exhibition<br/> participation.",
  },
];

export default function WhyParticipateSection() {
  return (
    <section
      aria-labelledby="why-participate-heading"
      className="relative w-full overflow-hidden bg-[#EFF7EE] py-6"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={whyParticipateBg.src}
          alt=""
          className="h-full w-full object-cover pointer-events-none"
        />
      </div>

      <SectionContainer>
      <div className="relative z-10 mx-auto flex w-full flex-col items-center">
        {/* Sub-eyebrow */}
        <div className="mt-2 flex items-center gap-3 text-[20px] font-semibold text-[#1b5e20] sm:text-[22px]">
          <span className="h-px w-8 bg-[#1b5e20] sm:w-10" aria-hidden="true" />
          <span>WHY PARTICIPATE</span>
          <span className="h-px w-8 bg-[#1b5e20] sm:w-10" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="why-participate-heading"
          className="mt-2 max-w-4xl text-balance text-center text-[24px] font-semibold leading-tight text-slate-900 md:text-[34px] lg:text-[40px]"
        >
          More Than an{" "}
          <span className="relative inline-block text-[#1b5e20]">
            Exhibition
            <svg
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-2.5 w-full text-[#3b8c2a]"
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
          className="relative flex flex-col items-center overflow-visible rounded-2xl border border-gray-100 bg-white pt-10 pb-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon container - half outside, half inside */}
              <div className="absolute -top-10 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 items-center justify-center overflow-hidden">
                <img src={feature.icon} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-center px-5 pt-2 pb-2">
                <h3 className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">
                  {feature.title}
                </h3>
                <span
                  className="my-2 h-0.5 w-8 rounded-full bg-[#3b8c2a]"
                  aria-hidden="true"
                />
                <p className="text-[13px] leading-relaxed sm:text-sm" dangerouslySetInnerHTML={{ __html: feature.description }}>
                  
                </p>
              </div>
              <span
                className="absolute bottom-0 left-0 right-0 h-3 rounded-b-2xl bg-gradient-to-r from-[#1b5e20] to-[#3b8c2a]"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#book-stand"
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1b5e20] px-12 py-3 text-[14px] font-semibold tracking-wide text-white shadow-lg transition-transform duration-200 hover:bg-[#2d7a2d] sm:w-auto sm:text-[15px]"
        >
          <Calendar className="h-7 w-7" aria-hidden="true" />
          BOOK YOUR STAND
          <ArrowRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
        </a>
      </div>
      </SectionContainer>
    </section>
  );
}
import { Calendar, Leaf, ArrowRight } from "lucide-react";
import whyParticipateBg from "@/app/assets/participate/msme/why_participate_bg.jpeg";
import pmsApprovedIcon from "@/app/assets/participate/msme/pms.png";
import focusedIndustryIcon from "@/app/assets/participate/msme/focused.png";
import b2bOpportunitiesIcon from "@/app/assets/participate/msme/b2b.png";
import dedicatedSupportIcon from "@/app/assets/participate/msme/dedicated_support.png";
import SectionContainer from "@/app/components/layout/SectionContainer";
import Image from "next/image";
import leftMsme from "@/app/assets/participate/msme/exhibition-lef.png"
import rightMsme from "@/app/assets/participate/msme/exhibition-right.png"
import bottomMsme from "@/app/assets/participate/msme/exibition-bottom.png"

export const WHY_PARTICIPATE_SECTION_DATA = {
  eyebrow: "WHY PARTICIPATE",
  heading: {
    prefix: "More Than an ",
    highlight: "Exhibition",
    suffix: " Opportunity",
  },
  features: [
    {
      icon: pmsApprovedIcon.src,
      title: "PMS Approved Event*",
      description:
        "Opportunity for eligible<br/> MSMEs to explore applicable<br/> PMS assistance.",
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
  ],
  cta: {
    label: "BOOK YOUR STAND",
    href: "/registration/book-a-stand",
  },
  footnote: "*Subject to approval under PMS Scheme Guidelines",
};

export default function WhyParticipateSection() {
  const data = WHY_PARTICIPATE_SECTION_DATA;

  return (
    <section
      aria-labelledby="why-participate-heading"
      className="relative w-full overflow-hidden bg-[#EFF7EE] pt-6 pb-10"
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
          <Image src={leftMsme} className="h-6 w-16 object-contain sm:h-8 sm:w-20" aria-hidden="true" alt="left decoration" />
          <span>{data.eyebrow}</span>
          <Image src={rightMsme} className="h-6 w-16 object-contain sm:h-8 sm:w-20" aria-hidden="true" alt="right decoration" />
        </div>

        {/* Heading */}
        <h2
          id="why-participate-heading"
          className="mt-2 text-balance text-center text-[24px] font-semibold leading-tight text-slate-900 md:text-[34px] lg:text-[50px]"
        >
          {data.heading.prefix}
          <span className="relative inline-block text-[#1b5e20]">
            {data.heading.highlight}
            <div
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-5 w-full text-[#3b8c2a]"
            >
             <Image src={bottomMsme} alt="bottom msme" fill />
            </div>
          </span>
          {data.heading.suffix}
        </h2>

        {/* Cards */}
        <ul className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.features.map((feature) => (
            <li
              key={feature.title}
          className="relative flex flex-col items-center overflow-visible rounded-2xl border border-gray-100 bg-white pt-20 pb-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon container - half outside, half inside */}
              <div className="absolute -top-10 left-1/2 z-10 flex h-30 w-30 -translate-x-1/2 items-center justify-center overflow-hidden">
                <img src={feature.icon} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-center px-5 pt-2 pb-2">
                <h3 className="text-[20px] font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <span
                  className="my-2 h-1 w-8 rounded-full bg-[#3b8c2a]"
                  aria-hidden="true"
                />
                <p className="text-[16px] leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }}>
                  
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
          href={data.cta.href}
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#3a8a3a] via-[#2a7a2a] to-[#1a5a1a] px-12 py-1.5 text-[20px] font-semibold tracking-wide text-white transition-transform duration-200 hover:from-[#4a9a4a] hover:via-[#3a8a3a] hover:to-[#2a7a2a] sm:w-auto"
          style={{ boxShadow: "0 4px 0 #0d3d0d, 0 6px 16px rgba(0,0,0,0.3)" }}
        >
          <Calendar className="h-12 w-12" aria-hidden="true" />
          {data.cta.label}
          <ArrowRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
        </a>
      </div>
      </SectionContainer>
      <p className="absolute left-4 bottom-4 text-[14px]"><sup>*</sup>{data.footnote.replace(/^\*/, '')}</p>
    </section>
  );
}
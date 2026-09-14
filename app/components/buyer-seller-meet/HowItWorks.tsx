"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import h1og from "../../assets/icons/h1og.png";
import h2og from "../../assets/icons/h2og.png";
import h3og from "../../assets/icons/h3og.png";
import h4og from "../../assets/icons/h4og.png";
import h5og from "../../assets/icons/h5og.png";
import SectionContainer from "@/app/components/layout/SectionContainer";
import { HOW_IT_WORKS_DATA } from "@/app/data/buyerSellerMeetData";

const IMG_MAP: Record<string, string> = {
  h1og: h1og.src,
  h2og: h2og.src,
  h3og: h3og.src,
  h4og: h4og.src,
  h5og: h5og.src,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-4 pb-4 bg-[#f9f9f9] font-inter text-center border-t border-gray-100 scroll-mt-28">
      <SectionContainer>
        {HOW_IT_WORKS_DATA.map((data) => (
          <React.Fragment key={data.id}>
            <div className="flex items-center justify-center mb-6 w-full">
              <div className="h-[1px] bg-gray-200 flex-1"></div>
              <h2 className="px-4 text-[13px] md:text-sm font-semibold text-[#1b5e20] uppercase font-poppins">
                {data.heading}
              </h2>
              <div className="h-[1px] bg-gray-200 flex-1"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-2 relative">
              {data.steps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center w-full lg:w-[18%] text-center">
                    <div className="mb-4">
                      <img src={IMG_MAP[step.img] || step.img} alt={step.title} className="w-16 h-16 object-contain mx-auto" />
                    </div>
                    <h3 className="text-[13px] font-semibold text-[#ea580c] uppercase mb-2 font-poppins">
                      {step.title}
                    </h3>
                    <p className="text-[11px] md:text-[12px] text-gray-800 font-medium leading-snug max-w-[210px] mx-auto whitespace-pre-line">
                      {step.desc}
                    </p>
                  </div>

                  {i < data.steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center pt-6 text-[#1b5e20]">
                      <ArrowRight size={24} strokeWidth={1.5} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ))}
      </SectionContainer>
    </section>
  );
}

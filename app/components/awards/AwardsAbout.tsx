"use client";

import React from "react";
import { Leaf } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="flex items-center justify-center gap-2.5 text-center mb-4">
      <Leaf className="h-4 w-4 shrink-0 -rotate-45 text-[#1b5e20]" />
      <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block">
        {children}
      </h2>
      <Leaf className="h-4 w-4 shrink-0 rotate-[135deg] text-[#1b5e20]" />
    </Reveal>
  );
}

const AwardsAbout = () => {
  return (
    <section className="bg-white py-6 md:py-8 font-inter">
      <SectionContainer>
        <div className="mx-auto max-w-3xl">
          <SectionHeading>About the Awards</SectionHeading>
          <Reveal delay={100}>
            <div
              className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              <p className="text-xs sm:text-sm leading-relaxed text-gray-900 font-medium">
                Bharat Organic Excellence Awards 2027 recognise outstanding
                organisations, brands, entrepreneurs, farmers and professionals
                for their remarkable contribution to the growth and promotion of
                the organic, natural and sustainable industry.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AwardsAbout;
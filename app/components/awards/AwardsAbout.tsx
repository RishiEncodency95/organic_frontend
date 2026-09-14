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

const data = {
  enabled: true,
  title: "About the Awards",
  description:
    "Bharat Organic Excellence Awards 2027 recognise outstanding organisations, brands, entrepreneurs, farmers and professionals for their remarkable contribution to the growth and promotion of the organic, natural and sustainable industry.",
};

const AwardsAbout = () => {
  if (!data.enabled) return null;

  return (
    <section className="bg-white py-4 font-inter">
      <SectionContainer>
        <div className="mx-auto max-w-4xl">
          <SectionHeading>{data.title}</SectionHeading>
          <Reveal delay={100}>
            <div className="bg-white p-4 rounded-xl text-center">
              <p className="text-xs sm:text-sm leading-relaxed text-gray-900 font-medium">
                {data.description}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AwardsAbout;
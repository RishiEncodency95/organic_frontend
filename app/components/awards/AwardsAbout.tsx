"use client";

import React from "react";
import { Leaf } from "lucide-react";
import { Reveal } from "../shared/Reveal";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="flex items-center justify-center gap-2.5 text-center">
      <Leaf className="h-3.5 w-3.5 shrink-0 -rotate-45 text-[#3b8c2a]" />
      <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-extrabold uppercase tracking-wide text-[#154726]">
        {children}
      </h2>
      <Leaf className="h-3.5 w-3.5 shrink-0 rotate-[135deg] text-[#3b8c2a]" />
    </Reveal>
  );
}

const AwardsAbout = () => {
  return (
    <section className="bg-white py-2 md:py-4">
      <div className="container mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-3xl">
          <SectionHeading>About the Awards</SectionHeading>
          <Reveal delay={100}>
            <p className="mt-3 text-center text-[14px] md:text-[15px] leading-relaxed text-[#154726]/70">
              Bharat Organic Excellence Awards 2027 recognise outstanding
              organisations, brands, entrepreneurs, farmers and professionals
              for their remarkable contribution to the growth and promotion of
              the organic, natural and sustainable industry.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AwardsAbout;
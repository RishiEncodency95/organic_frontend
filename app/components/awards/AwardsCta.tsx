"use client";

import React from "react";
import { Leaf, Trophy, ArrowRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";

const AwardsCta = () => {
  return (
    <section className="bg-[#fcfcf0] py-2 md:py-4">
      <div className="container mx-auto max-w-[1400px] px-6">
        <Reveal>
          <div className="relative mx-auto flex flex-col items-center gap-3 overflow-hidden rounded-2xl bg-[#0b2912] px-5 py-6 text-center shadow-[0_15px_40px_rgba(0,0,0,0.25)] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:text-left">
            <Leaf className="pointer-events-none absolute -left-2 -bottom-2 h-16 w-16 rotate-12 text-white/10" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/5" />

            <div className="relative flex shrink-0 items-center justify-center">
              <Trophy className="h-10 w-10 text-[#F2B40E] sm:h-12 sm:w-12" />
            </div>

            <div className="relative flex-1">
              <h3 className="text-[16px] md:text-[18px] font-bold uppercase leading-snug tracking-wide text-white sm:text-base">
                Be Recognised. Be Celebrated.{" "}
                <span className="text-[#F2B40E]">
                  Be Part of India&apos;s Organic Revolution.
                </span>
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-[#b8d9b9] sm:text-[14px]">
                Nominate yourself or someone who inspires change in the organic
                and sustainable world.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-col items-center gap-1 sm:items-end">
              <a
                href="/awards/nominations"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-md bg-[#F2B40E] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#0b2912] shadow-md transition-all duration-300 hover:bg-[#ffc533] hover:shadow-lg hover:-translate-y-0.5"
              >
                Nominate Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <span className="text-[11px] font-semibold text-[#F2B40E]">
                Deadline: 31 December 2026
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AwardsCta;
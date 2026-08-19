"use client";

import React from "react";
import { Leaf, Trophy, ArrowRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";

const AwardsCta = () => {
  return (
    <section className="bg-[#f9f9f9] py-8 md:py-12 font-inter">
      <SectionContainer>
        <Reveal>
          <div
            className="relative mx-auto flex flex-col items-center gap-4 overflow-hidden rounded-xl bg-[#0d2a1b] px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            <Leaf className="pointer-events-none absolute -left-2 -bottom-2 h-16 w-16 rotate-12 text-white/10" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/5" />

            <div className="relative flex shrink-0 items-center justify-center">
              <Trophy className="h-10 w-10 text-[#ea580c] sm:h-12 sm:w-12" />
            </div>

            <div className="relative flex-1">
              <h3 className="text-base md:text-lg font-semibold uppercase leading-snug tracking-wide text-white font-poppins">
                Be Recognised. Be Celebrated.{" "}
                <span className="text-[#ea580c]">
                  Be Part of India&apos;s Organic Revolution.
                </span>
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                Nominate yourself or someone who inspires change in the organic
                and sustainable world.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-col items-center gap-1.5 sm:items-end">
              <a
                href="/awards/nominations"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg bg-[#ea580c] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#c2410c] hover:shadow-lg hover:-translate-y-0.5"
              >
                Nominate Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <span className="text-[11px] font-semibold text-[#facc15]">
                Deadline: 31 December 2026
              </span>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
};

export default AwardsCta;
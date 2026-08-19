"use client";

import React from "react";
import { Leaf, ArrowRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
<<<<<<< HEAD
import trophyImage from "../../assets/awards/be_recognised.webp";
import leafImage from "../../assets/awards/be_rocognised.webp";

import Image from "next/image";
=======
import SectionContainer from "@/app/components/layout/SectionContainer";
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535

const AwardsCta = () => {
  return (
    <section className="bg-[#f9f9f9] py-8 md:py-12 font-inter">
      <SectionContainer>
        <Reveal>
<<<<<<< HEAD
          <div className="relative mx-auto flex flex-col items-center gap-2 overflow-hidden rounded-2xl bg-[#0b2912] px-4 py-4 text-center shadow-[0_15px_40px_rgba(0,0,0,0.25)] sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-4 sm:text-left">
=======
          <div
            className="relative mx-auto flex flex-col items-center gap-4 overflow-hidden rounded-xl bg-[#0d2a1b] px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535
            <Leaf className="pointer-events-none absolute -left-2 -bottom-2 h-16 w-16 rotate-12 text-white/10" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/5" />

            <div className="relative flex shrink-0 items-center justify-center">
<<<<<<< HEAD
              <Image
                src={trophyImage}
                alt="Be Recognised"
                className="h-auto w-full max-w-[120px] object-contain"
                width={120}
                height={120}
              />
            </div>

            <div className="relative flex-1 flex max-w-md flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-3 sm:border-r sm:border-white/20 sm:pr-4 md:max-w-lg">
              <h3 className="text-[16px] md:text-[18px] font-bold uppercase leading-snug tracking-wide text-white sm:border-r sm:border-white/20 sm:pr-3 sm:text-base">
                Be Recognised.<br /> Be Celebrated.{" "}
                <span className="text-[#F2B40E]">
                  Be Part of India&apos;s <br />Organic Revolution.
                </span>
              </h3>
              <p className="text-[13px] leading-relaxed text-[#b8d9b9] sm:text-[14px]">
=======
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
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535
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
              <div className="relative flex shrink-0 items-center justify-center">
              <Image
                src={leafImage}
                alt="Be Recognised"
                className="h-auto w-full max-w-[120px] object-contain"
                width={120}
                height={120}
              />
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
};

export default AwardsCta;
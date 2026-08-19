"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";
import right_plant from "@/app/assets/awards/right_plant.png";
import award from "@/app/assets/awards/award.png";

const AwardsCta = () => {
  return (
    <section className="bg-[#f9f9f9] py-4  font-inter">
      <SectionContainer>
        <Reveal>
          <div
            className="relative mx-auto flex flex-col items-center gap-4 overflow-hidden rounded-xl bg-[#0d2a1b] px-4 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-4 sm:text-left"
          >
            {/* Background Decoration */}
          
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/5" />

            <div className="relative flex h-24 w-full shrink-0 items-center justify-center sm:h-30 sm:w-auto">
              <Image
                src={award}
                alt="Award"
                width={100}
                height={100}
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="relative flex w-full flex-col items-center sm:flex-1 sm:items-start">
              <h3 className="text-base font-semibold uppercase leading-snug tracking-wide text-white font-poppins md:text-lg">
                Be Recognised.<br />
                Be Celebrated.<br />
                <span className="text-[#ea580c]">Be Part of India&apos;s</span><br />
                Organic Revolution.
              </h3>
              <p className="mt-3 max-w-sm py-2 text-right text-xs font-medium leading-relaxed text-white/80 sm:border-x sm:border-white/20 sm:px-4 sm:py-0 sm:text-left sm:text-sm">
                Nominate yourself or someone who inspires change in the organic
                and sustainable world.
              </p>
            </div>

            <div className="relative flex w-full shrink-0 flex-col items-center gap-1.5 sm:w-auto sm:items-end">
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

            <Image
              src={right_plant}
              alt=""
              width={100}
              height={100}
              className="pointer-events-none absolute bottom-0 right-0 h-20 w-auto object-contain sm:h-24"
            />
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
};

export default AwardsCta;
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
            className="relative mx-auto flex flex-col items-center gap-4 overflow-hidden rounded-xl bg-[#0d2a1b] text-center sm:flex-row sm:items-center sm:justify-between sm:text-left pl-8"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            {/* Background Decoration */}
          
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/5" />

            <div className="relative flex shrink-0 items-center justify-center h-30">
              <Image
                src={award}
                alt="Award"
                width={100}
                height={100}
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="relative flex">
              <h3 className="text-base md:text-lg font-semibold uppercase leading-snug tracking-wide text-white font-poppins ">
                Be Recognised.<br/> Be Celebrated.{" "}
                <p className="text-[#ea580c]">
                  Be Part of India&apos;s
                </p>
                 Organic Revolution.
              </h3>
              <div className="flex items-center justify-center">

              <p className="mt-1 text-xs sm:text-sm text-white/80 font-medium leading-relaxed border-x border-white/20 px-4 sm:px-6 sm:mx-6 h-auto text-xs max-w-sm">
                Nominate yourself or someone who inspires change in the organic
                and sustainable world.
              </p>
              </div>
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
              <Image
              src={right_plant}
              alt=""
              width={100}
              height={100}
              className="pointer-events-none "
            />
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
};

export default AwardsCta;
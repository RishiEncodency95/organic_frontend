"use client";

import React from "react";
import Image from "next/image";
import { Trophy, Star, User, Rocket, Lightbulb, Globe2, Award } from "lucide-react";
import { Reveal } from "../shared/Reveal";
<<<<<<< HEAD
import trophyImage from "../../assets/awards/prestigious_grand_awards.webp";
=======
import SectionContainer from "@/app/components/layout/SectionContainer";

>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535
const GRAND_AWARDS = [
  { icon: User, label: "Organic Entrepreneur of the Year" },
  { icon: Rocket, label: "Organic Startup of the Year" },
  { icon: Star, label: "Organic Brand of the Year" },
  { icon: Lightbulb, label: "Innovation of the Year" },
  { icon: Globe2, label: "Sustainability Leadership Award" },
  { icon: Award, label: "Lifetime Achievement Award" },
];

const AwardsGrandAwards = () => {
  return (
    <section className="bg-white py-6 md:py-8 font-inter">
      <SectionContainer>
        <Reveal>
          <div
            className="rounded-xl bg-white p-5 md:p-6 transition-shadow hover:shadow-md"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex shrink-0 flex-col items-center">
<<<<<<< HEAD
                {/* <Trophy className="h-14 w-14 text-[#F2B40E] drop-shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:scale-110 sm:h-16 sm:w-16" /> */}
                <Image
                  src={trophyImage}
                  alt="Prestigious Grand Awards"
                  className="mt-2 h-auto w-full max-w-[120px] object-contain"
                  width={120}
                  height={120}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-center gap-2">
                  {/* <Star className="h-3.5 w-3.5 text-[#F2B40E]" fill="currentColor" /> */}
                  <h2 className="text-center text-[16px] md:text-[18px] font-extrabold uppercase tracking-wide text-[#154726]">
=======
                <Trophy className="h-12 w-12 text-[#1b5e20] drop-shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:scale-110 sm:h-14 sm:w-14" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <Star className="h-4 w-4 text-[#ea580c]" />
                  <h2 className="text-center text-lg md:text-xl font-semibold uppercase tracking-wide text-[#1b5e20] font-poppins lg:text-left">
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535
                    Prestigious Grand Awards
                  </h2>
                </div>
                <div className="mt-1.5 flex items-center justify-center gap-2">
                  <span className="h-[2px] w-10 rounded-full bg-[#F2B40E]/70 sm:w-16" />
                  <Star className="h-4 w-4 text-[#F2B40E]" fill="currentColor" />
                  <span className="h-[2px] w-10 rounded-full bg-[#F2B40E]/70 sm:w-16" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {GRAND_AWARDS.map((g, i) => {
                    const Icon = g.icon;
                    return (
                      <Reveal key={g.label} delay={i * 70}>
<<<<<<< HEAD
                        <div className={`group flex flex-col items-center gap-1.5 px-2 text-center transition-transform duration-300 hover:-translate-y-1 ${i < GRAND_AWARDS.length - 1 ? "border-r border-[#F2B40E]/20" : ""}`}>
                          <div className="flex items-center gap-1">
                            <Icon className="h-8 w-8 text-[#2b5825]" />
                          </div>
                          <span className="text-[10.5px] font-semibold uppercase leading-tight text-[#154726]/75 sm:text-[11px]">
=======
                        <div
                          className="group flex flex-col items-center gap-2 text-center bg-[#f9f9f9] p-3 rounded-xl hover:shadow-md transition-shadow font-inter"
                          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1b5e20] text-white transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-[10.5px] sm:text-xs font-semibold text-[#1b5e20] uppercase font-poppins leading-tight">
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535
                            {g.label}
                          </span>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
};

export default AwardsGrandAwards;
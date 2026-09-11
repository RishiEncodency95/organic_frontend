"use client";

import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";
import entrepreneur from "@/app/assets/awards/organic_enterpreneur.png"
import startup from "@/app/assets/awards/organic_startup.png"
import brand from "@/app/assets/awards/organic_brand.png"
import innovation from "@/app/assets/awards/innovation.png"
import sustainability from "@/app/assets/awards/sustainability.png"
import lifetime from "@/app/assets/awards/lifetime_achievement.png"
import grand_award from "@/app/assets/awards/grand_award.png"
import card_bg from "@/app/assets/awards/card_bg.png"
const GRAND_AWARDS = [
  { icon: entrepreneur, label: "Organic Entrepreneur of the Year" },
  { icon: startup, label: "Organic Startup of the Year" },
  { icon: brand, label: "Organic Brand of the Year" },
  { icon: innovation, label: "Innovation of the Year" },
  { icon: sustainability, label: "Sustainability Leadership Award" },
  { icon: lifetime, label: "Lifetime Achievement Award" },
];

const AwardsGrandAwards = () => {
  return (
 <section className="bg-[#fff7ed] py-4 md:py-4 font-inter">
  <SectionContainer>
    <Reveal>
      <div
        className="relative overflow-hidden rounded-xl border border-[#f97316] bg-[#fffaf5] p-5 md:p-6 transition-shadow hover:shadow-md"
        style={{
          boxShadow:
            "rgba(234, 88, 12, 0.08) 0px 2px 6px 0px, rgba(234, 88, 12, 0.12) 0px 0px 0px 1px",
        }}
      >
        {/* Background Decoration */}
        <div className="absolute bottom-0 right-0 h-[50%] w-[30%] opacity-20 pointer-events-none">
          <Image
            src={card_bg}
            alt=""
            width={300}
            height={300}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex h-40 shrink-0 flex-col items-center">
            <Image
              src={grand_award}
              alt="Grand Award"
              width={164}
              height={180}
              className="h-full w-auto object-contain drop-shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:scale-110"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col items-center justify-center gap-0 lg:justify-start">
              <h2 className="text-center text-lg font-semibold uppercase tracking-wide md:text-xl font-poppins lg:text-left">
                Prestigious Grand Awards
              </h2>

              <div className="flex items-center gap-2">
                <div className="h-px w-20 bg-[#ea580c]" />
                <Star className="h-4 w-4 fill-[#ea580c] text-[#ea580c]" />
                <div className="h-px w-20 bg-[#ea580c]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {GRAND_AWARDS.map((g, i) => (
                <Reveal key={g.label} delay={i * 70}>
                  <div
                    className={`group flex h-full flex-col items-center gap-2 ${i < GRAND_AWARDS.length - 1 ? "border-r border-[#fed7aa]" : ""} p-4 pr-5 text-center font-inter transition-all duration-300 hover:-translate-y-1 ${i < GRAND_AWARDS.length - 1 ? "hover:border-[#f97316]" : ""}`}
                  >
                    <Image
                      src={g.icon}
                      alt={g.label}
                      width={50}
                      height={50}
                      className="h-[50px] w-[50px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    <span className="text-[18px] font-semibold uppercase leading-tight  sm:text-xs font-poppins">
                      {g.label}
                    </span>
                  </div>
                </Reveal>
              ))}
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
"use client";

import React from "react";
import { Trophy, Star, User, Rocket, Lightbulb, Globe2, Award } from "lucide-react";
import { Reveal } from "../shared/Reveal";

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
    <section className="bg-white py-2 md:py-4">
      <div className="container mx-auto max-w-[1400px] px-6">
        <Reveal>
          <div className="rounded-2xl border border-[#F2B40E]/30 bg-gradient-to-b from-[#FBF3DC] to-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-6">
            <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex shrink-0 flex-col items-center">
                <Trophy className="h-14 w-14 text-[#F2B40E] drop-shadow-sm transition-transform duration-500 hover:-translate-y-1 hover:scale-110 sm:h-16 sm:w-16" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <Star className="h-3.5 w-3.5 text-[#F2B40E]" />
                  <h2 className="text-center text-[16px] md:text-[18px] font-extrabold uppercase tracking-wide text-[#154726] lg:text-left">
                    Prestigious Grand Awards
                  </h2>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {GRAND_AWARDS.map((g, i) => {
                    const Icon = g.icon;
                    return (
                      <Reveal key={g.label} delay={i * 70}>
                        <div className="group flex flex-col items-center gap-1.5 text-center transition-transform duration-300 hover:-translate-y-1">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b5825] text-white transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-[10.5px] font-semibold uppercase leading-tight text-[#154726]/75 sm:text-[11px]">
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
      </div>
    </section>
  );
};

export default AwardsGrandAwards;
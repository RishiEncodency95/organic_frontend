"use client";

import React from "react";
import { Calendar, Users, Star, CheckCircle2, Check } from "lucide-react";
import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";
import card_bg from "@/app/assets/awards/card_bg.png"

const KEY_DATES = [
  { label: "Nominations Open", value: "1 July 2026" },
  { label: "Last Date for Nominations", value: "31 December 2026" },
  { label: "Shortlisting", value: "January 2027" },
  { label: "Awards Ceremony", value: "19–21 February 2027" },
];

const WHO_CAN_APPLY = [
  "Companies & Brands",
  "Startups & Entrepreneurs",
  "Farmers & Producer Groups",
  "Institutions, Organisations & NGOs",
  "Individuals & Professionals",
];

const WHY_PARTICIPATE = [
  "National & Global Recognition",
  "Enhance Brand Value & Credibility",
  "Networking with Industry Leaders",
  "Business Growth Opportunities",
  "Showcase Innovation & Impact",
];

const AwardsInfoColumns = () => {
  return (
    <section className="bg-white py-4 font-inter">
      <SectionContainer>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Key dates */}
          <Reveal className="h-full">
            <div
              className="relative h-full overflow-hidden rounded-xl bg-gray-100 p-5 hover:shadow-md transition-shadow"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              <div className="absolute bottom-0 right-0 w-[40%] h-[80%] opacity-10 pointer-events-none">
                <Image src={card_bg} alt="" width={200} height={200} className="w-full h-full object-contain" />
              </div>
              <div className="relative z-10">
                <h3 className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase text-[#1b5e20] font-poppins mb-4">
                    <Calendar className="h-8 w-8 text-[#1b5e20]" />
                  Key Dates
                </h3>
                <dl className="space-y-2.5">
                  {KEY_DATES.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-900 font-medium"
                    >
                      <dt>{d.label}</dt>
                      <dd className="font-semibold text-[#1b5e20]">{d.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[12px] italic text-gray-500 text-right">
                  *Dates are subject to change.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Who can apply */}
          <Reveal delay={90} className="h-full">
            <div
              className="relative h-full overflow-hidden rounded-xl bg-gray-100 p-5 hover:shadow-md transition-shadow"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              <div className="absolute bottom-0 right-0 w-[40%] h-[80%] opacity-10 pointer-events-none">
                <Image src={card_bg} alt="" width={200} height={200} className="w-full h-full object-contain" />
              </div>
              <div className="relative z-10">
                <h3 className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase text-[#1b5e20] font-poppins mb-4">
                    <Users className="h-8 w-8 text-[#1b5e20]" />
                  Who Can Apply?
                </h3>
                <ul className="space-y-2">
                  {WHO_CAN_APPLY.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-900 font-medium"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#1b5e20]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] font-semibold text-[#1b5e20]">
                  Open to Indian &amp; International participants.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Why participate */}
          <Reveal delay={180} className="h-full">
            <div
              className="relative h-full overflow-hidden rounded-xl bg-gray-100 p-5 hover:shadow-md transition-shadow"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              <div className="absolute bottom-0 right-0 w-[40%] h-[80%] opacity-10 pointer-events-none">
                <Image src={card_bg} alt="" width={200} height={200} className="w-full h-full object-contain" />
              </div>
              <div className="relative z-10">
                <h3 className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase text-[#1b5e20] font-poppins mb-4">
                    <Star className="h-8 w-8 text-[#1b5e20]" />
                  Why Participate?
                </h3>
                <ul className="space-y-2">
                  {WHY_PARTICIPATE.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-900 font-medium"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#1b5e20]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AwardsInfoColumns;
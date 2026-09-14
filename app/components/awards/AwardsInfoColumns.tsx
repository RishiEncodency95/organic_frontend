"use client";

import React from "react";
import { Calendar, Users, Star, CheckCircle2, Check } from "lucide-react";
import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";
import card_bg from "@/app/assets/awards/card_bg.png"

const data = {
  enabled: true,
  keyDates: {
    title: "Key Dates",
    icon: Calendar,
    disclaimer: "*Dates are subject to change.",
    items: [
      { label: "Nominations Open", value: "1 July 2026" },
      { label: "Last Date for Nominations", value: "31 December 2026" },
      { label: "Shortlisting", value: "January 2027" },
      { label: "Awards Ceremony", value: "19–21 February 2027" },
    ],
  },
  whoCanApply: {
    title: "Who Can Apply?",
    icon: Users,
    note: "Open to Indian & International participants.",
    items: [
      "Companies & Brands",
      "Startups & Entrepreneurs",
      "Farmers & Producer Groups",
      "Institutions, Organisations & NGOs",
      "Individuals & Professionals",
    ],
  },
  whyParticipate: {
    title: "Why Participate?",
    icon: Star,
    items: [
      "National & Global Recognition",
      "Enhance Brand Value & Credibility",
      "Networking with Industry Leaders",
      "Business Growth Opportunities",
      "Showcase Innovation & Impact",
    ],
  },
};

const AwardsInfoColumns = () => {
  if (!data.enabled) return null;

  const KeyDatesIcon = data.keyDates.icon;
  const WhoCanApplyIcon = data.whoCanApply.icon;
  const WhyParticipateIcon = data.whyParticipate.icon;

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
                  {KeyDatesIcon && <KeyDatesIcon className="h-8 w-8 text-[#1b5e20]" />}
                  {data.keyDates.title}
                </h3>
                <dl className="space-y-2.5">
                  {data.keyDates.items.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between gap-2 text-[11px] sm:text-xs text-gray-900 font-medium"
                    >
                      <dt>{d.label}</dt>
                      <dd className="font-semibold text-[#1b5e20]">{d.value}</dd>
                    </div>
                  ))}
                </dl>
                {data.keyDates.disclaimer && (
                  <p className="mt-4 text-[12px] italic text-gray-500 text-right">
                    {data.keyDates.disclaimer}
                  </p>
                )}
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
                  {WhoCanApplyIcon && <WhoCanApplyIcon className="h-8 w-8 text-[#1b5e20]" />}
                  {data.whoCanApply.title}
                </h3>
                <ul className="space-y-2">
                  {data.whoCanApply.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-900 font-medium"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#1b5e20]" />
                      {item}
                    </li>
                  ))}
                </ul>
                {data.whoCanApply.note && (
                  <p className="mt-4 text-[11px] font-semibold text-[#1b5e20]">
                    {data.whoCanApply.note}
                  </p>
                )}
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
                  {WhyParticipateIcon && <WhyParticipateIcon className="h-8 w-8 text-[#1b5e20]" />}
                  {data.whyParticipate.title}
                </h3>
                <ul className="space-y-2">
                  {data.whyParticipate.items.map((item) => (
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
"use client";

import React from "react";
import Link from "next/link";
import {
  Trophy,
  Lightbulb,
  Users,
  Megaphone,
  TrendingUp,
  HeartPulse,
  Calendar,
  MapPin,
  ArrowRight,
  Leaf,
  Mic,
  Globe,
} from "lucide-react";

import award2 from "@/app/assets/banner/award2.png";
import hosog from "@/app/assets/banner/hosog.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

import t1 from "@/app/assets/icons/t1.png";
import t2 from "@/app/assets/icons/t2.png";
import t3 from "@/app/assets/icons/t3.png";
import t4 from "@/app/assets/icons/t4.png";
import t5 from "@/app/assets/icons/t5.png";

const valueCards = [
  {
    image: t1,
    titleLine1: "Recognizing",
    titleLine2: "Excellence",
    desc: "Celebrate outstanding achievements across the organic ecosystem.",
  },
  {
    image: t2,
    titleLine1: "Inspiring",
    titleLine2: "Innovation",
    desc: "Encouraging new ideas and solutions for a sustainable future.",
  },
  {
    image: t3,
    titleLine1: "Building",
    titleLine2: "Credibility",
    desc: "Gain industry recognition and strengthen your brand value.",
  },
  {
    image: t4,
    titleLine1: "Wider",
    titleLine2: "Visibility",
    desc: "Showcase your success to a global audience of buyers and leaders.",
  },
  {
    image: t5,
    titleLine1: "Driving",
    titleLine2: "Impact",
    desc: "Inspire meaningful change and contribute to a better, healthier world.",
  },
];

const AwardsHealthCamp = () => {
  return (
    <section className="py-2.5 sm:py-3.5 bg-white font-inter relative overflow-hidden flex items-center min-h-[380px] sm:min-h-[420px]">
      <SectionContainer className="relative z-10 py-0.5">
        <div className="w-full">
          {/* HEADER SECTION WITH RIGHT SIDE AWARD TROPHY IMAGE */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-1">
            <div className="text-center max-w-3xl mx-auto -mt-12 sm:-mt-18 lg:-mt-24">
              {/* Top Capsule Badge with Leaf Icons */}
              <div className="flex items-center justify-center mb-2">
                <div className="inline-flex items-center gap-2 bg-[#1b5e20] text-white px-3.5 py-1 rounded-md font-poppins font-semibold text-[11px] uppercase tracking-widest shadow-sm">
                  <Leaf className="w-3.5 h-3.5 text-lime-300" />
                  <span>VALUE BEYOND BUSINESS</span>
                  <Leaf className="w-3.5 h-3.5 text-lime-300 rotate-90" />
                </div>
              </div>

              {/* Main Heading with leaf accent */}
              <h2
                className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] text-[#001810] leading-tight mb-1.5 flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
              >
                <span>AWARDS & RECOGNITION</span>
                <Leaf className="w-6 h-6 text-[#1b5e20] hidden sm:inline-block -mt-3" />
              </h2>

              {/* Sub-line */}
              <p className="font-poppins font-semibold text-sm sm:text-base md:text-[17px] text-[#7BA238] tracking-wider uppercase mb-2 text-center">
                CELEBRATING EXCELLENCE. INSPIRING IMPACT.
              </p>

              {/* Description Paragraph */}
              <p className="font-inter text-xs sm:text-[14px] md:text-[15px] font-medium text-[#131730] max-w-xl leading-relaxed mx-auto text-center">
                Honouring innovation, leadership and impactful contributions that are shaping a healthier, sustainable and organic future.
              </p>
            </div>

            {/* Right Side Award2 Trophy Image */}
            <img
              src={award2.src}
              alt="Bharat Organic Excellence Award Trophy"
              className="w-52 sm:w-[300px] md:w-[420px] lg:w-[500px] xl:w-[540px] h-auto object-contain shrink-0 self-center sm:self-auto translate-y-4 sm:translate-y-6 lg:translate-y-8 pointer-events-none"
            />
          </div>

          {/* MIDDLE GRID: 5 VALUE CARDS LEFT + FREE HEALTH CAMP RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start mb-2">
            
            {/* LEFT: 5 VALUE CARDS IN WHITE BACKDROP CONTAINER */}
            <div className="lg:col-span-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-sm flex flex-col justify-center -mt-12 sm:-mt-18 lg:-mt-28 relative z-20">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/60">
                {valueCards.map((card, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`text-center flex flex-col items-center justify-start px-1 pt-2 sm:pt-0 ${
                        idx !== 0 ? "lg:pl-2.5" : ""
                      }`}
                    >
                      <img
                        src={card.image.src}
                        alt=""
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2 mx-auto shrink-0"
                      />
                      <h3 className="font-poppins font-semibold text-[13.5px] sm:text-[15px] text-[#001810] mb-1.5 leading-tight flex flex-col items-center justify-center">
                        <span className="block">{card.titleLine1}</span>
                        <span className="block">{card.titleLine2}</span>
                      </h3>
                      <div className="w-5 h-[1.5px] bg-[#1b5e20]/40 mb-1.5" />
                      <p className="font-inter text-[10px] text-gray-700 font-semibold leading-tight">
                        {card.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: FREE HEALTH CAMP CARD */}
            <div className="lg:col-span-4 bg-[#f2f8f1] rounded-2xl p-3 sm:p-3.5 border border-[#1b5e20]/20 shadow-sm flex flex-col justify-between text-center relative overflow-hidden">
              <div>
                {/* Top Badge */}
                <div className="inline-flex items-center justify-center gap-1.5 bg-white text-[#1b5e20] px-3 py-0.5 rounded-full font-poppins font-semibold text-[10.5px] uppercase tracking-wider shadow-xs mb-2 border border-[#1b5e20]/15">
                  <HeartPulse className="w-3.5 h-3.5 text-[#1b5e20]" />
                  <span>FREE HEALTH CAMP</span>
                </div>

                {/* Health Camp Image Banner */}
                <div className="w-full h-24 sm:h-26 rounded-xl overflow-hidden mb-2 border border-slate-200/80 shadow-xs">
                  <img
                    src={hosog.src}
                    alt="Free Health Camp"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Subtitle */}
                <h4 className="font-poppins font-semibold text-xs sm:text-[13px] text-[#1b5e20] leading-tight mb-1">
                  Promoting Preventive Health for a Better Tomorrow
                </h4>

                {/* Description */}
                <p className="font-inter text-[10px] text-gray-700 font-semibold leading-tight mb-2">
                  Free health check-ups, consultations and awareness for all visitors and participants.
                </p>
              </div>

              {/* Card Footer: COMPLIMENTARY ACCESS & HALL 12 */}
              <div className="pt-2 border-t border-[#1b5e20]/15 flex items-center justify-between text-[10px]">
                <span className="font-poppins font-semibold text-[#1b5e20] tracking-wider">
                  COMPLIMENTARY ACCESS
                </span>
                <span className="bg-[#1b5e20] text-white px-2.5 py-0.5 rounded-md font-poppins font-semibold shadow-xs">
                  HALL 12
                </span>
              </div>
            </div>

          </div>



        </div>
      </SectionContainer>
    </section>
  );
};

export default AwardsHealthCamp;

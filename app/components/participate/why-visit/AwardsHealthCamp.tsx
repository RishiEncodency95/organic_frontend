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
import tleaf from "@/app/assets/icons/tleaf.png";

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
      {/* Top Left Leaf Decor Asset */}
      <img
        src={tleaf.src}
        alt=""
        className="absolute top-0 left-0 w-32 sm:w-44 md:w-56 lg:w-64 h-auto object-contain pointer-events-none z-0 opacity-80"
      />

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

          {/* 5 VALUE CARDS IN WHITE BACKDROP CONTAINER */}
          <div className="max-w-4xl ml-0 mr-auto bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-slate-300 shadow-sm flex flex-col justify-center -mt-12 sm:-mt-18 lg:-mt-28 relative z-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 divide-y sm:divide-y-0 lg:divide-x divide-slate-300">
              {valueCards.map((card, idx) => {
                return (
                  <div
                    key={idx}
                    className={`text-center flex flex-col items-center justify-start px-2 pt-2.5 sm:pt-0 ${
                      idx !== 0 ? "lg:pl-3" : ""
                    }`}
                  >
                    <img
                      src={card.image.src}
                      alt=""
                      className="w-11 h-11 sm:w-13 sm:h-13 object-contain mb-2 mx-auto shrink-0"
                    />
                    <h3 className="font-poppins font-semibold text-[13px] sm:text-[14.5px] text-[#001810] mb-1.5 leading-tight flex flex-col items-center justify-center">
                      <span className="block">{card.titleLine1}</span>
                      <span className="block">{card.titleLine2}</span>
                    </h3>
                    <div className="w-6 h-[1.5px] bg-[#1b5e20]/50 mb-1.5" />
                    <p className="font-inter text-[11px] text-slate-800 font-semibold leading-snug">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>



        </div>
      </SectionContainer>
    </section>
  );
};

export default AwardsHealthCamp;

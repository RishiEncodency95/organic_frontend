"use client";

import React from "react";
import Link from "next/link";
import { Trophy, Lightbulb, ShieldCheck, Megaphone, TrendingUp, HeartPulse, Calendar, MapPin, ArrowRight } from "lucide-react";

const valueCards = [
  {
    icon: Trophy,
    title: "Recognizing Excellence",
    desc: "Celebrate outstanding achievements across the organic ecosystem."
  },
  {
    icon: Lightbulb,
    title: "Inspiring Innovation",
    desc: "Encouraging new ideas and solutions for a sustainable future."
  },
  {
    icon: ShieldCheck,
    title: "Building Credibility",
    desc: "Gain industry recognition and strengthen your brand value."
  },
  {
    icon: Megaphone,
    title: "Wider Visibility",
    desc: "Showcase your success to a global audience of buyers and leaders."
  },
  {
    icon: TrendingUp,
    title: "Driving Impact",
    desc: "Inspire meaningful change and contribute to a better, healthier world."
  }
];

const AwardsHealthCamp = () => {
  return (
    <section className="py-16 bg-white font-inter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#285e19] text-white px-4 py-1 rounded-full font-poppins font-bold text-xs uppercase tracking-widest shadow-sm">
            VALUE BEYOND BUSINESS
          </div>

          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#112a12]">
            AWARDS & RECOGNITION
          </h2>

          <p className="font-poppins font-bold text-sm sm:text-base text-[#285e19] tracking-wider uppercase">
            CELEBRATING EXCELLENCE. INSPIRING IMPACT.
          </p>

          <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed">
            Honouring innovation, leadership and impactful contributions that are shaping a healthier, sustainable and organic future.
          </p>
        </div>

        {/* 2-COLUMN SECTION: VALUE CARDS LEFT + HEALTH CAMP RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* LEFT 5 VALUE CARDS (GRID 5 COLS OR RESPONSIVE) */}
          <div className="lg:col-span-8 bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 h-full">
              {valueCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 border border-slate-200/80 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#e8f3e7] text-[#285e19] flex items-center justify-center mb-3 mx-auto">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-poppins font-bold text-xs sm:text-sm text-[#112a12] mb-2 leading-tight">
                        {card.title}
                      </h3>
                      <p className="font-inter text-[11px] text-slate-500 leading-snug">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT FREE HEALTH CAMP BOX */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#e8f3e7] to-[#d4ebcf] border-2 border-[#285e19]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#285e19] text-white px-3.5 py-1.5 rounded-full font-poppins font-bold text-xs uppercase mb-4">
                <HeartPulse className="w-4 h-4 text-emerald-300" />
                <span>FREE HEALTH CAMP</span>
              </div>

              <h3 className="font-poppins font-bold text-xl text-[#112a12] mb-2">
                Promoting Preventive Health for a Better Tomorrow
              </h3>

              <p className="font-inter text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                Free health check-ups, doctor consultations and wellness awareness sessions for all registered expo visitors and participants.
              </p>
            </div>

            <div className="pt-4 border-t border-[#285e19]/20 flex items-center justify-between">
              <span className="font-poppins font-bold text-xs text-[#285e19]">COMPLIMENTARY ACCESS</span>
              <span className="text-xs bg-white text-[#285e19] px-3 py-1 rounded-full font-bold shadow-sm">HALL 12</span>
            </div>
          </div>

        </div>

        {/* BOTTOM FINAL CALLOUT */}
        <div className="bg-[#112a12] text-white rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
              Join India&apos;s Largest Organic & Wellness Movement
            </h3>
            <p className="font-inter text-slate-300 text-sm sm:text-base">
              Be a part of Bharat Organic Expo 2027. Connect with top suppliers, discover new innovations and transform your business.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/registration/visitor-registration"
                className="bg-[#285e19] hover:bg-[#1f4a13] text-white font-poppins font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg"
              >
                <span>REGISTER AS A VISITOR</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/registration/buyer-registration"
                className="bg-white hover:bg-slate-100 text-[#112a12] font-poppins font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg"
              >
                <span>REGISTER AS A BUYER</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AwardsHealthCamp;

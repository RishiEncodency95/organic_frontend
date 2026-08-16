"use client";

import React, { useEffect, useState } from "react";
import { Calendar, MapPin, ArrowRight, Trophy } from "lucide-react";
import bannerImg from "../../assets/awards/nomination.webp";

const NominationsHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex h-[580px] w-full items-center overflow-hidden bg-white sm:h-[480px] md:h-[555px] lg:h-[610px]">
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg.src}
          alt="Bharat Organic Excellence Awards 2027 Nominations Banner"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-20 container mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6">
        <div className="max-w-xl">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#F2B40E] backdrop-blur-sm transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Trophy className="h-3.5 w-3.5 animate-bounce" />
            Nominations Open Now
          </div>

          <h1
            className={`mt-5 text-[34px] font-black uppercase leading-[1.1] tracking-tight text-white transition-all delay-150 duration-700 ease-out md:text-[48px] lg:text-[58px] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Nominate
            <br />
            <span className="text-[#F2B40E]">Your Brand</span>
            <br />
            <span className="text-xl font-bold normal-case tracking-normal text-[#e6f2e6] md:text-2xl">
              Bharat Organic Excellence Awards 2027
            </span>
          </h1>

          <p
            className={`mt-4 max-w-[600px] text-[16px] leading-relaxed text-[#e6f2e6] transition-all delay-300 duration-700 ease-out md:text-[17px] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Get recognised at India&apos;s most trusted celebration of organic,
            natural and sustainable excellence. Submit your nomination online
            in the relevant category.
          </p>

          <div
            className={`mt-6 flex flex-wrap items-center gap-3 transition-all delay-500 duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="/book-a-stand"
              className="group inline-flex items-center gap-2 rounded-md bg-[#F2B40E] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#0b2912] shadow-md transition-all duration-300 hover:bg-[#ffc533] hover:shadow-lg hover:-translate-y-0.5"
            >
              Submit Nomination
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/awards"
              className="group inline-flex items-center gap-2 rounded-md border-2 border-white/70 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#2b5825] hover:-translate-y-0.5"
            >
              View Categories
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className={`mt-6 flex flex-wrap items-center gap-5 text-sm text-white transition-all delay-500 duration-700 ease-out sm:gap-8 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#F2B40E]" />
              Nominations Close 31 December 2026
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#F2B40E]" />
              Awards Ceremony: 19–21 February 2027
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NominationsHero;
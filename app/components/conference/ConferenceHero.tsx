"use client";

import React, { useEffect, useState } from "react";
import { CalendarDays, MapPin, Leaf } from "lucide-react";
import bannerImg from "../../assets/conference/banner.webp";

const ConferenceHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex h-[580px] w-full items-center overflow-hidden bg-white sm:h-[480px] md:h-[555px] lg:h-[610px]">
      {/* Background image full-width (same as blog hero) */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg.src}
          alt="Bharat Organic Expo Buyer-Seller Meet 2027 Banner"
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
            <Leaf className="h-3.5 w-3.5 animate-bounce" />
            Connect. Collaborate. Grow Together.
          </div>

          <h1
            className={`mt-5 text-[34px] font-black uppercase leading-[1.1] tracking-tight text-white transition-all delay-150 duration-700 ease-out md:text-[48px] lg:text-[58px] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Who Can
            <br />
            <span className="text-[#F2B40E]">Participate</span>
            <br />
            <span className="text-xl font-bold normal-case tracking-normal text-[#e6f2e6] md:text-2xl">
              at Buyer-Seller Meet 2027
            </span>
          </h1>

          <p
            className={`mt-4 max-w-[600px] text-[16px] leading-relaxed text-[#e6f2e6] transition-all delay-300 duration-700 ease-out md:text-[17px] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            The Buyer-Seller Meet at Bharat Bharat Organic Expo 2027 brings together
            serious buyers and quality suppliers from across the organic,
            natural and sustainable industry ecosystem to create meaningful
            business opportunities.
          </p>

          <div
            className={`mt-6 flex flex-wrap items-center gap-5 text-sm text-white transition-all delay-500 duration-700 ease-out sm:gap-8 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#F2B40E]" />
              19-21 February 2027
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#F2B40E]" />
              Hall 12, Bharat Mandapam, New Delhi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceHero;
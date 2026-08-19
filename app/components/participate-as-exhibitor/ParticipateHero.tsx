"use client";

import React, { useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import bannerImg from "../../assets/conference/banner.webp";

const ParticipateHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] pt-3 md:pt-5 pb-4 md:pb-6 items-center overflow-hidden bg-white border-b-4 border-[#ea580c]">
      {/* Background image full-width */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg.src}
          alt="Bharat Organic Expo Buyer-Seller Meet 2027 Banner"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-20 container mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6">
        <div className="max-w-xl">
          <h1
            className={`mt-5 text-[34px] font-semibold font-poppins uppercase leading-[1.1] tracking-tight text-white transition-all delay-150 duration-700 ease-out md:text-[48px] lg:text-[58px] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Who Can
            <br />
            <span className="text-[#F2B40E]">Participate</span>
            <span className="block mt-1 md:mt-1.5 text-xl font-semibold normal-case tracking-normal text-[#e6f2e6] md:text-2xl">
              at Buyer-Seller Meet 2027
            </span>
          </h1>

          <p
            className={`mt-2.5 max-w-[600px] text-[16px] leading-relaxed text-[#e6f2e6] transition-all delay-300 duration-700 ease-out md:text-[17px] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            The Buyer-Seller Meet at Bharat Organic Expo 2027 brings together
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

export default ParticipateHero;

"use client";
import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Globe } from "lucide-react";
import travelBg from "@/app/assets/banner/manog.png";
import pleaf from "@/app/assets/icons/pleaf.png";

export default function Hero() {
  return (
    <section className="relative z-10 w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-start bg-[#fcfcf0] overflow-hidden font-inter pt-10 md:pt-14 pb-4 md:pb-6 border-b-4 border-[#ea580c]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={travelBg.src} 
          alt="Travel Partner BG" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 mt-2 md:mt-4 lg:mt-6">

        <div className="max-w-4xl flex flex-col items-start text-left">
          {/* Main Title */}
          <h1 
            className="font-semibold leading-[1.05] mb-4 font-poppins"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
          >
            <span className="text-3xl md:text-5xl lg:text-[58px] text-[#1b5e20] block mb-1">SKILLED PEOPLE.</span>
            <span className="text-2xl md:text-4xl lg:text-[44px] text-[#ea580c] block">STRONGER EXHIBITIONS.</span>
          </h1>

          {/* Description */}
          <p className="text-[#131730] text-[15px] md:text-base font-bold leading-relaxed max-w-2xl mb-5">
            Professional and reliable manpower that<br className="hidden md:block" />
            keeps your stall operations seamless.
          </p>

          {/* Metadata (Date, Location) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#4B1426] text-xs sm:text-[15px] md:text-base font-bold w-full max-w-4xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] shrink-0">
                <Calendar size={16} />
              </div>
              <span>19-21 February 2027</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] shrink-0">
                <MapPin size={16} />
              </div>
              <span>Pragati Maidan, New Delhi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

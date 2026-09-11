"use client";
import React from "react";
import { Calendar, MapPin, Printer } from "lucide-react";
import printBg from "@/app/assets/banner/printog.webp";
import SectionContainer from "@/app/components/layout/SectionContainer";

export default function Hero() {
  return (
    <section className="relative z-10 w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-start bg-[#fcfcf0] overflow-hidden font-inter pt-10 md:pt-14 pb-4 md:pb-6 border-b-4 border-[#ea580c]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={printBg.src} 
          alt="Printing Partner BG" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      <SectionContainer className="relative z-10">

        <div className="max-w-4xl flex flex-col items-start text-left">
          {/* Main Title */}
          <h1 
            className="text-3xl md:text-4xl lg:text-[54px] font-semibold leading-[1.05] mb-4 font-poppins mt-2 md:mt-8"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
          >
            <span className="text-[#1b5e20]">PRINTING &</span><br/>
            <span className="text-[#ea580c]">BRANDING PARTNER</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#113217] text-sm md:text-base font-bold uppercase tracking-wider mb-6">
            Print. Brand. Promote.
          </p>

          {/* Description */}
          <p className="text-[#131730] text-sm md:text-[15px] font-bold leading-relaxed max-w-2xl mb-5">
            Partner with Bharat Organic Expo 2027 as our Printing & Branding Partner<br className="hidden md:block"/>
            and showcase your creativity across every touchpoint of the event while<br className="hidden md:block"/>
            building strong brand visibility.
          </p>

          {/* Metadata (Date, Location) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#4B1426] text-xs sm:text-sm md:text-[15px] font-bold w-full max-w-4xl">
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
      </SectionContainer>
    </section>
  );
}

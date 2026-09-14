"use client";
import React from "react";
import { Calendar, MapPin } from "lucide-react";
import traBg from "@/app/assets/banner/traog.webp";
import SectionContainer from "@/app/components/layout/SectionContainer";

export const HERO_TRAVEL_DATA = [
  {
    id: 1,
    titleLine1: "TRAVEL",
    titleLine2: "PARTNER",
    subtitle: "Travel Seamless. Partner Stronger.",
    descriptionLine1: "Partner with Bharat Organic Expo 2027 as our Travel Partner",
    descriptionLine2: "and provide end-to-end travel, flight booking, shuttle & local transport solutions",
    descriptionLine3: "for delegates, exhibitors and visitors attending from India and abroad.",
    date: "19-21 February 2027",
    location: "Pragati Maidan, New Delhi",
  },
];

export default function Hero() {
  const data = HERO_TRAVEL_DATA[0];

  return (
    <section className="relative z-10 w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-start bg-[#fcfcf0] overflow-hidden font-inter pt-10 md:pt-14 pb-4 md:pb-6 border-b-4 border-[#ea580c]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={traBg.src} 
          alt="Travel Partner BG" 
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
            <span className="text-[#1b5e20]">{data.titleLine1}</span><br/>
            <span className="text-[#ea580c]">{data.titleLine2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#113217] text-sm md:text-base font-bold uppercase tracking-wider mb-6">
            {data.subtitle}
          </p>

          {/* Description */}
          <p className="text-[#131730] text-sm md:text-[15px] font-bold leading-relaxed max-w-2xl mb-5">
            {data.descriptionLine1}<br className="hidden md:block"/>
            {data.descriptionLine2}<br className="hidden md:block"/>
            {data.descriptionLine3}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#4B1426] text-xs sm:text-sm md:text-[15px] font-bold w-full max-w-4xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] shrink-0">
                <Calendar size={16} />
              </div>
              <span>{data.date}</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] shrink-0">
                <MapPin size={16} />
              </div>
              <span>{data.location}</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

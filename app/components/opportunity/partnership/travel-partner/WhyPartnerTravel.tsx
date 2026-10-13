"use client";
import React from "react";
import { Mail, Phone, Globe, MapPin, Plane } from "lucide-react";
import leafsImg from "@/app/assets/icons/leafs.png";
import traog from "@/app/assets/icons/planog.png";
import SectionContainer from "@/app/components/layout/SectionContainer";
import PartnerRegistrationForm, { VENUE_MAP_URL } from "../PartnerRegistrationForm";
import Image from "next/image";

export const WHY_PARTNER_TRAVEL_DATA = [
  {
    id: 1,
    leftTitleLine1: "WHY PARTNER AS",
    leftTitleLine2: "TRAVEL PARTNER?",
    formTitle: "PARTNER WITH US",
    formSubtitle: "Fill in your details and our team will connect with you shortly.",
    contactEmail: "info@namogangewellness.com",
    contactPhone: "+91-9654900525",
    contactWebsite: "bharatorganicexpo.com",
    contactWebsiteUrl: "https://bharatorganicexpo.com/",
    contactLocationLine1: "Pragati Maidan,",
    contactLocationLine2: "New Delhi, India",
    points: [
      "Position your agency as the official travel partner for India's premier organic expo",
      "Gain direct bookings from 8,000+ delegates, exhibitors & international buyers",
      "Offer flight, cab, bus & airport transfer packages to delegates",
      "Build long-term corporate & MICE travel partnerships",
      "Increase brand visibility & recall across all event platforms",
      "Enhance delegate travel convenience with customized packages"
    ],
    statesList: [
      "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", 
      "Uttar Pradesh", "Haryana", "Telangana", "West Bengal", "Other"
    ],
  }
];


export default function WhyPartnerTravel() {

  const data = WHY_PARTNER_TRAVEL_DATA[0];

  return (
    <section className="pt-4 pb-4 bg-white font-inter relative overflow-hidden">
      <Image width={0} height={0} sizes="100vw" 
        src={leafsImg.src} 
        alt="Left Decoration" 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-32 md:w-48 object-contain pointer-events-none z-10 opacity-100 h-auto" 
      />

      <SectionContainer className="relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-4 bg-[#F5F4EF] p-8 pb-0 rounded-2xl border border-gray-150 flex flex-col justify-between relative overflow-hidden">
            <div>
              <h3 className="text-base md:text-lg lg:text-[17px] xl:text-[19px] font-semibold text-[#1b5e20] uppercase font-poppins mb-6 leading-tight">
                {data.leftTitleLine1}<br />{data.leftTitleLine2}
              </h3>
              
              <ul className="space-y-5 relative z-10">
                {data.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border border-[#1b5e20] bg-transparent flex items-center justify-center shrink-0 mt-0.5">
                      <Plane className="w-3.5 h-3.5 text-[#1b5e20]" />
                    </div>
                    <span className="text-[13px] md:text-sm font-bold text-gray-900 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Image width={0} height={0} sizes="100vw" 
              src={traog.src} 
              alt="Travel Decoration" 
              className="w-full object-contain pointer-events-none mt-1 h-auto" 
            />
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8 bg-white p-8 rounded-2xl border border-gray-150 relative overflow-hidden flex flex-col justify-center"
               style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" }}>
            
            <div className="mb-6 relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4 w-full justify-center">
                <div className="h-[1px] flex-1 bg-gray-300"></div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase font-poppins text-center px-2 shrink-0">
                  {data.formTitle}
                </h3>
                <div className="h-[1px] flex-1 bg-gray-300"></div>
              </div>
              <p className="text-xs font-bold text-gray-800 w-full text-left">
                {data.formSubtitle}
              </p>
            </div>

            <PartnerRegistrationForm defaultCategory="Travel Partner" />
          </div>
        </div>

        {/* Contact Footer Bar */}
        <div className="mt-12 bg-white pt-6 border-t border-gray-200 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 w-full">
          <div className="text-gray-900 font-bold text-xs lg:text-[13px] uppercase tracking-wider whitespace-nowrap">
            For partnership enquiries, please contact:
          </div>
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0"><Mail size={16} /></div>
            <a href={`mailto:${data.contactEmail}`} className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">{data.contactEmail}</a>
          </div>
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0"><Phone size={16} /></div>
            <a href={`tel:${data.contactPhone}`} className="text-xs lg:text-[13px] font-bold text-gray-900 hover:text-[#113217] transition-colors whitespace-nowrap">{data.contactPhone}</a>
          </div>
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d6a549] flex items-center justify-center text-white shrink-0"><Globe size={16} /></div>
            <a href={data.contactWebsiteUrl} target="_blank" rel="noopener noreferrer" className="text-xs lg:text-[13px] font-bold text-blue-600 hover:underline transition-colors whitespace-nowrap">{data.contactWebsite}</a>
          </div>
          <div className="hidden lg:block border-l border-gray-300 h-6 shrink-0" />
          <a href={VENUE_MAP_URL} target="_blank" rel="noopener noreferrer" title="Open in Google Maps" className="flex items-center gap-2.5 group">
            <MapPin size={24} className="text-[#d6a549] shrink-0" />
            <div className="text-[11px] font-bold text-gray-900 leading-tight group-hover:text-[#113217] group-hover:underline">
              <div className="whitespace-nowrap">{data.contactLocationLine1}</div>
              <div className="whitespace-nowrap">{data.contactLocationLine2}</div>
            </div>
          </a>
        </div>
      </SectionContainer>
    </section>
  );
}

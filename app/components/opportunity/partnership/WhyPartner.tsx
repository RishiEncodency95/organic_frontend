"use client";
import React from "react";
import { Shield, MapPin, Network, ClipboardList } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

import e1og from "@/app/assets/icons/e1og.png";
import e2og from "@/app/assets/icons/e2og.png";
import e3og from "@/app/assets/icons/e3og.png";
import e4og from "@/app/assets/icons/e4og.png";
import e5og from "@/app/assets/icons/e5og.png";

import pleafImg from "@/app/assets/icons/pleaf.png";
import footerRightImg from "@/app/assets/icons/footerright.webp";

const ICON_MAP: Record<string, any> = {
  Shield,
  MapPin,
  Network,
  ClipboardList,
  e1og,
  e2og,
  e3og,
  e4og,
  e5og,
};

export const WHY_PARTNER_DATA = [
  {
    id: 1,
    titleLine1: "WHY PARTNER WITH",
    titleLine2: "BHARAT ORGANIC EXPO 2027?",
    subtitle: "Connect with a highly targeted audience, build brand trust and showcase your expertise to thousands of visitors, industry leaders and decision makers.",
    partnerReasons: [
      { iconKey: "Shield", label: "Build\nBrand Trust" },
      { iconKey: "MapPin", label: "Generate\nQuality Leads" },
      { iconKey: "Network", label: "Expand\nBusiness Network" },
      { iconKey: "ClipboardList", label: "Long-term\nBrand Value" },
    ],
    rightTitle: "KEY BENEFITS",
    keyBenefits: [
      { iconKey: "e1og", label: "High Brand\nVisibility" },
      { iconKey: "e2og", label: "Targeted\nAudience Reach" },
      { iconKey: "e3og", label: "Increase Brand\nCredibility" },
      { iconKey: "e4og", label: "Drive Website\nTraffic & Leads" },
      { iconKey: "e5og", label: "Stronger ROI\n& Engagement" },
    ],
  },
];

export default function WhyPartner() {
  const data = WHY_PARTNER_DATA[0];

  return (
    <section className="relative pt-4 pb-4 bg-[#fbfcf8] font-inter overflow-hidden">
      {/* Decorative Background Elements */}
      <img 
        src={pleafImg.src} 
        alt="Leaf Decoration" 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-28 md:w-40 object-contain pointer-events-none z-0 opacity-100" 
      />
      <img 
        src={footerRightImg.src} 
        alt="Right Decoration" 
        className="absolute right-0 bottom-0 w-32 md:w-48 object-contain pointer-events-none z-0 opacity-80" 
      />
      
      <SectionContainer className="relative z-10">
        
        {/* Large Single Card */}
        <div 
          className="bg-white rounded-2xl pt-4 pb-6 px-6 md:pt-5 md:pb-8 md:px-8 lg:pt-6 lg:pb-10 lg:px-10"
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Why Partner */}
            <div className="w-full lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg md:text-[20px] font-bold text-[#1b5e20] uppercase font-poppins tracking-tight leading-tight mb-3">
                  {data.titleLine1} <br />
                  {data.titleLine2}
                </h2>
                
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium mb-8">
                  {data.subtitle}
                </p>
              </div>
              
              <div className="flex items-center justify-between w-full mt-auto">
                {data.partnerReasons.map((item, idx) => {
                  const Icon = ICON_MAP[item.iconKey] || Shield;
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center text-center flex-1 px-1">
                        <div className="w-14 h-14 rounded-full bg-[#fbfcf8] border border-[#f4f6f0] flex items-center justify-center mb-2 shadow-sm transition-transform hover:scale-105 duration-200">
                          <Icon className="w-6 h-6 text-[#1b5e20] stroke-[1.75]" />
                        </div>
                        <span className="text-[10px] md:text-[11px] font-bold text-gray-800 uppercase tracking-wide whitespace-pre-line leading-tight font-inter">
                          {item.label}
                        </span>
                      </div>
                      
                      {idx !== data.partnerReasons.length - 1 && (
                        <div className="w-[1px] h-12 bg-gray-200 shrink-0" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            
            {/* Right Column: Key Benefits */}
            <div className="w-full lg:col-span-7 flex flex-col justify-center lg:border-l lg:border-gray-200 lg:pl-10">
              
              <div className="flex items-center gap-4 mb-8 lg:mb-12 w-full">
                <div className="h-[1px] flex-1 bg-gray-300"></div>
                <div className="flex items-center gap-2 px-2">
                  <h2 className="text-lg md:text-xl font-semibold text-[#1b5e20] uppercase font-poppins tracking-wide text-center">
                    {data.rightTitle}
                  </h2>
                </div>
                <div className="h-[1px] flex-1 bg-gray-300"></div>
              </div>
              
              <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-8 relative">
                {data.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center relative w-1/2 lg:w-1/5 px-2">
                    {idx !== data.keyBenefits.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-gray-200"></div>
                    )}
                    
                    <img src={ICON_MAP[benefit.iconKey].src} alt="Benefit" className="w-[70px] h-[70px] object-contain mb-4 transition-transform hover:scale-105 duration-200" />
                    
                    <p className="text-[10px] md:text-[11px] font-bold text-gray-950 uppercase tracking-wide whitespace-pre-line leading-tight font-inter">
                      {benefit.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
        
      </SectionContainer>
    </section>
  );
}

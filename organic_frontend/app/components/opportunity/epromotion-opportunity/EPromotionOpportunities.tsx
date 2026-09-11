"use client";
import React, { useState } from "react";
import { Check, Settings } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import PartnershipPopup from "../../popups/PartnershipPopup";
import leafIcon from "../../../assets/icons/leafs.png";
import z1og from "../../../assets/icons/z1og.png";
import z2og from "../../../assets/icons/z2og.png";
import z3og from "../../../assets/icons/z3og.png";
import z4og from "../../../assets/icons/z4og.png";
import z5og from "../../../assets/icons/z5og.png";
import z6og from "../../../assets/icons/z6og.png";
import z7og from "../../../assets/icons/z7og.png";
import z8og from "../../../assets/icons/z8og.png";
import ebotog from "../../../assets/icons/ebotog.png";
import leafright from "../../../assets/icons/leafright.png";
import sleaf from "../../../assets/icons/sleaf.png";
import p1Img from "../../../assets/icons/P1.png";

const Sparkle = ({ style, color = "#a3e635", shadow }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "18px",
      color,
      textShadow: shadow ? `0 0 8px ${shadow}, 0 0 12px ${shadow}` : undefined,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

export default function EPromotionOpportunities() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleEnquireClick = (title: string) => {
    setSelectedService(title);
    setIsPopupOpen(true);
  };

  const opportunities = [
    {
      iconSrc: z1og.src,
      title: "EMAIL CAMPAIGN BANNER",
      desc: "Place your banner in our pre-show email campaigns sent to our database of industry professionals.",
      bullets: ["High open rates", "Direct brand exposure", "Clickable to your website"]
    },
    {
      iconSrc: z2og.src,
      title: "NEWSLETTER SPONSORSHIP",
      desc: "Feature your banner in our monthly newsletters.",
      bullets: ["Strong brand recall", "Targeted industry reach", "Multiple placements"]
    },
    {
      iconSrc: z3og.src,
      title: "WEBSITE BANNER ADVERTISING",
      desc: "Display your banner on our website across high traffic pages.",
      bullets: ["Prime visibility", "Multiple banner sizes", "Link to your website"]
    },
    {
      iconSrc: z4og.src,
      title: "SOCIAL MEDIA PROMOTION",
      desc: "Get featured across our social media platforms before, during & after the event.",
      bullets: ["Facebook, LinkedIn, Instagram,\nTwitter, YouTube", "High engagement", "Wide reach"]
    },
    {
      iconSrc: z5og.src,
      title: "SPONSOR EMAIL FOOTER/BANNER",
      desc: "Your banner in the footer section of important event emails.",
      bullets: ["Consistent brand visibility", "Cost-effective", "Wide exposure"]
    },
    {
      iconSrc: z6og.src,
      title: "DEDICATED EMAILER",
      desc: "Stand out with a dedicated emailer sent to our verified database.",
      bullets: ["100% brand focus", "High engagement", "Detailed presentation"]
    },
    {
      iconSrc: z7og.src,
      title: "DIGITAL PARTNERSHIP",
      desc: "Associate as our Digital Partner and get premium visibility across all digital channels.",
      bullets: ["Branding on all digital platforms", "Exclusive recognition", "Lead generation benefits"]
    },
    {
      iconSrc: z8og.src,
      title: "WEBINAR & VIRTUAL\nSESSION SPONSORSHIP",
      desc: "Sponsor pre-event webinars and virtual sessions.",
      bullets: ["Thought leadership", "Direct interaction", "Lead capture"]
    }
  ];

  return (
    <>
      <style>{`
        @keyframes sparkleAnim {
          0%   { opacity:0; transform:scale(0.5) translateY(0); }
          40%  { opacity:1; transform:scale(1.4) translateY(-5px); }
          80%  { opacity:0.8; transform:scale(1.1) translateY(-8px); }
          100% { opacity:0; transform:scale(0.5) translateY(-12px); }
        }
      `}</style>
      <section className="pt-8 pb-4 bg-[#f4f7f6] font-inter">
      <SectionContainer>
        
        {/* Section Header */}
        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="h-[2px] w-12 md:w-24 bg-gray-300"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase font-poppins tracking-wide text-center">
            OUR E-PROMOTION OPPORTUNITIES
          </h2>
          <div className="h-[2px] w-12 md:w-24 bg-gray-300"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opp, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-shadow duration-300 relative"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              <img src={leafright.src} alt="" className="absolute top-0 right-0 w-[90px] h-[90px] object-contain pointer-events-none" />
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                {/* Icon Image */}
                <img src={opp.iconSrc} alt={opp.title} className="w-[70px] h-[70px] object-contain mb-5" />
                
                {/* Title */}
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#0a2b16] uppercase font-poppins mb-3 min-h-[40px] flex items-center justify-center tracking-wide leading-snug whitespace-pre-line">
                  {opp.title}
                </h3>
                
                {/* Description */}
                <p className="text-[12px] md:text-[13px] text-black font-semibold mb-5 min-h-[48px] leading-relaxed">
                  {opp.desc}
                </p>
                
                {/* Bullets */}
                <ul className="text-left w-full space-y-2 mb-3 mt-auto">
                  {opp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-[11.5px] text-black font-semibold whitespace-pre-line">
                      <Check className="w-3.5 h-3.5 text-[#d97706] mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Button */}
              <div className="px-6 pb-6 mt-auto">
                <button 
                  onClick={() => handleEnquireClick(opp.title)}
                  className="block w-full py-2.5 bg-[#d97706] hover:bg-[#b45309] text-white text-[11px] font-bold uppercase tracking-wider text-center rounded-md transition-colors"
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>

    {/* Custom Packages Footer */}
    <section className="pt-4 pb-0 bg-white font-inter relative">
      <img src={sleaf.src} alt="Leaf" className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-24 opacity-100 pointer-events-none z-0" />
      <img src={p1Img.src} alt="Right Decor" className="absolute right-0 top-[60%] -translate-y-1/2 w-16 md:w-24 opacity-100 pointer-events-none z-0" />
      <SectionContainer className="relative z-10">
        <div className="relative bg-transparent rounded-xl overflow-hidden p-4 md:p-6 lg:px-10 lg:py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-5 relative z-10 w-full md:w-auto text-center md:text-left">
            <img src={ebotog.src} alt="Custom Packages" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] shrink-0 object-contain" />
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#1b5e20] uppercase font-poppins tracking-wide mb-1">
                CUSTOM PACKAGES AVAILABLE
              </h3>
              <p className="text-[11px] md:text-[13px] text-gray-800 font-bold max-w-xl leading-relaxed">
                We offer customized e-promotion solutions tailored to your marketing goals and budget.
              </p>
            </div>
          </div>
          
          <div className="relative w-full md:w-auto shrink-0 md:mr-6 lg:mr-12 mt-4 md:mt-0">
            <Sparkle color="#a3e635" shadow="#14532d" style={{ top: "-10px", left: "10%", animationDelay: "0.2s" }} />
            <Sparkle color="#a3e635" shadow="#14532d" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
            <Sparkle color="#a3e635" shadow="#14532d" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
            <a 
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-b from-[#255214] to-[#0f2c07] text-white text-[11px] md:text-[12px] font-bold uppercase tracking-wider rounded-full hover:shadow-lg transition-all whitespace-nowrap relative z-10 shadow-md border border-[#3b7325] w-full"
            >
              LET'S PROMOTE TOGETHER
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#a3e635" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-12">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </a>
          </div>
        </div>
      </SectionContainer>
    </section>

    <PartnershipPopup 
      isOpen={isPopupOpen} 
      onClose={() => setIsPopupOpen(false)} 
      initialService={selectedService} 
    />
    </>
  );
}

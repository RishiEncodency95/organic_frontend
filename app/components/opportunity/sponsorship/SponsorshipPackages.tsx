import React from "react";
import { Check } from "lucide-react";

import Image from "next/image";
import s1og from "../../../assets/icons/s1og.png";
import s2og from "../../../assets/icons/s2og.png";
import s3og from "../../../assets/icons/s3og.png";
import s4og from "../../../assets/icons/s4og.png";
import s5og from "../../../assets/icons/s5og.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

export default function SponsorshipPackages() {
  const packages = [
    { 
      name: "PLATINUM\nSPONSOR", 
      type: "(Exclusive)", 
      price: "₹10,00,000", 
      color: "#1e40af", 
      lightBg: "#eff6ff",
      buttonColor: "bg-[#1e40af] hover:bg-[#1e3a8a]",
      iconSrc: s1og,
      features: [
        "Premium logo placement on all event collaterals", 
        "Speaking opportunity (15 minutes)", 
        "Stall space (24 sqm)", 
        "Branding on stage backdrop", 
        "Full page ad in show catalogue", 
        "10 delegate passes", 
        "Social media & website recognition", 
        "Logo on visitor pre-registration emails"
      ] 
    },
    { 
      name: "GOLD\nSPONSOR", 
      type: "(Limited)", 
      price: "₹5,00,000", 
      color: "#d97706", 
      lightBg: "#fffbeb",
      buttonColor: "bg-[#d97706] hover:bg-[#b45309]",
      iconSrc: s2og,
      features: [
        "Logo on all major collaterals", 
        "Speaking opportunity (10 minutes)", 
        "Stall space (18 sqm)", 
        "Half page ad in show catalogue", 
        "6 delegate passes", 
        "Social media & website recognition", 
        "Logo on selected emailers"
      ] 
    },
    { 
      name: "SILVER\nSPONSOR", 
      type: "(Limited)", 
      price: "₹3,00,000", 
      color: "#6b7280", 
      lightBg: "#f9fafb",
      buttonColor: "bg-[#6b7280] hover:bg-[#4b5563]",
      iconSrc: s3og,
      features: [
        "Logo on major collaterals", 
        "Stall space (12 sqm)", 
        "Quarter page ad in show catalogue", 
        "4 delegate passes", 
        "Social media & website recognition"
      ] 
    },
    { 
      name: "ASSOCIATE\nSPONSOR", 
      type: "(Multiple)", 
      price: "₹1,50,000", 
      color: "#2e7d32", 
      lightBg: "#f0fdf4",
      buttonColor: "bg-[#2e7d32] hover:bg-[#1b5e20]",
      iconSrc: s4og,
      features: [
        "Logo on event website", 
        "Stall space (9 sqm)", 
        "Listing in show catalogue", 
        "2 delegate passes", 
        "Social media recognition"
      ] 
    },
    { 
      name: "SUPPORTING\nSPONSOR", 
      type: "(Multiple)", 
      price: "₹75,000", 
      color: "#b45309", 
      lightBg: "#fff7ed",
      buttonColor: "bg-[#b45309] hover:bg-[#92400e]",
      iconSrc: s5og,
      features: [
        "Logo on event website", 
        "Listing in show catalogue", 
        "1 delegate pass"
      ] 
    }
  ];

  return (
    <section className="pt-10 pb-2 bg-white font-inter">
      <SectionContainer>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins mb-1">
            OUR SPONSORSHIP PACKAGES
          </h2>
          <p className="text-sm text-black font-medium leading-relaxed max-w-2xl">
            Choose the package that best suits your brand goals
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl flex flex-col h-full transition-shadow duration-300 relative overflow-hidden"
              style={{ 
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                backgroundColor: pkg.lightBg
              }}
            >
              <div className="p-3 pt-4 flex flex-col items-center text-center relative z-10 pb-1.5 border-b border-gray-100/30">
                {/* Image instead of SVG wrapper */}
                <Image 
                  src={pkg.iconSrc} 
                  alt={pkg.name.replace('\n', ' ')}
                  width={64}
                  height={64}
                  className="w-12 h-12 object-contain mb-1"
                />
                
                <h3 
                  className="text-sm font-bold uppercase font-poppins tracking-wide leading-tight whitespace-pre-line mb-0.5"
                  style={{ color: pkg.color }}
                >
                  {pkg.name}
                </h3>
                <p className="text-[10px] text-gray-600 font-semibold mb-1">{pkg.type}</p>
                <div 
                  className="text-lg font-bold font-poppins"
                  style={{ color: pkg.color }}
                >
                  {pkg.price}
                </div>
              </div>
              
              <div className="px-4 pb-3 pt-1.5 flex-1 flex flex-col">
                <ul className="text-left w-full space-y-2 mb-3 mt-0 font-inter">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[11px] text-slate-800 font-semibold leading-snug">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: pkg.color }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-2">
                  <a 
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-2.5 text-white text-[10px] font-bold uppercase tracking-widest text-center rounded-md transition-colors flex items-center justify-center gap-1 ${pkg.buttonColor}`}
                  >
                    ENQUIRE NOW
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-5 text-center text-xs md:text-sm font-semibold text-[#4B1426]">
          Packages can be customized as per your branding and engagement objectives.
        </div>
      </SectionContainer>
    </section>
  );
}



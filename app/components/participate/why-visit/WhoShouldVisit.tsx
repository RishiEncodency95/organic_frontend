"use client";

import React from "react";
import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import visitBg from "@/app/assets/banner/visit.png";

import u1 from "@/app/assets/icons/u1.png";
import u2 from "@/app/assets/icons/u2.png";
import u3 from "@/app/assets/icons/u3.png";
import u4 from "@/app/assets/icons/u4.png";
import u5 from "@/app/assets/icons/u5.png";
import u6 from "@/app/assets/icons/u6.png";

const cardData = [
  {
    icon: u1,
    title: "BUSINESSES & ENTREPRENEURS",
    desc: "Manufacturers, suppliers, brand owners, exporters and startups looking to expand market reach, launch new products or source premium organic ingredients.",
  },
  {
    icon: u2,
    title: "DISTRIBUTORS & RETAILERS",
    desc: "Wholesalers, importers, retail chains, supermarkets and e-commerce buyers seeking certified organic products, exclusive partnerships and profitable trade deals.",
  },
  {
    icon: u3,
    title: "ORGANIC FARMERS & PRODUCERS",
    desc: "Farmers, FPOs, agricultural cooperatives and producers looking for high-yield organic inputs, modern agri-tech, direct buyer linkages and value addition solutions.",
  },
  {
    icon: u4,
    title: "HEALTH & WELLNESS PROFESSIONALS",
    desc: "Nutritionists, dietitians, ayurvedic practitioners, wellness experts and health therapists exploring authentic natural, herbal and organic wellness solutions.",
  },
  {
    icon: u5,
    title: "INVESTORS & POLICY MAKERS",
    desc: "Venture capitalists, angel investors, policy makers, government officials and advisors keen to back sustainable green ventures and strengthen the ecosystem.",
  },
  {
    icon: u6,
    title: "MEDIA & CONTENT CREATORS",
    desc: "Journalists, bloggers, digital content creators and influencers covering emerging sustainable organic trends, innovations and inspiring success stories.",
  },
];

const WhoShouldVisit = () => {
  return (
    <section
      className="w-full pt-1 sm:pt-2 pb-6 md:pb-8 font-inter relative overflow-hidden bg-no-repeat"
      style={{
        backgroundImage: `url(${visitBg.src})`,
        backgroundPosition: "center top",
        backgroundSize: "95% 42%",
      }}
    >
      <SectionContainer>
        <div className="relative w-full pt-2">
          
          {/* TOP SECTION: TITLE + SUBTITLE */}
          <div className="relative z-10 mb-10 md:mb-14 max-w-3xl pl-4 sm:pl-8 md:pl-12">
            <h2
              className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[48px] lg:text-[52px] leading-[1.05] uppercase mb-2.5"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
            >
              <span className="text-[#001810] block">WHO SHOULD</span>
              <span className="text-[#4B1426] block">VISIT &amp; BENEFIT?</span>
            </h2>

            <div className="flex items-center gap-2 text-[#1b5e20] font-poppins font-semibold text-base sm:text-lg md:text-xl tracking-widest uppercase mb-2.5">
              <Leaf className="w-5 h-5 text-[#1b5e20] shrink-0" />
              <span>ONE PLATFORM. UNLIMITED OPPORTUNITIES.</span>
            </div>

            <p className="font-inter text-sm sm:text-base md:text-[15.5px] font-bold text-[#131730] leading-relaxed max-w-2xl">
              Bharat Organic Expo brings together a diverse ecosystem of industry leaders, innovators, buyers, and sustainable farming pioneers driving India’s organic revolution.
            </p>
          </div>

          {/* MIDDLE SECTION: 6 COLUMNS WITH CUSTOM U1-U6 ICONS & DIVIDERS */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-6 mt-16 md:mt-24 lg:mt-32 mb-10 md:mb-12">
            {cardData.map((card, idx) => {
              return (
                <div
                  key={idx}
                  className={`px-3 py-2 flex flex-col items-center text-center group ${
                    idx !== cardData.length - 1 ? "lg:border-r lg:border-gray-400/50" : ""
                  }`}
                >
                  <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <img
                      src={card.icon.src}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-poppins font-semibold text-[12px] md:text-[13px] text-[#001810] uppercase leading-tight mb-2 tracking-wide min-h-[34px] flex items-center justify-center">
                    {card.title}
                  </h3>
                  <p className="font-inter text-[11px] md:text-[12px] text-slate-800 font-semibold leading-snug">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* BOTTOM SECTION: BANNER BAR */}
          <div className="relative z-10 bg-[#eae4d3]/95 backdrop-blur-xs border border-[#d8cdb8] rounded-2xl p-4 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-5">
            
            {/* Left Brand Area */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#1b5e20] shrink-0 border border-[#d8cdb8]">
                <Leaf className="w-7 h-7 fill-[#1b5e20]" />
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-base sm:text-lg md:text-xl text-[#0f381e] uppercase tracking-tight leading-tight">
                  BE PART OF INDIA’S
                </h4>
                <h4 className="font-poppins font-semibold text-base sm:text-lg md:text-xl text-[#0f381e] uppercase tracking-tight leading-tight">
                  ORGANIC MOVEMENT!
                </h4>
              </div>
            </div>

            {/* Middle Divider & Text */}
            <div className="hidden lg:flex items-center gap-6 border-l border-gray-400/40 pl-6">
              <div className="font-inter text-xs sm:text-sm text-gray-800">
                <p className="font-semibold text-[#0f381e] mb-0.5">
                  Connect. Collaborate. Innovate. Grow.
                </p>
                <p className="font-semibold text-gray-600">
                  The future is organic. Let’s build it together.
                </p>
              </div>
            </div>

            {/* Right CTA Button */}
            <Link
              href="/registration/visitor-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f381e] hover:bg-[#184e2b] text-white px-6 py-3.5 rounded-xl font-poppins font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all shrink-0 active:scale-95 group"
            >
              <Leaf className="w-4 h-4 text-lime-300" />
              <span>JOIN THE MOVEMENT. CREATE A BETTER TOMORROW.</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default WhoShouldVisit;

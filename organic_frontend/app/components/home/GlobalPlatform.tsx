"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Phone, Building2, Users, Handshake, TrendingUp } from "lucide-react";
import fromIndiaBg from "../../assets/home/fromIndiaBg.png";
import logo from "../../assets/logos/longlogo1.png";

import form1 from "../../assets/home/form1.png";
import form2 from "../../assets/home/form2.png";
import form3 from "../../assets/home/form3.png";
import form4 from "../../assets/home/form4.png";

const staticData = {
  badge: "FROM INDIA TO THE WORLD",
  title: {
    line1: "From a National Expo",
    highlight: "Global Platform"
  },
  description: "Bharat Organic Expo is India's most influential platform connecting organic products, people and possibilities.",
  listItems: [
    "International Exhibitors & Global Brands",
    "Buyers, Distributors & Importers",
    "Research & Innovation | Startups",
    "Investors, Financial Institutions",
    "Government Bodies, Embassies & Policy Makers"
  ],
  cards: [
    {
      iconSrc: form1,
      iconAlt: "Global Connections",
      iconWidth: 90,
      iconHeight: 90,
      title: "GLOBAL\nCONNECTIONS",
      desc: "Connect with global leaders in organic trade and sustainable business. Expand your network across international markets to build long-term, profitable relationships.",
      bgClass: "bg-gradient-to-b from-white to-blue-50/80",
      borderClass: "border-blue-200"
    },
    {
      iconSrc: form2,
      iconAlt: "International Alliances",
      iconWidth: 120,
      iconHeight: 120,
      title: "INTERNATIONAL\nALLIANCES",
      desc: "Forge strategic alliances with prominent international organizations, trade bodies, and embassies to unlock massive cross-border trade opportunities.",
      bgClass: "bg-gradient-to-b from-white to-orange-50/80",
      borderClass: "border-orange-200"
    },
    {
      iconSrc: form3,
      iconAlt: "Policy & Knowledge",
      iconWidth: 120,
      iconHeight: 120,
      title: "POLICY &\nKNOWLEDGE",
      desc: "Engage directly with global policy makers, researchers, and leaders driving regulatory changes and sustainability standards in the organic ecosystem.",
      bgClass: "bg-gradient-to-b from-white to-green-50/80",
      borderClass: "border-green-200"
    },
    {
      iconSrc: form4,
      iconAlt: "Investment & Innovation",
      iconWidth: 130,
      iconHeight: 130,
      title: "INVESTMENT &\nINNOVATION",
      desc: "Discover high-growth investment opportunities and explore cutting-edge, innovative solutions presented by dynamic startups in the wellness industry.",
      bgClass: "bg-gradient-to-b from-white to-purple-50/80",
      borderClass: "border-purple-200"
    }
  ]
};

const GlobalPlatform = () => {
  return (
    <section className="relative w-full flex items-center bg-white py-2 md:py-6 px-5 md:px-14 overflow-hidden font-inter border-y border-green-100">
      {/* Background Image Map/Design */}
      <div className="absolute inset-0 z-0">
        <Image
          src={fromIndiaBg}
          alt="Background map pattern"
          fill
          className="w-full h-full object-fill opacity-20 mix-blend-multiply"
          priority
        />
      </div>

      <div className="w-full relative z-10 flex flex-col xl:flex-row justify-between gap-4 lg:gap-10 xl:gap-4 items-center">

        {/* Left Content */}
        <div className="w-full xl:w-[35%] flex flex-col items-center xl:items-start text-center xl:text-left relative z-20">
          {/* Clean Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f8f9fa] border border-[#e2eee4] mb-5 shadow-sm hover:shadow-md transition-shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f58634] animate-pulse"></span>
            <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-[#3b8c2a]">
              {staticData.badge}
            </span>
          </div>

          <h2 className="text-[#1a3821] text-[22px] md:text-[26px] lg:text-[32px] leading-[1.2] md:leading-[1.2] font-semibold mb-4 font-poppins tracking-tight text-center xl:text-left">
            {staticData.title.line1} to a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58634] to-[#f58634]/80">{staticData.title.highlight}</span>
          </h2>

          <p className="text-slate-600 text-[15px] md:text-[16px] leading-[1.5] mb-3 max-w-[420px] font-medium text-center xl:text-left mx-auto xl:mx-0">
            {staticData.description}
          </p>

          <div className="flex flex-col gap-2 w-full sm:w-fit mx-auto xl:mx-0 px-2 sm:px-0">
            {staticData.listItems.map((item, index) => (
              <div key={index} className="flex items-start sm:items-center gap-3 group cursor-default text-left">
                <div className="w-8 h-8 rounded-full bg-[#3b8c2a]/10 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3b8c2a]/20">
                  <Leaf size={12} className="text-[#3b8c2a]" strokeWidth={2} />
                </div>
                <span className="text-slate-700 font-semibold text-[13.5px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-snug transition-colors duration-300 group-hover:text-[#1a3821]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center/Right Content - Cards */}
        <div className="w-full xl:w-[65%] flex flex-col items-center relative ">



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-2 w-full">
            {staticData.cards.map((card, index) => (
              <div key={index} className={`${card.bgClass || 'bg-white'} ${card.borderClass || 'border-slate-200'} border-2 rounded-xl md:rounded-2xl p-3 md:px-5 md:py-6 shadow-sm md:shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-row md:flex-col items-center md:items-start lg:items-center justify-start text-left md:text-center transition-all hover:-translate-y-1 md:hover:-translate-y-3 hover:shadow-md md:hover:shadow-[0_20px_50px_rgba(59,140,42,0.15)] duration-300 group relative overflow-hidden z-10 gap-3 md:gap-0`}>

                {/* Subtle top border highlight on hover (Hidden on mobile for cleaner look, or just kept) */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#3b8c2a] to-[#f58634] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></div>
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#3b8c2a] to-[#f58634] opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden"></div>

                <div className="h-[60px] w-[60px] md:h-[90px] md:w-full flex-shrink-0 flex items-center justify-center relative transform group-hover:scale-105 transition-transform duration-500 md:mt-2 md:mb-2 bg-white/40 md:bg-transparent rounded-lg p-1 md:p-0">
                  <Image src={card.iconSrc} alt={card.iconAlt} width={card.iconWidth} height={card.iconHeight} className="object-contain w-full h-full" />
                </div>

                <div className="flex flex-col flex-1 min-w-0 md:items-center lg:items-center">
                  <h3 className="text-[#1a3821] font-bold text-[13px] sm:text-[14px] md:text-[16px] leading-[1.2] md:leading-[1.3] uppercase tracking-wide whitespace-normal md:whitespace-pre-line mb-0.5 md:mb-3 truncate md:overflow-visible md:whitespace-normal">
                    <span className="md:hidden">{card.title.replace('\n', ' ')}</span>
                    <span className="hidden md:block">{card.title}</span>
                  </h3>

                  <div className="hidden md:block w-8 h-[2px] bg-[#f58634] rounded-full mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-[#3b8c2a]"></div>

                  <p className="text-slate-600 text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] md:leading-[1.6] font-medium line-clamp-2 md:line-clamp-none">
                    {card.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default GlobalPlatform;

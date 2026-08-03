"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Phone, Building2, Users, Handshake, TrendingUp } from "lucide-react";
import fromIndiaBg from "../../assets/home/fromIndiaBg.png";
import logo from "../../assets/logos/navbarlogo1.png";

const listItems = [
  "International Exhibitors & Global Brands",
  "Buyers, Distributors & Importers",
  "Research & Innovation | Startups",
  "Investors, Financial Institutions",
  "Government Bodies, Embassies & Policy Makers"
];

const cards = [
  {
    icon: (
      <div className="relative">
        <Users size={38} className="text-[#3b8c2a] mb-1" strokeWidth={1.5} />
        <div className="absolute -bottom-2 -left-1 flex items-center justify-center w-full gap-1">
           <Leaf className="text-[#f58634] fill-[#f58634] -scale-x-100 rotate-45" size={20} />
           <Leaf className="text-[#f58634] fill-[#f58634] -rotate-45" size={20} />
        </div>
      </div>
    ),
    title: "GLOBAL\nCONNECTIONS",
    desc: "Connect with global leaders in organic trade & sustainable business."
  },
  {
    icon: <Handshake size={56} className="text-[#3b8c2a]" strokeWidth={1.2} color="#f58634" fill="transparent" />,
    title: "INTERNATIONAL\nALLIANCES",
    desc: "Build strategic alliances with international organizations."
  },
  {
    icon: (
      <div className="relative">
        <Building2 size={46} className="text-[#3b8c2a]" strokeWidth={1.5} />
        <Leaf className="absolute -top-3 -right-2 text-[#f58634] fill-[#f58634] -rotate-12" size={16} />
      </div>
    ),
    title: "POLICY &\nKNOWLEDGE",
    desc: "Engage with policy makers & knowledge leaders driving change."
  },
  {
    icon: (
      <div className="flex items-end gap-1 relative">
         <TrendingUp size={46} className="text-[#f58634]" strokeWidth={1.5} />
         <div className="flex items-end gap-1 pb-1">
            <div className="w-2.5 h-6 border-2 border-[#3b8c2a] rounded-sm"></div>
            <div className="w-2.5 h-10 border-2 border-[#3b8c2a] rounded-sm relative">
               <Leaf className="absolute -top-5 -right-3 text-[#3b8c2a] stroke-2" size={16} />
               <Leaf className="absolute -top-6 left-0 text-[#3b8c2a] stroke-2" size={16} />
            </div>
         </div>
      </div>
    ),
    title: "INVESTMENT &\nINNOVATION",
    desc: "Explore investment opportunities & promote innovative solutions."
  }
];

const GlobalPlatform = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center bg-[#f7faf6] py-16 lg:py-24 overflow-hidden font-inter border-y border-green-100">
      {/* Background Image Map/Design */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={fromIndiaBg} 
          alt="Background map pattern" 
          fill 
          className="object-cover object-center opacity-80 mix-blend-multiply" 
          priority
        />
      </div>

      <div className="max-w-[1536px] mx-auto w-full px-4 sm:px-6 lg:px-11 relative z-10 flex flex-col xl:flex-row gap-10 xl:gap-6 items-center">
        
        {/* Left Content */}
        <div className="w-full xl:w-[40%] flex flex-col items-start pr-0 xl:pr-10">
          <p className="text-[13px] font-bold tracking-widest uppercase mb-3 text-[#3b8c2a]">
            FROM INDIA TO <span className="text-[#f58634]">THE WORLD</span>
          </p>
          
          <h2 className="text-[#1a3821] text-4xl lg:text-[46px] leading-[1.1] font-bold mb-4 font-serif">
            From a National Expo<br />
            to a <span className="text-[#f58634]">Global Platform</span>
          </h2>
          
          <p className="text-[#475569] text-[15px] leading-relaxed mb-8 max-w-[450px]">
            Bharat Organic Expo is India's most influential platform connecting organic products, people and possibilities.
          </p>
          
          <div className="flex flex-col gap-4">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#e2eee4]">
                  <Leaf size={12} className="text-[#3b8c2a] fill-[#3b8c2a]" strokeWidth={1} />
                </div>
                <span className="text-[#334155] font-semibold text-[14px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center/Right Content - Cards */}
        <div className="w-full xl:w-[55%] flex flex-col items-center xl:items-start pt-8 xl:pt-0 relative">
          
          {/* Logo */}
          <div className="absolute -top-24 xl:-top-32 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-10 z-20">
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-2 px-4 shadow-sm border border-white/50">
               <Image 
                 src={logo} 
                 alt="Bharat Organic Expo Logo" 
                 width={240} 
                 height={80} 
                 className="object-contain"
               />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-10 xl:mt-4">
            {cards.map((card, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-[0_8px_30px_rgba(59,140,42,0.06)] border border-[#eef5f0] flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="h-20 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-[#154726] font-bold text-[13px] leading-snug tracking-wide whitespace-pre-line mb-3 h-10 flex items-center justify-center">
                  {card.title}
                </h3>
                
                <div className="flex items-center justify-center w-full mb-4">
                   <div className="w-12 h-1 bg-[#3b8c2a] rounded-full relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#a3d289]"></div>
                   </div>
                </div>

                <p className="text-[#64748b] text-[12px] leading-[1.6] font-medium px-1">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Social Bar */}
        <div className="absolute right-2 xl:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
           <Link href="#" className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
           </Link>
           <Link href="#" className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
           </Link>
           <Link href="#" className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
           </Link>
           <Link href="#" className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
           </Link>
           <Link href="#" className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
           </Link>
           <Link href="#" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
             <Phone size={18} fill="currentColor" strokeWidth={0} />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default GlobalPlatform;

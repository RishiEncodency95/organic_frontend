"use client";
import React from "react";
import img21 from "../../assets/icons/21og.png";
import img22 from "../../assets/icons/22og.png";
import img23 from "../../assets/icons/23og.png";
import img24 from "../../assets/icons/24og.png";
import img25 from "../../assets/icons/25og.png";
import img26 from "../../assets/icons/26og.png";
import img27 from "../../assets/icons/27og.png";
import img28 from "../../assets/icons/28og.png";
import img29 from "../../assets/icons/29og.png";
import leafsImg from "../../assets/icons/leafs.png";
import footerRightImg from "../../assets/icons/footerright.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

export default function WhoCanParticipate() {
  const cards = [
    {
      icon: <img src={img21.src} alt="Importers & Exporters" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "Importers & Exporters",
      desc: "Explore products, sourcing opportunities and global partnerships.",
    },
    {
      icon: <img src={img22.src} alt="Distributors & Wholesalers" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "Distributors & Wholesalers",
      desc: "Discover new brands and expand product portfolios.",
    },
    {
      icon: <img src={img23.src} alt="Retail Chains & Supermarkets" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "Retail Chains & Supermarkets",
      desc: "Source organic, natural, wellness and sustainable products.",
    },
    {
      icon: <img src={img24.src} alt="E-commerce & Marketplace Buyers" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "E-commerce & Marketplace Buyers",
      desc: "Discover emerging and established consumer brands.",
    },
    {
      icon: <img src={img25.src} alt="Institutional Buyers" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "Institutional Buyers",
      desc: "Connect with manufacturers and suppliers for institutional procurement requirements.",
    },
    {
      icon: <img src={img26.src} alt="Hotels, Restaurants & HoReCa" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "Hotels, Restaurants & HoReCa",
      desc: "Source food, beverages, wellness and sustainable products.",
    },
    {
      icon: <img src={img27.src} alt="Manufacturers & Private Label Buyers" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "Manufacturers & Private Label Buyers",
      desc: "Explore contract manufacturing, ingredients, private-label opportunities.",
    },
    {
      icon: <img src={img28.src} alt="Corporate Procurement Teams" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "Corporate Procurement Teams",
      desc: "Identify relevant products, suppliers and sustainable sourcing solutions.",
    },
    {
      icon: <img src={img29.src} alt="International Trade Delegations" className="w-12 h-12 object-contain mx-auto mb-3" />,
      title: "International Trade Delegations",
      desc: "Explore Indian suppliers, manufacturers and potential trade partnerships.",
    },
  ];

  return (
    <section id="who-can-participate" className="pt-8 pb-16 bg-[#f9f9f9] font-inter relative overflow-hidden scroll-mt-28">
      {/* Decorative Left Image */}
      <div className="absolute left-0 top-[20%] pointer-events-none opacity-100 w-32 md:w-48 lg:w-64 z-0">
        <img src={leafsImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain -translate-x-1/4" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="text-center mb-6 flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block mb-2">
            WHO CAN PARTICIPATE AS A BUYER?
          </h2>
          <p className="text-xs font-bold text-gray-800">
            Meet Suppliers Across the Complete Organic Industry Ecosystem
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4 flex flex-col gap-4">
            {/* First Row: 5 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-inter">
              {cards.slice(0, 5).map((card, i) => (
                <div 
                  key={i} 
                  className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow flex flex-col items-center"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                >
                  {card.icon}
                  <h3 className="text-[12px] font-semibold text-[#1b5e20] mb-2 leading-tight font-poppins">{card.title}</h3>
                  <p className="text-[11px] text-slate-800 font-semibold leading-snug">{card.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Second Row: 4 Cards (centered, slightly wider than top row but less than full 25%) */}
            <div className="flex flex-wrap justify-center gap-4 font-inter">
              {cards.slice(5).map((card, i) => (
                <div 
                  key={i + 5} 
                  className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow w-full sm:w-[calc(50%-0.5rem)] lg:w-[22.5%] flex flex-col items-center"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                >
                  {card.icon}
                  <h3 className="text-[12px] font-semibold text-[#1b5e20] mb-2 leading-tight font-poppins">{card.title}</h3>
                  <p className="text-[11px] text-slate-800 font-semibold leading-snug">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/4 bg-[#0d2a1b] rounded-xl p-8 flex flex-col justify-center text-left relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-40 w-40 md:w-56 z-0">
              <img src={footerRightImg.src} alt="Decoration" className="w-full h-auto object-contain translate-x-4 translate-y-4" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white leading-tight mb-6">
                MEET.<br/>CONNECT.<br/>COLLABORATE.<br/>GROW.
              </h3>
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                Be part of India&apos;s leading B2B networking platform for the organic industry.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

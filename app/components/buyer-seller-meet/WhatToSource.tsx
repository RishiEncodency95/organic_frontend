"use client";
import React from "react";
import img1 from "../../assets/image/11og.png";
import img2 from "../../assets/image/12og.png";
import img3 from "../../assets/image/13og.png";
import img4 from "../../assets/image/14og.png";
import img5 from "../../assets/image/15og.png";
import img6 from "../../assets/image/16og.png";
import footerRightImg from "../../assets/icons/footerright.png";

import SectionContainer from "@/app/components/layout/SectionContainer";

export default function WhatToSource() {
  const cards = [
    {
      img: img1.src,
      title: "ORGANIC FOOD & NUTRITION",
      list: ["Food", "Beverages", "Nutraceuticals", "Functional Nutrition"],
      color: "text-[#1b5e20]",
    },
    {
      img: img2.src,
      title: "AYUSH, HERBAL\n& WELLNESS",
      list: ["Ayurveda", "Herbal", "Wellness", "Traditional Health Solutions"],
      color: "text-[#5d4037]",
    },
    {
      img: img3.src,
      title: "ORGANIC AGRICULTURE",
      list: ["Farming", "Inputs", "Seeds", "Bio-Inputs"],
      color: "text-[#2e7d32]",
    },
    {
      img: img4.src,
      title: "NATURAL LIVING &\nPERSONAL CARE",
      list: ["Beauty", "Personal Care", "Natural Lifestyle Products"],
      color: "text-[#6a1b9a]",
    },
    {
      img: img5.src,
      title: "GREENTECH &\nSUSTAINABILITY",
      list: ["AgriTech", "GreenTech", "Sustainable Packaging", "Processing"],
      color: "text-[#00695c]",
    },
    {
      img: img6.src,
      title: "TRADE, CERTIFICATION\n& GLOBAL BUSINESS",
      list: ["Certification", "Export", "Import", "Trade & Business Services"],
      color: "text-[#e65100]",
    },
  ];

  return (
    <section className="pt-8 pb-8 bg-white font-inter relative overflow-hidden">
      {/* Decorative Right Image */}
      <div className="absolute right-0 top-6 pointer-events-none z-0 w-48 md:w-64 lg:w-80 opacity-60">
        <img src={footerRightImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain translate-x-1/4" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="text-center mb-6 flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block mb-0">
            WHAT CAN BUYERS SOURCE?
          </h2>
          <p className="text-sm font-bold text-gray-800 mt-0">
            6 Industry Segments. One Business Platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl overflow-hidden group"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              <div className="h-40 overflow-hidden relative">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4 relative">
                <h3 className={`text-[13px] font-semibold ${card.color} mb-4 mt-0 h-auto min-h-[2rem] flex items-center uppercase text-center justify-center leading-tight whitespace-pre-line font-poppins`}>{card.title}</h3>
                <ul className="space-y-2 font-inter">
                  {card.list.map((li, idx) => (
                    <li key={idx} className="text-[12px] text-slate-800 font-semibold flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

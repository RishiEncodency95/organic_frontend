"use client";
import React from "react";
import img1 from "../../assets/image/11og.webp";
import img2 from "../../assets/image/12og.webp";
import img3 from "../../assets/image/13og.webp";
import img4 from "../../assets/image/14og.webp";
import img5 from "../../assets/image/15og.webp";
import img6 from "../../assets/image/16og.webp";
import footerRightImg from "../../assets/icons/footerright.png";

import SectionContainer from "@/app/components/layout/SectionContainer";
import { WHAT_TO_SOURCE_DATA } from "@/app/data/buyerSellerMeetData";

const IMG_MAP: Record<string, string> = {
  img1: img1.src,
  img2: img2.src,
  img3: img3.src,
  img4: img4.src,
  img5: img5.src,
  img6: img6.src,
};

export default function WhatToSource() {
  return (
    <section className="pt-8 pb-8 bg-white font-inter relative overflow-hidden">
      {/* Decorative Right Image */}
      <div className="absolute right-0 top-6 pointer-events-none z-0 w-48 md:w-64 lg:w-80 opacity-60">
        <img src={footerRightImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain translate-x-1/4" />
      </div>

      <SectionContainer className="relative z-10">
        {WHAT_TO_SOURCE_DATA.map((data) => (
          <React.Fragment key={data.id}>
            <div className="text-center mb-6 flex flex-col items-center justify-center">
              <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block mb-0">
                {data.title}
              </h2>
              <p className="text-sm font-bold text-gray-800 mt-0">
                {data.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.cards.map((card, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl overflow-hidden group"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                >
                  <div className="h-40 overflow-hidden relative">
                    <img src={IMG_MAP[card.img] || card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
          </React.Fragment>
        ))}
      </SectionContainer>
    </section>
  );
}

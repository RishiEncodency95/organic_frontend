"use client";
import React from "react";
import p1og from "@/app/assets/icons/p1og.png";
import p2og from "@/app/assets/icons/p2og.png";
import p3og from "@/app/assets/icons/p3og.png";
import p4og from "@/app/assets/icons/p4og.png";
import p5og from "@/app/assets/icons/p5og.png";
import p7og from "@/app/assets/icons/p7og.png";
import pleaf from "@/app/assets/icons/pleaf.png";

export default function KeyBenefits() {
  const benefits = [
    {
      image: p1og,
      title: "Featured as Official\nHotel & Stay Partner"
    },
    {
      image: p2og,
      title: "Access to Delegates,\nExhibitors & Visitors"
    },
    {
      image: p3og,
      title: "High Brand Exposure\nAcross All Platforms"
    },
    {
      image: p4og,
      title: "Long-term Collaboration\nOpportunities"
    },
    {
      image: p5og,
      title: "Enhance Brand\nCredibility"
    },
    {
      image: p7og,
      title: "Preferred Choice for\nEvent Accommodations"
    }
  ];

  return (
    <section className="pt-6 pb-0 bg-white relative overflow-hidden">
      <img 
        src={pleaf.src} 
        alt="Leaf Decoration" 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-24 object-contain pointer-events-none z-0 opacity-100" 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-10 flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins">
            KEY BENEFITS OF PARTNERING
          </h2>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-8 relative">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center w-1/2 lg:w-1/6 px-4 ${
                idx === benefits.length - 1
                  ? "border-r-0"
                  : idx % 2 === 0
                    ? "border-r border-gray-300"
                    : "border-r-0 lg:border-r lg:border-gray-300"
              }`}
            >
              <img 
                src={item.image.src} 
                alt="" 
                className="w-[80px] h-[80px] object-contain mb-4 transition-transform hover:scale-105 duration-200" 
              />
              <p className="text-[10px] md:text-[11px] font-bold text-gray-950 uppercase tracking-wide whitespace-pre-line leading-tight font-inter">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

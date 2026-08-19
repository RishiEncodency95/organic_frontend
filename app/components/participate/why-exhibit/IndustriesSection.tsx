"use client";
import React from "react";
import {
  Leaf,
  Sprout,
  Flower2,
  Pill,
  Sparkles,
  PackageCheck,
  Recycle,
  Store,
  ShieldCheck,
  Plane,
} from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

import leafog from "@/app/assets/icons/leafog.png";

const getImgSrc = (src: any): string => (typeof src === "string" ? src : src?.src || src);

const industries = [
  { icon: Leaf,         line1: "Organic",          line2: "Food & Grains" },
  { icon: Sprout,       line1: "Agriculture &",    line2: "Agri-inputs" },
  { icon: Flower2,      line1: "Ayush &",          line2: "Herbal" },
  { icon: Pill,         line1: "Nutraceuticals",   line2: "& Supplements" },
  { icon: Sparkles,     line1: "Natural &",        line2: "Organic Cosmetics" },
  { icon: PackageCheck, line1: "Sustainable",      line2: "Packaging" },
  { icon: Recycle,      line1: "Green",            line2: "Technology" },
  { icon: Store,        line1: "Retail &",         line2: "E-commerce" },
  { icon: ShieldCheck,  line1: "Certifications",   line2: "& Compliances" },
  { icon: Plane,        line1: "Export &",         line2: "Global Trade" },
];

const IndustriesSection = () => (
  <section className="pt-4 pb-8 bg-white relative overflow-hidden font-inter">
    {/* Decorative Leaf Image on Far Left of Section */}
    <img
      loading="lazy"
      decoding="async"
      src={getImgSrc(leafog)}
      alt="Decorative Leaf"
      className="absolute left-0 top-1/2 -translate-y-1/2 w-20 md:w-28 lg:w-32 h-auto object-contain pointer-events-none select-none z-0 opacity-100"
    />

    <SectionContainer className="relative z-10">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-[2px] bg-[#1b5e20]" />
          <h2 className="text-[#1b5e20] font-semibold text-lg md:text-xl uppercase tracking-[0.08em] font-poppins">
            Industries We Serve
          </h2>
          <span className="w-12 h-[2px] bg-[#1b5e20]" />
        </div>
      </div>

      {/* 5 in top row, 5 in bottom row (lg:grid-cols-5) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {industries.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center text-center group p-4 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.11)]"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #e8f8f2 55%, #ddf5e8 100%)",
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                border: "1px solid #e8edf2",
              }}
            >
              <div className="mb-2.5 transition-transform group-hover:scale-110">
                <IconComponent className="w-8 h-8 text-[#c2410c] stroke-[1.75]" />
              </div>
              <div className="flex flex-col items-center justify-center min-h-[32px] w-full px-1">
                <span className="text-[12px] md:text-[13px] font-semibold text-[#1b5e20] uppercase leading-tight tracking-tight whitespace-normal font-poppins">{item.line1}</span>
                <span className="text-[12px] md:text-[13px] font-semibold text-[#1b5e20] uppercase leading-tight tracking-tight whitespace-normal font-poppins">{item.line2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  </section>
);

export default IndustriesSection;

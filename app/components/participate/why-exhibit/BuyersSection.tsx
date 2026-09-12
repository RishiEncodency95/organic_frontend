"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

import img1 from "@/app/assets/image/1og.webp";
import img2 from "@/app/assets/image/2og.webp";
import img3 from "@/app/assets/image/3og.webp";

const getImgSrc = (src: any): string => (typeof src === "string" ? src : src?.src || src);

// Mock API response / JSON array of objects
const BUYERS_SECTION_DATA = [
  {
    id: "buyers-section-1",
    titlePrefix: "WHO SHOULD ",
    titleHighlight: "ATTEND?",
    attendees: [
      { id: "att-1", text: "Hospitals, Clinics & Healthcare Providers" },
      { id: "att-2", text: "Importers, Exporters & Distributors" },
      { id: "att-3", text: "Pharmacies & Retail Chains" },
      { id: "att-4", text: "Wellness Centres & Spa Chains" },
      { id: "att-5", text: "E-commerce & Online Retailers" },
      { id: "att-6", text: "Government & Institutional Buyers" },
      { id: "att-7", text: "Investors & Business Partners" },
      { id: "att-8", text: "Researchers & Academicians" },
    ],
    button: {
      label: "Book Your Stall",
      href: "/registration/book-a-stand",
      sparkles: [
        { color: "#ffdd00", shadow: "#ffa500", style: { top: "-12px", left: "10%", animationDelay: "0s" } },
        { color: "#ffdd00", shadow: "#ffa500", style: { top: "-15px", left: "50%", animationDelay: "0.4s" } },
        { color: "#ffdd00", shadow: "#ffa500", style: { top: "-10px", right: "10%", animationDelay: "0.8s" } },
      ],
    },
    visuals: [
      { id: "v1", img: getImgSrc(img1), label: "Organic Buyers Meet" },
      { id: "v2", img: getImgSrc(img2), label: "B2B Networking" },
      { id: "v3", img: getImgSrc(img3), label: "Business Deals" },
    ],
  },
];

const Sparkle = ({ style, color = "#ffdd00", shadow = "#ffa500" }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "12px",
      color,
      textShadow: `0 0 6px ${shadow}, 0 0 12px ${shadow}`,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const BuyersSection = () => (
  <section className="py-6 bg-[#f8fbfa] overflow-hidden relative font-inter">
    {BUYERS_SECTION_DATA.map((section) => (
      <SectionContainer key={section.id}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <h2
              className="text-[18px] md:text-2xl font-semibold mb-3 text-center lg:text-left font-poppins uppercase whitespace-nowrap"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4), 0 0 10px rgba(27,94,32,0.2)" }}
            >
              <span className="text-[#1b5e20]">{section.titlePrefix}</span>
              <span className="text-[#c2410c]">{section.titleHighlight}</span>
            </h2>

            <div className="space-y-2 mb-5">
              {section.attendees.map((item) => (
                <div key={item.id} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#1b5e20] flex items-center justify-center shrink-0 shadow-sm">
                    <Check size={11} className="text-white" strokeWidth={3.5} />
                  </div>
                  <span className="text-[#08083c] font-semibold text-xs md:text-sm font-inter">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Golden Hero Style Button */}
            <div className="relative w-fit mx-auto lg:mx-0">
              {section.button.sparkles.map((sp, idx) => (
                <Sparkle key={idx} color={sp.color} shadow={sp.shadow} style={sp.style} />
              ))}
              <a
                href={section.button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="golden-btn-hero text-[#050A1A] px-6 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest flex items-center gap-2 transition-all active:scale-95 shadow-2xl relative z-10 group"
              >
                {section.button.label}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Visual Images */}
          <div className="lg:col-span-7 pr-2 md:pr-4">
            <div className="flex gap-2.5 h-[260px] md:h-[320px] w-full">
              {section.visuals.map((item) => (
                <div
                  key={item.id}
                  className="flex-1 overflow-hidden border-[3px] border-white shadow-xl transform -skew-x-12 rounded-[20px] relative group"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transform skew-x-12 scale-125 group-hover:scale-135 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-0 right-0 text-center px-2 transform skew-x-12">
                    <span className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-tight leading-tight font-inter drop-shadow">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    ))}
  </section>
);

export default BuyersSection;



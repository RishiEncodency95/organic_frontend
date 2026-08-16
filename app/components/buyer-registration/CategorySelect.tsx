"use client";
import React from "react";
import domBg from "../../assets/image/domog.png";
import intBg from "../../assets/image/dom1og.png";
import domIcon from "../../assets/icons/domog.png";
import intIcon from "../../assets/icons/dom2og.png";
import { ArrowRight } from "lucide-react";

const Sparkle = ({
  style,
  color = "#F2B40E",
  shadow,
}: {
  style?: React.CSSProperties;
  color?: string;
  shadow?: string;
}) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "13px",
      color,
      textShadow: shadow ? `0 0 6px ${shadow}` : undefined,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

interface CategorySelectProps {
  buyerType: "domestic" | "international" | null;
  onChange: (type: "domestic" | "international") => void;
}

export default function CategorySelect({ buyerType, onChange }: CategorySelectProps) {
  return (
    <section id="select-category" className="w-full pt-8 pb-4 px-4 md:px-8 bg-[#f9f9f9] font-inter scroll-mt-20">
      {/* Section Title */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent to-gray-300" />
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-[#1b5e20] uppercase text-center font-poppins">
          Choose Your Category
        </h2>
        <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent to-gray-300" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">

        {/* Domestic Buyer */}
        <button
          onClick={() => onChange("domestic")}
          className={`relative flex items-center gap-5 rounded-xl px-5 py-4 overflow-hidden text-left cursor-pointer transition-all duration-300 active:scale-[0.98] group ${
            buyerType === "domestic"
              ? "ring-2 ring-[#a8d060]/50 bg-white"
              : "bg-white"
          }`}
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          {/* BG accent */}
          <img src={domBg.src} alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />

          {/* Icon circle */}
          <div className="relative shrink-0 z-10">
            <div
              className={`w-20 h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
                buyerType === "domestic" ? "shadow-xl scale-105" : "shadow-md"
              }`}
            >
              <img src={domIcon.src} alt="Domestic Icon" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1">

            <h3 className="text-[#4d7f1d] font-semibold text-lg leading-none mb-1.5 uppercase tracking-wide font-poppins">
              Domestic Buyer
            </h3>
            <p className="text-gray-900 text-xs font-medium leading-relaxed max-w-[300px] font-inter">
              For buyers based in India looking to connect with leading brands and manufacturers.
            </p>
            <div className="relative inline-block mt-3">
              <Sparkle color="#4d7f1d" shadow="#3b6315" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
              <Sparkle color="#4d7f1d" shadow="#3b6315" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
              <Sparkle color="#4d7f1d" shadow="#3b6315" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                buyerType === "domestic"
                  ? "bg-[#4d7f1d] text-white"
                  : "bg-[#4d7f1d] text-white opacity-90 group-hover:opacity-100"
              }`}
            >
              {buyerType === "domestic" ? "✓ SELECTED" : "SELECT DOMESTIC"}
              {buyerType !== "domestic" && <ArrowRight size={12} />}
              </div>
            </div>
          </div>
        </button>

        {/* International Buyer */}
        <button
          onClick={() => onChange("international")}
          className={`relative flex items-center gap-5 rounded-xl px-5 py-4 overflow-hidden text-left cursor-pointer transition-all duration-300 active:scale-[0.98] group ${
            buyerType === "international"
              ? "ring-2 ring-[#185fa5]/50 bg-white"
              : "bg-white"
          }`}
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          {/* BG accent */}
          <img src={intBg.src} alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />

          {/* Icon circle */}
          <div className="relative shrink-0 z-10">
            <div
              className={`w-20 h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
                buyerType === "international" ? "shadow-xl scale-105" : "shadow-md"
              }`}
            >
              <img src={intIcon.src} alt="International Icon" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1">

            <h3 className="text-[#185fa5] font-semibold text-lg leading-none mb-1.5 uppercase tracking-wide font-poppins">
              International Buyer
            </h3>
            <p className="text-gray-900 text-xs font-medium leading-relaxed max-w-[300px] font-inter">
              For international buyers looking to source premium products and build global partnerships.
            </p>
            <div className="relative inline-block mt-3">
              <Sparkle color="#185fa5" shadow="#134c85" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
              <Sparkle color="#185fa5" shadow="#134c85" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
              <Sparkle color="#185fa5" shadow="#134c85" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                buyerType === "international"
                  ? "bg-[#185fa5] text-white"
                  : "bg-[#185fa5] text-white opacity-90 group-hover:opacity-100"
              }`}
            >
              {buyerType === "international" ? "✓ SELECTED" : "SELECT INTERNATIONAL"}
              {buyerType !== "international" && <ArrowRight size={12} />}
              </div>
            </div>
          </div>
        </button>

      </div>
    </section>
  );
}

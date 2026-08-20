"use client";
import React from "react";
import domBg from "../../../assets/image/domog.webp";
import intBg from "../../../assets/image/dom1og.webp";
import domIcon from "../../../assets/icons/domog.png";
import intIcon from "../../../assets/icons/dom2og.png";
import groupIcon from "../../../assets/icons/exhibitor-logo-2.png"; // reusing this or we can use an icon
import { ArrowRight, Users, Globe2, Building2 } from "lucide-react";

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
  visitorType: "domestic" | "international" | "group" | null;
  onChange: (type: "domestic" | "international" | "group") => void;
}

export default function CategorySelect({ visitorType, onChange }: CategorySelectProps) {
  return (
    <section id="select-category" className="w-full pt-8 pb-4 px-4 md:px-8 bg-[#f9f9f9] font-inter scroll-mt-20">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent to-gray-300" />
        <h2 className="text-xl md:text-2xl font-semibold tracking-wide text-[#1b5e20] uppercase text-center font-poppins">
          Choose Registration Type
        </h2>
        <span className="block flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent to-gray-300" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {/* Domestic Visitor */}
        <button
          onClick={() => onChange("domestic")}
          className={`relative flex flex-col md:flex-row items-center md:items-start gap-4 rounded-xl px-5 py-4 overflow-hidden text-center md:text-left cursor-pointer transition-all duration-300 active:scale-[0.98] group ${visitorType === "domestic"
            ? "ring-2 ring-[#a8d060]/50 bg-white"
            : "bg-white"
            }`}
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          <img src={domBg.src} alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-50" />
          <div className="relative shrink-0 z-10">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${visitorType === "domestic" ? "shadow-xl scale-105" : "shadow-md"}`}>
              <Building2 className="w-8 h-8 md:w-10 md:h-10 text-[#4d7f1d]" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-[#4d7f1d] font-semibold text-lg leading-none mb-1.5 uppercase tracking-wide font-poppins">Domestic Visitor</h3>
            <p className="text-gray-900 text-[11px] font-medium leading-relaxed max-w-[300px] font-inter">For Indian residents attending for corporate, general, or health camp purposes.</p>
            <div className="relative inline-block mt-3">
              <Sparkle color="#4d7f1d" shadow="#3b6315" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${visitorType === "domestic" ? "bg-[#4d7f1d] text-white" : "bg-[#4d7f1d] text-white opacity-90 group-hover:opacity-100"}`}>
                {visitorType === "domestic" ? "✓ SELECTED" : "SELECT DOMESTIC"}
                {visitorType !== "domestic" && <ArrowRight size={12} />}
              </div>
            </div>
          </div>
        </button>

        {/* International Visitor */}
        <button
          onClick={() => onChange("international")}
          className={`relative flex flex-col md:flex-row items-center md:items-start gap-4 rounded-xl px-5 py-4 overflow-hidden text-center md:text-left cursor-pointer transition-all duration-300 active:scale-[0.98] group ${visitorType === "international"
            ? "ring-2 ring-[#a8d060]/50 bg-white"
            : "bg-white"
            }`}
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          <img src={intBg.src} alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-50" />
          <div className="relative shrink-0 z-10">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${visitorType === "international" ? "shadow-xl scale-105" : "shadow-md"}`}>
              <Globe2 className="w-8 h-8 md:w-10 md:h-10 text-[#4d7f1d]" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-[#4d7f1d] font-semibold text-lg leading-none mb-1.5 uppercase tracking-wide font-poppins">International Visitor</h3>
            <p className="text-gray-900 text-[11px] font-medium leading-relaxed max-w-[300px] font-inter">For delegates visiting from outside India, including visa invitation assistance.</p>
            <div className="relative inline-block mt-3">
              <Sparkle color="#4d7f1d" shadow="#3b6315" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${visitorType === "international" ? "bg-[#4d7f1d] text-white" : "bg-[#4d7f1d] text-white opacity-90 group-hover:opacity-100"}`}>
                {visitorType === "international" ? "✓ SELECTED" : "SELECT INTERNATIONAL"}
                {visitorType !== "international" && <ArrowRight size={12} />}
              </div>
            </div>
          </div>
        </button>

        {/* Group Registration */}
        <button
          onClick={() => onChange("group")}
          className={`relative flex flex-col md:flex-row items-center md:items-start gap-4 rounded-xl px-5 py-4 overflow-hidden text-center md:text-left cursor-pointer transition-all duration-300 active:scale-[0.98] group ${visitorType === "group"
            ? "ring-2 ring-[#a8d060]/50 bg-white"
            : "bg-white"
            }`}
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8fcf3] to-white z-0 pointer-events-none opacity-80" />
          <div className="relative shrink-0 z-10">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${visitorType === "group" ? "shadow-xl scale-105" : "shadow-md"}`}>
              <Users className="w-8 h-8 md:w-10 md:h-10 text-[#4d7f1d]" />
            </div>
          </div>
          <div className="relative z-10 flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-[#4d7f1d] font-semibold text-lg leading-none mb-1.5 uppercase tracking-wide font-poppins">Group Registration</h3>
            <p className="text-gray-900 text-[11px] font-medium leading-relaxed max-w-[300px] font-inter">Register your entire team in one go. Applicable for 5–10 members from the same organization.</p>
            <div className="relative inline-block mt-3">
              <Sparkle color="#4d7f1d" shadow="#3b6315" style={{ top: "-12px", left: "10%", animationDelay: "0.5s" }} />
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${visitorType === "group" ? "bg-[#4d7f1d] text-white" : "bg-[#4d7f1d] text-white opacity-90 group-hover:opacity-100"}`}>
                {visitorType === "group" ? "✓ SELECTED" : "SELECT GROUP"}
                {visitorType !== "group" && <ArrowRight size={12} />}
              </div>
            </div>
          </div>
        </button>

      </div>
    </section>
  );
}

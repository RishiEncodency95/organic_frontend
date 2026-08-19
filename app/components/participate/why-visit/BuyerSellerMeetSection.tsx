"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  ShieldCheck,
  Handshake,
  TrendingUp,
  ArrowRight,
  Users,
  Mic,
  Globe,
  MapPin,
  UserCircle2,
  Sparkles,
} from "lucide-react";

import vb2bbg from "@/app/assets/banner/vb2bbg.png";
import b1og from "@/app/assets/icons/b1og.png";
import b2og from "@/app/assets/icons/b2og.png";
import b3og from "@/app/assets/icons/b3og.png";
import b4og from "@/app/assets/icons/b4og.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const Sparkle = ({
  style,
  color = "#ffdd00",
  shadow = "#ffa500",
}: {
  style?: React.CSSProperties;
  color?: string;
  shadow?: string;
}) => (
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

const BuyerSellerMeetSection = () => {
  return (
    <section className="py-6 sm:py-7 bg-white font-inter relative overflow-hidden min-h-[550px] sm:min-h-[585px] max-h-[600px] flex items-center">
      {/* Background Image shifted slightly downwards with fine-tuned height and scale */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={vb2bbg.src}
          alt="Buyer-Seller Meet Background"
          className="w-full h-full object-cover object-left opacity-100 scale-110 sm:scale-108 translate-y-1 sm:translate-y-2"
        />
      </div>

      <SectionContainer className="relative z-10 py-1 max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center lg:items-end">
          {/* Main Content Area positioned over the right side white backdrop */}
          <div className="w-full lg:w-[68%] xl:w-[65%] text-center">
            
            {/* HEADER */}
            <div className="text-center mb-3 flex flex-col items-center justify-center">
              {/* Top Capsule Badge */}
              <div className="inline-flex items-center justify-center bg-[#0c240f] text-white px-3.5 py-1 rounded-md font-poppins font-semibold text-[11px] uppercase tracking-widest shadow-sm mb-1.5">
                <span>REASON TO VISIT</span>
              </div>

              {/* Title */}
              <h2
                className="font-poppins font-semibold text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] text-[#001810] leading-[1.05] mb-1"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
              >
                Buyer–Seller Meet
              </h2>

              {/* Sub-headline with accent lines */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[#1b5e20] font-poppins font-semibold text-sm sm:text-base md:text-[17px] tracking-widest uppercase mb-1.5">
                <div className="h-[1.5px] w-6 sm:w-10 bg-[#1b5e20]/60" />
                <span>MEET. CONNECT. GROW.</span>
                <div className="h-[1.5px] w-6 sm:w-10 bg-[#1b5e20]/60" />
              </div>

              {/* Description Paragraph */}
              <p className="font-inter text-[13px] sm:text-sm md:text-[14.5px] font-bold text-[#131730] max-w-xl mx-auto leading-relaxed">
                A focused platform to connect serious buyers with trusted <br className="hidden sm:block" />
                exhibitors and build long-term business relationships.
              </p>
            </div>

            {/* 4 FEATURE CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-[660px] mx-auto mb-3.5">
              {/* Card 1 */}
              <div
                className="bg-[#FAFBF6] rounded-xl py-3.5 px-2 sm:px-2.5 border border-slate-200/80 hover:shadow-md transition-shadow text-center flex flex-col items-center justify-start min-h-[165px]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
              >
                <img
                  src={b1og.src}
                  alt="Pre-scheduled Meetings"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain -mt-1.5 mb-1.5"
                />
                <h3 className="font-poppins font-semibold text-xs sm:text-sm md:text-[14px] text-[#001810] leading-tight mb-1">
                  Pre-scheduled <br /> Meetings
                </h3>
                <div className="w-5 h-[1.5px] bg-[#1b5e20]/40 my-1" />
                <p className="font-inter text-[10px] text-black font-semibold leading-relaxed mt-0.5">
                  We connect you with <br />
                  relevant exhibitors <br />
                  before the expo.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="bg-[#FAFBF6] rounded-xl py-3.5 px-2 sm:px-2.5 border border-slate-200/80 hover:shadow-md transition-shadow text-center flex flex-col items-center justify-start min-h-[165px]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
              >
                <img
                  src={b2og.src}
                  alt="Quality Connections"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain -mt-1.5 mb-1.5"
                />
                <h3 className="font-poppins font-semibold text-xs sm:text-sm md:text-[14px] text-[#001810] leading-tight mb-1">
                  Quality <br /> Connections
                </h3>
                <div className="w-5 h-[1.5px] bg-[#1b5e20]/40 my-1" />
                <p className="font-inter text-[10px] text-black font-semibold leading-relaxed mt-0.5">
                  Meet verified <br />
                  manufacturers, <br />
                  suppliers & brands.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="bg-[#FAFBF6] rounded-xl py-3.5 px-2 sm:px-2.5 border border-slate-200/80 hover:shadow-md transition-shadow text-center flex flex-col items-center justify-start min-h-[165px]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
              >
                <img
                  src={b3og.src}
                  alt="Save Time, Close Deals"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain -mt-1.5 mb-1.5"
                />
                <h3 className="font-poppins font-semibold text-xs sm:text-sm md:text-[14px] text-[#001810] leading-tight mb-1">
                  Save Time, <br /> Close Deals
                </h3>
                <div className="w-5 h-[1.5px] bg-[#1b5e20]/40 my-1" />
                <p className="font-inter text-[10px] text-black font-semibold leading-relaxed mt-0.5">
                  One-to-one meetings <br />
                  that help you discover, <br />
                  compare & decide.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className="bg-[#FAFBF6] rounded-xl py-3.5 px-2 sm:px-2.5 border border-slate-200/80 hover:shadow-md transition-shadow text-center flex flex-col items-center justify-start min-h-[165px]"
                style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
              >
                <img
                  src={b4og.src}
                  alt="Grow Your Business"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain -mt-1.5 mb-1.5"
                />
                <h3 className="font-poppins font-semibold text-xs sm:text-sm md:text-[14px] text-[#001810] leading-tight mb-1">
                  Grow Your <br /> Business
                </h3>
                <div className="w-5 h-[1.5px] bg-[#1b5e20]/40 my-1" />
                <p className="font-inter text-[10px] text-black font-semibold leading-relaxed mt-0.5">
                  Explore new products, <br />
                  expand your portfolio <br />
                  & increase margins.
                </p>
              </div>
            </div>

            {/* CTA BUTTON & SIDE SUBTEXT */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-3">
              <div className="relative">
                <Sparkle color="#facc15" shadow="#4B1426" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                <Sparkle color="#facc15" shadow="#4B1426" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                <Sparkle color="#facc15" shadow="#4B1426" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                <Link
                  href="/registration/buyer-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4B1426] hover:bg-[#380e1c] text-white font-poppins font-semibold text-xs tracking-wider uppercase px-6 py-2 rounded-full shadow-md flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative z-10"
                >
                  <UserCircle2 className="w-4 h-4 text-amber-300" />
                  <span>REGISTER AS BUYER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 rounded-full bg-[#e8f3e7] flex items-center justify-center text-[#1b5e20] shrink-0 border border-[#1b5e20]/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-inter leading-tight">
                  <span className="block font-medium text-gray-700">Exclusive for</span>
                  <span className="block font-semibold text-[#001810]">Serious Business Buyers</span>
                </div>
              </div>
            </div>

            {/* STATS ROW */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3.5 border border-slate-200/80 shadow-sm mb-3">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
                <div className="flex items-center gap-2.5 px-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#e8f3e7] text-[#1b5e20] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-poppins font-semibold text-base text-[#001810] leading-tight">200+</h4>
                    <p className="font-inter font-semibold text-[10px] text-[#001810] uppercase">EXHIBITORS</p>
                    <p className="font-inter font-semibold text-[9px] text-gray-700 leading-tight">Across the Organic Ecosystem</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-1.5 sm:pl-3 pt-2 sm:pt-0">
                  <div className="w-8 h-8 rounded-full bg-[#e8f3e7] text-[#1b5e20] flex items-center justify-center shrink-0">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-poppins font-semibold text-base text-[#001810] leading-tight">150+</h4>
                    <p className="font-inter font-semibold text-[10px] text-[#001810] uppercase">SPEAKERS</p>
                    <p className="font-inter font-semibold text-[9px] text-gray-700 leading-tight">Industry Leaders & Experts</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-1.5 sm:pl-3 pt-2 sm:pt-0">
                  <div className="w-8 h-8 rounded-full bg-[#e8f3e7] text-[#1b5e20] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-poppins font-semibold text-base text-[#001810] leading-tight">8,000+</h4>
                    <p className="font-inter font-semibold text-[10px] text-[#001810] uppercase">BUSINESS VISITORS</p>
                    <p className="font-inter font-semibold text-[9px] text-gray-700 leading-tight">Traders, Buyers, Retailers & More</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-1.5 sm:pl-3 pt-2 sm:pt-0">
                  <div className="w-8 h-8 rounded-full bg-[#e8f3e7] text-[#1b5e20] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-poppins font-semibold text-sm text-[#001810] leading-tight">GLOBAL</h4>
                    <p className="font-inter font-semibold text-[10px] text-[#001810] uppercase">PARTICIPATION</p>
                    <p className="font-inter font-semibold text-[9px] text-gray-700 leading-tight">Connecting India with the World</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM DARK GREEN STRIP */}
            <div className="bg-[#0c240f] text-white rounded-full p-2 sm:p-2.5 px-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 shadow-lg">
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 font-poppins font-semibold text-xs">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span>19–21 FEBRUARY 2027</span>
                </div>
                <div className="hidden sm:block w-px h-3.5 bg-white/20" />
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span>HALL 12, BHARAT MANDAPAM, NEW DELHI</span>
                </div>
              </div>

              <Link
                href="/registration/visitor-registration"
                className="bg-[#a3e635] hover:bg-[#84cc16] text-[#0c240f] font-poppins font-bold text-[11px] px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-md shrink-0"
              >
                <span>PLAN YOUR VISIT NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default BuyerSellerMeetSection;

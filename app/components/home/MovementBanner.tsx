"use client";
import bannerImg from "../../assets/home/bug.png";

import React from "react";
import { ArrowRight, ShieldCheck, Users, Eye, Network } from "lucide-react";

const MovementBanner = () => {
  const stats = [
    {
      icon: ShieldCheck,
      title: "Limited Stalls",
      subtitle: "Book Early & Save More",
    },
    {
      icon: Users,
      title: "High Footfall",
      subtitle: "Quality Visitors",
    },
    {
      icon: Eye,
      title: "Maximum Exposure",
      subtitle: "Brand Visibility",
    },
    {
      icon: Network,
      title: "Unmatched Networking",
      subtitle: "Opportunities",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a230e] overflow-hidden">
      {/* Background Image */}
      <img
        src={bannerImg.src}
        alt="Bharat Organic Expo Movement"
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />

      {/* Subtle Gradient to improve text readability without making image dark */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a230e]/80 via-transparent to-[#0a230e]/60 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="w-full px-4 sm:px-6 lg:px-11 relative z-10 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

          {/* Left Side: CTA (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold text-white leading-[1.2] mb-2 tracking-tight drop-shadow-xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]">
              Be a Part of India's Biggest<br />
              Organic Movement!
            </h2>
            <p className="text-white text-[13px] md:text-[14px] mb-5 font-bold leading-snug drop-shadow-lg [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
              Register now as a visitor or book your stall<br className="hidden md:block" />
              and grow your business with us.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-2 bg-[#fcc013] hover:bg-[#e5ae11] text-[#0a2312] font-bold text-[13px] rounded transition-colors flex items-center justify-center gap-2 group shadow-lg">
                Register as Visitor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full sm:w-auto px-6 py-2 border-2 border-[#F2B40E] bg-[#3b8c2a] text-white font-bold text-[13px] rounded hover:bg-[#F2B40E] hover:text-[#0b2912] transition-colors flex items-center justify-center gap-2 group shadow-lg">
                Book Your Stall
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default MovementBanner;

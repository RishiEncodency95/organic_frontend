"use client";
import bannerImg from "../../assets/home/biggest.png";

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
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Main Content Container */}
      <div className="w-full px-4 sm:px-6 lg:px-11 relative z-10 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Left Side: CTA (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold text-white leading-[1.2] mb-2 tracking-tight">
              Be a Part of India's Biggest<br />
              Organic Movement!
            </h2>
            <p className="text-white text-[13px] md:text-[14px] mb-5 font-medium leading-snug">
              Register now as a visitor or book your stall<br className="hidden md:block" /> 
              and grow your business with us.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-2 bg-[#fcc013] hover:bg-[#e5ae11] text-[#0a2312] font-bold text-[13px] rounded transition-colors flex items-center justify-center gap-2 group">
                Register as Visitor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-6 py-2 border-2 border-[#F2B40E] bg-[#3b8c2a] text-white font-bold text-[13px] rounded hover:bg-[#F2B40E] hover:text-[#0b2912] transition-colors flex items-center justify-center gap-2 group shadow-md hover:shadow-lg">
                Book Your Stall
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Stats/Icons (55%) */}
          <div className="w-full lg:w-[55%]">
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-6 lg:gap-2">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center flex-1 min-w-[120px]">
                  <div className="mb-3 text-[#aae639]">
                    <stat.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-white font-bold text-[12px] md:text-[13px] mb-1 leading-tight">
                    {stat.title}
                  </h4>
                  <p className="text-white text-[10px] md:text-[11px] font-medium leading-tight">
                    {stat.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MovementBanner;

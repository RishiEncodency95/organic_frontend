"use client";
import bannerImg from "../../assets/home/home33.png";


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
      {/* Background with Gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)'
        }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0a230e]/60 via-[#0a230e]/95 to-[#0a230e] z-0" /> */}

      {/* Main Content Container */}
      <div className="w-full max-w-full px-4 lg:px-8 xl:px-11 relative z-10 py-6 md:py-8 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Left Side: CTA (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-[15%]">
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
              
              <button className="w-full sm:w-auto px-6 py-2 bg-transparent border border-white/80 hover:border-white text-white font-bold text-[13px] rounded transition-colors flex items-center justify-center gap-2 group">
                Book Your Stall
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Stats/Icons (55%) */}
          <div className="w-full lg:w-[55%]">
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-6 lg:gap-2 pr-0 lg:pr-8">
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

"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import bgImg from "../../../assets/banner/sponog.png";
import leafImg from "../../../assets/icons/leafs.png";
import { Users, Store, Presentation, Globe, Handshake, Leaf } from "lucide-react";

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  const isUnlimited = value === "UNLIMITED";
  const numMatch = value.match(/[\d,]+/);
  const targetNumber = numMatch ? parseInt(numMatch[0].replace(/,/g, ""), 10) : 0;
  const suffix = value.replace(/[\d,]+/, "");

  useEffect(() => {
    if (isUnlimited) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const incrementTime = 30;
          const totalSteps = duration / incrementTime;
          const step = targetNumber / totalSteps;
          
          const timer = setInterval(() => {
            start += step;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, incrementTime);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [targetNumber, isUnlimited]);

  if (isUnlimited) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function HeroSection() {
  const stats = [
    { icon: <Users className="w-8 h-8 text-[#2e7d32]" strokeWidth={1.5} />, number: "8,000+", label: "BUSINESS\nVISITORS" },
    { icon: <Store className="w-8 h-8 text-[#2e7d32]" strokeWidth={1.5} />, number: "200+", label: "EXHIBITORS" },
    { icon: <Presentation className="w-8 h-8 text-[#2e7d32]" strokeWidth={1.5} />, number: "150+", label: "SPEAKERS" },
    { icon: <Globe className="w-8 h-8 text-[#2e7d32]" strokeWidth={1.5} />, number: "25+", label: "COUNTRIES" },
    { icon: <Handshake className="w-8 h-8 text-[#2e7d32]" strokeWidth={1.5} />, number: "UNLIMITED", label: "BUSINESS\nOPPORTUNITIES" },
  ];

  return (
    <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center bg-[#f4f7f6] overflow-hidden font-inter pt-10 pb-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
      </div>

      {/* Floating Leaf Decoration */}
      <div className="absolute -left-10 lg:-left-8 top-[10%] lg:top-[15%] z-10 hidden sm:block w-28 md:w-36 lg:w-[150px] pointer-events-none opacity-100">
        <img
          src={leafImg.src}
          alt="Organic Leaf"
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#001810] leading-tight mb-4 font-poppins tracking-tight">
            SPONSORSHIP <br />
            <span className="text-[#7ea82a]">OPPORTUNITIES</span>
          </h1>
          
          <div className="flex items-center gap-3 mb-6 pl-1">
            <div className="w-16 h-[2px] bg-[#d97706]"></div>
            <Leaf className="text-[#d97706] w-4 h-4 fill-[#d97706] -rotate-12" />
            <span className="text-[#d97706] font-semibold text-lg tracking-wide font-poppins">
              Partner. Promote. Make an Impact.
            </span>
          </div>

          <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-8">
            <span className="font-medium text-black">Align your brand with India's Premier Organic Expo</span><br />
            and connect with the <span className="font-bold text-[#4B1426]">right audience</span>,<br />
            build credibility and drive real impact.
          </p>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <div className="absolute bottom-0 lg:bottom-2 left-0 z-20 w-full lg:w-auto">
        <div className="pt-2 pb-6 px-6 md:px-12 flex flex-wrap lg:flex-nowrap justify-between lg:justify-start items-center gap-6 lg:gap-14">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative w-1/3 lg:w-auto">
              {/* Divider */}
              {idx !== stats.length - 1 && (
                <div className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-gray-300"></div>
              )}
              
              <div className="mb-2">
                {stat.icon}
              </div>
              <span className="text-xl md:text-[22px] font-semibold text-[#d97706] font-poppins leading-none mb-1">
                <AnimatedCounter value={stat.number} />
              </span>
              <span className="text-[9px] font-bold text-gray-800 uppercase tracking-widest whitespace-pre-line leading-tight font-inter">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

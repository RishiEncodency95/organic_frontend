"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import bgImg from "../../../assets/banner/epromog.png";
import { Users, Store, Presentation, Globe, Handshake, Leaf } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  
  const isUnlimited = value === "UNLIMITED";
  const numMatch = value.match(/[\d,]+/);
  const targetNumber = numMatch ? parseInt(numMatch[0].replace(/,/g, ""), 10) : 0;
  const suffix = value.replace(/[\d,]+/, "");

  useEffect(() => {
    setIsClient(true);
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
      {isClient ? count.toLocaleString() : "0"}
      {suffix}
    </span>
  );
};

export default function HeroSection() {
  const stats = [
    { icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-[#2e7d32]" strokeWidth={1.5} />, number: "8,000+", label: "BUSINESS\nVISITORS" },
    { icon: <Store className="w-5 h-5 md:w-6 md:h-6 text-[#2e7d32]" strokeWidth={1.5} />, number: "200+", label: "EXHIBITORS" },
    { icon: <Presentation className="w-5 h-5 md:w-6 md:h-6 text-[#2e7d32]" strokeWidth={1.5} />, number: "150+", label: "SPEAKERS" },
    { icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#2e7d32]" strokeWidth={1.5} />, number: "25+", label: "COUNTRIES" },
    { icon: <Handshake className="w-5 h-5 md:w-6 md:h-6 text-[#2e7d32]" strokeWidth={1.5} />, number: "UNLIMITED", label: "BUSINESS\nOPPORTUNITIES" },
  ];

  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center bg-[#f4f7f6] overflow-hidden font-inter pt-3 md:pt-5 pb-4 md:pb-6">
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

      {/* Mobile-only gradient overlay for text readability (desktop remains untouched) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/85 to-transparent/30 md:hidden pointer-events-none" />

      {/* Content Container */}
      <SectionContainer className="relative z-10">
        <div className="pl-1 sm:pl-3 md:pl-10 lg:pl-14">
          <div className="max-w-2xl pt-2 md:pt-4 lg:pt-5">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[64px] font-bold text-[#001810] leading-tight md:leading-none mb-2 font-poppins tracking-tight">
              E-PROMOTION <br />
              <span className="text-[#7ea82a]">OPPORTUNITIES</span>
            </h1>
            
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-0.5">
              <div className="w-10 md:w-16 h-[2px] bg-[#d97706]"></div>
              <Leaf className="text-[#d97706] w-3.5 h-3.5 md:w-4 md:h-4 fill-[#d97706] -rotate-12" />
              <span className="text-[#d97706] font-semibold text-sm sm:text-base md:text-lg tracking-wide font-poppins">
                Promote. Engage. Inspire.
              </span>
            </div>

            <p className="text-gray-900 text-sm sm:text-base md:text-xl font-medium leading-relaxed max-w-lg mb-4 md:mb-6">
              <span className="font-semibold text-black">Maximize your brand visibility and</span>{" "}
              connect with a highly <span className="font-bold text-[#4B1426]">targeted audience</span>{" "}
              before, during and after the event.
            </p>
          </div>

          {/* Stats Bar - Aligned directly underneath the description text */}
          <div className="pt-2 pb-2 flex flex-wrap lg:flex-nowrap justify-start items-center gap-3 sm:gap-4 lg:gap-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative w-[30%] sm:w-auto">
                {/* Divider */}
                {idx !== stats.length - 1 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-[1px] h-11 bg-gray-300"></div>
                )}
                
                <div className="mb-1">
                  {stat.icon}
                </div>
                <span className="text-xs sm:text-sm md:text-base lg:text-[17px] font-semibold text-[#d97706] font-poppins leading-none mb-0.5">
                  <AnimatedCounter value={stat.number} />
                </span>
                <span className="text-[7.5px] sm:text-[8px] md:text-[8.5px] font-bold text-gray-800 uppercase tracking-widest whitespace-pre-line leading-tight font-inter">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

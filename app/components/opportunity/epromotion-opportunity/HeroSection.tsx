"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import bgImg from "../../../assets/banner/epromog.png";
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

      {/* Content Container */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-2xl -translate-y-2 md:-translate-y-4 lg:-translate-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#001810] leading-tight mb-1.5 font-poppins tracking-tight">
            E-PROMOTION <br />
            <span className="text-[#7ea82a]">OPPORTUNITIES</span>
          </h1>
          
          <div className="flex items-center gap-3 mb-3 pl-1">
            <div className="w-16 h-[2px] bg-[#d97706]"></div>
            <Leaf className="text-[#d97706] w-4 h-4 fill-[#d97706] -rotate-12" />
            <span className="text-[#d97706] font-semibold text-lg tracking-wide font-poppins">
              Promote. Engage. Inspire.
            </span>
          </div>

          <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-8">
            <span className="font-medium text-black">Maximize your brand visibility and</span><br />
            connect with a highly <span className="font-bold text-[#4B1426]">targeted audience</span><br />
            before, during and after the event.
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

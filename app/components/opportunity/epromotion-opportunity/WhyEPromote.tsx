"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Megaphone, Users, BadgeCheck, TrendingUp, Target, Mail } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import leafIcon from "../../../assets/icons/leafs.png";
import epogImg from "../../../assets/icons/epog.png";
import e1og from "../../../assets/icons/e1og.png";
import e2og from "../../../assets/icons/e2og.png";
import e3og from "../../../assets/icons/e3og.png";
import e4og from "../../../assets/icons/e4og.png";
import e5og from "../../../assets/icons/e5og.png";
import footerRightImg from "../../../assets/icons/footerright.png";

export default function WhyEPromote() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftDecorRef = useRef<HTMLImageElement>(null);
  const rightDecorRef = useRef<HTMLImageElement>(null);
  const infoBoxRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Decor Animations
      gsap.fromTo(leftDecorRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightDecorRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      });

      tl.fromTo(infoBoxRef.current, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      )
      .fromTo(illustrationRef.current,
        { scale: 0.8, opacity: 0, rotation: -5 },
        { scale: 1.25, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.3"
      )
      .fromTo(titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(benefitsRef.current ? gsap.utils.toArray(benefitsRef.current.children) : [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    { iconSrc: e1og.src, label: "High Brand\nVisibility" },
    { iconSrc: e2og.src, label: "Targeted\nAudience Reach" },
    { iconSrc: e3og.src, label: "Increase Brand\nCredibility" },
    { iconSrc: e4og.src, label: "Drive Website\nTraffic & Leads" },
    { iconSrc: e5og.src, label: "Stronger ROI\n& Engagement" },
  ];

  return (
    <section ref={sectionRef} className="relative pt-8 pb-8 bg-white font-inter overflow-hidden">
      {/* Decorative Background Elements */}
      <img ref={leftDecorRef} src={leafIcon.src} alt="Leaf Decoration" className="absolute left-0 top-1/2 -translate-y-1/2 w-28 md:w-40 object-contain pointer-events-none z-0" style={{ opacity: 0 }} />
      <img ref={rightDecorRef} src={footerRightImg.src} alt="Right Decoration" className="absolute right-0 bottom-0 w-32 md:w-48 object-contain pointer-events-none z-0" style={{ opacity: 0 }} />
      
      <SectionContainer className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Why E-Promote */}
          <div ref={infoBoxRef} className="w-full lg:w-5/12 bg-[#f5f6ee] rounded-2xl p-6 lg:p-8 relative flex flex-col sm:flex-row items-center gap-4" style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", opacity: 0 }}>
            <div className="flex-1">
              {/* Title */}
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg md:text-[19px] font-semibold text-[#1b5e20] uppercase font-poppins tracking-wide whitespace-nowrap">
                  WHY E-PROMOTE WITH US?
                </h2>
              </div>
              
              <p className="text-black text-sm md:text-[15px] leading-relaxed font-medium">
                Our e-promotion solutions are designed to give your brand unmatched visibility to a highly engaged and relevant audience across multiple digital touchpoints.
              </p>
            </div>
            
            {/* Illustration */}
            <div className="w-36 sm:w-[180px] shrink-0 mx-auto mt-2 sm:mt-0">
              <img ref={illustrationRef} src={epogImg.src} alt="E-Promotion Illustration" className="w-full h-auto object-contain scale-100 md:scale-125 origin-center" style={{ opacity: 0 }} />
            </div>
          </div>
          
          {/* Right Column: Key Benefits */}
          <div className="w-full lg:w-7/12 mt-8 lg:-mt-6">
            <div ref={titleRef} className="flex items-center gap-4 mb-8 w-full" style={{ opacity: 0 }}>
              <div className="h-[1px] flex-1 bg-gray-300"></div>
              <div className="flex items-center gap-2 px-2">
                <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase font-inter tracking-wide text-center">
                  KEY BENEFITS
                </h2>
              </div>
              <div className="h-[1px] flex-1 bg-gray-300"></div>
            </div>
            
            <div ref={benefitsRef} className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-8 relative">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative w-1/2 lg:w-1/5 px-2" style={{ opacity: 0 }}>
                  {/* Vertical Divider */}
                  {idx !== benefits.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-gray-200"></div>
                  )}
                  
                  <img src={benefit.iconSrc} alt="Benefit" className="w-[70px] h-[70px] object-contain mb-3" />
                  
                  <p className="text-[10px] md:text-[11px] font-bold text-gray-900 uppercase tracking-wide whitespace-pre-line leading-tight font-inter">
                    {benefit.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </SectionContainer>
    </section>
  );
}

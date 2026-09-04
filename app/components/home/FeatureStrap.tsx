"use client";

import React, { useRef, useEffect } from "react";
import { Shield, Users, FileCheck } from "lucide-react";
import gsap from "gsap";
import SectionContainer from "@/app/components/layout/SectionContainer";

export default function FeatureStrap() {
  const bandRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: Shield,
      title: "Government Approved",
      subtitle: "Exhibition",
    },
    {
      icon: Users,
      title: "Support for",
      subtitle: "MSE Growth",
    },
    {
      icon: FileCheck,
      title: "Applicable for Eligible",
      subtitle: "MSEs Only",
    },
  ];

  itemRefs.current = [];
  dividerRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.5,
        defaults: { ease: "power3.out" },
      });

      // Band wipe reveal left→right
      tl.fromTo(
        bandRef.current,
        { opacity: 0, y: 20, clipPath: "inset(0% 100% 0% 0%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          ease: "power4.inOut",
        },
        0
      );

      // Dividers grow
      tl.fromTo(
        dividerRefs.current.filter(Boolean),
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        },
        0.55
      );

      // Feature items fade in
      tl.fromTo(
        itemRefs.current.filter(Boolean),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        0.6
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-20 font-inter">
      <SectionContainer>
        <div
          ref={bandRef}
          style={{
            opacity: 0,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 12px -4px rgba(0,0,0,0.1)",
          }}
          className="rounded-2xl border border-gray-200 py-6 px-4 md:py-8 md:px-8 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-6 md:gap-0">
            {features.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <React.Fragment key={i}>
                  <div
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    style={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center gap-3 group flex-1"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1b5e20] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col text-center">
                      <h4 className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-gray-800 leading-tight font-inter">
                        {item.title}
                      </h4>
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-[#1b5e20] leading-tight font-inter mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  {i < features.length - 1 && (
                    <div
                      ref={(el) => {
                        dividerRefs.current[i] = el;
                      }}
                      className="hidden sm:block w-px h-20 bg-gray-300 mx-4 md:mx-6"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

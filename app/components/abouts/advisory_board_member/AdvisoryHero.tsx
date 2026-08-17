"use client";

import React from "react";
import heroBanner from "../../../assets/about/advisory_board_member/hero.png";
import { ArrowRight, Leaf, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sparkle component for button highlights
const Sparkle = ({ style, color = '#7ca142' }: { style?: React.CSSProperties, color?: string }) => (
    <span
        style={{
            position: 'absolute',
            pointerEvents: 'none',
            fontSize: '18px',
            color: color,
            textShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
            animation: 'sparkleAnimHero 1.6s ease-in-out infinite',
            opacity: 0,
            zIndex: 20,
            ...style,
        }}
    >
        ✦
    </span>
);

const AdvisoryHero = () => {
    return (
        <section className="relative w-full min-h-[400px] md:min-h-[555px] lg:min-h-[610px] flex items-center overflow-hidden bg-white">
            <style>{`
        @keyframes sparkleAnimHero {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-2px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-4px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-6px); }
        }
        @keyframes shimmerAdvisory {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .advisory-shimmer-btn {
          position: relative;
        }
        .advisory-shimmer-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmerAdvisory 2.5s infinite;
        }
        @keyframes badgeGlowAndFloatAdvisory {
          0% { transform: translateY(0px); box-shadow: 0 0 15px rgba(245,130,32,0.4); }
          50% { transform: translateY(-5px); box-shadow: 0 0 35px rgba(245,130,32,0.8); }
          100% { transform: translateY(0px); box-shadow: 0 0 15px rgba(245,130,32,0.4); }
        }
        .animate-badge-special {
          animation: badgeGlowAndFloatAdvisory 3s ease-in-out infinite;
        }
      `}</style>
            {/* Background Image (Globe and Green scenery on the right) */}
            <Image
                src={heroBanner}
                alt="Bharat Bharat Organic Expo 2027 Advisory Board Members"
                fill
                priority
                className="object-cover object-right z-0"
                sizes="100vw"
            />

            {/* Subtle overlay to ensure text readability on mobile if needed, though the left side is already white */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-1/2 z-10" />

            {/* Content Overlay */}
            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 md:px-11 h-full flex flex-col justify-center">
                <div className="text-left mt-16 md:mt-0 space-y-4 w-full max-w-xl xl:max-w-2xl bg-white/80 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">

                    {/* Tagline Badge */}
                    <div className="animate-badge-special advisory-shimmer-btn overflow-hidden inline-flex items-center gap-3 px-4 md:px-6 py-2 bg-gradient-to-r from-[#f58220]/15 to-[#e65c00]/15 backdrop-blur-md font-black text-[11px] md:text-[13px] tracking-[0.25em] uppercase rounded-full mb-6 border-2 border-[#f58220] w-max cursor-default">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-[#f58220] animate-[spin_6s_linear_infinite]" fill="currentColor" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58220] to-[#e65c00] drop-shadow-md">
                            EXPERTS. LEADERS. VISIONARIES.
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="leading-[1.1] font-semibold uppercase pb-2">
                        <div className="text-[#1f471b] text-[30px] md:text-[40px] lg:text-[48px] tracking-tight pb-1">
                            ADVISORY
                        </div>
                        <div className="text-[#7ca142] text-[30px] md:text-[40px] lg:text-[52px] tracking-tight">
                            BOARD MEMBERS
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <div className="flex items-center gap-3 ">
                        <div className="w-12 h-1 bg-[#7ca142] rounded-full"></div>
                        <span className="text-[#2b5825] font-bold text-[14px] md:text-[16px] tracking-widest uppercase">
                            Meet The Leaders
                        </span>
                        <div className="w-12 h-1 bg-[#7ca142] rounded-full"></div>
                    </div>

                    {/* Description */}
                    <p className="text-[#4a4a4a] font-medium text-[12px] md:text-[16px] lg:text-[17px] leading-[1.7] max-w-[600px] mt-4 border-l-4 border-[#7ca142]/40 pl-3">
                        Meet the distinguished leaders, industry experts, and visionary professionals shaping the strategic direction of <span className="text-[#1f471b] font-black">Bharat Bharat Organic Expo 2027.</span> Their collective wisdom, decades of experience, and unwavering commitment to sustainable agriculture ensure that our platform remains at the absolute forefront of the global organic movement.
                    </p>

                    {/* Buttons */}
                    <div className="pt-6 pb-2">
                        <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 relative w-full">
                            {/* Floating Sparkles around buttons */}
                            <Sparkle style={{ top: '-15px', left: '15%', animationDelay: '0s', color: '#F2B40E' }} />
                            <Sparkle style={{ bottom: '-10px', left: '35%', animationDelay: '0.4s', color: '#3b8c2a' }} />
                            <Sparkle style={{ top: '-5px', right: '45%', animationDelay: '0.8s', color: '#F6A003' }} />
                            <Sparkle style={{ top: '-20px', right: '15%', animationDelay: '0.2s', color: '#7ca142' }} />
                            <Sparkle style={{ bottom: '-5px', right: '5%', animationDelay: '0.6s', color: '#2b5825' }} />

                            <Link
                                href="/visitor-registration"
                                className="advisory-shimmer-btn overflow-hidden bg-[#2b5825] hover:bg-[#1f471b] text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-md font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-widest uppercase transition-all shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap min-h-[44px]"
                            >
                                REGISTER AS VISITOR
                            </Link>
                            <Link
                                href="/delegate-registration"
                                className="advisory-shimmer-btn overflow-hidden bg-[#7ca142] hover:bg-[#688a35] text-white px-2 lg:px-3 py-1.5 lg:py-2 rounded-md font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-widest uppercase transition-all shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap min-h-[44px]"
                            >
                                REGISTER AS DELEGATE
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvisoryHero;

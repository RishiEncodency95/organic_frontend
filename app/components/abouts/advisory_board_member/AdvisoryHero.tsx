"use client";

import React from "react";
import heroBanner from "../../../assets/about/advisory_board_member/hero.png";
import { ArrowRight, Leaf, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sparkle component for button highlights
const Sparkle = ({ style, color = '#7ca142', shadow }: { style?: React.CSSProperties, color?: string, shadow?: string }) => (
    <span
        style={{
            position: 'absolute',
            pointerEvents: 'none',
            fontSize: '13px',
            color: color,
            textShadow: shadow ? `0 0 6px ${shadow}` : `0 0 6px ${color}, 0 0 12px ${color}`,
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
        <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden bg-white border-b-4 border-[#ea580c]">
            <style>{`
        @keyframes sparkleAnimHero {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-2px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-4px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-6px); }
        }
        @keyframes shimmerHero {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .blue-btn-hero {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 30%, #0e3b1c 60%, #1b5e20 100%);
          background-size: 200% 200%;
          box-shadow: 0 0 16px 4px rgba(27,94,32,0.3), 0 4px 15px rgba(27,94,32,0.25);
          position: relative;
          overflow: hidden;
        }
        .blue-btn-hero::before {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 50%; height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
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

            {/* Subtle overlay removed per user request */}

            {/* Content Overlay */}
            <div className="relative z-20 w-full px-2 md:px-11 h-full flex flex-col justify-center">
                <div className="max-w-xl text-left mt-16 md:mt-0 space-y-4 w-full max-w-2xl">



                    {/* Title */}
                    <h1 
                        className="font-black leading-[1.05] mb-4 text-left font-poppins"
                        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                    >
                        <div className="text-[#1b5e20] text-[32px] md:text-[40px] lg:text-[48px] tracking-tight block" style={{ fontWeight: 600 }}>
                            ADVISORY
                        </div>
                        <div className="text-[#ea580c] text-[36px] md:text-[46px] lg:text-[54px] tracking-tight block" style={{ fontWeight: 600 }}>
                            BOARD MEMBERS
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <div className="flex items-center gap-3 ">
                        <div className="w-12 h-1 bg-[#ea580c] rounded-full"></div>
                        <span className="text-[#1b5e20] font-bold text-[14px] md:text-[16px] tracking-widest uppercase">
                            Meet The Leaders
                        </span>
                        <div className="w-12 h-1 bg-[#ea580c] rounded-full"></div>
                    </div>

                    {/* Description */}
                    <p className="text-[#131730] font-bold text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed max-w-lg mt-4">
                        Meet the distinguished leaders, industry experts, and visionary professionals shaping the strategic direction of <span className="text-[#4B1426] font-semibold">Bharat Organic Expo 2027.</span> Their collective wisdom, decades of experience, and unwavering commitment to sustainable agriculture ensure that our platform remains at the absolute forefront of the global organic movement.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center justify-start gap-3 mt-4 relative w-full">
                        <div className="relative w-full sm:w-auto">
                            <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                            <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                            <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                            <Link
                                href="/visitor-registration"
                                className="blue-btn-hero text-white px-4 py-2 rounded-lg font-semibold text-[9px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto"
                            >
                                REGISTER AS A VISITOR <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="relative w-full sm:w-auto">
                            <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
                            <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
                            <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />
                            <Link
                                href="/book-a-stand"
                                className="group relative inline-flex items-center justify-start gap-2 px-4 py-2 rounded-lg font-semibold text-[9px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl z-10 w-full sm:w-auto overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, #ea580c, #c2410c)",
                                    boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                                }}
                            >
                                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                                BOOK YOUR STALL <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvisoryHero;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Leaf, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

// You can swap this out with the actual expo image you have
import expoImage from "../../../assets/about/advisory_board_member/hero.png";

const NominateBanner = () => {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-4 md:px-14 py-12 md:py-16 font-inter">
            <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#e5ece3] flex flex-col md:flex-row min-h-[350px]">

                {/* Left Side (Content) */}
                <div className="w-full md:w-[60%] lg:w-[55%] p-8 md:p-10 lg:p-12 relative z-10">
                    {/* Background subtle waves could be added here, leaving white for clean look */}

                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-[2px] bg-[#ea580c]"></div>
                        <Leaf size={14} className="text-[#2e7d32]" />
                        <span className="text-[#ea580c] font-bold text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.15em] uppercase font-poppins">
                            BE PART OF A TRANSFORMATIVE JOURNEY
                        </span>
                        <Leaf size={14} className="text-[#2e7d32]" />
                        <div className="w-8 h-[2px] bg-[#ea580c]"></div>
                    </div>

                    <h2 className="text-[#1a1a1a] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-black leading-tight mb-4 font-poppins tracking-tight">
                        Nominate for the <span className="text-[#2e7d32]">Advisory Board</span>
                    </h2>

                    <p className="text-[#555] text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-2xl font-medium">
                        Help us bring the right leaders together to catalyze innovation, sustainability,
                        and industry growth. By nominating experts to our Advisory Board, you
                        contribute directly to shaping the future of organic wellness, driving impactful
                        policies, and fostering a global network dedicated to a sustainable tomorrow.
                    </p>

                    {/* 4 Icons Row */}
                    <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
                        <div className="flex flex-col items-center text-center gap-2 max-w-[100px] border-r border-[#eaeaea] pr-4 sm:pr-6 md:pr-8 last:border-0 last:pr-0">
                            <div className="w-10 h-10 rounded-full border border-[#c8e6c9] bg-[#f4fbf4] flex items-center justify-center">
                                <Users size={18} className="text-[#2e7d32]" />
                            </div>
                            <span className="text-[#1a1a1a] font-bold text-[9px] sm:text-[10px] tracking-wider uppercase leading-tight">Stronger<br />Leadership</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 max-w-[100px] border-r border-[#eaeaea] pr-4 sm:pr-6 md:pr-8 last:border-0 last:pr-0">
                            <div className="w-10 h-10 rounded-full border border-[#c8e6c9] bg-[#f4fbf4] flex items-center justify-center">
                                <Leaf size={18} className="text-[#2e7d32]" />
                            </div>
                            <span className="text-[#1a1a1a] font-bold text-[9px] sm:text-[10px] tracking-wider uppercase leading-tight">Sustainable<br />Future</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 max-w-[100px] border-r border-[#eaeaea] pr-4 sm:pr-6 md:pr-8 last:border-0 last:pr-0">
                            <div className="w-10 h-10 rounded-full border border-[#c8e6c9] bg-[#f4fbf4] flex items-center justify-center">
                                <Lightbulb size={18} className="text-[#2e7d32]" />
                            </div>
                            <span className="text-[#1a1a1a] font-bold text-[9px] sm:text-[10px] tracking-wider uppercase leading-tight">Innovation<br />Driven</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 max-w-[100px]">
                            <div className="w-10 h-10 rounded-full border border-[#c8e6c9] bg-[#f4fbf4] flex items-center justify-center">
                                <TrendingUp size={18} className="text-[#2e7d32]" />
                            </div>
                            <span className="text-[#1a1a1a] font-bold text-[9px] sm:text-[10px] tracking-wider uppercase leading-tight">Industry<br />Growth</span>
                        </div>
                    </div>
                </div>

                {/* Right Side (Image & Button) */}
                <div className="w-full md:w-[50%] lg:w-[55%] h-[300px] md:h-auto absolute right-0 top-0 bottom-0 z-0 hidden md:block">
                    {/* The curved cut overlay matching the image style */}
                    <div className="absolute inset-0 bg-[#2e7d32] z-10" style={{ clipPath: 'ellipse(70% 120% at 90% 50%)' }}>
                        <Image
                            src={expoImage}
                            alt="Expo Event"
                            fill
                            className="object-cover opacity-90"
                        />
                    </div>
                    {/* The green curve border effect */}
                    <div className="absolute inset-0 bg-[#4caf50] z-0" style={{ clipPath: 'ellipse(72% 125% at 92% 50%)' }}></div>
                </div>

                {/* Mobile Image */}
                <div className="w-full h-[250px] relative z-0 md:hidden mt-6 rounded-b-[24px] overflow-hidden">
                    <Image
                        src={expoImage}
                        alt="Expo Event"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Nominate Now Button */}
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20">
                    <Link
                        href="/about/nominate_advisory_board"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-[13px] sm:text-[14px] uppercase tracking-wider text-[#1a1a1a] transition-all active:scale-95 shadow-xl overflow-hidden bg-[#fbbf24] hover:bg-[#f59e0b] border-2 border-[#fbbf24]"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                        NOMINATE NOW <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default NominateBanner;

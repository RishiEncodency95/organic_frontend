"use client";

import React from "react";
import heroBanner from "../../../assets/about/advisory_board_member/hero.png";
import { Leaf, Users, Award, Lightbulb, Handshake, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AdvisoryHero = () => {
    return (
        <section className="relative w-full min-h-[350px] md:min-h-[410px] lg:min-h-[415px] flex items-center overflow-hidden bg-[#f9fafb]">
            {/* Background Image (Globe and Green scenery on the right) */}
            <Image
                src={heroBanner}
                alt="Bharat Organic Expo 2027 Advisory Board Members"
                fill
                priority
                className="object-cover object-right z-0"
                sizes="100vw"
            />

            {/* Content Overlay */}
            <div className="relative z-20 w-full px-4 md:px-14 flex flex-col justify-center py-8 md:py-10">
                <div className="max-w-3xl text-left mt-4 md:mt-0 space-y-4 md:space-y-6 w-full relative z-10">

                    {/* Title */}
                    <h1 className="font-semibold mt-2 leading-[1.05] mb-2 font-poppins">
                        <div className="text-[#1b5e20] text-[16px] sm:text-[14px] md:text-[28px] lg:text-[46px] tracking-tight block font-semibold">
                            ADVISORY
                        </div>
                        <div className="text-[#ea580c] text-[16px] sm:text-[14px] md:text-[28px] lg:text-[46px] tracking-tight block font-bold">
                            BOARD MEMBERS
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <Leaf size={16} className="text-[#1b5e20] rotate-[-45deg] -mr-1 z-10" />
                            <div className="w-8 md:w-16 h-0.5 bg-[#1b5e20]"></div>
                        </div>
                        <span className="font-bold text-[12px] sm:text-[14px] md:text-[16px] tracking-widest uppercase">
                            <span className="text-[#1b5e20]">GUIDING. INSPIRING. </span>
                            <span className="text-[#ea580c]">TRANSFORMING.</span>
                        </span>
                        <div className="w-8 md:w-16 h-0.5 bg-[#1b5e20]"></div>
                    </div>

                    {/* Description */}
                    <p className="text-[#333] font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[650px] pr-4">
                        Our Advisory Board comprises distinguished leaders, industry experts, and visionaries who bring strategic guidance, deep expertise and a shared commitment to drive Bharat Organic Expo towards a sustainable, innovative and impactful future.
                    </p>

                    {/* Features Banner Row */}
                    <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-between gap-4 sm:gap-2 mt-6 px-4 py-2 sm:px-5 rounded-2xl bg-[#f4f7f2]/90 backdrop-blur-sm border border-[#e5ece3] shadow-sm max-w-[700px]">

                        {/* Feature 1 */}
                        <div className="flex items-start gap-3 w-full sm:w-[24%] border-b sm:border-b-0 sm:border-r border-[#d1dcd0] pb-3 sm:pb-0 sm:pr-2 last:border-0">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#c5d8c3] shadow-sm">
                                <Users size={20} className="text-[#2e7d32]" />
                            </div>
                            <div>
                                <h4 className="text-[#1b5e20] font-bold text-[11px] md:text-[12px] leading-tight mb-1">LEADING<br />VISIONARIES</h4>
                                <p className="text-[#555] text-[10px] md:text-[11px] leading-tight font-medium">From diverse<br />industries</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-3 w-full sm:w-[24%] border-b sm:border-b-0 sm:border-r border-[#d1dcd0] pb-3 sm:pb-0 sm:pr-2 last:border-0">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#c5d8c3] shadow-sm">
                                <Award size={20} className="text-[#2e7d32]" />
                            </div>
                            <div>
                                <h4 className="text-[#1b5e20] font-bold text-[11px] md:text-[12px] leading-tight mb-1">STRATEGIC<br />GUIDANCE</h4>
                                <p className="text-[#555] text-[10px] md:text-[11px] leading-tight font-medium">For sustainable<br />growth</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start gap-3 w-full sm:w-[24%] border-b sm:border-b-0 sm:border-r border-[#d1dcd0] pb-3 sm:pb-0 sm:pr-2 last:border-0">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#c5d8c3] shadow-sm">
                                <Lightbulb size={20} className="text-[#2e7d32]" />
                            </div>
                            <div>
                                <h4 className="text-[#1b5e20] font-bold text-[11px] md:text-[12px] leading-tight mb-1">INDUSTRY<br />EXPERTISE</h4>
                                <p className="text-[#555] text-[10px] md:text-[11px] leading-tight font-medium">Driving innovation<br />& impact</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-start gap-3 w-full sm:w-[24%]">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#c5d8c3] shadow-sm">
                                <Handshake size={20} className="text-[#2e7d32]" />
                            </div>
                            <div>
                                <h4 className="text-[#1b5e20] font-bold text-[11px] md:text-[12px] leading-tight mb-1">COLLABORATIVE<br />LEADERSHIP</h4>
                                <p className="text-[#555] text-[10px] md:text-[11px] leading-tight font-medium">Building a stronger<br />organic ecosystem</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvisoryHero;

"use client";

import React from "react";
import Image from "next/image";
import heroBanner from "../../../assets/about/advisory_board_member/nominte.png";
import { Users, Lightbulb, Handshake, Globe } from "lucide-react";

const NominateHero = () => {
    return (
        <section className="relative w-full min-h-[380px] md:min-h-[420px] lg:min-h-[450px] flex items-center overflow-hidden bg-[#f9fbf9]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0 hidden sm:block">
                <Image
                    src={heroBanner}
                    alt="Nominate Advisory Board Member"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>

            {/* Mobile Background (if any) */}
            <div className="absolute right-0 top-0 w-full h-full z-0 block sm:hidden opacity-20">
                <Image
                    src={heroBanner}
                    alt="Nominate Advisory Board Member"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full px-4 md:px-14 h-full flex flex-col justify-center py-12 md:py-16">
                <div className="max-w-xl md:max-w-2xl text-left mt-6 md:mt-0 space-y-3 w-full relative z-10">

                    <div className="font-bold text-[11px] md:text-[14px] tracking-[0.15em] text-[#1b5e20] uppercase font-poppins flex items-center gap-1.5">
                        <span className="relative">
                            JOIN
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#fbbf24]"></span>
                        </span>
                        <span>OUR LEADERSHIP COUNCIL</span>
                    </div>

                    <h1 className="font-semibold leading-[1.1] font-poppins text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] tracking-tight">
                        <span className="text-[#1f2937]">Nominate an</span> <br className="hidden sm:block" />
                        <span className="text-[#105b2b]">Advisory Board Member</span>
                    </h1>

                    <p className="text-[#444] font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-lg pt-1">
                        Recognize leaders who can guide, support and<br className="hidden sm:block" />
                        strengthen the vision of Bharat Organic Expo.
                    </p>

                    {/* 4 Icons Row */}
                    <div className="flex items-center gap-5 md:gap-8 pt-6">
                        <div className="flex flex-col items-center gap-2 pr-5 md:pr-8 border-r border-gray-300">
                            <Users size={32} className="text-[#1b5e20] stroke-[1.5]" />
                            <span className="text-[#1b5e20] font-semibold text-[12px] md:text-[14px]">Expertise</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 pr-5 md:pr-8 border-r border-gray-300">
                            <Lightbulb size={32} className="text-[#1b5e20] stroke-[1.5]" />
                            <span className="text-[#1b5e20] font-semibold text-[12px] md:text-[14px]">Vision</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 pr-5 md:pr-8 border-r border-gray-300">
                            <Handshake size={32} className="text-[#1b5e20] stroke-[1.5]" />
                            <span className="text-[#1b5e20] font-semibold text-[12px] md:text-[14px]">Collaboration</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Globe size={32} className="text-[#1b5e20] stroke-[1.5]" />
                            <span className="text-[#1b5e20] font-semibold text-[12px] md:text-[14px]">Global Impact</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NominateHero;

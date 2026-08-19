import React from "react";
import { Target, Globe2, Lightbulb, ShieldCheck, ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import nominateBg from "../../../assets/about/advisory_board_member/nominate1.png";

const WhyJoinAdvisory = () => {
    const benefits = [
        {
            icon: Target,
            title: "Shape the Future",
            description: "Contribute to strategic discussions and help build a healthier world.",
            color: "text-[#3b8c2a]",
            bgLight: "bg-[#f3faef]",
            borderColor: "border-[#e2f0d9]",
            borderBottom: "border-b-[#3b8c2a]",
            hoverShadow: "hover:shadow-[0_12px_25px_rgba(59,140,42,0.15)]",
            hoverBg: "group-hover:bg-[#3b8c2a]"
        },
        {
            icon: Globe2,
            title: "Global Influence",
            description: "Engage with leaders and experts from across the globe.",
            color: "text-[#0284c7]",
            bgLight: "bg-[#f0f9ff]",
            borderColor: "border-[#e0f2fe]",
            borderBottom: "border-b-[#0284c7]",
            hoverShadow: "hover:shadow-[0_12px_25px_rgba(2,132,199,0.15)]",
            hoverBg: "group-hover:bg-[#0284c7]"
        },
        {
            icon: Lightbulb,
            title: "Thought Leadership",
            description: "Position yourself as a trusted voice in the health & organic ecosystem.",
            color: "text-[#f97316]",
            bgLight: "bg-[#fff4ed]",
            borderColor: "border-[#ffe4d1]",
            borderBottom: "border-b-[#f97316]",
            hoverShadow: "hover:shadow-[0_12px_25px_rgba(249,115,22,0.15)]",
            hoverBg: "group-hover:bg-[#f97316]"
        },
        {
            icon: ShieldCheck,
            title: "Drive Impact",
            description: "Catalyze innovation, sustainability, and industry growth.",
            color: "text-[#1a4731]",
            bgLight: "bg-[#eff7f3]",
            borderColor: "border-[#d1e8dc]",
            borderBottom: "border-b-[#1a4731]",
            hoverShadow: "hover:shadow-[0_12px_25px_rgba(26,71,49,0.15)]",
            hoverBg: "group-hover:bg-[#1a4731]"
        }
    ];

    return (
        <section className="w-full py-2 lg:py-6 bg-[#EFF7EE] relative">
            <div className="w-full px-4 md:px-11">

                {/* Top Section: Why Join & Cards */}
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 mb-4 items-start">

                    {/* Left: Text Block */}
                    <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col pt-2">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-[2px] bg-[#f97316]"></div>
                            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                            <span className="text-[#f97316] text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase">
                                WHY JOIN
                            </span>
                            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                            <div className="w-8 h-[2px] bg-[#f97316]"></div>
                        </div>
                        <h2 className="font-serif text-[#113d29] font-semibold text-[18px] sm:text-[22px] lg:text-[28px] leading-[1.2] tracking-tight mb-4">
                            The Advisory Board?
                        </h2>
                        <p className="text-[#4a4a4a] font-medium text-[15px] md:text-[16px] leading-relaxed">
                            Be at the forefront of transformative initiatives in the Health & Organic Wellness industry.
                        </p>
                    </div>

                    {/* Right: 4 Cards Grid */}
                    <div className="w-full lg:w-2/3 xl:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index} className={`${benefit.bgLight} rounded-2xl px-4 py-5 shadow-sm border ${benefit.borderColor} border-b-[3px] ${benefit.borderBottom} ${benefit.hoverShadow} hover:-translate-y-1.5 transform transition-all duration-300 group cursor-default flex flex-col items-center text-center`}>
                                        <div className={`w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 ${benefit.color} group-hover:scale-110 ${benefit.hoverBg} group-hover:text-white transition-all duration-300`}>
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-[#111] font-semibold text-[14px] md:text-[15px] mb-1.5 leading-snug">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-[#555] text-[13px] leading-snug">
                                            {benefit.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Banner Section */}
                <div
                    className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#3b8c2a]/20"
                    style={{
                        backgroundImage: `url(${nominateBg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Subtle pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                    </div>

                    {/* Banner Content Container */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-4 md:px-10 lg:px-11 gap-6">

                        {/* Left Side: Banner Text */}
                        <div className="w-full md:w-2/3 flex flex-col items-start md:pr-10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-[2px] bg-[#f97316]"></div>
                                <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                                <span className="text-[#f97316] text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase">
                                    BE PART OF A TRANSFORMATIVE JOURNEY
                                </span>
                                <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                                <div className="hidden sm:block w-8 h-[2px] bg-[#f97316]"></div>
                            </div>
                            <h2 className="font-serif text-[#113d29] font-semibold text-[22px] sm:text-[26px] lg:text-[32px] leading-[1.2] tracking-tight mb-3">
                                Nominate for the <span className="text-[#3b8c2a]">Advisory Board</span>
                            </h2>
                            <p className="text-[#555] font-medium text-[13px] md:text-[15px] max-w-[580px] mb-4 leading-relaxed">
                                Help us bring the right leaders together to catalyze innovation, sustainability, and industry growth. By nominating experts to our Advisory Board, you contribute directly to shaping the future of organic wellness, driving impactful policies, and fostering a global network dedicated to a sustainable tomorrow.
                            </p>

                            {/* 4 Feature Icons Row */}
                            <div className="flex items-center justify-start gap-4 md:gap-6 divide-x divide-gray-300">
                                <div className="flex flex-col items-center justify-center gap-2 px-2 first:pl-0 group cursor-default">
                                    <div className="w-10 h-10 rounded-full border border-[#3b8c2a]/30 bg-[#f8fcf6] group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] text-[#1f471b] group-hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    </div>
                                    <span className="text-center text-[#333] font-bold text-[9px] md:text-[10px] tracking-widest uppercase max-w-[80px]">
                                        STRONGER<br />LEADERSHIP
                                    </span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2 px-2 md:px-4 group cursor-default">
                                    <div className="w-10 h-10 rounded-full border border-[#3b8c2a]/30 bg-[#f8fcf6] group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] text-[#1f471b] group-hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <Leaf size={20} strokeWidth={2} />
                                    </div>
                                    <span className="text-center text-[#333] font-bold text-[9px] md:text-[10px] tracking-widest uppercase max-w-[80px]">
                                        SUSTAINABLE<br />FUTURE
                                    </span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2 px-2 md:px-4 group cursor-default">
                                    <div className="w-10 h-10 rounded-full border border-[#3b8c2a]/30 bg-[#f8fcf6] group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] text-[#1f471b] group-hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <Lightbulb size={20} strokeWidth={2} />
                                    </div>
                                    <span className="text-center text-[#333] font-bold text-[9px] md:text-[10px] tracking-widest uppercase max-w-[80px]">
                                        INNOVATION<br />DRIVEN
                                    </span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2 px-2 md:px-4 group cursor-default">
                                    <div className="w-10 h-10 rounded-full border border-[#3b8c2a]/30 bg-[#f8fcf6] group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] text-[#1f471b] group-hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                    </div>
                                    <span className="text-center text-[#333] font-bold text-[9px] md:text-[10px] tracking-widest uppercase max-w-[80px]">
                                        INDUSTRY<br />GROWTH
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Graphic & Button */}
                        <div className="w-full md:w-1/3 flex flex-col items-center justify-center relative gap-5 mt-32 md:mt-40">


                            <Link
                                href="/nominate"
                                className="group inline-flex items-center gap-3 bg-[#f5c742] text-[#1f471b] px-6 py-3 rounded-full font-bold text-[12px] md:text-[13px] tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:bg-[#e0b536] hover:-translate-y-0.5 z-20 shrink-0"
                            >
                                Nominate Now
                                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyJoinAdvisory;

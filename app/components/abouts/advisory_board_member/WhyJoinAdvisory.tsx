import React from "react";
import { Target, Globe2, Lightbulb, ShieldCheck, ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

const WhyJoinAdvisory = () => {
    const benefits = [
        {
            icon: Target,
            title: "Shape the Future",
            description: "Contribute to strategic discussions and help build a healthier world."
        },
        {
            icon: Globe2,
            title: "Global Influence",
            description: "Engage with leaders and experts from across the globe."
        },
        {
            icon: Lightbulb,
            title: "Thought Leadership",
            description: "Position yourself as a trusted voice in the health & organic ecosystem."
        },
        {
            icon: ShieldCheck,
            title: "Drive Impact",
            description: "Catalyze innovation, sustainability, and industry growth."
        }
    ];

    return (
        <section className="w-full py-2 lg:py-4 bg-[#EFF7EE] relative">
            <div className="w-full px-4 md:px-11">

                {/* Top Section: Why Join & Cards */}
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 mb-16 items-start">

                    {/* Left: Text Block */}
                    <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col pt-2">
                        <span className="text-[#1f471b] font-bold text-[12px] md:text-[16px] tracking-widest uppercase mb-1">
                            WHY JOIN
                        </span>
                        <h2 className="text-[#1f471b] font-black text-[28px] md:text-[34px] leading-tight mb-4">
                            THE ADVISORY BOARD?
                        </h2>
                        <div className="w-12 h-[2px] bg-[#f58220] mb-6"></div>
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
                                    <div key={index} className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(59,140,42,0.15)] hover:-translate-y-2 transform transition-all duration-300 group cursor-default">
                                        <div className="w-12 h-12 rounded-full border border-[#3b8c2a]/30 bg-[#f8fcf6] flex items-center justify-center text-[#1f471b] mb-5 group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] group-hover:text-white transition-all duration-300">
                                            <Icon size={22} strokeWidth={2} />
                                        </div>
                                        <h3 className="text-[#1f471b] font-bold text-[15px] mb-3 group-hover:text-[#3b8c2a] transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-[#666] text-[13px] leading-relaxed group-hover:text-[#444] transition-colors duration-300">
                                            {benefit.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Banner Section */}
                <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#3b8c2a] to-[#265c1b] shadow-xl border border-[#3b8c2a]/20">
                    {/* Subtle pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                    </div>

                    {/* Banner Content Container */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-10 lg:px-12 gap-6">

                        {/* Left Side: Banner Text */}
                        <div className="w-full md:w-2/3 flex flex-col items-start">
                            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[#F4E3A1] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-3 border border-white/20 backdrop-blur-sm">
                                Be Part of a Transformative Journey
                            </span>
                            <h2 className="text-white font-serif text-[24px] md:text-[30px] lg:text-[36px] leading-[1.15] mb-3">
                                Nominate for the <br className="hidden md:block" />
                                <span className="font-sans font-black tracking-tight">ADVISORY BOARD</span>
                            </h2>
                            <p className="text-white/90 font-medium text-[13px] md:text-[14px] max-w-md mb-2 md:mb-0 leading-relaxed">
                                Help us bring the right leaders together to catalyze innovation, sustainability, and industry growth.
                            </p>
                        </div>

                        {/* Right Side: Graphic & Button */}
                        <div className="w-full md:w-1/3 flex flex-col items-center justify-center relative gap-5">
                            <div className="hidden md:flex relative w-20 h-20 items-center justify-center shrink-0">
                                {/* Glowing aura */}
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                                {/* Spinning dashed ring */}
                                <div className="absolute inset-2 rounded-full border border-dashed border-white/40 animate-[spin_20s_linear_infinite]"></div>
                                {/* Inner solid circle */}
                                <div className="absolute inset-4 bg-white/10 backdrop-blur-md rounded-full shadow-inner border border-white/20"></div>
                                {/* Center Icon */}
                                <Leaf size={28} className="text-white drop-shadow-md relative z-10" strokeWidth={1.5} />
                            </div>

                            <Link
                                href="/nominate"
                                className="group inline-flex items-center gap-3 bg-white text-[#1f471b] px-6 py-3 rounded-full font-bold text-[12px] md:text-[13px] tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:bg-[#F4E3A1] hover:-translate-y-0.5 z-20 shrink-0"
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

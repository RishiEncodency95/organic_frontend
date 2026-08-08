"use client";
import aboutImg from "../../assets/home/homeabout.png";


import React from 'react';
import { Globe, Users, Award, Store, ArrowRight, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

// You might want to replace this with the actual image path you have

const HomeAbout = () => {
    return (
        <section className="py-2 md:py-4 relative bg-[#fafafa] overflow-hidden">
            {/* Decorative Dots Top Right - Triangle shape like the image */}
            <div className="absolute top-8 right-10 lg:right-4 hidden lg:flex flex-col gap-1.5 items-end opacity-60">
                <div className="flex gap-1.5"><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /></div>
                <div className="flex gap-1.5"><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /></div>
                <div className="flex gap-1.5"><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /></div>
                <div className="flex gap-1.5"><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /><div className="w-1 h-1 rounded-full bg-[#3b8c2a]" /></div>
            </div>

            <div className="w-full max-w-full px-4 lg:px-11">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">

                    {/* Left Side: Images */}
                    <div className="w-full lg:w-[40%] relative flex-shrink-0">
                        {/* The main rounded image with premium logo-themed gradient border and glow */}
                        <div className="relative z-10 rounded-[1.8rem] p-[4px] bg-gradient-to-br from-[#F2B40E] via-[#3b8c2a] to-[#1f471b] shadow-[0_20px_50px_rgba(242,180,14,0.25)] w-full h-[320px] md:h-[380px] group">
                            <div className="rounded-[1.6rem] overflow-hidden w-full h-full relative">
                                <img
                                    src={aboutImg.src}
                                    alt="Organic Expo Exhibition"
                                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Inner glow overlay */}
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none rounded-[1.6rem]"></div>
                            </div>
                        </div>



                        {/* Decorative Leaves (Bottom Left) */}
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMTAgOTBDMzAgOTAgNTAgNzAgNTAgNTBDNTAgMzAgMzAgMTAgMTAgMTBDMTAgMzAgMzAgNTAgNTAgNzBDNTAgOTAgMzAgMTAwIDEwIDkwWiIgZmlsbD0iIzNiOGMyYSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] bg-no-repeat bg-contain -z-10" />
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-[60%] flex flex-col justify-center mt-4 lg:mt-0 py-2">
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#F2B40E]/10 to-[#f58220]/10 font-black text-[10px] tracking-[0.2em] uppercase mb-4 rounded-full shadow-[0_0_15px_rgba(242,180,14,0.3)] border border-[#F2B40E]/40 w-max">
                                <Sun className="w-3.5 h-3.5 text-[#f58220] animate-[spin_8s_linear_infinite]" fill="currentColor" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] to-[#b45309]">ABOUT ORGANIC EXPO</span>
                            </div>

                            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#111827] leading-[1.2] mb-4 tracking-tight">
                                WHO WE  <span className="text-[#f58220] ">ARE</span>
                            </h2>

                            <div className="space-y-4 max-w-[660px]">
                                <p className="text-[#4b5563] text-[14px] md:text-[15px] leading-[1.7] border-l-4 border-[#F2B40E] pl-4">
                                    <strong className="text-[#111827] font-bold">Bharat Organic Expo 2027</strong> is India's most influential international exhibition & conference dedicated to organic products, wellness, Ayurveda, and sustainable living. We bring together global brands, innovators, buyers, and policymakers to build connections and create transformative opportunities.
                                </p>
                                
                                <p className="text-[#4b5563] text-[14px] md:text-[15px] leading-[1.7]">
                                    As a comprehensive platform for organic agriculture and natural healthcare, we unite a diverse community of eco-friendly innovators and traditional farmers. Our mission is to promote wellness through nature, foster responsible networking, and ensure economic growth for grassroots producers on a global stage.
                                </p>

                                <p className="text-[#4b5563] text-[14px] md:text-[15px] leading-[1.7]">
                                    Every year, thousands of passionate visitors, wholesale buyers, and visionary investors converge at our event. Together, they participate in groundbreaking discussions, discover new market trends, and form lasting partnerships to actively build a cleaner, greener, and more sustainable future.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid Removed */}

                        {/* CTA Button */}
                        <div>
                            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white font-bold text-[11px] uppercase tracking-wide hover:bg-[#F2B40E] hover:text-[#0b2912] transition-colors duration-300 group shadow-md hover:shadow-lg">
                                KNOW MORE ABOUT US
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeAbout;

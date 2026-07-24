"use client";
import aboutImg from "../../assets/home/homeabout.png";


import React from 'react';
import { Globe, Users, Award, Store, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// You might want to replace this with the actual image path you have

const HomeAbout = () => {
    const stats = [
        {
            icon: <Award className="w-5 h-5 text-[#3b8c2a]" />,
            value: "10+",
            label: "YEARS OF LEGACY"
        },
        {
            icon: <Users className="w-5 h-5 text-[#3b8c2a]" />,
            value: "8",
            label: "SUCCESSFUL EDITIONS"
        },
        {
            icon: <Store className="w-5 h-5 text-[#3b8c2a]" />,
            value: "10,000+",
            label: "EXHIBITORS & BRANDS"
        },
        {
            icon: <Globe className="w-5 h-5 text-[#3b8c2a]" />,
            value: "80+",
            label: "COUNTRIES PARTICIPATED"
        }
    ];

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
                        {/* The main rounded image */}
                        <div className="relative z-10 rounded-[1.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] w-full h-[320px] md:h-[380px]">
                            <img
                                src={aboutImg.src}
                                alt="Organic Expo Exhibition"
                                className="w-full h-full object-cover absolute inset-0"
                            />
                        </div>

                        {/* Overlapping Green Box */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#3B8D2A] text-white p-5 md:p-6 rounded-[1.25rem] shadow-2xl w-[240px] md:w-[260px] z-20"
                        >
                            <Globe className="w-6 h-6 text-[#f1c40f] mb-3" strokeWidth={1.5} />
                            <h3 className="text-[17px] md:text-[19px] font-semibold leading-[1.2] tracking-tight">
                                A Global<br />
                                Platform for<br />
                                Health, Wellness<br />
                                & Organic Solutions
                            </h3>
                        </motion.div>

                        {/* Decorative Leaves (Bottom Left) */}
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMTAgOTBDMzAgOTAgNTAgNzAgNTAgNTBDNTAgMzAgMzAgMTAgMTAgMTBDMTAgMzAgMzAgNTAgNTAgNzBDNTAgOTAgMzAgMTAwIDEwIDkwWiIgZmlsbD0iIzNiOGMyYSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] bg-no-repeat bg-contain -z-10" />
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-[60%] flex flex-col justify-center mt-10 lg:mt-0 py-2">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 text-[#3b8c2a] font-bold text-[10px] tracking-wider uppercase mb-3">
                                ABOUT ORGANIC EXPO
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><path d="m9 18 6-6-6-6" /></svg>
                            </div>

                            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#111827] leading-[1.2] mb-4 tracking-tight">
                                Uniting the World for a<br />
                                <span className="text-[#154726] border-b-[2.5px] border-[#3b8c2a] pb-1">Healthier, Sustainable Future</span>
                            </h2>

                            <p className="text-[#4b5563] text-[14px] md:text-[15px] leading-[1.6] max-w-[660px]">
                                Organic Expo 2027 is India's most influential international exhibition & conference
                                dedicated to organic products, healthcare, wellness, Ayurveda, and sustainable living.
                                Bringing together global brands, innovators, buyers, investors, policymakers, and
                                healthcare leaders to build connections, share knowledge, and create
                                transformative opportunities.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-7 w-full">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                                    <div className="mb-3 relative w-fit">
                                        {/* The main green icon */}
                                        {React.cloneElement(stat.icon, { className: "w-[18px] h-[18px] text-[#3b8c2a]", strokeWidth: 1.5 })}
                                        {/* The small yellow accent */}
                                        <div className="absolute -top-0.5 -right-1 w-1.5 h-1.5 rounded-full bg-[#f1c40f] border-[1.5px] border-white" />
                                    </div>
                                    <div className="text-[20px] md:text-[22px] font-bold text-[#111827] mb-1 leading-none">
                                        {stat.value}
                                    </div>
                                    <div className="text-[8px] font-bold text-[#6b7280] uppercase tracking-wider leading-[1.3]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div>
                            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#e63946] bg-[#3b8c2a] text-white font-bold text-[11px] uppercase tracking-wide hover:bg-[#1a3a14] transition-colors duration-300 group">
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

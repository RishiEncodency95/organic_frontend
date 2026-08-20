"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, ChevronDown, Store, Briefcase, Users, UserPlus, Globe, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { SITE_CONFIG } from "@/app/constants/siteConfig";
import SectionContainer from "@/app/components/layout/SectionContainer";

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

const Topbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const topbarEmail = SITE_CONFIG.email;
    const topbarPhone = SITE_CONFIG.phone;
    const marqueeText = `${SITE_CONFIG.stats.speakers} SPEAKERS CONFIRMED • EARLY BIRD DISCOUNT ENDING SOON! • JOIN ${SITE_CONFIG.stats.visitors} PROFESSIONALS FROM ${SITE_CONFIG.stats.countries} COUNTRIES`;
    const deligate = SITE_CONFIG.deligate;
    return (
        <>
            <style>{`
                .wave-btn {
                 display: inline-flex;
                 align-items: center;
                 gap: 4px;
                 padding: 6px 14px;
                 border: 1px solid #f58220;
                 border-radius: 4px;
                 transition: all 0.2s ease-in;
                 position: relative;
                 overflow: hidden;
                 font-size: 10px;
                 font-weight: 600;
                 cursor: pointer;
                 color: #fff;
                 z-index: 1;
                 text-transform: uppercase;
                 letter-spacing: 0.05em;
                 background-color: transparent;
                }
                
                .wave-btn:before {
                 content: "";
                 position: absolute;
                 left: 50%;
                 transform: translateX(-50%) scaleY(1) scaleX(1.25);
                 top: 100%;
                 width: 140%;
                 height: 180%;
                 background-color: rgba(255, 255, 255, 0.05);
                 border-radius: 50%;
                 display: block;
                 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
                 z-index: -1;
                }
                
                .wave-btn:after {
                 content: "";
                 position: absolute;
                 left: 55%;
                 transform: translateX(-50%) scaleY(1) scaleX(1.45);
                 top: 180%;
                 width: 160%;
                 height: 190%;
                 background-color: #f58220;
                 border-radius: 50%;
                 display: block;
                 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
                 z-index: -1;
                }
                
                .wave-btn:hover {
                 color: #ffffff;
                 border: 1px solid #f58220;
                }
                
                .wave-btn:hover:before {
                 top: -35%;
                 background-color: #f58220;
                 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
                }
                
                .wave-btn:hover:after {
                 top: -45%;
                 background-color: #f58220;
                 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
                }
                
                .wave-btn.btn-white {
                 background-color: #fff;
                 border: 1px solid #fff;
                 color: #000;
                }
                .wave-btn.btn-white:after {
                 background-color: #f58220;
                }
                .wave-btn.btn-white:hover {
                 border: 1px solid #f58220;
                 color: #fff;
                }
                .wave-btn.btn-white:hover:before,
                .wave-btn.btn-white:hover:after {
                 background-color: #f58220;
                }
            `}</style>

            <motion.div
                className="bg-black border-b border-[#3b8c2a]/30 text-slate-200 text-[11px] relative z-[150] py-1 shadow-md shadow-black/20"
            >
                <SectionContainer className="flex items-center justify-between py-1 flex-nowrap gap-x-4">
                    {/* Left Section - Contact Info (Compact on mobile) */}
                    <div className="flex items-center justify-between md:justify-start gap-2 md:gap-6 w-full md:w-auto overflow-hidden flex-shrink-0 px-1">
                        <a
                            href={`mailto:${topbarEmail}`}
                            className="flex items-center gap-1.5 text-white hover:text-slate-200 transition-colors duration-300 font-semibold text-[9px] md:text-[11px] whitespace-nowrap group"
                        >
                            <Mail className="w-3 h-3 text-[#c2410c] transition-colors" />
                            <span className="text-white">{topbarEmail}</span>
                        </a>

                        <a
                            href={`tel:${topbarPhone.replace(/\s+/g, '')}`}
                            className="flex items-center gap-1.5 text-white hover:text-slate-200 transition-colors duration-300 font-semibold text-[9px] md:text-[11px] whitespace-nowrap group"
                        >
                            <Phone className="w-3 h-3 text-[#c2410c] transition-colors" />
                            <span className="text-white">{topbarPhone}</span>
                        </a>
                    </div>


                    {/* Right Section */}
                    <div className="hidden md:flex flex-shrink-0 items-center gap-3 pl-2">

                        {/* Register Now Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("registration")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                className="wave-btn flex-shrink-0"
                            >
                                Register Now
                                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", activeDropdown === "registration" ? "rotate-180" : "")} />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === "registration" && (
                                    <div className="absolute top-[calc(100%-2px)] right-0 pt-4 w-[260px] z-50">
                                        <div className="absolute top-[10px] right-10 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45 z-10" />
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                            transition={{ type: "spring" as const, damping: 25, stiffness: 300 }}
                                            className="relative bg-white rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-slate-100 p-1 overflow-hidden z-20"
                                        >
                                            <div className="grid grid-cols-2">
                                                {[
                                                    { to: "/registration/book-a-stand", icon: Store, label: "BOOK A\nSTALL", color: "orange" },
                                                    { to: "/registration/visitor-registration", icon: UserPlus, label: "REGISTER AS\nVISITOR", color: "green" },
                                                    { to: deligate, icon: Globe, label: "DELEGATE\nREGISTRATION", color: "orange" },
                                                    { to: "/registration/buyer-registration", icon: Users, label: "REGISTER AS\nBUYER", color: "green" },
                                                    { to: "/sponsership", icon: Award, label: "SPONSORSHIP\nOPPORTUNITIES", color: "orange" },
                                                    { to: "tel:+919654900525", icon: Phone, label: "TALK TO EXPO\nADVISOR", color: "green" },
                                                ].map((item, idx) => {
                                                    const commonProps = {
                                                        onClick: () => setActiveDropdown(null),
                                                        className: cn(
                                                            "flex items-center gap-1.5 px-2 py-2 hover:bg-slate-50 text-left transition-all group relative z-20 border-b border-slate-100",
                                                            idx % 2 === 0 ? "border-r" : ""
                                                        )
                                                    };

                                                    const Content = (
                                                        <>
                                                            <div className={cn(
                                                                "w-6 h-6 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm",
                                                                item.color === "orange"
                                                                    ? "bg-[#f59e0b]/5 text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-white"
                                                                    : "bg-[#3b8c2a]/5 text-[#3b8c2a] group-hover:bg-[#3b8c2a] group-hover:text-white"
                                                            )}>
                                                                <item.icon className="w-3 h-3" />
                                                            </div>
                                                            <span style={{ fontFamily: "'Poppins', sans-serif" }} className={cn(
                                                                "text-[9.5px] font-semibold text-slate-800 uppercase tracking-wider transition-colors leading-tight whitespace-pre-line",
                                                                item.color === "orange" ? "group-hover:text-[#f59e0b]" : "group-hover:text-[#3b8c2a]"
                                                            )}>
                                                                {item.label}
                                                            </span>
                                                        </>
                                                    );

                                                    return item.to.startsWith("tel:") ? (
                                                        <a key={item.to} href={item.to} {...commonProps}>{Content}</a>
                                                    ) : (
                                                        <Link key={item.to} href={item.to} target="_blank" rel="noopener noreferrer" {...commonProps}>{Content}</Link>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* User Login Dropdown */}
                        <div className="relative group">
                            <button
                                className="wave-btn btn-white"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                Login
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 top-[calc(100%-2px)] pt-4 w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200]">
                                <div className="absolute top-[10px] right-10 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45 z-10" />
                                <div className="relative bg-white rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-slate-100 p-1 overflow-hidden z-20">
                                    <div className="grid grid-cols-2">
                                        {[
                                            { to: "https://admin.organicexpo.in/login", icon: UserPlus, label: "USER\nLOGIN", color: "orange", external: true },
                                            { to: "/exhibitor-login", icon: Store, label: "EXHIBITOR\nLOGIN", color: "green", external: false },
                                            { to: "/buyer-login", icon: Briefcase, label: "BUYER\nLOGIN", color: "orange", external: false },
                                            { to: "/delegates-login", icon: Users, label: "DELEGATES\nLOGIN", color: "green", external: false },
                                        ].map((item, idx) => {
                                            const commonProps = {
                                                className: cn(
                                                    "flex items-center gap-1.5 px-2 py-2 hover:bg-slate-50 text-left transition-all group/link relative z-20 border-b border-slate-100",
                                                    idx % 2 === 0 ? "border-r" : "",
                                                    idx >= 2 ? "border-b-0" : ""
                                                )
                                            };

                                            const Content = (
                                                <>
                                                    <div className={cn(
                                                        "w-6 h-6 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm",
                                                        item.color === "orange"
                                                            ? "bg-[#f59e0b]/5 text-[#f59e0b] group-hover/link:bg-[#f59e0b] group-hover/link:text-white"
                                                            : "bg-[#3b8c2a]/5 text-[#3b8c2a] group-hover/link:bg-[#3b8c2a] group-hover/link:text-white"
                                                    )}>
                                                        <item.icon className="w-3 h-3" />
                                                    </div>
                                                    <span style={{ fontFamily: "'Poppins', sans-serif" }} className={cn(
                                                        "text-[9.5px] font-semibold text-slate-800 uppercase tracking-wider transition-colors leading-tight whitespace-pre-line",
                                                        item.color === "orange" ? "group-hover/link:text-[#f59e0b]" : "group-hover/link:text-[#3b8c2a]"
                                                    )}>
                                                        {item.label}
                                                    </span>
                                                </>
                                            );

                                            return item.external ? (
                                                <a key={item.to} href={item.to} target="_blank" rel="noopener noreferrer" {...commonProps}>{Content}</a>
                                            ) : (
                                                <Link key={item.to} href={item.to} {...commonProps}>{Content}</Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </motion.div>
        </>
    );
};

export default Topbar;

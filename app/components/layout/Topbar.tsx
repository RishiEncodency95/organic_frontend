"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, ChevronDown, Store, Briefcase, Users, UserPlus, Globe, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { SITE_CONFIG } from "@/app/constants/siteConfig";

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

const Topbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const topbarEmail = SITE_CONFIG.email;
    const topbarPhone = SITE_CONFIG.phone;
    const marqueeText = `${SITE_CONFIG.stats.speakers} SPEAKERS CONFIRMED • EARLY BIRD DISCOUNT ENDING SOON! • JOIN ${SITE_CONFIG.stats.visitors} PROFESSIONALS FROM ${SITE_CONFIG.stats.countries} COUNTRIES`;

    return (
        <>

            <motion.div
                className="bg-black border-b border-[#3b8c2a]/30 text-slate-200 text-[11px] relative z-[150] py-1 shadow-md shadow-black/20"
            >
                <div className="container mx-auto max-w-[1400px] flex items-center justify-between px-6 py-1 flex-nowrap gap-x-4">
                    {/* Left Section - Contact Info (Compact on mobile) */}
                    <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 w-full md:w-auto overflow-hidden flex-shrink-0 pl-1">
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
                                className="flex items-center gap-1.5 bg-[#3b8c2a] hover:bg-[#2b6a1f] text-white px-5 py-1.5 rounded-full font-bold text-[10px] md:text-[11px] tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0"
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
                                                    { to: "/book-a-stand", icon: Store, label: "BOOK A\nSTALL", color: "orange" },
                                                    { to: "/visitor-registration", icon: UserPlus, label: "REGISTER AS\nVISITOR", color: "green" },
                                                    { to: "/conference", icon: Globe, label: "DELEGATE\nREGISTRATION", color: "orange" },
                                                    { to: "/buyer-registration", icon: Users, label: "REGISTER AS\nBUYER", color: "green" },
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
                            <a
                                href="https://admin.organicexpo.in/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 bg-[#f58220] hover:bg-[#d9731b] text-white px-5 py-1.5 rounded-full font-bold text-[10px] md:text-[11px] tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                User Login
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </a>

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[200]">
                                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52 flex flex-col relative before:content-[''] before:absolute before:top-[-6px] before:right-8 before:w-3 before:h-3 before:bg-white before:border-t before:border-l before:border-gray-100 before:rotate-45">
                                    <Link
                                        href="/exhibitor-login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 text-[#444] hover:bg-[#EFF7EE] hover:text-[#3b8c2a] px-5 py-3 text-[11px] font-bold tracking-widest transition-colors uppercase border-b border-gray-50 last:border-0 group/link"
                                    >
                                        <Store size={14} className="text-[#3b8c2a] opacity-80 group-hover/link:opacity-100" />
                                        Exhibitor Login
                                    </Link>
                                    <Link
                                        href="/buyer-login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 text-[#444] hover:bg-[#EFF7EE] hover:text-[#3b8c2a] px-5 py-3 text-[11px] font-bold tracking-widest transition-colors uppercase border-b border-gray-50 last:border-0 group/link"
                                    >
                                        <Briefcase size={14} className="text-[#3b8c2a] opacity-80 group-hover/link:opacity-100" />
                                        Buyer Login
                                    </Link>
                                    <Link
                                        href="/delegates-login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 text-[#444] hover:bg-[#EFF7EE] hover:text-[#3b8c2a] px-5 py-3 text-[11px] font-bold tracking-widest transition-colors uppercase border-b border-gray-50 last:border-0 group/link"
                                    >
                                        <Users size={14} className="text-[#3b8c2a] opacity-80 group-hover/link:opacity-100" />
                                        Delegates Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Topbar;

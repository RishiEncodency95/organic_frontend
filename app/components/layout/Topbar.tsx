"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { SITE_CONFIG } from "@/app/constants/siteConfig";

const Topbar = () => {
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


                    <div className="hidden md:flex flex-shrink-0 items-center gap-2">
                        <div className="relative group">
                            <a
                                href="https://admin.organicexpo.in/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="uiverse-btn uiverse-btn-user ml-1 flex items-center gap-1.5 cursor-pointer"
                            >
                                LOGIN <span className="text-[8px]">▼</span>
                            </a>
                            
                            {/* Hover Dropdown */}
                            <div className="absolute right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                                <div className="flex flex-col gap-2 p-3 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-slate-100 min-w-[180px]">
                                    <a
                                        href="https://admin.organicexpo.in/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="uiverse-btn uiverse-btn-user uiverse-btn-mobile text-center"
                                    >
                                        User Login
                                    </a>
                                    <Link
                                        href="/exhibitor-login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="uiverse-btn uiverse-btn-exhibitor uiverse-btn-mobile text-center"
                                    >
                                        Exhibitor Login
                                    </Link>
                                    <Link
                                        href="/buyer-login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="uiverse-btn uiverse-btn-buyer uiverse-btn-mobile text-center"
                                    >
                                        Buyer Login
                                    </Link>
                                    <Link
                                        href="/delegates-login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="uiverse-btn uiverse-btn-delegates uiverse-btn-mobile text-center"
                                    >
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

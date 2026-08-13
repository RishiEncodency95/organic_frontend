"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Topbar = () => {
    const topbarEmail = "info@tilesdesignhouse.com";
    const topbarPhone = "+91 98765 43210";
    const marqueeText = "150+ SPEAKERS CONFIRMED • EARLY BIRD DISCOUNT ENDING SOON! • JOIN 8,000+ PROFESSIONALS FROM 25+ COUNTRIES";

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
                            className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 font-bold text-[9px] md:text-[12px] whitespace-nowrap group"
                        >
                            <Mail className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#F18F01] group-hover:text-white transition-colors" />
                            <span>{topbarEmail}</span>
                        </a>

                        <a
                            href={`tel:${topbarPhone.replace(/\s+/g, '')}`}
                            className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 font-bold text-[9px] md:text-[12px] whitespace-nowrap group"
                        >
                            <Phone className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#F18F01] group-hover:text-white transition-colors" />
                            <span>{topbarPhone}</span>
                        </a>
                    </div>


                    {/* Right Section - Login Buttons */}
                    <div className="hidden md:flex flex-shrink-0 items-center gap-2">
                        <Link
                            href="/exhibitor-login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-[#3b8c2a] text-slate-300 hover:text-white transition-all duration-300 font-bold border border-slate-700 hover:border-[#3b8c2a] text-[9px] uppercase tracking-wider whitespace-nowrap hover:shadow-[0_0_10px_rgba(59,140,42,0.3)] inline-block"
                        >
                            Exhibitor Login
                        </Link>
                        <Link
                            href="/buyer-login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-[#3b8c2a] text-slate-300 hover:text-white transition-all duration-300 font-bold border border-slate-700 hover:border-[#3b8c2a] text-[9px] uppercase tracking-wider whitespace-nowrap hover:shadow-[0_0_10px_rgba(59,140,42,0.3)] inline-block"
                        >
                            Buyer Login
                        </Link>
                        <Link
                            href="/delegates-login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded bg-slate-800 hover:bg-[#3b8c2a] text-slate-300 hover:text-white transition-all duration-300 font-bold border border-slate-700 hover:border-[#3b8c2a] text-[9px] uppercase tracking-wider whitespace-nowrap hover:shadow-[0_0_10px_rgba(59,140,42,0.3)] inline-block text-center"
                        >
                            Delegates Login
                        </Link>
                        <a
                            href="https://admin.organicexpo.in/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded bg-[#3b8c2a] hover:bg-[#2a661e] text-white transition-all duration-300 font-bold border border-[#3b8c2a] hover:border-[#2a661e] text-[9px] uppercase tracking-wider whitespace-nowrap hover:shadow-[0_0_10px_rgba(59,140,42,0.3)] hover:-translate-y-0.5 inline-block text-center ml-1"
                        >
                            User Login
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Topbar;

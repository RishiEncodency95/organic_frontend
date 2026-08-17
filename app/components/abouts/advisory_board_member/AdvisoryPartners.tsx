import React from "react";
import { Leaf, Award, Shield, BookOpen } from "lucide-react";

const AdvisoryPartners = () => {
    return (
        <section className="w-full bg-white border-b border-gray-100 py-3 lg:py-4">
            <div className="max-w-[1400px] mx-auto px-2 md:px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

                    {/* ORGANIZED BY */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 pt-4 lg:pt-0 pb-4 lg:pb-0 px-2 first:pt-0">
                        <span className="text-[#888] font-bold text-[13px] md:text-[14px] tracking-[0.1em] uppercase mb-2">
                            ORGANIZED BY
                        </span>
                        {/* Placeholder for Bharat Bharat Organic Expo 2027 Logo */}
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#f58220]/10 rounded-t-full"></div>
                                <Leaf size={20} className="text-[#3b8c2a] fill-[#3b8c2a] relative z-10 translate-y-0.5" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#1f471b] font-black text-[14px] md:text-[15px] leading-[1.1] tracking-tight">BHARAT ORGANIC</span>
                                <span className="text-[#f58220] font-bold text-[11px] md:text-[12px] leading-[1.1] tracking-wide mt-0.5">EXPO 2027</span>
                            </div>
                        </div>
                    </div>

                    {/* IN ASSOCIATION WITH */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 pt-4 lg:pt-0 pb-4 lg:pb-0 px-2">
                        <span className="text-[#888] font-bold text-[13px] md:text-[14px] tracking-[0.1em] uppercase mb-2">
                            IN ASSOCIATION WITH
                        </span>
                        {/* Placeholder for Indian Organic Association Logo */}
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center w-10 h-10 shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-white border-2 border-t-[#3b8c2a] border-r-[#f58220] border-b-[#4285F4] border-l-[#3b8c2a] rounded-full relative group-hover:rotate-45 transition-transform duration-500">
                                    <div className="w-2 h-2 bg-[#3b8c2a] rounded-full absolute -top-1 shadow-sm"></div>
                                </div>
                            </div>
                            <div className="flex flex-col text-[#0a2e8c]">
                                <span className="text-[8px] font-bold tracking-widest text-gray-500 mb-0.5">PURE ORGANIQUE</span>
                                <span className="font-black text-[13px] md:text-[14px] leading-[1.1] tracking-tight">INDIAN ORGANIC</span>
                                <span className="font-black text-[13px] md:text-[14px] leading-[1.1] tracking-tight">ASSOCIATION</span>
                            </div>
                        </div>
                    </div>

                    {/* SUPPORTED BY */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 pt-4 lg:pt-0 pb-4 lg:pb-0 px-2">
                        <span className="text-[#888] font-bold text-[13px] md:text-[14px] tracking-[0.1em] uppercase mb-2">
                            SUPPORTED BY
                        </span>
                        {/* Placeholder for Ministry of Ayush Logo */}
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="flex flex-col items-center justify-center text-[#d9aa38] bg-white w-10 h-10 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                                <Award size={22} strokeWidth={1.5} className="mt-0.5" />
                            </div>
                            <div className="flex flex-col text-[#2c3e50]">
                                <span className="font-black text-[14px] md:text-[15px] leading-[1.1] tracking-tight">MINISTRY OF AYUSH</span>
                                <span className="font-bold text-[9px] md:text-[10px] leading-[1.1] text-gray-500 tracking-widest mt-0.5">GOVT. OF INDIA</span>
                            </div>
                        </div>
                    </div>

                    {/* KNOWLEDGE PARTNER */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 pt-4 lg:pt-0 pb-4 lg:pb-0 px-2">
                        <span className="text-[#888] font-bold text-[13px] md:text-[14px] tracking-[0.1em] uppercase mb-2">
                            KNOWLEDGE PARTNER
                        </span>
                        {/* Placeholder for National Medicinal Plants Board */}
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#e8f5e9] shadow-[0_2px_8px_rgba(0,0,0,0.05)] rounded-full border border-[#4caf50]/30 group-hover:bg-[#4caf50] transition-colors duration-300">
                                <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full">
                                    <Leaf size={16} className="text-[#1b5e20] fill-[#1b5e20] group-hover:scale-105 transition-transform duration-300" />
                                </div>
                            </div>
                            <div className="flex flex-col text-[#1b5e20]">
                                <span className="font-black text-[13px] md:text-[14px] leading-[1.1] tracking-tight">NATIONAL MEDICINAL</span>
                                <span className="font-black text-[13px] md:text-[14px] leading-[1.1] tracking-tight">PLANTS BOARD</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvisoryPartners;

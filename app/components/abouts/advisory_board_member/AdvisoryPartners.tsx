import React from "react";
import { Leaf, Award } from "lucide-react";

const AdvisoryPartners = () => {
    return (
        <section className="w-full bg-white border-b border-gray-100 py-4 lg:py-6">
            <div className="w-full px-8 md:px-11">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-2 lg:divide-x divide-gray-100">

                    {/* ORGANIZED BY */}
                    <div className="flex flex-col items-start justify-center w-full lg:w-1/4 px-2">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-4 sm:w-6 h-[2px] bg-[#f97316]"></div>
                            <span className="text-[#f97316] font-semibold text-[12px] md:text-[13px] tracking-[0.1em] uppercase">
                                ORGANIZED BY
                            </span>
                            <div className="w-4 sm:w-6 h-[2px] bg-[#f97316]"></div>
                        </div>
                        <div className="flex items-center justify-center gap-3 group cursor-default">
                            <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:scale-105 transition-transform duration-300 shrink-0">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#f58220]/10 rounded-t-full"></div>
                                <Leaf size={20} className="text-[#3b8c2a] fill-[#3b8c2a] relative z-10 translate-y-0.5" />
                            </div>
                            <div className="flex flex-col gap-0.5 text-left">
                                <span className="text-[#1f471b] font-semibold text-[14px] md:text-[15px] leading-tight tracking-tight">BHARAT ORGANIC</span>
                                <span className="text-[#f58220] font-semisemibold text-[12px] md:text-[13px] leading-tight tracking-wide">EXPO 2027</span>
                            </div>
                        </div>
                    </div>

                    {/* IN ASSOCIATION WITH */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 px-2 pt-4 lg:pt-0">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-4 sm:w-6 h-[2px] bg-[#f97316]"></div>
                            <span className="text-[#f97316] font-semibold text-[11px] md:text-[12px] tracking-[0.1em] uppercase text-center">
                                IN ASSOCIATION WITH
                            </span>
                            <div className="w-4 sm:w-6 h-[2px] bg-[#f97316]"></div>
                        </div>
                        <div className="flex items-center justify-center gap-3 group cursor-default">
                            <div className="flex items-center justify-center shrink-0">
                                <div className="flex items-center justify-center w-10 h-10 shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-white border-2 border-t-[#3b8c2a] border-r-[#f58220] border-b-[#4285F4] border-l-[#3b8c2a] rounded-full relative group-hover:rotate-45 transition-transform duration-500">
                                    <div className="w-2 h-2 bg-[#3b8c2a] rounded-full absolute -top-1 shadow-sm"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-0.5 text-[#0a2e8c] text-left">
                                <span className="text-[10px] font-semibold tracking-[0.1em] text-gray-500">PURE ORGANIQUE</span>
                                <span className="font-semibold text-[14px] md:text-[15px] leading-tight tracking-tight">INDIAN ORGANIC</span>
                                <span className="font-semibold text-[14px] md:text-[15px] leading-tight tracking-tight">ASSOCIATION</span>
                            </div>
                        </div>
                    </div>

                    {/* SUPPORTED BY */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 px-2 pt-4 lg:pt-0">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-4 sm:w-6 h-[2px] bg-[#f97316]"></div>
                            <span className="text-[#f97316] font-semibold text-[12px] md:text-[13px] tracking-[0.1em] uppercase">
                                SUPPORTED BY
                            </span>
                            <div className="w-4 sm:w-6 h-[2px] bg-[#f97316]"></div>
                        </div>
                        <div className="flex items-center justify-center gap-3 group cursor-default">
                            <div className="flex items-center justify-center text-[#d9aa38] bg-white w-10 h-10 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:scale-105 transition-transform duration-300 shrink-0">
                                <Award size={22} strokeWidth={1.5} className="mt-0.5" />
                            </div>
                            <div className="flex flex-col gap-0.5 text-[#2c3e50] text-left">
                                <span className="font-semibold text-[14px] md:text-[15px] leading-tight tracking-tight">MINISTRY OF AYUSH</span>
                                <span className="font-semisemibold text-[11px] md:text-[12px] leading-tight text-gray-500 tracking-wide">GOVT. OF INDIA</span>
                            </div>
                        </div>
                    </div>

                    {/* KNOWLEDGE PARTNER */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 px-2 pt-4 lg:pt-0">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-4 sm:w-6 h-[2px] bg-[#f97316]"></div>
                            <span className="text-[#f97316] font-semibold text-[12px] md:text-[13px] tracking-[0.1em] uppercase">
                                KNOWLEDGE PARTNER
                            </span>
                            <div className="w-4 sm:w-6 h-[2px] bg-[#f97316]"></div>
                        </div>
                        <div className="flex items-center justify-center gap-3 group cursor-default">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#e8f5e9] shadow-[0_2px_8px_rgba(0,0,0,0.05)] rounded-full border border-[#4caf50]/30 group-hover:bg-[#4caf50] transition-colors duration-300 shrink-0">
                                <div className="flex items-center justify-center w-7 h-7 bg-white rounded-full">
                                    <Leaf size={16} className="text-[#1b5e20] fill-[#1b5e20] group-hover:scale-105 transition-transform duration-300" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-0.5 text-[#1b5e20] text-left">
                                <span className="font-semibold text-[14px] md:text-[15px] leading-tight tracking-tight">NATIONAL MEDICINAL</span>
                                <span className="font-semibold text-[14px] md:text-[15px] leading-tight tracking-tight">PLANTS BOARD</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvisoryPartners;

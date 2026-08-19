import React from "react";
import Image from "next/image";
import SectionContainer from "@/app/components/layout/SectionContainer";
import namoLogo from "@/app/assets/logo/namogange.png";
import namo1Logo from "@/app/assets/logos/namo1.png";

const AdvisoryPartners = () => {
    return (
        <section className="w-full bg-white border-b border-gray-100 py-2.5 md:py-3.5 font-inter">
            <SectionContainer>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 lg:divide-x-2 lg:divide-gray-200">

                    {/* ORGANIZED BY */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 px-2">
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-3 sm:w-5 h-[1.5px] bg-[#d26019]"></div>
                            <span className="text-[#d26019] font-bold text-[10px] md:text-[11px] tracking-[0.18em] uppercase font-poppins">
                                ORGANIZED BY
                            </span>
                            <div className="w-3 sm:w-5 h-[1.5px] bg-[#d26019]"></div>
                        </div>
                        <div className="flex items-center justify-center group cursor-default">
                            <Image
                                src={namoLogo}
                                alt="Namo Gange Trust - Organizer"
                                className="h-10 sm:h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* IN ASSOCIATION WITH */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 px-2 pt-2 lg:pt-0">
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-3 sm:w-5 h-[1.5px] bg-[#d26019]"></div>
                            <span className="text-[#d26019] font-bold text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-center font-poppins">
                                IN ASSOCIATION WITH
                            </span>
                            <div className="w-3 sm:w-5 h-[1.5px] bg-[#d26019]"></div>
                        </div>
                        <div className="flex items-center justify-center group cursor-default">
                            <Image
                                src={namo1Logo}
                                alt="Indian Organic Association"
                                className="h-10 sm:h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* SUPPORTED BY */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 px-2 pt-2 lg:pt-0">
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-3 sm:w-5 h-[1.5px] bg-[#d26019]"></div>
                            <span className="text-[#d26019] font-bold text-[10px] md:text-[11px] tracking-[0.18em] uppercase font-poppins">
                                SUPPORTED BY
                            </span>
                            <div className="w-3 sm:w-5 h-[1.5px] bg-[#d26019]"></div>
                        </div>
                        <div className="flex items-center justify-center py-1">
                            <span className="inline-block bg-[#fff7ed] text-[#d26019] border border-[#d26019]/30 px-3 py-1 rounded-full font-bold text-[11px] uppercase tracking-[0.16em] shadow-sm font-poppins">
                                COMING SOON
                            </span>
                        </div>
                    </div>

                    {/* KNOWLEDGE PARTNER */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/4 px-2 pt-2 lg:pt-0">
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-3 sm:w-5 h-[1.5px] bg-[#d26019]"></div>
                            <span className="text-[#d26019] font-bold text-[10px] md:text-[11px] tracking-[0.18em] uppercase font-poppins">
                                KNOWLEDGE PARTNER
                            </span>
                            <div className="w-3 sm:w-5 h-[1.5px] bg-[#d26019]"></div>
                        </div>
                        <div className="flex items-center justify-center py-1">
                            <span className="inline-block bg-[#fff7ed] text-[#d26019] border border-[#d26019]/30 px-3 py-1 rounded-full font-bold text-[11px] uppercase tracking-[0.16em] shadow-sm font-poppins">
                                COMING SOON
                            </span>
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </section>
    );
};

export default AdvisoryPartners;

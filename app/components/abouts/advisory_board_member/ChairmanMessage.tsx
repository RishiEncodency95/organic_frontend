import React from "react";
import Image from "next/image";
import { Eye, Leaf } from "lucide-react";
import vijayImg from "@/app/assets/about/advisory_board_member/vijay.png";

import SectionContainer from "@/app/components/layout/SectionContainer";

const ChairmanMessage = () => {
    return (
        <section className="relative w-full py-6 lg:py-8 overflow-hidden bg-white border-t border-gray-100 font-inter">
            {/* Background Pattern / Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 opacity-10">
                    <Leaf size={120} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                </div>
            </div>

            <SectionContainer className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 xl:gap-8">

                    {/* Left Side: Chairman Image */}
                    <div className="w-full lg:w-[22%] flex justify-center lg:justify-start mt-2 lg:mt-0">
                        <div className="relative w-[190px] sm:w-[210px] lg:w-[220px] h-[250px] sm:h-[270px] lg:h-[290px]">
                            {/* Premium Soft Glow & Geometric Pattern */}
                            <div className="absolute -inset-2 bg-gradient-to-br from-[#3b8c2a]/20 to-[#f58220]/10 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[radial-gradient(#3b8c2a_2px,transparent_2px)] [background-size:8px_8px] opacity-20"></div>
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#f8f9fa] rounded-full border border-[#7ca142]/20"></div>

                            {/* Floating leaf decoration */}
                            <div className="absolute -left-4 -top-4 bg-white p-1.5 rounded-full shadow-md z-20 border border-gray-100">
                                <Leaf size={16} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                            </div>

                            {/* Actual Image */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-[4px] border-white z-10 group bg-gray-50">
                                <Image
                                    src={vijayImg}
                                    alt="Mr. Vijay Sharma - Chairman"
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Middle: Message Content (Shifted slightly Left) */}
                    <div className="w-full lg:w-[50%] flex flex-col justify-center lg:-ml-4">
                        {/* Section Tagline */}
                        <div className="flex items-center gap-2 mb-2">
                            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                            <span className="text-[#d26019] font-bold text-[13px] tracking-[0.22em] uppercase font-poppins">
                                CHAIRMAN'S MESSAGE
                            </span>
                            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-[#23471d] font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.2] mb-3 font-poppins">
                            Leading Together for a Healthier <br className="hidden sm:block" />
                            Tomorrow
                        </h2>

                        {/* Description Paragraphs */}
                        <div className="space-y-2.5 text-gray-900 font-semibold text-sm leading-[1.6] text-justify font-inter">
                            <p>
                                At <strong className="font-semibold text-[#1a2e1a]">Bharat Organic Expo 2027</strong>, we believe in the power of collaboration,
                                innovation, and sustainability.
                            </p>
                            <p>
                                This platform brings together visionaries, experts, and changemakers
                                to create a lasting impact on health and organic wellness.
                            </p>
                        </div>

                        {/* Name and Title */}
                        <div className="mt-4">
                            <h3 className="text-[#1f471b] font-bold text-base sm:text-lg font-poppins">
                                Mr. Vijay Sharma
                            </h3>
                            <p className="text-gray-700 text-xs sm:text-sm font-semibold font-inter mt-0.5">
                                Chairman, Bharat Organic Expo 2027
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Vision Card */}
                    <div className="w-full lg:w-[26%] flex justify-center lg:justify-end">
                        <div className="relative bg-[#f8f9fa] rounded-2xl p-4 sm:p-5 lg:px-5 lg:py-6 w-full max-w-[350px] transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg shadow-md border border-gray-200 border-b-[5px] border-b-[#3b8c2a]">

                            {/* Card Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-11 h-11 flex items-center justify-center group shrink-0">
                                    {/* 3D Icon Container */}
                                    <div className="absolute inset-0 bg-white rounded-full border border-[#3b8c2a]/30 group-hover:rotate-12 transition-transform duration-500"></div>
                                    <Eye size={20} strokeWidth={2.2} className="text-[#3b8c2a] relative z-10" />
                                </div>
                                <span className="text-[#1f471b] font-bold text-sm tracking-wider uppercase font-poppins">
                                    OUR VISION
                                </span>
                            </div>

                            {/* Card Content */}
                            <p className="text-gray-900 font-semibold text-xs sm:text-[13px] leading-[1.6] text-justify font-inter pb-6 relative z-10">
                                A global platform for innovation and collaboration in the organic, health & wellness industry. We aim to empower communities, promote sustainable practices, and drive transformative growth by connecting visionaries and eco-conscious enterprises worldwide.
                            </p>

                            {/* 3D Divider Line */}
                            <div className="flex items-center gap-2 opacity-90 mt-auto">
                                <div className="w-10 h-[2.5px] bg-gradient-to-r from-[#3b8c2a] to-[#7ca142] rounded-full"></div>
                                <Leaf size={13} className="text-[#3b8c2a] fill-[#3b8c2a] transform rotate-45" />
                            </div>

                            {/* Soft background glow */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3b8c2a] rounded-full filter blur-3xl opacity-5 pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </section>
    );
};

export default ChairmanMessage;

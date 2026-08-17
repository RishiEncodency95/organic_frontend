import React from "react";
import Image from "next/image";
import { Eye, Leaf } from "lucide-react";
import vijayImg from "@/app/assets/about/advisory_board_member/vijay.png";

const ChairmanMessage = () => {
    return (
        <section className="relative w-full py-2 lg:py-6 overflow-hidden bg-[#EFF7EE]">
            {/* Background Pattern / Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 opacity-20">
                    <Leaf size={120} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                </div>
            </div>

            <div className="relative z-10 w-full px-4 md:px-11">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 xl:gap-10">

                    {/* Left Side: Chairman Image */}
                    <div className="w-full lg:w-[28%] flex justify-center lg:justify-start mt-2 lg:mt-0 pl-2">
                        <div className="relative w-[200px] sm:w-[220px] lg:w-[240px] h-[260px] sm:h-[280px] lg:h-[300px]">
                            {/* Premium Soft Glow & Geometric Pattern */}
                            <div className="absolute -inset-2 bg-gradient-to-br from-[#3b8c2a]/40 to-[#f58220]/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[radial-gradient(#3b8c2a_2px,transparent_2px)] [background-size:8px_8px] opacity-30"></div>
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#eef5eb] rounded-full border border-[#7ca142]/30"></div>

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

                    {/* Middle: Message Content */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-center">
                        {/* Section Tagline */}
                        <div className="flex items-center gap-2 mb-4">
                            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                            <span className="text-[#3b8c2a] font-bold text-[14px] lg:text-[16px] tracking-widest uppercase border-b-2 border-[#f58220] pb-1 inline-block">
                                CHAIRMAN'S MESSAGE
                            </span>
                            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-[#1f471b] font-semibold text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[32px] leading-[1.1] mb-4">
                            Leading Together for a Healthier <br className="hidden sm:block" />
                            Tomorrow
                        </h2>

                        {/* Description Paragraphs */}
                        <div className="space-y-2 text-[#4a4a4a] font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                            <p>
                                At Bharat Bharat Organic Expo 2027, we believe in the power of collaboration,
                                innovation, and sustainability.
                            </p>
                            <p>
                                This platform brings together visionaries, experts, and changemakers
                                to create a lasting impact on health and organic wellness.
                            </p>
                        </div>

                        {/* Name and Title */}
                        <div className="mt-4">
                            <h3 className="text-[#1f471b] font-bold text-[16px] sm:text-[18px]">
                                Mr. Vijay Sharma
                            </h3>
                            <p className="text-[#666666] text-[14px] lg:text-[16px] font-medium mt-1">
                                Chairman, Bharat Bharat Organic Expo 2027
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Vision Card */}
                    <div className="w-full lg:w-[25%] flex justify-center lg:justify-end">
                        <div className="relative bg-white rounded-3xl p-2 sm:p-4 lg:px-4 lg:py-6 w-full max-w-[350px] transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,140,42,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 border-b-[6px] border-r-[4px] border-b-[#3b8c2a]/20 border-r-[#3b8c2a]/10">

                            {/* Card Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-14 h-14 flex items-center justify-center group">
                                    {/* 3D Icon Container */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#f8faf5] to-[#e6f0e3] rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_4px_10px_rgba(0,0,0,0.08)] border border-[#3b8c2a]/30 group-hover:rotate-12 transition-transform duration-500"></div>
                                    <Eye size={24} strokeWidth={2.5} className="text-[#3b8c2a] relative z-10 drop-shadow-sm" />
                                </div>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f471b] to-[#3b8c2a] font-black text-[15px] tracking-[0.15em] uppercase">
                                    OUR VISION
                                </span>
                            </div>

                            {/* Card Content */}
                            <p className="text-[#4a4a4a] font-medium text-[14px] lg:text-[16px] leading-[1.4] pb-8 relative z-10">
                                A global platform for innovation and collaboration in the organic, health & wellness industry. We aim to empower communities, promote sustainable practices, and drive transformative growth by connecting visionaries and eco-conscious enterprises worldwide.
                            </p>

                            {/* 3D Divider Line */}
                            <div className="flex items-center gap-2 opacity-90 mt-auto">
                                <div className="w-12 h-[3px] bg-gradient-to-r from-[#3b8c2a] to-[#7ca142] rounded-full shadow-[0_2px_4px_rgba(59,140,42,0.3)]"></div>
                                <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a] transform rotate-45 drop-shadow-sm" />
                            </div>

                            {/* Soft background glow */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3b8c2a] rounded-full filter blur-3xl opacity-5 pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChairmanMessage;

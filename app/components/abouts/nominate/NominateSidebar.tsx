"use client";

import React from "react";
import { Users, Target, BookOpen, Globe, CheckCircle2, Shield, Award, Lock, Headphones, Phone, Mail, Globe as WebGlobe, Check } from "lucide-react";

const NominateSidebar = () => {
    return (
        <div className="flex flex-col gap-5 w-full font-inter">
            {/* Card 1: About the Advisory Board */}
            <div className="bg-[#f2f7f2] rounded-2xl p-5 md:p-6 border border-[#e2ede2]">
                <h3 className="font-semibold text-[#0a4d22] text-[16px] md:text-[17px] mb-2">
                    About the Advisory Board
                </h3>
                <div className="w-6 h-[2px] bg-[#0a4d22] mb-5"></div>
                <p className="text-[#333] text-[14px] leading-relaxed mb-6 font-medium">
                    Our Advisory Board includes thought leaders, industry experts and visionaries who help Bharat Organic Expo stay globally relevant and impactful.
                </p>
                <div className="grid grid-cols-2 gap-0 border border-[#e2ede2] rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center text-center gap-1.5 p-4 border-r border-b border-[#e2ede2]">
                        <Users size={30} className="text-[#0a4d22] stroke-[1.5]" />
                        <span className="text-[#111] font-bold text-[13px] leading-tight">Industry<br />Expertise</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-1.5 p-4 border-b border-[#e2ede2]">
                        <Target size={30} className="text-[#0a4d22] stroke-[1.5]" />
                        <span className="text-[#111] font-bold text-[13px] leading-tight">Strategic<br />Guidance</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-1.5 p-4 border-r border-[#e2ede2]">
                        <BookOpen size={30} className="text-[#0a4d22] stroke-[1.5]" />
                        <span className="text-[#111] font-bold text-[13px] leading-tight">Knowledge<br />Sharing</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-1.5 p-4">
                        <Globe size={30} className="text-[#0a4d22] stroke-[1.5]" />
                        <span className="text-[#111] font-bold text-[13px] leading-tight">Global<br />Network</span>
                    </div>
                </div>
            </div>

            {/* Card 2: Who Can Be Nominated? */}
            <div className="bg-[#f2f7f2] rounded-2xl p-5 md:p-6 border border-[#e2ede2] relative overflow-hidden">
                <div className="absolute bottom-[-20px] right-[-20px] opacity-20 pointer-events-none text-[#569862]">
                    <LeafPattern className="w-32 h-32" />
                </div>
                <h3 className="font-semibold text-[#0a4d22] text-[16px] md:text-[17px] mb-2 relative z-10">
                    Who Can Be Nominated?
                </h3>
                <div className="w-6 h-[2px] bg-[#0a4d22] mb-5 relative z-10"></div>
                <ul className="space-y-3.5 relative z-10">
                    {[
                        "Industry leaders & professionals",
                        "Researchers & academicians",
                        "Policy experts & advisors",
                        "Entrepreneurs & innovators",
                        "Social impact leaders"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                            <div className="w-[18px] h-[18px] rounded-full bg-[#1b8c34] flex items-center justify-center shrink-0">
                                <Check size={12} className="text-white stroke-[3]" />
                            </div>
                            <span className="text-[#222] text-[13px] font-semibold">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Card 3: Important Guidelines */}
            <div className="bg-[#f2f7f2] rounded-2xl p-5 md:p-6 border border-[#e2ede2]">
                <h3 className="font-semibold text-[#0a4d22] text-[16px] md:text-[17px] mb-2">
                    Important Guidelines
                </h3>
                <div className="w-6 h-[2px] bg-[#0a4d22] mb-5"></div>
                <div className="flex flex-col">
                    <div className="flex gap-3.5 items-start border-b border-[#e2ede2] pb-3.5 mb-3.5">
                        <Shield size={20} className="text-[#0a4d22] shrink-0 mt-0.5 stroke-[1.5]" />
                        <p className="text-[#333] text-[13px] font-semibold leading-relaxed">
                            Nominee should have proven expertise in relevant fields.
                        </p>
                    </div>
                    <div className="flex gap-3.5 items-start border-b border-[#e2ede2] pb-3.5 mb-3.5">
                        <Award size={20} className="text-[#0a4d22] shrink-0 mt-0.5 stroke-[1.5]" />
                        <p className="text-[#333] text-[13px] font-semibold leading-relaxed">
                            Selection will be at the discretion of the organizing committee.
                        </p>
                    </div>
                    <div className="flex gap-3.5 items-start">
                        <Lock size={20} className="text-[#0a4d22] shrink-0 mt-0.5 stroke-[1.5]" />
                        <p className="text-[#333] text-[13px] font-semibold leading-relaxed">
                            All details will be treated as confidential.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 4: Need Help? */}
            <div className="bg-[#f2f7f2] rounded-2xl p-5 md:p-6 border border-[#e2ede2] relative overflow-hidden">
                <div className="absolute bottom-[-20px] right-[-20px] opacity-20 pointer-events-none text-[#569862]">
                    <LeafPattern className="w-32 h-32" />
                </div>
                <div className="flex items-center gap-2 mb-3 relative z-10">
                    <Headphones size={22} className="text-[#0a4d22] stroke-[2]" />
                    <h3 className="font-semibold text-[#0a4d22] text-[16px] md:text-[17px]">
                        Need Help?
                    </h3>
                </div>
                <p className="text-[#333] text-[13px] leading-relaxed mb-5 font-medium relative z-10">
                    For any queries related to nominations, please reach out to us.
                </p>
                <div className="space-y-3.5 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#dbe8dc] flex items-center justify-center shrink-0">
                            <Phone size={14} className="text-[#0a4d22] stroke-[2]" />
                        </div>
                        <span className="text-[#222] text-[13px] font-bold">+91 11 4304 5555</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#dbe8dc] flex items-center justify-center shrink-0">
                            <Mail size={14} className="text-[#0a4d22] stroke-[2]" />
                        </div>
                        <span className="text-[#222] text-[13px] font-bold">info@bharatorganicexpo.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#dbe8dc] flex items-center justify-center shrink-0">
                            <WebGlobe size={14} className="text-[#0a4d22] stroke-[2]" />
                        </div>
                        <span className="text-[#222] text-[13px] font-bold">www.bharatorganicexpo.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple inline SVG for leaf decoration
const LeafPattern = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M96.7 96.7C75.3 118 40.5 118 19.1 96.7C-2.3 75.3 -2.3 40.5 19.1 19.1L45.4 45.4L19.1 19.1C40.5 -2.3 75.3 -2.3 96.7 19.1C118 40.5 118 75.3 96.7 96.7ZM70.4 70.4L44.1 44.1M78.6 51.5L64.2 37.1M51.5 78.6L37.1 64.2M87.5 33.6L79.1 25.2M33.6 87.5L25.2 79.1" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);

export default NominateSidebar;

"use client";

import React, { useState } from "react";
import { Users, ArrowRight, ShieldCheck, User, Building2, Mail, Phone, ChevronDown, Check, MapPin } from "lucide-react";

const NominateForm = () => {
    const [achievements, setAchievements] = useState("");
    const [reason, setReason] = useState("");

    const handleAchievementsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/).filter(w => w.length > 0);
        if (words.length <= 300) {
            setAchievements(text);
        }
    };

    const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/).filter(w => w.length > 0);
        if (words.length <= 400) {
            setReason(text);
        }
    };

    return (
        <div className="w-full bg-white shadow-sm font-inter border border-gray-200 p-4 rounded-lg border-2">
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0 relative">
                    <Users size={22} className="text-[#0a4d22]" />
                    <MapPin size={14} className="text-[#0a4d22] absolute top-2 right-2 bg-[#e8f5e9] rounded-full" />
                </div>
                <div>
                    <h2 className="text-[14px] md:text-[18px] font-semibold text-[#111] font-poppins">Nomination Details</h2>
                    <p className="text-[#555] text-[14px]">Please share information about the nominee</p>
                </div>
            </div>

            <form className="space-y-2 md:space-y-3">
                {/* Section 1: Nominee Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">1</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Nominee Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Full Name of Nominee <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <User size={16} />
                                </span>
                                <input type="text" placeholder="Enter full name" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Designation <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="e.g., CEO, Founder, Director" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Organisation / Institution <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Building2 size={16} />
                                </span>
                                <input type="text" placeholder="Enter organisation / institution" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Industry / Sector <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <select className="w-full px-3 py-2.5 pr-8 rounded-lg border border-[#e2e8f0] text-[13px] text-gray-500 focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors bg-white appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select industry / sector</option>
                                    <option value="agriculture">Agriculture</option>
                                    <option value="technology">Technology</option>
                                    <option value="retail">Retail</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Email Address <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Mail size={16} />
                                </span>
                                <input type="email" placeholder="name@domain.com" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Phone / Mobile Number <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Phone size={16} />
                                </span>
                                <input type="tel" placeholder="+91 98765 43210" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Professional Profile / LinkedIn <span className="font-normal text-gray-500">(if available)</span></label>
                            <div className="relative">
                                <input type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full px-3 py-2.5 pr-10 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0077b5] text-white font-bold text-[11px] px-1.5 py-0.5 rounded-[3px]">
                                    in
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Nominee's Expertise */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">2</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Nominee&apos;s Expertise & Contribution</h3>
                    </div>

                    <div className="flex flex-col gap-5 md:gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Areas of Expertise <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select className="w-full px-3 py-2.5 pr-8 rounded-lg border border-[#e2e8f0] text-[13px] text-gray-500 focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors bg-white appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select areas of expertise</option>
                                        <option value="farming">Organic Farming</option>
                                        <option value="supply">Supply Chain</option>
                                        <option value="policy">Policy Making</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a]">Key Achievements / Contributions <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <textarea
                                        rows={1}
                                        placeholder="Briefly describe key achievements (max 300 words)"
                                        className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors resize-none pb-7 placeholder:text-gray-400"
                                        value={achievements}
                                        onChange={handleAchievementsChange}
                                    ></textarea>
                                    <span className="absolute bottom-2 right-3 text-[11px] text-gray-400 font-medium">
                                        {achievements.trim() === "" ? 0 : achievements.trim().split(/\s+/).length}/300
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Why do you think this person should be on our Advisory Board? <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <textarea
                                    rows={1}
                                    placeholder="Share your reason for nomination (max 400 words)"
                                    className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors resize-none pb-7 placeholder:text-gray-400"
                                    value={reason}
                                    onChange={handleReasonChange}
                                ></textarea>
                                <span className="absolute bottom-2 right-3 text-[11px] text-gray-400 font-medium">
                                    {reason.trim() === "" ? 0 : reason.trim().split(/\s+/).length}/400
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Nominator Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">3</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Nominator Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Your Name <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Your full name" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Your Designation <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Your designation" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Organisation / Institution <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Enter organisation / institution" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" placeholder="your.email@domain.com" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Phone / Mobile Number <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Phone size={16} />
                                </span>
                                <input type="tel" placeholder="+91 98765 43210" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Relationship with Nominee <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <select className="w-full px-3 py-2.5 pr-8 rounded-lg border border-[#e2e8f0] text-[13px] text-gray-500 focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors bg-white appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select relationship</option>
                                    <option value="colleague">Colleague</option>
                                    <option value="manager">Manager</option>
                                    <option value="self">Self</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer mt-4">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 rounded-[4px] bg-[#0a4d22] flex items-center justify-center shrink-0">
                            <Check size={14} className="text-white stroke-[3]" />
                        </div>
                        <span className="text-[#333] text-[13px] font-medium">I confirm that the information provided is accurate to the best of my knowledge.</span>
                    </label>
                </div>

                {/* Section 4: Additional Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">4</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Additional Information (Optional)</h3>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <textarea
                            rows={1}
                            placeholder="Any additional information that may support this nomination"
                            className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors resize-y placeholder:text-gray-400"
                        ></textarea>
                    </div>
                </div>

                {/* Submit Area */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3">
                    <button type="button" className="group inline-flex items-center justify-center gap-2 px-10 py-2 rounded-lg font-bold text-[14px] md:text-[15px] text-white transition-all active:scale-95 shadow-md bg-[#0a4d22] hover:bg-[#073617] w-full sm:w-[50%] md:w-[45%] lg:w-[40%]">
                        Submit Nomination <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-2 text-[#555] justify-center sm:justify-end w-full sm:w-auto">
                        <ShieldCheck size={20} className="text-[#0a4d22]" />
                        <span className="text-[13px] font-semibold">Secure • Confidential</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NominateForm;

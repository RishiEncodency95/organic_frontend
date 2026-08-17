"use client";
import React, { useState } from "react";
import CorporateForm from "./CorporateForm";
import GeneralForm from "./GeneralForm";
import HealthCampForm from "./HealthCampForm";
import { Building2, User, HeartPulse } from "lucide-react";

export default function DomesticVisitorForm() {
    const [subType, setSubType] = useState<"corporate" | "general" | "healthCamp">("corporate");

    return (
        <div className="w-full space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
                <h3 className="text-[14px] font-bold text-slate-800 uppercase tracking-widest font-poppins">
                    Select Visitor Type
                </h3>
                
                <div className="flex flex-wrap gap-2">
                    <button 
                        onClick={() => setSubType("corporate")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-[12px] font-bold uppercase tracking-wider transition-all border ${
                            subType === "corporate" 
                                ? "bg-[#eef6e2] border-[#4d7f1d] text-[#4d7f1d] shadow-sm" 
                                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                        <Building2 size={16} /> Corporate
                    </button>
                    <button 
                        onClick={() => setSubType("general")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-[12px] font-bold uppercase tracking-wider transition-all border ${
                            subType === "general" 
                                ? "bg-[#fff4ed] border-[#ea580c] text-[#ea580c] shadow-sm" 
                                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                        <User size={16} /> General
                    </button>
                    <button 
                        onClick={() => setSubType("healthCamp")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-[12px] font-bold uppercase tracking-wider transition-all border ${
                            subType === "healthCamp" 
                                ? "bg-[#fff1f2] border-[#e11d48] text-[#e11d48] shadow-sm" 
                                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                        }`}
                    >
                        <HeartPulse size={16} /> Free Health Camp
                    </button>
                </div>
            </div>

            <div className="pt-2 animate-in fade-in duration-500 relative">
                {subType === "corporate" && <CorporateForm />}
                {subType === "general" && <GeneralForm />}
                {subType === "healthCamp" && <HealthCampForm />}
            </div>
        </div>
    );
}

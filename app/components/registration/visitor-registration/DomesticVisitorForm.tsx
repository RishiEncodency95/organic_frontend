"use client";
import React, { useState } from "react";
import CorporateForm from "./CorporateForm";
import GeneralForm from "./GeneralForm";
import HealthCampForm from "./HealthCampForm";

export default function DomesticVisitorForm() {
    const [subType, setSubType] = useState<"corporate" | "general" | "healthCamp">("corporate");

    return (
        <div className="w-full space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
                <h3 className="text-[14px] font-bold text-slate-800 uppercase tracking-widest font-poppins">
                    Select Visitor Type
                </h3>
                
                <div className="flex flex-wrap items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                            type="radio" 
                            name="subType" 
                            value="corporate"
                            checked={subType === "corporate"}
                            onChange={() => setSubType("corporate")}
                            className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-300"
                        />
                        <span className={`text-[12px] font-bold uppercase tracking-wider transition-colors ${subType === "corporate" ? "text-[#4d7f1d]" : "text-slate-600 group-hover:text-slate-800"}`}>Corporate Visitor</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                            type="radio" 
                            name="subType" 
                            value="general"
                            checked={subType === "general"}
                            onChange={() => setSubType("general")}
                            className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-300"
                        />
                        <span className={`text-[12px] font-bold uppercase tracking-wider transition-colors ${subType === "general" ? "text-[#ea580c]" : "text-slate-600 group-hover:text-slate-800"}`}>General Visitor</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                            type="radio" 
                            name="subType" 
                            value="healthCamp"
                            checked={subType === "healthCamp"}
                            onChange={() => setSubType("healthCamp")}
                            className="w-4 h-4 text-[#4d7f1d] accent-[#4d7f1d] border-slate-300"
                        />
                        <span className={`text-[12px] font-bold uppercase tracking-wider transition-colors ${subType === "healthCamp" ? "text-[#e11d48]" : "text-slate-600 group-hover:text-slate-800"}`}>Free Health Camp</span>
                    </label>
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

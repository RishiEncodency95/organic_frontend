"use client";
import React from "react";
import { Award, CheckCircle2, User, FileText, Check, HandCoins } from "lucide-react";

export default function PaymentSidebar() {
  return (
    <div className="flex flex-col gap-4">
      {/* 1. PMS Eligibility Summary */}
      <div className="bg-[#124b1f] rounded-xl shadow-lg p-5 text-white flex flex-col items-center border border-[#1b6228]">
        <div className="w-full flex items-center gap-3 mb-5 pb-3 border-b border-[#2d6c38]">
          <Award size={26} className="text-[#f1c40f]" strokeWidth={2} />
          <h3 className="text-[13px] font-bold uppercase tracking-wide">
            Your PMS Eligibility Summary
          </h3>
        </div>
        
        <div className="flex flex-col items-center w-full bg-[#0c3915] rounded-lg p-4 mb-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#34a853] w-16 h-16 rounded-bl-full opacity-10"></div>
          <span className="text-[10px] text-green-300 font-bold uppercase tracking-widest mb-1 z-10">
            Preliminary Status
          </span>
          <div className="flex items-center gap-2 z-10">
            <span className="text-[22px] font-black tracking-wide">ELIGIBLE</span>
            <div className="w-6 h-6 bg-[#34a853] rounded-full flex items-center justify-center">
              <Check size={16} strokeWidth={4} className="text-[#0c3915]" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-full mb-4">
          <span className="text-[11px] text-green-100/70 font-semibold mb-0.5">Potential Assistance</span>
          <span className="text-[26px] font-black tracking-tight text-white mb-1">
            UP TO 100%
          </span>
          <span className="text-[10px] text-green-100/50">Eligible Space Rent Assistance*</span>
        </div>
        
        <div className="bg-white text-[#124b1f] px-4 py-2 rounded-md font-bold text-[12px] flex items-center gap-2 shadow-sm w-fit">
          <User size={14} strokeWidth={2.5} /> Women MSE Category
        </div>
      </div>

      {/* 2. Application Summary */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#e5e7eb] overflow-hidden">
        <div className="bg-gray-50 border-b border-[#e5e7eb] px-4 py-3">
          <h3 className="text-[13px] font-bold uppercase text-[#176b27] tracking-wide">
            Application Summary
          </h3>
        </div>
        
        <div className="p-4 flex flex-col gap-2.5 text-[12px]">
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <span className="text-gray-500 font-medium">Udyam Reg. Number</span>
            <span className="text-gray-900 font-bold break-words">UDYAM-DL-02-0118490</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <span className="text-gray-500 font-medium">Enterprise Name</span>
            <span className="text-gray-900 font-bold break-words">RAMMANI TRADELINK PRIVATE LIMITED</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <span className="text-gray-500 font-medium">Enterprise Type</span>
            <span className="text-gray-900 font-semibold">Micro</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <span className="text-gray-500 font-medium">Major Activity</span>
            <span className="text-gray-900 font-semibold">Manufacturing</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2 mt-2 pt-2 border-t border-dashed border-gray-200">
            <span className="text-gray-500 font-medium">Stall Type</span>
            <span className="text-gray-900 font-semibold">Shell Scheme</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <span className="text-gray-500 font-medium">Stall Size</span>
            <span className="text-gray-900 font-semibold">9 sqm</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <span className="text-gray-500 font-medium">Total Area</span>
            <span className="text-gray-900 font-semibold">9 sqm</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-2 mt-2 pt-2 border-t border-dashed border-gray-200">
            <span className="text-gray-500 font-medium mt-1">Total Amount<br/><span className="text-[9px]">(Inclusive of GST)</span></span>
            <span className="text-gray-900 font-bold text-[14px]">₹1,16,820</span>
          </div>
        </div>
      </div>

      {/* 3. Next Steps */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#e5e7eb] p-5">
        <h3 className="text-[13px] font-bold uppercase text-[#176b27] tracking-wide mb-5">
          Next Steps
        </h3>
        
        <div className="flex flex-col relative pl-2">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-4 bottom-6 w-[2px] bg-gray-200 z-0"></div>
          
          {/* Step 1 */}
          <div className="flex items-start gap-4 mb-5 relative z-10">
            <div className="w-6 h-6 rounded-full bg-[#176b27] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
              1
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-gray-900">Payment</span>
              <span className="text-[11px] font-medium text-gray-500 leading-tight mt-0.5">Complete your payment</span>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex items-start gap-4 mb-5 relative z-10">
            <div className="w-6 h-6 rounded-full bg-[#e5e7eb] text-gray-500 border border-gray-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
              2
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-gray-800">Submission</span>
              <span className="text-[11px] font-medium text-gray-500 leading-tight mt-0.5">Application will be submitted</span>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex items-start gap-4 mb-5 relative z-10">
            <div className="w-6 h-6 rounded-full bg-[#e5e7eb] text-gray-500 border border-gray-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
              3
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-gray-800">Verification</span>
              <span className="text-[11px] font-medium text-gray-500 leading-tight mt-0.5">Our team will verify your application</span>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-6 h-6 rounded-full bg-[#e5e7eb] text-gray-500 border border-gray-300 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
              4
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-gray-800">PMS Assistance</span>
              <span className="text-[11px] font-medium text-gray-500 leading-tight mt-0.5">We will guide you through the claim process after the event</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

'use client';
import React from 'react';
import { Lock, Check } from 'lucide-react';

const EligibilityInputBar = () => {
  return (
    <form 
      onSubmit={(e) => e.preventDefault()}
      className="w-full bg-white shadow-sm border border-gray-200 p-3 md:p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-30 -mt-4"
    >
      
      {/* Left side: Input Area */}
      <div className="flex flex-col gap-1.5 flex-1">
        <label htmlFor="udyam-number" className="text-[12px] font-bold text-gray-800">
          Enter Udyam Registration Number
        </label>
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <input 
            id="udyam-number"
            type="text" 
            defaultValue="UDYAM-DL-02-0118490" 
            className="w-full sm:w-[300px] px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:border-[#1b5e20] focus:ring-1 focus:ring-[#1b5e20]"
            placeholder="e.g. UDYAM-XX-00-0000000"
          />
          <button type="submit" className="bg-[#1b5e20] hover:bg-[#154a19] text-white px-5 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors whitespace-nowrap">
            CHECK ELIGIBILITY
          </button>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5 text-gray-500">
          <Lock size={12} />
          <span className="text-[11px] font-medium">We fetch data securely from the official Udyam database.</span>
        </div>
      </div>

      {/* Right side: Status */}
      <div className="flex items-center gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-gray-100">
        <span className="text-[12px] font-medium text-gray-500">
          Checked on: 25 May 2025, 11:30 AM
        </span>
        <div className="flex items-center gap-1.5 bg-[#f0f9f0] border border-[#1b5e20] text-[#1b5e20] px-3 py-1 rounded-md font-bold text-[12px]">
          <Check size={14} strokeWidth={3} />
          Verified
        </div>
      </div>

    </form>
  );
};

export default EligibilityInputBar;

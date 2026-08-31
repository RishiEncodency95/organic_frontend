import React from 'react';
import { Lock, Check } from 'lucide-react';

const EligibilityInputBar = () => {
  return (
    <div className="w-full bg-white shadow-sm border border-gray-200 p-5 md:p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-30 -mt-6 mx-auto max-w-7xl">
      
      {/* Left side: Input Area */}
      <div className="flex flex-col gap-2 flex-1">
        <label className="text-[13px] font-bold text-gray-800">
          Enter Udyam Registration Number
        </label>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <input 
            type="text" 
            value="UDYAM-DL-02-0118490" 
            readOnly
            className="w-full sm:w-[300px] px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 bg-gray-50 focus:outline-none"
          />
          <button className="bg-[#1b5e20] hover:bg-[#154a19] text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-colors whitespace-nowrap">
            CHECK ELIGIBILITY
          </button>
        </div>
        <div className="flex items-center gap-1.5 mt-1 text-gray-500">
          <Lock size={12} />
          <span className="text-[11px] font-medium">We fetch data securely from the official Udyam database.</span>
        </div>
      </div>

      {/* Right side: Status */}
      <div className="flex items-center gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
        <span className="text-[12px] font-medium text-gray-500">
          Checked on: 25 May 2025, 11:30 AM
        </span>
        <div className="flex items-center gap-1.5 bg-[#f0f9f0] border border-[#1b5e20] text-[#1b5e20] px-3 py-1.5 rounded-md font-bold text-[13px]">
          <Check size={16} strokeWidth={3} />
          Verified
        </div>
      </div>

    </div>
  );
};

export default EligibilityInputBar;

'use client';
import React, { useState } from 'react';
import { Lock, Check, Upload } from 'lucide-react';

const EligibilityInputBar = () => {
  const [fileName, setFileName] = useState("");

  return (
    <form 
      onSubmit={(e) => e.preventDefault()}
      className="w-full bg-white shadow-sm border border-gray-200 p-3 md:p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-30 -mt-4"
    >
      
      {/* Left side: Input Area */}
      <div className="flex flex-col gap-1.5 flex-1">
        <label className="text-[12px] font-bold text-gray-800">
          Upload Udyam Registration Certificate
        </label>
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <label 
            htmlFor="udyam-file" 
            className="cursor-pointer border border-dashed border-gray-400 rounded-lg bg-gray-50 flex items-center px-4 py-2 hover:bg-gray-100 transition-colors w-full sm:w-[320px] h-[40px]"
          >
            <Upload size={16} className="text-gray-500 mr-2 shrink-0" />
            <span className={`text-sm truncate w-full ${fileName ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              {fileName || "Choose PDF or JPEG file..."}
            </span>
          </label>
          <input 
            id="udyam-file"
            type="file" 
            accept=".pdf,.jpeg,.jpg"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
          <button type="submit" className="bg-[#1b5e20] hover:bg-[#154a19] text-white px-5 rounded-lg text-sm font-bold tracking-wide transition-colors whitespace-nowrap shadow-sm h-[40px] flex items-center justify-center">
            UPLOAD & VERIFY
          </button>
        </div>
        <div className="flex items-center gap-1.5 mt-1 text-gray-500">
          <Lock size={12} />
          <span className="text-[11px] font-medium">Upload your official Udyam certificate (PDF/JPEG) for verification.</span>
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

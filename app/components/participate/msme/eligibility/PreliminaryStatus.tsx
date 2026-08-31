import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const PreliminaryStatus = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 mt-6 flex flex-col lg:flex-row overflow-hidden relative">
      
      {/* Left Block - Green Ribbon style */}
      <div className="bg-[#1b5e20] text-white p-6 lg:p-8 flex-1 relative flex items-center">
        {/* Ribbon triangle cutout effect using CSS clip-path or a shape */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-8 bg-white" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }}></div>
        
        <div className="flex gap-5 items-center w-full z-10">
          <div className="shrink-0 text-[#facc15]">
            <Award size={48} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] md:text-[13px] font-bold tracking-widest text-white/80 uppercase mb-1">
              Preliminary Status
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-wide mb-2">
              ELIGIBLE
            </h3>
            <p className="text-[12px] md:text-[13px] font-medium text-white/90">
              Your enterprise appears eligible<br className="hidden md:block" />for PMS Support.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Block */}
      <div className="p-6 lg:p-8 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center">
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
          Potential PMS Support
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
          UP TO 100%
        </h3>
        <p className="text-[12px] font-bold text-gray-700 mb-4">
          Eligible Space Rent Assistance*
        </p>
        <div className="inline-flex items-center gap-1.5 border border-[#1b5e20] text-[#1b5e20] bg-[#f0f9f0] px-3 py-1 rounded-full w-fit">
          <CheckCircle2 size={14} className="text-[#1b5e20]" />
          <span className="text-[11px] font-bold">Women MSE Category</span>
        </div>
      </div>

      {/* Right Block */}
      <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
          Why 100%?
        </span>
        <p className="text-[12px] md:text-[13px] text-gray-600 leading-relaxed font-medium">
          Your Udyam record identifies the entrepreneur as Female. Under the applicable PMS assistance category, Women MSEs may qualify for 100% assistance on eligible built-up space rent, subject to scheme limits and final approval.
        </p>
      </div>

    </div>
  );
};

export default PreliminaryStatus;

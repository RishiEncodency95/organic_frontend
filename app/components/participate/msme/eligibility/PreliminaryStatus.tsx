import React from 'react';

const RibbonStarIcon = ({ className, size = 48 }: { className?: string, size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8.5" r="7" />
    <path d="M8.21 14.39L7 23l5-3 5 3-1.21-8.61" />
    <polygon points="12 4.5 13.5 7 16 7.5 14 9.5 14.5 12 12 11 9.5 12 10 9.5 8 7.5 10.5 7 12 4.5" fill="currentColor" stroke="none" />
  </svg>
);

const PreliminaryStatus = () => {
  return (
    <div className="w-full bg-[#F9F9F9] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 mt-4 flex flex-col md:flex-row overflow-hidden relative">

      {/* Left Block - Green Ribbon style */}
      <div className="bg-[#1b5e20] text-white px-4 md:px-5 md:py-2 flex-[0.8] relative flex items-center shrink-0 z-10">

        {/* Wavy Right Edge for Green Box (Protruding outwards) */}
        <div className="hidden md:block absolute -right-[14px] top-0 bottom-0 h-full w-[15px] text-[#1b5e20] z-0">
          <svg preserveAspectRatio="none" viewBox="0 0 15 100" className="h-full w-full fill-current">
            <path d="M0,0 C6,15 15,35 15,50 C15,65 6,85 0,100 Z" />
          </svg>
        </div>

        <div className="flex gap-4 items-center w-full z-10 relative pr-2">
          <div className="shrink-0 text-[#facc15]">
            <RibbonStarIcon size={46} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10.5px] md:text-[11.5px] font-semibold tracking-widest text-white/90 uppercase mb-0.5">
              Preliminary Status
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-wide mb-1 leading-none text-white">
              ELIGIBLE
            </h3>
            <p className="text-[12.5px] md:text-[14px] font-medium text-white/90 leading-snug">
              Your enterprise appears eligible<br className="hidden md:block" />for PMS Support.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Block */}
      <div className="px-4 md:px-5 md:py-2 flex-1 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center  ">
        <span className="text-[12px] md:text-[14px] font-semibold text-[#1b5e20] uppercase tracking-wider mb-1">
          Potential PMS Support
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-[#1b5e20] mb-1 leading-none">
          UP TO 100%
        </h3>
        <p className="text-[14px] font-semibold text-gray-800 mb-2.5">
          Eligible Space Rent Assistance*
        </p>
        <div className="inline-flex items-center gap-1.5 border border-[#1b5e20]/30 text-[#1b5e20] bg-[#f0f9f0] px-2.5 py-1 rounded-md w-fit">
          <span className="text-[14px] leading-none mb-0.5">♀</span>
          <span className="text-[12px] font-semibold">Women MSE Category</span>
        </div>
      </div>

      {/* Right Block */}
      <div className="px-4 md:px-5 md:py-2 flex-[1.2] flex flex-col justify-center">
        <span className="text-[10px] md:text-[14px] font-semibold text-[#1b5e20] uppercase tracking-wider mb-2">
          Why 100%?
        </span>
        <p className="text-[12px] md:text-[14px] text-gray-800 leading-relaxed font-medium">
          Your Udyam record identifies the entrepreneur as Female. Under the applicable PMS assistance category, Women MSEs may qualify for 100% assistance on eligible built-up space rent, subject to scheme limits and final approval.
        </p>
      </div>

    </div>
  );
};

export default PreliminaryStatus;

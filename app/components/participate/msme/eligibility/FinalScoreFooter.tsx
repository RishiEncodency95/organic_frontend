import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, Download, Headphones } from 'lucide-react';

const CircularScore = ({ score }: { score: number }) => {
  const strokeDasharray = 251.2; // 2 * pi * r (r=40)
  const strokeDashoffset = strokeDasharray - (strokeDasharray * score) / 100;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#f1f5f9"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#1b5e20"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          style={{ strokeDasharray, strokeDashoffset }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-black text-gray-900 leading-none">{score} <span className="text-sm font-bold text-gray-400">/ 100</span></span>
      </div>
    </div>
  );
};

const FinalScoreFooter = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 mt-6 overflow-hidden flex flex-col">
      
      <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
        
        {/* Score Section */}
        <div className="flex flex-col items-center sm:items-start shrink-0">
          <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-4">
            Your Preliminary Eligibility Score
          </h3>
          <div className="flex items-center gap-4">
            <CircularScore score={95} />
            <div className="flex items-center gap-1.5 text-[#1b5e20] font-bold text-[13px] mt-2 sm:mt-0">
              <CheckCircle2 size={16} className="fill-[#1b5e20] text-white" />
              HIGH ELIGIBILITY
            </div>
          </div>
        </div>

        {/* Status Checkmarks */}
        <div className="flex flex-wrap lg:flex-nowrap gap-x-2 gap-y-6 flex-1 items-end justify-between px-0 lg:px-8">
          
          <div className="flex flex-col items-center gap-2 w-1/3 lg:w-auto text-center">
            <div className="w-10 h-10 rounded-full bg-[#f0f9f0] border border-[#1b5e20]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-600 leading-tight h-8 flex items-center">Micro Enterprise</span>
            <CheckCircle2 size={16} className="text-[#1b5e20] fill-[#1b5e20] text-white" />
          </div>

          <div className="flex flex-col items-center gap-2 w-1/3 lg:w-auto text-center">
            <div className="w-10 h-10 rounded-full bg-[#f0f9f0] border border-[#1b5e20]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-600 leading-tight h-8 flex items-center">Manufacturing</span>
            <CheckCircle2 size={16} className="text-[#1b5e20] fill-[#1b5e20] text-white" />
          </div>

          <div className="flex flex-col items-center gap-2 w-1/3 lg:w-auto text-center">
            <div className="w-10 h-10 rounded-full bg-[#f0f9f0] border border-[#1b5e20]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-600 leading-tight h-8 flex items-center">Approved<br/>Industry Match</span>
            <CheckCircle2 size={16} className="text-[#1b5e20] fill-[#1b5e20] text-white" />
          </div>

          <div className="flex flex-col items-center gap-2 w-1/3 lg:w-auto text-center">
            <div className="w-10 h-10 rounded-full bg-[#f0f9f0] border border-[#1b5e20]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-600 leading-tight h-8 flex items-center">Valid Udyam</span>
            <CheckCircle2 size={16} className="text-[#1b5e20] fill-[#1b5e20] text-white" />
          </div>

          <div className="flex flex-col items-center gap-2 w-1/3 lg:w-auto text-center">
            <div className="w-10 h-10 rounded-full bg-[#f0f9f0] border border-[#1b5e20]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="9" x2="12" y2="22"></line><line x1="8" y1="15" x2="16" y2="15"></line><circle cx="12" cy="5" r="4"></circle></svg>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-600 leading-tight h-8 flex items-center">Women Category</span>
            <CheckCircle2 size={16} className="text-[#1b5e20] fill-[#1b5e20] text-white" />
          </div>

          <div className="flex flex-col items-center gap-2 w-1/3 lg:w-auto text-center">
            <div className="w-10 h-10 rounded-full bg-[#fff8f1] border border-[#ea580c]/30 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-600 leading-tight h-8 flex items-center">Additional Financial<br/>Verification</span>
            <AlertCircle size={16} className="text-[#ea580c] fill-[#ea580c] text-white" />
          </div>

        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-gray-50 border-t border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">Recommended Next Step</span>
          <span className="text-[13px] font-bold text-gray-900">You appear eligible. Proceed with your Bharat Organic Expo participation.</span>
        </div>

        <div className="flex flex-col gap-3 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#1b5e20] hover:bg-[#154a19] text-white px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-colors">
              APPLY FOR PMS SUPPORT <ArrowRight size={16} />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-colors">
              BOOK YOUR STALL <ArrowRight size={16} />
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-[11px] font-bold tracking-wide transition-colors uppercase">
              DOWNLOAD ELIGIBILITY SUMMARY <Download size={14} />
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-[11px] font-bold tracking-wide transition-colors uppercase">
              TALK TO PMS SUPPORT TEAM <Headphones size={14} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FinalScoreFooter;

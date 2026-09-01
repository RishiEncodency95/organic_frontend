import React from 'react';
import { Award, Leaf, Beaker } from 'lucide-react';

const IndustryMatch = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">

      <div className="w-full bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 p-3 md:px-5 md:py-4 flex-1">

        <div className="flex items-start gap-3 mb-4">
          <Award size={24} className="text-[#1b5e20] mt-0.5" />
          <div>
            <h2 className="text-sm md:text-base font-bold text-[#1b5e20] uppercase tracking-wider mb-0.5">
              Industry Match Found
            </h2>
            <p className="text-xs md:text-sm font-medium text-gray-600 leading-snug">
              Your registered activities match Bharat Organic Expo.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">

          {/* NIC Card 1 */}
          <div className="border border-gray-100 rounded-xl p-3 md:p-4 relative overflow-hidden flex items-center justify-between shadow-sm">
            <div className="flex flex-col z-10 w-[80%]">
              <span className="text-[11px] md:text-xs font-bold text-[#1b5e20] mb-0.5">NIC 10795</span>
              <h3 className="text-sm md:text-[15px] font-bold text-gray-900 mb-1 leading-snug">Grinding & Processing of Spices</h3>
              <p className="text-[11.5px] md:text-[13px] font-medium text-gray-600 mb-2 md:mb-3">
                Food Products → Spices → Manufacturing
              </p>

              <span className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Matched Expo Segments</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[11px] md:text-xs font-bold shadow-sm">Food & Beverages</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[11px] md:text-xs font-bold shadow-sm">Organic & Natural Products</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[11px] md:text-xs font-bold shadow-sm">Nutrition / Food Products</span>
              </div>
            </div>

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-100 flex items-center justify-center shrink-0 bg-gray-50">
              <Leaf size={28} className="text-[#1b5e20]" />
            </div>
          </div>

          {/* NIC Card 2 */}
          <div className="border border-gray-100 rounded-xl p-3 md:p-4 relative overflow-hidden flex items-center justify-between shadow-sm">
            <div className="flex flex-col z-10 w-[80%]">
              <span className="text-[11px] md:text-xs font-bold text-[#1b5e20] mb-0.5">NIC 21009</span>
              <h3 className="text-sm md:text-[15px] font-bold text-gray-900 mb-1 leading-snug">Pharmaceutical & Botanical Products</h3>
              <p className="text-[11.5px] md:text-[13px] font-medium text-gray-600 mb-2 md:mb-3">
                Pharmaceuticals → Medicinal → Botanical Products → Manufacturing
              </p>

              <span className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Matched Expo Segments</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[11px] md:text-xs font-bold shadow-sm">Pharma</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[11px] md:text-xs font-bold shadow-sm">AYUSH & Wellness</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[11px] md:text-xs font-bold shadow-sm">Medicinal Products</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[11px] md:text-xs font-bold shadow-sm">Herbal & Botanical</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[11px] md:text-xs font-bold shadow-sm">Organic & Natural Products</span>
              </div>
            </div>

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-100 flex items-center justify-center shrink-0 bg-gray-50">
              <Beaker size={28} className="text-[#1b5e20]" />
            </div>
          </div>

        </div>

        <div className="bg-[#f4fbf4] rounded-lg p-3 text-center text-[11.5px] md:text-[13px] font-medium text-[#1b5e20]/90 mt-4 border border-gray-50">
          Both activities are recorded as <strong className="text-gray-900">Manufacturing</strong> in the Udyam certificate.
        </div>

      </div>

      <div className="w-full flex items-center justify-center md:justify-start mt-3 px-1 text-[11.5px] md:text-[13px] font-medium text-gray-600">
        Your registered manufacturing activities fall within the approved industry scope of Bharat Organic Expo.
      </div>
    </div>
  );
};

export default IndustryMatch;

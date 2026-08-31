import React from 'react';
import { Award, Leaf, Beaker } from 'lucide-react';

const IndustryMatch = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">

      <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:px-5 md:py-2  flex-1">

        <div className="flex items-start gap-3 mb-3">
          <Award size={20} className="text-[#1b5e20] mt-0.5" />
          <div>
            <h3 className="text-[16px] font-semibold text-[#1b5e20] uppercase tracking-widest mb-1">
              Industry Match Found
            </h3>
            <p className="text-[12px] font-medium text-gray-500">
              Your registered activities match Bharat Organic Expo.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">

          {/* NIC Card 1 */}
          <div className="border border-gray-200 rounded-xl p-5 relative overflow-hidden flex items-center justify-between">
            <div className="flex flex-col z-10 w-[80%]">
              <span className="text-[11px] font-bold text-[#1b5e20] mb-1">NIC 10795</span>
              <h4 className="text-[13px] font-bold text-gray-900 mb-1">Grinding & Processing of Spices</h4>
              <p className="text-[11px] font-medium text-gray-500 mb-4">
                Food Products → Spices → Manufacturing
              </p>

              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Matched Expo Segments</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[10px] font-bold">Food & Beverages</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[10px] font-bold">Organic & Natural Products</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[10px] font-bold">Nutrition / Food Products</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
              <Leaf size={20} className="text-[#1b5e20]" />
            </div>
          </div>

          {/* NIC Card 2 */}
          <div className="border border-gray-200 rounded-xl p-5 relative overflow-hidden flex items-center justify-between">
            <div className="flex flex-col z-10 w-[80%]">
              <span className="text-[11px] font-bold text-[#1b5e20] mb-1">NIC 21009</span>
              <h4 className="text-[13px] font-bold text-gray-900 mb-1">Pharmaceutical & Botanical Products</h4>
              <p className="text-[11px] font-medium text-gray-500 mb-4">
                Pharmaceuticals → Medicinal → Botanical Products → Manufacturing
              </p>

              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Matched Expo Segments</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[10px] font-bold">Pharma</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[10px] font-bold">AYUSH & Wellness</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[10px] font-bold">Medicinal Products</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[10px] font-bold">Herbal & Botanical</span>
                <span className="bg-[#f0f9f0] border border-gray-200 text-[#1b5e20] px-2.5 py-1 rounded-md text-[10px] font-bold">Organic & Natural Products</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
              <Beaker size={20} className="text-[#1b5e20]" />
            </div>
          </div>

        </div>

        <p className="text-center text-[11px] font-medium text-gray-500 mt-5">
          Both activities are recorded as <strong className="text-gray-900">Manufacturing</strong> in the Udyam certificate.
        </p>

      </div>

      <div className="w-full flex items-center justify-start mt-6 text-[12px] font-medium text-gray-500">
        Your registered manufacturing activities fall within the approved industry scope of Bharat Organic Expo.
      </div>
    </div>
  );
};

export default IndustryMatch;

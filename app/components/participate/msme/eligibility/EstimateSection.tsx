import React from 'react';
import { ChevronDown, Clock, Info } from 'lucide-react';

const EstimateSection = () => {
  return (
    <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Left Column: Your Estimated PMS Benefit */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col justify-between">
        <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
          Your Estimated PMS Benefit
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          
          {/* Card 1: Standard */}
          <div className="flex-1 rounded-xl bg-gray-50 border border-gray-200 p-6 flex flex-col items-center justify-center text-center opacity-70">
            <span className="text-[11px] font-bold text-gray-500 mb-2">Standard General Category</span>
            <h4 className="text-2xl font-black text-gray-800 mb-1">Up to 80%</h4>
            <span className="text-[11px] font-medium text-gray-500">Eligible Space Rent</span>
          </div>

          {/* Card 2: Applicable */}
          <div className="flex-1 rounded-xl bg-[#fffdf0] border-2 border-[#f59e0b] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Orange Ribbon */}
            <div className="absolute -right-6 -top-6 w-16 h-16 bg-[#f59e0b] rotate-45 flex items-end justify-center pb-1">
              <StarIcon />
            </div>
            
            <span className="text-[11px] font-bold text-[#d97706] mb-2 uppercase tracking-wide">Your Applicable Category</span>
            <h4 className="text-3xl font-black text-[#1b5e20] mb-1">Up to 100%</h4>
            <span className="text-[12px] font-bold text-gray-800">Women MSE Category</span>
          </div>
          
        </div>

        <p className="text-[12px] font-medium text-gray-500 leading-relaxed">
          Therefore, although the social category shown in Udyam is General, the record separately shows the entrepreneur&apos;s gender as Female.
        </p>
      </div>

      {/* Right Column: Estimate Your Potential Assistance */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
        <h3 className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
          Estimate Your Potential Assistance
        </h3>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <label className="text-[12px] font-bold text-gray-700 whitespace-nowrap">Select Stall Size</label>
            <div className="relative w-full sm:w-[140px]">
              <select className="w-full appearance-none bg-white border border-gray-300 px-4 py-2 rounded-lg text-[13px] font-bold text-gray-800 focus:outline-none focus:border-[#1b5e20] focus:ring-1 focus:ring-[#1b5e20]">
                <option value="9">9 sqm</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-[12px] font-bold text-gray-700">Space Rate</span>
            <span className="text-[12px] font-medium text-gray-500">₹11,000 / sqm</span>
          </div>
        </div>

        <h4 className="text-[12px] font-bold text-gray-800 mb-3">Example Calculation</h4>
        
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2.5 font-bold text-gray-700">Particulars</th>
                <th className="px-4 py-2.5 font-bold text-gray-700 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium text-gray-600">
              <tr>
                <td className="px-4 py-2.5">Stall Area</td>
                <td className="px-4 py-2.5 text-right font-bold text-gray-800">9 sqm</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">Basic Space Rent</td>
                <td className="px-4 py-2.5 text-right font-bold text-gray-800">₹99,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">Applicable PMS Category</td>
                <td className="px-4 py-2.5 text-right font-bold text-gray-800">Women MSE</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">Potential Assistance Rate</td>
                <td className="px-4 py-2.5 text-right font-bold text-gray-800">Up to 100%</td>
              </tr>
              <tr className="bg-[#f0f9f0]">
                <td className="px-4 py-3 font-bold text-[#1b5e20]">Estimated Eligible Assistance</td>
                <td className="px-4 py-3 text-right font-black text-[#1b5e20]">Up to ₹99,000*</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-3 items-start text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <Clock size={20} className="text-[#1b5e20] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-bold text-gray-900">You may be eligible for assistance of up to ₹99,000*</span>
            <span className="text-[11px] font-medium leading-relaxed">
              This is an indicative calculation. Final eligible amount may be restricted by the approved stall area, scheme ceiling and other PMS conditions.
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
)

export default EstimateSection;

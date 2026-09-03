"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const EstimateSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<'standard' | 'applicable'>('applicable');
  const [stallSize, setStallSize] = useState<number>(9);

  const spaceRate = 11500;
  const basicRent = stallSize * spaceRate;
  const assistanceRate = selectedCategory === 'standard' ? 80 : 100;
  const eligibleAssistance = (basicRent * assistanceRate) / 100;

  const categoryName = selectedCategory === 'standard' ? 'Standard General' : 'Women MSE';
  const formatCurrency = (amount: number) => `₹${new Intl.NumberFormat('en-IN').format(amount)}`;

  return (
    <div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">

      {/* Left Column: Your Estimated PMS Benefit */}
      <div className="bg-white rounded-xl lg:rounded-2xl border border-gray-100 p-4 md:px-5 md:py-4 flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <h3 className="text-[13px] lg:text-[14px] font-semibold text-[#1b5e20] uppercase tracking-wide mb-6">
          YOUR ESTIMATED PMS BENEFIT
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 mb-6 min-h-[180px] lg:min-h-[200px]">

          {/* Card 1: Standard */}
          <div
            onClick={() => setSelectedCategory('standard')}
            className={`flex-1 rounded-xl p-4 md:px-3 md:py-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all relative overflow-hidden ${selectedCategory === 'standard'
              ? 'bg-[#fffcf5] border border-[#f59e0b]/40'
              : 'bg-[#f9fafb] border border-gray-100'
              }`}
          >
            {selectedCategory === 'standard' && (
              <div className="absolute -right-7 -top-7 w-[4.5rem] h-[4.5rem] bg-[#f59e0b] rotate-45 flex items-end justify-center pb-1.5 shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="-rotate-45">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            )}
            <span className={`text-[11px] lg:text-lg font-semibold mb-3 ${selectedCategory === 'standard' ? 'text-[#d97706]' : 'text-gray-700'}`}>Standard General Category</span>
            <h4 className="text-xl lg:text-4xl font-semibold text-[#1b5e20] mb-2">Up to 80%</h4>
            <span className="text-[11px] lg:text-lg font-medium text-gray-500">Eligible Space Rent</span>
          </div>

          {/* Card 2: Applicable */}
          <div
            onClick={() => setSelectedCategory('applicable')}
            className={`flex-1 rounded-xl p-4 md:px-3 md:py-4 flex flex-col items-center justify-center text-center relative overflow-hidden cursor-pointer transition-all ${selectedCategory === 'applicable'
              ? 'bg-[#fffcf5] border border-[#f59e0b]/40'
              : 'bg-[#f9fafb] border border-gray-100'
              }`}
          >
            {selectedCategory === 'applicable' && (
              <div className="absolute -right-7 -top-7 w-[4.5rem] h-[4.5rem] bg-[#f59e0b] rotate-45 flex items-end justify-center pb-1.5 shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="-rotate-45">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            )}

            <span className={`text-[11px] lg:text-[15px] font-semibold mb-3 uppercase tracking-wide ${selectedCategory === 'applicable' ? 'text-[#d97706]' : 'text-gray-700'}`}>YOUR APPLICABLE CATEGORY</span>
            <h4 className="text-xl lg:text-4xl font-semibold text-[#1b5e20] mb-2">Up to 100%</h4>
            <span className="text-[11px] lg:text-lg font-semibold text-gray-800">Women MSE Category</span>
          </div>

        </div>

        <p className="text-[11px] lg:text-[14px] font-medium text-gray-700 leading-relaxed">
          Therefore, although the social category shown in Udyam is General, the record separately shows the entrepreneur&apos;s gender as Female.
        </p>
      </div>

      {/* Right Column: Estimate Your Potential Assistance */}
      <div className="bg-white rounded-xl lg:rounded-2xl border border-gray-100 p-4 md:px-5 md:py-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <h3 className="text-[13px] lg:text-[14px] font-semibold text-[#1b5e20] uppercase tracking-wide mb-5">
          ESTIMATE YOUR POTENTIAL ASSISTANCE
        </h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-5">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <label className="text-xs font-semibold text-gray-800 whitespace-nowrap">Select Stall Size</label>
            <div className="relative w-full sm:w-[100px]">
              <select
                value={stallSize}
                onChange={(e) => setStallSize(Number(e.target.value))}
                className="w-full appearance-none bg-white border border-gray-200 px-3 py-1.5 rounded-md text-xs font-semibold text-gray-800 focus:outline-none"
              >
                <option value="9">9 sqm</option>
                <option value="12">12 sqm</option>
                <option value="15">15 sqm</option>
                <option value="18">18 sqm</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-semibold text-gray-800">Space Rate</span>
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-600">
              <span className="text-[10.5px]">₹</span>
              <span className="border-b border-gray-300 px-1 text-gray-800 font-semibold min-w-[3rem] text-center">11,500</span>
              <span className="text-[10.5px]">/ sqm</span>
            </div>
          </div>
        </div>

        <h4 className="text-xs font-semibold text-gray-800 mb-3">Example Calculation</h4>

        <div className="border border-gray-100 rounded-lg overflow-hidden mb-5">
          <table className="w-full text-left text-[11px] lg:text-xs">
            <thead className="bg-[#f9fafb] border-b border-gray-100">
              <tr>
                <th className="px-4 py-2.5 font-semibold text-gray-800 w-[60%]">Particulars</th>
                <th className="px-4 py-2.5 font-semibold text-gray-800">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium text-gray-600">
              <tr>
                <td className="px-4 py-2.5">Stall Area</td>
                <td className="px-4 py-2.5 text-gray-800">{stallSize} sqm</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">Basic Space Rent</td>
                <td className="px-4 py-2.5 text-gray-800">{formatCurrency(basicRent)}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">Applicable PMS Category</td>
                <td className="px-4 py-2.5 text-gray-800">{categoryName}</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5">Potential Assistance Rate</td>
                <td className="px-4 py-2.5 text-gray-800">Up to {assistanceRate}%</td>
              </tr>
              <tr className="bg-[#f4fbf4]">
                <td className="px-4 py-3 font-semibold text-gray-800">Estimated Eligible Assistance</td>
                <td className="px-4 py-3 font-semibold text-[#1b5e20]">Up to 99,000*</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-3 items-start bg-white border border-[#1b5e20]/20 p-4 rounded-xl">
          <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#f4fbf4] border border-[#1b5e20]/30 flex items-center justify-center text-[#1b5e20]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-semibold text-[#1b5e20]">You may be eligible for assistance of up to 99,000*</span>
            <span className="text-[10px] lg:text-[14px] font-medium text-gray-600 leading-[1.4]">
              This is an indicative calculation. Final eligible amount may be restricted by the approved stall area, scheme ceiling and other PMS conditions.
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default EstimateSection;

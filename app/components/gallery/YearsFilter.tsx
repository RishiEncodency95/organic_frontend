"use client";
import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import SectionContainer from '@/app/components/layout/SectionContainer';

const years = ['All Years', '2025', '2024', '2023', '2022', '2021', '2020'];

interface YearsFilterProps {
  activeYear?: string;
  onYearChange?: (year: string) => void;
  dbYears?: any[];
}

const YearsFilter: React.FC<YearsFilterProps> = ({ activeYear = 'All Years', onYearChange, dbYears = [] }) => {
  const dynamicYears = dbYears.length > 0 ? ['All Years', ...dbYears.map(y => y.year)] : years;

  return (
    <section className="w-full pt-4 pb-4 font-inter">
      <SectionContainer>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 font-medium">
          <span className="text-black hover:text-[#1b5e20] cursor-pointer">Home</span>
          <span className="text-gray-400">›</span>
          <span className="text-black hover:text-[#1b5e20] cursor-pointer">Gallery</span>
          <span className="text-gray-400">›</span>
          <span className="text-[#0e3b1c]">Glimpses</span>
        </div>

        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
          {/* Years Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            {dynamicYears.map((year) => (
              <button
                key={year}
                onClick={() => onYearChange?.(year)}
                className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
                  activeYear === year
                    ? 'bg-[#c2410c] text-white'
                    : 'bg-white text-black hover:text-[#c2410c]'
                }`}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
              >
                {year}
              </button>
            ))}
            <button 
              className="px-4 py-2 rounded-sm text-sm font-semibold bg-white text-black hover:text-[#1b5e20] flex items-center gap-1 transition-all"
              style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
            >
              More <ChevronDown size={14} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 w-full xl:w-auto">
            <div className="relative flex-1 xl:w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search photos..."
                className="w-full pl-9 pr-4 py-2 rounded-sm border border-[#1b5e20] focus:outline-none text-sm text-gray-700"
              />
            </div>
            <button className="bg-[#1b5e20] hover:bg-[#134216] text-white px-5 py-2 rounded-sm text-sm font-semibold flex items-center gap-2 transition-colors">
               Search
            </button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default YearsFilter;

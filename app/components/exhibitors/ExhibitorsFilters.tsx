import React from "react";
import { Leaf, Search } from "lucide-react";
import { Reveal } from "../shared/Reveal";

interface ExhibitorsFiltersProps {
    categories: string[];
    activeCategory: string;
    searchTerm: string;
    onSelect: (cat: string) => void;
    onSearch: (term: string) => void;
}

const ExhibitorsFilters = ({ categories, activeCategory, searchTerm, onSelect, onSearch }: ExhibitorsFiltersProps) => {
    return (
        <>
            {/* Section Title */}
            <div className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4">
                <Reveal>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <div className="w-10 h-px bg-gray-300" />
                            <Leaf className="w-4 h-4 text-[#3b8c2a] fill-[#3b8c2a]" />
                            <span className="text-[12px] md:text-[13px] font-extrabold uppercase tracking-widest text-[#2b5825]">
                                Our Previous Exhibitors
                            </span>
                            <Leaf className="w-4 h-4 text-[#3b8c2a] fill-[#3b8c2a]" />
                            <div className="w-10 h-px bg-gray-300" />
                        </div>
                        <h2 className="text-[26px] md:text-[34px] font-extrabold text-[#154726] tracking-tight leading-[1.15]">
                            A Platform Trusted by Industry Leaders
                        </h2>
                    </div>
                </Reveal>
            </div>

            {/* Sticky Filter Bar */}
            <div className="sticky top-[80px] z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm py-2">
                <div className="container mx-auto max-w-[1400px] px-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto scrollbar-hide flex-1 py-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => onSelect(cat)}
                                    className={`px-4 py-2 rounded-lg text-[11px] md:text-[12px] font-bold uppercase tracking-wider border transition-all whitespace-nowrap ${activeCategory === cat
                                        ? "bg-[#2b5825] text-white border-[#2b5825] shadow-md shadow-green-900/10"
                                        : "bg-white text-gray-500 border-gray-200 hover:border-[#3b8c2a] hover:text-[#2b5825]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-48 md:w-64 shrink-0">
                            <input
                                type="text"
                                placeholder="Search Exhibitor..."
                                value={searchTerm}
                                onChange={(e) => onSearch(e.target.value)}
                                className="w-full pl-5 pr-12 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/5 focus:border-[#3b8c2a] outline-none text-[12px] font-semibold transition-all placeholder:text-gray-400"
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExhibitorsFilters;
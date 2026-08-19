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
        <div className="pb-3 border-b border-gray-100">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto scrollbar-hide flex-1 py-1">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onSelect(cat)}
                            className={`px-4 py-2 rounded-lg text-[11px] md:text-[12px] font-semibold uppercase tracking-wider border transition-all whitespace-nowrap ${activeCategory === cat
                                ? "bg-[#1b5e20] text-white border-[#1b5e20] shadow-md shadow-green-900/10"
                                : "bg-white text-gray-500 border-gray-200 hover:border-[#1b5e20] hover:text-[#1b5e20]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-64 shrink-0">
                    <input
                        type="text"
                        placeholder="Search Exhibitor..."
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full pl-5 pr-12 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/5 focus:border-[#1b5e20] outline-none text-[12px] font-semibold transition-all placeholder:text-gray-500"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
            </div>
        </div>
        </>
    );
};

export default ExhibitorsFilters;
import React from "react";
import { Search } from "lucide-react";

interface ExhibitorsFiltersProps {
    categories?: string[];
    activeCategory?: string;
    searchTerm: string;
    onSelect?: (cat: string) => void;
    onSearch: (term: string) => void;
}

const ExhibitorsFilters = ({ searchTerm, onSearch }: ExhibitorsFiltersProps) => {
    return (
        <div className="pb-4 border-b border-gray-100 flex justify-end">
            <div className="relative w-full md:w-80">
                <input
                    type="text"
                    placeholder="Search Exhibitor..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full pl-4 pr-10 py-2.5 bg-gray-50/70 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-[#1b5e20] outline-none text-[12px] font-semibold transition-all placeholder:text-gray-400"
                />
                <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
        </div>
    );
};

export default ExhibitorsFilters;
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    page: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, totalItems, pageSize, onPageChange }: PaginationProps) => {
    const start = (page - 1) * pageSize + 1;
    const end = Math.min(page * pageSize, totalItems);

    if (totalItems === 0) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const renderPageButton = (p: number) => (
        <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-9 h-9 rounded-lg text-[12px] font-bold transition-all border ${
                p === page
                    ? "bg-[#2b5825] text-white border-[#2b5825] shadow-md shadow-green-900/10"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#3b8c2a] hover:text-[#2b5825]"
            }`}
        >
            {p}
        </button>
    );

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
            <p className="text-[12px] text-gray-500 font-medium">
                Showing <span className="font-bold text-[#154726]">{start}</span> – <span className="font-bold text-[#154726]">{end}</span> of{" "}
                <span className="font-bold text-[#154726]">{totalItems}</span> exhibitors
            </p>

            <div className="flex items-center gap-1.5">
                <button
                    onClick={() => onPageChange(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-600 transition-all hover:border-[#3b8c2a] hover:text-[#2b5825] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
                    aria-label="Previous page"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {pages.map((p) => renderPageButton(p))}

                <button
                    onClick={() => onPageChange(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-600 transition-all hover:border-[#3b8c2a] hover:text-[#2b5825] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
                    aria-label="Next page"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
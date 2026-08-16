"use client";

import React, { useEffect, useMemo, useState } from "react";
import ExhibitorsHero from "./ExhibitorsHero";
import ExhibitorsFilters from "./ExhibitorsFilters";
import ExhibitorsGrid from "./ExhibitorsGrid";
import ExhibitorsCta from "./ExhibitorsCta";
import ExhibitorsPagination from "./ExhibitorsPagination";
import { ApiExhibitor } from "./data";

interface ExhibitorsSectionProps {
    exhibitors: ApiExhibitor[];
}

const PAGE_SIZE = 70;

const ExhibitorsSection = ({ exhibitors }: ExhibitorsSectionProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [page, setPage] = useState(1);

    const categories = useMemo(
        () => ["ALL", ...Array.from(new Set(exhibitors.map((e) => e.category)))],
        [exhibitors]
    );

    const filtered = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        return exhibitors.filter((exhi) => {
            const matchesCategory = activeCategory === "ALL" || exhi.category === activeCategory;
            const matchesSearch = !term || exhi.title.toLowerCase().includes(term);
            return matchesCategory && matchesSearch;
        });
    }, [exhibitors, searchTerm, activeCategory]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

    useEffect(() => {
        setPage(1);
    }, [searchTerm, activeCategory]);

    const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <React.Fragment>
            <ExhibitorsHero />
            <ExhibitorsFilters
                categories={categories}
                activeCategory={activeCategory}
                searchTerm={searchTerm}
                onSelect={setActiveCategory}
                onSearch={setSearchTerm}
            />
            <ExhibitorsGrid exhibitors={visible} />
            {(filtered.length > 0) && (
                <section className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4">
                    <ExhibitorsPagination
                        page={page}
                        totalPages={totalPages}
                        totalItems={filtered.length}
                        pageSize={PAGE_SIZE}
                        onPageChange={setPage}
                    />
                </section>
            )}
            <ExhibitorsCta />
        </React.Fragment>
    );
};

export default ExhibitorsSection;
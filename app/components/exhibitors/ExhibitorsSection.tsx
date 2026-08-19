"use client";

import React, { useEffect, useMemo, useState } from "react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import ExhibitorsHero from "./ExhibitorsHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import ExhibitorsFilters from "./ExhibitorsFilters";
import ExhibitorsGrid from "./ExhibitorsGrid";
import ExhibitorsCta from "./ExhibitorsCta";
import ExhibitorsPagination from "./ExhibitorsPagination";
import { ApiExhibitor, fallbackExhibitors } from "./data";
import { Reveal } from "../shared/Reveal";

interface ExhibitorsSectionProps {
    exhibitors: ApiExhibitor[];
}

const PAGE_SIZE = 70;

const ExhibitorsSection = ({ exhibitors }: ExhibitorsSectionProps) => {
    const listToUse = useMemo(() => (exhibitors && exhibitors.length > 0 ? exhibitors : fallbackExhibitors), [exhibitors]);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [page, setPage] = useState(1);

    const categories = useMemo(
        () => ["ALL", ...Array.from(new Set(listToUse.map((e) => e.category)))],
        [listToUse]
    );

    const filtered = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        return listToUse.filter((exhi) => {
            const matchesCategory = activeCategory === "ALL" || exhi.category === activeCategory;
            const matchesSearch = !term || exhi.title.toLowerCase().includes(term);
            return matchesCategory && matchesSearch;
        });
    }, [listToUse, searchTerm, activeCategory]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

    useEffect(() => {
        setPage(1);
    }, [searchTerm, activeCategory]);

    const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <React.Fragment>
            <ExhibitorsHero />
            <AboutStrip />
            
            {/* Section Header */}
            <SectionContainer className="pt-6 pb-3 text-center font-inter">
                <Reveal>
                    <div className="text-center mb-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block mb-2">
                            Our Previous Exhibitors
                        </h2>
                        <p className="text-sm font-semibold text-black font-inter">
                            A Platform Trusted by Industry Leaders
                        </p>
                    </div>
                </Reveal>
            </SectionContainer>

            {/* Unified Wrapper Card */}
            <SectionContainer className="pb-12 font-inter">
                <div
                    className="bg-white px-6 pt-4 pb-4 md:px-8 md:pt-5 md:pb-5"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                >
                    <ExhibitorsFilters
                        categories={categories}
                        activeCategory={activeCategory}
                        searchTerm={searchTerm}
                        onSelect={setActiveCategory}
                        onSearch={setSearchTerm}
                    />
                    <ExhibitorsGrid exhibitors={visible} />
                    {(filtered.length > 0) && (
                        <ExhibitorsPagination
                            page={page}
                            totalPages={totalPages}
                            totalItems={filtered.length}
                            pageSize={PAGE_SIZE}
                            onPageChange={setPage}
                        />
                    )}
                </div>
            </SectionContainer>
            
            <ExhibitorsCta />
        </React.Fragment>
    );
};

export default ExhibitorsSection;
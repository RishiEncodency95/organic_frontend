"use client";

import React, { useEffect, useMemo, useState } from "react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import ExhibitorsHero from "./ExhibitorsHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import ExhibitorsFilters from "./ExhibitorsFilters";
import ExhibitorsGrid from "./ExhibitorsGrid";
import ExhibitorsCta from "./ExhibitorsCta";
import ExhibitorsPagination from "./ExhibitorsPagination";
import { ApiExhibitor, fallbackExhibitors, BACKEND_URL } from "./data";
import { Reveal } from "../shared/Reveal";

interface ExhibitorsSectionProps {
    exhibitors: ApiExhibitor[];
    header?: {
        title?: string;
        subtitle?: string;
    };
}

const PAGE_SIZE = 48;

const ExhibitorsSection = ({ exhibitors, header }: ExhibitorsSectionProps) => {
    const [liveExhibitors, setLiveExhibitors] = useState<ApiExhibitor[]>(exhibitors || []);
    const [headerData, setHeaderData] = useState({
        title: header?.title || "Our Previous Exhibitors",
        subtitle: header?.subtitle || "A Platform Trusted by Industry Leaders",
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);

    // Sync from props if SSR provides new values
    useEffect(() => {
        if (exhibitors && exhibitors.length > 0) {
            setLiveExhibitors(exhibitors);
        }
    }, [exhibitors]);

    useEffect(() => {
        if (header?.title) {
            setHeaderData({
                title: header.title,
                subtitle: header.subtitle || "A Platform Trusted by Industry Leaders",
            });
        }
    }, [header?.title, header?.subtitle]);

    // Live sync: fetch header and exhibitors on mount, on window focus, and interval
    useEffect(() => {
        const fetchLatestData = async () => {
            try {
                // Fetch Header
                const hRes = await fetch("/api/website/participate/exhibitor-list/header", { cache: "no-store" }).catch(() =>
                    fetch(`${BACKEND_URL}/api/website/participate/exhibitor-list/header`, { cache: "no-store" })
                );
                if (hRes && hRes.ok) {
                    const hJson = await hRes.json();
                    if (hJson.data && hJson.data.title) {
                        setHeaderData({
                            title: hJson.data.title,
                            subtitle: hJson.data.subtitle || "A Platform Trusted by Industry Leaders",
                        });
                    }
                }

                // Fetch Items
                const iRes = await fetch("/api/website/participate/exhibitor-list/items", { cache: "no-store" }).catch(() =>
                    fetch(`${BACKEND_URL}/api/website/participate/exhibitor-list/items`, { cache: "no-store" })
                );
                if (iRes && iRes.ok) {
                    const iJson = await iRes.json();
                    if (Array.isArray(iJson.data) && iJson.data.length > 0) {
                        const mapped: ApiExhibitor[] = iJson.data
                            .filter((item: any) => item.status !== "Draft")
                            .map((item: any) => ({
                                _id: item._id,
                                title: item.title || item.name || "Exhibitor",
                                name: item.name || item.title || "Exhibitor",
                                location: item.location || "India",
                                category: item.category || "ORGANIC FOOD",
                                order: typeof item.order === "number" ? item.order : 999,
                                image: item.image || item.logo || "/exhibitors/1.jpg",
                                logo: item.logo || item.image || "/exhibitors/1.jpg",
                                altText: item.altText || `${item.name || item.title} Logo`,
                                status: item.status || "Published",
                                websiteUrl: item.websiteUrl || "",
                            }))
                            .sort((a: ApiExhibitor, b: ApiExhibitor) => a.order - b.order);
                        setLiveExhibitors(mapped);
                    }
                }
            } catch (err) {
                // Keep existing state
            }
        };

        fetchLatestData();

        // Re-check on tab focus
        window.addEventListener("focus", fetchLatestData);
        // Also poll every 4 seconds so updates in admin appear live without reloading
        const interval = setInterval(fetchLatestData, 4000);

        return () => {
            window.removeEventListener("focus", fetchLatestData);
            clearInterval(interval);
        };
    }, []);

    const listToUse = useMemo(() => {
        return liveExhibitors && liveExhibitors.length > 0 ? liveExhibitors : fallbackExhibitors;
    }, [liveExhibitors]);

    const filtered = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        return listToUse.filter((exhi) => {
            return !term || exhi.title.toLowerCase().includes(term);
        });
    }, [listToUse, searchTerm]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

    useEffect(() => {
        setPage(1);
    }, [searchTerm]);

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
                            {headerData.title}
                        </h2>
                        <p className="text-sm font-semibold text-black font-inter">
                            {headerData.subtitle}
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
                        searchTerm={searchTerm}
                        onSearch={setSearchTerm}
                    />
                    <ExhibitorsGrid exhibitors={visible} />
                    {filtered.length > 0 && (
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
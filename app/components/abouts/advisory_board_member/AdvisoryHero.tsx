"use client";

import React, { useEffect, useState } from "react";
import heroBanner from "../../../assets/about/advisory_board_member/hero.webp";
import { Leaf, Users, Award, Lightbulb, Handshake, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/lib/api";

const ICON_MAP: Record<string, any> = { Users, Award, Lightbulb, Handshake };

interface Feature {
    icon: string;
    title: string;
    subtitle: string;
}

interface AdvisoryHeroData {
    titlePart1: string;
    titlePart2: string;
    subtitlePart1: string;
    subtitlePart2: string;
    description: string;
    image: string;
    imageAlt: string;
    features: Feature[];
}

const DEFAULT_DATA: AdvisoryHeroData = {
    titlePart1: "ADVISORY",
    titlePart2: "BOARD MEMBERS",
    subtitlePart1: "GUIDING. INSPIRING. ",
    subtitlePart2: "TRANSFORMING.",
    description: "Our Advisory Board comprises distinguished leaders, industry experts, and visionaries who bring strategic guidance, deep expertise and a shared commitment to drive Bharat Organic Expo towards a sustainable, innovative and impactful future.",
    image: "",
    imageAlt: "Bharat Organic Expo 2027 Advisory Board Members",
    features: [
        { icon: "Users", title: "LEADING VISIONARIES", subtitle: "From diverse industries" },
        { icon: "Award", title: "STRATEGIC GUIDANCE", subtitle: "For sustainable growth" },
        { icon: "Lightbulb", title: "INDUSTRY EXPERTISE", subtitle: "Driving innovation & impact" },
        { icon: "Handshake", title: "COLLABORATIVE LEADERSHIP", subtitle: "Building a stronger organic ecosystem" },
    ],
};

const AdvisoryHero = () => {
    const [data, setData] = useState<AdvisoryHeroData>(DEFAULT_DATA);

    useEffect(() => {
        let active = true;
        fetch(`${API_URL}/website/advisoryhero`, { cache: "no-store" })
            .then((res) => (res.ok ? res.json() : null))
            .then((json) => {
                const d = json?.data || json;
                if (!active || !d) return;
                const hasSubtitle = typeof d.subtitlePart1 === "string" || typeof d.subtitlePart2 === "string";
                setData({
                    titlePart1: d.titlePart1 || DEFAULT_DATA.titlePart1,
                    titlePart2: d.titlePart2 || DEFAULT_DATA.titlePart2,
                    subtitlePart1: hasSubtitle ? d.subtitlePart1 || "" : DEFAULT_DATA.subtitlePart1,
                    subtitlePart2: hasSubtitle ? d.subtitlePart2 || "" : DEFAULT_DATA.subtitlePart2,
                    description: d.description || DEFAULT_DATA.description,
                    image: typeof d.image === "string" ? d.image.trim() : "",
                    imageAlt: d.imageAlt || DEFAULT_DATA.imageAlt,
                    features:
                        Array.isArray(d.features) && d.features.length > 0
                            ? d.features.map((f: any) => ({
                                icon: f.icon || "Users",
                                title: [f.titlePart1, f.titlePart2].filter(Boolean).join(" "),
                                subtitle: [f.descPart1, f.descPart2].filter(Boolean).join(" "),
                            }))
                            : DEFAULT_DATA.features,
                });
            })
            .catch(() => { });
        return () => {
            active = false;
        };
    }, []);

    const bannerSrc = data.image || heroBanner;

    return (
        <section className="relative w-full min-h-[350px] md:min-h-[410px] lg:min-h-[415px] flex items-center overflow-hidden bg-[#f9fafb]">
            {/* Background Image (Globe and Green scenery on the right) */}
            <Image
                key={data.image || "default"}
                src={bannerSrc}
                alt={data.imageAlt}
                fill
                priority
                className="object-cover object-right z-0"
                sizes="100vw"
            />

            {/* Content Overlay */}
            <div className="relative z-20 w-full px-4 md:px-14 flex flex-col justify-center py-8 md:py-10">
                <div className="max-w-3xl text-left mt-4 md:mt-0 space-y-4 md:space-y-6 w-full relative z-10">

                    {/* Title */}
                    <h1 className="font-semibold mt-2 leading-[1.05] mb-2 font-poppins">
                        <div className="text-[#1b5e20] text-[16px] sm:text-[14px] md:text-[28px] lg:text-[46px] tracking-tight block font-semibold">
                            {data.titlePart1}
                        </div>
                        <div className="text-[#ea580c] text-[16px] sm:text-[14px] md:text-[28px] lg:text-[46px] tracking-tight block font-bold">
                            {data.titlePart2}
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <Leaf size={16} className="text-[#1b5e20] rotate-[-45deg] -mr-1 z-10" />
                            <div className="w-8 md:w-16 h-0.5 bg-[#1b5e20]"></div>
                        </div>
                        <span className="font-bold text-[12px] sm:text-[14px] md:text-[16px] tracking-widest uppercase">
                            <span className="text-[#1b5e20]">{data.subtitlePart1}</span>
                            <span className="text-[#ea580c]">{data.subtitlePart2}</span>
                        </span>
                        <div className="w-8 md:w-16 h-0.5 bg-[#1b5e20]"></div>
                    </div>

                    {/* Description */}
                    <p className="text-[#333] font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[650px] pr-4">
                        {data.description}
                    </p>

                    {/* Features Banner Row */}
                    <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-between gap-4 sm:gap-2 mt-6 px-4 py-2 sm:px-5 rounded-2xl bg-[#f4f7f2]/90 backdrop-blur-sm border border-[#e5ece3] shadow-sm max-w-[700px]">
                        {data.features.map((feature, i) => {
                            const IconComponent = ICON_MAP[feature.icon] || Users;
                            return (
                                <div key={i} className={`flex items-start gap-3 w-full sm:w-[24%] ${i !== data.features.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#d1dcd0] pb-3 sm:pb-0 sm:pr-2' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#c5d8c3] shadow-sm">
                                        <IconComponent size={20} className="text-[#2e7d32]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[#1b5e20] font-bold text-[11px] md:text-[12px] leading-tight mb-1">{feature.title}</h4>
                                        <p className="text-[#555] text-[10px] md:text-[11px] leading-tight font-medium">{feature.subtitle}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvisoryHero;

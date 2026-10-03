"use client";

import React from "react";
import Image from "next/image";
import heroBanner from "../../../assets/about/advisory_board_member/nominte.png";
import {
    Award,
    Briefcase,
    Building2,
    CalendarDays,
    CheckCircle,
    Eye,
    Globe,
    GraduationCap,
    Handshake,
    Heart,
    HeartPulse,
    Landmark,
    Leaf,
    Lightbulb,
    Medal,
    Megaphone,
    Mic,
    ShieldCheck,
    Sparkles,
    Sprout,
    Star,
    Target,
    TrendingUp,
    Trophy,
    UserCheck,
    Users,
    Zap,
    type LucideIcon,
} from "lucide-react";

// Icons the admin can pick for the feature row (same names as the admin icon dropdown).
const ICONS: Record<string, LucideIcon> = {
    Award, Briefcase, Building2, CalendarDays, CheckCircle, Eye, Globe, GraduationCap, Handshake,
    Heart, HeartPulse, Landmark, Leaf, Lightbulb, Medal, Megaphone, Mic, ShieldCheck, Sparkles,
    Sprout, Star, Target, TrendingUp, Trophy, UserCheck, Users, Zap,
};

// Shown until the admin saves the hero (and for any field left empty).
const DEFAULT_HERO = {
    eyebrow: "JOIN OUR LEADERSHIP COUNCIL",
    title: "Nominate an Advisory Board Member",
    description: "Recognize leaders who can guide, support and strengthen the vision of Bharat Organic Expo.",
    imageAlt: "Nominate Advisory Board Member",
    features: [
        { label: "Expertise", icon: "Users" },
        { label: "Vision", icon: "Lightbulb" },
        { label: "Collaboration", icon: "Handshake" },
        { label: "Global Impact", icon: "Globe" },
    ],
};

interface HeroFeature {
    label: string;
    icon: string;
}

const NominateHero = ({ data }: { data?: any }) => {
    const eyebrow = data?.eyebrow?.trim() || DEFAULT_HERO.eyebrow;
    const title = data?.title?.trim() || DEFAULT_HERO.title;
    const description = data?.description?.trim() || DEFAULT_HERO.description;
    const imageAlt = data?.imageAlt?.trim() || DEFAULT_HERO.imageAlt;
    const bgImage = typeof data?.image === "string" && data.image.trim() ? data.image.trim() : heroBanner;
    const features: HeroFeature[] =
        Array.isArray(data?.features) && data.features.some((f: any) => f?.label)
            ? data.features.filter((f: any) => f?.label)
            : DEFAULT_HERO.features;

    // Eyebrow: first word underlined in yellow. H1: first two words dark, the rest green.
    const [eyebrowFirst, ...eyebrowRest] = eyebrow.split(/\s+/);
    const titleWords = title.split(/\s+/);
    const titleLead = titleWords.slice(0, 2).join(" ");
    const titleAccent = titleWords.slice(2).join(" ");

    return (
        <section className="relative w-full min-h-[380px] md:min-h-[420px] lg:min-h-[450px] flex items-center overflow-hidden bg-[#f9fbf9]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0 hidden sm:block">
                <Image
                    key={typeof bgImage === "string" ? bgImage : "default"}
                    src={bgImage}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>

            {/* Mobile Background (if any) */}
            <div className="absolute right-0 top-0 w-full h-full z-0 block sm:hidden opacity-20">
                <Image
                    key={typeof bgImage === "string" ? `m-${bgImage}` : "m-default"}
                    src={bgImage}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full px-4 md:px-14 h-full flex flex-col justify-center py-12 md:py-16">
                <div className="max-w-xl md:max-w-2xl text-left mt-6 md:mt-0 space-y-3 w-full relative z-10">

                    <div className="font-bold text-[11px] md:text-[14px] tracking-[0.15em] text-[#1b5e20] uppercase font-poppins flex items-center gap-1.5">
                        <span className="relative">
                            {eyebrowFirst}
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#fbbf24]"></span>
                        </span>
                        {eyebrowRest.length > 0 && <span>{eyebrowRest.join(" ")}</span>}
                    </div>

                    <h1 className="font-semibold leading-[1.1] font-poppins text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] tracking-tight">
                        <span className="text-[#1f2937]">{titleLead}</span>
                        {titleAccent && (
                            <>
                                {" "}
                                <br className="hidden sm:block" />
                                <span className="text-[#105b2b]">{titleAccent}</span>
                            </>
                        )}
                    </h1>

                    <p className="text-[#444] font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-lg pt-1">
                        {description}
                    </p>

                    {/* Icons Row */}
                    <div className="flex items-center gap-5 md:gap-8 pt-6">
                        {features.map((feature, i) => {
                            const Icon = ICONS[feature.icon] || Users;
                            const isLast = i === features.length - 1;
                            return (
                                <div
                                    key={i}
                                    className={`flex flex-col items-center gap-2 ${isLast ? "" : "pr-5 md:pr-8 border-r border-gray-300"}`}
                                >
                                    <Icon size={32} className="text-[#1b5e20] stroke-[1.5]" />
                                    <span className="text-[#1b5e20] font-semibold text-[12px] md:text-[14px]">{feature.label}</span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NominateHero;

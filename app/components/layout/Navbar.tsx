"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    X, ChevronDown, Briefcase, Users, Layout, MapPin,
    Handshake, Camera, Sparkles, FileCheck,
    Info, ShoppingBag, HelpCircle, Lock, CalendarDays,
    ShieldCheck, Home, Phone, ChevronRight,
    LayoutGrid, Building2, ExternalLink, Star, Mic, Trophy,
    Store, UserPlus, Globe, Award
} from "lucide-react";
import navbarLogo from "../../assets/logos/navbarlogo1.png";

// Local cn utility since @/lib/utils is missing
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

// Removed MSME Logo import and API imports to make it static

const navLinks = [
    { label: "Home", path: "/" },
    {
        label: "About Us",
        path: "/about",
        dropdown: [
            { label: "About Expo", path: "/about", icon: Info, description: "Learn about the mission and vision of IHWE" },
            // { label: "Support & Services", path: "/support", icon: Briefcase, description: "Explore our global network of collaborators" },
            { label: "Advisory Board Members", path: "/advisory-board", icon: Users, description: "Meet the experts behind the exhibition" },
            { label: "Blogs", path: "/blog", icon: Layout, description: "Latest news and insights from the wellness industry" },
            { label: "Glimpses of the Event", path: "/gallery", icon: Camera, description: "Explore opportunities as a domestic or international buyer" },
        ]
    },
    {
        label: "Participate",
        dropdown: [
            { label: "Why Exhibit at ORGANIC EXPO?", path: "/why-exhibit", icon: HelpCircle, description: "Maximize your brand visibility and growth" },
            { label: "Exhibitor List", path: "/exhibitors", icon: FileCheck, description: "View the list of confirmed participating brands" },
            { label: "Why Visit ORGANIC EXPO", path: "/why-visit", icon: Layout, description: "Secure your premium space at ORGANIC EXPO 2026" },
            // { label: "Buyer-Seller Meet", path: "/buyer-seller-meet", icon: Users, description: "Connect with buyers and sellers at ORGANIC EXPO" },
            // { label: "MSME PMS Scheme", path: "/msme-pms-scheme", icon: ShieldCheck, description: "Government subsidy for MSME exhibitors" },
            { label: "MSME PMS Scheme", path: "/government-msme-pms-schemes", icon: ShieldCheck, description: "Government subsidy for MSME exhibitors" },
        ],
    },


    { label: "Buyer-Seller Meet", path: "/buyer-seller-meet" },

    {
        label: "Opportunities",
        dropdown: [
            { label: "Sponsorship", path: "/sponsership", icon: FileCheck, description: "Get your complimentary visitor pass today" },
            { label: "Branding Opportunities", path: "/e-promotion-web", icon: ShoppingBag, description: "Explore opportunities as a domestic or international buyer" },
            { label: "Partnership / Collaboration", path: "/partnership", icon: Sparkles, description: "Experience the latest in health & wellness" },
        ],
    },
    { label: "Conference", path: "/conference" },
    { label: "Awards", path: "/awards" },
    { label: "Contact", path: "/contact" },
];

const bottomTabs = [
    { label: "Home", path: "/", icon: Home },
    { label: "Conference", path: "/conference", icon: Mic },
    { label: "Award", path: "/awards", icon: Trophy },
    { label: "Contact", path: "/contact", icon: Phone },
];

const registrationOptions = [
    { label: "BOOK A STALL", path: "/book-a-stand", icon: Store, color: "green" },
    { label: "REGISTER AS VISITOR", path: "/visitor-registration", icon: UserPlus, color: "orange" },
    { label: "DELEGATE REGISTRATION", path: "/conference", icon: Globe, color: "green" },
    { label: "REGISTER AS BUYER", path: "/buyer-registration", icon: Users, color: "orange" },
    { label: "SPONSORSHIP OPPORTUNITIES", path: "/sponsership", icon: Award, color: "green" },
    { label: "TALK TO EXPO ADVISOR", path: "tel:+919654900525", icon: Phone, color: "orange" },
];

const quickPills = [
    { label: "Advisory Board", path: "/advisory-board" },
    { label: "Media / Gallery", path: "/gallery" },
    { label: "Blogs", path: "/blog" },
    { label: "Exhibitor List", path: "/exhibitors" },
    { label: "Seller Reg.", path: "/seller-registration" },
];

// Icons for dropdown parent links
const dropdownIcons: Record<string, React.ElementType> = {
    "About Us": Info,
    "Participate": Building2,
    "Explore": Star,
    "Opportunities": Sparkles,
};

// Standalone links (non-dropdown)
const standaloneLinks = [
    { label: "Conference", path: "/conference", icon: Mic },
    { label: "Awards", path: "/awards", icon: Star },
    { label: "Contact", path: "/contact", icon: Phone },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
        setMobileAccordion(null);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            {scrolled && <div className="h-[72px] xl:h-[80px] w-full print-hidden" />}

            <motion.nav
                className={`${scrolled
                    ? "fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md shadow-md py-0.5 border-b border-slate-200/60"
                    : "relative z-[100] bg-white border-b border-slate-200 py-1 shadow-sm"
                    } transition-all duration-500`}
            >
                <div className="container mx-auto px-6 max-w-[1400px]">

                    {/* ─── DESKTOP NAV (unchanged) ─── */}
                    <div className="hidden xl:flex items-center justify-between py-0 relative h-14">
                        <div className="relative z-[150] h-full flex items-center gap-2">
                            <div className="relative h-full flex items-center min-w-[140px] xl:min-w-[180px] mr-4">
                                <Link href="/" className="absolute top-1 xl:top-1.5 left-0 flex items-center justify-center transition-opacity hover:opacity-90 z-[200]">
                                    <img loading="lazy" decoding="async" src={navbarLogo.src}
                                        alt="Organic Expo Logo"
                                        className="h-[80px] xl:h-[105px] w-auto object-contain drop-shadow-md"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 flex items-center">
                            <div className="flex-1 flex items-center justify-center gap-1 xl:gap-2">
                                {navLinks.map((link) => (
                                    <div
                                        key={link.label}
                                        className="relative flex items-center"
                                        onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                                        onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                                    >
                                        <Link
                                            href={link.path || "#"}
                                            style={{ fontFamily: "'Roboto', sans-serif" }}
                                            className={`px-3 py-2 text-[12.5px] font-bold tracking-[0.05em] uppercase transition-all duration-300 flex items-center gap-1 relative group whitespace-nowrap ${pathname === link.path ? "text-[#276F27]" : "text-slate-900"
                                                }`}
                                        >
                                            {link.label}
                                            {link.dropdown && (
                                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                                            )}
                                            <span className={`absolute -bottom-1 left-2 right-2 h-[2px] bg-[#276F27] transition-transform duration-300 origin-left ${pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                                        </Link>

                                        {link.dropdown && (
                                            <AnimatePresence>
                                                {activeDropdown === link.label && (
                                                    <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 pt-4 w-[220px]">
                                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45 z-10" />
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                                            className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100 py-2 overflow-hidden z-20"
                                                        >
                                                            {link.dropdown
                                                                .map((item, idx) => {
                                                                    const isEven = idx % 2 === 0;
                                                                    return (
                                                                        <Link
                                                                            key={item.label}
                                                                            href={item.path}
                                                                            onClick={() => setActiveDropdown(null)}
                                                                            className="flex items-start gap-4 px-4 py-2.5 hover:bg-slate-50 group transition-all border-b border-slate-200 last:border-b-0"
                                                                        >
                                                                            <div className={cn(
                                                                                "w-7 h-7 mt-0.5 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-md",
                                                                                isEven
                                                                                    ? "bg-[#3b8c2a]/10 text-[#3b8c2a] group-hover:bg-[#3b8c2a]"
                                                                                    : "bg-[#f59e0b]/10 text-[#f59e0b] group-hover:bg-[#f59e0b]"
                                                                            )}>
                                                                                <item.icon className="w-3.5 h-3.5" />
                                                                            </div>
                                                                            <div className="flex flex-col gap-0.5">
                                                                                <span className={cn(
                                                                                    "text-[12px] font-semibold text-slate-800 transition-colors",
                                                                                    isEven ? "group-hover:text-[#3b8c2a]" : "group-hover:text-[#f59e0b]"
                                                                                )}>
                                                                                    {item.label}
                                                                                </span>
                                                                                <span className="text-[10px] text-slate-500 leading-normal">{item.description}</span>
                                                                            </div>
                                                                        </Link>
                                                                    );
                                                                })}
                                                        </motion.div>
                                                    </div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown("registration")}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button
                                        className="group relative overflow-hidden border-2 px-5 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all duration-500 whitespace-nowrap flex-shrink-0 bg-[#60241E] hover:bg-[#4a1c17] border-white text-white flex items-center gap-1.5 shadow-md hover:shadow-lg"
                                    >
                                        <span className="relative z-10">Register Now</span>
                                        <ChevronDown className={cn("w-3 h-3 transition-transform duration-500", activeDropdown === "registration" ? "rotate-180" : "")} />
                                    </button>

                                    <AnimatePresence>
                                        {activeDropdown === "registration" && (
                                            <div className="absolute top-[calc(100%-8px)] right-0 pt-4 w-[260px] z-50">
                                                <div className="absolute top-[10px] right-10 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45 z-10" />
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                                    transition={{ type: "spring" as const, damping: 25, stiffness: 300 }}
                                                    className="relative bg-white rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-slate-100 p-1 overflow-hidden z-20"
                                                >
                                                    <div className="grid grid-cols-2">
                                                        {[
                                                            { to: "/book-a-stand", icon: Store, label: "BOOK A\nSTALL", color: "orange", click: "Registration: Book A Stall" },
                                                            { to: "/visitor-registration", icon: UserPlus, label: "REGISTER AS\nVISITOR", color: "green", click: "Registration: Visitor Pass" },
                                                            { to: "/conference", icon: Globe, label: "DELEGATE\nREGISTRATION", color: "orange", click: "Registration: Delegates Register" },
                                                            { to: "/buyer-registration", icon: Users, label: "REGISTER AS\nBUYER", color: "green", click: "Registration: Buyer Register" },
                                                            { to: "/sponsership", icon: Award, label: "SPONSORSHIP\nOPPORTUNITIES", color: "orange", click: "Registration: Sponsorship" },
                                                            { to: "tel:+919654900525", icon: Phone, label: "TALK TO EXPO\nADVISOR", color: "green", click: "Registration: Expo Advisor" },
                                                        ].map((item, idx) => {
                                                            const commonProps = {
                                                                key: item.to,
                                                                onClick: () => setActiveDropdown(null),
                                                                className: cn(
                                                                    "flex items-center gap-1.5 px-2 py-2 hover:bg-slate-50 text-left transition-all group relative z-20 border-b border-slate-100",
                                                                    idx % 2 === 0 ? "border-r" : ""
                                                                )
                                                            };

                                                            const Content = (
                                                                <>
                                                                    <div className={cn(
                                                                        "w-6 h-6 flex-shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm",
                                                                        item.color === "orange"
                                                                            ? "bg-[#f59e0b]/5 text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-white"
                                                                            : "bg-[#3b8c2a]/5 text-[#3b8c2a] group-hover:bg-[#3b8c2a] group-hover:text-white"
                                                                    )}>
                                                                        <item.icon className="w-3 h-3" />
                                                                    </div>
                                                                    <span className={cn(
                                                                        "text-[9px] font-semibold text-slate-800 uppercase tracking-wider transition-colors leading-tight whitespace-pre-line",
                                                                        item.color === "orange" ? "group-hover:text-[#f59e0b]" : "group-hover:text-[#3b8c2a]"
                                                                    )}>
                                                                        {item.label}
                                                                    </span>
                                                                </>
                                                            );

                                                            return item.to.startsWith("tel:") ? (
                                                                <a href={item.to} {...commonProps}>{Content}</a>
                                                            ) : (
                                                                <Link href={item.to} target="_blank" rel="noopener noreferrer" {...commonProps}>{Content}</Link>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── MOBILE TOP NAV ─── */}
                    <div className="flex xl:hidden items-center justify-between h-[60px] relative">
                        <div className="relative z-[150] h-full flex items-center min-w-[110px]">
                            <Link href="/" className="absolute top-1 left-0 flex items-center justify-center transition-opacity active:opacity-75 z-[200]">
                                <img loading="lazy" decoding="async" src={navbarLogo.src}
                                    alt="Organic Expo Logo"
                                    className="h-[70px] w-auto object-contain drop-shadow-sm"
                                />
                            </Link>
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-3">
                            <div className="flex flex-col items-center flex-shrink-0">
                            </div>

                            <button
                                onClick={() => setMobileOpen(true)}
                                className="bg-[#60241E] hover:bg-[#4a1c17] text-white border-[1.5px] border-white rounded-xl px-3 py-2.5 text-[9px] font-black uppercase tracking-tight active:scale-95 transition-all relative z-[110] flex-shrink-0 shadow-md"
                                style={{ boxShadow: "rgba(9, 30, 66, 0.2) 0px 1px 2px 0px" }}
                            >
                                Register ▾
                            </button>

                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className={cn(
                                    "w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[4.5px] transition-all duration-300 border flex-shrink-0",
                                    mobileOpen ? "bg-[#3b8c2a] border-[#3b8c2a]" : "bg-white border-[#3b8c2a]"
                                )}
                                aria-label="Toggle menu"
                            >
                                <span className={cn("block w-[14px] h-[1.5px] rounded-full transition-all duration-300", mobileOpen ? "bg-white translate-y-[6px] rotate-45" : "bg-slate-700")} />
                                <span className={cn("block w-[14px] h-[1.5px] rounded-full transition-all duration-300", mobileOpen ? "bg-white opacity-0" : "bg-slate-700")} />
                                <span className={cn("block w-[14px] h-[1.5px] rounded-full transition-all duration-300", mobileOpen ? "bg-white -translate-y-[6px] -rotate-45" : "bg-slate-700")} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* ─── MOBILE BOTTOM TAB BAR ─── */}
            <div className="xl:hidden fixed bottom-0 left-0 right-0 z-[90] bg-white/95 backdrop-blur-xl border-t border-slate-100">
                <div className="flex items-center justify-around px-2 pt-1 pb-3">
                    {bottomTabs.map((tab) => {
                        const isActive = pathname === tab.path;
                        return (
                            <Link
                                key={tab.path}
                                href={tab.path}
                                className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all"
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200",
                                    isActive ? "bg-[#3b8c2a] shadow-md shadow-[#3b8c2a]/20" : "bg-transparent"
                                )}>
                                    <tab.icon className={cn("w-4 h-4 transition-colors", isActive ? "text-white" : "text-slate-800")} />
                                </div>
                                <span className={cn(
                                    "text-[9px] font-medium uppercase tracking-wider transition-colors",
                                    isActive ? "text-[#3b8c2a]" : "text-slate-800"
                                )}>
                                    {tab.label}
                                </span>
                            </Link>
                        );
                    })}

                    {/* Center FAB */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="flex flex-col items-center gap-0.5 px-3 py-1.5"
                    >
                        <div className="w-10 h-10 rounded-xl bg-[#3b8c2a] flex items-center justify-center shadow-lg shadow-[#3b8c2a]/30 -mt-5 border-2 border-white transition-all active:scale-95">
                            <LayoutGrid className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#3b8c2a] mt-0.5">Menu</span>
                    </button>
                </div>
            </div>

            {/* ─── MOBILE BOTTOM SHEET MENU ─── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="xl:hidden fixed inset-0 z-[95] bg-black/50 backdrop-blur-sm"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 280 }}
                            className="xl:hidden fixed bottom-0 left-0 right-0 z-[99] bg-white rounded-t-[28px] max-h-[90vh] overflow-y-auto"
                        >
                            {/* Sticky handle only (No Header) */}
                            <div className="sticky top-0 bg-white z-10 rounded-t-[28px]">
                                <div className="flex justify-center pt-3 pb-1">
                                    <div className="w-9 h-1 bg-slate-200 rounded-full" />
                                </div>
                            </div>



                            {/* Registration Grid */}
                            <div className="px-5 mt-5">
                                <div className="text-[9px] font-semibold text-[#3b8c2a] uppercase tracking-[0.15em] mb-3">Register Now</div>
                                <div className="grid grid-cols-3 gap-2">
                                    {registrationOptions.map((opt) => {
                                        const commonProps = {
                                            key: opt.path,
                                            onClick: () => setMobileOpen(false),
                                            className: "flex flex-col items-center gap-2 bg-white border border-slate-100 rounded-2xl py-3 px-2 active:scale-95 transition-all",
                                            style: { boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }
                                        };

                                        const Content = (
                                            <>
                                                <div className={cn(
                                                    "w-9 h-9 rounded-xl flex items-center justify-center",
                                                    opt.color === "green" ? "bg-[#3b8c2a]/10 text-[#3b8c2a]" : "bg-[#f59e0b]/10 text-[#f59e0b]"
                                                )}>
                                                    <opt.icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-[9px] font-semibold text-slate-800 uppercase tracking-wide text-center leading-tight">
                                                    {opt.label}
                                                </span>
                                            </>
                                        );

                                        return opt.path.startsWith("tel:") ? (
                                            <a href={opt.path} {...commonProps}>{Content}</a>
                                        ) : (
                                            <Link href={opt.path} target="_blank" rel="noopener noreferrer" {...commonProps}>{Content}</Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Navigation with Accordion Dropdowns */}
                            <div className="px-5 mt-5">
                                <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-2">Navigation</div>

                                {/* Home */}
                                <Link
                                    href="/"
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 py-3 px-3 rounded-xl border-b border-slate-50 transition-all",
                                        pathname === "/" ? "bg-[#3b8c2a]/5" : "active:bg-slate-50"
                                    )}
                                >
                                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                                        <Home className={cn("w-4 h-4", pathname === "/" ? "text-[#3b8c2a]" : "text-slate-500")} />
                                    </div>
                                    <span className={cn("text-[13px] font-semibold flex-1", pathname === "/" ? "text-[#3b8c2a]" : "text-slate-900")}>
                                        Home
                                    </span>
                                    {pathname === "/" && <div className="w-1.5 h-1.5 rounded-full bg-[#3b8c2a]" />}
                                </Link>

                                {/* Dropdown links as accordion */}
                                {navLinks.filter(l => l.dropdown).map((link) => {
                                    const ParentIcon = dropdownIcons[link.label] || Info;
                                    const isOpen = mobileAccordion === link.label;
                                    return (
                                        <div key={link.label} className="border-b border-slate-50">
                                            <button
                                                onClick={() => setMobileAccordion(isOpen ? null : link.label)}
                                                className="w-full flex items-center gap-3 py-3 px-3 rounded-xl transition-all active:bg-slate-50"
                                            >
                                                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                                                    <ParentIcon className={cn("w-4 h-4 transition-colors", isOpen ? "text-[#3b8c2a]" : "text-slate-500")} />
                                                </div>
                                                <span className={cn("text-[13px] font-semibold flex-1 text-left transition-colors", isOpen ? "text-[#3b8c2a]" : "text-slate-900")}>
                                                    {link.label}
                                                </span>
                                                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isOpen ? "rotate-180 text-[#3b8c2a]" : "text-slate-400")} />
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        key="content"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-12 pr-2 pb-2 flex flex-col gap-0.5">
                                                            {link.dropdown!
                                                                .map((item, idx) => (
                                                                    <Link
                                                                        key={item.path}
                                                                        href={item.path}
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className="flex items-center gap-3 py-2.5 px-3 rounded-xl active:bg-slate-50 transition-all"
                                                                    >
                                                                        <div className={cn(
                                                                            "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-100"
                                                                        )}>
                                                                            <item.icon className={cn("w-3.5 h-3.5", idx % 2 === 0 ? "text-[#3b8c2a]" : "text-[#f59e0b]")} />
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <div className="text-[12px] font-medium text-slate-900">{item.label}</div>
                                                                            <div className="text-[10px] text-slate-400 truncate">{item.description}</div>
                                                                        </div>
                                                                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
                                                                    </Link>
                                                                ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}

                                {/* Standalone links */}
                                {standaloneLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setMobileOpen(false)}
                                        className={cn(
                                            "flex items-center gap-3 py-3 px-3 rounded-xl border-b border-slate-50 transition-all",
                                            pathname === link.path ? "bg-[#3b8c2a]/5" : "active:bg-slate-50"
                                        )}
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                                            <link.icon className={cn("w-4 h-4", pathname === link.path ? "text-[#3b8c2a]" : "text-slate-500")} />
                                        </div>
                                        <span className={cn("text-[13px] font-semibold flex-1", pathname === link.path ? "text-[#3b8c2a]" : "text-slate-900")}>
                                            {link.label}
                                        </span>
                                        {pathname === link.path && <div className="w-1.5 h-1.5 rounded-full bg-[#3b8c2a]" />}
                                    </Link>
                                ))}
                            </div>

                            {/* Quick Pills */}
                            <div className="px-5 mt-4">
                                <div className="flex flex-wrap gap-2">
                                    {quickPills.map((pill) => (
                                        <Link
                                            key={pill.path}
                                            href={pill.path}
                                            onClick={() => setMobileOpen(false)}
                                            className="bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 text-[9px] font-medium text-slate-700 uppercase tracking-wide active:scale-95 transition-all"
                                        >
                                            {pill.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Login Buttons */}
                            <div className="px-5 mt-4 mb-2">
                                <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-3">Account</div>
                                <div className="grid grid-cols-2 gap-2">
                                    <Link
                                        href="/exhibitor-login"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl py-3 text-[10px] font-semibold uppercase tracking-wider active:scale-95 transition-all"
                                    >
                                        <Lock className="w-3.5 h-3.5 text-[#f59e0b]" />
                                        Exhibitor
                                    </Link>
                                    <Link
                                        href="/buyer-login"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl py-3 text-[10px] font-semibold uppercase tracking-wider active:scale-95 transition-all"
                                    >
                                        <Lock className="w-3.5 h-3.5 text-[#f59e0b]" />
                                        Buyer
                                    </Link>
                                    <Link
                                        href="/conference"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-800 rounded-xl py-3 text-[10px] font-semibold uppercase tracking-wider active:scale-95 transition-all"
                                    >
                                        Delegates
                                    </Link>
                                    <a
                                        href="https://admin.organicexpo.in/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-center gap-1.5 bg-white border border-slate-200 text-slate-800 rounded-xl py-3 text-[10px] font-semibold uppercase tracking-wider active:scale-95 transition-all"
                                    >
                                        User Login
                                        <ExternalLink className="w-3 h-3 text-slate-400" />
                                    </a>
                                </div>
                            </div>

                            {/* Bottom padding for tab bar */}
                            <div className="h-24 md:h-28" />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
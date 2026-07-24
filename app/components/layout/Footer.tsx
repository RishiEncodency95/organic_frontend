"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import footerLogo from "../../assets/logos/footerlogo.png";
import footerBottomImg from "../../assets/logos/footerimg.png";

// Removed missing image imports (foot1, foot2, etc.) to fix build errors. Using lucide icons instead.

// Lucide Icons
import {
    Phone,
    Mail,
    Globe,
    MapPin,
    Users,
    Mic,
    Lightbulb,
    Handshake,
    Rocket,
    Headphones,
    ChevronRight,
    MonitorPlay,
    Heart,
    FileText,
    CalendarDays,
    Download,
    BookOpen
} from "lucide-react";

// Social SVG Components to replace missing lucide-react brand icons
const Facebook = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>);
const Instagram = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>);
const Twitter = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>);
const Linkedin = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>);
const Youtube = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>);

// Sparkle component to enhance logo visibility
const Sparkle = ({ style, color = '#F6A003' }: { style?: React.CSSProperties, color?: string }) => (
    <span
        style={{
            position: 'absolute',
            pointerEvents: 'none',
            fontSize: '20px',
            color: color,
            textShadow: `0 0 8px ${color}, 0 0 16px ${color}, 0 0 24px ${color}`,
            animation: 'sparkleAnim 1.6s ease-in-out infinite',
            opacity: 0,
            zIndex: 20,
            ...style,
        }}
    >
        ✦
    </span>
);

// Animated Counter component
const CountUp = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startTimestamp: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        setCount(Math.floor(progress * end));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{count}</span>;
};

const Footer = () => {
    const getHighlightIcon = (iconType: string) => {
        switch (iconType) {
            case "Keynote": return <Mic className="w-5 h-5 text-[#F6A003]" />;
            case "Panel Discussions": return <Users className="w-5 h-5 text-[#F6A003]" />;
            case "Workshops": return <BookOpen className="w-5 h-5 text-[#F6A003]" />;
            case "Networking": return <Handshake className="w-5 h-5 text-[#F6A003]" />;
            case "Innovation Showcase": return <Lightbulb className="w-5 h-5 text-[#F6A003]" />;
            default: return <MonitorPlay className="w-5 h-5 text-[#F6A003]" />;
        }
    };

    // Hardcoded static data instead of API calls
    const logoUrl = footerLogo.src;
    const logoAlt = "Bharat Organic Expo Logo";

    const footerEmails = ['info@bharatorganicexpo.com'];
    const footerPhones = ['9876540310'];

    const footerWebsite = "www.bharatorganicexpo.com";
    const footerAddress = "Pragati Maidan,\nNew Delhi, India";
    const footerHelplineTitle = "Conference Helpline";
    const footerHelplinePhone = "+91 98765 40310";
    const footerHelplineTiming = "Mon - Sat: 9:00 AM - 6:00 PM (IST)";

    const footerGetInTouchTitle = "Get In Touch";

    const footerQuickLinksTitle = "Quick Links";
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Conference Tracks", path: "/conference" },
        { name: "Speakers", path: "/speakers" },
        { name: "Agenda", path: "/agenda" },
        { name: "Registration", path: "/registration" },
        { name: "Exhibition", path: "/exhibitors" },
        { name: "Contact Us", path: "/contact" }
    ];

    const footerHighlightsTitle = "Conference Highlights";
    const highlights = [
        { iconType: "Keynote", title: "Keynote Sessions", desc: "Global thought leaders share their vision" },
        { iconType: "Panel Discussions", title: "Panel Discussions", desc: "Diverse perspectives on critical topics" },
        { iconType: "Workshops", title: "Workshops", desc: "Hands-on learning from experts" },
        { iconType: "Networking", title: "Networking", desc: "Connect. Collaborate. Create impact." },
        { iconType: "Innovation Showcase", title: "Innovation Showcase", desc: "Discover breakthrough organic solutions" }
    ];

    const footerAboutText = "India's Premier Integrated Organic Conference\nuniting Modern Agriculture, Sustainability\nand Traditional Wisdom for a healthier tomorrow.";
    const footerAboutHighlighted = "healthier tomorrow.";

    const renderFooterAboutText = () => {
        if (!footerAboutText) return null;

        const parts = footerAboutHighlighted ? footerAboutText.split(footerAboutHighlighted) : [footerAboutText];

        return parts.map((part: string, index: number) => (
            <React.Fragment key={`part-${index}`}>
                {part.split('\n').map((line: string, i: number, arr: any[]) => (
                    <React.Fragment key={`line-${index}-${i}`}>
                        {line}
                        {i < arr.length - 1 && <br />}
                    </React.Fragment>
                ))}
                {index < parts.length - 1 && (
                    <span className="text-[#F6A003]">{footerAboutHighlighted}</span>
                )}
            </React.Fragment>
        ));
    };

    const footerStats = [
        { icon: "foot1", number: 1000, label: "Delegates" },
        { icon: "foot2", number: 150, label: "Speakers" },
        { icon: "foot3", number: 25, label: "Countries" },
        { icon: "foot4", number: 100, label: "Sessions" }
    ];

    const getStatIcon = (iconName: string) => {
        switch (iconName) {
            case "foot1": return <Users className="w-6 h-6 text-[#F6A003]" />;
            case "foot2": return <Mic className="w-6 h-6 text-[#F6A003]" />;
            case "foot3": return <Globe className="w-6 h-6 text-[#F6A003]" />;
            case "foot4": return <CalendarDays className="w-6 h-6 text-[#F6A003]" />;
            default: return <Users className="w-6 h-6 text-[#F6A003]" />;
        }
    };

    return (
        <footer className="bg-[#001810] text-white font-inter text-sm w-full relative overflow-hidden">
            <style>{`
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-4px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-6px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-8px); }
        }
        @keyframes goldShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .golden-btn-footer {
          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 20px 5px rgba(255,200,0,0.25), 0 4px 20px rgba(255,165,0,0.15);
          position: relative;
          overflow: hidden;
          border: 2px solid white !important;
        }
        .golden-btn-footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
      `}</style>

            {/* Top Grid Section */}
            <div className="max-w-[1536px] mx-auto px-4 md:px-8 xl:px-12 pt-8 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.95fr_0.95fr_0.95fr] gap-8 lg:gap-2 xl:gap-2 pb-4">

                    {/* Column 1: Logo & Stats */}
                    <div className="flex flex-col gap-6 lg:pr-0 xl:pr-2">
                        <div className="w-48 sm:w-56 relative inline-block bg-white p-2 rounded-xl">
                            {/* Sparkles around the logo */}
                            <Sparkle style={{ top: '-10px', left: '10%', animationDelay: '0s' }} />
                            <Sparkle style={{ top: '20px', left: '-15px', animationDelay: '0.4s' }} />
                            <Sparkle style={{ top: '-15px', right: '15%', animationDelay: '0.8s' }} />
                            <Sparkle style={{ bottom: '10px', left: '5%', animationDelay: '0.2s' }} />
                            <Sparkle style={{ bottom: '-10px', right: '20%', animationDelay: '0.6s' }} />
                            <Sparkle style={{ top: '40%', right: '-20px', animationDelay: '0.3s' }} />

                            <img
                                src={logoUrl}
                                alt={logoAlt}
                                className="w-full h-auto object-contain"
                                style={{ filter: "drop-shadow(0 0 15px rgba(243,183,27,0.3))" }}
                            />
                        </div>
                        <p className="text-white text-[13px] leading-relaxed whitespace-nowrap">
                            {renderFooterAboutText()}
                        </p>

                        <div className="flex items-center gap-2 w-full -mt-2 mb-5">
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#F6A003]/80" />
                            <div className="w-2 h-2 rounded-full bg-[#F6A003]" />
                            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#F6A003]/80" />
                        </div>

                        <div className="flex justify-between items-center w-full -mt-8 mb-5">
                            {footerStats.map((stat: any, index: number) => (
                                <React.Fragment key={`stat-${index}`}>
                                    <div className="flex flex-col items-center gap-1 w-1/4">
                                        <div className="h-7 w-auto flex items-center justify-center">
                                            {getStatIcon(stat.icon)}
                                        </div>
                                        <span className="font-medium font-inter tracking-wider text-[#F6A003] text-[16px] mt-1">
                                            <CountUp end={stat.number || 0} />+
                                        </span>
                                        <span className="text-[10px] text-white uppercase tracking-wider font-medium text-center">{stat.label}</span>
                                    </div>
                                    {index < footerStats.length - 1 && (
                                        <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-[#F6A003]/60 to-transparent shrink-0" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:border-l lg:border-white/20 lg:pl-3 xl:pl-4">
                        <h4 className="text-[#F6A003] font-bold font-inter text-[14px] mb-3 uppercase tracking-wider">{footerQuickLinksTitle}</h4>
                        <ul className="grid grid-cols-1 gap-y-1.5">
                            {quickLinks.map((link: any) => (
                                <li key={link.path}>
                                    <Link href={link.path} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group text-[13px]">
                                        <ChevronRight size={14} className="text-[#F6A003] group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Conference Highlights */}
                    <div className="lg:border-l lg:border-white/20 lg:pl-3 xl:pl-4">
                        <h4 className="text-[#F6A003] font-bold font-inter text-[14px] mb-3 uppercase tracking-wider whitespace-nowrap">{footerHighlightsTitle}</h4>
                        <div className="flex flex-col gap-3">
                            {highlights.map((item: any, idx: number) => (
                                <div key={idx} className="flex gap-3 items-center">
                                    <div className="w-11 h-11 rounded-full border border-[#F6A003] flex items-center justify-center shrink-0">
                                        {getHighlightIcon(item.iconType)}
                                    </div>
                                    <div>
                                        <h5 className="text-white text-[13px] font-normal">{item.title}</h5>
                                        <p className="text-gray-400 text-[11px] leading-tight mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Get In Touch */}
                    <div className="lg:border-l lg:border-white/20 lg:pl-3 xl:pl-4">
                        <h4 className="text-[#F6A003] font-bold font-inter text-[14px] mb-3 uppercase tracking-wider">{footerGetInTouchTitle}</h4>
                        <div className="flex flex-col gap-3 mb-2">
                            {footerPhones.length > 0 && (
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-7 h-7 rounded-full border border-[#F6A003] flex items-center justify-center shrink-0">
                                        <Phone size={14} className="text-[#F6A003]" />
                                    </div>
                                    <div className="flex flex-wrap items-center text-[13px]">
                                        {footerPhones.map((phone: string, idx: number) => (
                                            <React.Fragment key={`phone-${idx}`}>
                                                <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors">
                                                    {phone}
                                                </a>
                                                {idx < footerPhones.length - 1 && <span className="mx-1">,</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {footerEmails.length > 0 && (
                                <div className="flex items-center gap-3 text-gray-300">
                                    <div className="w-7 h-7 rounded-full border border-[#F6A003] flex items-center justify-center shrink-0">
                                        <Mail size={14} className="text-[#F6A003]" />
                                    </div>
                                    <div className="flex flex-wrap items-center text-[13px]">
                                        {footerEmails.map((email: string, idx: number) => (
                                            <React.Fragment key={`email-${idx}`}>
                                                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                                                    {email}
                                                </a>
                                                {idx < footerEmails.length - 1 && <span className="mx-1">,</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <a href={`https://${footerWebsite.replace(/^https?:\/\//, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <div className="w-7 h-7 rounded-full border border-[#F6A003] flex items-center justify-center shrink-0">
                                    <Globe size={14} className="text-[#F6A003]" />
                                </div>
                                <span className="text-[13px]">{footerWebsite}</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-300">
                                <div className="w-7 h-7 rounded-full border border-[#F6A003] flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin size={14} className="text-[#F6A003]" />
                                </div>
                                <span className="text-[11px] leading-relaxed pr-4 whitespace-pre-line">
                                    {footerAddress}
                                </span>
                            </div>
                        </div>

                        <div className="border border-[#F6A003]/40 rounded-lg py-2.5 px-3 bg-[#F6A003]/5 flex items-center gap-2 relative w-full">
                            <div className="text-[#F6A003]">
                                <Headphones size={24} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-[#F6A003] text-[11px] font-semibold uppercase tracking-wider mb-0.5">{footerHelplineTitle}</p>
                                <p className="text-white font-semibold text-[16px] leading-tight mb-0.5">{footerHelplinePhone}</p>
                                <p className="text-white text-[10px] leading-tight whitespace-nowrap">{footerHelplineTiming}</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 5: Connect With Us */}
                    <div className="lg:border-l lg:border-white/20 lg:pl-3 xl:pl-4">
                        <h4 className="text-[#F6A003] font-bold font-inter text-[14px] mb-3 uppercase tracking-wider">Connect With Us</h4>
                        <div className="flex gap-3 mb-6 mt-1">
                            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-9 h-9 rounded-full border border-[#F6A003]/60 flex items-center justify-center text-[#F6A003] hover:bg-[#F6A003] hover:text-[#001810] hover:border-[#F6A003] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_4px_12px_rgba(242,180,14,0.3)]">
                                    <Icon width={15} height={15} />
                                </a>
                            ))}
                        </div>

                        <h4 className="text-[#F6A003] font-bold font-inter text-[14px] mb-3 uppercase tracking-wider">Download Our App</h4>
                        <p className="text-gray-300 text-[11px] mb-4 leading-relaxed whitespace-nowrap">
                            Your conference companion for agenda,<br />updates and networking.
                        </p>
                        <div className="flex gap-2 mb-5">
                            {/* Play Store */}
                            <button className="flex items-center gap-2 bg-black border border-white/20 rounded-md px-2 py-1.5 hover:border-white/40 transition-colors flex-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                            </button>
                            {/* App Store */}
                            <button className="flex items-center gap-2 bg-black border border-white/20 rounded-md px-2 py-1.5 hover:border-white/40 transition-colors flex-1">
                                <div className="text-white shrink-0 pl-1"><svg viewBox="0 0 384 512" width="14" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg></div>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[7px] text-white/80">Download on the</span>
                                    <span className="text-[12px] font-semibold text-white">App Store</span>
                                </div>
                            </button>
                        </div>
                        
                        {/* Footer Bottom Image */}
                        <div className="mt-4 mb-2 flex justify-start xl:justify-center">
                            <img src={footerBottomImg.src} alt="Footer Details" className="w-full max-w-[200px] h-auto object-contain opacity-90" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Middle Banner: Newsletter & Brochure */}
            <div className="max-w-[1536px] mx-auto px-4 md:px-8 xl:px-12 pb-4 relative z-10 -mt-8">
                <div className="relative w-full flex items-center">

                    {/* Parlia Image placeholder */}
                    <div className="absolute -right-6 md:-right-12 lg:-right-20 xl:-right-32 top-1/2 -translate-y-1/2 -mt-2 md:-mt-4 h-24 md:h-32 lg:h-40 w-24 object-contain z-0 pointer-events-none opacity-10 bg-white rounded-full blur-xl" />

                    {/* Banner Band with gradient fading out on the right to overlap Parlia */}
                    <div className="bg-gradient-to-r from-[#f5f0e1] via-[#e8dfc8] to-transparent rounded-l-[2rem] rounded-r-none xl:rounded-l-full xl:rounded-r-none flex flex-col xl:flex-row items-center justify-start pl-4 md:pl-6 pr-8 border-y border-l border-r-0 border-white/20 gap-2 xl:gap-0 w-full lg:w-[92%] xl:w-[85%] relative z-10 py-0">

                        <div className="flex flex-col md:flex-row items-center w-full xl:w-auto py-0">
                            {/* Newsletter Info */}
                            <div className="flex items-center gap-3 pr-2 xl:pr-4">
                                <Mail className="h-9 w-9 text-[#541A1A] shrink-0" />
                                <div>
                                    <h4 className="text-[#001810] font-medium text-[13px] leading-tight -mt-0.5">STAY CONNECTED. STAY INFORMED.</h4>
                                    <p className="text-black text-[10px] leading-tight -mt-1 whitespace-nowrap">Subscribe to get the latest updates, speaker announcements,<br />agenda highlights and exclusive offers.</p>
                                </div>
                            </div>

                            {/* Sub-divider */}
                            <div className="hidden md:block w-[1px] h-12 bg-black/20 shrink-0 ml-0 mr-4"></div>

                            {/* Input & Button */}
                            <div className="flex w-full md:w-[350px] h-9 bg-[#001810] rounded-lg overflow-hidden shrink-0">
                                <div className="flex-1 flex items-center px-4 gap-2">
                                    <Mail size={14} className="text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="bg-transparent text-white text-[11px] w-full focus:outline-none placeholder:text-gray-400"
                                    />
                                </div>
                                <button className="bg-[#cba344] hover:bg-[#b58c35] text-[#001810] font-bold text-[11px] px-5 transition-colors flex items-center gap-2 uppercase">
                                    Subscribe <ChevronRight size={14} />
                                </button>
                            </div>
                            {/* Main Divider */}
                            <div className="hidden xl:block w-[1px] h-12 bg-black/20 ml-2 mr-6 shrink-0" />
                        </div>

                        {/* Brochure */}
                        <div className="flex items-center gap-3 w-full xl:w-auto justify-start xl:justify-end py-1 xl:py-0 border-t xl:border-t-0 border-black/10 mt-1 xl:mt-0 pt-1 xl:pt-0">
                            <FileText className="h-9 w-9 text-[#541A1A] shrink-0" />
                            <div className="flex flex-col items-start mr-2">
                                <h4 className="text-[#F6A003] font-medium text-[12px] whitespace-nowrap mb-0.5">DOWNLOAD BROCHURE</h4>
                                <div style={{ position: 'relative', display: 'inline-block' }} className="shrink-0 -mt-0.5">
                                    <Sparkle color="#541A1A" style={{ top: '-12px', left: '10%', animationDelay: '0s' }} />
                                    <Sparkle color="#541A1A" style={{ top: '-8px', left: '45%', animationDelay: '0.4s' }} />
                                    <Sparkle color="#541A1A" style={{ top: '-14px', right: '15%', animationDelay: '0.8s' }} />
                                    <Sparkle color="#541A1A" style={{ bottom: '-12px', left: '20%', animationDelay: '0.2s' }} />
                                    <Sparkle color="#541A1A" style={{ bottom: '-8px', right: '25%', animationDelay: '0.6s' }} />
                                    <Sparkle color="#541A1A" style={{ top: '20%', left: '-8px', animationDelay: '0.3s' }} />
                                    <Sparkle color="#541A1A" style={{ top: '60%', right: '-8px', animationDelay: '0.7s' }} />

                                    <button className="bg-[#541A1A] hover:bg-[#3b1212] border border-white shadow-md group rounded-full px-2.5 py-1 text-white font-bold text-[9px] uppercase tracking-[0.05em] transition-all duration-300 flex items-center gap-1 relative z-10">
                                        Download PDF <svg className="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 py-2.5 bg-[#00100a] relative z-10">
                <div className="max-w-[1536px] mx-auto px-4 md:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">

                    <div className="flex items-center gap-3">
                        <span className="text-white font-normal tracking-wide">Bharat Organic Expo</span>
                        <div className="w-[1px] h-3 bg-white/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F6A003]" />
                    </div>

                    <div className="text-center">
                        © {new Date().getFullYear()} Bharat Organic Expo. All Rights Reserved.
                    </div>

                    <div className="flex items-center gap-4 xl:gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>

                    <div className="flex items-center gap-1.5">
                        Designed with <Heart size={12} className="text-[#cba344] fill-[#cba344]" /> for a healthier tomorrow
                    </div>

                </div>
            </div>

            {/* Decorative Right Corner (Removed missing image) */}

            {/* Decorative Left Corner (Removed missing image) */}
        </footer>
    );
};

export default Footer;
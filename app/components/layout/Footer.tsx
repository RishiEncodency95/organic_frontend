"use client";

import React from "react";
import Link from "next/link";
import footerLogo from "../../assets/logos/footerlogo.png";
import footerBottomImg from "../../assets/logos/footerimg.png";
import namoLogo from "../../assets/logos/namo.png";
import placeholderImg from "../../assets/image/image1.webp";
import footogImg from "../../assets/image/bottog.png";
import foot1ogImg from "../../assets/icons/foot1og.png";
import foot2ogImg from "../../assets/icons/foot2og.png";
import foot3ogImg from "../../assets/icons/foot3og.png";
import uuogImg from "../../assets/icons/uuog.png";
import foot1 from "../../assets/icons/foot1.png";
import foot2 from "../../assets/icons/foot2.png";
import foot11 from "../../assets/icons/foot11.png";
import foot22 from "../../assets/icons/foot22.png";
import foot33 from "../../assets/icons/foot33.png";

import {
  Phone,
  ChevronRight,
  Heart
} from "lucide-react";

// Custom SVG components for brand icons
const Facebook = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>);
const Instagram = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>);
const Twitter = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>);
const Linkedin = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>);
const Youtube = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>);

// Sparkle component to enhance logo visibility
const Sparkle = ({ style, color = '#F3B71B' }: { style?: React.CSSProperties; color?: string }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '18px',
      color: color,
      textShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
      animation: 'sparkleAnim 1.6s ease-in-out infinite',
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Exhibitor Registration", path: "/registration" },
    { name: "Delegate Registration", path: "/delegate" },
    { name: "Conference Tracks", path: "/conference" },
    { name: "Speakers", path: "/speakers" },
    { name: "Agenda", path: "/agenda" },
    { name: "Exhibition", path: "/exhibitors" },
    { name: "Awards", path: "/awards" },
    { name: "Contact Us", path: "/contact" }
  ];

  const subLinks = [
    { name: "Speakers", path: "/speakers" },
    { name: "Agenda", path: "/agenda" },
    { name: "Exhibition", path: "/exhibitors" },
    { name: "Awards", path: "/awards" },
    { name: "Contact Us", path: "/contact" }
  ];

  const highlights = [
    { icon: foot2, title: "Keynote Leaders", desc: "Global thought leaders share their vision" },
    { icon: foot1, title: "Panel Discussions", desc: "Diverse perspectives on critical topics" },
    { icon: foot11, title: "Workshops", desc: "Hands on learning from experts" },
    { icon: foot22, title: "Networking", desc: "Connect. Collaborate. Create Impact." },
    { icon: foot33, title: "Innovation Showcase", desc: "Discover breakthrough organic solutions" }
  ];

  return (
    <footer className="relative bg-[#001810] text-white font-inter overflow-hidden border-t border-white/10">
      <style>{`
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-4px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-6px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-8px); }
        }
      `}</style>

      {/* Decorative Cream Background for Left Column (Desktop) */}
      <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-[28%] bg-[#F1DEC4] rounded-r-[90px] z-0 shadow-2xl overflow-hidden border-r-2 border-[#d6ad60]/40">
        {/* foot1og image on left edge */}
        <img src={foot1ogImg.src} alt="Decorative" className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 opacity-100 object-contain pointer-events-none z-10" />
        
        {/* Subtle decorative mandala/circle overlay at bottom */}
        <div className="absolute -bottom-16 -left-10 w-56 h-56 border border-[#d8c39e] rounded-full opacity-40 pointer-events-none" />
        <div className="absolute -bottom-10 -left-4 w-40 h-40 border border-[#d8c39e] rounded-full opacity-40 pointer-events-none" />
      </div>

      <div className="container mx-auto max-w-[1536px] relative z-10 flex flex-col lg:flex-row">

        {/* Column 1: Cream Area Content */}
        <div className="w-full lg:w-[28%] bg-[#F1DEC4] lg:bg-transparent rounded-br-[80px] lg:rounded-none px-6 pt-4 pb-6 text-gray-900 flex flex-col items-center text-center font-inter relative">
          
          {/* Logo with Sparkles */}
          <div className="relative inline-block w-48 md:w-56 mb-4">
            <Sparkle color="#d68523" style={{ top: '-10px', left: '10%', animationDelay: '0s' }} />
            <Sparkle color="#d68523" style={{ top: '20px', left: '-15px', animationDelay: '0.4s' }} />
            <Sparkle color="#d68523" style={{ top: '-15px', right: '15%', animationDelay: '0.8s' }} />
            <Sparkle color="#d68523" style={{ bottom: '10px', left: '5%', animationDelay: '0.2s' }} />
            <Sparkle color="#d68523" style={{ bottom: '-10px', right: '20%', animationDelay: '0.6s' }} />
            
            <img src={footerLogo.src} alt="Bharat Organic Expo" className="w-full h-auto object-contain" style={{ filter: "drop-shadow(0 0 1px rgba(255,255,255,0.6))" }} />
          </div>

          <p className="text-[14px] font-semibold leading-relaxed max-w-[340px] text-black text-center mx-auto">
            A global platform uniting over <span className="font-extrabold text-[#4B1426]">500+ exhibitors</span><br />
            from across the organic value chain, showcasing<br />
            certified products, advanced agritech,<br />
            sustainable practices, and the rich heritage of<br />
            traditional wellness. Discover organic living<br />
            with conferences and B2B opportunities.
          </p>
          <img src={foot2ogImg.src} alt="Decoration" className="w-full max-w-[320px] h-auto object-contain relative top-2 -mb-14 pointer-events-none" />
        </div>

        {/* Right Area (Dark Green) */}
        <div className="w-full lg:w-[72%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr_1.1fr_1fr] gap-x-6 gap-y-8 px-6 pt-4 pb-6 font-inter">

          {/* Quick Links */}
          <div className="lg:border-r lg:border-white/10 lg:pr-8">
            <h4 className="font-poppins font-semibold text-[#F3B71B] uppercase text-[13px] tracking-wider mb-1 ml-3">
              QUICK LINKS
            </h4>
            <img src={uuogImg.src} alt="divider" className="h-3.5 w-auto -mt-1.5 mb-2.5 object-contain" />

            <ul className="space-y-1.5 text-[14px] text-gray-200 font-medium">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight size={14} className="text-[#F3B71B] group-hover:translate-x-1 transition-transform shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conference Highlights */}
          <div className="lg:border-r lg:border-white/10 lg:pr-4">
            <h4 className="font-poppins font-semibold text-[#F3B71B] uppercase text-[13px] tracking-wider mb-1">
              CONFERENCE HIGHLIGHTS
            </h4>
            <img src={uuogImg.src} alt="divider" className="h-3.5 w-auto -mt-1.5 mb-2.5 object-contain" />

            <div className="flex flex-col gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-full border border-[#F3B71B]/60 flex items-center justify-center shrink-0 bg-[#F3B71B]/10 shadow-[0_0_10px_rgba(243,183,27,0.2)]">
                    <img src={item.icon.src} alt={item.title} className="w-5 h-5 object-contain" />
                  </div>
                  <div className="pt-0.5">
                    <h5 className="text-[12px] font-semibold text-white leading-none mb-1 font-poppins">{item.title}</h5>
                    <p className="text-[10px] text-gray-300 font-medium leading-tight pr-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div className="lg:border-r lg:border-white/10 lg:pr-4">
            <h4 className="font-poppins font-semibold text-[#F3B71B] uppercase text-[13px] tracking-wider mb-1 ml-3">
              GET IN TOUCH
            </h4>
            <img src={uuogImg.src} alt="divider" className="h-3.5 w-auto -mt-1.5 mb-2.5 object-contain" />

            <div className="text-[12px] text-gray-200 font-medium space-y-1.5 mb-4 whitespace-nowrap">
              <p><span className="text-gray-400 font-medium">Phone:</span> +91 96549 00525</p>
              <p><span className="text-gray-400 font-medium">Email:</span> info@bharatorganicexpo.com</p>
              <p><span className="text-gray-400 font-medium">Web:</span> www.bharatorganicexpo.com</p>
            </div>

            <h5 className="font-poppins font-semibold text-gray-400 uppercase mb-1 text-[11px] tracking-widest">ADDRESS:</h5>
            <p className="text-[12px] text-gray-200 font-medium mb-3 leading-relaxed">
              Hall 5, Pragati Maidan,<br/>New Delhi, India 110001
            </p>
            <button className="border border-white/40 text-gray-200 text-[10px] font-semibold px-3 py-1 rounded-md mb-4 uppercase tracking-wider hover:bg-white hover:text-[#001810] transition-colors font-poppins bg-white/5">
              VIEW ON GOOGLE MAPS
            </button>

            <h5 className="font-poppins font-semibold text-gray-400 uppercase mb-1.5 text-[11px] tracking-widest">CONFERENCE HELPLINE</h5>
            <div className="flex items-center gap-2 text-white font-semibold text-[14px] font-poppins">
              <div className="w-7 h-7 rounded-full border border-[#F3B71B] flex items-center justify-center text-[#F3B71B] bg-[#F3B71B]/10">
                <Phone size={14} />
              </div>
              <span className="text-[#F3B71B]">+91 96549 00525</span>
            </div>
          </div>

          {/* Organised By & Connect */}
          <div className="flex flex-col">
            <h4 className="font-poppins font-semibold text-[#F3B71B] uppercase text-[13px] tracking-wider mb-1 ml-3">
              Organised by:
            </h4>

            {/* Namo Logo with Sparkles */}
            <div className="relative inline-block w-44 my-2">
              <Sparkle color="#FFFFFF" style={{ top: '-8px', left: '10%', animationDelay: '0s' }} />
              <Sparkle color="#FFFFFF" style={{ top: '12px', left: '-12px', animationDelay: '0.4s' }} />
              <Sparkle color="#FFFFFF" style={{ top: '-10px', right: '15%', animationDelay: '0.8s' }} />
              <Sparkle color="#FFFFFF" style={{ bottom: '4px', left: '5%', animationDelay: '0.2s' }} />
              <Sparkle color="#FFFFFF" style={{ bottom: '-8px', right: '10%', animationDelay: '0.6s' }} />
              <img src={namoLogo.src} alt="Namo Gange Wellness" className="w-full h-auto object-contain" style={{ filter: "drop-shadow(0 0 1px rgba(255,255,255,0.6))" }} />
            </div>

            <p className="text-gray-200 text-[11px] mb-3 leading-relaxed font-medium">
              Your conference companion for<br/>agenda, updates and networking.
            </p>

            {/* Nature's Bounty Image */}
            <img src={footogImg.src} alt="Nature's Bounty" className="w-full h-24 object-cover rounded-lg mb-4" />

            <h5 className="font-poppins font-semibold text-[#F3B71B] uppercase mb-2 text-[12px] tracking-wider">CONNECT WITH US</h5>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-7 h-7 rounded-md flex items-center justify-center text-white hover:text-[#F3B71B] transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/20 py-2.5 bg-[#00100a] relative z-20 font-inter">
        <div className="container mx-auto max-w-[1536px] px-4 md:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-4 text-[12px] text-gray-300 font-medium">
          
          <div className="flex items-center gap-3">
            <span className="text-white font-normal tracking-wide">Bharat Organic Expo</span>
          </div>

          <div className="text-center">
            Copyright © {new Date().getFullYear()} Bharat Organic Expo. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 xl:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-gray-600">|</span>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>

          <div className="flex items-center gap-1.5 text-gray-300">
            Designed with <Heart size={14} className="text-[#cba344] fill-[#cba344]" /> for organic future
          </div>
          
        </div>
      </div>
    </footer>
  );
}
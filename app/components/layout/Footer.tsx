"use client";

import React from "react";
import Link from "next/link";
import footerLogo from "../../assets/logos/footerlogo.png";
import footerBottomImg from "../../assets/logos/footerimg.png";
import namoLogo from "../../assets/logos/namo.png";
import placeholderImg from "../../assets/image/image1.webp";
import leafsImg from "../../assets/icons/leafs.png";
import main22 from "../../assets/icons/main22.png";
import foot1 from "../../assets/icons/foot1.png";
import foot2 from "../../assets/icons/foot2.png";
import foot11 from "../../assets/icons/foot11.png";
import foot22 from "../../assets/icons/foot22.png";
import foot33 from "../../assets/icons/foot33.png";

import {
  Phone,
  ChevronRight
} from "lucide-react";

// Custom SVG components for brand icons
const Facebook = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>);
const Instagram = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>);
const Twitter = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>);
const Linkedin = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>);

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
    { name: "Conference Tracks", path: "/conference" }
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
        {/* Leaf image on left edge */}
        <img src={leafsImg.src} alt="Leaf Decoration" className="absolute -left-6 top-1/2 -translate-y-1/2 w-28 opacity-80 pointer-events-none" />
        
        {/* Subtle decorative mandala/circle overlay at bottom */}
        <div className="absolute -bottom-16 -left-10 w-56 h-56 border border-[#d8c39e] rounded-full opacity-40 pointer-events-none" />
        <div className="absolute -bottom-10 -left-4 w-40 h-40 border border-[#d8c39e] rounded-full opacity-40 pointer-events-none" />
      </div>

      <div className="container mx-auto max-w-[1536px] relative z-10 flex flex-col lg:flex-row">

        {/* Column 1: Cream Area Content */}
        <div className="w-full lg:w-[28%] bg-[#F1DEC4] lg:bg-transparent rounded-br-[80px] lg:rounded-none px-6 py-8 text-gray-900 flex flex-col items-center text-center font-inter relative">
          
          {/* Logo with Sparkles */}
          <div className="relative inline-block w-64 md:w-72 mb-4">
            <Sparkle color="#d68523" style={{ top: '-10px', left: '10%', animationDelay: '0s' }} />
            <Sparkle color="#d68523" style={{ top: '20px', left: '-15px', animationDelay: '0.4s' }} />
            <Sparkle color="#d68523" style={{ top: '-15px', right: '15%', animationDelay: '0.8s' }} />
            <Sparkle color="#d68523" style={{ bottom: '10px', left: '5%', animationDelay: '0.2s' }} />
            <Sparkle color="#d68523" style={{ bottom: '-10px', right: '20%', animationDelay: '0.6s' }} />
            
            <img src={footerLogo.src} alt="Bharat Organic Expo" className="w-full h-auto object-contain drop-shadow-md" />
          </div>

          <p className="text-[14px] font-semibold leading-relaxed max-w-md text-black">
            A global platform uniting over <span className="font-extrabold text-[#D4AF37]">500+</span><br />
            exhibitors from across the organic value chain,<br />
            showcasing certified products, advanced agritech,<br />
            sustainable practices, and the rich heritage of<br />
            traditional wellness. Discover the future of organic living<br />
            with expert-led conferences and unmatched<br />
            B2B opportunities.
          </p>
        </div>

        {/* Right Area (Dark Green) */}
        <div className="w-full lg:w-[72%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 px-6 py-8 font-inter">

          {/* Quick Links */}
          <div className="lg:border-r lg:border-white/10 lg:pr-4">
            <h4 className="font-poppins font-semibold text-[#F3B71B] uppercase text-[13px] tracking-wider mb-1">
              QUICK LINKS
            </h4>
            <img src={main22.src} alt="divider" className="h-3.5 w-auto mb-3 opacity-90" />

            <ul className="space-y-2 text-[12px] text-gray-200 font-medium">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="hover:text-white transition-colors flex items-center gap-1">
                    {link.name}
                  </Link>
                </li>
              ))}
              {subLinks.map((link, i) => (
                <li key={`sub-${i}`}>
                  <Link href={link.path} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <ChevronRight size={12} className="text-[#F3B71B]" />
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
            <img src={main22.src} alt="divider" className="h-3.5 w-auto mb-3 opacity-90" />

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
            <h4 className="font-poppins font-semibold text-[#F3B71B] uppercase text-[13px] tracking-wider mb-1">
              GET IN TOUCH
            </h4>
            <img src={main22.src} alt="divider" className="h-3.5 w-auto mb-3 opacity-90" />

            <div className="text-[12px] text-gray-200 font-medium space-y-1.5 mb-4">
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
            <h4 className="font-poppins font-semibold text-[#F3B71B] uppercase text-[13px] tracking-wider mb-1">
              Organised by:
            </h4>

            {/* Namo Logo with Sparkles */}
            <div className="relative inline-block w-44 my-2">
              <Sparkle color="#FFFFFF" style={{ top: '-8px', left: '10%', animationDelay: '0s' }} />
              <Sparkle color="#FFFFFF" style={{ top: '12px', left: '-12px', animationDelay: '0.4s' }} />
              <Sparkle color="#FFFFFF" style={{ top: '-10px', right: '15%', animationDelay: '0.8s' }} />
              <Sparkle color="#FFFFFF" style={{ bottom: '4px', left: '5%', animationDelay: '0.2s' }} />
              <Sparkle color="#FFFFFF" style={{ bottom: '-8px', right: '10%', animationDelay: '0.6s' }} />
              <img src={namoLogo.src} alt="Namo Gange Wellness" className="w-full h-auto object-contain filter drop-shadow" />
            </div>

            <img src={main22.src} alt="divider" className="h-3.5 w-auto my-2 opacity-90" />

            <p className="text-gray-200 text-[11px] mb-3 leading-relaxed font-medium">
              Your conference companion for<br/>agenda, updates and networking.
            </p>

            {/* Nature's Bounty Image */}
            <div className="w-full h-24 rounded-lg overflow-hidden border border-white/10 mb-4 shadow-md">
              <img src={placeholderImg.src} alt="Nature's Bounty" className="w-full h-full object-cover" />
            </div>

            <h5 className="font-poppins font-semibold text-[#F3B71B] uppercase mb-2 text-[12px] tracking-wider">CONNECT WITH US</h5>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-7 h-7 rounded-md border border-[#F3B71B]/50 flex items-center justify-center text-[#F3B71B] hover:bg-[#F3B71B] hover:text-[#001810] transition-colors">
                  <Icon size={12} />
                </a>
              ))}
              <a href="#" className="w-7 h-7 rounded-md border border-[#F3B71B]/50 flex items-center justify-center text-[#F3B71B] hover:bg-[#F3B71B] hover:text-[#001810] transition-colors">
                <span className="font-semibold text-[12px]">r</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="relative z-20 border-t border-white/10 bg-[#00100a] font-inter">
        <div className="container mx-auto max-w-[1536px] px-6 py-2.5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-300 font-medium">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 md:mb-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-gray-600">|</span>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <span className="text-gray-600">|</span>
            <Link href="/sitemap" className="hover:text-white transition-colors">Site Map (HTML)</Link>
            <span className="text-gray-600">|</span>
            <span>Copyright © {new Date().getFullYear()} Bharat Organic Expo. All Rights Reserved.</span>
          </div>

          <div className="bg-white rounded-full px-5 py-1 flex items-center h-9 shadow-lg">
            <img src={footerBottomImg.src} alt="Partners" className="h-full w-auto object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import footerLogo from "../../assets/logos/footerlogo.png";
import footerBottomImg from "../../assets/logos/footerimg.png";
import placeholderImg from "../../assets/image/image1.webp";
import leafsImg from "../../assets/icons/leafs.png";

import {
  Phone,
  Users,
  Mic,
  BookOpen,
  Handshake,
  Lightbulb,
  ChevronRight
} from "lucide-react";

// Custom SVG components for brand icons
const Facebook = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>);
const Instagram = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>);
const Twitter = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>);
const Linkedin = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>);

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
    { icon: <Mic size={14} />, title: "Keynote Leaders", desc: "Global thought leaders share their vision" },
    { icon: <Users size={14} />, title: "Panel Discussions", desc: "Diverse perspectives on critical topics" },
    { icon: <BookOpen size={14} />, title: "Workshops", desc: "Hands on learning from experts" },
    { icon: <Handshake size={14} />, title: "Networking", desc: "Connect. Collaborate. Create Impact." },
    { icon: <Lightbulb size={14} />, title: "Innovation Showcase", desc: "Discover breakthrough organic solutions" }
  ];

  return (
    <footer className="relative bg-[#0d2f17] text-white font-inter overflow-hidden border-t-4 border-[#e89c2c]">
      {/* Decorative Cream Background for Left Column (Desktop) */}
      <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-[28%] bg-[#f4ebd9] rounded-r-[80px] z-0 shadow-2xl overflow-hidden">
         <img src={leafsImg.src} alt="Leaf" className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 opacity-40 rotate-[15deg]" />
         <div className="absolute -bottom-20 -left-10 w-56 h-56 border-[1px] border-[#d8c39e] rounded-full opacity-50" />
         <div className="absolute -bottom-14 -left-3 w-40 h-40 border-[1px] border-[#d8c39e] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto max-w-[1536px] relative z-10 flex flex-col lg:flex-row">

        {/* Column 1: Cream Area Content */}
        <div className="w-full lg:w-[28%] bg-[#f4ebd9] lg:bg-transparent rounded-br-[80px] lg:rounded-none px-6 py-8 text-gray-900 flex flex-col items-center text-center font-inter">
          <img src={footerLogo.src} alt="Bharat Organic Expo" className="w-48 mb-4" />
          <p className="text-[12px] font-medium leading-relaxed max-w-sm text-gray-800">
            A global platform uniting over <span className="font-semibold text-[#b8860b]">500+ exhibitors</span> from across the organic value chain, showcasing certified products, advanced agritech, sustainable practices, and the rich heritage of traditional wellness. Discover the future of organic living with expert-led conferences and unmatched B2B opportunities.
          </p>
        </div>

        {/* Right Area (Dark Green) */}
        <div className="w-full lg:w-[72%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 px-6 py-8 font-inter">

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white uppercase mb-3 text-[13px] tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-[12px] text-gray-200 font-medium">
              {quickLinks.map((link, i) => (
                <li key={i}><Link href={link.path} className="hover:text-white transition-colors">{link.name}</Link></li>
              ))}
              {subLinks.map((link, i) => (
                <li key={`sub-${i}`} className="pl-2">
                  <Link href={link.path} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <ChevronRight size={12} className="text-gray-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conference Highlights */}
          <div>
            <h4 className="font-poppins font-semibold text-white uppercase mb-3 text-[13px] tracking-wider">
              CONFERENCE HIGHLIGHTS
            </h4>
            <div className="flex flex-col gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full border border-[#d68523] flex items-center justify-center shrink-0 text-[#d68523] bg-[#d68523]/10">
                    {item.icon}
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
          <div>
            <h4 className="font-poppins font-semibold text-[#f1edd9] uppercase mb-3 text-[13px] tracking-wider">
              GET IN TOUCH
            </h4>
            <div className="text-[12px] text-gray-200 font-medium space-y-1.5 mb-4">
              <p><span className="text-gray-400 font-medium">Phone:</span> +91 96549 00525</p>
              <p><span className="text-gray-400 font-medium">Email:</span> info@bharatorganicexpo.com</p>
              <p><span className="text-gray-400 font-medium">Web:</span> www.bharatorganicexpo.com</p>
            </div>

            <h5 className="font-poppins font-semibold text-gray-400 uppercase mb-1.5 text-[11px] tracking-widest">ADDRESS:</h5>
            <p className="text-[12px] text-gray-200 font-medium mb-3 leading-relaxed">
              Hall 5, Pragati Maidan,<br/>New Delhi, India 110001
            </p>
            <button className="border border-gray-400 text-gray-200 text-[10px] font-semibold px-3 py-1 rounded-md mb-4 uppercase tracking-wider hover:bg-white hover:text-[#0d2f17] transition-colors font-poppins">
              VIEW ON GOOGLE MAPS
            </button>

            <h5 className="font-poppins font-semibold text-gray-400 uppercase mb-2 text-[11px] tracking-widest">CONFERENCE HELPLINE</h5>
            <div className="flex items-center gap-2 text-white font-semibold text-[14px] font-poppins">
              <Phone size={14} className="text-gray-400" />
              <span>+91 96549 00525</span>
            </div>
          </div>

          {/* Organised By & Connect */}
          <div className="flex flex-col">
            <p className="text-gray-300 text-[12px] mb-1 font-medium">Organised by:</p>
            <h3 className="text-[#ea6a10] font-semibold text-xl tracking-wider mb-0.5 uppercase font-poppins">
              NAMO<span className="text-[#2b88c4]">GANGE</span>
            </h3>
            <p className="text-gray-400 text-[9px] font-semibold uppercase tracking-[0.2em] mb-3 font-poppins">WELLNESS PVT. LTD.</p>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-3 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d2f17] px-2 text-[#d68523] text-[10px]">
                 ❖
              </div>
            </div>

            <p className="text-gray-200 text-[11px] mb-3 leading-relaxed font-medium">
              Your conference companion for<br/>agenda, updates and networking.
            </p>

            {/* Nature's Bounty Image */}
            <div className="w-full h-24 rounded-lg overflow-hidden border border-white/10 mb-4">
              <img src={placeholderImg.src} alt="Nature's Bounty" className="w-full h-full object-cover" />
            </div>

            <h5 className="font-poppins font-semibold text-white uppercase mb-2 text-[12px] tracking-wider">CONNECT WITH US</h5>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-7 h-7 rounded-md border border-gray-500 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
                  <Icon size={12} />
                </a>
              ))}
              <a href="#" className="w-7 h-7 rounded-md border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-colors">
                <span className="font-semibold text-[12px]">r</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="relative z-20 border-t border-white/10 bg-[#071d0e] font-inter">
        <div className="container mx-auto max-w-[1536px] px-6 py-2.5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-200 font-medium">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 md:mb-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/refund" className="hover:text-white">Refund Policy</Link>
            <span>|</span>
            <Link href="/sitemap" className="hover:text-white">Site Map (HTML)</Link>
            <span>|</span>
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
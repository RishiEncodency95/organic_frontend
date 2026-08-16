"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, User, Briefcase, HelpCircle, Users, Phone } from "lucide-react";
import b2bImg from "../../assets/image/b2bog.png";
import footerRightImg from "../../assets/icons/footerright.png";
import blleafImg from "../../assets/icons/blleaf.png";

export default function AboutSection() {
  const points = [
    "Sourcing & Distribution",
    "Institutional Supply",
    "Procurement & Private Label",
    "Strategic Partnerships",
    "Export-Import Opportunities",
    "Business Collaborations",
  ];

  const links = [
    { label: "Register as Buyer", icon: <User size={16} />, href: "/visitor-registration" },
    { label: "Participate as Exhibitor", icon: <Briefcase size={16} />, href: "/book-a-stand" },
    { label: "How it Works", icon: <HelpCircle size={16} />, href: "#how-it-works" },
    { label: "Who Can Participate", icon: <Users size={16} />, href: "#who-can-participate" },
    { label: "Contact Us", icon: <Phone size={16} />, href: "/contact" },
  ];

  return (
    <section className="pt-8 pb-8 bg-white font-inter relative overflow-hidden">
      {/* Decorative Right Image */}
      <div className="absolute right-0 bottom-0 pointer-events-none z-0 w-48 md:w-64 lg:w-80 opacity-80">
        <img src={footerRightImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column - About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 uppercase leading-[1.1] font-poppins relative inline-block">
                ABOUT BUYER-SELLER MEET
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#ea580c] rounded-full"></span>
              </h2>
            </div>
            <div className="space-y-4 text-sm text-gray-600 font-medium mb-4 leading-relaxed">
              <p>
                The Buyer-Seller Meet at Bharat Organic Expo 2027 is designed to facilitate focused B2B interactions between participating exhibitors and relevant business buyers.
              </p>
              <p>
                The platform enables participants to explore:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-white shrink-0" fill="#1b5e20" />
                  <span className="text-xs font-bold text-[#4B1426]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Graphic */}
          <img 
            src={b2bImg.src} 
            alt="B2B Meet" 
            className="w-full h-auto max-w-[320px] object-cover rounded-xl lg:col-span-1 place-self-center" 
          />

          {/* Right Column - Quick Links */}
          <div 
            className="lg:col-span-1 bg-white rounded-xl overflow-hidden relative"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            {/* Decorative leaf for Quick Links */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-100 w-32 md:w-40 z-0">
              <img src={blleafImg.src} alt="Leaf" className="w-full h-auto object-contain" />
            </div>

            {/* Header (thead) */}
            <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 relative z-10">
              <h3 
                className="text-base font-semibold text-[#4B1426] uppercase tracking-wider font-poppins m-0"
                style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.1)" }}
              >
                QUICK LINKS
              </h3>
            </div>
            
            {/* Links List */}
            <div className="flex flex-col relative z-10">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`flex items-center justify-between px-6 py-4 bg-transparent hover:bg-gray-50/80 transition-colors group ${
                    i !== links.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 text-[#1b5e20] transition-colors">
                    {link.icon}
                    <span className="text-sm font-semibold text-black">{link.label}</span>
                  </div>
                  <ChevronRight size={18} className="text-[#1b5e20] group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


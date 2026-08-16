import React from "react";
import nleafIcon from "../../../assets/icons/nleafog.png";
import footerRightImg from "../../../assets/icons/footerright.png";
import leafImg from "../../../assets/icons/leafs.png";
import {
  IdCard, Plug, Contact, Wifi, Briefcase, Mic, ShoppingBag, Trophy, Coffee, MapPin,
  Globe, Mail, Share2, Building2, Newspaper, FileText, Presentation, Megaphone
} from "lucide-react";

export default function BottomOpportunities() {
  const otherBranding = [
    { icon: <IdCard size={18} strokeWidth={1.5} />, text: "Lanyard Sponsor" },
    { icon: <Plug size={18} strokeWidth={1.5} />, text: "Charging Station Sponsor" },
    { icon: <Contact size={18} strokeWidth={1.5} />, text: "Badge Sponsor" },
    { icon: <Wifi size={18} strokeWidth={1.5} />, text: "Wi-Fi Sponsor" },
    { icon: <Briefcase size={18} strokeWidth={1.5} />, text: "Delegate Kit Sponsor" },
    { icon: <Mic size={18} strokeWidth={1.5} />, text: "Conference Session Sponsor" },
    { icon: <ShoppingBag size={18} strokeWidth={1.5} />, text: "Visitor Bag Sponsor" },
    { icon: <Trophy size={18} strokeWidth={1.5} />, text: "Award Sponsor" },
    { icon: <Coffee size={18} strokeWidth={1.5} />, text: "Refreshment Sponsor" },
    { icon: <MapPin size={18} strokeWidth={1.5} />, text: "Hall / Zone Sponsor" },
  ];

  const maximizeImpact = [
    { icon: <Globe size={28} strokeWidth={1.5} />, text: "Event Website" },
    { icon: <Mail size={28} strokeWidth={1.5} />, text: "Email Campaigns" },
    { icon: <Share2 size={28} strokeWidth={1.5} />, text: "Social Media" },
    { icon: <Building2 size={28} strokeWidth={1.5} />, text: "On-site Branding" },
    { icon: <Newspaper size={28} strokeWidth={1.5} />, text: "Press Coverage" },
    { icon: <FileText size={28} strokeWidth={1.5} />, text: "Print & Digital Media" },
    { icon: <Presentation size={28} strokeWidth={1.5} />, text: "Signage & Hoardings" },
    { icon: <Megaphone size={28} strokeWidth={1.5} />, text: "Visitor Promotions" },
  ];

  return (
    <section className="py-6 bg-[#fcfcf0] font-inter border-t border-gray-200/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -left-5 lg:left-0 top-[10%] lg:top-[20%] w-24 md:w-32 lg:w-[150px] pointer-events-none z-0 opacity-100 hidden md:block">
        <img src={leafImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain" />
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none z-0 w-32 md:w-48 lg:w-64 opacity-100 hidden md:block">
        <img src={footerRightImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Box */}
          <div 
            className="w-full lg:w-5/12 bg-white rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden"
            style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 15px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px" }}
          >
            <h3 className="text-base md:text-lg font-semibold text-[#1b5e20] mb-6 font-poppins uppercase tracking-wide">
              OTHER BRANDING OPPORTUNITIES
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-2 flex-1 relative z-10">
              {otherBranding.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[#ea580c]">{item.icon}</span>
                  <span className="text-xs md:text-[13px] font-medium text-gray-800 font-inter">{item.text}</span>
                </div>
              ))}
            </div>
            
            <img src={nleafIcon.src} alt="Leaves" className="mx-auto mt-4 w-64 md:w-80 lg:w-[350px] max-w-[120%] object-contain relative z-10 -mb-6 md:-mb-8" />
          </div>

          {/* Right Box */}
          <div 
            className="w-full lg:w-7/12 bg-[#f4f7f6] rounded-2xl p-6 md:p-8 flex flex-col items-center relative overflow-hidden text-center"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#1b5e20] mb-1 font-poppins uppercase tracking-wide">
              MAXIMIZE YOUR BRAND IMPACT
            </h3>
            <p className="text-xs md:text-sm text-[#4B1426] font-semibold mb-8 font-poppins">
              Gain visibility across multiple platforms
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-y-8 gap-x-4 mb-10">
              {maximizeImpact.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center text-[#1b5e20]">
                    {item.icon}
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-800 leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            
            <a 
              href="/contact"
              className="mt-auto px-8 py-3 bg-[#103314] hover:bg-[#1e5223] text-[#a3e635] text-[11px] md:text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center gap-2 shadow-lg"
            >
              LET'S CREATE IMPACT TOGETHER
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#a3e635" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

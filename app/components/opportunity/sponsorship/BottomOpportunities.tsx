import React from "react";
import nleafIcon from "../../../assets/icons/nleafog.png";
import footerRightImg from "../../../assets/icons/footerright.png";
import leafImg from "../../../assets/icons/leafs.png";
import SectionContainer from "@/app/components/layout/SectionContainer";
import {
  IdCard, Plug, Contact, Wifi, Briefcase, Mic, ShoppingBag, Trophy, Coffee, MapPin,
  Globe, Mail, Share2, Building2, Newspaper, FileText, Presentation, Megaphone
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  IdCard: <IdCard size={18} strokeWidth={1.5} />,
  Plug: <Plug size={18} strokeWidth={1.5} />,
  Contact: <Contact size={18} strokeWidth={1.5} />,
  Wifi: <Wifi size={18} strokeWidth={1.5} />,
  Briefcase: <Briefcase size={18} strokeWidth={1.5} />,
  Mic: <Mic size={18} strokeWidth={1.5} />,
  ShoppingBag: <ShoppingBag size={18} strokeWidth={1.5} />,
  Trophy: <Trophy size={18} strokeWidth={1.5} />,
  Coffee: <Coffee size={18} strokeWidth={1.5} />,
  MapPin: <MapPin size={18} strokeWidth={1.5} />,
  Globe: <Globe size={28} strokeWidth={1.5} />,
  Mail: <Mail size={28} strokeWidth={1.5} />,
  Share2: <Share2 size={28} strokeWidth={1.5} />,
  Building2: <Building2 size={28} strokeWidth={1.5} />,
  Newspaper: <Newspaper size={28} strokeWidth={1.5} />,
  FileText: <FileText size={28} strokeWidth={1.5} />,
  Presentation: <Presentation size={28} strokeWidth={1.5} />,
  Megaphone: <Megaphone size={28} strokeWidth={1.5} />,
};

export const BOTTOM_OPPORTUNITIES_DATA = [
  {
    id: 1,
    leftHeading: "OTHER BRANDING OPPORTUNITIES",
    otherBranding: [
      { iconKey: "IdCard", text: "Lanyard Sponsor" },
      { iconKey: "Plug", text: "Charging Station Sponsor" },
      { iconKey: "Contact", text: "Badge Sponsor" },
      { iconKey: "Wifi", text: "Wi-Fi Sponsor" },
      { iconKey: "Briefcase", text: "Delegate Kit Sponsor" },
      { iconKey: "Mic", text: "Conference Session Sponsor" },
      { iconKey: "ShoppingBag", text: "Visitor Bag Sponsor" },
      { iconKey: "Trophy", text: "Award Sponsor" },
      { iconKey: "Coffee", text: "Refreshment Sponsor" },
      { iconKey: "MapPin", text: "Hall / Zone Sponsor" },
    ],
    rightHeading: "MAXIMIZE YOUR BRAND IMPACT",
    rightSubtitle: "Gain visibility across multiple platforms",
    buttonText: "LET'S CREATE IMPACT TOGETHER",
    buttonHref: "/contact",
    maximizeImpact: [
      { iconKey: "Globe", text: "Event Website" },
      { iconKey: "Mail", text: "Email Campaigns" },
      { iconKey: "Share2", text: "Social Media" },
      { iconKey: "Building2", text: "On-site Branding" },
      { iconKey: "Newspaper", text: "Press Coverage" },
      { iconKey: "FileText", text: "Print & Digital Media" },
      { iconKey: "Presentation", text: "Signage & Hoardings" },
      { iconKey: "Megaphone", text: "Visitor Promotions" },
    ],
  },
];

export default function BottomOpportunities() {
  const data = BOTTOM_OPPORTUNITIES_DATA[0];

  return (
    <section className="py-4 bg-[#fcfcf0] font-inter border-t border-gray-200/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -left-5 lg:left-0 top-[10%] lg:top-[20%] w-24 md:w-32 lg:w-[150px] pointer-events-none z-0 opacity-100 hidden md:block">
        <img src={leafImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain" />
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none z-0 w-32 md:w-48 lg:w-64 opacity-100 hidden md:block">
        <img src={footerRightImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          
          {/* Left Box */}
          <div 
            className="w-full lg:w-5/12 bg-white rounded-2xl p-4 md:p-5 flex flex-col relative overflow-hidden"
            style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 15px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px" }}
          >
            <h3 className="text-sm md:text-base font-semibold text-[#1b5e20] mb-3 font-poppins uppercase tracking-wide">
              {data.leftHeading}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2 flex-1 relative z-10 font-inter">
              {data.otherBranding.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[#ea580c] shrink-0">{ICON_MAP[item.iconKey]}</span>
                  <span className="text-[12px] font-semibold text-slate-800 leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
            
            <img src={nleafIcon.src} alt="Leaves" className="mx-auto mt-2 w-48 md:w-60 lg:w-[260px] max-w-[120%] object-contain relative z-10 -mb-5 md:-mb-6" />
          </div>

          {/* Right Box */}
          <div 
            className="w-full lg:w-7/12 bg-[#f4f7f6] rounded-2xl p-4 md:p-5 flex flex-col items-center relative overflow-hidden text-center"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            <h3 className="text-base md:text-lg font-semibold text-[#1b5e20] mb-0.5 font-poppins uppercase tracking-wide">
              {data.rightHeading}
            </h3>
            <p className="text-xs text-[#4B1426] font-semibold mb-4 font-poppins">
              {data.rightSubtitle}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-y-4 gap-x-3 mb-4">
              {data.maximizeImpact.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 flex items-center justify-center text-[#1b5e20]">
                    {ICON_MAP[item.iconKey]}
                  </div>
                  <span className="text-[13px] font-semibold text-slate-800 leading-tight font-inter">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            
            <a 
              href={data.buttonHref}
              className="mt-auto px-6 py-2 bg-[#103314] hover:bg-[#1e5223] text-[#a3e635] text-[10.5px] md:text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center gap-2 shadow-lg"
            >
              {data.buttonText}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#a3e635" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </a>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
}

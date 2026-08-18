"use client";
import React from "react";
import { 
  Globe, LayoutGrid, FileText, 
  BookOpen, Mail, Share2, 
  Mic, Ticket, HeartHandshake, Eye, Sparkles, Monitor
} from "lucide-react";
import footerRightImg from "@/app/assets/icons/footerright.webp";

export default function Deliverables() {
  const deliverables = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Logo on official printing & branding partner section on website",
      desc: "Your logo will be displayed on the partner page with direct link to your website."
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "Logo on signage & at venue (high visibility)",
      desc: "Prominent logo placement on directional signage, backdrops, banners & key areas."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Brand mention on event collateral (digital)",
      desc: "Your brand will be highlighted on banners, e-invites, social media creatives & more."
    },
    {
      icon: <Mic className="w-5 h-5" />,
      title: "Acknowledgement during inaugural & valedictory sessions",
      desc: "Special recognition from the stage as our valued partner."
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Name in partner directory (digital & print)",
      desc: "Your company profile will be listed in the official partner directory."
    },
    {
      icon: <Ticket className="w-5 h-5" />,
      title: "Complimentary Delegate Passes",
      desc: "Receive delegate passes for your team to network and connect during the event."
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Logo in event emails & newsletters",
      desc: "Your brand will be featured in promotional emails sent to our subscriber database."
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "Brochure / Advertisement in e-brochure",
      desc: "Your advertisement / company profile will be displayed in the official event e-brochure."
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Social media shoutouts & tag mentions",
      desc: "Your brand will be promoted across our social media platforms with dedicated posts."
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Opportunity to showcase your work",
      desc: "Feature your best printing & branding work in our event communication & promotions."
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Co-branding on key promotions",
      desc: "Your logo will be included in select event promotions as our printing & branding partner."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Opportunity for joint campaigns & promotions",
      desc: "Collaborate with us on special campaigns to reach a wider audience."
    }
  ];

  const getBorderClasses = (idx: number) => {
    let classes = "";
    
    if (idx < 11) {
      classes += " border-b border-gray-200";
    } else {
      classes += " border-b-0";
    }
    
    const isLeftColMd = idx % 2 === 0;
    const isLastRowMd = idx >= 10;
    classes += isLeftColMd 
      ? " md:border-r md:border-gray-200" 
      : " md:border-r-0";
    classes += isLastRowMd 
      ? " md:border-b-0" 
      : " md:border-b md:border-gray-200";
      
    const isRightColLg = idx % 4 === 3;
    const isLastRowLg = idx >= 8;
    classes += isRightColLg 
      ? " lg:border-r-0" 
      : " lg:border-r lg:border-gray-200";
    classes += isLastRowLg 
      ? " lg:border-b-0" 
      : " lg:border-b lg:border-gray-200";
      
    return classes;
  };

  return (
    <section className="pt-10 pb-4 bg-white font-inter relative overflow-hidden">
      {/* Decorative Background Element */}
      <img 
        src={footerRightImg.src} 
        alt="Right Decoration" 
        className="absolute top-10 -right-3 md:top-20 md:-right-5 w-24 md:w-36 object-contain pointer-events-none z-20 opacity-80" 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        
        <div 
          className="bg-white rounded-2xl pt-5 pb-4 px-6 md:pt-6 md:pb-6 md:px-8"
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 w-full justify-center">
            <div className="h-[1px] flex-1 bg-gray-200"></div>
            <div className="flex items-center gap-2 px-2 shrink-0">
              <h2 className="text-lg md:text-xl font-semibold text-[#1b5e20] uppercase font-poppins tracking-wide text-center">
                PARTNER DELIVERABLES
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, idx) => (
              <div 
                key={idx}
                className={`flex items-start gap-4 px-5 py-4 lg:px-6 lg:py-5 ${getBorderClasses(idx)}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#1b5e20]/10 flex items-center justify-center shrink-0 text-[#1b5e20] mt-0.5">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] md:text-[11px] font-bold text-gray-950 uppercase tracking-wide leading-tight font-inter">
                    {item.title}
                  </p>
                  <p className="text-[10px] md:text-[11px] font-medium text-gray-500 leading-snug font-inter">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

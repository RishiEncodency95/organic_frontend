"use client";
import React from "react";
import { 
  Globe, LayoutGrid, Ticket, MapPin, 
  FileText, BookOpen, Mail, Share2, 
  Mic, HeartHandshake, Eye, Sparkles 
} from "lucide-react";
import pleaf from "@/app/assets/icons/pleaf.png";
import footerRightImg from "@/app/assets/icons/footerright.webp";

export default function Deliverables() {
  const deliverables = [
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Logo on official travel partner section on website"
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      text: "Logo on travel desk / signage at venue"
    },
    {
      icon: <Ticket className="w-5 h-5" />,
      text: "Complimentary Delegate Passes (as per partnership level)"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "On-site branding (travel assistance area)"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Brand mention on event collateral (digital)"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Name in partner directory (digital & print)"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Logo in event emails & newsletters"
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      text: "Co-branding on key travel communication"
    },
    {
      icon: <Mic className="w-5 h-5" />,
      text: "Acknowledgement during inaugural & valedictory sessions"
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      text: "Social media shoutouts & tag mentions"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      text: "Brochure / Advertisement in e-brief"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "Opportunity for joint campaigns & promotions"
    }
  ];

  const getBorderClasses = (idx: number) => {
    let classes = "";
    
    // Mobile (1 col): bottom border for all except the last item
    if (idx < 11) {
      classes += " border-b border-gray-200";
    } else {
      classes += " border-b-0";
    }
    
    // Tablet (2 cols, md):
    const isLeftColMd = idx % 2 === 0;
    const isLastRowMd = idx >= 10;
    classes += isLeftColMd 
      ? " md:border-r md:border-gray-200" 
      : " md:border-r-0";
    classes += isLastRowMd 
      ? " md:border-b-0" 
      : " md:border-b md:border-gray-200";
      
    // Desktop (4 cols, lg):
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
        
        {/* Large Card containing all deliverables */}
        <div 
          className="bg-white rounded-2xl pt-5 pb-4 px-6 md:pt-6 md:pb-6 md:px-8"
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          {/* Header flanked by lines and leaf icons */}
          <div className="flex items-center gap-4 mb-8 w-full justify-center">
            <div className="h-[1px] flex-1 bg-gray-200"></div>
            <div className="flex items-center gap-2 px-2 shrink-0">
              <h2 className="text-lg md:text-xl font-semibold text-[#1b5e20] uppercase font-poppins tracking-wide text-center">
                PARTNER DELIVERABLES
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>

          {/* Grid Layout inside Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, idx) => (
              <div 
                key={idx}
                className={`flex items-start gap-4 px-5 py-3 lg:px-6 lg:py-4 ${getBorderClasses(idx)}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#1b5e20]/10 flex items-center justify-center shrink-0 text-[#1b5e20]">
                  {item.icon}
                </div>
                <p className="text-[10px] md:text-[11px] font-bold text-gray-950 uppercase tracking-wide whitespace-pre-line leading-tight font-inter pt-1.5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

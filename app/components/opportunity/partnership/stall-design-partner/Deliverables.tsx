"use client";
import React from "react";
import { 
  Globe, LayoutGrid, Ticket, MapPin, 
  FileText, BookOpen, Mail, Share2, 
  Mic, HeartHandshake, Star, Hammer
} from "lucide-react";
import footerRightImg from "@/app/assets/icons/footerright.webp";
import SectionContainer from "@/app/components/layout/SectionContainer";

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Ticket: <Ticket className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  Hammer: <Hammer className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
};

export const DELIVERABLES_STALL_DATA = [
  {
    id: 1,
    heading: "PARTNER DELIVERABLES",
    deliverables: [
      {
        iconKey: "Globe",
        title: "Logo on official stall design partner section on website",
        desc: "Your logo will be displayed on the partner page with direct link to your website."
      },
      {
        iconKey: "LayoutGrid",
        title: "Logo on signage & at venue (high visibility)",
        desc: "Prominent logo placement on directional signage, welcome boards & key areas."
      },
      {
        iconKey: "FileText",
        title: "Brand mention on event collateral (digital)",
        desc: "Your brand will be highlighted on banners, e-invites, social media creatives & more."
      },
      {
        iconKey: "Mic",
        title: "Acknowledgement during inaugural & valedictory sessions",
        desc: "Special recognition from the stage as our valued partner."
      },
      {
        iconKey: "BookOpen",
        title: "Name in partner directory (digital & print)",
        desc: "Your design studio profile will be listed in the official partner directory."
      },
      {
        iconKey: "Ticket",
        title: "Complimentary Delegate Passes",
        desc: "Receive delegate passes for your team to network and connect during the event."
      },
      {
        iconKey: "Mail",
        title: "Logo in event emails & newsletters",
        desc: "Your brand will be featured in promotional emails sent to our subscriber database."
      },
      {
        iconKey: "MapPin",
        title: "Brochure / Advertisement in e-brochure",
        desc: "Your advertisement / portfolio catalog will be displayed in the official event e-brochure."
      },
      {
        iconKey: "Share2",
        title: "Social media shoutouts & tag mentions",
        desc: "Your design services will be promoted across our social media platforms with dedicated posts."
      },
      {
        iconKey: "Hammer",
        title: "Showcase your stall designs & fabrication",
        desc: "Opportunity to showcase 3D booth renders, modular designs & fabrication work."
      },
      {
        iconKey: "HeartHandshake",
        title: "Co-branding on key communications",
        desc: "Your logo will be included in select event communications as our stall design partner."
      },
      {
        iconKey: "Star",
        title: "Opportunity for joint campaigns & promotions",
        desc: "Collaborate with us on special packages to assist exhibitors with booth construction."
      }
    ]
  }
];

export default function Deliverables() {
  const data = DELIVERABLES_STALL_DATA[0];

  const getBorderClasses = (idx: number) => {
    let classes = "";
    if (idx < 11) classes += " border-b border-gray-200";
    else classes += " border-b-0";
    const isLeftColMd = idx % 2 === 0;
    const isLastRowMd = idx >= 10;
    classes += isLeftColMd ? " md:border-r md:border-gray-200" : " md:border-r-0";
    classes += isLastRowMd ? " md:border-b-0" : " md:border-b md:border-gray-200";
    const isRightColLg = idx % 4 === 3;
    const isLastRowLg = idx >= 8;
    classes += isRightColLg ? " lg:border-r-0" : " lg:border-r lg:border-gray-200";
    classes += isLastRowLg ? " lg:border-b-0" : " lg:border-b lg:border-gray-200";
    return classes;
  };

  return (
    <section className="pt-10 pb-4 bg-white font-inter relative overflow-hidden">
      <img 
        src={footerRightImg.src} 
        alt="Right Decoration" 
        className="absolute top-10 -right-3 md:top-20 md:-right-5 w-24 md:w-36 object-contain pointer-events-none z-20 opacity-80" 
      />
      <SectionContainer className="relative z-10">
        <div 
          className="bg-white rounded-2xl pt-5 pb-4 px-6 md:pt-6 md:pb-6 md:px-8"
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          <div className="flex items-center gap-4 mb-8 w-full justify-center">
            <div className="h-[1px] flex-1 bg-gray-200"></div>
            <h2 className="text-lg md:text-xl font-semibold text-[#1b5e20] uppercase font-poppins tracking-wide text-center px-2 shrink-0">
              {data.heading}
            </h2>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.deliverables.map((item, idx) => (
              <div 
                key={idx}
                className={`flex items-start gap-4 px-5 py-4 lg:px-6 lg:py-5 ${getBorderClasses(idx)}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#1b5e20]/10 flex items-center justify-center shrink-0 text-[#1b5e20] mt-0.5">
                  {ICON_MAP[item.iconKey]}
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
      </SectionContainer>
    </section>
  );
}

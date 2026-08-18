import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import leaf from "@/app/assets/icons/bleaf.png";
import leafsImg from "@/app/assets/icons/leafs.png";
import footerRightImg from "@/app/assets/icons/footerright.webp";

// Import custom category icon images
import tog1 from "@/app/assets/icons/1tog.png";
import tog2 from "@/app/assets/icons/2tog.png";
import tog3 from "@/app/assets/icons/3tog.png";
import tog4 from "@/app/assets/icons/4tog.png";
import tog5 from "@/app/assets/icons/5tog.png";
import tog6 from "@/app/assets/icons/6tog.png";

export default function PartnershipOpportunities() {
  const opportunities = [
    {
      num: "01",
      title: "HOTEL & STAY PARTNER",
      icon: tog1,
      benefits: [
        "Brand visibility on official platforms",
        "Direct access to exhibitors & delegates",
        "Priority partner listing",
        "Business inquiries & repeat bookings",
        "Exclusive partner rates"
      ],
      theme: "bg-[#1a4f22]",
      textTheme: "text-[#1a4f22]",
      lightBg: "bg-[#f2f7f3]",
      link: "/partnership/hotel-stay-partner"
    },
    {
      num: "02",
      title: "TRAVEL PARTNER",
      icon: tog2,
      benefits: [
        "Featured as official travel partner",
        "Exposure to global exhibitors & buyers",
        "Lead generation opportunities",
        "Association with premium event",
        "Referral business opportunities"
      ],
      theme: "bg-[#e27329]",
      textTheme: "text-[#e27329]",
      lightBg: "bg-[#fcf5f0]",
      link: "/partnership/travel-partner"
    },
    {
      num: "03",
      title: "STALL DESIGN & FABRICATION",
      icon: tog3,
      benefits: [
        "Official branding on event collaterals",
        "High visibility at venue",
        "Access to exhibitors for stall needs",
        "Repeat business potential",
        "Showcase portfolio to global brands"
      ],
      theme: "bg-[#194c21]",
      textTheme: "text-[#194c21]",
      lightBg: "bg-[#f2f7f3]",
      link: "/partnership/stall-design-partner"
    },
    {
      num: "04",
      title: "LOGISTICS PARTNER",
      icon: tog4,
      benefits: [
        "Listed as official logistics partner",
        "International partner recognition",
        "Continuous business opportunities",
        "Access to exhibitors logistics needs",
        "Long-term contracts"
      ],
      theme: "bg-[#07595e]",
      textTheme: "text-[#07595e]",
      lightBg: "bg-[#f0f6f7]",
      link: "/partnership/logistics-partner"
    },
    {
      num: "05",
      title: "PRINTING & BRANDING",
      icon: tog5,
      benefits: [
        "Branding across event materials",
        "On-site branding opportunities",
        "High footfall audience visibility",
        "Year-round referrals",
        "Association with globally recognized event"
      ],
      theme: "bg-[#592b70]",
      textTheme: "text-[#592b70]",
      lightBg: "bg-[#f5f1f7]",
      link: "/partnership/printing-branding-partner"
    },
    {
      num: "06",
      title: "MANPOWER SUPPLY PARTNER",
      icon: tog6,
      benefits: [
        "Recognition as manpower supply partner",
        "Networking with delegates & exhibitors",
        "Brand exposure at venue",
        "Long-term collaboration opportunities",
        "Enhance brand credibility"
      ],
      theme: "bg-[#a57321]",
      textTheme: "text-[#a57321]",
      lightBg: "bg-[#f8f5ef]",
      link: "/partnership/manpower-supply-partner"
    }
  ];

  return (
    <section className="pt-10 pb-6 bg-white font-inter relative overflow-hidden">
      {/* Decorative Left - Leafs */}
      <div className="absolute left-0 top-[10%] pointer-events-none w-32 md:w-56 lg:w-72 z-0 opacity-100">
        <img src={leafsImg.src} alt="Leaf Decoration" className="w-full h-auto object-contain -translate-x-1/4" />
      </div>

      {/* Decorative Right - Footer Right */}
      <div className="absolute right-0 bottom-[50%] pointer-events-none w-36 md:w-60 lg:w-80 z-0 opacity-80">
        <img src={footerRightImg.src} alt="Decoration" className="w-full h-auto object-contain translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block mb-2">
            PARTNERSHIP OPPORTUNITIES
          </h2>
          <p className="text-sm font-bold text-[#ea580c]">Our Partner Categories &amp; Benefits</p>
          <p className="text-[11px] text-gray-900 font-medium mt-1">Choose a category that fits your business goals and unlock exclusive advantages.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 pt-4 relative hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              {/* Title & Icon Row — badge inside top-left */}
              <div className="flex items-center gap-4 mb-5">
                {/* Badge — inside card, not floating */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 ${opp.theme}`}>
                  {opp.num}
                </div>

                {/* Icon - Render Image Directly without wrapping div */}
                <Image src={opp.icon} alt={opp.title} width={48} height={48} className="object-contain shrink-0" />

                {/* Title */}
                <h3 className={`text-[16px] font-bold uppercase ${opp.textTheme} leading-tight font-poppins max-w-[140px]`}>
                  {opp.title}
                </h3>
              </div>

              {/* Benefits List */}
              <ul className="space-y-2.5 mb-5 relative z-10">
                {opp.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-[#1b5e20] shrink-0 mt-0.5" fill="currentColor" stroke="white" />
                    <span className="text-[14px] font-semibold text-gray-900">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Button / Link */}
              <Link 
                href={opp.link} 
                className={`${opp.theme} text-white px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity relative z-10`}
              >
                View Benefits <ArrowRight size={13} />
              </Link>

              {/* Faint Background Leaf at Bottom Right */}
              <div className="absolute right-0 bottom-0 pointer-events-none opacity-100">
                <Image src={leaf} alt="Leaf" width={64} height={64} className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

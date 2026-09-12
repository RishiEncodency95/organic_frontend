import { Users, Percent, ShieldCheck, Store, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import bgImage from "@/app/assets/msme/apply.png";

export const APPLY_HERO_DATA = {
  breadcrumbs: [
    { label: "Home", href: "#" },
    { label: "PMS Scheme", href: "#" },
    { label: "Apply for PMS Support", href: "#", active: true },
  ],
  tagline: "PMS Scheme",
  heading: {
    prefix: "Apply for ",
    highlight: "PMS SUPPORT",
  },
  description: {
    assistanceAmount: "up to ₹1.5 Lakh",
    schemeName: "MSME Promotion & Marketing Assistance (PMS) Scheme",
  },
  infoItems: [
    {
      id: 1,
      icon: Users,
      line1: "For Eligible",
      line2: "MSMEs Only",
    },
    {
      id: 2,
      icon: Percent,
      line1: "Up to ₹1.5 Lakh",
      line2: "Assistance",
    },
    {
      id: 3,
      icon: ShieldCheck,
      line1: "80% or 100%",
      line2: "Reimbursement",
    },
    {
      id: 4,
      icon: Store,
      line1: "Min. 9 sqm",
      line2: "Stall Required",
    },
    {
      id: 5,
      icon: FileText,
      line1: "Subject to",
      line2: "Govt. Guidelines",
    },
  ],
};

export default function ApplyHero() {
  const data = APPLY_HERO_DATA;

  return (
    <div className="relative w-full overflow-hidden bg-[#fafbfa]">
      {/* Background Section with Curved Bottom */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Plant Background Image */}
        <div className="absolute right-0 top-0 w-full  h-full opacity-90">
          <img
            src={bgImage.src}
            alt="Hands holding plant"
            className="w-full h-full object-cover object-[center_35%]"
          />
        </div>


        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 md:pl-28 h-full flex flex-col justify-center py-12">
          <div className="max-w-2xl mt-4">
            
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-[12px] font-semibold text-gray-600 mb-6 bg-white w-max px-4 py-2 rounded-xl shadow-sm border border-gray-100">
              {data.breadcrumbs.map((crumb, idx) => (
                <span key={crumb.label} className="flex items-center gap-2">
                  {crumb.active ? (
                    <span className="text-[#176b27]">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-[#176b27] transition-colors">{crumb.label}</Link>
                  )}
                  {idx < data.breadcrumbs.length - 1 && <span className="text-gray-400">&gt;</span>}
                </span>
              ))}
            </div>

            <span className="text-[#176b27] font-semibold text-[16px] tracking-wider uppercase mb-3 block">
              {data.tagline}
            </span>
            <h1 className="text-xl md:text-[56px] font-semibold text-[#1f2937] leading-[1.3] mb-2 ">
              {data.heading.prefix}<br />
              <span className="text-[#176b27]">{data.heading.highlight}</span>
            </h1>

            {/* Top decorative line */}
            <div className="flex items-center mt-3 mb-4">
              <div className="h-[3px] w-12 bg-[#e67e22] rounded-full"></div>
              <div className="h-[3px] w-[2px] bg-[#e67e22] rounded-full ml-1"></div>
            </div>

            <p className="text-[#374151] text-[16px] leading-[1.7] max-w-[460px] font-medium">
              Take the next step towards getting <span className="font-semibold text-[#176b27]">{data.description.assistanceAmount}</span> assistance under the <span className="font-semibold text-[#176b27]">MSME</span> Promotion & Marketing Assistance (<span className="font-semibold text-[#176b27]">PMS</span>) Scheme.
            </p>

            {/* Bottom decorative line */}
            <div className="flex items-center mt-5">
              <div className="h-[3px] w-12 bg-[#176b27] rounded-full"></div>
              <div className="h-[3px] w-[2px] bg-[#176b27] rounded-full ml-1"></div>
              <div className="h-[3px] w-[2px] bg-[#176b27] rounded-full ml-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Info Bar */}
      <div className="relative z-20 w-full px-4 md:px-14 -mt-6 mb-12">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#edf0ed] p-2 md:p-1 overflow-x-auto">
          <div className="flex items-center min-w-[800px] md:min-w-0 divide-x divide-[#edf0ed]">

            {data.infoItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className="flex-1 flex items-center gap-3 p-3 md:px-5">
                  <div className="w-10 h-10 rounded-full bg-[#f1f6f1] text-[#176b27] flex items-center justify-center shrink-0">
                    <IconComp size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs md:text-[14px] font-semibold text-[#374151] leading-[1.3]">
                    {item.line1} <br /> {item.line2}
                  </span>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import fallback logos from app/assets/logo
import logoMain from "@/app/assets/logo/logo.png";
import logo1 from "@/app/assets/logo/logo1.png";
import logo1Jpg from "@/app/assets/logo/logo1.jpg";
import logo2 from "@/app/assets/logo/logo2.png";
import logo2Webp from "@/app/assets/logo/logo2.webp";
import logo3 from "@/app/assets/logo/logo3.png";
import logo4 from "@/app/assets/logo/logo4.png";
import logo5 from "@/app/assets/logo/logo5.png";
import logo6 from "@/app/assets/logo/logo6.png";
import logo7 from "@/app/assets/logo/logo7.png";
import logo8 from "@/app/assets/logo/logo8.png";
import logo9Jpg from "@/app/assets/logo/logo9.jpg";
import logo10 from "@/app/assets/logo/logo10.webp";
import namogange from "@/app/assets/logo/namogange.png";

// Import fallback logos from app/assets/logos
import namo from "@/app/assets/logos/namo.png";
import namo1 from "@/app/assets/logos/namo1.png";
import footerLogo from "@/app/assets/logos/footerlogo.png";
import navbarLogo from "@/app/assets/logos/navbarlogo1.png";
import longLogo1 from "@/app/assets/logos/longlogo1.png";

// Continuous Marquee component with pause on hover
const Marquee = ({
  children,
  reverse = false,
  speed = "30s"
}: {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: string;
}) => {
  return (
    <div className="w-full relative overflow-hidden group">
      <div
        className={`flex items-center w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: speed }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export interface PartnerItem {
  id?: string;
  name?: string;
  image: any;
  imageAlt?: string;
  status?: string;
}

const renderLogo = (
  item: any,
  fallbackAlt: string,
  className: string,
  height: number,
  width: number
) => {
  const src = item?.image || item;
  const alt = item?.imageAlt || item?.name || fallbackAlt;

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
      loading="lazy"
      sizes={`${width}px`}
    />
  );
};

const activePartnerList = (value: any, fallback: any[]) => {
  if (!Array.isArray(value) || value.length === 0) return fallback;
  const active = value.filter((item: any) => item.status !== "Draft");
  return active.length > 0 ? active : fallback;
};

const PartnersAndBrands = ({ initialData }: { initialData?: any }) => {
  // Default fallback lists
  const defaultIndustry = [
    { image: logo1, imageAlt: "Industry Partner 1" },
    { image: logo2, imageAlt: "Industry Partner 2" },
    { image: logo3, imageAlt: "Industry Partner 3" },
    { image: logo4, imageAlt: "Industry Partner 4" },
    { image: logo5, imageAlt: "Industry Partner 5" },
    { image: logo6, imageAlt: "Industry Partner 6" },
    { image: logo7, imageAlt: "Industry Partner 7" },
    { image: logo8, imageAlt: "Industry Partner 8" },
    { image: namogange, imageAlt: "Namo Gange" },
    { image: longLogo1, imageAlt: "Industry Partner 10" },
    { image: namo1, imageAlt: "Industry Partner 11" },
  ];

  const defaultKnowledge = [
    { image: logo1, imageAlt: "Knowledge Partner 1" },
    { image: logo2, imageAlt: "Knowledge Partner 2" },
    { image: logo3, imageAlt: "Knowledge Partner 3" },
    { image: logoMain, imageAlt: "Knowledge Partner 4" },
    { image: logo10, imageAlt: "Knowledge Partner 5" },
  ];

  const defaultWellness = [
    { image: logo4, imageAlt: "Wellness Partner 1" },
    { image: logo5, imageAlt: "Wellness Partner 2" },
    { image: logo6, imageAlt: "Wellness Partner 3" },
    { image: namo, imageAlt: "Wellness Partner 4" },
    { image: logo8, imageAlt: "Wellness Partner 5" },
    { image: footerLogo, imageAlt: "Wellness Partner 6" },
  ];

  const defaultSupporting = [
    { image: logo7, imageAlt: "Supporting Assoc 1" },
    { image: logo8, imageAlt: "Supporting Assoc 2" },
    { image: logo9Jpg, imageAlt: "Supporting Assoc 3" },
    { image: namogange, imageAlt: "Supporting Assoc 4" },
    { image: navbarLogo, imageAlt: "Supporting Assoc 5" },
  ];

  const defaultEmerging = [
    { image: logo5, imageAlt: "Emerging Brand 1" },
    { image: logo6, imageAlt: "Emerging Brand 2" },
    { image: logo7, imageAlt: "Emerging Brand 3" },
    { image: logo8, imageAlt: "Emerging Brand 4" },
    { image: logo10, imageAlt: "Emerging Brand 5" },
    { image: logoMain, imageAlt: "Emerging Brand 6" },
    { image: logo1Jpg, imageAlt: "Emerging Brand 7" },
    { image: logo2Webp, imageAlt: "Emerging Brand 8" },
    { image: logo3, imageAlt: "Emerging Brand 9" },
    { image: logo4, imageAlt: "Emerging Brand 10" },
  ];

  const [industryLeaders, setIndustryLeaders] = useState<any[]>(() => activePartnerList(initialData?.industryLeadersLogos, defaultIndustry));
  const [knowledge, setKnowledge] = useState<any[]>(() => activePartnerList(initialData?.knowledgeLogos, defaultKnowledge));
  const [wellness, setWellness] = useState<any[]>(() => activePartnerList(initialData?.wellnessLogos, defaultWellness));
  const [supporting, setSupporting] = useState<any[]>(() => activePartnerList(initialData?.supportingLogos, defaultSupporting));
  const [emergingBrands, setEmergingBrands] = useState<any[]>(() => activePartnerList(initialData?.emergingBrandsLogos, defaultEmerging));

  // Fetch live partners from backend
  useEffect(() => {
    if (initialData) return;

    const fetchLivePartners = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";
        const res = await fetch(`${backendUrl}/api/v1/website/home/partners-brands`).catch(() => null);
        if (res && res.ok) {
          const json = await res.json().catch(() => null);
          if (json?.data || json) {
            const data = json?.data || json;
            if (Array.isArray(data.industryLeadersLogos) && data.industryLeadersLogos.length > 0) {
              const active = data.industryLeadersLogos.filter((x: any) => x.status !== "Draft");
              if (active.length > 0) setIndustryLeaders(active);
            }
            if (Array.isArray(data.knowledgeLogos) && data.knowledgeLogos.length > 0) {
              const active = data.knowledgeLogos.filter((x: any) => x.status !== "Draft");
              if (active.length > 0) setKnowledge(active);
            }
            if (Array.isArray(data.wellnessLogos) && data.wellnessLogos.length > 0) {
              const active = data.wellnessLogos.filter((x: any) => x.status !== "Draft");
              if (active.length > 0) setWellness(active);
            }
            if (Array.isArray(data.supportingLogos) && data.supportingLogos.length > 0) {
              const active = data.supportingLogos.filter((x: any) => x.status !== "Draft");
              if (active.length > 0) setSupporting(active);
            }
            if (Array.isArray(data.emergingBrandsLogos) && data.emergingBrandsLogos.length > 0) {
              const active = data.emergingBrandsLogos.filter((x: any) => x.status !== "Draft");
              if (active.length > 0) setEmergingBrands(active);
            }
          }
        }
      } catch (err) {
        console.error("Live partners fetch error:", err);
      }
    };

    fetchLivePartners();
  }, [initialData]);

  return (
    <section className="bg-white pt-4 pb-6 md:pt-6 md:pb-12 relative z-10 font-inter">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
        .group:hover .animate-marquee, .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full px-2 sm:px-6 lg:px-14">

        {/* ══════════════════════════════════════════
            SECTION 1: TRUSTED BY INDUSTRY LEADERS
        ══════════════════════════════════════════ */}
        <div className="mb-6 md:mb-10">
          <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
            <div className="flex-1 h-[1.5px] bg-slate-300" />
            <span className="font-poppins font-semibold text-[11px] md:text-[15px] tracking-widest uppercase text-[#1a1a1a] text-center">
              TRUSTED BY INDUSTRY LEADERS
            </span>
            <div className="flex-1 h-[1.5px] bg-slate-300" />
          </div>

          <div className="overflow-hidden relative w-full mt-2 md:mt-4">
            <Marquee speed="60s">
              <div className="flex items-center">
                {industryLeaders.map((logoItem, idx) => (
                  <React.Fragment key={`industry-${idx}`}>
                    <div className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 mx-3 md:mx-10 cursor-pointer h-10 md:h-16 px-1 md:px-2">
                      {renderLogo(
                        logoItem,
                        `Industry Partner ${idx + 1}`,
                        "max-h-8 md:max-h-12 max-w-[90px] md:max-w-[140px] w-auto h-auto object-contain",
                        48,
                        140
                      )}
                    </div>
                    <div className="w-[1.5px] h-4 md:h-6 bg-slate-300" />
                  </React.Fragment>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 2: 3-COLUMN LOGO SHOWCASE (9TH IHWE LAYOUT)
        ══════════════════════════════════════════ */}
        <div className="my-6 md:my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start divide-y md:divide-y-0 md:divide-x divide-slate-300">

            {/* ─── COLUMN 1: KNOWLEDGE PARTNERS (LEFT) ─── */}
            <div className="flex flex-col items-center px-2 md:px-4 pb-3 md:pb-0">
              <h3 className="font-poppins font-semibold text-[12px] md:text-[14px] tracking-wider uppercase text-[#4B1426] text-center mb-3 md:mb-6">
                Knowledge Partners
              </h3>
              <div className="w-full overflow-hidden">
                <Marquee speed="45s">
                  <div className="flex items-center">
                    {knowledge.map((logoItem, idx) => (
                      <div key={`knowledge-${idx}`} className="mx-3 md:mx-8 transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer h-10 md:h-16 px-1 md:px-2">
                        {renderLogo(
                          logoItem,
                          `Knowledge Partner ${idx + 1}`,
                          "max-h-8 md:max-h-10 max-w-[80px] md:max-w-[120px] w-auto h-auto object-contain",
                          40,
                          120
                        )}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>

            {/* ─── COLUMN 2: WELLNESS PARTNERS (CENTER) ─── */}
            <div className="flex flex-col items-center px-2 md:px-4 py-3 md:py-0">
              <h3 className="font-poppins font-semibold text-[12px] md:text-[14px] tracking-wider uppercase text-[#4B1426] text-center mb-3 md:mb-6">
                Wellness Partners
              </h3>
              <div className="w-full overflow-hidden">
                <Marquee speed="45s" reverse>
                  <div className="flex items-center">
                    {wellness.map((logoItem, idx) => (
                      <div key={`wellness-${idx}`} className="mx-3 md:mx-8 transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer h-10 md:h-16 px-1 md:px-2">
                        {renderLogo(
                          logoItem,
                          `Wellness Partner ${idx + 1}`,
                          "max-h-8 md:max-h-10 max-w-[80px] md:max-w-[120px] w-auto h-auto object-contain",
                          40,
                          120
                        )}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>

            {/* ─── COLUMN 3: SUPPORTING ASSOC. (RIGHT) ─── */}
            <div className="flex flex-col items-center px-2 md:px-4 pt-3 md:pt-0">
              <h3 className="font-poppins font-semibold text-[12px] md:text-[14px] tracking-wider uppercase text-[#4B1426] text-center mb-3 md:mb-6">
                Supporting Assoc.
              </h3>
              <div className="w-full overflow-hidden">
                <Marquee speed="45s">
                  <div className="flex items-center">
                    {supporting.map((logoItem, idx) => (
                      <div key={`supporting-${idx}`} className="mx-3 md:mx-8 transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer h-10 md:h-16 px-1 md:px-2">
                        {renderLogo(
                          logoItem,
                          `Supporting Assoc ${idx + 1}`,
                          "max-h-8 md:max-h-10 max-w-[80px] md:max-w-[120px] w-auto h-auto object-contain",
                          40,
                          120
                        )}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 3: EMERGING ORGANIC BRANDS (UPCOMING BRANDS LAYOUT)
        ══════════════════════════════════════════ */}
        <div className="mt-6 md:mt-10">
          <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
            <div className="flex-1 h-[1.5px] bg-slate-300" />
            <span className="font-poppins font-semibold text-[11px] md:text-[15px] tracking-widest uppercase text-[#1a1a1a] text-center">
              EMERGING ORGANIC BRANDS
            </span>
            <div className="flex-1 h-[1.5px] bg-slate-300" />
          </div>

          <div className="overflow-hidden relative w-full mt-2 md:mt-4">
            <Marquee speed="55s">
              <div className="flex items-center">
                {emergingBrands.map((logoItem, idx) => (
                  <React.Fragment key={`emerging-${idx}`}>
                    <div className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 mx-3 md:mx-8 cursor-pointer h-10 md:h-14 px-1 md:px-2">
                      {renderLogo(
                        logoItem,
                        `Emerging Brand ${idx + 1}`,
                        "max-h-8 md:max-h-10 max-w-[80px] md:max-w-[120px] w-auto h-auto object-contain",
                        40,
                        120
                      )}
                    </div>
                    <div className="w-[1.5px] h-4 md:h-6 bg-slate-300" />
                  </React.Fragment>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersAndBrands;

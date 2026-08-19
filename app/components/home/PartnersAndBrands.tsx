"use client";

import React from 'react';
import Image from 'next/image';

// Import logos from app/assets/logo
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

// Import logos from app/assets/logos
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
        {children}
        {children}
      </div>
    </div>
  );
};

const PartnersAndBrands = () => {
  // Top marquee logos
  const industryLeadersLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, namogange, longLogo1, namo1
  ];

  // Column 1 logos
  const knowledgeLogos = [
    logo1, logo2, logo3, logoMain, logo10
  ];

  // Column 2 logos
  const wellnessLogos = [
    logo4, logo5, logo6, namo, logo8, footerLogo
  ];

  // Column 3 logos
  const supportingLogos = [
    logo7, logo8, logo9Jpg, namogange, navbarLogo
  ];

  // Bottom marquee logos
  const emergingBrandsLogos = [
    logo5, logo6, logo7, logo8, logo10, logoMain, logo1Jpg, logo2Webp, logo3, logo4
  ];

  return (
    <section className="bg-white pt-6 pb-12 relative z-10 font-inter">
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

      <div className="w-full px-4 sm:px-6 lg:px-11">

        {/* ══════════════════════════════════════════
            SECTION 1: TRUSTED BY INDUSTRY LEADERS
        ══════════════════════════════════════════ */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[1.5px] bg-slate-300" />
            <span className="font-poppins font-semibold text-[13px] md:text-[15px] tracking-widest uppercase text-[#1a1a1a] text-center">
              TRUSTED BY INDUSTRY LEADERS
            </span>
            <div className="flex-1 h-[1.5px] bg-slate-300" />
          </div>

          <div className="overflow-hidden relative w-full mt-4">
            <Marquee speed="60s">
              <div className="flex items-center">
                {industryLeadersLogos.map((logoItem, idx) => (
                  <React.Fragment key={`industry-${idx}`}>
                    <div className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 mx-6 md:mx-10 cursor-pointer h-16 px-2">
                      <Image
                        src={logoItem}
                        alt={`Industry Partner ${idx + 1}`}
                        className="max-h-12 max-w-[140px] w-auto h-auto object-contain"
                        height={48}
                        width={140}
                      />
                    </div>
                    <div className="w-[1.5px] h-6 bg-slate-300" />
                  </React.Fragment>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 2: 3-COLUMN LOGO SHOWCASE (9TH IHWE LAYOUT)
        ══════════════════════════════════════════ */}
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start divide-y md:divide-y-0 md:divide-x divide-slate-300">

            {/* ─── COLUMN 1: KNOWLEDGE PARTNERS (LEFT) ─── */}
            <div className="flex flex-col items-center px-4 pb-6 md:pb-0">
              <h3 className="font-poppins font-semibold text-[12px] md:text-[14px] tracking-wider uppercase text-[#4B1426] text-center mb-6">
                Knowledge Partners
              </h3>
              <div className="w-full overflow-hidden">
                <Marquee speed="45s">
                  <div className="flex items-center">
                    {knowledgeLogos.map((logoItem, idx) => (
                      <div key={`knowledge-${idx}`} className="mx-6 md:mx-8 transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer h-16 px-2">
                        <Image
                          src={logoItem}
                          alt={`Knowledge Partner ${idx + 1}`}
                          className="max-h-10 max-w-[120px] w-auto h-auto object-contain"
                          height={40}
                          width={120}
                        />
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>

            {/* ─── COLUMN 2: WELLNESS PARTNERS (CENTER) ─── */}
            <div className="flex flex-col items-center px-4 py-6 md:py-0">
              <h3 className="font-poppins font-semibold text-[12px] md:text-[14px] tracking-wider uppercase text-[#4B1426] text-center mb-6">
                Wellness Partners
              </h3>
              <div className="w-full overflow-hidden">
                <Marquee speed="45s" reverse>
                  <div className="flex items-center">
                    {wellnessLogos.map((logoItem, idx) => (
                      <div key={`wellness-${idx}`} className="mx-6 md:mx-8 transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer h-16 px-2">
                        <Image
                          src={logoItem}
                          alt={`Wellness Partner ${idx + 1}`}
                          className="max-h-10 max-w-[120px] w-auto h-auto object-contain"
                          height={40}
                          width={120}
                        />
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>

            {/* ─── COLUMN 3: SUPPORTING ASSOC. (RIGHT) ─── */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
              <h3 className="font-poppins font-semibold text-[12px] md:text-[14px] tracking-wider uppercase text-[#4B1426] text-center mb-6">
                Supporting Assoc.
              </h3>
              <div className="w-full overflow-hidden">
                <Marquee speed="45s">
                  <div className="flex items-center">
                    {supportingLogos.map((logoItem, idx) => (
                      <div key={`supporting-${idx}`} className="mx-6 md:mx-8 transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center justify-center cursor-pointer h-16 px-2">
                        <Image
                          src={logoItem}
                          alt={`Supporting Assoc ${idx + 1}`}
                          className="max-h-10 max-w-[120px] w-auto h-auto object-contain"
                          height={40}
                          width={120}
                        />
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
        <div className="mt-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[1.5px] bg-slate-300" />
            <span className="font-poppins font-semibold text-[13px] md:text-[15px] tracking-widest uppercase text-[#1a1a1a] text-center">
              EMERGING ORGANIC BRANDS
            </span>
            <div className="flex-1 h-[1.5px] bg-slate-300" />
          </div>

          <div className="overflow-hidden relative w-full mt-4">
            <Marquee speed="55s">
              <div className="flex items-center">
                {emergingBrandsLogos.map((logoItem, idx) => (
                  <React.Fragment key={`emerging-${idx}`}>
                    <div className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 mx-6 md:mx-8 cursor-pointer h-14 px-2">
                      <Image
                        src={logoItem}
                        alt={`Emerging Brand ${idx + 1}`}
                        className="max-h-10 max-w-[120px] w-auto h-auto object-contain"
                        height={40}
                        width={120}
                      />
                    </div>
                    <div className="w-[1.5px] h-6 bg-slate-300" />
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





import React from 'react';
import { Check, Clock, Star, Flag } from 'lucide-react';
import Image from 'next/image';
import organImg from '@/app/assets/about/organi.png';

const AboutOrganizer = () => {
  return (
    <section className="w-full bg-white py-2 md:py-4 lg:py-4 overflow-hidden border-t border-gray-100">
      <div className="w-full px-4 md:px-11">

        {/* TOP SECTION: About the Organizer */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="flex-1 lg:w-[50%]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0f9f0] border border-[#3b8c2a]/20 mb-4">
              <Star className="w-4 h-4 text-[#e85d1c] fill-[#e85d1c]" />
              <span className="text-[12px] font-bold text-[#3b8c2a] uppercase tracking-wider">ABOUT ORGANIZER</span>
            </div>

            <h2 className="text-[17px] md:text-[22px] lg:text-[24px] font-semibold text-[#111] leading-[1.2] tracking-tight mb-4">
              NAMO GANGE <span className="text-[#3b8c2a]">WELLNESS</span>
            </h2>

            <div className="space-y-4 text-[#374151] text-[16px] md:text-[18px] leading-[1.6] mb-6">
              <p>
                A professionally managed exhibition and conference organizer in India, specializing in creating
                large-scale B2B trade shows, healthcare exhibitions, and global business platforms.
              </p>
              <p>
                Established in 2016, the company has built a strong reputation for delivering high-impact, result-
                driven platforms that combine exhibitions, conferences, buyer-seller meets, and Indian
                participation into one ecosystem.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-[12px] font-bold text-[#2a6d1d] tracking-[0.15em] uppercase mb-5">
                CORE CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Indian exhibitions & trade shows",
                  "Healthcare conferences & seminars",
                  "Buyer–Seller Meets (B2B matchmaking)",
                  "Sponsorship & brand partnerships",
                  "Indian collaborations & delegations",
                  "Focused on delivering measurable ROI and business growth for participants."
                ].map((capability, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 min-w-[16px] w-4 h-4 rounded-full bg-[#fef2eb] text-[#e85d1c] flex items-center justify-center shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-[14px] md:text-[16px] font-medium text-[#111] leading-snug">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 lg:w-[45%] w-full relative mt-10 lg:mt-0">
            {/* Decorative dots background */}
            <div className="absolute -inset-6 opacity-30 z-0" style={{ backgroundImage: 'radial-gradient(#9ca3af 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative z-10 w-full h-[350px] md:h-[420px] lg:h-[420px] p-[4px] rounded-2xl bg-[#f0f9f0] shadow-lg group hover:shadow-[0_0_35px_rgba(59,140,42,0.6)] transition-all duration-500 overflow-hidden">

              {/* Spinning Animated Border Effect */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] lg:w-[120%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_120deg,#3b8c2a_180deg,transparent_180deg_300deg,#e85d1c_360deg)] animate-spin opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ animationDuration: '4s' }}
              ></div>

              <div className="relative z-10 w-full h-full overflow-hidden rounded-[12px] bg-white">
                <Image
                  src={organImg}
                  alt="Namo Gange Wellness Pvt. Ltd. organizing Bharat Bharat Organic Expo 2027"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 md:bottom-[-20px] md:right-[-20px] bg-[#d95b28] w-[90px] h-[90px] md:w-[110px] md:h-[110px] border-[6px] border-white rounded-full shadow-2xl flex flex-col items-center justify-center text-white z-20 group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-[28px] md:text-[32px] font-extrabold leading-none mb-1">10+</span>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider">YEARS</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Our Journey */}
        <div className="w-full pt-3 mt-3 border-t border-gray-200">
          {/* Headings Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            {/* Left Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[#e85d1c]"></div>
              <h3 className="text-[12px] md:text-[14px] font-bold text-[#e85d1c] tracking-[0.15em] uppercase text-center">
                OUR JOURNEY & FLAGSHIP EVENTS
              </h3>
              <div className="w-12 h-[2px] bg-[#e85d1c]"></div>
            </div>

            {/* Right Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[#113d29]"></div>
              <h3 className="text-[12px] md:text-[14px] font-bold text-[#113d29] tracking-[0.15em] uppercase text-center">
                A LEGACY OF GROWTH & INNOVATION
              </h3>
              <div className="w-12 h-[2px] bg-[#113d29]"></div>
            </div>
          </div>

          {/* Centered Paragraph */}
          <p className="text-[#374151] text-[16px] md:text-[18px] leading-[1.6] text-center max-w-3xl mx-auto mb-4">
            With a proven legacy of delivering result-oriented exhibitions, we forge lasting business relationships and accelerate industry growth.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

            {/* Card 1: Our Journey */}
            <div className="bg-[#f8f9fa] border border-gray-200 border-b-[5px] border-b-gray-300 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-b-[#3b8c2a] transition-all duration-300 p-4 md:p-6 flex flex-col h-full">
              <div className="flex items-start gap-3 mb-2 min-h-[36px] md:min-h-[40px]">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm text-[#e85d1c] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-[16px] md:text-[20px] font-semibold text-[#113d29] tracking-wider uppercase leading-[1.3]">
                  OUR JOURNEY: A LEGACY OF GROWTH
                </h4>
              </div>

              <div className="flex flex-col gap-6 flex-1 mt-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#e85d1c] font-extrabold text-[16px] min-w-[50px] md:min-w-[65px]">2016</span>
                  <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6]">
                    Company Founded — commitment to exceptional exhibition management.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#e85d1c] font-extrabold text-[16px] min-w-[50px] md:min-w-[65px]">2016–25</span>
                  <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6]">
                    Successfully organized Indian Health & Wellness Expos, establishing a credible global platform for integrated healthcare, preventive wellness and medical innovation.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#e85d1c] font-extrabold text-[16px] min-w-[50px] md:min-w-[65px]">2026</span>
                  <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6]">
                    IHWE 9th Edition — nine successful editions, sustained growth, expanding global participation and established leadership in the integrated healthcare and wellness industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Driving Innovation */}
            <div className="bg-[#f8f9fa] border border-gray-200 border-b-[5px] border-b-gray-300 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-b-[#3b8c2a] transition-all duration-300 p-4 md:p-6 flex flex-col h-full">
              <div className="flex items-start gap-3 mb-2 min-h-[36px] md:min-h-[40px]">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm text-[#e85d1c] flex items-center justify-center shrink-0 mt-0.5">
                  <Star size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-[16px] md:text-[20px] font-semibold text-[#113d29] tracking-wider uppercase leading-[1.3]">
                  DRIVING INNOVATION ACROSS CORE SECTORS
                </h4>
              </div>

              <ul className="space-y-4 flex-1 mt-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-[#e85d1c] shrink-0"></div>
                  <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6]">
                    <strong className="text-[#113d29]">Health & Wellness:</strong> Shaping the future of integrated personal & public healthcare through innovation, prevention, and global collaboration.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-[#e85d1c] shrink-0"></div>
                  <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6]">
                    <strong className="text-[#113d29]">Medical Sustainability:</strong> Promoting eco-friendly medical practices, sustainable hospital infrastructure and green healthcare technologies.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-[#e85d1c] shrink-0"></div>
                  <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6]">
                    <strong className="text-[#113d29]">Digital Health:</strong> Bridging technology and healthcare for smarter solutions.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-[#e85d1c] shrink-0"></div>
                  <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6]">
                    <strong className="text-[#113d29]">Health Tourism:</strong> Positioning India as a global leader in health travel.
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 3: Flagship Events */}
            <div className="bg-[#f8f9fa] border border-gray-200 border-b-[5px] border-b-gray-300 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-b-[#3b8c2a] transition-all duration-300 p-4 md:p-6 flex flex-col h-full">
              <div className="flex items-start gap-3 mb-2 min-h-[36px] md:min-h-[40px]">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm text-[#e85d1c] flex items-center justify-center shrink-0 mt-0.5">
                  <Flag size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-[16px] md:text-[20px] font-semibold text-[#113d29] tracking-wider uppercase leading-[1.3]">
                  FLAGSHIP EVENTS: A PROVEN TRACK RECORD
                </h4>
              </div>

              <div className="flex-1 flex flex-col mt-4">
                <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-[1.6] mb-6">
                  NGWPL's flagship events consistently deliver exceptional value and foster vibrant communities, creating significant market opportunities.
                </p>

                <ul className="space-y-4">
                  {[
                    "Punjab Health & Wellness Expo",
                    "The Yogshala Expo",
                    "Arogya Sangoshthi",
                    "Agritech Innovate India",
                    "Bharat Development & Schemes Expo",
                    "Organic Expo"
                  ].map((event, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#e85d1c] shrink-0"></div>
                      <span className="text-[14px] md:text-[15px] font-medium text-[#4b5563]">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrganizer;

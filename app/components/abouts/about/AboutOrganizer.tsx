import React from 'react';
import { Check, Clock, Star, Flag } from 'lucide-react';

const AboutOrganizer = () => {
  return (
    <section className="w-full bg-white py-2 md:py-4 overflow-hidden border-t border-gray-100">
      <div className="w-full px-4 md:px-11 xl:px-11">

        {/* TOP SECTION: About the Organizer */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center">

          {/* Left Column */}
          <div className="flex-1 lg:w-[55%]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#e85d1c]"></div>
              <h3 className="text-[12px] md:text-[14px] font-bold text-[#e85d1c] tracking-[0.15em] uppercase">
                ABOUT THE ORGANIZER
              </h3>
            </div>

            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold text-[#113d29] leading-tight mb-6">
              Namo Gange Wellness Pvt. Ltd.
            </h2>

            <div className="space-y-4 text-[#374151] text-[14px] md:text-[15px] leading-relaxed mb-10">
              <p>
                A professionally managed exhibition and conference organizer in India, specializing in creating
                large-scale B2B trade shows, healthcare exhibitions, and global business platforms.
              </p>
              <p>
                Established in 2016, the company has built a strong reputation for delivering high-impact, result-
                driven platforms that combine exhibitions, conferences, buyer-seller meets, and international
                participation into one ecosystem.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-[12px] font-bold text-[#2a6d1d] tracking-[0.15em] uppercase mb-5">
                CORE CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "International exhibitions & trade shows",
                  "Healthcare conferences & seminars",
                  "Buyer–Seller Meets (B2B matchmaking)",
                  "Sponsorship & brand partnerships",
                  "International collaborations & delegations",
                  "Focused on delivering measurable ROI and business growth for participants."
                ].map((capability, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 min-w-[16px] w-4 h-4 rounded-full bg-[#fef2eb] text-[#e85d1c] flex items-center justify-center shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-[14px] font-medium text-[#111] leading-snug">
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

            <div className="relative z-10 w-full aspect-[3/2] lg:aspect-[16/9] bg-gray-100 border-[8px] border-white shadow-xl flex items-center justify-center overflow-hidden">
              {/* Using a placeholder for the exhibition image */}
              <div className="absolute inset-0 bg-[#f1f5f9] flex flex-col items-center justify-center text-gray-400">
                <span className="text-sm font-medium">Exhibition Image Placeholder</span>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 md:bottom-[-20px] md:right-[-20px] bg-[#d95b28] w-[90px] h-[90px] md:w-[110px] md:h-[110px] border-[6px] border-white shadow-xl flex flex-col items-center justify-center text-white z-20">
                <span className="text-[28px] md:text-[32px] font-extrabold leading-none mb-1">10+</span>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider">YEARS</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Our Journey */}
        <div className="w-full pt-4 border-t border-gray-200">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#e85d1c]"></div>
              <h3 className="text-[12px] md:text-[14px] font-bold text-[#e85d1c] tracking-[0.15em] uppercase">
                OUR JOURNEY & FLAGSHIP EVENTS
              </h3>
              <div className="w-12 h-[2px] bg-[#e85d1c]"></div>
            </div>

            <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#113d29] leading-tight mb-4">
              A Legacy of Growth & Innovation
            </h2>
            <p className="text-[#374151] text-[14px] md:text-[15px] max-w-3xl mx-auto">
              With a proven legacy of delivering result-oriented exhibitions, we forge lasting business relationships and accelerate industry growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Card 1: Our Journey */}
            <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fef2eb] text-[#e85d1c] flex items-center justify-center shrink-0">
                  <Clock size={16} strokeWidth={2.5} />
                </div>
                <h4 className="text-[12px] md:text-[13px] font-bold text-[#113d29] tracking-wider uppercase">
                  OUR JOURNEY: A LEGACY OF GROWTH
                </h4>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-[#e85d1c] font-extrabold text-[14px] min-w-[50px] md:min-w-[60px]">2016</span>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">
                    Company Founded — commitment to exceptional exhibition management.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#e85d1c] font-extrabold text-[14px] min-w-[50px] md:min-w-[60px]">2016–25</span>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">
                    Successfully organized International Health & Wellness Expos, establishing a credible global platform for integrated healthcare, preventive wellness and medical innovation.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#e85d1c] font-extrabold text-[14px] min-w-[50px] md:min-w-[60px]">2026</span>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">
                    IHWE 9th Edition — nine successful editions, sustained growth, expanding global participation and established leadership in the integrated healthcare and wellness industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Driving Innovation */}
            <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fef2eb] text-[#e85d1c] flex items-center justify-center shrink-0">
                  <Star size={16} strokeWidth={2.5} />
                </div>
                <h4 className="text-[12px] md:text-[13px] font-bold text-[#113d29] tracking-wider uppercase">
                  DRIVING INNOVATION ACROSS CORE SECTORS
                </h4>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e85d1c] shrink-0"></div>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">
                    <strong className="text-[#113d29]">Health & Wellness:</strong> Shaping the future of integrated personal & public healthcare through innovation, prevention, and global collaboration.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e85d1c] shrink-0"></div>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">
                    <strong className="text-[#113d29]">Medical Sustainability:</strong> Promoting eco-friendly medical practices, sustainable hospital infrastructure and green healthcare technologies.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e85d1c] shrink-0"></div>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">
                    <strong className="text-[#113d29]">Digital Health:</strong> Bridging technology and healthcare for smarter solutions.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#e85d1c] shrink-0"></div>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">
                    <strong className="text-[#113d29]">Health Tourism:</strong> Positioning India as a global leader in health travel.
                  </p>
                </li>
              </ul>
            </div>

            {/* Card 3: Flagship Events */}
            <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#fef2eb] text-[#e85d1c] flex items-center justify-center shrink-0">
                  <Flag size={16} strokeWidth={2.5} />
                </div>
                <h4 className="text-[12px] md:text-[13px] font-bold text-[#113d29] tracking-wider uppercase">
                  FLAGSHIP EVENTS: A PROVEN TRACK RECORD
                </h4>
              </div>

              <p className="text-[13px] text-[#4b5563] leading-relaxed mb-5">
                NGWPL's flagship events consistently deliver exceptional value and foster vibrant communities, creating significant market opportunities.
              </p>

              <ul className="space-y-3">
                {[
                  "International Health & Wellness Expo",
                  "Indo Himalayan Expo",
                  "Punjab Health & Wellness Expo",
                  "The Yogshala Expo",
                  "Arogya Sangoshthi",
                  "Agritech Innovate India",
                  "Bharat Development & Schemes Expo",
                  "Organic Expo"
                ].map((event, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e85d1c] shrink-0"></div>
                    <span className="text-[13px] font-medium text-[#4b5563]">{event}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOrganizer;

import React from 'react';
import { Leaf, HeartPulse, Sprout, User, Monitor, Plane } from 'lucide-react';

const EventOverview = () => {
  return (
    <section className="relative w-full py-2 md:py-6 lg:py-6 bg-[#EFF7EE] overflow-hidden border-t border-gray-100">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b8c2a] opacity-[0.03] rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#3b8c2a] opacity-[0.03] rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#3b8c2a] opacity-[0.03] rounded-full blur-3xl"></div>

      <div className="w-full px-4 md:px-11 xl:px-11 flex flex-col lg:flex-row items-stretch gap-12 xl:gap-16 relative z-10">

        {/* LEFT COLUMN: EVENT OVERVIEW */}
        <div className="flex-1 lg:max-w-[55%]">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-[14px] md:text-[16px] font-bold text-[#f97316] tracking-[0.15em] uppercase">
              EVENT OVERVIEW
            </h3>
          </div>

          <h2 className="text-[18px] md:text-[16px] lg:text-[28px] font-semibold text-[#111] leading-[1.2] mb-2">
            A Global Platform Connecting Healthcare, Wellness & Business Opportunities
          </h2>

          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-[2px] bg-[#3b8c2a]"></div>
            <Leaf size={20} className="text-[#3b8c2a] fill-[#3b8c2a]" />
            <div className="w-16 h-[2px] bg-[#3b8c2a]"></div>
          </div>

          <div className="space-y-3 text-gray-800 text-[14px] md:text-[15px]  ">
            <p>
              <strong className="text-[#1a4731]">Bharat Organic Expo 2027</strong> stands as India's most influential international platform dedicated to organic excellence, wellness innovation, and sustainable living. Entering its prestigious edition, the Expo represents a strategic evolution—from a conventional trade exhibition into a powerful global ecosystem for business growth, policy exchange, knowledge sharing, and international collaboration.
            </p>
            <p>
              With a strong legacy of 10+ years and 8 successfully executed editions, the Expo has established itself as a trusted meeting ground for organic leaders, wellness brands, sustainable technology providers, investors, policymakers, researchers, startups, and global delegations from across the world.
            </p>
            <p>
              Scheduled from <strong className="text-[#1a4731]">19th – 21st February 2027</strong> in <strong className="text-[#1a4731]">New Delhi</strong>, the
              expo is strategically designed to enable business growth, industry collaboration,
              and global trade opportunities in one high-impact environment.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: KEY SECTORS */}
        <div className="flex-1 lg:max-w-[45%] w-full flex flex-col justify-center">
          <div className="flex items-center justify-end gap-3 mb-8 w-full">
            <div className="flex-1 h-[1px] bg-gray-300 ml-12"></div>
            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
            <h3 className="text-[14px] md:text-[16px] font-semibold text-[#1a4731] tracking-[0.15em] uppercase whitespace-nowrap">
              KEY SECTORS
            </h3>
            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
            <div className="w-16 h-[1px] bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mt-14">

            {/* Sector 1 */}
            <div className="bg-[#fff1f2] rounded-2xl shadow-sm border border-[#ffe4e6] border-b-[3px] border-b-[#e11d48] py-6 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_12px_25px_rgba(225,29,72,0.15)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#e11d48] group-hover:scale-110 group-hover:bg-[#e11d48] group-hover:text-white transition-all duration-300">
                <HeartPulse size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#111] font-semibold text-[12px] md:text-[13px] leading-snug">
                Healthcare &<br />Medical Industry
              </h4>
            </div>

            {/* Sector 2 */}
            <div className="bg-[#f3faef] rounded-2xl shadow-sm border border-[#e2f0d9] border-b-[3px] border-b-[#3b8c2a] py-6 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_12px_25px_rgba(59,140,42,0.15)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#3b8c2a] group-hover:scale-110 group-hover:bg-[#3b8c2a] group-hover:text-white transition-all duration-300">
                <Sprout size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#111] font-semibold text-[12px] md:text-[13px] leading-snug">
                AYUSH &<br />Traditional Medicine
              </h4>
            </div>

            {/* Sector 3 */}
            <div className="bg-[#fff4ed] rounded-2xl shadow-sm border border-[#ffe4d1] border-b-[3px] border-b-[#f97316] py-6 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_12px_25px_rgba(249,115,22,0.15)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#f97316] group-hover:scale-110 group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300">
                <User size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#111] font-semibold text-[12px] md:text-[13px] leading-snug">
                Wellness, Fitness &<br />Lifestyle
              </h4>
            </div>

            {/* Sector 4 */}
            <div className="bg-[#f0f9ff] rounded-2xl shadow-sm border border-[#e0f2fe] border-b-[3px] border-b-[#0284c7] py-6 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_12px_25px_rgba(2,132,199,0.15)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#0284c7] group-hover:scale-110 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300">
                <Monitor size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#111] font-semibold text-[12px] md:text-[13px] leading-snug">
                Digital Health,<br />AI & MedTech
              </h4>
            </div>

            {/* Sector 5 */}
            <div className="bg-[#f0fdfa] rounded-2xl shadow-sm border border-[#ccfbf1] border-b-[3px] border-b-[#0d9488] py-6 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_12px_25px_rgba(13,148,136,0.15)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#0d9488] group-hover:scale-110 group-hover:bg-[#0d9488] group-hover:text-white transition-all duration-300">
                <Plane size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[#111] font-semibold text-[12px] md:text-[13px] leading-snug">
                Medical Tourism<br />in India
              </h4>
            </div>

            {/* Sector 6 */}
            <div className="bg-[#eff7f3] rounded-2xl shadow-sm border border-[#d1e8dc] border-b-[3px] border-b-[#1a4731] py-6 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_12px_25px_rgba(26,71,49,0.15)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#1a4731] group-hover:scale-110 group-hover:bg-[#1a4731] group-hover:text-white transition-all duration-300">
                <Leaf size={28} strokeWidth={1.5} className="group-hover:fill-current" />
              </div>
              <h4 className="text-[#111] font-semibold text-[12px] md:text-[13px] leading-snug">
                Nutrition, Organic &<br />Sustainable Living
              </h4>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;


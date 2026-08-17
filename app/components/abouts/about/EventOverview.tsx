import React from 'react';
import { Leaf, HeartPulse, Sprout, User, Monitor, Plane } from 'lucide-react';

const EventOverview = () => {
  return (
    <section className="relative w-full py-2 md:py-4 bg-[#EFF7EE] overflow-hidden border-t border-gray-100">
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
              <strong className="text-[#1a4731]">Bharat Bharat Organic Expo 2027</strong> stands as India's most influential international platform dedicated to organic excellence, wellness innovation, and sustainable living. Entering its prestigious edition, the Expo represents a strategic evolution—from a conventional trade exhibition into a powerful global ecosystem for business growth, policy exchange, knowledge sharing, and international collaboration.
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
            <h3 className="text-[14px] md:text-[16px] font-bold text-[#1a4731] tracking-[0.15em] uppercase whitespace-nowrap">
              KEY SECTORS
            </h3>
            <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
            <div className="w-16 h-[1px] bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mt-14">

            {/* Sector 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-b-[3px] border-b-[#3b82f6] py-5 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_15px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#eff6ff] flex items-center justify-center mb-2.5 text-[#3b82f6] group-hover:scale-110 transition-transform">
                <HeartPulse size={28} strokeWidth={2} />
              </div>
              <h4 className="text-[#111] font-bold text-[11px] md:text-[12px] leading-tight">
                Healthcare &<br />Medical Industry
              </h4>
            </div>

            {/* Sector 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-b-[3px] border-b-[#22c55e] py-5 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_15px_30px_rgba(34,197,94,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-2.5 text-[#22c55e] group-hover:scale-110 transition-transform">
                <Sprout size={28} strokeWidth={2} />
              </div>
              <h4 className="text-[#111] font-bold text-[11px] md:text-[12px] leading-tight">
                AYUSH &<br />Traditional Medicine
              </h4>
            </div>

            {/* Sector 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-b-[3px] border-b-[#f97316] py-5 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_15px_30px_rgba(249,115,22,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#fff7ed] flex items-center justify-center mb-2.5 text-[#f97316] group-hover:scale-110 transition-transform">
                <User size={28} strokeWidth={2} />
              </div>
              <h4 className="text-[#111] font-bold text-[11px] md:text-[12px] leading-tight">
                Wellness, Fitness &<br />Lifestyle
              </h4>
            </div>

            {/* Sector 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-b-[3px] border-b-[#a855f7] py-5 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#faf5ff] flex items-center justify-center mb-2.5 text-[#a855f7] group-hover:scale-110 transition-transform">
                <Monitor size={28} strokeWidth={2} />
              </div>
              <h4 className="text-[#111] font-bold text-[11px] md:text-[12px] leading-tight">
                Digital Health,<br />AI & MedTech
              </h4>
            </div>

            {/* Sector 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-b-[3px] border-b-[#06b6d4] py-5 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_15px_30px_rgba(6,182,212,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#ecfeff] flex items-center justify-center mb-2.5 text-[#06b6d4] group-hover:scale-110 transition-transform">
                <Plane size={28} strokeWidth={2} />
              </div>
              <h4 className="text-[#111] font-bold text-[11px] md:text-[12px] leading-tight">
                Medical Tourism<br />in India
              </h4>
            </div>

            {/* Sector 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 border-b-[3px] border-b-[#16a34a] py-5 px-3 flex flex-col items-center justify-center text-center hover:shadow-[0_15px_30px_rgba(22,163,74,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-2.5 text-[#16a34a] group-hover:scale-110 transition-transform">
                <Leaf size={28} strokeWidth={2} className="fill-current" />
              </div>
              <h4 className="text-[#111] font-bold text-[11px] md:text-[12px] leading-tight">
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


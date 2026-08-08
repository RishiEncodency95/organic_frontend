import React from 'react';

const VisionMission = () => {
  return (
    <section className="w-full bg-[#EFF7EE] py-2 md:py-4 border-t border-gray-100">
      <div className="w-full px-4 md:px-11 xl:px-11 ">
        <div className="w-full bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden relative">
          {/* Subtle glowing backgrounds (now faint green for light theme) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b8c2a] opacity-5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b8c2a] opacity-5 rounded-full blur-[100px]"></div>

          <div className="flex flex-col lg:flex-row relative z-10">

            {/* Vision */}
            <div className="flex-1 p-6 md:p-8 lg:p-10 lg:pr-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#e85d1c]"></div>
                <h3 className="text-[12px] md:text-[14px] font-bold text-[#e85d1c] tracking-[0.15em] uppercase">
                  OUR VISION
                </h3>
              </div>

              <h2 className="text-[28px] md:text-[32px] lg:text-[34px] font-semibold text-[#113d29] leading-tight mb-4">
                India as a Global Wellness Hub
              </h2>

              <div className="space-y-4 text-[#374151] text-[14px] md:text-[15px] leading-relaxed flex-1">
                <p>
                  To position India as a Global Hub for Healthcare, Wellness, and AYUSH, by creating an integrated ecosystem that connects traditional wisdom, modern healthcare, innovation, and global markets.
                </p>
                <p>
                  We envision a future where <span className="text-[#e85d1c] font-semibold">preventive healthcare, holistic wellness, and sustainable living</span> are at the core of global development, enabling individuals, businesses, and nations to thrive in a healthier and more connected world.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1px] bg-gray-200 my-8"></div>
            <div className="block lg:hidden h-[1px] bg-gray-200 mx-6"></div>

            {/* Mission */}
            <div className="flex-1 p-6 md:p-8 lg:p-10 lg:pl-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#e85d1c]"></div>
                <h3 className="text-[12px] md:text-[14px] font-bold text-[#e85d1c] tracking-[0.15em] uppercase">
                  OUR MISSION
                </h3>
              </div>

              <h2 className="text-[28px] md:text-[32px] lg:text-[34px] font-semibold text-[#113d29] leading-tight mb-4">
                World-Class B2B Health Platform
              </h2>

              <div className="space-y-4 text-[#374151] text-[14px] md:text-[15px] leading-relaxed flex-1">
                <p>
                  To build a world-class B2B healthcare and wellness platform that brings together industry leaders, innovators, buyers, and global stakeholders to drive business growth and collaboration.
                </p>
                <p>
                  We aim to promote <span className="text-[#e85d1c] font-semibold">preventive healthcare, AYUSH, digital health, and wellness innovation</span>, while enabling high-value networking, international trade opportunities, and long-term ecosystem development across the global health and wellness industry.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

import React from 'react';
import { UserCheck, TrendingUp, Percent, MapPin, Landmark } from 'lucide-react';
import Image from 'next/image';
import heroBg from '@/app/assets/participate/msme/home-banner.jpeg'; // Fallback bg

const EligibilityHero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 pt-16 pb-12 px-4 md:px-14">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="object-cover opacity-20 pointer-events-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="flex flex-col text-white max-w-xl z-20">
          <span className="text-[14px] md:text-[15px] font-semibold tracking-widest text-white/90 uppercase mb-2">
            PMS Eligibility Check
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Your Gateway to<br />PMS Support
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-[#facc15]">
            Bharat Organic Expo 2027
          </h2>
        </div>

        {/* Right side placeholder (The wooden blocks in image) */}
        <div className="hidden md:block w-[400px] h-[250px] relative mt-10 md:mt-0 z-20">
            {/* Using a placeholder gradient block until user adds the image */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-green-800/40 to-yellow-600/30 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <span className="text-white/60 font-medium">Hero Graphic Placeholder</span>
            </div>
        </div>
      </div>

      {/* Bottom Icons Row */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 flex flex-wrap items-center gap-6 text-white text-[12px] md:text-[13px] font-medium">
        <div className="flex items-center gap-2">
            <UserCheck className="text-[#facc15]" size={20} />
            <span>For Eligible<br/>MSEs Only</span>
        </div>
        <div className="flex items-center gap-2">
            <TrendingUp className="text-[#facc15]" size={20} />
            <span>Up to ₹1.5 Lakh<br/>Assistance</span>
        </div>
        <div className="flex items-center gap-2">
            <Percent className="text-[#facc15]" size={20} />
            <span>80% or 100%<br/>Reimbursement</span>
        </div>
        <div className="flex items-center gap-2">
            <MapPin className="text-[#facc15]" size={20} />
            <span>Min. 9 sqm<br/>Stall Required</span>
        </div>
        <div className="flex items-center gap-2">
            <Landmark className="text-[#facc15]" size={20} />
            <span>Subject to<br/>Govt. Guidelines</span>
        </div>
      </div>
    </div>
  );
};

export default EligibilityHero;

import React from 'react';
import { UserCheck, TrendingUp, Percent, MapPin, Landmark } from 'lucide-react';
import Image from 'next/image';
import heroBg from '@/app/assets/msme/pmsCheck.png'; // Fallback bg

const EligibilityHero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 pt-16 pb-12 px-4 md:px-14">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="object-cover opacity-100 pointer-events-none"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-transparent"></div> */}
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="flex flex-col text-white">
          <span className="text-[14px] md:text-[16px] font-semibold tracking-widest text-white/90 uppercase mb-2">
            PMS Eligibility Check
          </span>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold leading-tight mb-4">
            Your Gateway to<br />PMS Support
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#facc15]">
            Bharat Organic Expo 2027
          </h2>
        </div>

      </div>

      {/* Bottom Icons Row */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 flex flex-wrap items-center gap-6 text-white text-[12px] md:text-[13px] font-medium">
        <div className="flex items-center gap-2">
          <UserCheck className="text-[#facc15]" size={20} />
          <span>For Eligible<br />MSEs Only</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="text-[#facc15]" size={20} />
          <span>Up to ₹1.5 Lakh<br />Assistance</span>
        </div>
        <div className="flex items-center gap-2">
          <Percent className="text-[#facc15]" size={20} />
          <span>80% or 100%<br />Reimbursement</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-[#facc15]" size={20} />
          <span>Min. 9 sqm<br />Stall Required</span>
        </div>
        <div className="flex items-center gap-2">
          <Landmark className="text-[#facc15]" size={20} />
          <span>Subject to<br />Govt. Guidelines</span>
        </div>
      </div>
    </div>
  );
};

export default EligibilityHero;

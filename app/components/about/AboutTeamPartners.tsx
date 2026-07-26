"use client";

import React from "react";
import Link from "next/link";
import { Hexagon } from "lucide-react";

const team = [
  { name: "Rajesh Sharma", role: "Chairman", image: "https://i.pravatar.cc/150?u=1" },
  { name: "Anita Verma", role: "Director", image: "https://i.pravatar.cc/150?u=2" },
  { name: "Karan Singh", role: "Event Head", image: "https://i.pravatar.cc/150?u=3" },
  { name: "Neha Kapoor", role: "Conference Head", image: "https://i.pravatar.cc/150?u=4" },
];

const partners = [
  { type: "PLATINUM PARTNERS", logos: [1, 2] },
  { type: "GOLD PARTNERS", logos: [1, 2] },
  { type: "ASSOCIATE PARTNERS", logos: [1, 2] },
];

const media = [
  "The Economic Times", "BusinessLine", "ANI",
  "NDTV Profit", "DD News", "ZEE BUSINESS"
];

const AboutTeamPartners = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        
        {/* Organizing Committee */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-10 text-center">
            ORGANIZING COMMITTEE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full mb-8">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-[#3b8c2a] transition-all duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h5 className="text-[#111827] text-[11px] font-bold leading-tight">{member.name}</h5>
                <p className="text-[#64748b] text-[9px]">{member.role}</p>
              </div>
            ))}
          </div>
          <Link 
            href="/committee"
            className="mt-auto bg-[#154726] hover:bg-[#0b2912] text-white px-6 py-2 rounded-lg text-[11px] font-bold transition-all shadow-md"
          >
            View Full Team
          </Link>
        </div>

        {/* Partners & Supporters */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-8 text-center">
            OUR PARTNERS & SUPPORTERS
          </h3>
          <div className="flex flex-col gap-6 w-full">
            {partners.map((group, i) => (
              <div key={i} className="flex flex-col items-center">
                <h4 className="text-[#64748b] text-[9px] font-bold uppercase tracking-widest mb-3">{group.type}</h4>
                <div className="flex items-center gap-4">
                  {group.logos.map((_, j) => (
                    <div key={j} className="flex items-center gap-2 text-[#94a3b8] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                      <Hexagon size={20} />
                      <span className="text-[14px] font-bold tracking-tighter">LogoIpsum</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-10 text-center">
            MEDIA COVERAGE
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 w-full mt-auto mb-auto px-4">
            {media.map((name, i) => (
              <div key={i} className="flex items-center justify-center text-center">
                <span className="text-[#1e293b] text-[14px] font-black uppercase tracking-tight opacity-40 hover:opacity-100 hover:text-[#154726] transition-colors cursor-pointer">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTeamPartners;

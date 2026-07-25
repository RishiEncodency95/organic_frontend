"use client";

import { Leaf, Clock, Users, ShieldCheck, Link, Settings, Globe2 } from "lucide-react";

const reasons = [
  {
    title: "Fast Response",
    description: "We reply within 24 hours",
    icon: Clock
  },
  {
    title: "Dedicated Team",
    description: "Expert support for all your needs",
    icon: Users
  },
  {
    title: "Trusted Platform",
    description: "India's leading organic exhibition",
    icon: ShieldCheck
  },
  {
    title: "Business Matching",
    description: "Connect with right partners",
    icon: Link
  },
  {
    title: "Exhibition Support",
    description: "End-to-end assistance for exhibitors",
    icon: Settings
  },
  {
    title: "International Network",
    description: "Global reach for your business",
    icon: Globe2
  }
];

const ContactWhy = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-10">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Leaf size={16} className="text-[#3b8c2a]" />
          <h2 className="text-[#154726] text-[22px] font-bold">Why Contact Bharat Organic Expo?</h2>
          <Leaf size={16} className="text-[#3b8c2a]" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border border-dashed border-[#3b8c2a]/40 bg-[#f8fdf9] flex items-center justify-center mb-3">
                <Icon size={20} className="text-[#3b8c2a]" strokeWidth={1.5} />
              </div>
              <h4 className="text-[#111827] text-[13px] font-bold mb-1.5">{reason.title}</h4>
              <p className="text-[#64748b] text-[11px] leading-relaxed max-w-[150px]">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default ContactWhy;

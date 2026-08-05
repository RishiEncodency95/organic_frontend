"use client";

import React from 'react';
import { motion } from 'framer-motion';

import { 
  Users, 
  UserRound, 
  Trophy, 
  Rocket, 
  Handshake, 
  Globe 
} from 'lucide-react';

const extras = [
  {
    title: "INTERNATIONAL",
    title2: "CONFERENCES",
    subtitle: "Knowledge. Insights. Future Trends.",
    icon: <Users className="w-6 h-6" strokeWidth={2.5} />
  },
  {
    title: "LEADERSHIP",
    title2: "SUMMITS",
    subtitle: "Connect. Collaborate. Lead Change.",
    icon: <UserRound className="w-6 h-6" strokeWidth={2.5} />
  },
  {
    title: "ORGANIC &",
    title2: "WELLNESS AWARDS",
    subtitle: "Recognizing Excellence. Inspiring Impact.",
    icon: <Trophy className="w-6 h-6" strokeWidth={2.5} />
  },
  {
    title: "STARTUP &",
    title2: "INNOVATION SHOWCASE",
    subtitle: "Innovate. Pitch. Grow. Get Invested.",
    icon: <Rocket className="w-6 h-6" strokeWidth={2.5} />
  },
  {
    title: "STRUCTURED",
    title2: "B2B MEETINGS",
    subtitle: "Network. Partner. Grow Together.",
    icon: <Handshake className="w-6 h-6" strokeWidth={2.5} />
  },
  {
    title: "GLOBAL DELEGATION",
    title2: "PARTICIPATION",
    subtitle: "Global Reach. Endless Opportunities.",
    icon: <Globe className="w-6 h-6" strokeWidth={2.5} />
  }
];

const BeyondExhibition = () => {
  return (
    <section className="bg-white  overflow-hidden">
      <div className="w-full px-4 md:px-11 lg:px-11 py-2">
        <div className="bg-white rounded-[1.2rem] p-4 md:p-6 lg:p-2.5 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,4fr)] items-center gap-4 lg:gap-3 border border-gray-200 shadow-sm overflow-hidden">
          
          {/* LEFT HEADER */}
          <div className="min-w-0 flex flex-col items-center xl:items-start text-center xl:text-left border-b xl:border-b-0 xl:border-r border-gray-200 pb-4 xl:pb-0 xl:pr-4 pl-4">
            <h2 className="text-[20px] md:text-[18px] font-black text-[#00643b] tracking-tighter leading-tight mb-1 md:mb-0">
              BEYOND <span className="text-[#f58220]">AN</span> <span className="text-[#00643b]">EXHIBITION</span>
            </h2>
            <p className="text-[10px] md:text-[9px] text-gray-600 font-medium leading-[1.4] max-w-[280px]">
              A powerful ecosystem of organic conferences, sustainability summits, B2B meetings and global collaborations.
            </p>
          </div>

          {/* RIGHT GRID ITEMS */}
          <div className="min-w-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-start gap-x-1 gap-y-4 md:gap-x-1 md:gap-y-1 pt-0">
            {extras.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`min-w-0 flex flex-row items-start text-left pl-1 pr-0 gap-1.5 group overflow-hidden ${index < extras.length - 1 ? 'lg:border-r border-gray-200' : ''}`}
              >
                {/* ICON */}
                <div className="text-[#f58220] transition-transform duration-300 group-hover:scale-110 flex-shrink-0 pt-[2px]">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="min-w-0 flex flex-col overflow-hidden">
                  <h4 className="text-[9px] font-bold text-[#00643b] leading-[1.1] tracking-tight uppercase">
                    <div className="break-words">{item.title}</div>
                    <div className="break-words">{item.title2}</div>
                  </h4>
                  <p className="text-[8.5px] text-gray-600 font-bold leading-[1.2] mt-0.5 break-words">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeyondExhibition;

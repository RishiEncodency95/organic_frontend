"use client";

import React from "react";
import { Calendar, Clock } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import { Reveal } from "./BlogReveal";
import latestImg1 from "../../assets/blog/latest_1.webp";
import latestImg2 from "../../assets/blog/latest_2.webp";

const latestUpdates = [
  {
    tag: "Expo Update",
    img: latestImg1.src,
    title: "Inside Bharat Organic Expo 2026",
    desc: "A glimpse into grand launches, leading brands, knowledge sessions and business networking at India's biggest organic expo.",
    date: "May 7, 2026",
    read: "3 min read",
  },
  {
    tag: "Business Update",
    img: latestImg2.src,
    title: "Building New Opportunities Across India's Organic Ecosystem",
    desc: "How exhibitors, buyers and partners are creating new markets and long-term growth opportunities.",
    date: "May 5, 2026",
    read: "4 min read",
  },
];

const BlogLatest = () => {
  return (
    <section className="container mx-auto max-w-[1400px] px-6 lg:px-0 py-2 md:py-4">
      <SectionHeading action="View all">Latest from Bharat Organic Expo</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {latestUpdates.map((u, i) => (
          <Reveal key={u.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
            <a href="#" className="group block rounded-2xl overflow-hidden bg-[#fcfdfc] border border-gray-200/60 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-400 hover:-translate-y-1">
              <div className="relative overflow-hidden h-[160px]">
                <img src={u.img} alt={u.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <span className="absolute top-2 left-2 bg-[#1b5e20] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  {u.tag}
                </span>
              </div>
              <div className="p-3">
                <p
                  className="text-[13px] md:text-[14px] font-bold text-[#0f5c2e] leading-snug line-clamp-2 group-hover:text-[#3b8c2a] transition-colors"
                >
                  {u.title}
                </p>
                <p className="text-[16px] text-gray-500 leading-relaxed line-clamp-2 mt-1">{u.desc}</p>
                <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#3b8c2a]" /> {u.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" /> {u.read}
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default BlogLatest;
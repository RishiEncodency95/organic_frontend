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
    <section className="container mx-auto max-w-[1400px] px-6 lg:px-0 py-2 md:py-4 font-inter">
      <SectionHeading action="View all">Latest from Bharat Organic Expo</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {latestUpdates.map((u, i) => (
          <Reveal key={u.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
            <a
              href="#"
              className="group block rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 font-inter"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              <div className="relative overflow-hidden h-[160px] bg-gray-100">
                <img src={u.img} alt={u.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <span className="absolute top-2 left-2 bg-[#1b5e20] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded font-poppins">
                  {u.tag}
                </span>
              </div>
              <div className="p-3.5">
                <h4 className="font-poppins font-semibold text-[15px] sm:text-[16px] text-[#1b5e20] leading-snug line-clamp-2 group-hover:text-[#3b8c2a] transition-colors">
                  {u.title}
                </h4>
                <p className="font-inter text-[13px] text-black leading-relaxed line-clamp-2 mt-1">{u.desc}</p>
                <div className="flex items-center gap-3 mt-3 text-[11px] text-gray-500 font-medium font-inter pt-2 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#3b8c2a]" /> {u.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" /> {u.read}
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
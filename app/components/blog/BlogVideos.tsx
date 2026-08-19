"use client";

import React from "react";
import { Play } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import { Reveal } from "./BlogReveal";
import videoImg1 from "../../assets/blog/video_insight_1.webp";
import videoImg2 from "../../assets/blog/video_insight_2.webp";
import videoImg3 from "../../assets/blog/video_insight_3.webp";

const videos = [
  { img: videoImg1.src, title: "The Future of Organic Farming in India", duration: "6:24" },
  { img: videoImg2.src, title: "Inside Bharat Organic Expo", duration: "4:18" },
  { img: videoImg3.src, title: "Organic Brands & Sustainable Innovation", duration: "5:10" },
];

const BlogVideos = () => {
  return (
    <section className="container mx-auto max-w-[1400px] px-6 lg:px-0 py-2 md:py-4 font-inter">
      <SectionHeading action="View all">Video Insights</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((v, i) => (
          <Reveal key={v.title} delay={i * 100} direction={["left", "zoom", "right"][i % 3] as "left" | "zoom" | "right"}>
            <a href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[2/3] shadow-sm bg-gray-100">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125">
                    <Play className="w-4 h-4 text-[#2b5825] ml-0.5" fill="currentColor" />
                  </span>
                </div>
                <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[9px] font-bold px-1.5 py-0.5 rounded font-inter">
                  {v.duration}
                </span>
              </div>
              <h4 className="font-poppins font-semibold text-[13px] sm:text-[14px] text-[#1b5e20] mt-2 line-clamp-2 group-hover:text-[#3b8c2a] transition-colors leading-snug">
                {v.title}
              </h4>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default BlogVideos;
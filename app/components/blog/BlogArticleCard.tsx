"use client";

import React from "react";
import { Calendar, Clock } from "lucide-react";
import { Reveal, RevealDirection } from "./BlogReveal";

export type BlogArticle = {
  tag: string;
  img: string;
  title: string;
  desc: string;
  date: string;
  read: string;
};

export default function ArticleCard({ a, delay = 0, direction = "up" }: { a: BlogArticle; delay?: number; direction?: RevealDirection }) {
  return (
    <Reveal delay={delay} direction={direction}>
      <a
        href="#"
        className="group block bg-[#fcfdfc] rounded-2xl overflow-hidden border border-gray-200/60 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1"
      >
        <div className="relative overflow-hidden h-[200px] md:h-[220px]">
          <img
            src={a.img}
            alt={a.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute top-3 left-3 bg-[#1b5e20] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-md min-w-[110px] text-center">
            {a.tag}
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <h3
            className="text-[17px] md:text-[19px] font-bold text-[#0f5c2e] leading-[1.3] mb-3 group-hover:text-[#3b8c2a] transition-colors line-clamp-2"
          >
            {a.title}
          </h3>
          <p className="text-[16px] text-gray-500 leading-[1.6] mb-4 line-clamp-2">{a.desc}</p>
          <div className="flex items-center gap-4 text-[12px] text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#3b8c2a]" strokeWidth={2.5} /> {a.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" /> {a.read}
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
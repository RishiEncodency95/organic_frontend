"use client";

import React from "react";
import Link from "next/link";
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
      <Link
        href={`/blog/indias-organic-market`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 font-inter"
        style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
      >
        <div className="relative overflow-hidden h-[190px] md:h-[210px] bg-gray-100">
          <img
            src={a.img}
            alt={a.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute top-3 left-3 bg-[#1b5e20] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-md shadow-md text-center font-poppins">
            {a.tag}
          </span>
        </div>
        <div className="p-4 sm:p-5 flex flex-col">
          <h3
            className="font-poppins font-semibold text-[16px] md:text-[17px] text-[#1b5e20] leading-[1.3] mb-2 group-hover:text-[#3b8c2a] transition-colors line-clamp-2"
          >
            {a.title}
          </h3>
          <p className="font-inter text-[13px] text-black leading-relaxed mb-4 line-clamp-2">{a.desc}</p>
          <div className="flex items-center gap-4 text-[11px] text-gray-500 font-medium font-inter mt-auto pt-2 border-t border-gray-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#3b8c2a]" strokeWidth={2.2} /> {a.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" /> {a.read}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
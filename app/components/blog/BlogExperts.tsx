"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import { Reveal } from "./BlogReveal";
import expertImg from "../../assets/blog/expert.webp";

const expertPhoto = expertImg.src;

const experts = [
  { name: "Dr. Ramesh Patel", role: "Organic Farming Expert", quote: "Organic agriculture is not just a choice, it's the need of the hour for a sustainable future.", img: expertPhoto },
  { name: "Ms. Anita Verma", role: "CEO, Organic India", quote: "Consumer awareness and trust are the strongest pillars of the organic movement.", img: expertPhoto },
  { name: "Mr. Suresh Kumar", role: "Founder, 24 Mantra Organic", quote: "From our farms to your table, organic is our promise for a healthier India.", img: expertPhoto },
  { name: "Dr. Neha Sharma", role: "Sustainability Expert", quote: "Sustainable living begins with conscious choices we make every day.", img: expertPhoto },
  { name: "Mr. Arjun Singh", role: "Agri Entrepreneur", quote: "Innovation and collaboration are driving India's organic future forward.", img: expertPhoto },
];

const BlogExperts = () => {
  return (
    <section className="mt-4 md:mt-4">
      <SectionHeading action="View all experts">Voices of Experts</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {experts.map((e, i) => (
          <Reveal key={e.name} delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="bg-[#fcfdfc] rounded-2xl border border-gray-200/60 p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 h-full flex flex-col">
              <img
                src={e.img}
                alt={e.name}
                className="w-12 h-12 rounded-full object-cover mb-3 ring-2 ring-[#e8f2eb]"
              />
              <p
                className="text-[14px] font-bold text-[#154726] leading-tight"
              >
                {e.name}
              </p>
              <p className="text-[11px] text-gray-400 mb-2 font-medium">{e.role}</p>
              <p className="text-xs text-gray-500 italic leading-relaxed flex-1">"{e.quote}"</p>
              <a href="#" className="group mt-3 text-xs font-bold text-[#3b8c2a] uppercase tracking-wider flex items-center gap-1">
                Read More
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default BlogExperts;
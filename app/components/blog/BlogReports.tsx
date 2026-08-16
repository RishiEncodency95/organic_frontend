"use client";

import React from "react";
import { FileText, Download } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import { Reveal } from "./BlogReveal";

const reports = [
  { title: "Organic Industry Report 2026", meta: "PDF · 2.5 MB" },
  { title: "India Organic Market Outlook", meta: "PDF · 1.8 MB" },
  { title: "Organic Certification Guide", meta: "PDF · 1.2 MB" },
  { title: "Sustainable Packaging Trends", meta: "PDF · 950 KB" },
  { title: "Organic Export Opportunities", meta: "PDF · 1.4 MB" },
];

const BlogReports = () => {
  return (
    <section className="container mx-auto max-w-[1400px] px-6 lg:px-0  py-2 md:py-4">
      <SectionHeading action="View all">Reports &amp; Resources</SectionHeading>
      <div className="bg-[#fcfdfc] rounded-2xl border border-gray-200/60 shadow-sm divide-y divide-gray-200/60 overflow-hidden">
        {reports.map((r, i) => (
          <Reveal key={r.title} delay={i * 60} direction={i % 2 === 0 ? "left" : "right"}>
            <a href="#" className="group flex items-center justify-between px-4 sm:px-5 py-2 hover:bg-[#f4fcf6] transition-colors duration-300">
              <div className="flex items-center gap-3 min-w-0">
                <span className="shrink-0 w-9 h-9 rounded-lg bg-[#3b8c2a]/10 text-[#3b8c2a] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p
                    className="text-[14px] font-medium text-[#154726] truncate group-hover:text-[#3b8c2a] transition-colors"
                  >
                    {r.title}
                  </p>
                  <p className="text-[14px] text-gray-400 font-normal">{r.meta}</p>
                </div>
              </div>
              <Download className="w-4 h-4 text-gray-400 shrink-0 transition-all duration-300 group-hover:text-[#3b8c2a] group-hover:translate-y-0.5" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default BlogReports;
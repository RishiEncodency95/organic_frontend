"use client";

import React, { useState } from "react";
import { ArrowRight, Newspaper, Sprout, Apple, Package, Recycle, Lightbulb, FileText, BookOpen, Mail } from "lucide-react";
import { Reveal } from "./BlogReveal";

const categories = [
  { icon: Newspaper, label: "Expo News", count: 26, color: "text-sky-100 bg-sky-800" },
  { icon: Sprout, label: "Organic Farming", count: 24, color: "text-green-100 bg-green-800" },
  { icon: Apple, label: "Organic Food", count: 22, color: "text-emerald-100 bg-emerald-800" },
  { icon: Package, label: "Natural Products", count: 21, color: "text-orange-100 bg-orange-800" },
  { icon: Recycle, label: "Sustainability", count: 19, color: "text-teal-100 bg-teal-800" },
  { icon: Lightbulb, label: "Industry Insights", count: 17, color: "text-amber-100 bg-amber-800" },
  { icon: FileText, label: "Policy & Regulations", count: 10, color: "text-rose-100 bg-rose-800" },
  { icon: BookOpen, label: "Success Stories", count: 9, color: "text-cyan-100 bg-cyan-800" },
];

const BlogSidebar = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2500);
    setEmail("");
  };

  return (
    <aside className="space-y-5 lg:sticky lg:top-24 self-start font-inter">
      <Reveal>
        <div
          className="bg-white rounded-xl p-5 font-inter"
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          <h3 className="font-poppins font-semibold text-[17px] sm:text-[18px] text-[#1b5e20] mb-3 tracking-tight">
            Explore Categories
          </h3>
          <ul className="space-y-0.5">
            {categories.map((c, i) => (
              <Reveal key={c.label} delay={i * 45} direction={i % 2 === 0 ? "left" : "right"}>
                <li>
                  <a
                    href="#"
                    className="group flex items-center justify-between py-1.5 px-2 -mx-2 rounded-lg hover:bg-[#f4fcf6] transition-colors duration-250 font-inter"
                  >
                    <span className="flex items-center gap-2.5 text-[13px] font-medium text-gray-700 group-hover:text-[#1b5e20] transition-colors">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center ${c.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <c.icon className="w-3.5 h-3.5" />
                      </span>
                      {c.label}
                    </span>
                    <span className="text-xs text-gray-500 font-medium font-inter">{c.count}</span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
          <a href="#" className="group mt-3 flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wider text-[#3b8c2a] font-poppins">
            View all categories
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0b2912] to-[#154726] rounded-xl p-5 text-white shadow-lg font-inter">
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/5" />
          <div className="absolute -right-2 -bottom-8 w-28 h-28 rounded-full bg-white/5" />
          <div className="flex items-start gap-4 mb-3">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#F2B40E]/15 border border-[#F2B40E]/40 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#F2B40E]" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-poppins font-semibold text-[18px] mb-1 tracking-tight">
                Stay Ahead.
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed font-inter">
                Get the latest organic industry news, sustainability insights and Bharat Organic
                Expo updates in your inbox.
              </p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubscribe} className="space-y-2 relative z-10 font-inter">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 rounded-md text-sm text-gray-800 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2B40E] transition-shadow duration-300 font-inter"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-md bg-[#F2B40E] text-[#0b2912] text-[12px] font-bold uppercase tracking-wider hover:bg-[#ffc533] transition-all duration-300 hover:shadow-lg active:scale-95 font-poppins"
              >
                {subscribed ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
            <p className="text-[11px] text-white/50 mt-2 font-inter">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </Reveal>
    </aside>
  );
};

export default BlogSidebar;
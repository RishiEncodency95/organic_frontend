"use client";

import React, { useEffect, useState } from "react";
import {
  Apple, Award, BookOpen, CalendarDays, FileText, Globe, Heart, Leaf, Lightbulb, Mail, Megaphone,
  Newspaper, Package, Recycle, Sprout, TrendingUp, UsersRound, type LucideIcon,
} from "lucide-react";
import { Reveal } from "./BlogReveal";
import Link from "next/link";
import { API_URL } from "@/lib/api";
import { ALL_ARTICLES_PATH } from "./BlogFeatured";

/* Icon and colour keys chosen in the admin (Blog & Awareness → Manage Categories) */
const ICONS: Record<string, LucideIcon> = {
  newspaper: Newspaper, sprout: Sprout, apple: Apple, package: Package, recycle: Recycle,
  lightbulb: Lightbulb, "file-text": FileText, "book-open": BookOpen, leaf: Leaf, heart: Heart,
  users: UsersRound, megaphone: Megaphone, calendar: CalendarDays, globe: Globe, award: Award,
  "trending-up": TrendingUp,
};
const COLORS: Record<string, string> = {
  sky: "text-sky-100 bg-sky-800", green: "text-green-100 bg-green-800", emerald: "text-emerald-100 bg-emerald-800",
  orange: "text-orange-100 bg-orange-800", teal: "text-teal-100 bg-teal-800", amber: "text-amber-100 bg-amber-800",
  rose: "text-rose-100 bg-rose-800", cyan: "text-cyan-100 bg-cyan-800", lime: "text-lime-100 bg-lime-800",
  indigo: "text-indigo-100 bg-indigo-800", violet: "text-violet-100 bg-violet-800", slate: "text-slate-100 bg-slate-700",
};

type BlogCategory = { _id: string; name: string; icon: string; color: string; postCount: number };

const blogSidebarData = {
  categoriesTitle: "Explore Categories",
  newsletter: {
    title: "Stay Ahead.",
    description: "Get the latest organic industry news, sustainability insights and Bharat Organic Expo updates in your inbox.",
    inputPlaceholder: "Enter your email",
    buttonText: "Subscribe",
    subscribedText: "Subscribed ✓",
    footerText: "No spam. Unsubscribe anytime."
  }
};

const BlogSidebar = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  // null while loading; the published categories from the admin, in their order
  const [categories, setCategories] = useState<BlogCategory[] | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/blog-categories`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => active && setCategories(Array.isArray(json?.data) ? json.data : []))
      .catch(() => active && setCategories([]));
    return () => {
      active = false;
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2500);
    setEmail("");
  };

  return (
    <aside className="space-y-5 lg:sticky lg:top-24 self-start font-inter">
      {/* Not wrapped in Reveal: its loading placeholder shows from the first paint */}
      {categories?.length !== 0 && (
        <div
          className="bg-white rounded-xl p-5 font-inter"
          style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
        >
          <h3 className="font-poppins font-semibold text-[15px] sm:text-[16px] text-[#1b5e20] mb-3 tracking-tight whitespace-nowrap">
            {blogSidebarData.categoriesTitle}
          </h3>
          {/* Ten rows (40px each + 2px gaps) are visible; more categories scroll inside the card */}
          <ul className="space-y-0.5 max-h-[418px] overflow-y-auto overscroll-contain px-2 -mx-2 [scrollbar-width:thin] [scrollbar-color:#cfe3d3_transparent] [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#cfe3d3]">
            {categories === null
              ? Array.from({ length: 6 }, (_, i) => (
                  <li key={i} className="flex items-center justify-between py-1.5" aria-hidden="true">
                    <span className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-gray-100 animate-pulse" />
                      <span className="h-3 w-28 rounded bg-gray-100 animate-pulse" />
                    </span>
                    <span className="h-3 w-5 rounded bg-gray-100 animate-pulse" />
                  </li>
                ))
              : categories.map((c) => {
                  const Icon = ICONS[c.icon] ?? Newspaper;
                  return (
                    <li key={c._id}>
                    <Link
                      href={`${ALL_ARTICLES_PATH}?category=${encodeURIComponent(c.name)}`}
                      className="group flex items-center justify-between py-1.5 px-2 -mx-2 rounded-lg hover:bg-[#f4fcf6] transition-colors duration-250 font-inter"
                    >
                      <span className="flex min-w-0 items-center gap-2.5 text-[13px] font-medium text-gray-700 group-hover:text-[#1b5e20] transition-colors">
                        <span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${COLORS[c.color] ?? COLORS.green} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className="truncate">{c.name}</span>
                      </span>
                      <span className="ml-3 shrink-0 text-xs text-gray-500 font-medium font-inter">{c.postCount}</span>
                    </Link>
                    </li>
                  );
                })}
          </ul>
        </div>
      )}

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
                {blogSidebarData.newsletter.title}
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed font-inter">
                {blogSidebarData.newsletter.description}
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
                placeholder={blogSidebarData.newsletter.inputPlaceholder}
                className="w-full px-3.5 py-2.5 rounded-md text-sm text-gray-800 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2B40E] transition-shadow duration-300 font-inter"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-md bg-[#F2B40E] text-[#0b2912] text-[12px] font-bold uppercase tracking-wider hover:bg-[#ffc533] transition-all duration-300 hover:shadow-lg active:scale-95 font-poppins"
              >
                {subscribed ? blogSidebarData.newsletter.subscribedText : blogSidebarData.newsletter.buttonText}
              </button>
            </form>
            <p className="text-[11px] text-white/50 mt-2 font-inter">{blogSidebarData.newsletter.footerText}</p>
          </div>
        </div>
      </Reveal>
    </aside>
  );
};

export default BlogSidebar;
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import { Reveal } from "./BlogReveal";
import latestImg1 from "../../assets/blog/latest_1.webp";
import latestImg2 from "../../assets/blog/latest_2.webp";
import Image from "next/image";
import { API_URL } from "@/lib/api";

const blogLatestData = {
  title: "Latest from Bharat Organic Expo",
  actionText: "View all",
};

/** Where "View all" goes */
export const ALL_UPDATES_PATH = "/blog/updates";
/** How many updates the /blog page shows */
const BLOG_PAGE_UPDATES = 2;
const DEFAULT_IMAGES = [latestImg1.src, latestImg2.src];

type Update = { _id: string; tag: string; title: string; desc: string; img: string; date: string; read: string; link: string };

type UpdateApi = { _id: string; tag: string; title: string; description: string; image?: string; date: string; readMinutes?: number; link?: string };

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
};

/** Published updates from the admin (Blog & Insights → Manage Updates); null while loading */
function useBlogUpdates() {
  const [updates, setUpdates] = useState<Update[] | null>(null);
  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/blog-updates`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!active) return;
        const list: UpdateApi[] = Array.isArray(json?.data) ? json.data : [];
        setUpdates(
          list.map((u, i) => ({
            _id: u._id,
            tag: u.tag,
            title: u.title,
            desc: u.description,
            img: u.image || DEFAULT_IMAGES[i % DEFAULT_IMAGES.length],
            date: formatDate(u.date),
            read: `${u.readMinutes || 3} min read`,
            link: u.link || "",
          }))
        );
      })
      .catch(() => active && setUpdates([]));
    return () => {
      active = false;
    };
  }, []);
  return updates;
}

const cardClass = "group block h-full rounded-xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 font-inter";
const cardShadow = { boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" };

function UpdateCard({ u, i }: { u: Update; i: number }) {
  const body = (
    <>
      <div className="relative overflow-hidden h-[160px] bg-gray-100">
        <Image width={0} height={0} sizes="100vw" src={u.img} alt={u.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <span className="absolute top-2 left-2 bg-[#1b5e20] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded font-poppins">
          {u.tag}
        </span>
      </div>
      <div className="p-3.5">
        <h3 className="font-poppins font-semibold text-[15px] sm:text-[16px] text-[#1b5e20] leading-snug line-clamp-2 group-hover:text-[#3b8c2a] transition-colors">
          {u.title}
        </h3>
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
    </>
  );
  const external = /^https?:\/\//i.test(u.link);
  return (
    <Reveal delay={(i % 10) * 100} direction={i % 2 === 0 ? "left" : "right"} className="h-full">
      {!u.link ? (
        <div className={cardClass} style={cardShadow}>{body}</div>
      ) : external ? (
        <a href={u.link} target="_blank" rel="noopener noreferrer" className={cardClass} style={cardShadow}>{body}</a>
      ) : (
        <Link href={u.link} className={cardClass} style={cardShadow}>{body}</Link>
      )}
    </Reveal>
  );
}

function UpdateSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-gray-100" aria-hidden="true" style={cardShadow}>
      <div className="h-[160px] bg-gray-100 animate-pulse" />
      <div className="p-3.5 space-y-2">
        <div className="h-4 w-4/5 rounded bg-gray-100 animate-pulse" />
        <div className="h-3 w-full rounded bg-gray-100 animate-pulse" />
        <div className="h-3 w-2/3 rounded bg-gray-100 animate-pulse" />
        <div className="flex gap-3 pt-2 mt-1 border-t border-gray-100">
          <div className="h-3 w-20 rounded bg-gray-100 animate-pulse" />
          <div className="h-3 w-14 rounded bg-gray-100 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

const BlogLatest = () => {
  const updates = useBlogUpdates();
  if (updates && updates.length === 0) return null;
  return (
    <section className="container mx-auto max-w-[1400px] px-6 lg:px-0 py-2 md:py-4 font-inter">
      <SectionHeading action={blogLatestData.actionText} actionHref={ALL_UPDATES_PATH}>{blogLatestData.title}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {updates === null
          ? Array.from({ length: BLOG_PAGE_UPDATES }, (_, i) => <UpdateSkeleton key={i} />)
          : updates.slice(0, BLOG_PAGE_UPDATES).map((u, i) => <UpdateCard key={u._id} u={u} i={i} />)}
      </div>
    </section>
  );
};

/** "View all" page: every published update */
export function BlogAllUpdates() {
  const updates = useBlogUpdates();
  return (
    <section className="w-full px-6 lg:px-14 py-4 md:py-6 font-inter">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <SectionHeading as="h1">{blogLatestData.title}</SectionHeading>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#3b8c2a] hover:text-[#2d7a2d] transition-colors mb-3"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </div>
      {updates !== null && (
        <p className="text-[12px] text-gray-500 mb-3">
          {updates.length} update{updates.length === 1 ? "" : "s"}
        </p>
      )}
      {updates !== null && updates.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 bg-[#f9fcf9] px-6 py-14 text-center">
          <p className="text-[15px] font-semibold text-[#1b5e20]">No updates to show yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {updates === null
            ? Array.from({ length: 8 }, (_, i) => <UpdateSkeleton key={i} />)
            : updates.map((u, i) => <UpdateCard key={u._id} u={u} i={i} />)}
        </div>
      )}
    </section>
  );
}

export default BlogLatest;

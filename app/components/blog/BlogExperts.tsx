"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./BlogSectionHeading";
import { Reveal } from "./BlogReveal";
import expertImg from "../../assets/blog/expert.webp";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { API_URL } from "@/lib/api";

const expertPhoto = expertImg.src;

/** Where "View all experts" goes */
export const ALL_EXPERTS_PATH = "/blog/experts";

const blogExpertsData = {
  title: "Voices of Experts",
  actionText: "View all experts",
};

/** How many experts the /blog page shows; "View all experts" lists the rest */
const BLOG_PAGE_EXPERTS = 5;

type Expert = { _id: string; name: string; role: string; quote: string; img: string };

/** Published experts from the admin (Blog & Insights → Blog Experts); null while loading */
function useBlogExperts() {
  const [experts, setExperts] = useState<Expert[] | null>(null);
  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/blog-experts`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!active) return;
        const list: { _id: string; name: string; role: string; quote: string; image?: string }[] = Array.isArray(json?.data) ? json.data : [];
        setExperts(list.map((e) => ({ _id: e._id, name: e.name, role: e.role, quote: e.quote, img: e.image || expertPhoto })));
      })
      .catch(() => active && setExperts([]));
    return () => {
      active = false;
    };
  }, []);
  return experts;
}

function ExpertSkeleton() {
  return (
    <div className="bg-white rounded-xl p-4 h-full border border-gray-100" aria-hidden="true">
      <div className="w-12 h-12 rounded-full bg-gray-100 animate-pulse mb-3" />
      <div className="h-3.5 w-3/4 rounded bg-gray-100 animate-pulse mb-2" />
      <div className="h-3 w-1/2 rounded bg-gray-100 animate-pulse mb-3" />
      <div className="h-3 w-full rounded bg-gray-100 animate-pulse mb-1.5" />
      <div className="h-3 w-5/6 rounded bg-gray-100 animate-pulse" />
    </div>
  );
}

function ExpertCard({ e, i }: { e: Expert; i: number }) {
  return (
          <Reveal delay={i * 80} direction={i % 2 === 0 ? "left" : "right"}>
            <div
              className="bg-white rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col font-inter"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >
              <Image width={0} height={0} sizes="100vw"
                src={e.img}
                alt={e.name}
                className="w-12 h-12 rounded-full object-cover mb-3 ring-2 ring-[#e8f2eb]"
              />
              <h3 className="font-poppins font-semibold text-[14px] sm:text-[15px] text-[#1b5e20] leading-snug">
                {e.name}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-gray-500 mb-2 font-medium font-inter">{e.role}</p>
              <p className="text-[12px] text-gray-600 italic leading-relaxed flex-1 font-inter">&ldquo;{e.quote}&rdquo;</p>
              {/* Read More hidden on request (no expert detail page yet)
              <a href="#" className="group mt-3 text-[11px] sm:text-[12px] font-semibold text-[#3b8c2a] uppercase tracking-wider flex items-center gap-1 font-poppins">
                Read More
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              */}
            </div>
          </Reveal>
  );
}

const BlogExperts = () => {
  const experts = useBlogExperts();
  if (experts && experts.length === 0) return null;
  return (
    <section className="mt-6 md:mt-8 font-inter">
      <SectionHeading action={blogExpertsData.actionText} actionHref={ALL_EXPERTS_PATH}>{blogExpertsData.title}</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {experts === null
          ? Array.from({ length: BLOG_PAGE_EXPERTS }, (_, i) => <ExpertSkeleton key={i} />)
          : experts.slice(0, BLOG_PAGE_EXPERTS).map((e, i) => <ExpertCard key={e._id} e={e} i={i} />)}
      </div>
    </section>
  );
};

/** "View all experts" page: every expert, same cards */
export function BlogAllExperts() {
  const experts = useBlogExperts();
  return (
    <section className="w-full px-6 lg:px-14 py-4 md:py-6 font-inter">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <SectionHeading>{blogExpertsData.title}</SectionHeading>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#3b8c2a] hover:text-[#2d7a2d] transition-colors mb-3"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </div>
      {experts !== null && (
        <p className="text-[12px] text-gray-500 mb-3">
          {experts.length} expert{experts.length === 1 ? "" : "s"}
        </p>
      )}
      {experts !== null && experts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 bg-[#f9fcf9] px-6 py-14 text-center">
          <p className="text-[15px] font-semibold text-[#1b5e20]">No experts to show yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {experts === null
            ? Array.from({ length: 10 }, (_, i) => <ExpertSkeleton key={i} />)
            : experts.map((e, i) => <ExpertCard key={e._id} e={e} i={i % 10} />)}
        </div>
      )}
    </section>
  );
}

export default BlogExperts;
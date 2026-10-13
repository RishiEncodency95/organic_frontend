"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import ArticleCard, { BlogArticle } from "./BlogArticleCard";
import featuredImg1 from "../../assets/blog/featured_article1.webp";
import { API_URL } from "@/lib/api";
import { blogPostToArticle, type BlogPostApi } from "./blogPostToArticle";

const PAGE_SIZE = 12;

type Category = { _id: string; name: string; postCount: number };

/** Every published blog post as cards, newest first, with a category filter and "Load more" */
export default function BlogAllArticles({ initialCategory = "" }: { initialCategory?: string }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState(initialCategory);
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/blog-categories`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => setCategories(Array.isArray(json?.data) ? json.data.filter((c: Category) => c.postCount > 0) : []))
      .catch(() => setCategories([]));
  }, []);

  const load = useCallback(async (cat: string, pageNo: number) => {
    setLoading(true);
    setError("");
    try {
      const qs = new URLSearchParams({ status: "published", page: String(pageNo), limit: String(PAGE_SIZE) });
      if (cat) qs.set("category", cat);
      const res = await fetch(`${API_URL}/blogs?${qs}`, { cache: "no-store" });
      if (!res.ok) throw new Error(String(res.status));
      const json = await res.json();
      const data = json?.data ?? json;
      const posts: BlogPostApi[] = Array.isArray(data?.posts) ? data.posts : [];
      const cards = posts.map((p) => blogPostToArticle(p, featuredImg1));
      setArticles((prev) => (pageNo === 1 ? cards : [...prev, ...cards]));
      setPage(pageNo);
      setTotalPages(Math.max(1, Number(data?.totalPages) || 1));
      setTotal(Number(data?.total) || cards.length);
    } catch {
      setError("Could not load the articles. Please try again.");
      if (pageNo === 1) setArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch whenever the category changes
    void load(category, 1);
  }, [category, load]);

  const choose = (cat: string) => {
    setCategory(cat);
    // Keep the address shareable (/blog/all-articles?category=…) without a navigation
    const url = cat ? `?category=${encodeURIComponent(cat)}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  };

  const chip = (active: boolean) =>
    `px-3.5 py-1.5 rounded-full text-[12px] font-semibold border transition-colors font-poppins ${
      active ? "bg-[#1b5e20] border-[#1b5e20] text-white" : "bg-white border-gray-200 text-gray-700 hover:border-[#3b8c2a] hover:text-[#1b5e20]"
    }`;

  return (
    <section className="w-full px-6 lg:px-14 py-4 md:py-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <SectionHeading as="h1">{category ? category : "All Articles"}</SectionHeading>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#3b8c2a] hover:text-[#2d7a2d] transition-colors mb-3"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </div>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5" role="group" aria-label="Filter by category">
          <button type="button" className={chip(!category)} onClick={() => choose("")} aria-pressed={!category}>
            All
          </button>
          {categories.map((c) => (
            <button key={c._id} type="button" className={chip(category === c.name)} onClick={() => choose(c.name)} aria-pressed={category === c.name}>
              {c.name} <span className="opacity-70">({c.postCount})</span>
            </button>
          ))}
        </div>
      )}

      {!loading && !error && (
        <p className="text-[12px] text-gray-500 mb-3 font-inter">
          Showing {articles.length} of {total} article{total === 1 ? "" : "s"}
        </p>
      )}

      {loading && articles.length === 0 ? (
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-busy="true">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-100 bg-white">
              <div className="h-[190px] md:h-[210px] bg-gray-100 animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-4 w-4/5 rounded bg-gray-100 animate-pulse" />
                <div className="h-3 w-full rounded bg-gray-100 animate-pulse" />
                <div className="h-3 w-2/3 rounded bg-gray-100 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      ) : articles.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 bg-[#f9fcf9] px-6 py-14 text-center font-inter">
          <p className="text-[15px] font-semibold text-[#1b5e20]">{error || "No articles here yet."}</p>
          {error ? (
            <button type="button" onClick={() => void load(category, 1)} className="mt-3 text-[13px] font-semibold text-[#3b8c2a] underline">
              Try again
            </button>
          ) : (
            category && (
              <button type="button" onClick={() => choose("")} className="mt-3 text-[13px] font-semibold text-[#3b8c2a] underline">
                See all articles
              </button>
            )
          )}
        </div>
      ) : (
        <>
          <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((a, i) => (
              <ArticleCard key={a.slug || i} a={a} delay={(i % PAGE_SIZE) * 40} direction="up" />
            ))}
          </div>

          {error && <p className="mt-4 text-center text-[13px] font-semibold text-red-600">{error}</p>}

          {page < totalPages && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => void load(category, page + 1)}
                disabled={loading}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-[#1b5e20] text-white text-[12px] font-bold uppercase tracking-wider hover:bg-[#2d7a2d] transition-colors disabled:opacity-60 font-poppins"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                Load more articles
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import { Reveal } from "./BlogReveal";
import { API_URL } from "@/lib/api";

/*
 * "Reports & Resources" — PDFs uploaded in the admin (Blog & Insights → Manage Reports).
 * Each row downloads its file through the backend, which counts the download.
 */

const blogReportsData = {
  title: "Reports & Resources",
  actionText: "View all",
};

/** Where "View all" goes */
export const ALL_REPORTS_PATH = "/blog/reports";
/** How many reports the /blog page shows */
const BLOG_PAGE_REPORTS = 5;

/** `hasFile` is false until the PDF is uploaded in the admin — the row then shows "Coming soon" */
type Report = { _id: string; title: string; description: string; fileSize: number; hasFile?: boolean };

/** 2621440 → "2.5 MB", 972800 → "950 KB" */
const formatFileSize = (bytes: number) =>
  !bytes ? "" : bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1).replace(/\.0$/, "")} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;

const downloadUrl = (id: string) => `${API_URL}/blog-reports/${id}/download`;

/** Published reports from the admin; null while loading */
function useBlogReports() {
  const [reports, setReports] = useState<Report[] | null>(null);
  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/blog-reports`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => active && setReports(Array.isArray(json?.data) ? json.data : []))
      .catch(() => active && setReports([]));
    return () => {
      active = false;
    };
  }, []);
  return reports;
}

const listShadow = { boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" };

function ReportRow({ r, i, showDescription = false }: { r: Report; i: number; showDescription?: boolean }) {
  const size = formatFileSize(r.fileSize);
  const available = r.hasFile !== false;
  const body = (
    <>
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 w-9 h-9 rounded-lg bg-[#3b8c2a]/10 text-[#3b8c2a] flex items-center justify-center">
            <FileText className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <h3 className="font-poppins font-semibold text-[14px] text-[#1b5e20] truncate group-hover:text-[#3b8c2a] transition-colors">{r.title}</h3>
            {showDescription && r.description && <p className="text-[12px] text-gray-600 font-inter line-clamp-2">{r.description}</p>}
            <p className="text-[12px] text-gray-500 font-medium font-inter">{available ? `PDF${size ? ` · ${size}` : ""}` : "PDF · Coming soon"}</p>
          </div>
        </div>
        {available ? (
          <Download className="w-4 h-4 text-gray-400 shrink-0 transition-all duration-300 group-hover:text-[#3b8c2a] group-hover:translate-y-0.5" />
        ) : (
          <span className="shrink-0 rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-semibold text-amber-700">Soon</span>
        )}
    </>
  );
  return (
    <Reveal delay={(i % 10) * 60} direction={i % 2 === 0 ? "left" : "right"}>
      {available ? (
        <a
          href={downloadUrl(r._id)}
          download
          rel="nofollow"
          aria-label={`Download ${r.title} (PDF${size ? `, ${size}` : ""})`}
          className="group flex items-center justify-between gap-3 px-4 sm:px-5 py-3 hover:bg-[#f4fcf6] transition-colors duration-300"
        >
          {body}
        </a>
      ) : (
        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3" title="This report will be available to download soon">
          {body}
        </div>
      )}
    </Reveal>
  );
}

function ReportSkeleton({ rows }: { rows: number }) {
  return (
    <>
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="flex items-center gap-3 px-4 sm:px-5 py-3" aria-hidden="true">
          <span className="shrink-0 w-9 h-9 rounded-lg bg-gray-100 animate-pulse" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3.5 w-3/4 rounded bg-gray-100 animate-pulse" />
            <div className="h-3 w-1/4 rounded bg-gray-100 animate-pulse" />
          </div>
        </div>
      ))}
    </>
  );
}

/** Shown while no report is published yet, so the section (and the blog page layout) stays in place */
function ReportsComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-10 text-center">
      <span className="w-11 h-11 rounded-xl bg-[#3b8c2a]/10 text-[#3b8c2a] flex items-center justify-center">
        <FileText className="w-5 h-5" />
      </span>
      <p className="font-poppins font-semibold text-[14px] text-[#1b5e20]">Reports coming soon</p>
      <p className="text-[12px] text-gray-500 max-w-[240px] leading-relaxed">
        Industry reports, market outlooks and guides will be available to download here.
      </p>
    </div>
  );
}

const BlogReports = () => {
  const reports = useBlogReports();
  return (
    <section className="container mx-auto max-w-[1400px] px-6 lg:px-0 py-2 md:py-4 font-inter">
      <SectionHeading action={blogReportsData.actionText} actionHref={ALL_REPORTS_PATH}>{blogReportsData.title}</SectionHeading>
      <div className="bg-white rounded-xl divide-y divide-gray-100 overflow-hidden font-inter" style={listShadow}>
        {reports === null ? (
          <ReportSkeleton rows={BLOG_PAGE_REPORTS} />
        ) : reports.length === 0 ? (
          <ReportsComingSoon />
        ) : (
          reports.slice(0, BLOG_PAGE_REPORTS).map((r, i) => <ReportRow key={r._id} r={r} i={i} />)
        )}
      </div>
    </section>
  );
};

/** "View all" page: every published report */
export function BlogAllReports() {
  const reports = useBlogReports();
  return (
    <section className="w-full px-6 lg:px-14 py-4 md:py-6 font-inter">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <SectionHeading as="h1">{blogReportsData.title}</SectionHeading>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#3b8c2a] hover:text-[#2d7a2d] transition-colors mb-3"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </div>
      {reports !== null && (
        <p className="text-[12px] text-gray-500 mb-3">
          {reports.length} report{reports.length === 1 ? "" : "s"}
        </p>
      )}
      {reports !== null && reports.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 bg-[#f9fcf9]">
          <ReportsComingSoon />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {reports === null ? (
            <div className="bg-white rounded-xl divide-y divide-gray-100 overflow-hidden md:col-span-2" style={listShadow}>
              <ReportSkeleton rows={6} />
            </div>
          ) : (
            reports.map((r, i) => (
              <div key={r._id} className="bg-white rounded-xl overflow-hidden" style={listShadow}>
                <ReportRow r={r} i={i} showDescription />
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default BlogReports;

"use client";

import React from "react";
import { Loader2, MessageCircle } from "lucide-react";
import { useNewsletterForm } from "@/lib/newsletter";

/** "Stay Updated" subscribe form in a blog article's sidebar */
export default function BlogArticleNewsletterForm() {
  const n = useNewsletterForm("Blog Article");
  return (
    <form className="space-y-2.5" onSubmit={n.submit} noValidate>
      <input
        type="email"
        placeholder="Enter your email"
        value={n.email}
        onChange={(e) => n.setEmail(e.target.value)}
        maxLength={254}
        autoComplete="email"
        aria-label="Email address"
        className="w-full px-3 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#34A853] focus:ring-1 focus:ring-[#34A853] bg-white text-[13px]"
      />
      <button
        type="submit"
        disabled={n.busy}
        className="w-full bg-[#2D6A4F] text-white font-medium py-2.5 rounded-md hover:bg-[#1B4332] disabled:opacity-60 transition-colors text-[13px] flex items-center justify-center gap-1.5"
      >
        {n.busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <MessageCircle className="w-4 h-4" />} {n.busy ? "Subscribing…" : "Subscribe Now"}
      </button>
      {n.result && (
        <p role="status" className={`text-[12px] font-medium ${n.result.ok ? "text-[#1B4332]" : "text-red-600"}`}>
          {n.result.message}
        </p>
      )}
    </form>
  );
}

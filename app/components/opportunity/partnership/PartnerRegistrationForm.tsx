"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { API_URL, postResult } from "@/lib/api";
import { emailProblem } from "@/lib/emailCheck";
import { toOptions, useDropdowns } from "@/lib/dropdowns";

/*
 * The "Partner with us" form shared by the six partner pages (hotel & stay, travel, logistics,
 * stall design, printing & branding, manpower supply). Sends to POST /partnership-enquiry/partner;
 * submissions show in Admin → Partnership Enquiries.
 */

// Admin-managed (Dropdown Manager); these lists are the fallback.
const PARTNER_DROPDOWNS = {
  "partner-state": toOptions(["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Uttar Pradesh", "Haryana", "Telangana", "West Bengal", "Other"]),
  "partner-preferred-category": toOptions(["Hotel & Stay Partner", "Travel Partner", "Logistics Partner", "Stall Design Partner", "Manpower Supply Partner", "Printing & Branding Partner"]),
};

const NAME_RE = /^\p{L}[\p{L}\p{M} .'-]{1,59}$/u;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;

type Form = {
  name: string;
  designation: string;
  email: string;
  phone: string;
  organization: string;
  website: string;
  city: string;
  state: string;
  category: string;
  message: string;
};

const inputCls =
  "w-full px-4 py-2 border rounded-md bg-white text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#113217] focus:border-[#113217]";

const validate = (f: Form, agreed: boolean): Partial<Record<keyof Form | "agreed", string>> => {
  const e: Partial<Record<keyof Form | "agreed", string>> = {};
  if (!f.name.trim()) e.name = "Full name is required.";
  else if (!NAME_RE.test(f.name.trim())) e.name = "Use letters only (2–60).";
  if (!f.designation.trim()) e.designation = "Designation is required.";
  const em = emailProblem(f.email, "Email");
  if (em) e.email = em;
  if (!/^[6-9]\d{9}$/.test(f.phone)) e.phone = "Enter a valid 10-digit mobile number.";
  if (!f.organization.trim()) e.organization = "Organization name is required.";
  if (f.website.trim() && !URL_RE.test(f.website.trim())) e.website = "Enter a valid website, e.g. www.example.com.";
  if (!f.city.trim()) e.city = "City is required.";
  else if (!/^\p{L}[\p{L}\p{M} .'-]{1,59}$/u.test(f.city.trim())) e.city = "Use letters only.";
  if (!f.state) e.state = "Please select a state.";
  if (!f.category) e.category = "Please select a category.";
  const about = f.message.trim();
  if (!about) e.message = "Please tell us about your organization.";
  else if (about.length < 10) e.message = "Please write at least 10 characters.";
  else if (about.length > 1000) e.message = "Please keep it under 1000 characters.";
  if (!agreed) e.agreed = "Please accept the Terms & Conditions and Privacy Policy.";
  return e;
};

export default function PartnerRegistrationForm({ defaultCategory }: { defaultCategory: string }) {
  const dropdowns = useDropdowns(PARTNER_DROPDOWNS);
  const empty: Form = { name: "", designation: "", email: "", phone: "", organization: "", website: "", city: "", state: "", category: defaultCategory, message: "" };
  const [form, setForm] = useState<Form>(empty);
  const [agreed, setAgreed] = useState(false);
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState("");
  const [done, setDone] = useState(false);

  const errors = touched ? validate(form, agreed) : {};
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const v = k === "phone" ? e.target.value.replace(/\D/g, "").slice(0, 10) : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    setServerError("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (Object.keys(validate(form, agreed)).length) return;
    setBusy(true);
    setServerError("");
    const res = await postResult(`${API_URL}/partnership-enquiry/partner`, {
      ...form,
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      agreed,
    });
    setBusy(false);
    if (res.ok) {
      setDone(true);
      setForm(empty);
      setAgreed(false);
      setTouched(false);
    } else {
      setServerError(res.message);
    }
  };

  const field = (k: keyof Form) => `${inputCls} ${errors[k] ? "border-red-400" : "border-gray-200"}`;
  const err = (k: keyof Form | "agreed") => (errors[k] ? <p className="text-[11px] font-semibold text-red-600">{errors[k]}</p> : null);

  if (done) {
    return (
      <div className="relative z-10 flex flex-col items-center gap-3 py-10 text-center" role="status">
        <CheckCircle2 className="h-12 w-12 text-[#1b5e20]" />
        <h4 className="font-poppins text-lg font-semibold text-[#1b5e20]">Thank you! Your registration has been received.</h4>
        <p className="max-w-md text-sm text-gray-700">Our partnerships team will contact you within 2 working days.</p>
        <button type="button" onClick={() => setDone(false)} className="mt-2 text-xs font-bold uppercase tracking-wide text-[#113217] underline">
          Submit another registration
        </button>
      </div>
    );
  }

  return (
    <form className="relative z-10" onSubmit={submit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">Full Name <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Enter full name" value={form.name} onChange={set("name")} maxLength={60} className={field("name")} autoComplete="name" />
          {err("name")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">Designation <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Enter designation" value={form.designation} onChange={set("designation")} maxLength={80} className={field("designation")} autoComplete="organization-title" />
          {err("designation")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">Email Address <span className="text-red-500">*</span></label>
          <input type="email" placeholder="Enter email address" value={form.email} onChange={set("email")} maxLength={120} className={field("email")} autoComplete="email" />
          {err("email")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">Mobile Number <span className="text-red-500">*</span></label>
          <input type="tel" inputMode="numeric" placeholder="10-digit mobile number" value={form.phone} onChange={set("phone")} className={field("phone")} autoComplete="tel-national" />
          {err("phone")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">Organization / Company Name <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Enter organization name" value={form.organization} onChange={set("organization")} maxLength={150} className={field("organization")} autoComplete="organization" />
          {err("organization")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">Website (if any)</label>
          <input type="text" placeholder="www.example.com" value={form.website} onChange={set("website")} maxLength={200} className={field("website")} autoComplete="url" />
          {err("website")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">City <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Enter city" value={form.city} onChange={set("city")} maxLength={60} className={field("city")} autoComplete="address-level2" />
          {err("city")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">State <span className="text-red-500">*</span></label>
          <div className="relative">
            <select value={form.state} onChange={set("state")} className={`${field("state")} appearance-none ${!form.state ? "text-gray-500" : ""}`}>
              <option value="" disabled>Select state</option>
              {dropdowns["partner-state"].map((o) => (
                <option key={o.value} value={o.value} className="text-gray-900">{o.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {err("state")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-900">Preferred Partner Category <span className="text-red-500">*</span></label>
          <div className="relative">
            <select value={form.category} onChange={set("category")} className={`${field("category")} appearance-none`}>
              {dropdowns["partner-preferred-category"].map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {err("category")}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label className="text-xs font-bold text-gray-900">Tell Us About Your Organization <span className="text-red-500">*</span></label>
        <textarea
          rows={2}
          placeholder="Briefly describe your organization and how you would like to partner with us."
          value={form.message}
          onChange={set("message")}
          maxLength={1000}
          className={`${field("message")} resize-none`}
        />
        <div className="flex justify-between gap-2">
          {err("message") || <span />}
          <span className="text-[11px] text-gray-500">{form.message.trim().length}/1000</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center w-4 h-4">
              <input type="checkbox" className="peer sr-only" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
              <div className={`w-4 h-4 border rounded bg-white peer-checked:bg-[#113217] peer-checked:border-[#113217] transition-colors ${errors.agreed ? "border-red-400" : "border-gray-300"}`}></div>
              <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-bold text-gray-800 select-none">
              I agree to the{" "}
              <Link href="/registration/terms-and-conditions" target="_blank" className="text-[#1b5e20] underline-offset-2 hover:underline">Terms &amp; Conditions</Link>{" "}
              and{" "}
              <Link href="/registration/privacy-policy" target="_blank" className="text-[#1b5e20] underline-offset-2 hover:underline">Privacy Policy</Link>.
            </span>
          </label>
          {err("agreed")}
        </div>
        <button
          type="submit"
          disabled={busy}
          className="bg-[#113217] hover:bg-[#0b2912] disabled:opacity-60 text-white px-6 py-2.5 rounded-md font-semibold text-xs tracking-wide uppercase transition-colors flex items-center justify-center gap-2"
        >
          {busy ? <Loader2 size={14} className="animate-spin" /> : null}
          {busy ? "SUBMITTING…" : "SUBMIT REGISTRATION"} {!busy && <ArrowRight size={14} />}
        </button>
      </div>
      {serverError && <p className="mt-3 text-[12px] font-semibold text-red-600" role="alert">{serverError}</p>}
    </form>
  );
}

/** Google Maps link for the venue (the map pin on the partner pages' contact bar) */
export const VENUE_MAP_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Bharat Mandapam, Pragati Maidan, New Delhi");

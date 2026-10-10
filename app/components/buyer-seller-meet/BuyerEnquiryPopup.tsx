"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import gsap from "gsap";
import { DotLottieReact } from "@/lib/dotLottie";
import { BadgeCheck, ChevronDown, ChevronRight, Loader2, Mail, Phone, X } from "lucide-react";
import leafImg from "../../assets/icons/vv.png";
import leafRightImg from "../../assets/icons/vv1.png";
import { API_URL, verifyApi } from "@/lib/api";
import { labelsOf, toOptions, useDropdowns } from "@/lib/dropdowns";
import { SITE_CONFIG } from "@/app/constants/siteConfig";
import Image from "next/image";

const COUNTRIES = [
  "India", "United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Nepal", "Bangladesh",
  "Sri Lanka", "Bhutan", "Singapore", "Malaysia", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Netherlands", "Other",
];

const BUYER_TYPES = [
  "Retailer", "Wholesaler / Distributor", "Importer", "Exporter", "Supermarket / Hypermarket", "E-commerce Platform",
  "HoReCa (Hotel / Restaurant / Café)", "Institutional Buyer", "Manufacturer / Processor", "Other",
];

const ENQUIRY_ABOUT = [
  "Buyer Registration Process", "Participation Fees", "Eligibility Criteria", "B2B Meeting Scheduling",
  "Hosted Buyer Programme", "Travel & Accommodation", "Other",
];

// Admin-managed (Dropdown Manager → Enquiries); the lists above are the fallbacks
const ENQUIRY_DROPDOWNS = {
  "buyer-enquiry-country": toOptions(COUNTRIES),
  "buyer-enquiry-type": toOptions(BUYER_TYPES),
  "buyer-enquiry-topic": toOptions(ENQUIRY_ABOUT),
};

type Form = {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  buyerType: string;
  about: string;
  message: string;
  consent: boolean;
};
type Errors = Partial<Record<keyof Form, string>>;

const EMPTY: Form = {
  name: "", company: "", phone: "", email: "", city: "", country: "", buyerType: "",
  about: ENQUIRY_ABOUT[0], message: "", consent: false,
};

// Same profile name the backend checks for (buyerEnquiry.service.ts)
const OTP_PROFILE = "BUYER_ENQUIRY";
const RESEND_SECONDS = 30;
const isValidPhone = (phone: string) => /^[6-9]\d{9}$/.test(phone);

const validate = (f: Form, phoneVerified: boolean): Errors => {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your full name.";
  if (!isValidPhone(f.phone)) e.phone = "Enter a valid 10-digit WhatsApp number.";
  else if (!phoneVerified) e.phone = "Please verify your WhatsApp number with OTP.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (!f.about) e.about = "Please choose a topic.";
  if (f.message.trim().length < 5) e.message = "Please write your question.";
  if (!f.consent) e.consent = "Please agree to be contacted.";
  return e;
};

const label = "block text-[12px] font-semibold text-slate-800 mb-1";
const req = <span className="text-[#dc2626]">*</span>;
const field = (error?: string) =>
  `w-full h-[36px] rounded-[5px] border bg-white px-3 text-[12.5px] text-slate-800 placeholder:text-slate-400 outline-none transition focus:ring-4 ${
    error ? "border-[#dc2626] focus:ring-[#dc2626]/10" : "border-[#cfd6d1] focus:border-[#2e7d32] focus:ring-[#2e7d32]/12"
  }`;

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? <p className="mt-0.5 text-[11px] font-medium text-[#dc2626]">{msg}</p> : null;

const Select = ({
  value, onChange, options, placeholder, error, ariaLabel,
}: { value: string; onChange: (v: string) => void; options: string[]; placeholder?: string; error?: string; ariaLabel: string }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={ariaLabel}
      className={`${field(error)} appearance-none pr-9 cursor-pointer ${value ? "" : "text-slate-400"}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o} className="text-slate-800">
          {o}
        </option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" aria-hidden="true" />
  </div>
);

export default function BuyerEnquiryPopup({ onClose, registerHref }: { onClose: () => void; registerHref: string }) {
  const [form, setForm] = useState<Form>(EMPTY);
  const dropdowns = useDropdowns(ENQUIRY_DROPDOWNS);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [sent, setSent] = useState(false);
  // The tick animation starts once the card has flipped to the thank-you side
  const [tickReady, setTickReady] = useState(false);

  // WhatsApp OTP
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [otpBusy, setOtpBusy] = useState<"" | "sending" | "verifying">("");
  const [otpMsg, setOtpMsg] = useState<{ tone: "info" | "error"; text: string } | null>(null);
  const [resendIn, setResendIn] = useState(0);

  useEffect(() => {
    if (resendIn <= 0) return;
    const t = setTimeout(() => setResendIn((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendIn]);

  const changePhone = (value: string) => {
    const phone = value.replace(/\D/g, "").slice(0, 10);
    setForm((f) => ({ ...f, phone }));
    if (errors.phone) setErrors((e) => ({ ...e, phone: undefined }));
    // A different number has to be verified again
    if (phone !== form.phone) {
      setPhoneVerified(false);
      setOtpSent(false);
      setOtp("");
      setOtpMsg(null);
      setResendIn(0);
    }
  };

  const sendOtp = async () => {
    if (!isValidPhone(form.phone)) {
      setErrors((e) => ({ ...e, phone: "Enter a valid 10-digit WhatsApp number." }));
      return;
    }
    setOtpBusy("sending");
    setOtpMsg(null);
    try {
      const res = await verifyApi.sendPhoneOtp(form.phone, OTP_PROFILE, form.name.trim());
      if (res?.success === false) throw new Error(res?.message || res?.msg || "Could not send the OTP.");
      setOtpSent(true);
      setOtp("");
      setResendIn(RESEND_SECONDS);
      setOtpMsg({ tone: "info", text: `OTP sent on WhatsApp to +91 ${form.phone}.` });
    } catch (err) {
      setOtpMsg({ tone: "error", text: (err as Error)?.message || "Could not send the OTP. Please try again." });
    } finally {
      setOtpBusy("");
    }
  };

  const confirmOtp = async () => {
    if (!/^\d{6}$/.test(otp)) {
      setOtpMsg({ tone: "error", text: "Enter the 6-digit OTP." });
      return;
    }
    setOtpBusy("verifying");
    setOtpMsg(null);
    try {
      const res = await verifyApi.verifyPhoneOtp(form.phone, otp);
      if (res?.success === false) throw new Error(res?.message || res?.msg || "Invalid OTP.");
      setPhoneVerified(true);
      setOtpSent(false);
      setErrors((e) => ({ ...e, phone: undefined }));
    } catch (err) {
      setOtpMsg({ tone: "error", text: (err as Error)?.message || "Invalid or expired OTP." });
    } finally {
      setOtpBusy("");
    }
  };

  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);
  const reduceMotion = useRef(false);

  const set = <K extends keyof Form>(key: K, value: Form[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  // Opening: the card flips in like a 3D door from the side, then the fields rise in one by one.
  useLayoutEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion.current) {
        gsap.set([overlayRef.current, cardRef.current], { autoAlpha: 1 });
        return;
      }
      gsap.timeline()
        .fromTo(overlayRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: "power1.out" })
        .fromTo(
          cardRef.current,
          { autoAlpha: 0, rotationY: -95, rotationX: 12, z: -260, scale: 0.86, transformPerspective: 1600, transformOrigin: "50% 50%" },
          { autoAlpha: 1, rotationY: 0, rotationX: 0, z: 0, scale: 1, duration: 0.9, ease: "back.out(1.15)" },
          0.05
        )
        .fromTo(
          cardRef.current?.querySelectorAll("[data-bq-anim]") ?? [],
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out", clearProps: "transform" },
          "-=0.45"
        )
        .fromTo(
          cardRef.current?.querySelectorAll("[data-bq-leaf]") ?? [],
          { autoAlpha: 0, rotate: -18, scale: 0.6 },
          { autoAlpha: 1, rotate: 0, scale: 1, duration: 0.7, ease: "back.out(2)", stagger: 0.1 },
          "-=0.7"
        );
    });
    return () => ctx.revert();
  }, []);

  // Closing: the card flips away the other way, then the popup unmounts.
  const close = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    if (reduceMotion.current) return onClose();
    gsap.timeline({ onComplete: onClose })
      .to(cardRef.current, { autoAlpha: 0, rotationY: 90, z: -200, scale: 0.9, duration: 0.42, ease: "power2.in", transformPerspective: 1600 })
      .to(overlayRef.current, { autoAlpha: 0, duration: 0.22 }, "-=0.15");
  };

  // After a successful submit the thank-you side closes by itself.
  useEffect(() => {
    if (!tickReady) return;
    const t = setTimeout(() => close(), 6000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickReady]);

  // Esc closes; the page behind does not scroll while the popup is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      html.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form, phoneVerified);
    setErrors(found);
    if (Object.keys(found).length) return;

    setSubmitting(true);
    setServerError("");
    try {
      const response = await fetch(`${API_URL}/buyer-enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          phone: form.phone,
          email: form.email.trim().toLowerCase(),
          city: form.city.trim(),
          country: form.country,
          buyerType: form.buyerType,
          enquiryAbout: form.about,
          message: form.message.trim(),
          consent: form.consent,
        }),
      });
      const res = await response.json().catch(() => null);
      if (!response.ok || res?.success === false) throw new Error(res?.message || "Could not send your enquiry.");
      setSent(true);
      // Flip the card over to the thank-you side, then bring its content in one by one
      const thanks = flipRef.current?.querySelectorAll("[data-bq-thanks]") ?? [];
      if (!reduceMotion.current) {
        gsap.set(thanks, { autoAlpha: 0, y: 14 });
        gsap.timeline()
          .fromTo(flipRef.current, { rotationY: 0 }, { rotationY: 180, duration: 0.85, ease: "power3.inOut", onComplete: () => setTickReady(true) })
          .to(thanks, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power2.out", clearProps: "transform" }, "-=0.15");
      } else {
        gsap.set(flipRef.current, { rotationY: 180 });
        setTickReady(true);
      }
    } catch (err) {
      setServerError((err as Error)?.message || "Could not send your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const phoneHref = `tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`;

  return createPortal(
    <div
      ref={overlayRef}
      style={{ visibility: "hidden" }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0b1f10]/55 backdrop-blur-[3px] p-3 sm:p-5"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="buyer-enquiry-title"
        style={{ visibility: "hidden" }}
        className="relative w-full max-w-[660px] [perspective:1600px]"
      >
        <div ref={flipRef} className="relative [transform-style:preserve-3d]">
          {/* ───────── Front: the form ───────── */}
          <div className="relative [backface-visibility:hidden] max-h-[94svh] overflow-y-auto overflow-x-hidden overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-[16px] bg-white shadow-[0_40px_90px_-25px_rgba(6,40,16,0.65)] ring-1 ring-black/5" data-lenis-prevent>
            <Image width={0} height={0} sizes="100vw"
              data-bq-leaf
              src={leafImg.src}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 w-[78px] sm:w-[96px] h-auto drop-shadow-sm"
            />
            <Image width={0} height={0} sizes="100vw"
              data-bq-leaf
              src={leafRightImg.src}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-8 w-[70px] sm:w-[92px] h-auto drop-shadow-sm hidden sm:block"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-2.5 top-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:rotate-90 transition"
            >
              <X className="w-5 h-5" strokeWidth={2.4} />
            </button>

            <form onSubmit={submit} noValidate className="relative px-5 sm:px-7 pt-6 pb-4">
              {/* Heading */}
              <div data-bq-anim className="text-center px-8">
                <h2
                  id="buyer-enquiry-title"
                  className="font-poppins font-semibold uppercase leading-[1.05] text-[21px] sm:text-[28px]"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                >
                  <span className="block text-[#1b5e20]">Buyer Registration</span>
                  <span className="block text-[#4B1426] tracking-tight">Enquiry</span>
                </h2>
                <span className="mx-auto mt-2 block h-[3px] w-12 rounded-full bg-[#ea580c]" aria-hidden="true" />
                <p className="mt-2 text-[12px] sm:text-[12.5px] text-slate-600">
                  Need help registering as a buyer? Share your details and our team will guide you.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                <div data-bq-anim>
                  <label className={label} htmlFor="bq-name">Full Name {req}</label>
                  <input id="bq-name" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Enter your full name" autoComplete="name" className={field(errors.name)} />
                  <FieldError msg={errors.name} />
                </div>
                <div data-bq-anim>
                  <label className={label} htmlFor="bq-company">Company / Organisation</label>
                  <input id="bq-company" value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Enter your company or organisation name" autoComplete="organization" className={field()} />
                </div>
                <div data-bq-anim>
                  <label className={label} htmlFor="bq-phone">WhatsApp Number {req}</label>
                  <div
                    className={`flex h-[36px] rounded-[5px] border bg-white overflow-hidden transition focus-within:ring-4 ${
                      errors.phone
                        ? "border-[#dc2626] focus-within:ring-[#dc2626]/10"
                        : phoneVerified
                          ? "border-[#2e7d32] focus-within:ring-[#2e7d32]/12"
                          : "border-[#cfd6d1] focus-within:border-[#2e7d32] focus-within:ring-[#2e7d32]/12"
                    }`}
                  >
                    <span className="flex items-center px-3 bg-[#f3f5f2] border-r border-[#cfd6d1] text-[12.5px] font-semibold text-slate-700">+91</span>
                    <input
                      id="bq-phone"
                      value={form.phone}
                      onChange={(e) => changePhone(e.target.value)}
                      placeholder="Enter your WhatsApp number"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      className="flex-1 min-w-0 px-3 text-[12.5px] text-slate-800 placeholder:text-slate-400 outline-none"
                    />
                    {phoneVerified ? (
                      <span className="flex items-center gap-1 pr-2.5 text-[11.5px] font-semibold text-[#1b5e20]">
                        <BadgeCheck className="w-4 h-4" aria-hidden="true" /> Verified
                      </span>
                    ) : (
                      !otpSent && (
                        <button
                          type="button"
                          onClick={sendOtp}
                          disabled={!isValidPhone(form.phone) || otpBusy === "sending"}
                          className="shrink-0 px-3 text-[11.5px] font-semibold text-white bg-[#1b5e20] hover:bg-[#2e7d32] disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                        >
                          {otpBusy === "sending" ? <Loader2 className="w-3.5 h-3.5 animate-spin" aria-label="Sending OTP" /> : "Verify"}
                        </button>
                      )
                    )}
                  </div>

                  {/* OTP entry (after "Verify") */}
                  {otpSent && !phoneVerified && (
                    <div className="mt-1.5 flex h-[34px] rounded-[5px] border border-[#cfd6d1] bg-white overflow-hidden focus-within:border-[#2e7d32] focus-within:ring-4 focus-within:ring-[#2e7d32]/12">
                      <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            confirmOtp();
                          }
                        }}
                        placeholder="Enter 6-digit OTP"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        aria-label="WhatsApp OTP"
                        className="flex-1 min-w-0 px-3 text-[12.5px] tracking-[0.3em] text-slate-800 placeholder:tracking-normal placeholder:text-slate-400 outline-none"
                      />
                      <button
                        type="button"
                        onClick={sendOtp}
                        disabled={resendIn > 0 || otpBusy !== ""}
                        className="shrink-0 px-2 text-[11px] font-semibold text-[#1b5e20] disabled:text-slate-400"
                      >
                        {resendIn > 0 ? `Resend ${resendIn}s` : "Resend"}
                      </button>
                      <button
                        type="button"
                        onClick={confirmOtp}
                        disabled={otp.length !== 6 || otpBusy !== ""}
                        className="shrink-0 px-3 text-[11.5px] font-semibold text-white bg-[#1b5e20] hover:bg-[#2e7d32] disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                      >
                        {otpBusy === "verifying" ? <Loader2 className="w-3.5 h-3.5 animate-spin" aria-label="Verifying" /> : "Confirm"}
                      </button>
                    </div>
                  )}
                  {otpMsg && (
                    <p className={`mt-0.5 text-[11px] font-medium ${otpMsg.tone === "error" ? "text-[#dc2626]" : "text-[#1b5e20]"}`}>{otpMsg.text}</p>
                  )}
                  <FieldError msg={errors.phone} />
                </div>
                <div data-bq-anim>
                  <label className={label} htmlFor="bq-email">Email Address {req}</label>
                  <input id="bq-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="Enter your email address" autoComplete="email" className={field(errors.email)} />
                  <FieldError msg={errors.email} />
                </div>
              </div>

              <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2.5">
                <div data-bq-anim>
                  <label className={label} htmlFor="bq-city">City</label>
                  <input id="bq-city" value={form.city} onChange={(e) => set("city", e.target.value)} placeholder="Enter your city" autoComplete="address-level2" className={field()} />
                </div>
                <div data-bq-anim>
                  <span className={label}>Country</span>
                  <Select value={form.country} onChange={(v) => set("country", v)} options={labelsOf(dropdowns["buyer-enquiry-country"])} placeholder="Select country" ariaLabel="Country" />
                </div>
                <div data-bq-anim>
                  <span className={label}>Buyer Type</span>
                  <Select value={form.buyerType} onChange={(v) => set("buyerType", v)} options={labelsOf(dropdowns["buyer-enquiry-type"])} placeholder="Select buyer type" ariaLabel="Buyer type" />
                </div>
              </div>

              <div data-bq-anim className="mt-2.5">
                <span className={label}>Enquiry About {req}</span>
                <Select value={form.about} onChange={(v) => set("about", v)} options={labelsOf(dropdowns["buyer-enquiry-topic"])} error={errors.about} ariaLabel="Enquiry about" />
                <FieldError msg={errors.about} />
              </div>

              <div data-bq-anim className="mt-2.5">
                <label className={label} htmlFor="bq-message">Your Question / Message {req}</label>
                <textarea
                  id="bq-message"
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  rows={2}
                  maxLength={1000}
                  placeholder="Please guide us on buyer eligibility, participation fees and the registration process."
                  className={`${field(errors.message)} h-auto min-h-[60px] py-2 resize-none`}
                />
                <FieldError msg={errors.message} />
              </div>

              <div data-bq-anim className="mt-2">
                <label className="inline-flex items-center gap-2 cursor-pointer select-none text-[12px] text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    className="w-4 h-4 rounded-none border-slate-300 accent-[#1b5e20] cursor-pointer"
                  />
                  I agree to be contacted regarding my enquiry.
                </label>
                <FieldError msg={errors.consent} />
              </div>

              {serverError && (
                <p className="mt-3 rounded-lg bg-[#fef2f2] border border-[#fecaca] px-3 py-2 text-[12.5px] font-medium text-[#b91c1c]">{serverError}</p>
              )}

              <button
                data-bq-anim
                type="submit"
                disabled={submitting}
                className="group relative mt-3 w-full h-[40px] overflow-hidden rounded-md bg-gradient-to-r from-[#1b5e20] to-[#2e7d32] font-poppins text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_24px_-10px_rgba(27,94,32,0.8)] transition hover:brightness-110 active:scale-[0.99] disabled:opacity-70"
              >
                <span className="absolute inset-y-0 -left-1/3 w-1/4 skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[520%]" aria-hidden="true" />
                <span className="relative inline-flex items-center justify-center gap-2">
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
                  {submitting ? "Sending..." : "Submit Enquiry"}
                </span>
              </button>

              <div data-bq-anim className="mt-3 flex items-center gap-3">
                <span className="flex-1 h-px bg-slate-200" aria-hidden="true" />
                <p className="text-[12.5px] text-slate-600 whitespace-nowrap">
                  Ready to register?{" "}
                  <Link href={registerHref} className="inline-flex items-center gap-0.5 font-semibold text-[#1b5e20] underline underline-offset-4 hover:text-[#2e7d32]">
                    Register as a Buyer <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </p>
                <span className="flex-1 h-px bg-slate-200" aria-hidden="true" />
              </div>

              <div data-bq-anim className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12px] text-slate-700">
                <a href={phoneHref} className="inline-flex items-center gap-1.5 hover:text-[#1b5e20]">
                  <Phone className="w-3.5 h-3.5 text-[#ea580c]" aria-hidden="true" /> +91 96549 00525
                </a>
                <span className="hidden sm:block h-4 w-px bg-slate-300" aria-hidden="true" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="inline-flex items-center gap-1.5 hover:text-[#1b5e20]">
                  <Mail className="w-3.5 h-3.5 text-[#ea580c]" aria-hidden="true" /> {SITE_CONFIG.email}
                </a>
              </div>
            </form>
          </div>

          {/* ───────── Back: thank-you (shown by flipping the card after a successful submit) ───────── */}
          <div
            aria-hidden={!sent}
            className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[16px] border-2 border-green-500 bg-green-50 shadow-lg overflow-hidden"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              tabIndex={sent ? 0 : -1}
              className="absolute right-2.5 top-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-100 hover:rotate-90 transition"
            >
              <X className="w-5 h-5" strokeWidth={2.4} />
            </button>

            <div className="relative h-full flex flex-col items-center justify-center text-center px-6 sm:px-12 py-10">
              {/* animated tick */}
              <div data-bq-thanks className="w-24 h-24 sm:w-28 sm:h-28 mb-6">
                {tickReady && <DotLottieReact src="/success-tick.lottie" autoplay className="w-full h-full" />}
              </div>

              <h3 data-bq-thanks className="mb-4 text-[24px] sm:text-[30px] font-bold leading-tight text-gray-900">
                Enquiry Submitted Successfully!
              </h3>

              <p data-bq-thanks className="mb-8 max-w-md text-[15px] sm:text-[17px] leading-relaxed text-gray-600">
                Thank you{form.name.trim() ? `, ${form.name.trim().split(/\s+/)[0]}` : ""}! Our team has received your buyer enquiry and will contact
                you very soon.
              </p>

              <div data-bq-thanks className="flex items-center gap-2 text-[13px] text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                This window will close automatically...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

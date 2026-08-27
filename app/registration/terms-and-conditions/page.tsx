"use client";
import React, { useEffect, useState } from "react";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Ban,
  RefreshCcw,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  Clock,
  Info,
  Mail,
  Globe,
  Printer,
  Award,
  Building2,
  Users,
  Map,
  Handshake,
  Tag,
  CalendarX,
  Wallet,
  AlertTriangle,
  Scale,
  User,
  Phone,
  Loader2,
  Star
} from "lucide-react";
import { policyApi } from "@/lib/api";
import termBanner from "@/app/assets/registration/terms-and-conditions.png";
import team1Icon from "@/app/assets/registration/team1.webp";
import doc22Icon from "@/app/assets/registration/doc22.webp";

// Sparkle component
const Sparkle = ({ style, color = "#fcd34d", shadow = "#b45309" }: { style?: React.CSSProperties, color?: string, shadow?: string }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '16px',
      color: color,
      textShadow: `0 0 8px ${shadow}, 0 0 15px ${color}, 0 0 25px ${color}`,
      animation: 'sparkleAnim 1.8s ease-in-out infinite',
      opacity: 0,
      ...style,
    }}
  >
    ✦
  </span>
);
const getIconForTitle = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("acceptance")) return ShieldCheck;
  if (t.includes("scope")) return CreditCard;
  if (t.includes("confirmation")) return CheckCircle;
  if (t.includes("pricing") || t.includes("tax")) return Tag;
  if (t.includes("refund") || t.includes("transfer")) return Ban;
  if (t.includes("cancel") || t.includes("reschedul")) return CalendarX;
  if (t.includes("mode")) return Wallet;
  if (t.includes("fail") || t.includes("dispute")) return AlertTriangle;
  if (t.includes("chargeback") || t.includes("fraud")) return AlertCircle;
  if (t.includes("role") || t.includes("partner")) return Users;
  if (t.includes("liability") || t.includes("limitat")) return AlertTriangle;
  if (t.includes("indemnity")) return ShieldCheck;
  if (t.includes("force majeure")) return Globe;
  if (t.includes("govern") || t.includes("jurisdiction")) return Scale;
  return FileText;
};
const parseContent = (htmlContent: string) => {
  if (!htmlContent) return null;
  const regex = /<(h[1-4]|strong|b|u)[^>]*>(.*?)<\/\1>|(?:\r?\n|^)\s*([A-Z][^<.\n\r]{2,80})(?:\r?\n|$)|<p[^>]*>\s*<(strong|b|u|h[1-4])[^>]*>(.*?)<\/\4>\s*<\/p>/gim;

  const rawMatches = Array.from(htmlContent.matchAll(regex));
  const uniqueMatches: any[] = [];
  const seenIndices = new Set<number>();

  rawMatches.forEach(m => {
    const titleText = (m[2] || m[3] || m[5] || "")
      .replace(/<[^>]*>?/gm, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .trim();
    const cleanTitle = titleText.replace(/^\d+[\s.)-]+\s*/, "").trim();
    if (cleanTitle.length > 2 && cleanTitle.length < 100 && !cleanTitle.endsWith('.') && !seenIndices.has(m.index)) {
      uniqueMatches.push({
        index: m.index,
        length: m[0].length,
        title: cleanTitle
      });
      seenIndices.add(m.index);
    }
  });
  uniqueMatches.sort((a, b) => a.index - b.index);

  if (uniqueMatches.length === 0) {
    return {
      preamble: "",
      terms: [{ id: 1, title: "Terms of Service", content: htmlContent }]
    };
  }

  const preamble = htmlContent.substring(0, uniqueMatches[0].index).trim();
  const terms = [];

  for (let i = 0; i < uniqueMatches.length; i++) {
    const current = uniqueMatches[i];
    const next = uniqueMatches[i + 1];

    const contentStart = current.index + current.length;
    const contentEnd = next ? next.index : htmlContent.length;
    const content = htmlContent.substring(contentStart, contentEnd).trim();

    if (current.title) {
      terms.push({
        id: i + 1,
        title: current.title,
        content: content
      });
    }
  }

  return { preamble, terms };
};

const TermsOfService: React.FC = () => {
  const [policy, setPolicy] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const data = await policyApi.getByPage("terms-of-service");
        setPolicy(data);
      } catch (error) {
        console.error("Failed to fetch terms:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPolicy();
  }, []);

  const parsedData = policy ? parseContent(policy.content) : null;

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-1" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmerHero {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .hero-shimmer-btn {
          position: relative;
          overflow: hidden;
        }
        .hero-shimmer-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
        }
        @keyframes badgeGlowAndFloat {
          0% { transform: translateY(0px); box-shadow: 0 0 15px rgba(245,130,32,0.4); }
          50% { transform: translateY(-5px); box-shadow: 0 0 35px rgba(245,130,32,0.8); }
          100% { transform: translateY(0px); box-shadow: 0 0 15px rgba(245,130,32,0.4); }
        }
        .animate-badge-special {
          animation: badgeGlowAndFloat 3s ease-in-out infinite;
        }

        @media print {
          .print-hidden { display: none !important; }
          body, * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          @page { margin: 10mm 3mm !important; size: auto; }
          @page :first { margin: 0 !important; }
          html, body { background-color: white !important; padding: 0 !important; margin: 0 !important; height: auto !important; }
          #root, main, .bg-[#f8f9fa], [class*="min-h-screen"] { padding-top: 0 !important; margin-top: 0 !important; display: block !important; position: static !important; }
          section:first-of-type { margin-top: 0 !important; padding-top: 0 !important; }
          .relative.h-\[280px\].sm\:h-\[330px\].md\:h-\[380px\].lg\:h-\[430px\] { height: 180px !important; }
          .bg-[#eef5f0] { background-color: #eef5f0 !important; }
          .bg-white { background-color: white !important; }
          .bg-[#3b8c2a] { background-color: #3b8c2a !important; }
          .rounded-3xl, .rounded-[20px] { border-radius: 12px !important; border: 1px solid #f1f5f9 !important; }
          .grid-cols-1.lg\\:grid-cols-2 { grid-template-columns: 1fr !important; display: block !important; }
          .lg\\:border-r { border-right: none !important; border-bottom: 1px solid #f1f5f9 !important; }
          .terms-contact-bar { flex-direction: row !important; flex-wrap: nowrap !important; width: 100% !important; padding: 4px 0 !important; }
          .terms-contact-items { flex-direction: row !important; justify-content: space-between !important; flex: 1 !important; }
          nav, footer:not(.terms-footer), header, [class*="bg-[#1a3d14]"], .fixed, aside, .xl\\:hidden, [class*="fixed"], [class*="z-[100]"], [class*="z-[90]"] { display: none !important; }
          .grid-cols-1.lg\\:grid-cols-2 > div { break-inside: avoid !important; page-break-inside: avoid !important; display: block !important; }
          section { margin-bottom: 4px !important; padding: 0 !important; }
          h1 { font-size: 24px !important; line-height: 1 !important; margin-bottom: 4px !important; }
          h3 { font-size: 13px !important; }
          p, span, .text-\[12\.5px\], .text-sm { font-size: 10.5px !important; line-height: 1.3 !important; }
          .prose li, .prose p { font-size: 10px !important; margin-bottom: 1px !important; }
          .relative.z-10.w-full.mx-auto.px-6.md\\:px-12.max-w-\\[1400px\\].-mt-6.md\\:-mt-8 { margin-top: -30px !important; }
          .p-4.md\\:p-0 { padding: 0 !important; }
          .p-4, .md\\:p-6 { padding: 6px 10px !important; }
          .flex.items-start.gap-4 { gap: 10px !important; }
          .w-12.h-12.md\\:w-\[60px\].md\\:h-\[60px\] { width: 45px !important; height: 45px !important; }
          .w-12.h-12.md\\:w-\[60px\].md\\:h-\[60px\] svg { width: 22px !important; height: 22px !important; }
          .px-6.py-3.md\\:px-8.md\\:py-3.5 { padding: 4px 8px !important; }
          .gap-6.lg\\:gap-8 { gap: 10px !important; }
          .relative.h-\[180px\] p, .bg-\[\#eef5f0\] p { color: #3b8c2a !important; font-weight: 600 !important; font-size: 14px !important; }
        }

        @keyframes goldShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmerBtn {
          0%   { left: -75%; }
          100% { left: 125%; }
        }

        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          50%  { opacity: 1; transform: scale(1.5) translateY(-15px); }
          100% { opacity: 0; transform: scale(0.8) translateY(-30px); }
        }

        .red-btn-terms {
          background: linear-gradient(135deg, #b45309 0%, #23471d 40%, #b45309 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 10px 30px -5px rgba(0,0,0,0.3), 0 0 20px rgba(94,0,6,0.3);
          position: relative;
          overflow: hidden;
        }

        .red-btn-terms::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmerBtn 2s infinite;
        }
      ` }} />

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center">
        <div className="w-full relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[470px] bg-[#eef5f0] overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 w-full h-full z-0">
            <img loading="lazy" decoding="async" src={termBanner.src}
              alt="Terms Banner"
              className="w-full h-full object-cover object-center"
            />
            {/* Lightened dark gradient overlay so text is readable, just like home */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcf0]/60 via-[#fcfcf0]/10 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Overlay Text */}
          <div className="relative z-20 w-full px-6 md:px-14 h-full flex flex-col justify-center pb-12">
            <div className="max-w-xl text-left mt-8 md:mt-0 space-y-4 w-full max-w-2xl">

              {/* Tagline Badge */}
              <div className="animate-badge-special hero-shimmer-btn overflow-hidden inline-flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-[#f58220]/15 to-[#e65c00]/15 backdrop-blur-md font-black text-[15px] md:text-[18px] tracking-[0.25em] uppercase rounded-full mb-2 mt-6 border-2 border-[#f58220] w-max cursor-default">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#f58220]" fill="currentColor" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58220] to-[#e65c00] drop-shadow-md">
                  POLICY GUIDE
                </span>
              </div>

              {/* Title */}
              <h1 className="leading-[1.1] font-semibold uppercase pb-1">
                <div className="text-[#1f471b] text-[30px] md:text-[40px] lg:text-[48px] tracking-tight pb-1">
                  TERMS &
                </div>
                <div className="text-[#7ca142] text-[30px] md:text-[40px] lg:text-[52px] tracking-tight">
                  CONDITIONS
                </div>
              </h1>

              {/* Subtitle */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-1 bg-[#7ca142] rounded-full"></div>
                <span className="text-[#2b5825] font-bold text-[14px] md:text-[16px] tracking-widest uppercase">
                  Bharat Organic Expo 2027
                </span>
                <div className="w-12 h-1 bg-[#7ca142] rounded-full"></div>
              </div>

              <p className="text-[#4a4a4a] font-semibold text-[16px] md:text-[18px] leading-[1.6] max-w-3xl mt-2 border-l-2 border-[#7ca142]/30 pl-4">
                Please read these terms carefully before proceeding.
              </p>

              <div className="mt-6 md:mt-8 print-hidden">
                <div className="relative group/btn inline-block">
                  <button
                    onClick={() => window.print()}
                    className="hero-shimmer-btn bg-[#2b5825] hover:bg-[#1f471b] text-white px-5 sm:px-6 py-2 lg:py-3 rounded-md font-bold text-[11px] md:text-[13px] tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap gap-2"
                  >
                    <Printer className="w-4 h-4" strokeWidth={2.5} />
                    <span>Print Terms & Conditions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip (Like StatsBand) */}
      <div className="relative z-20 -mt-6 md:-mt-8 w-full max-w-[1440px] mx-auto px-6 md:px-14">
        <div
          className="rounded-2xl border border-white/10 p-2 md:py-3 md:px-4"
          style={{
            backgroundColor: "#1b5e20",
            boxShadow: "0 8px 20px -10px rgba(0,0,0,0.3)",
          }}
        >
          <div className="grid grid-cols-2 md:flex md:flex-nowrap items-center justify-center md:justify-between gap-y-3 gap-x-2 md:gap-0">

            {/* Item 1 */}
            <div className="flex flex-col items-center text-center group flex-1">
              <h4 className="text-sm md:text-[16px] font-semibold text-white leading-none font-inter whitespace-nowrap">
                Bharat Organic Expo 2027
              </h4>
              <p className="text-[10px] md:text-[14px] font-semibold text-[#f5c842] uppercase tracking-widest leading-tight mt-1 font-inter">
                Premier Exhibition & Conference
              </p>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/20" />

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center group flex-1">
              <h4 className="text-sm md:text-[16px] font-semibold text-white leading-none font-inter whitespace-nowrap">
                Namo Gange Wellness Pvt. Ltd.
              </h4>
              <p className="text-[10px] md:text-[14px] font-semibold text-[#f5c842] uppercase tracking-widest leading-tight mt-1 font-inter">
                Organised By
              </p>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/20" />

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center group flex-1">
              <h4 className="text-sm md:text-[16px] font-semibold text-white leading-none font-inter whitespace-nowrap">
                Council of AYUSH (ICOA)
              </h4>
              <p className="text-[10px] md:text-[14px] font-semibold text-[#f5c842] uppercase tracking-widest leading-tight mt-1 font-inter">
                In Association (Buyer-Seller)
              </p>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/20" />

            {/* Item 4 */}
            <div className="flex flex-col items-center text-center group flex-1">
              <h4 className="text-sm md:text-[16px] font-semibold text-white leading-none font-inter whitespace-nowrap">
                Namo Gange Trust
              </h4>
              <p className="text-[10px] md:text-[14px] font-semibold text-[#f5c842] uppercase tracking-widest leading-tight mt-1 font-inter">
                In Association (Conferences)
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-3 w-full">
        <div className="w-full px-6 md:px-14">
          {isLoading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="w-10 h-10 text-[#23471d] animate-spin" />
            </div>
          ) : !parsedData ? (
            <div className="text-center py-10">
              <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-400">Terms Content Not Found</h3>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-3xl shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {parsedData.terms.map((term, index) => {
                    const Icon = getIconForTitle(term.title);
                    const isLastRow = index >= parsedData.terms.length - (parsedData.terms.length % 2 === 0 ? 2 : 1);
                    return (
                      <div
                        key={index}
                        className={`py-3 px-4 md:py-3.5 md:px-5 flex flex-col ${index % 2 === 0 ? 'lg:border-r border-gray-100' : ''} ${!isLastRow ? 'border-b border-gray-100' : ''}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 md:mt-1 shrink-0">
                            <Star className="w-5 h-5 md:w-[22px] md:h-[22px] text-[#f58220] fill-[#f58220]" />
                          </div>
                          <div className="flex flex-col pt-0">
                            <div className="flex items-center gap-2.5">
                              <span className="text-[18px] md:text-[24px] font-[900] text-slate-900 leading-none">
                                {term.id.toString().padStart(2, '0')}
                              </span>
                              <h3 className="text-[15px] md:text-[20px] font-semibold text-slate-900 leading-none">
                                {term.title}
                              </h3>
                            </div>
                            <div className="mt-1.5">
                              <div
                                className="prose prose-sm prose-slate max-w-none
                                     [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-1 [&_li]:text-slate-600 [&_li]:relative [&_li]:pl-5 [&_li]:text-[13px] md:[&_li]:text-[14px] [&_li]:leading-[1.4]
                                     [&_li::before]:content-['•'] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:text-slate-900 [&_li::before]:font-black
                                     [&_p]:text-slate-600 [&_p]:leading-[1.3] [&_p]:mb-0 [&>*:not(:last-child)]:mb-2 [&_p]:text-[13px] md:[&_p]:text-[14px]
                                     [&_a]:text-[#3b8c2a] [&_a]:font-semibold [&_a]:underline"
                                dangerouslySetInnerHTML={{ __html: term.content }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Contact Footer */}
                <div className="bg-[#fdfefd] border-t border-gray-100 flex flex-col lg:flex-row items-stretch terms-contact-bar">
                  <div className="bg-[#f4f7f2] font-[900] text-slate-900 text-[15px] md:text-lg px-8 py-3 md:py-4 flex items-center justify-center lg:justify-start lg:w-2/12">
                    Contact:
                  </div>

                  <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 py-4 md:py-0 terms-contact-items">
                    <a
                      href="mailto:info@bharatorganicexpo.com"
                      className="flex items-center gap-2.5 md:h-full py-2 md:py-0 hover:text-[#3b8c2a] transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#23471d] fill-[#23471d]/10" strokeWidth={1.5} />
                      <span className="text-[13px] md:text-[14px] font-[700] text-slate-600">info@bharatorganicexpo.com</span>
                    </a>

                    <div className="hidden md:block w-px h-6 bg-gray-200"></div>

                    <a
                      href="tel:+919654900525"
                      className="flex items-center gap-2.5 md:h-full py-2 md:py-0 hover:text-[#3b8c2a] transition-colors"
                    >
                      <Phone className="w-5 h-5 text-[#23471d] fill-[#23471d]/10" strokeWidth={1.5} />
                      <span className="text-[13px] md:text-[14px] font-[700] text-slate-600">9654900525</span>
                    </a>

                    <div className="hidden md:block w-px h-6 bg-gray-200"></div>

                    <a
                      href="https://bharatorganicexpo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 md:h-full py-2 md:py-0 hover:text-[#3b8c2a] transition-colors"
                    >
                      <Globe className="w-5 h-5 text-[#23471d] fill-[#23471d]/10" strokeWidth={1.5} />
                      <span className="text-[13px] md:text-[14px] font-[700] text-slate-600">bharatorganicexpo.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {policy && (
            <div className="mt-4 pl-4 md:pl-6 print-hidden">
              <p className="text-[9px] md:text-[10px] text-slate-400 font-[800] uppercase tracking-wider">
                LAST UPDATED: {new Date(policy.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;

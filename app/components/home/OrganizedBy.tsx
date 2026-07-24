import React, { useState, useEffect } from 'react';
import { organizedByApi, SERVER_URL } from '@/app/lib/api';

interface OrganizedByData {
  subheading: string;
  heading: string;
  highlightText: string;
  badgeText: string;
  orgName: string;
  quote: string;
  logo: string;
  logoAlt: string;
}

const ORGS = [
  {
    name: "Namo Gange Wellness Pvt. Ltd.",
    desc: "A professional exhibition & conference management company since 2016, responsible for end-to-end event execution, partnerships, exhibitor & sponsor management and global outreach.",
    logoKey: "logo1" as const,
  },
  {
    name: "Namo Gange Trust",
    desc: "A socio-spiritual, non-profit organization registered under NGO Darpan (NITI Aayog), Government of India, providing visionary guidance and social credibility to the mission.",
    logoKey: "logo2" as const,
  },
];

const TRUST_BADGES = [
  {
    label: "Transparency & Compliance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: "Professional Execution",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    label: "Institutional Trust & Confidence",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
];

// Fallback placeholder logo (simple SVG inline)
const PlaceholderLogo = ({ label }: { label: string }) => (
  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
    <span className="text-[10px] text-gray-400 font-bold text-center leading-tight px-1">{label}</span>
  </div>
);

const OrgLogo = ({ src, alt }: { src: string; alt: string }) => {
  const [err, setErr] = useState(false);
  if (!src || err) return <PlaceholderLogo label={alt} />;
  return (
    <img loading="lazy" decoding="async" src={src}
      alt={alt}
      onError={() => setErr(true)}
      className="w-16 h-16 object-contain shrink-0"
    />
  );
};

const OrganizedBy: React.FC = () => {
  const [data, setData] = useState<OrganizedByData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await organizedByApi.get();
        if (result) setData(result);
      } catch (error) {
        console.error("Error fetching Organized By data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return null;

  // logo from backend for org 1; org 2 uses logoAlt as fallback label
  const logo1 = data?.logo
    ? (data.logo.startsWith('http') ? data.logo : `${SERVER_URL}${data.logo}`)
    : "";
  const logo2 = ""; // second org logo — add field to backend when ready

  const logos: Record<"logo1" | "logo2", string> = { logo1, logo2 };
  const alts: Record<"logo1" | "logo2", string> = {
    logo1: data?.logoAlt || "Namo Gange Wellness Pvt. Ltd.",
    logo2: "Namo Gange Trust",
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#3b8c2a 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}
      />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-6 h-[1.5px] bg-[#e63946]" />
          <span
            className="uppercase tracking-[0.28em] text-[#e63946] font-bold text-[11px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {data?.subheading || "ORGANISED BY"}
          </span>
        </div>

        {/* Table card */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md" data-aos="fade-up">

          {/* Top row: 2 org cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
            {ORGS.map((org, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 hover:bg-[#fffaf7] transition-colors duration-200"
              >
                {/* Logo / Image */}
                <OrgLogo src={logos[org.logoKey]} alt={alts[org.logoKey]} />

                {/* Text */}
                <div>
                  <h3
                    className="text-[#3b8c2a] font-bold text-[15px] leading-[1.3] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {org.name}
                  </h3>
                  <p
                    className="text-gray-500 text-[13px] leading-[1.65]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {org.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar: 3 trust badges */}
          <div className="grid grid-cols-3 divide-x divide-white/20 bg-[#3b8c2a]">
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex items-center justify-center gap-3 py-4 px-4">
                <div className="text-[#e63946] shrink-0">{badge.icon}</div>
                <span
                  className="text-white font-bold text-[10px] uppercase tracking-[0.15em] leading-[1.4]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrganizedBy;

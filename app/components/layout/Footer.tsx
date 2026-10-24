import React from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { SITE_CONFIG } from "@/app/constants/siteConfig";
// Artwork taken from the approved footer design: the light top strip and the light-lettered logo
import topStrip from "../../assets/footer/footer-top-strip.png";
import footerLogo from "../../assets/footer/boe-logo-2nd-edition.png";
// White-text version of the Namo Gange Wellness logo: the regular one has grey lettering that
// disappears on this dark green footer.
import mainOrganiserLogo from "../../assets/logos/namogange-wellness-light.png";
import coOrganiserLogo from "../../assets/logos/namo.png";
import goldLeaf from "../../assets/icons/footer-leaf.png";
import greenLeaf from "../../assets/icons/foot1og.png";
import mandala from "../../assets/icons/footer-mandala-lines.png";
import BackToTop from "./BackToTop";
import keynoteIcon from "../../assets/icons/foot2.png";
import panelIcon from "../../assets/icons/foot1.png";
import workshopIcon from "../../assets/icons/foot11.png";
import networkingIcon from "../../assets/icons/foot22.png";
import innovationIcon from "../../assets/icons/foot33.png";
import { ChevronRight, Mail, Phone, Store } from "lucide-react";

const DEFAULT_QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Exhibitor Registration", path: "/registration/book-a-stand" },
  { name: "Delegate Registration", path: "https://arogya.namogange.org/" },
  { name: "Conference Tracks", path: "https://arogya.namogange.org/" },
  { name: "Buyer Seller Meet", path: "/buyer-seller-meet" },
  { name: "Exhibitor List", path: "/exhibitors" },
  { name: "Blogs", path: "/blog" },
  { name: "Awards", path: "/awards" },
  { name: "Contact Us", path: "/contact" },
];

const HIGHLIGHTS: { icon: StaticImageData; title: string; desc: string }[] = [
  { icon: keynoteIcon, title: "Keynote Leaders", desc: "Global thought leaders share their vision" },
  { icon: panelIcon, title: "Panel Discussions", desc: "Diverse perspectives on critical topics" },
  { icon: workshopIcon, title: "Workshops", desc: "Hands on learning from experts" },
  { icon: networkingIcon, title: "Networking", desc: "Connect. Collaborate. Create Impact." },
  { icon: innovationIcon, title: "Innovation Showcase", desc: "Discover breakthrough organic solutions" },
];

type Office = { title: string; lines: string[]; phone?: string; email?: string };

const OFFICES: Office[] = [
  {
    title: "Head Office – Ghaziabad, India",
    lines: ["Namo Gange Wellness Pvt. Ltd.", "Plot No. 12/29, Site II Industrial Area,", "Mohan Nagar, Ghaziabad – 201007,", "Uttar Pradesh, India."],
    phone: "+91 9654900525",
    email: "info@namogangewellness.com",
  },
  {
    title: "Regional Office – Visakhapatnam, India",
    lines: ["Namo Gange Wellness Pvt. Ltd.", "Door No. 36-46-51, 2nd Floor, Main Road,", "Kancharapalem, Visakhapatnam – 530008,", "Andhra Pradesh, India."],
    phone: "+91 6281482342",
    email: "srujana@namogangewellness.com",
  },
  {
    title: "International Office – London (UK)",
    lines: ["Namo Gange Wellness", "6 Liddel Close, Luton,", "Bedfordshire, LU3 1TW,", "United Kingdom."],
    phone: "+44 7429 519276",
  },
];

const STALL_BOOKING_PHONE = "+91 96549000525";

const GOLD = "#F2B632";

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

/** Gold column heading with the leaf divider under it */
function ColumnHeading({ children, align = "left" }: { children: React.ReactNode; align?: "left" | "center" }) {
  const centered = align === "center";
  return (
    <div className={`mb-[11px] ${centered ? "flex flex-col items-center" : ""}`}>
      <h2 className="font-poppins text-[17px] font-bold uppercase leading-none tracking-[0.01em]" style={{ color: GOLD }}>
        {children}
      </h2>
      <div className={`relative mt-[6px] h-[18px] w-[165px] ${centered ? "" : "-ml-[4px]"}`}>
        <span
          className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
          style={{ background: `linear-gradient(90deg, transparent, ${GOLD} 18%, ${GOLD} 70%, transparent)` }}
        />
        <Image
          src={goldLeaf}
          alt="Decorative golden leaf"
          width={22}
          height={18}
          sizes="22px"
          className={`absolute top-0 h-[18px] w-auto ${centered ? "left-1/2 -translate-x-1/2" : "left-[38px]"}`}
        />
      </div>
    </div>
  );
}

/* Solid gold event icons (as in the design); the cut-outs let the footer background show through */
type SolidIconProps = { className?: string };

const SolidPinIcon = ({ className }: SolidIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path
      fillRule="evenodd"
      d="M12 1.5a7.6 7.6 0 0 0-7.6 7.6c0 5.6 7.6 13.4 7.6 13.4s7.6-7.8 7.6-13.4A7.6 7.6 0 0 0 12 1.5Zm0 4.6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);

const SolidCalendarIcon = ({ className }: SolidIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <rect x="6.3" y="1.5" width="2.2" height="4.6" rx="1.1" />
    <rect x="15.5" y="1.5" width="2.2" height="4.6" rx="1.1" />
    <path
      fillRule="evenodd"
      d="M5 3.8h1.3v1.1a1.1 1.1 0 0 0 2.2 0V3.8h7v1.1a1.1 1.1 0 0 0 2.2 0V3.8H19a2.5 2.5 0 0 1 2.5 2.5v13.2A2.5 2.5 0 0 1 19 22H5a2.5 2.5 0 0 1-2.5-2.5V6.3A2.5 2.5 0 0 1 5 3.8Zm-.6 5.6v10.1c0 .3.3.6.6.6h14c.3 0 .6-.3.6-.6V9.4H4.4ZM6.6 11h2.6v2.4H6.6V11Zm4.1 0h2.6v2.4h-2.6V11Zm4.1 0h2.6v2.4h-2.6V11ZM6.6 14.8h2.6v2.4H6.6v-2.4Zm4.1 0h2.6v2.4h-2.6v-2.4Zm4.1 0h2.6v2.4h-2.6v-2.4ZM6.6 18.4h2.6v.9H6.6v-.9Zm4.1 0h2.6v.9h-2.6v-.9Z"
    />
  </svg>
);

const SolidBuildingIcon = ({ className }: SolidIconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path
      fillRule="evenodd"
      d="M8.2 4.2 12 1.8l3.8 2.4V22h-2.3v-3.6h-3V22H8.2V4.2Zm1.9 2.6h1.5v1.6h-1.5V6.8Zm2.3 0h1.5v1.6h-1.5V6.8Zm-2.3 3h1.5v1.6h-1.5V9.8Zm2.3 0h1.5v1.6h-1.5V9.8Zm-2.3 3h1.5v1.6h-1.5v-1.6Zm2.3 0h1.5v1.6h-1.5v-1.6Zm-2.3 3h1.5v1.5h-1.5v-1.5Zm2.3 0h1.5v1.5h-1.5v-1.5Z"
    />
    <path fillRule="evenodd" d="M2.5 9.6h4.7V22H2.5V9.6Zm1.5 2h1.6v1.5H4v-1.5Zm0 3h1.6v1.5H4v-1.5Zm0 3h1.6v1.5H4v-1.5Z" />
    <path fillRule="evenodd" d="M16.8 9.6h4.7V22h-4.7V9.6Zm1.6 2H20v1.5h-1.6v-1.5Zm0 3H20v1.5h-1.6v-1.5Zm0 3H20v1.5h-1.6v-1.5Z" />
    <rect x="1.5" y="21" width="21" height="1.5" rx=".4" />
  </svg>
);

/** Event fact under the logo: gold icon, gold label, white value */
function EventFact({ icon, label, children }: { icon: React.ReactNode; label: React.ReactNode; children?: React.ReactNode }) {
  return (
    <li className="flex items-start gap-[21px]">
      <span className="mt-[1px] flex h-[28px] w-[28px] shrink-0 items-center justify-center" style={{ color: GOLD }}>
        {icon}
      </span>
      <p className="text-[15px] leading-[19px] text-white">
        <span className="font-semibold" style={{ color: GOLD }}>
          {label}
        </span>
        {children}
      </p>
    </li>
  );
}

/** The "footer" section saved in admin → Pages → Home */
type FooterData = {
  enabled?: boolean;
  bottomBannerImage?: string;
  items?: { label?: string; name?: string; href?: string; path?: string }[];
};

export default function Footer({ initialFooterData }: { initialFooterData?: FooterData | null } = {}) {
  // Server-rendered from layout.tsx (getFooterSection), so the real content is there on the first paint.
  const footerData = initialFooterData ?? null;
  if (footerData && footerData.enabled === false) return null;

  const quickLinks =
    footerData?.items && footerData.items.length > 0
      ? footerData.items.map((item) => ({
          name: item.label || item.name || "Link",
          path: item.href || item.path || "/",
        }))
      : DEFAULT_QUICK_LINKS;

  // Co-organiser logo uploaded in admin (Footer section), else the bundled one
  const apiOrigin = SITE_CONFIG.apiUrl.replace(/\/api$/, "");
  const uploadedOr = (uploaded: string | undefined, fallback: StaticImageData) => {
    const url = uploaded?.replace(/^http:\/\/localhost:4000/, apiOrigin);
    if (!url) return fallback;
    if (/^(https?:|data:)/.test(url)) return url;
    return `${apiOrigin}${url.startsWith("/") ? "" : "/"}${url}`;
  };
  const coOrganiserSrc = uploadedOr(footerData?.bottomBannerImage, coOrganiserLogo);

  const year = new Date().getFullYear();

  return (
    <footer
      // The desktop design is laid out for 1600px; 1280–1599px screens show the same layout scaled down
      className="relative overflow-hidden bg-[#0a2914] font-inter text-white xl:max-[1359px]:[zoom:0.8] min-[1360px]:max-[1439px]:[zoom:0.85] min-[1440px]:max-[1519px]:[zoom:0.9] min-[1520px]:max-[1599px]:[zoom:0.95]"
    >
      {/* ── Top strip: "Organic Solutions | Sustainable Growth | Healthier Tomorrow" + "For a Healthier People, A Greener Planet" ── */}
      <div className="relative h-[52px] w-full overflow-hidden sm:h-[63px] xl:h-auto">
        <Image
          src={topStrip}
          alt="Organic Solutions | Sustainable Growth | Healthier Tomorrow — For a Healthier People, A Greener Planet"
          sizes="100vw"
          className="h-full w-full object-cover object-right xl:h-auto xl:object-center"
          priority={false}
        />
      </div>

      {/* ── Main area ── */}
      <div className="relative">
        {/* Background: dark green, with a lighter glow behind the logo column */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(180deg, #0d321a 0%, #082512 100%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden xl:block"
          style={{
            background:
              "radial-gradient(ellipse 22% 75% at 14% 38%, rgba(52,118,60,0.75), transparent 72%), radial-gradient(ellipse 50% 110% at 70% 0%, rgba(22,70,36,0.5), transparent 70%)",
          }}
        />

        {/* Left column decoration (desktop): leaves, gold swoosh and mandala */}
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 hidden h-full w-[445px] xl:block">
          <Image src={greenLeaf} alt="Decorative green leaf" width={120} height={224} sizes="120px" className="absolute -left-[46px] -top-[70px] w-[120px] -rotate-[58deg] opacity-95" />
          <Image src={greenLeaf} alt="Decorative green leaf" width={112} height={209} sizes="112px" className="absolute -left-[48px] top-[60px] w-[112px] rotate-[16deg] opacity-90" />
          <Image src={greenLeaf} alt="Decorative green leaf" width={88} height={164} sizes="88px" className="absolute -left-[38px] top-[190px] w-[88px] rotate-[30deg] opacity-75 blur-[0.6px]" />
          <Image src={greenLeaf} alt="Decorative green leaf" width={118} height={220} sizes="118px" className="absolute -left-[20px] top-[300px] w-[118px] rotate-[64deg] opacity-95" />
          <Image src={greenLeaf} alt="Decorative green leaf" width={92} height={172} sizes="92px" className="absolute left-[44px] top-[338px] w-[92px] rotate-[80deg] opacity-90" />
          <Image
            src={mandala}
            alt="Decorative mandala pattern"
            width={250}
            height={110}
            sizes="250px"
            className="absolute left-[190px] top-[322px] w-[250px] opacity-[0.55]"
          />
          {/* gold swoosh sweeping up from the bottom-left corner */}
          <svg className="absolute bottom-0 left-0 h-[120px] w-[445px]" viewBox="0 0 445 120" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="footer-swoosh" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#f6d27a" />
                <stop offset="0.55" stopColor="#d9a33a" />
                <stop offset="1" stopColor="#d9a33a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 26 C 90 38, 210 74, 445 112 L 445 116 C 210 80, 95 46, 0 34 Z" fill="url(#footer-swoosh)" />
          </svg>
        </div>

        {/* Right edge leaves (desktop) */}
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[90px] xl:block">
          <Image src={greenLeaf} alt="Decorative green leaf" width={96} height={180} sizes="96px" className="absolute -right-[34px] top-[150px] w-[96px] -rotate-[24deg] opacity-80" />
          <Image src={greenLeaf} alt="Decorative green leaf" width={110} height={205} sizes="110px" className="absolute -right-[40px] top-[262px] w-[110px] -rotate-[52deg] opacity-90" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pt-8 pb-10 sm:px-6 lg:px-8 xl:px-0 xl:pt-0 xl:pb-0">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-10 xl:min-h-[412px] xl:grid-cols-[445px_206px_281px_349px_319px] xl:gap-x-0 xl:gap-y-0">
            {/* ── Logo + event facts ── */}
            <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1 xl:items-stretch xl:pl-[92px] xl:pr-[10px] xl:pt-[16px]">
              <Image
                src={footerLogo}
                alt="Bharat Organic Expo – 2nd Edition"
                width={316}
                height={146}
                sizes="316px"
                className="h-auto w-[316px] self-center xl:-ml-[8px] xl:self-start"
                // Fades the artwork's own background into the footer on the left, right and top
                style={{
                  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent), linear-gradient(180deg, transparent, #000 16%)",
                  maskImage: "linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent), linear-gradient(180deg, transparent, #000 16%)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              />
              <span
                aria-hidden="true"
                className="mt-[2px] block h-px w-full max-w-[322px] xl:ml-[22px]"
                style={{ background: `linear-gradient(90deg, ${GOLD}, rgba(242,182,50,0.6) 70%, transparent)` }}
              />
              <ul className="mt-[10px] flex w-full max-w-[300px] flex-col gap-[10px] text-left">
                <EventFact icon={<SolidCalendarIcon className="h-[28px] w-[28px]" />} label="Event Venue – Bharat Organic Expo 2027" />
                <EventFact icon={<SolidPinIcon className="h-[29px] w-[29px]" />} label="Venue:">
                  {" "}Hall No. 12, Pragati Maidan, New Delhi – 110001, India.
                </EventFact>
                <EventFact icon={<SolidCalendarIcon className="h-[28px] w-[28px]" />} label="Event Dates:">
                  {" "}19–21 February 2027
                </EventFact>
                <EventFact icon={<SolidBuildingIcon className="h-[29px] w-[29px]" />} label="Landmark:">
                  {" "}Bharat Mandapam, Pragati Maidan, New Delhi.
                </EventFact>
              </ul>
            </div>

            {/* ── Quick links ── */}
            <div className="xl:border-l xl:border-white/[0.14] xl:pl-[22px] xl:pt-[7px] xl:mt-[12px] xl:mb-[4px]">
              <ColumnHeading>Quick Links</ColumnHeading>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-[13px] min-[480px]:gap-x-6 sm:grid-cols-1 xl:mt-[20px] xl:gap-y-[13px]">
                {quickLinks.map((link: { name: string; path: string }, i: number) => (
                  <li key={`${link.path}-${i}`}>
                    <Link
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-[14px] text-[15px] font-normal leading-[19px] text-white transition-colors hover:text-[#F2B632]"
                    >
                      <ChevronRight size={15} strokeWidth={2.6} className="shrink-0 transition-transform group-hover:translate-x-1" style={{ color: GOLD }} />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Conference highlights ── */}
            <div className="xl:border-l xl:border-white/[0.14] xl:pl-[22px] xl:pr-[10px] xl:pt-[7px] xl:mt-[12px] xl:mb-[4px]">
              <ColumnHeading>Conference Highlights</ColumnHeading>
              <ul className="flex flex-col gap-[10px] xl:mt-[8px]">
                {HIGHLIGHTS.map((item) => (
                  <li key={item.title} className="flex items-center gap-[19px]">
                    <span
                      className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border-[1.5px]"
                      style={{
                        borderColor: "rgba(242,182,50,0.85)",
                        background: "radial-gradient(circle at 50% 40%, #173e1f 0%, #0b2913 75%)",
                        boxShadow: "0 0 12px rgba(242,182,50,0.25), inset 0 0 8px rgba(242,182,50,0.12)",
                      }}
                    >
                      <Image src={item.icon} alt={`${item.title} icon`} width={26} height={26} sizes="26px" className="h-[26px] w-[26px] object-contain" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium leading-[19px] text-white">{item.title}</span>
                      <span className="mt-[3px] block max-w-[180px] text-[12px] leading-[17px] text-white/85">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Get in touch: the three offices ── */}
            <div className="xl:border-l xl:border-white/[0.14] xl:pl-[28px] xl:pr-[8px] xl:pt-[7px] xl:mt-[12px] xl:mb-[4px]">
              <ColumnHeading>Get In Touch</ColumnHeading>
              <p className="text-[14px] font-semibold leading-[18px] text-white xl:-mt-[14px] xl:whitespace-nowrap">Our Offices – Namo Gange Wellness Pvt. Ltd.</p>
              <ul className="mt-[10px] xl:mt-[5px]">
                {OFFICES.map((office) => (
                  <li key={office.title} className="flex gap-[22px] border-b border-white/[0.16] py-[5px] last:border-b-0 last:pb-0 first:pt-[3px]">
                    <span className="mt-[1px] shrink-0" style={{ color: GOLD }}><SolidBuildingIcon className="h-[29px] w-[29px]" /></span>
                    <div className="min-w-0 text-[12px] leading-[15px] text-white xl:whitespace-nowrap">
                      <p className="text-[13px] font-semibold leading-[16px]" style={{ color: GOLD }}>
                        {office.title}
                      </p>
                      {office.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      {office.phone && (
                        <a href={telHref(office.phone)} className="mt-[2px] flex items-center gap-[9px] transition-colors hover:text-[#F2B632]">
                          <Phone className="h-[14px] w-[14px] shrink-0" strokeWidth={0} fill={GOLD} />
                          {office.phone}
                        </a>
                      )}
                      {office.email && (
                        <a href={`mailto:${office.email}`} className="mt-[1px] flex items-center gap-[9px] break-all transition-colors hover:text-[#F2B632]">
                          <Mail className="h-[14px] w-[14px] shrink-0" strokeWidth={2} style={{ color: GOLD }} />
                          {office.email}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Organised by + stall booking ── */}
            <div className="flex flex-col items-center xl:border-l xl:border-white/[0.14] xl:px-[18px] xl:pt-[7px] xl:mt-[12px] xl:mb-[4px]">
              <ColumnHeading align="center">Organised By</ColumnHeading>

              <div className="flex w-full max-w-[240px] flex-col items-center">
                <div className="flex h-[74px] w-full items-center justify-center rounded-[7px] border border-white/45 bg-[linear-gradient(180deg,#1b4129_0%,#11301d_100%)] px-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                  <Image src={mainOrganiserLogo} alt="Namo Gange Wellness Pvt. Ltd." width={200} height={42} sizes="200px" className="h-auto w-[200px]" />
                </div>
                <p className="mt-[6px] font-poppins text-[11px] font-medium uppercase tracking-[0.3em] text-white/90">Main Organiser</p>

                <div className="mt-[8px] flex h-[104px] w-full items-center justify-center rounded-[7px] border border-white/45 bg-[linear-gradient(180deg,#1b4129_0%,#11301d_100%)] px-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                  <Image src={coOrganiserSrc} alt="Namo Gange Trust" width={210} height={88} sizes="210px" className="h-auto w-[210px]" />
                </div>
                <p className="mt-[6px] font-poppins text-[11px] font-medium uppercase tracking-[0.3em] text-white/90">Co-Organiser</p>
                <p className="mt-[1px] font-poppins text-[13px] font-medium uppercase tracking-[0.12em] text-white">Namo Gange Trust</p>
              </div>

              {/* For stall booking */}
              <a
                href={telHref(STALL_BOOKING_PHONE)}
                className="mt-[6px] flex w-full max-w-[266px] items-center gap-[12px] rounded-[8px] border-[1.5px] px-[12px] py-[9px] transition-colors hover:bg-white/[0.04]"
                style={{ borderColor: GOLD, background: "linear-gradient(180deg, rgba(20,48,28,0.9), rgba(10,32,18,0.95))" }}
              >
                <span className="flex h-[48px] w-[46px] shrink-0 items-center justify-center rounded-[5px]" style={{ background: GOLD }}>
                  <Store className="h-[30px] w-[30px] text-[#3b2a06]" strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[14.5px] font-bold uppercase leading-[18px] text-white">For Stall Booking</span>
                  <span className="mt-[5px] flex items-center gap-[7px]">
                    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full" style={{ background: GOLD }}>
                      <Phone className="h-[12px] w-[12px] text-[#0a2914]" strokeWidth={0} fill="currentColor" />
                    </span>
                    <span className="whitespace-nowrap text-[17px] font-semibold leading-none" style={{ color: GOLD }}>
                      {STALL_BOOKING_PHONE}
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-[#c99a3d]/50 bg-[#030703]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-y-3 px-4 pt-5 pb-20 text-center text-[13px] text-white/95 md:pb-5 xl:min-h-[57px] xl:flex-row xl:flex-nowrap xl:px-[24px] xl:py-[8px] xl:text-left xl:text-[13.5px] xl:tracking-[-0.03em] xl:gap-x-[20px]">
          <p className="flex flex-wrap items-center justify-center gap-x-[22px] gap-y-1 xl:flex-nowrap xl:gap-x-[15px] xl:whitespace-nowrap">
            <span>©{year} Bharat Organic Expo – Growing a Greener Future.</span>
            <span aria-hidden="true" className="hidden text-white/70 sm:inline">|</span>
            <span>A Brand of Namo Gange Wellness Pvt. Ltd.</span>
            <span aria-hidden="true" className="hidden text-white/70 sm:inline">|</span>
            <span>All Rights Reserved.</span>
          </p>

          <div className="flex flex-col items-center gap-y-3 sm:flex-row sm:gap-x-[12px] xl:whitespace-nowrap">
            <nav aria-label="Footer legal links" className="flex flex-wrap items-center justify-center gap-x-[16px] gap-y-1 whitespace-nowrap xl:flex-nowrap xl:gap-x-[12px]">
              <a href="/sitemap.xml" target="_blank" rel="noopener" className="transition-colors hover:text-[#F2B632]">
                Sitemap
              </a>
              <span aria-hidden="true" className="text-white/70">|</span>
              <Link href="/registration/privacy-policy" className="transition-colors hover:text-[#F2B632]">
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="text-white/70">|</span>
              <Link href="/registration/terms-and-conditions" className="transition-colors hover:text-[#F2B632]">
                Terms &amp; Conditions
              </Link>
              <span aria-hidden="true" className="hidden text-white/70 sm:inline">|</span>
            </nav>

            <div className="flex items-center gap-[18px]">
              <span className="flex items-center gap-[8px] whitespace-nowrap">
                Designed &amp; Developed by
                <span className="inline-flex h-[34px] items-center rounded-[4px] bg-[#e1061a] px-[9px] text-[14px] text-white">enCodency Pvt. Ltd.</span>
              </span>
              <BackToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

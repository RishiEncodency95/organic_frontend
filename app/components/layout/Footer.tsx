import React from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { SITE_CONFIG } from "@/app/constants/siteConfig";
import footerLogo from "../../assets/logos/footerlogo.png";
// White-text version of the Namo Gange Wellness logo: the regular one has grey lettering that
// disappears on this dark green footer.
import mainOrganiserLogo from "../../assets/logos/namogange-wellness-light.png";
import coOrganiserLogo from "../../assets/logos/namo.png";
import goldLeaf from "../../assets/icons/footer-leaf.png";
import greenLeaf from "../../assets/icons/foot1og.png";
import mandala from "../../assets/icons/footer-mandala-lines.png";
import keynoteIcon from "../../assets/icons/foot2.png";
import panelIcon from "../../assets/icons/foot1.png";
import workshopIcon from "../../assets/icons/foot11.png";
import networkingIcon from "../../assets/icons/foot22.png";
import innovationIcon from "../../assets/icons/foot33.png";
import { ArrowRight, ChevronRight, Globe, Heart, Mail, MapPin, Phone } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
  </svg>
);
const InstagramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
  </svg>
);
const YoutubeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="2" y="5" width="20" height="14" rx="4.5" fill="#fff" />
    <path d="M10 9v6l5.2-3L10 9Z" fill="#E62117" />
  </svg>
);
const XIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
  </svg>
);

// The official account is x.com/organicexpoin. An older default ("twitter.com/bharatorganic") is still
// saved in some footer settings; that one is replaced, any other link the admin enters is kept.
const officialTwitterUrl = (saved?: string) =>
  !saved || /twitter\.com\/bharatorganic\/?$/i.test(saved.trim()) ? SITE_CONFIG.socialLinks.twitter : saved;

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

const GOLD = "#F2B632";

/** Gold column heading with the leaf divider under it */
function ColumnHeading({ children, align = "left" }: { children: React.ReactNode; align?: "left" | "center" }) {
  const centered = align === "center";
  return (
    <div className={`mb-[20px] ${centered ? "flex flex-col items-center" : ""}`}>
      <h2 className="font-poppins text-[17px] font-bold uppercase leading-none tracking-[0.02em]" style={{ color: GOLD }}>
        {children}
      </h2>
      <div className={`relative mt-[7px] h-[18px] w-[172px] ${centered ? "" : "-ml-[7px]"}`}>
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
          className={`absolute top-0 h-[18px] w-auto ${centered ? "left-1/2 -translate-x-1/2" : "left-[41px]"}`}
        />
      </div>
    </div>
  );
}

/** The "footer" section saved in admin → Pages → Home */
type FooterData = {
  enabled?: boolean;
  logoImage?: string;
  bottomBannerImage?: string;
  items?: { label?: string; name?: string; href?: string; path?: string }[];
  description?: string;
  phoneNumber?: string;
  contactEmail?: string;
  contactAddress?: string;
  mapUrl?: string;
  conferenceHelpline?: string;
  altPhoneNumber?: string;
  websiteUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  twitterUrl?: string;
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

  const descriptionText =
    footerData?.description ||
    "A global platform uniting over 100+ exhibitors from across the organic value chain, showcasing certified products, advanced agritech, sustainable practices, and the rich heritage of traditional wellness. Discover organic living with conferences and B2B opportunities.";
  const phoneNumber = footerData?.phoneNumber || "+91 96549 00525";
  const contactEmail = footerData?.contactEmail || "info@bharatorganicexpo.com";
  const contactAddress =
    footerData?.contactAddress || "12/29, Site II Industrial Area, Loni Rd, Mohan Nagar, Ghaziabad, Uttar Pradesh 201007, India";
  // Opens the same address that is shown above it (the admin can change it)
  const mapHref =
    footerData?.mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(String(contactAddress).replace(/\s+/g, " ").trim())}`;
  const conferenceHelpline = footerData?.conferenceHelpline || footerData?.altPhoneNumber || "+91 98183 53841";
  const websiteUrl = footerData?.websiteUrl || "www.bharatorganicexpo.com";
  const websiteHref = /^https?:\/\//.test(websiteUrl) ? websiteUrl : `https://${websiteUrl}`;

  // Images uploaded in admin (Footer section), else the bundled ones
  const apiOrigin = SITE_CONFIG.apiUrl.replace(/\/api$/, "");
  const uploadedOr = (uploaded: string | undefined, fallback: StaticImageData) => {
    const url = uploaded?.replace(/^http:\/\/localhost:4000/, apiOrigin);
    if (!url) return fallback;
    if (/^(https?:|data:)/.test(url)) return url;
    return `${apiOrigin}${url.startsWith("/") ? "" : "/"}${url}`;
  };
  const logoSrc = uploadedOr(footerData?.logoImage, footerLogo);
  const coOrganiserSrc = uploadedOr(footerData?.bottomBannerImage, coOrganiserLogo);

  const socialList = [
    {
      Icon: FacebookIcon,
      label: "Facebook",
      url: footerData?.facebookUrl || SITE_CONFIG.socialLinks.facebook,
      className: "bg-[radial-gradient(circle_at_35%_30%,#4f8ff7,#1559d6)] text-white",
      iconClass: "h-[21px] w-[21px]",
    },
    {
      Icon: InstagramIcon,
      label: "Instagram",
      url: footerData?.instagramUrl || SITE_CONFIG.socialLinks.instagram,
      className: "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white",
      iconClass: "h-[20px] w-[20px]",
    },
    {
      Icon: LinkedinIcon,
      label: "LinkedIn",
      url: footerData?.linkedinUrl || SITE_CONFIG.socialLinks.linkedin,
      className: "bg-[radial-gradient(circle_at_35%_30%,#3b8fd9,#0a5fb4)] text-white",
      iconClass: "h-[19px] w-[19px]",
    },
    {
      Icon: YoutubeIcon,
      label: "YouTube",
      url: footerData?.youtubeUrl || SITE_CONFIG.socialLinks.youtube,
      className: "bg-[radial-gradient(circle_at_35%_30%,#ff5a4f,#d9120b)]",
      iconClass: "h-[22px] w-[22px]",
    },
    {
      Icon: XIcon,
      label: "X",
      url: officialTwitterUrl(footerData?.twitterUrl),
      className: "bg-black text-white",
      iconClass: "h-[19px] w-[19px]",
    },
  ];

  const contactRows = [
    { Icon: Phone, filled: true, text: phoneNumber, href: `tel:${phoneNumber.replace(/\s+/g, "")}` },
    { Icon: Mail, filled: false, text: contactEmail, href: `mailto:${contactEmail}` },
    { Icon: Globe, filled: false, text: websiteUrl, href: websiteHref, external: true },
  ];

  return (
    <footer
      // The desktop design is laid out for 1600px; 1280–1599px screens show the same layout scaled down
      className="relative overflow-hidden bg-[#0a2914] font-inter text-white xl:max-[1359px]:[zoom:0.8] min-[1360px]:max-[1439px]:[zoom:0.85] min-[1440px]:max-[1519px]:[zoom:0.9] min-[1520px]:max-[1599px]:[zoom:0.95]"
    >
      {/* ── Background: dark green, with a lighter glow behind the logo column on desktop ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, #0c3018 0%, #082612 100%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden xl:block"
        style={{
          background:
            "radial-gradient(ellipse 40% 90% at 16% 40%, rgba(48,112,56,0.85), transparent 72%), radial-gradient(ellipse 60% 120% at 75% 0%, rgba(20,64,32,0.55), transparent 70%)",
        }}
      />

      {/* ── Left column decoration (desktop): leaves down the left edge and a faint mandala ── */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 hidden h-[468px] w-[470px] xl:block">
        {/* soft, out-of-focus leaves along the top */}
        <Image src={greenLeaf} alt="Decorative green leaf" width={110} height={205} sizes="110px" className="absolute left-[150px] -top-[92px] w-[110px] rotate-[100deg] opacity-30 blur-[2px]" />
        <Image src={greenLeaf} alt="Decorative green leaf" width={90} height={168} sizes="90px" className="absolute left-[372px] -top-[70px] w-[90px] rotate-[150deg] opacity-25 blur-[2.5px]" />
        {/* top-left corner */}
        <Image src={greenLeaf} alt="Decorative green leaf" width={120} height={224} sizes="120px" className="absolute -left-[44px] -top-[86px] w-[120px] -rotate-[62deg] opacity-95" />
        {/* big leaves down the left edge */}
        <Image src={greenLeaf} alt="Decorative green leaf" width={118} height={220} sizes="118px" className="absolute -left-[46px] top-[70px] w-[118px] rotate-[18deg] opacity-95" />
        <Image src={greenLeaf} alt="Decorative green leaf" width={92} height={172} sizes="92px" className="absolute -left-[40px] top-[205px] w-[92px] rotate-[28deg] opacity-80 blur-[0.6px]" />
        {/* bottom-left cluster */}
        <Image src={greenLeaf} alt="Decorative green leaf" width={120} height={224} sizes="120px" className="absolute -left-[22px] top-[322px] w-[120px] rotate-[62deg] opacity-95" />
        <Image src={greenLeaf} alt="Decorative green leaf" width={96} height={180} sizes="96px" className="absolute left-[40px] top-[372px] w-[96px] rotate-[78deg] opacity-90" />

        {/* faint mandala under the description, right half of the column */}
        <Image
          src={mandala}
          alt="Decorative mandala pattern"
          width={258}
          height={114}
          sizes="258px"
          className="absolute left-[212px] top-[350px] w-[258px] opacity-[0.6]"
        />
      </div>

      {/* ── Main area ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pt-8 pb-10 sm:px-6 lg:px-8 lg:pt-10 xl:px-0 xl:pt-[20px] xl:pb-[22px]">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-[1.12fr_1fr_1.08fr] lg:gap-x-10 lg:gap-y-12 xl:grid-cols-[28.75fr_15.5fr_18.25fr_18.15fr_19.35fr] xl:gap-x-0 xl:gap-y-0">
          {/* Logo + description */}
          <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:border-r lg:border-white/[0.13] lg:pr-8 xl:row-span-1 xl:border-r-0 xl:pl-[50px] xl:pr-[18px] xl:pt-[20px]">
            {/* The logo has dark green lettering, so it sits on a light card (as in the earlier footer) */}
            <div
              className="relative rounded-[14px] border px-[14px] pt-[8px] pb-[14px]"
              style={{
                background: "linear-gradient(180deg, #FBF5E9 0%, #F1DEC4 100%)",
                borderColor: "rgba(214,173,96,0.75)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src={logoSrc}
                alt="Bharat Organic Expo"
                width={262}
                height={106}
                sizes="262px"
                className="h-auto w-[262px] object-contain"
              />
              {/* "2nd EDITION" badge on the card's bottom edge */}
              <span
                className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[7px] border px-[11px] font-poppins text-[14px] font-semibold uppercase leading-[19px] tracking-[0.03em]"
                style={{
                  color: "#fff3dc",
                  borderColor: "#eab463",
                  background: "linear-gradient(180deg, #dc9637 0%, #b8691f 100%)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
                }}
              >
                2<sup className="text-[8px] lowercase">nd</sup> Edition
              </span>
            </div>

            <p className="mt-[26px] max-w-[380px] whitespace-pre-line text-[16px] font-normal leading-[24px] text-white">
              {descriptionText}
            </p>
          </div>

          {/* Quick links */}
          <div className="xl:border-l xl:border-white/[0.13] xl:pl-[30px] xl:pr-4 xl:pt-[4px]">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-[14px] min-[480px]:gap-x-6 sm:grid-cols-1 xl:gap-y-[15.5px]">
              {quickLinks.map((link: { name: string; path: string }, i: number) => (
                <li key={`${link.path}-${i}`}>
                  <Link
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-[8px] text-[15px] font-normal leading-[21px] text-white sm:gap-[12px] sm:text-[16px] xl:text-[17px] xl:leading-[22px] transition-colors hover:text-[#F2B632]"
                  >
                    <ChevronRight
                      size={16}
                      strokeWidth={2.5}
                      className="shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: GOLD }}
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conference highlights */}
          <div className="xl:border-l xl:border-white/[0.13] xl:pl-[26px] xl:pr-[4px] xl:pt-[4px]">
            <ColumnHeading>Conference Highlights</ColumnHeading>
            <ul className="flex flex-col gap-[14px] xl:-mt-[4px]">
              {HIGHLIGHTS.map((item) => (
                <li key={item.title} className="flex items-center gap-[15px]">
                  <span
                    className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border-[1.5px]"
                    style={{
                      borderColor: "rgba(242,182,50,0.85)",
                      background: "radial-gradient(circle at 50% 40%, #173e1f 0%, #0b2913 75%)",
                      boxShadow: "0 0 12px rgba(242,182,50,0.25), inset 0 0 8px rgba(242,182,50,0.12)",
                    }}
                  >
                    <Image src={item.icon} alt={`${item.title} icon`} width={30} height={30} sizes="30px" className="h-[29px] w-[29px] object-contain" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-poppins text-[16px] font-medium leading-[21px] text-white">{item.title}</span>
                    <span className="mt-[3px] block max-w-[200px] text-[12.5px] leading-[18px] text-white/80">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="xl:border-l xl:border-white/[0.13] xl:pl-[22px] xl:pr-[8px] xl:pt-[4px]">
            <ColumnHeading>Get In Touch</ColumnHeading>
            <ul className="space-y-[15px] xl:-mt-[4px]">
              {contactRows.map(({ Icon, filled, text, href, external }) => (
                <li key={text}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-[17px] text-[14.5px] leading-[20px] text-white transition-colors hover:text-[#F2B632]"
                  >
                    <Icon
                      className="h-[27px] w-[27px] shrink-0"
                      strokeWidth={filled ? 0 : 1.6}
                      fill={filled ? GOLD : "none"}
                      style={{ color: GOLD }}
                    />
                    <span className="min-w-0 break-words">{text}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-[17px] pt-[2px] text-[14.5px] leading-[19px] text-white">
                <MapPin className="mt-[1px] h-[29px] w-[27px] shrink-0" strokeWidth={0} fill={GOLD} />
                <span className="whitespace-pre-line">{contactAddress}</span>
              </li>
            </ul>

            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[16px] flex h-[46px] w-full max-w-[251px] items-center gap-[10px] whitespace-nowrap rounded-[7px] border border-white/75 px-[15px] text-[13px] font-medium uppercase text-white transition-colors hover:bg-white hover:text-[#0a2914]"
            >
              <MapPin className="h-[21px] w-[21px] shrink-0" strokeWidth={1.6} />
              <span className="flex-1">View on Google Maps</span>
              <ArrowRight className="h-[19px] w-[19px] shrink-0" strokeWidth={1.8} />
            </a>

            <p className="mt-[22px] font-poppins text-[13px] font-medium uppercase tracking-[0.16em] text-white/90">
              Conference Helpline
            </p>
            <a
              href={`tel:${conferenceHelpline.replace(/\s+/g, "")}`}
              className="mt-[11px] flex items-center gap-[13px] transition-opacity hover:opacity-90"
            >
              <span
                className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-full border-[1.5px]"
                style={{ borderColor: GOLD, boxShadow: "0 0 10px rgba(242,182,50,0.25)" }}
              >
                <Phone className="h-[19px] w-[19px]" strokeWidth={1.8} style={{ color: GOLD }} />
              </span>
              <span className="font-poppins text-[19px] font-semibold tracking-[0.01em]" style={{ color: GOLD }}>
                {conferenceHelpline}
              </span>
            </a>
          </div>

          {/* Organised by + follow us */}
          <div className="flex flex-col items-center xl:border-l xl:border-white/[0.13] xl:px-[24px] xl:pt-[4px]">
            <ColumnHeading align="center">Organised By</ColumnHeading>

            <div className="flex w-full max-w-[255px] flex-col items-center xl:-mt-[6px]">
              <div className="flex h-[83px] w-full items-center justify-center rounded-[8px] border border-white/45 bg-[linear-gradient(180deg,#1b4129_0%,#11301d_100%)] px-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                <Image
                  src={mainOrganiserLogo}
                  alt="Namo Gange Wellness Pvt. Ltd."
                  width={214}
                  height={45}
                  sizes="214px"
                  className="h-auto w-[214px]"
                />
              </div>
              <p className="mt-[6px] font-poppins text-[11.5px] font-medium uppercase tracking-[0.3em] text-white/90">
                Main Organiser
              </p>

              <div className="mt-[5px] flex h-[99px] w-full items-center justify-center rounded-[8px] border border-white/45 bg-[linear-gradient(180deg,#1b4129_0%,#11301d_100%)] px-[14px] shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                <Image
                  src={coOrganiserSrc}
                  alt="Namo Gange Trust"
                  width={216}
                  height={91}
                  sizes="216px"
                  className="h-auto w-[216px]"
                  // A light glow so the logo (made for a white background) reads on the dark box
                  style={{ filter: "drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px rgba(255,255,255,0.95)) drop-shadow(0 0 5px rgba(255,255,255,0.45))" }}
                />
              </div>
              <p className="mt-[9px] font-poppins text-[11.5px] font-medium uppercase tracking-[0.3em] text-white/90">
                Co-Organiser
              </p>
              <p className="mt-[3px] font-poppins text-[13px] font-medium uppercase tracking-[0.16em] text-white">
                Namo Gange Trust
              </p>
            </div>

            {/* Follow us */}
            <div className="mt-[15px] w-full max-w-[255px]">
              <div className="flex items-end gap-[3px]">
                <h3 className="font-poppins text-[16px] font-bold uppercase leading-none" style={{ color: GOLD }}>
                  Follow Us
                </h3>
                <Image src={goldLeaf} alt="Decorative golden leaf" width={26} height={22} sizes="26px" className="-mb-[3px] h-[22px] w-auto" />
                <span
                  className="mb-[1px] h-px flex-1"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }}
                />
              </div>
              <div className="mt-[13px] flex items-center justify-between">
                {socialList.map(({ Icon, label, url, className, iconClass }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex h-[41px] w-[41px] items-center justify-center rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] ring-[2.5px] ring-white/15 transition-transform duration-300 hover:scale-110 ${className}`}
                  >
                    <Icon className={iconClass} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-[#c99a3d]/70 bg-[#061a0c]">
        {/* Leaf peeking into the bottom-right corner */}
        <Image
          src={greenLeaf}
          alt="Decorative green leaf"
          aria-hidden="true"
          width={90}
          height={168}
          sizes="90px"
          className="pointer-events-none absolute -right-[14px] -top-[48px] hidden w-[90px] rotate-[62deg] opacity-90 xl:block"
        />
        <div className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center gap-x-8 gap-y-2.5 px-4 pt-5 pb-20 text-center text-[13px] text-white sm:text-[13.5px] md:pb-5 lg:flex-row lg:flex-wrap xl:h-[66px] xl:flex-nowrap xl:justify-between xl:gap-0 xl:px-[33px] xl:py-0 xl:text-[14.5px]">
          <span className="font-poppins font-normal">Bharat Organic Expo</span>

          <span>Copyright © {new Date().getFullYear()} Bharat Organic Expo. All Rights Reserved.</span>

          <span className="flex flex-wrap items-center justify-center gap-x-[14px] gap-y-1 whitespace-nowrap sm:gap-x-[22px] xl:gap-x-[28px]">
            <span className="hidden text-white/80 xl:inline">|</span>
            <Link href="/registration/privacy-policy" className="transition-colors hover:text-[#F2B632]">
              Privacy Policy
            </Link>
            <span className="hidden text-white/80 sm:inline">|</span>
            <Link href="/registration/terms-and-conditions" className="transition-colors hover:text-[#F2B632]">
              Terms &amp; Conditions
            </Link>
            <span className="hidden text-white/80 sm:inline">|</span>
            <Link href="/registration/refund-policy" className="transition-colors hover:text-[#F2B632]">
              Refund Policy
            </Link>
          </span>

          <span className="flex items-center gap-[10px]">
            Designed with <Heart className="h-[17px] w-[17px]" fill={GOLD} strokeWidth={0} /> for organic future
          </span>
        </div>
      </div>
    </footer>
  );
}

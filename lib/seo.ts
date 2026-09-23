import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV !== "production"
    ? "http://localhost:3002"
    : "https://bharatorganicexpo.com");

export const SITE_NAME = "Bharat Organic Expo 2027";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/logo.png`;
export const DEFAULT_OG_CARD_IMAGE = `${SITE_URL}/assets/images/og-banner.png`;

type RouteSeo = {
  path: string;
  label: string;
  title: string;
  description: string;
  ogImage: string;
  ogImageAlt: string;
  keywords: string[];
  titleSuffix?: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  index?: boolean;
};

export const seoRoutes: RouteSeo[] = [
  {
    path: "/",
    label: "Home",
    title: "Bharat Organic Expo 2027 - International Organic Trade Fair & Conference",
    description:
      "Bharat Organic Expo 2027 is India's premier international exhibition & conference for organic food, natural products, bio-farming, and sustainable agriculture.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Bharat Organic Expo 2027 International Trade Fair",
    keywords: [
      "Bharat Organic Expo",
      "Organic Trade Fair India",
      "Organic Farming Conference",
      "Natural Products Exhibition",
      "Bio-agriculture Expo Delhi",
      "Organic Industry Event 2027",
    ],
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    label: "About Us",
    title: "About Bharat Organic Expo 2027 - Vision & Mission",
    description:
      "Learn about Bharat Organic Expo 2027, bringing together organic farmers, producers, exporters, and buyers to accelerate sustainable agriculture in India.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "About Bharat Organic Expo Mission",
    keywords: ["About Bharat Organic", "Organic Mission India", "Organic Agriculture Exhibition"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/why-exhibit",
    label: "Why Exhibit",
    title: "Why Exhibit - Bharat Organic Expo 2027",
    description:
      "Showcase your organic products to thousands of global buyers, distributors, retailers, and institutional leaders at Bharat Organic Expo 2027.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Exhibit at Bharat Organic Expo 2027",
    keywords: ["Exhibit Organic Expo", "Organic Stall Booking", "Organic Business Platform"],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/why-visit",
    label: "Why Visit",
    title: "Why Visit - Bharat Organic Expo 2027",
    description:
      "Explore thousands of certified organic products, meet top organic brands, attend expert conferences, and discover sustainable innovations.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Visit Bharat Organic Expo 2027",
    keywords: ["Visit Organic Expo", "Organic Product Sourcing", "Organic Trade Buyers"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/buyer-seller-meet",
    label: "Buyer Seller Meet",
    title: "B2B Buyer Seller Meet - Bharat Organic Expo 2027",
    description:
      "Participate in targeted B2B meetings between international organic buyers, domestic distributors, and certified organic producers.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "B2B Buyer Seller Meet Bharat Organic",
    keywords: ["Organic B2B Meet", "Organic Buyer Seller", "Organic Sourcing Event"],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/exhibition-categories",
    label: "Exhibition Categories",
    title: "Exhibition Categories - Organic Food, Farming & Wellness",
    description:
      "Discover wide-ranging exhibition categories including organic food & beverages, bio-fertilizers, natural cosmetics, herbal care, and sustainable packaging.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Bharat Organic Exhibition Categories",
    keywords: ["Organic Product Categories", "Bio-fertilizer Exhibition", "Natural Cosmetics Expo"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/exhibitors",
    label: "Exhibitors List",
    title: "Exhibitors List - Bharat Organic Expo 2027",
    description:
      "Browse the complete list of participating organic brands, certified producers, exporters, and technology providers at Bharat Organic Expo 2027.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Bharat Organic Exhibitors List",
    keywords: ["Organic Exhibitors", "Organic Brands India", "Organic Exporters List"],
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/sponsorship",
    label: "Sponsorship Opportunities",
    title: "Sponsorship Opportunities - Bharat Organic Expo 2027",
    description:
      "Elevate your brand leadership through exclusive sponsorship packages at India's flagship organic trade exhibition.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Sponsorship Bharat Organic Expo",
    keywords: ["Organic Expo Sponsorship", "Brand Partner Organic", "Trade Fair Sponsor"],
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/partnership",
    label: "Partnership",
    title: "Partner With Us - Bharat Organic Expo 2027",
    description:
      "Join hands as an institutional partner, association, media partner, or industry supporter for Bharat Organic Expo 2027.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Partnership Bharat Organic Expo",
    keywords: ["Organic Partnership", "Association Partner Organic", "Media Partner Expo"],
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/registration",
    label: "Visitor Registration",
    title: "Register as Visitor - Bharat Organic Expo 2027",
    description:
      "Register online for fast-track entry to Bharat Organic Expo 2027. Access B2B conferences, exhibition halls, and networking zones.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Visitor Registration Bharat Organic Expo",
    keywords: ["Organic Expo Registration", "Visitor Pass Organic", "Trade Registration"],
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/participate-as-exhibitor",
    label: "Book a Stall",
    title: "Participate as Exhibitor - Book Stall Bharat Organic Expo 2027",
    description:
      "Book your exhibition space at Bharat Organic Expo 2027 and showcase your organic products to thousands of decision-makers.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Book Stall Bharat Organic Expo",
    keywords: ["Book Stall Organic Expo", "Exhibitor Registration", "Organic Booth Booking"],
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/blog",
    label: "Blog & News",
    title: "Organic Industry Insights & News - Bharat Organic Expo",
    description:
      "Read latest insights, market trends, certification guides, and news from the global and Indian organic agriculture industry.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Bharat Organic Blog & News",
    keywords: ["Organic Industry Blog", "Organic Farming Trends", "Organic Certification News"],
    priority: 0.75,
    changeFrequency: "daily",
  },
  {
    path: "/careers",
    label: "Careers",
    title: "Careers & Job Opportunities - Bharat Organic Expo",
    description:
      "Join our team and build a rewarding career in organic event management, trade fair coordination, and sustainable agriculture outreach.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Careers at Bharat Organic Expo",
    keywords: ["Organic Careers", "Event Management Jobs", "Agriculture Expo Jobs"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    label: "Contact Us",
    title: "Contact Bharat Organic Expo 2027 Team",
    description:
      "Get in touch with the Bharat Organic Expo team for stall booking, visitor queries, sponsorship, and media inquiries.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Contact Bharat Organic Expo Team",
    keywords: ["Contact Organic Expo", "Stall Inquiry", "Expo Helpline"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/feedback",
    label: "Feedback",
    title: "Share Your Feedback - Bharat Organic Expo",
    description: "Share your valuable feedback and suggestions to help us make Bharat Organic Expo better.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Bharat Organic Feedback",
    keywords: ["Expo Feedback", "Visitor Feedback"],
    priority: 0.4,
    changeFrequency: "monthly",
  },
  {
    path: "/thank-you",
    label: "Thank You",
    title: "Registration Confirmed - Bharat Organic Expo 2027",
    description: "Thank you for registering for Bharat Organic Expo 2027. We look forward to welcoming you.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Thank You Bharat Organic",
    keywords: ["Thank You"],
    priority: 0.1,
    changeFrequency: "yearly",
    index: false,
  },
];

export const publicSeoRoutes = seoRoutes.filter((route) => route.index !== false);

export function absoluteUrl(path = "/") {
  if (typeof path !== "string") return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, SITE_URL).toString();
}

export function normalizeOgImageUrl(image?: string | null) {
  if (!image) return DEFAULT_OG_CARD_IMAGE;
  if (/^https?:\/\//i.test(image)) return image;
  if (image.startsWith("data:")) return image;
  return absoluteUrl(image);
}

export function getSeoRoute(path: string) {
  return seoRoutes.find((route) => route.path === path) ?? null;
}

function fallbackSeoRoute(path: string): RouteSeo {
  const home = seoRoutes[0];
  return {
    ...home,
    path,
    label: home.label,
    priority: 0.5,
    changeFrequency: "monthly",
  };
}

export function createPageMetadata(path: string): Metadata {
  const route = getSeoRoute(path) ?? fallbackSeoRoute(path);
  const isIndexable = route.index !== false;
  const url = absoluteUrl(route.path);
  const ogImageUrl = normalizeOgImageUrl(route.ogImage);
  const socialTitle = `${route.title} | ${SITE_NAME}`;

  return {
    title: { absolute: socialTitle },
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: absoluteUrl(route.path),
    },
    robots: {
      index: isIndexable,
      follow: isIndexable,
      googleBot: {
        index: isIndexable,
        follow: isIndexable,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: socialTitle,
      description: route.description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: route.ogImageAlt,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: route.description,
      images: [ogImageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/assets/images/logo.png"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9220147229",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function humanizeSegment(segment: string) {
  return decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export function breadcrumbJsonLd(path: string, finalName?: string) {
  const cleanPath = path.split("?")[0].split("#")[0];
  const segments = cleanPath.split("/").filter(Boolean);

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  let cumulative = "";
  segments.forEach((segment, index) => {
    cumulative += `/${segment}`;
    const isLast = index === segments.length - 1;
    const route = getSeoRoute(cumulative);
    const name = isLast && finalName ? finalName : route?.label ?? humanizeSegment(segment);
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name,
      item: absoluteUrl(cumulative),
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

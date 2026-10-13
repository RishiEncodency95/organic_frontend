import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Disable streaming metadata: on dynamic pages (e.g. /blog/[slug]) Next otherwise streams
  // <title>, description, canonical and OG tags into <body>. Blocking metadata keeps them in <head>
  // for every visitor and crawler.
  htmlLimitedBots: /.*/,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Local development serves uploads from localhost (blocked by default since Next 16);
    // production images come from public hosts, so this stays off there
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1600, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' http://localhost:3001;",
          },
          {
            // HSTS: browsers always open the site (and its subdomains) over HTTPS for a year.
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
      {
        // Lottie player runtime (see lib/dotLottie.ts): let browsers reuse it across visits.
        source: "/dotlottie-player.wasm",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
  async redirects() {
    // Old misspelled addresses → the correct one (permanent, so Google and old links follow).
    return [
      { source: "/sponsership", destination: "/sponsorship", permanent: true },
      { source: "/participate_as_exhibiture", destination: "/participate-as-exhibitor", permanent: true },
      { source: "/about/suport_services", destination: "/about/support-services", permanent: true },
      { source: "/careers/uploade_cv", destination: "/careers/upload-cv", permanent: true },
    ];
  },
  async rewrites() {
    const backendUrl =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.BACKEND_URL ||
      (process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/?$/, "") : null) ||
      "http://localhost:5000";
    return [
      {
        source: "/api/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
      {
        source: "/uploads/:path*",
        destination: `${backendUrl}/uploads/:path*`,
      },
      {
        source: "/seo-files/:path*",
        destination: `${backendUrl}/seo-files/:path*`,
      },
      {
        source: "/participate/why-exhibit",
        destination: "/why-exhibit",
      },
      // Correctly spelled addresses served by the existing page folders (the admin CMS and SEO
      // records are keyed on the old folder names, so the folders keep them).
      {
        source: "/about/support-services",
        destination: "/about/suport_services",
      },
      {
        source: "/careers/upload-cv",
        destination: "/careers/uploade_cv",
      },
    ];
  },
};

export default nextConfig;

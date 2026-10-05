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
    ];
  },
};

export default nextConfig;

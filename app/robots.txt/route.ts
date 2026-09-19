import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4001";
const API_URL = process.env.NEXT_PUBLIC_API_URL || `${SERVER_URL}/api`;

const DEFAULT_ROBOTS = `User-Agent: *
Allow: /

Sitemap: https://bharatorganicexpo.com/sitemap.xml
`;

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/seo-settings/advanced`, {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      const seoFiles: Array<{
        fileName: string;
        originalName: string;
        filePath: string;
        fileType?: string;
      }> = data?.data?.seoFiles || [];

      // Look for custom robots file uploaded in Admin (robots.txt or User-Agent.txt or any .txt robots file)
      const robotsFile = seoFiles.find((f) => {
        const lowerName = (f.fileName || "").toLowerCase();
        const lowerOrig = (f.originalName || "").toLowerCase();
        return (
          lowerName === "robots.txt" ||
          lowerOrig === "robots.txt" ||
          lowerName.includes("user-agent") ||
          lowerOrig.includes("user-agent") ||
          lowerName.includes("robot") ||
          lowerOrig.includes("robot")
        );
      });

      if (robotsFile) {
        const fileUrl = robotsFile.filePath.startsWith("http")
          ? robotsFile.filePath
          : `${SERVER_URL}${robotsFile.filePath}`;

        const fileRes = await fetch(fileUrl, { cache: "no-store" });
        if (fileRes.ok) {
          let content = await fileRes.text();
          // Clean up double slashes in sitemap URL if present (e.g. bharatorganicexpo.com//sitemap.xml)
          content = content.replace(/(https?:\/\/[^\/]+)\/\/+/g, "$1/");

          return new Response(content, {
            status: 200,
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "public, max-age=60, s-maxage=60",
            },
          });
        }
      }
    }
  } catch (err) {
    console.error("[robots.txt] Failed to fetch custom robots file from backend:", err);
  }

  // Default clean robots.txt without any /private/ disallow
  return new Response(DEFAULT_ROBOTS, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

/**
 * Called by the backend right after admin saves settings (page Published toggle, section
 * Enabled/Disabled, page content), so the website drops its cached copy at once instead of
 * waiting out the 60s ISR window. Requires REVALIDATE_SECRET to match the backend's.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  // Every page reads the shared settings document, so refresh the whole site.
  revalidatePath("/", "layout");
  // The sitemap is a route of its own (it lists the blog posts)
  revalidatePath("/sitemap.xml");
  return NextResponse.json({ success: true, revalidated: true, now: Date.now() });
}

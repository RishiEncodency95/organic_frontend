import { MetadataRoute } from 'next';
import { getHiddenPageKeys, isLinkHidden } from '@/lib/pageVisibility';

const BASE_URL = 'https://bharatorganicexpo.com';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Static pages (always included)
const staticPages: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/about/suport_services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/buyer-seller-meet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/why-exhibit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/why-visit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/exhibitors`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/participate-as-exhibitor`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/awards`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/registration`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/sponsorship`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/partnership`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/exhibition-categories`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/e-promotion-web`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogEntries: MetadataRoute.Sitemap = [];

  try {
    // Live blog posts from the backend, page by page (the API returns at most 100 per page).
    // Cached for an hour; saving a blog in the admin panel refreshes it at once (/api/revalidate).
    type Post = { slug: string; updatedAt?: string; publishDate?: string };
    const posts: Post[] = [];
    for (let page = 1; page <= 50; page++) {
      const res = await fetch(`${API_URL}/blogs?status=published&limit=100&page=${page}`, {
        next: { revalidate: 3600 },
      });
      if (!res.ok) break;
      const data = await res.json();
      const batch: Post[] = data?.data?.posts || data?.data?.blogs || data?.posts || data?.blogs || [];
      posts.push(...batch);
      const totalPages = Number(data?.data?.totalPages) || 1;
      if (page >= totalPages || batch.length === 0) break;
    }

    {
      blogEntries = posts
        .filter((post) => post.slug)
        .map((post) => ({
          url: `${BASE_URL}/blog/${post.slug}`,
          lastModified: new Date(post.updatedAt || post.publishDate || Date.now()),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }));
    }
  } catch {
    // If API is unreachable, sitemap still works with static pages
    console.warn('[sitemap] Could not fetch blog posts from API, using static pages only.');
  }

  // Leave out pages unpublished from admin (Pages & CMS → Published toggle).
  const hiddenKeys = new Set(await getHiddenPageKeys(3600));
  const visibleStaticPages = staticPages.filter(
    (entry) => !isLinkHidden(hiddenKeys, entry.url.slice(BASE_URL.length) || '/')
  );

  return [...visibleStaticPages, ...blogEntries];
}


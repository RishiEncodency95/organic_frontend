import { API_URL } from "./api";

// Cloudinary refuses to serve PDFs from its public CDN URLs (401) on this account, so a
// brochure stored as a direct res.cloudinary.com link is routed through the backend's
// /files/pdf endpoint, which streams it inline. New uploads already store that link.
export const toViewablePdfUrl = (link: string): string =>
  /^https:\/\/res\.cloudinary\.com\/[^?#]+\.pdf$/i.test(link)
    ? `${API_URL}/files/pdf?url=${encodeURIComponent(link)}`
    : link;

import type { ImageLoaderProps } from "next/image";

const CLOUDINARY_UPLOAD_MARKER = "/image/upload/";

export const isCloudinaryImage = (src: unknown): src is string =>
  typeof src === "string" && src.includes("res.cloudinary.com/") && src.includes(CLOUDINARY_UPLOAD_MARKER);

export const buildCloudinaryImageUrl = (src: string, width: number): string => {
  if (!isCloudinaryImage(src)) return src;

  const safeWidth = Math.max(64, Math.min(Math.round(width), 1920));
  const [prefix, rawPath] = src.split(CLOUDINARY_UPLOAD_MARKER, 2);
  const pathSegments = rawPath.split("/");

  // CMS values can already contain a Cloudinary transform. Replace that first
  // transform instead of stacking a second f_auto/q_auto/w_* chain on it.
  if (/^(?:[a-z]{1,5}_[^/]+)(?:,[a-z]{1,5}_[^/]+)*$/i.test(pathSegments[0] || "")) {
    pathSegments.shift();
  }

  return `${prefix}${CLOUDINARY_UPLOAD_MARKER}f_auto,q_auto:eco,c_limit,w_${safeWidth}/${pathSegments.join("/")}`;
};

/** Uses Cloudinary's CDN transformation directly, avoiding a cold image-resize
 * request on the website VPS for every newly uploaded gallery image. */
export const cloudinaryImageLoader = ({ src, width }: ImageLoaderProps): string =>
  buildCloudinaryImageUrl(src, width);

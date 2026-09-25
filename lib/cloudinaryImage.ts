import type { ImageLoaderProps } from "next/image";

const CLOUDINARY_UPLOAD_MARKER = "/image/upload/";

export const isCloudinaryImage = (src: unknown): src is string =>
  typeof src === "string" && src.includes("res.cloudinary.com/") && src.includes(CLOUDINARY_UPLOAD_MARKER);

export const buildCloudinaryImageUrl = (src: string, width: number): string => {
  if (!isCloudinaryImage(src)) return src;

  const safeWidth = Math.max(64, Math.min(Math.round(width), 1920));
  return src.replace(
    CLOUDINARY_UPLOAD_MARKER,
    `${CLOUDINARY_UPLOAD_MARKER}f_auto,q_auto:eco,c_limit,w_${safeWidth}/`,
  );
};

/** Uses Cloudinary's CDN transformation directly, avoiding a cold image-resize
 * request on the website VPS for every newly uploaded gallery image. */
export const cloudinaryImageLoader = ({ src, width }: ImageLoaderProps): string =>
  buildCloudinaryImageUrl(src, width);

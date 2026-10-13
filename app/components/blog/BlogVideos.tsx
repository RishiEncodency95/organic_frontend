"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import { Reveal } from "./BlogReveal";
import { API_URL, SERVER_URL } from "@/lib/api";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

/*
 * "Video Insights" — the published videos from the admin's Video Highlights
 * (the same list the Gallery page shows), played in a popup on click.
 */

const blogVideosData = {
  title: "Video Insights",
  actionText: "View all",
};

/** Where "View all" goes */
export const ALL_VIDEOS_PATH = "/blog/videos";
/** How many videos the /blog page shows */
const BLOG_PAGE_VIDEOS = 3;

type SourceType = "YOUTUBE" | "INSTAGRAM" | "UPLOAD";
type Video = { _id: string; title: string; videoUrl: string; sourceType: SourceType; thumbnail: string; objectPosition: string };
type VideoApi = { _id: string; title?: string; videoUrl?: string; videoType?: string; thumbnail?: string; objectPosition?: string; status?: string };

const resolveUrl = (src: string) =>
  !src || /^(https?:|data:)/i.test(src) ? src : `${SERVER_URL}${src.startsWith("/") ? "" : "/"}${src}`;

const youTubeId = (url: string): string | null => {
  const m = url.trim().match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/|live\/)|youtu\.be\/)([^"&?/\s]{11})/i);
  return m ? m[1] : null;
};

const instagramEmbed = (url: string) => {
  const m = url.match(/instagram\.com\/(reel|p|tv|share\/reel)\/([\w-]+)/i);
  return m ? `https://www.instagram.com/${m[1].toLowerCase() === "p" ? "p" : "reel"}/${m[2]}/embed/` : url;
};

/** YouTube's own picture of a video, best first: a Short's portrait 720×1280, else the 16:9
 *  1280×720 (no black bars), else the 4:3 hqdefault that always exists */
const youTubeThumbs = (url: string): string[] => {
  const id = youTubeId(url);
  if (!id) return [];
  const base = `https://i.ytimg.com/vi/${id}`;
  return /\/shorts\//i.test(url) ? [`${base}/oardefault.jpg`, `${base}/hq720.jpg`, `${base}/hqdefault.jpg`] : [`${base}/hq720.jpg`, `${base}/hqdefault.jpg`];
};

/** Pictures to try for the card, best first (empty when there is none, e.g. the Instagram placeholder) */
const cardImages = (v: Video): string[] => {
  const own = v.thumbnail && !v.thumbnail.startsWith("data:image/svg+xml") ? v.thumbnail : "";
  // The admin saves YouTube's small 4:3 picture for YouTube videos; use the sharper, bar-free ones instead
  const savedYouTubeDefault = /(?:img\.youtube\.com|i\.ytimg\.com)\/vi\//i.test(own);
  if (v.sourceType === "YOUTUBE" && (!own || savedYouTubeDefault)) return youTubeThumbs(v.videoUrl);
  return own ? [own] : [];
};

/** A picture that falls back to the next one when it fails to load */
function CardImage({ srcs, alt, position }: { srcs: string[]; alt: string; position: string }) {
  const [i, setI] = useState(0);
  if (i >= srcs.length) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- needs onError to try the next YouTube picture
    <img
      key={srcs[i]}
      src={srcs[i]}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setI((n) => n + 1)}
      style={{ objectPosition: position }}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    />
  );
}

/* Instagram's embed is 400px wide: a 54px header, then a 400×500 media box, then captions.
 * A reel (9:16) sits in the middle of that box with black bars at its sides. */
const IG_WIDTH = 400;
const IG_HEADER = 54;
const IG_MEDIA_HEIGHT = 500;
const IG_REEL_WIDTH = (IG_MEDIA_HEIGHT * 9) / 16;

/** The reel itself as the card picture: scaled so its media fills the card and the header,
 *  captions and edges stay outside (cropped by the card) */
function InstagramFrame({ url, title }: { url: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setBox({ w: entry.contentRect.width, h: entry.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  // Fill the card with the picture itself: for a reel that is the 9:16 strip, not the barred box
  const contentWidth = /\/(reel|tv|share\/reel)\//i.test(url) ? IG_REEL_WIDTH : IG_WIDTH;
  const scale = box ? Math.max(box.h / IG_MEDIA_HEIGHT, box.w / contentWidth) : 0;
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {box && (
        <iframe
          src={instagramEmbed(url)}
          loading="lazy"
          scrolling="no"
          title={title}
          tabIndex={-1}
          aria-hidden="true"
          className="absolute pointer-events-none origin-top-left"
          style={{
            width: IG_WIDTH,
            height: IG_HEADER + IG_MEDIA_HEIGHT + 160,
            border: "none",
            left: (box.w - IG_WIDTH * scale) / 2,
            top: (box.h - IG_MEDIA_HEIGHT * scale) / 2 - IG_HEADER * scale,
            transform: `scale(${scale})`,
          }}
        />
      )}
    </div>
  );
}

/** Published videos, newest first (as the admin orders them); null while loading */
function useBlogVideos() {
  const [videos, setVideos] = useState<Video[] | null>(null);
  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/website/gallery/video-highlights/items`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!active) return;
        const list: VideoApi[] = Array.isArray(json?.data) ? json.data : [];
        setVideos(
          list
            .filter((v) => v.status === "Published" && v.videoUrl)
            .map((v) => ({
              _id: v._id,
              title: v.title || "Video",
              videoUrl: v.videoUrl!,
              sourceType: ((v.videoType || "youtube").toUpperCase() as SourceType),
              thumbnail: resolveUrl(v.thumbnail || ""),
              objectPosition: v.objectPosition || "center",
            }))
        );
      })
      .catch(() => active && setVideos([]));
    return () => {
      active = false;
    };
  }, []);
  return videos;
}

function VideoCard({ v, i, onPlay }: { v: Video; i: number; onPlay: (v: Video) => void }) {
  const imgs = cardImages(v);
  return (
    <Reveal delay={(i % 10) * 100} direction={(["left", "zoom", "right"] as const)[i % 3]}>
      <button type="button" onClick={() => onPlay(v)} className="group block w-full text-left" aria-label={`Play video: ${v.title}`}>
        <div className="relative overflow-hidden rounded-xl aspect-[2/3] shadow-sm bg-neutral-900">
          {imgs.length ? (
            <CardImage srcs={imgs} alt={v.title} position={v.sourceType === "YOUTUBE" ? "center" : v.objectPosition} />
          ) : v.sourceType === "INSTAGRAM" ? (
            // No picture saved for this reel: the reel itself is the card picture
            <InstagramFrame url={v.videoUrl} title={v.title} />
          ) : v.sourceType === "UPLOAD" ? (
            <video src={`${resolveUrl(v.videoUrl)}#t=0.5`} preload="metadata" muted playsInline className="absolute inset-0 w-full h-full object-cover" />
          ) : null}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            {/* Sits over the reel's own play icon, so only one shows */}
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125">
              <Play className="w-4 h-4 text-[#2b5825] ml-0.5" fill="currentColor" />
            </span>
          </div>
        </div>
        <h3 className="font-poppins font-semibold text-[13px] sm:text-[14px] text-[#1b5e20] mt-2 line-clamp-2 group-hover:text-[#3b8c2a] transition-colors leading-snug">
          {v.title}
        </h3>
      </button>
    </Reveal>
  );
}

function VideoSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="rounded-xl aspect-[2/3] bg-gray-100 animate-pulse" />
      <div className="h-3.5 w-4/5 rounded bg-gray-100 animate-pulse mt-2" />
    </div>
  );
}

/** Popup player: YouTube, Instagram or an uploaded file */
function VideoPlayer({ video, onClose }: { video: Video | null; onClose: () => void }) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    lockScroll();
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockScroll();
    };
  }, [video, onClose]);

  if (!video || typeof document === "undefined") return null;
  const yt = video.sourceType === "YOUTUBE" ? youTubeId(video.videoUrl) : null;
  const insta = video.videoUrl.includes("instagram.com");
  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label={video.title}>
      <div
        className={`relative w-full ${insta ? "max-w-[420px] h-[85vh] max-h-[660px] bg-white rounded-2xl" : "max-w-5xl aspect-video bg-black rounded-xl"} overflow-hidden shadow-2xl flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-2.5 right-2.5 text-white bg-black/70 hover:bg-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-50 transition-colors shadow-md"
          onClick={onClose}
          aria-label="Close video"
        >
          ✕
        </button>
        {yt ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : video.sourceType === "UPLOAD" ? (
          <video src={resolveUrl(video.videoUrl)} controls autoPlay className="w-full h-full object-contain" />
        ) : (
          <iframe
            src={insta ? instagramEmbed(video.videoUrl) : video.videoUrl}
            title={video.title}
            scrolling="no"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        )}
      </div>
    </div>,
    document.body
  );
}

const BlogVideos = () => {
  const videos = useBlogVideos();
  const [playing, setPlaying] = useState<Video | null>(null);
  if (videos && videos.length === 0) return null;
  return (
    <section className="container mx-auto max-w-[1400px] px-6 lg:px-0 py-2 md:py-4 font-inter">
      <SectionHeading action={blogVideosData.actionText} actionHref={ALL_VIDEOS_PATH}>{blogVideosData.title}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos === null
          ? Array.from({ length: BLOG_PAGE_VIDEOS }, (_, i) => <VideoSkeleton key={i} />)
          : videos.slice(0, BLOG_PAGE_VIDEOS).map((v, i) => <VideoCard key={v._id} v={v} i={i} onPlay={setPlaying} />)}
      </div>
      <VideoPlayer video={playing} onClose={() => setPlaying(null)} />
    </section>
  );
};

/** "View all" page: every published video */
export function BlogAllVideos() {
  const videos = useBlogVideos();
  const [playing, setPlaying] = useState<Video | null>(null);
  return (
    <section className="w-full px-6 lg:px-14 py-4 md:py-6 font-inter">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
        <SectionHeading as="h1">{blogVideosData.title}</SectionHeading>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#3b8c2a] hover:text-[#2d7a2d] transition-colors mb-3"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </div>
      {videos !== null && (
        <p className="text-[12px] text-gray-500 mb-3">
          {videos.length} video{videos.length === 1 ? "" : "s"}
        </p>
      )}
      {videos !== null && videos.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 bg-[#f9fcf9] px-6 py-14 text-center">
          <p className="text-[15px] font-semibold text-[#1b5e20]">No videos to show yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
          {videos === null
            ? Array.from({ length: 6 }, (_, i) => <VideoSkeleton key={i} />)
            : videos.map((v, i) => <VideoCard key={v._id} v={v} i={i} onPlay={setPlaying} />)}
        </div>
      )}
      <VideoPlayer video={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}

export default BlogVideos;

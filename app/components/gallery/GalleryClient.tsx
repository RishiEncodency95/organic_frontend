"use client";

import React, { useState, useEffect } from 'react';
import Hero from '@/app/components/gallery/Hero';
import YearsFilter from '@/app/components/gallery/YearsFilter';
import CategoryFilter from '@/app/components/gallery/CategoryFilter';
import GalleryGrid from '@/app/components/gallery/GalleryGrid';
import Counters from '@/app/components/gallery/Counters';
import VideoHighlights from '@/app/components/gallery/VideoHighlights';
import JoinUsBanner from '@/app/components/gallery/JoinUsBanner';
import { API_URL, SERVER_URL } from '@/lib/api';

const resolveImageUrl = (src: string): string => {
  if (!src) return src;
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) return src;
  return `${SERVER_URL}${src.startsWith("/") ? "" : "/"}${src}`;
};

const normaliseGallery = (items: any): any[] =>
  Array.isArray(items)
    ? items.map((item: any) => ({
        ...item,
        image: resolveImageUrl(item.image),
      }))
    : [];

const normaliseVideos = (items: any): any[] =>
  Array.isArray(items)
    ? items
        .filter((video: any) => video.status === 'Published')
        .map((video: any) => ({
          _id: video._id,
          title: video.title,
          thumbnail: resolveImageUrl(video.thumbnail),
          sourceType: (video.videoType || 'youtube').toUpperCase(),
          videoUrl: video.videoUrl,
          objectPosition: video.objectPosition || 'center 10%',
          orderNumber: video.order || 0,
        }))
    : [];

interface GalleryClientProps {
  heroData?: any;
  initialMeta?: any;
  initialGallery?: any;
  initialVideos?: any;
}

export default function GalleryClient({
  heroData,
  initialMeta,
  initialGallery,
  initialVideos,
}: GalleryClientProps) {
  const [activeYear, setActiveYear] = useState('All Years');
  const [activeCategory, setActiveCategory] = useState('All Activities');
  const [searchQuery, setSearchQuery] = useState('');

  const [dbYears, setDbYears] = useState<string[]>(() =>
    Array.isArray(initialMeta?.years) ? initialMeta.years : [],
  );
  const [dbCategories, setDbCategories] = useState<string[]>(() =>
    Array.isArray(initialMeta?.categories) ? initialMeta.categories : [],
  );
  const [dbGallery, setDbGallery] = useState<any[]>(() => normaliseGallery(initialGallery));
  const [dbVideos, setDbVideos] = useState<any[]>(() => normaliseVideos(initialVideos));

  useEffect(() => {
    const needsMeta = initialMeta === null || initialMeta === undefined;
    const needsGallery = initialGallery === null || initialGallery === undefined;
    const needsVideos = initialVideos === null || initialVideos === undefined;
    if (!needsMeta && !needsGallery && !needsVideos) return;

    const fetchGalleryData = async () => {
      try {
        const [metaRes, itemsRes, videosRes] = await Promise.all([
          needsMeta
            ? fetch(`${API_URL}/website/gallery/meta`, { cache: 'default' }).catch(() => null)
            : null,
          needsGallery
            ? fetch(`${API_URL}/website/gallery/items`, { cache: 'default' }).catch(() => null)
            : null,
          needsVideos
            ? fetch(`${API_URL}/website/gallery/video-highlights/items`, { cache: 'default' }).catch(() => null)
            : null,
        ]);

        if (metaRes && metaRes.ok) {
          const metaJson = await metaRes.json();
          if (Array.isArray(metaJson?.data?.years) && metaJson.data.years.length > 0) {
            setDbYears(metaJson.data.years);
          }
          if (Array.isArray(metaJson?.data?.categories) && metaJson.data.categories.length > 0) {
            setDbCategories(metaJson.data.categories);
          }
        }

        if (itemsRes && itemsRes.ok) {
          const itemsJson = await itemsRes.json();
          if (Array.isArray(itemsJson?.data)) {
            setDbGallery(normaliseGallery(itemsJson.data));
          }
        }

        if (videosRes && videosRes.ok) {
          const videosJson = await videosRes.json();
          if (Array.isArray(videosJson?.data)) {
            setDbVideos(normaliseVideos(videosJson.data));
          }
        }
      } catch (err) {
        console.error("Failed to fetch gallery data from backend:", err);
      }
    };

    fetchGalleryData();
  }, [initialGallery, initialMeta, initialVideos]);

  return (
    <main className="min-h-screen bg-white font-inter">
      <Hero initialData={heroData} />
      <YearsFilter 
        activeYear={activeYear} 
        onYearChange={setActiveYear} 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        dbYears={dbYears}
      />
      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
        dbCategories={dbCategories}
      />
      <GalleryGrid 
        activeYear={activeYear} 
        activeCategory={activeCategory} 
        searchQuery={searchQuery}
        dbGallery={dbGallery}
      />
      <Counters />
      <VideoHighlights dbVideos={dbVideos} />
      <JoinUsBanner />
    </main>
  );
}

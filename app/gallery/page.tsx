"use client";

import React, { useState, useEffect } from 'react';
import Hero from '@/app/components/gallery/Hero';
import YearsFilter from '@/app/components/gallery/YearsFilter';
import CategoryFilter from '@/app/components/gallery/CategoryFilter';
import GalleryGrid from '@/app/components/gallery/GalleryGrid';
import Counters from '@/app/components/gallery/Counters';
import VideoHighlights from '@/app/components/gallery/VideoHighlights';
import JoinUsBanner from '@/app/components/gallery/JoinUsBanner';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

export default function GalleryPage() {
  const [activeYear, setActiveYear] = useState('All Years');
  const [activeCategory, setActiveCategory] = useState('All Activities');
  const [searchQuery, setSearchQuery] = useState('');

  const [dbYears, setDbYears] = useState<string[]>([]);
  const [dbCategories, setDbCategories] = useState<string[]>([]);
  const [dbGallery, setDbGallery] = useState<any[]>([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const [metaRes, itemsRes] = await Promise.all([
          fetch(`${BACKEND_URL}/api/website/gallery/meta`, { cache: 'no-store' }).catch(() => null),
          fetch(`${BACKEND_URL}/api/website/gallery/items`, { cache: 'no-store' }).catch(() => null),
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
          if (Array.isArray(itemsJson?.data) && itemsJson.data.length > 0) {
            setDbGallery(itemsJson.data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch gallery data from backend:", err);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <main className="min-h-screen bg-white font-inter">
      <Hero />
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
      <VideoHighlights />
      <JoinUsBanner />
    </main>
  );
}

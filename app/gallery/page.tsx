"use client";

import React, { useState } from 'react';
import Hero from '@/app/components/gallery/Hero';
import YearsFilter from '@/app/components/gallery/YearsFilter';
import CategoryFilter from '@/app/components/gallery/CategoryFilter';
import GalleryGrid from '@/app/components/gallery/GalleryGrid';
import Counters from '@/app/components/gallery/Counters';
import VideoHighlights from '@/app/components/gallery/VideoHighlights';
import JoinUsBanner from '@/app/components/gallery/JoinUsBanner';

export default function GalleryPage() {
  const [activeYear, setActiveYear] = useState('All Years');
  const [activeCategory, setActiveCategory] = useState('All Activities');

  return (
    <main className="min-h-screen bg-white font-inter">
      <Hero />
      <YearsFilter 
        activeYear={activeYear} 
        onYearChange={setActiveYear} 
      />
      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <GalleryGrid 
        activeYear={activeYear} 
        activeCategory={activeCategory} 
      />
      <Counters />
      <VideoHighlights />
      <JoinUsBanner />
    </main>
  );
}

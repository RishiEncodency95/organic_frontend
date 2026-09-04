"use client";
import React, { useState, useEffect } from "react";
import ExhibitionHero from "@/app/components/exhibition-categories/ExhibitionHero";
import ExhibitionSectors from "@/app/components/exhibition-categories/ExhibitionSectors";
import CategoryDetailsShowcase from "@/app/components/exhibition-categories/CategoryDetailsShowcase";
import AyushDetailsShowcase from "@/app/components/exhibition-categories/AyushDetailsShowcase";
import OrganicFarmingShowcase from "@/app/components/exhibition-categories/OrganicFarmingShowcase";

export default function ExhibitionCategoriesPage() {
  const [activeCategory, setActiveCategory] = useState("organic-food-beverages");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveCategory(hash);
      }
    };
    
    // Initial check
    handleHashChange();
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="min-h-screen">
      <ExhibitionHero />
      <ExhibitionSectors />
      
      {activeCategory === "organic-food-beverages" && <CategoryDetailsShowcase />}
      {activeCategory === "ayush-ayurveda-herbal" && <AyushDetailsShowcase />}
      {activeCategory === "organic-natural-farming" && <OrganicFarmingShowcase />}
      
      {!["organic-food-beverages", "ayush-ayurveda-herbal", "organic-natural-farming"].includes(activeCategory) && (
        <div className="w-full py-20 text-center text-gray-500 font-medium">
          Detailed showcase for this category is coming soon.
        </div>
      )}
    </main>
  );
}

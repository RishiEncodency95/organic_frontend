"use client";
import React, { useState, useEffect } from "react";
import ExhibitionHero from "@/app/components/exhibition-categories/ExhibitionHero";
import ExhibitionSectors from "@/app/components/exhibition-categories/ExhibitionSectors";
import CategoryDetailsShowcase from "@/app/components/exhibition-categories/CategoryDetailsShowcase";
import AyushDetailsShowcase from "@/app/components/exhibition-categories/AyushDetailsShowcase";
import OrganicFarmingShowcase from "@/app/components/exhibition-categories/OrganicFarmingShowcase";
import OrganicInputsShowcase from "@/app/components/exhibition-categories/OrganicInputsShowcase";
import DairyLivestockShowcase from "@/app/components/exhibition-categories/DairyLivestockShowcase";
import NaturalBeautyShowcase from "@/app/components/exhibition-categories/NaturalBeautyShowcase";
import NutraceuticalsShowcase from "@/app/components/exhibition-categories/NutraceuticalsShowcase";
import SustainablePackagingShowcase from "@/app/components/exhibition-categories/SustainablePackagingShowcase";
import AgriTechShowcase from "@/app/components/exhibition-categories/AgriTechShowcase";
import CertificationTradeShowcase from "@/app/components/exhibition-categories/CertificationTradeShowcase";
import { makeSectionGate } from "@/lib/sectionGate";

// `disabledSections`: exhibitionCategoriesPage section keys switched off in admin.
export default function ExhibitionCategoriesContent({ heroData, disabledSections = [] }: { heroData?: any; disabledSections?: string[] }) {
  const show = makeSectionGate(disabledSections);
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
      {show("exhibition-hero") && <ExhibitionHero data={heroData} />}
      {show("exhibition-sectors") && <ExhibitionSectors />}
      
      {activeCategory === "organic-food-beverages" && show("category-showcase-food-beverages") && <CategoryDetailsShowcase />}
      {activeCategory === "ayush-ayurveda-herbal" && show("category-showcase-ayush") && <AyushDetailsShowcase />}
      {activeCategory === "organic-natural-farming" && show("category-showcase-farming") && <OrganicFarmingShowcase />}
      {activeCategory === "organic-inputs" && show("category-showcase-inputs") && <OrganicInputsShowcase />}
      {activeCategory === "dairy-livestock" && show("category-showcase-dairy") && <DairyLivestockShowcase />}
      {activeCategory === "natural-beauty-personal-care" && show("category-showcase-beauty") && <NaturalBeautyShowcase />}
      {activeCategory === "nutraceuticals-functional-nutrition" && show("category-showcase-nutraceuticals") && <NutraceuticalsShowcase />}
      {activeCategory === "sustainable-packaging-processing" && show("category-showcase-packaging") && <SustainablePackagingShowcase />}
      {activeCategory === "agritech-greentech-innovation" && show("category-showcase-agritech") && <AgriTechShowcase />}
      {activeCategory === "certification-export-trade" && show("category-showcase-certification") && <CertificationTradeShowcase />}
      
      {!["organic-food-beverages", "ayush-ayurveda-herbal", "organic-natural-farming", "organic-inputs", "dairy-livestock", "natural-beauty-personal-care", "nutraceuticals-functional-nutrition", "sustainable-packaging-processing", "agritech-greentech-innovation", "certification-export-trade"].includes(activeCategory) && (
        <div className="w-full py-20 text-center text-gray-500 font-medium">
          Detailed showcase for this category is coming soon.
        </div>
      )}
    </main>
  );
}

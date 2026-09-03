import React from "react";
import ExhibitionHero from "@/app/components/exhibition-categories/ExhibitionHero";
import ExhibitionSectors from "@/app/components/exhibition-categories/ExhibitionSectors";
import CategoryDetailsShowcase from "@/app/components/exhibition-categories/CategoryDetailsShowcase";

export default function ExhibitionCategoriesPage() {
  return (
    <main className="min-h-screen">
      <ExhibitionHero />
      <ExhibitionSectors />
      <CategoryDetailsShowcase />
    </main>
  );
}

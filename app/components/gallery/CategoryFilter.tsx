"use client";
import React from 'react';
import { 
  Building2, 
  Microscope, 
  Users, 
  UserCircle, 
  Wrench, 
  Tent, 
  Music, 
  Trophy, 
  Network,
  LayoutGrid
} from 'lucide-react';
import SectionContainer from '@/app/components/layout/SectionContainer';

const categories = [
  { name: 'Inauguration', icon: Building2 },
  { name: 'Scientific Sessions', icon: Microscope },
  { name: 'Panel Discussions', icon: Users },
  { name: 'Speakers', icon: UserCircle },
  { name: 'Workshops', icon: Wrench },
  { name: 'Exhibition (Expo)', icon: Tent },
  { name: 'Cultural Programs', icon: Music },
  { name: 'Awards', icon: Trophy },
  { name: 'Networking', icon: Network },
  { name: 'All Activities', icon: LayoutGrid },
];

interface CategoryFilterProps {
  activeCategory?: string;
  onCategoryChange?: (categoryName: string) => void;
  dbCategories?: any[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory = 'Inauguration', onCategoryChange, dbCategories = [] }) => {
  const dynamicCategories = dbCategories.length > 0 ? [
    ...dbCategories.map(c => {
      const existing = categories.find(hc => hc.name.toLowerCase() === c.category.toLowerCase());
      return { name: c.category, icon: existing ? existing.icon : LayoutGrid };
    }),
    { name: 'All Activities', icon: LayoutGrid }
  ] : categories;

  return (
    <section className="w-full pt-0 pb-4 font-inter">
      <SectionContainer>
        <div 
          className="bg-white rounded-xl p-2 px-3 flex flex-nowrap items-center gap-2 overflow-x-auto hide-scrollbar w-full justify-start"
          style={{ boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' }}
        >
          {dynamicCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => onCategoryChange?.(category.name)}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[11.5px] lg:text-[12.5px] font-semibold transition-all border whitespace-nowrap ${
                  isActive
                    ? 'bg-[#c2410c] text-white border-[#c2410c]'
                    : 'bg-white text-black border-gray-200 hover:border-[#c2410c] hover:text-[#c2410c]'
                }`}
              >
                <Icon size={12} className={isActive ? 'text-white' : 'text-[#c2410c]'} />
                {category.name}
              </button>
            );
          })}
        </div>
        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </SectionContainer>
    </section>
  );
};

export default CategoryFilter;

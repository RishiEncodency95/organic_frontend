"use client";

import React from 'react';
import Link from 'next/link';
import { Leaf, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const articles = [
  {
    id: 1,
    featured: true,
    date: "Jan 12, 2027",
    title: "Bharat Bharat Organic Expo 2027: A New Era for Sustainable Farming",
    description: "Discover how the Bharat Bharat Organic Expo 2027 is uniting global buyers with India's top organic farmers and sustainable brands to revolutionize the industry.",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    featured: true,
    date: "Feb 5, 2027",
    title: "The Rise of Eco-Friendly Products in the Global Market",
    description: "Explore the booming demand for eco-friendly products and how sustainable packaging and manufacturing are transforming consumer habits worldwide.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    featured: true,
    date: "Mar 18, 2027",
    title: "Empowering Certified Farmers Through B2B Networking",
    description: "Learn how direct buyer-seller meetings are helping certified organic farmers secure bulk orders and expand their reach in the international market.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
  }
];

const LatestInsights = () => {
  return (
    <section className="relative w-full bg-white py-2 md:py-4 lg:py-4 overflow-hidden border-t border-gray-100">

      <div className="w-full px-4 md:px-11 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col mb-6">

          <div className="flex flex-col items-center text-center w-full relative">
            <div className="flex items-center gap-2 text-[#3b8c2a] font-bold text-[12px] md:text-[13px] lg:text-[14px] uppercase tracking-widest mb-4">
              <Leaf className="w-4 h-4" />
              <span>LATEST INSIGHTS</span>
              <Leaf className="w-4 h-4" />
            </div>

            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#1a1a1a] leading-[1.2] mb-4 tracking-tight font-serif">
              Organic Industry <span className="text-[#0f5c2e]">Perspectives</span>
            </h2>

            {/* Title Divider */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-10 h-px bg-gray-300"></div>
              <Leaf className="w-4 h-4 text-[#3b8c2a] fill-[#3b8c2a] opacity-80" />
              <div className="w-10 h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full text-left gap-6">
              <p className="text-[16px] md:text-[18px] text-gray-600 max-w-[600px] leading-[1.6] text-center md:text-left font-normal">
                Stay informed with the latest trends, insights and innovations <br className="hidden md:block" />
                shaping the future of the organic and sustainable sectors.
              </p>

              <Link href="/blog" className="bg-[#3b8c2a] hover:bg-[#2d7a2d] text-white px-6 py-2 rounded-md font-semibold text-[12px] md:text-[14px] tracking-widest uppercase transition-colors flex items-center gap-2 shadow-lg shadow-green-600/20 group whitespace-nowrap min-h-[44px]">
                View all articles
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article) => (
            <div key={article.id} className="relative bg-[#fcfdfc] rounded-[24px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.06),0_2px_5px_rgba(0,0,0,0.03)] border border-gray-200/60 flex flex-col group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1),0_5px_15px_rgba(0,0,0,0.05)]">

              {/* Inner 3D Emboss Highlight */}
              <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(0,0,0,0.03)] pointer-events-none z-30"></div>

              {/* Image Container */}
              <div className="relative h-[220px] md:h-[240px] w-full overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />

                {/* Featured Badge */}
                {article.featured && (
                  <div className="absolute top-4 left-4 bg-[#1b5e20] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-md z-20">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-2 lg:px-4 lg:py-2  flex flex-col flex-1 relative bg-white">
                {/* Subtle Leaf bg inside card */}
                <div className="absolute bottom-3 right-3 w-10 h-10 opacity-[0.06] pointer-events-none">
                  <Leaf className="w-full h-full text-[#3b8c2a] fill-[#3b8c2a]" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-[#3b8c2a]" strokeWidth={2.5} />
                  <span className="text-gray-700 font-medium text-[13px]">{article.date}</span>
                </div>

                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0f5c2e] leading-[1.3] mb-3 group-hover:text-[#3b8c2a] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-500 text-[16px] leading-[1.6] mb-4 flex-1 line-clamp-3">
                  {article.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-[#1b5e20] font-bold text-[14px] group/btn transition-colors hover:text-[#3b8c2a]">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" strokeWidth={2.5} />
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-500 font-medium text-[13px]">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0f5c2e]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>

          <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LatestInsights;

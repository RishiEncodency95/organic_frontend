"use client";

import React from 'react';
import Link from 'next/link';
import { Leaf, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const articles = [
  {
    id: 1,
    featured: true,
    date: "Jan 12, 2027",
    title: "Bharat Organic Expo 2027: A New Era for Sustainable Farming",
    description: "Discover how the Bharat Organic Expo 2027 is uniting global buyers with India's top organic farmers and sustainable brands to revolutionize the industry.",
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
    <section className="relative w-full bg-white py-4 md:py-6 overflow-hidden border-t border-gray-100 font-inter">

      <div className="w-full px-4 md:px-11 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col mb-6">

          <div className="flex flex-col items-center text-center w-full relative">
            <div className="flex items-center gap-2 text-[#1b5e20] font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 font-poppins">
              <Leaf className="w-4 h-4" />
              <span>LATEST INSIGHTS</span>
              <Leaf className="w-4 h-4" />
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block mb-3">
              Organic Industry <span className="text-[#3b8c2a]">Perspectives</span>
            </h2>

            {/* Title Divider */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-10 h-px bg-gray-300"></div>
              <Leaf className="w-4 h-4 text-[#3b8c2a] fill-[#3b8c2a] opacity-80" />
              <div className="w-10 h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full text-left gap-6">
              <p className="text-sm md:text-base text-gray-800 font-semibold max-w-[600px] leading-relaxed text-center md:text-left font-inter">
                Stay informed with the latest trends, insights and innovations <br className="hidden md:block" />
                shaping the future of the organic and sustainable sectors.
              </p>

              <Link href="/blog" className="bg-[#1b5e20] hover:bg-[#144417] text-white px-5 py-2.5 rounded-md font-semibold text-xs tracking-widest uppercase transition-colors flex items-center gap-2 shadow-md group whitespace-nowrap min-h-[40px] font-poppins">
                View all articles
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 font-inter">
          {articles.map((article) => (
            <div key={article.id} className="relative bg-[#fcfdfc] rounded-[20px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-200/60 flex flex-col group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">

              {/* Inner 3D Emboss Highlight */}
              <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(0,0,0,0.03)] pointer-events-none z-30"></div>

              {/* Image Container */}
              <div className="relative h-[200px] md:h-[220px] w-full overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />

                {/* Featured Badge */}
                {article.featured && (
                  <div className="absolute top-4 left-4 bg-[#1b5e20] text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-md z-20 font-poppins">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5 flex flex-col flex-1 relative bg-white font-inter">
                {/* Subtle Leaf bg inside card */}
                <div className="absolute bottom-3 right-3 w-10 h-10 opacity-[0.06] pointer-events-none">
                  <Leaf className="w-full h-full text-[#3b8c2a] fill-[#3b8c2a]" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#3b8c2a]" strokeWidth={2.5} />
                  <span className="text-gray-700 font-semibold text-xs">{article.date}</span>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-[#1b5e20] leading-snug mb-2 font-poppins group-hover:text-[#3b8c2a] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-700 text-xs md:text-sm font-semibold leading-relaxed mb-4 flex-1 line-clamp-3 font-inter">
                  {article.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-[#1b5e20] font-semibold text-xs md:text-sm group/btn transition-colors hover:text-[#3b8c2a] font-poppins">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" strokeWidth={2.5} />
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-600 font-semibold text-xs">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Controls */}
        <div className="flex items-center justify-center gap-4">
          <button aria-label="Previous articles" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0f5c2e]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>

          <button aria-label="Next articles" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LatestInsights;

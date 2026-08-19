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
    <section className="relative w-full py-3 md:py-5 overflow-hidden border-t border-gray-100 font-inter" style={{ backgroundColor: "#F7F8F0" }}>

      <div className="w-full px-4 md:px-11 relative z-10">

        {/* BRANDED HEADING (Matching WhoCanParticipate font-poppins & font-semibold) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 md:mb-5 gap-3 md:gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <div className="h-px w-8 bg-[#1b5e20]" />
              <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1b5e20] font-bold text-[10px] md:text-xs font-poppins">
                LATEST INSIGHTS
              </span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins">
              Organic Industry <span className="text-[#d26019]">Perspectives</span>
            </h2>

          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[#d26019] font-poppins font-bold text-[11px] md:text-xs uppercase tracking-widest hover:gap-4 transition-all w-fit"
          >
            Explore All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4 font-inter">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative bg-white rounded-xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >

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

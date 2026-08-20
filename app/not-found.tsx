import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Bharat Organic Expo 2027",
  description: "The page you are looking for is not available.",
};

export default function NotFound() {
  return (
    <section className="py-12 md:py-16 bg-white font-inter min-h-[75vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        {/* GIF Background Container with 404 Heading */}
        <div
          className="w-full h-[320px] sm:h-[400px] bg-center bg-no-repeat bg-contain flex items-center justify-center relative select-none"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
          }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-[100px] font-black text-center text-slate-800 tracking-tight font-poppins select-none drop-shadow-sm">
            404
          </h1>
        </div>

        {/* Content Box */}
        <div className="-mt-8 sm:-mt-12 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1b5e20] mb-2 font-poppins">
            Look like you're lost
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mb-6 font-medium">
            The page you are looking for is not available!
          </p>

          <Link
            href="/"
            className="inline-block px-7 py-3 bg-[#1b5e20] hover:bg-[#2e7d32] text-white font-semibold rounded-lg uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-xs sm:text-sm font-poppins"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

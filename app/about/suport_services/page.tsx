import React from 'react';
import { Headphones, Ticket, Megaphone } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support Services | Bharat Organic Expo 2027",
  description: "Find the resources and help you need for a successful experience at the Bharat Organic Expo 2027. We provide Exhibitor Support, Visitor Information, and Media resources.",
  alternates: {
    canonical: "/about/suport_services",
  }
};

const SupportServicesPage = () => {
  return (
    <>
      <div className="bg-[#ffffff] min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="w-full px-4 md:px-8 mx-auto max-w-7xl">
          
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-[#e85d1c]"></div>
              <h3 className="text-[12px] md:text-[14px] font-bold text-[#e85d1c] tracking-[0.15em] uppercase">
                HOW CAN WE HELP YOU?
              </h3>
              <div className="w-8 h-[2px] bg-[#e85d1c]"></div>
            </div>
            
            <h1 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-[#113d29] leading-tight mb-4">
              Support Services
            </h1>
            <p className="text-[16px] md:text-[18px] text-gray-600 max-w-3xl mx-auto leading-[1.6]">
              We are committed to providing you with the best support. Find the resources and help you need for a successful experience at the Expo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service Card 1 */}
            <div className="bg-[#f8f9fa] border border-gray-200 border-b-[4px] border-b-gray-300 rounded-xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-b-[#3b8c2a] transition-all duration-300 flex flex-col h-full group">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#e85d1c] mb-6 group-hover:text-[#3b8c2a] transition-colors">
                <Headphones size={24} />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#113d29] mb-3">Exhibitor Support</h3>
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] mb-8 flex-1">
                Assistance with booth setup, logistics, and technical requirements to ensure a smooth exhibiting experience.
              </p>
              <button className="text-[#e85d1c] font-bold text-[15px] md:text-[16px] tracking-wider uppercase hover:text-[#3b8c2a] transition-colors flex items-center gap-2">
                Read More <span>→</span>
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[#f8f9fa] border border-gray-200 border-b-[4px] border-b-gray-300 rounded-xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-b-[#3b8c2a] transition-all duration-300 flex flex-col h-full group">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#e85d1c] mb-6 group-hover:text-[#3b8c2a] transition-colors">
                <Ticket size={24} />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#113d29] mb-3">Visitor Information</h3>
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] mb-8 flex-1">
                Help with registration, travel accommodations, visa assistance, and navigating the venue.
              </p>
              <button className="text-[#e85d1c] font-bold text-[15px] md:text-[16px] tracking-wider uppercase hover:text-[#3b8c2a] transition-colors flex items-center gap-2">
                Read More <span>→</span>
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-[#f8f9fa] border border-gray-200 border-b-[4px] border-b-gray-300 rounded-xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-b-[#3b8c2a] transition-all duration-300 flex flex-col h-full group">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#e85d1c] mb-6 group-hover:text-[#3b8c2a] transition-colors">
                <Megaphone size={24} />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#113d29] mb-3">Media & Press</h3>
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] mb-8 flex-1">
                Resources, press kits, and accreditation details for media professionals and journalists.
              </p>
              <button className="text-[#e85d1c] font-bold text-[15px] md:text-[16px] tracking-wider uppercase hover:text-[#3b8c2a] transition-colors flex items-center gap-2">
                Read More <span>→</span>
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SupportServicesPage;

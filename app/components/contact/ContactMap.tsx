"use client";

import { Train, Car, Plane, Building } from "lucide-react";

const ContactMap = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-14 py-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-[#3b8c2a] tconext-[18px] font-bold">Find Us Easily</h2>
        
        {/* Map Container */}
        <div className="w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
          {/* Using an iframe for Google Maps - Defaulting to Ghaziabad Address */}
          <iframe 
            src="https://maps.google.com/maps?q=12/29,%20Site%20II%20Industrial%20Area,%20Loni%20Rd,%20Mohan%20Nagar,%20Ghaziabad,%20Uttar%20Pradesh%20201007,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Bharat Organic Expo Location"
          ></iframe>
        </div>


      </div>
    </section>
  );
};

export default ContactMap;

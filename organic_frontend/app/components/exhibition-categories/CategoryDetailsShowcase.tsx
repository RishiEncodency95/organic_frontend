"use client";

import React from "react";
import Image from "next/image";
import { Check, Phone, ArrowRight, ShieldCheck, Users, Globe, Handshake, Target, MapPin, Calendar, Heart, Leaf, Sprout, Store, Star, Factory, Tag, Package, Coffee, Carrot, CheckCircle2, Navigation, Headphones, TrendingUp, Megaphone, Apple, CupSoda, Utensils, Wheat, BadgeCheck, Truck, ShoppingBag } from "lucide-react";
import heroBg from "@/app/assets/exhibition-categories/food.png";
import cardImg1 from "@/app/assets/exhibition-categories/organic-food/organic_grains_millets_cereals.png";
import cardImg2 from "@/app/assets/exhibition-categories/organic-food/pulses_legumes_beans_186x140.png";
import cardImg3 from "@/app/assets/exhibition-categories/organic-food/organic_beverages.png";
import cardImg4 from "@/app/assets/exhibition-categories/organic-food/fruits_vegetables.png";
import cardImg5 from "@/app/assets/exhibition-categories/organic-food/nuts_seeds_superfoods.png";
import cardImg6 from "@/app/assets/exhibition-categories/organic-food/oils_fats_sweeteners.png";
import cardImg7 from "@/app/assets/exhibition-categories/organic-food/organic_processed_convenience_foods_186x140.png";
import cardImg8 from "@/app/assets/exhibition-categories/organic-food/functional_plant_based_foods_186x140.png";
import cardImg9 from "@/app/assets/exhibition-categories/organic-food/organic_baby_kids_food_186x140.png";
import cardImg10 from "@/app/assets/exhibition-categories/organic-food/health_foods_snacks_186x140.png";

const productSegments = [
  {
    title: "Organic Grains,\nMillets & Cereals",
    items: ["Rice, wheat, millets & oats", "Flours & cereals", "Breakfast cereals", "Gluten-free & ancient grains"],
    image: cardImg1
  },
  {
    title: "Pulses, Legumes\n& Beans",
    items: ["Dals & lentils", "Beans, peas & chickpeas", "Sprouts & microgreens", "High-protein plant foods"],
    image: cardImg2
  },
  {
    title: "Organic Beverages",
    items: ["Juices, smoothies & nectars", "Herbal & functional beverages", "Plant-based milk & drinks", "Tea, coffee & cocoa"],
    image: cardImg3
  },
  {
    title: "Fruits & Vegetables",
    items: ["Fresh organic fruits", "Fresh organic vegetables", "Dried fruits & vegetables", "Fruit & vegetable powders"],
    image: cardImg4
  },
  {
    title: "Nuts, Seeds &\nSuperfoods",
    items: ["Nuts, dry fruits & seeds", "Chia, flax, pumpkin, sesame", "Superfoods (quinoa,\namaranth, etc.)", "Trail mixes & nutrition bites"],
    image: cardImg5
  },
  {
    title: "Oils, Fats &\nSweeteners",
    items: ["Cold-pressed organic oils", "Ghee & plant-based fats", "Natural sweeteners (honey,\njaggery, maple syrup)", "Coconut & nut oils"],
    image: cardImg6
  },
  {
    title: "Organic Processed &\nConvenience Foods",
    items: ["Pickles, chutneys & condiments", "Ready-to-eat meals", "Soups, sauces & spreads", "Instant mixes & meal kits", "Snacks, crackers & chips"],
    image: cardImg7
  },
  {
    title: "Functional Foods &\nPlant-based Foods",
    items: ["Protein powders & plant proteins", "Fiber, omega & vitamin blends", "Prebiotics, probiotics & enzymes", "Baking & cooking ingredients", "Meat & dairy alternatives"],
    image: cardImg8
  },
  {
    title: "Organic Baby &\nKids Food",
    items: ["Organic infant nutrition", "Baby cereals & snacks", "Toddler meals & drinks", "Kids' healthy snacks"],
    image: cardImg9
  },
  {
    title: "Health Foods & Snacks",
    items: ["Granola, muesli & energy bars", "Healthy chips & crackers", "Natural & organic sweet treats", "On-the-go healthy snacks"],
    image: cardImg10
  }
];

const exhibitors = [
  { label: "Organic Food Brands", icon: Leaf },
  { label: "Private Label Manufacturers", icon: Tag },
  { label: "Beverage Manufacturers", icon: Coffee },
  { label: "Distributors & Importers", icon: Package },
  { label: "Food Processors", icon: Factory },
  { label: "Retailers & E-commerce Brands", icon: Store },
  { label: "Ingredient Suppliers", icon: Sprout },
  { label: "HORECA & Food Service", icon: Star },
  { label: "Superfood Brands", icon: Carrot },
  { label: "Startups & Innovators", icon: Target }
];

const whyExhibit = [
  "Connect with a fast-growing global market for organic food & beverages",
  "Showcase healthy, nutritious and innovative food solutions",
  "Meet quality buyers, retailers, importers & distributors",
  "Build brand trust and consumer loyalty",
  "Expand business and global trade opportunities",
  "Be part of a sustainable and healthy future"
];

const targetVisitors = [
  { label: "Retailers & Supermarkets", icon: Store },
  { label: "Nutritionists & Dietitians", icon: Heart },
  { label: "Importers & Distributors", icon: Package },
  { label: "Health-conscious Consumers", icon: Users },
  { label: "HORECA & Food Service", icon: Star },
  { label: "Institutions & Organizations", icon: Target },
  { label: "E-commerce Buyers", icon: Globe },
  { label: "Export & Trade Buyers", icon: Handshake }
];

const exhibitorExamples = [
  { label: "Organic Food Brands", icon: Apple },
  { label: "Beverage Manufacturers", icon: CupSoda },
  { label: "Food Processors", icon: Utensils },
  { label: "Ingredient Suppliers", icon: Wheat },
  { label: "Private Label Manufacturers", icon: BadgeCheck },
  { label: "Distributors & Importers", icon: Truck },
  { label: "Retailers & E-commerce Brands", icon: ShoppingBag }
];

export default function CategoryDetailsShowcase() {
  return (
    <div id="organic-food-beverages" className="w-full bg-white font-inter text-gray-900 border-t border-gray-300 scroll-mt-[100px]">

      {/* ---------------- 1. HEADER SECTION ---------------- */}
      <section className="relative w-full bg-white overflow-hidden flex items-center shadow-inner">
        {/* Background Image Area (Right 55%) */}
        <div
          className="absolute right-0 top-0 w-full lg:w-[72%] h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg.src})`,
            maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)"
          }}
        />

        <div className="w-full px-6 lg:px-14 pt-10 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Left Text Block */}
          <div className="lg:w-[60%] flex flex-col relative z-20">
            <h1 className="text-[18px] lg:text-[56px] font-semibold uppercase leading-[0.9] tracking-[-0.02em] font-poppins mb-3">
              <span className="text-[#113d20]">ORGANIC</span><br />
              <span className="text-[#e44c20]">FOOD & BEVERAGES</span>
            </h1>

            {/* Subtitle with diamond lines */}
            <div className="flex items-center gap-4 my-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rotate-45 bg-[#3b8c2a]"></div>
                <div className="w-16 h-[2px] bg-[#3b8c2a]"></div>
              </div>
              <h3 className="text-[#3b8c2a] font-semibold text-[18px] lg:text-[21px] tracking-wide font-serif italic">
                Real Food. Real Nutrition. Real Impact.
              </h3>
              <div className="flex items-center">
                <div className="w-16 h-[2px] bg-[#3b8c2a]"></div>
                <div className="w-2 h-2 rotate-45 bg-[#3b8c2a]"></div>
              </div>
            </div>

            <p className="text-[14px] lg:text-[15.5px] font-medium text-gray-800 max-w-[550px] leading-relaxed mt-2 pb-10">
              Explore the widest range of certified organic foods and beverages that promote health, support communities and protect the planet.<br />
              From farm to table — wholesome, safe, nutritious and sustainable.
            </p>
          </div>

          {/* Circular Badge - Positioned perfectly over the blend line */}
          <div className="hidden lg:flex absolute left-[48%] top-2/3 -translate-y-1/2 w-[160px] h-[160px] rounded-full border-[3px] border-[#113d20] bg-white items-center justify-center shadow-2xl z-30">
            <div className="w-[146px] h-[146px] rounded-full border-[1.5px] border-dashed border-[#113d20] flex flex-col items-center justify-center p-2 text-center relative">
              <span className="text-[#113d20] font-bold text-[14px] leading-[1.3]">
                GOOD FOOD<br />BETTER HEALTH<br />BETTER PLANET
              </span>
              <div className="flex items-center gap-0.5 mt-1.5 justify-center">
                <Leaf className="text-[#113d20] w-5 h-5 -rotate-12" strokeWidth={2} />
                <Leaf className="text-[#113d20] w-5 h-5 -scale-x-100 rotate-12" strokeWidth={2} />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ---------------- 2. MAIN BODY (GRID + SIDEBAR) ---------------- */}
      <div className="w-full">
        <div className=" w-full  p-2 lg:px-14 lg:py-6 lg:pb-0 flex flex-col lg:flex-row gap-2">

          {/* LEFT: PRODUCTS & SEGMENTS (70%) */}
          <div className="lg:w-[73%] flex flex-col">

            {/* Products Title */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center ">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#3b8c2a]"></div>
                <div className="w-24 h-[1px] bg-[#3b8c2a]"></div>
              </div>
              <h2 className="text-[17px] font-semibold text-[#3b8c2a] uppercase tracking-[0.08em]">
                PRODUCTS & SEGMENTS ON DISPLAY
              </h2>
              <div className="flex items-center">
                <div className="w-24 h-[1px] bg-[#3b8c2a]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#3b8c2a]"></div>
              </div>
            </div>

            {/* Grid of 10 Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-1.5">
              {productSegments.map((prod, idx) => (
                <div key={idx} className="flex flex-col border border-gray-200 rounded-[12px] overflow-hidden bg-white hover:shadow-xl hover:border-gray-300 transition-all">

                  {/* Card Image Area */}
                  <div className="relative w-full h-[140px] bg-gray-100">
                    <Image
                      src={prod.image || heroBg} // Needs actual category image later
                      alt={prod.title.replace('\n', ' ')}
                      fill
                      className="object-cover"
                    />

                  </div>

                  {/* Card Content */}
                  <div className="p-3 lg:px-3 lg:py-3 flex flex-col flex-grow">
                    <h4 className="text-[15px] font-semibold text-[#3b8c2a] leading-[1.3] mb-3 whitespace-pre-line min-h-[34px]">
                      {prod.title}
                    </h4>
                    <ul className="text-[13px] font-medium text-gray-800 flex flex-col gap-2 flex-grow">
                      {prod.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 leading-[1.3]">
                          <span className="w-1 h-1 rounded-full bg-gray-600 shrink-0 mt-[5px]"></span>
                          <span className="whitespace-pre-line">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>


          {/* RIGHT: SIDEBAR (30%) */}
          <div className="lg:w-[27%] flex flex-col gap-4">

            {/* Box 1: WHO CAN EXHIBIT? */}
            <div className="border border-gray-200 rounded-[16px] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Users className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[16px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  WHO CAN EXHIBIT?
                </h3>
              </div>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-2">
                {exhibitors.map((exh, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <exh.icon className="w-4 h-4 text-[#3b8c2a] shrink-0" strokeWidth={2.5} />
                    <span className="text-[13px] font-semibold text-gray-800 leading-tight">{exh.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: WHY EXHIBIT IN THIS CATEGORY? */}
            <div className="border border-gray-200 rounded-[16px] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Target className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[16px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  WHY EXHIBIT IN THIS CATEGORY?
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {whyExhibit.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3b8c2a] shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-[13px] font-semibold text-gray-800 leading-[1.4]">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: TARGET VISITORS */}
            <div className="border border-gray-200 rounded-[16px] bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Users className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[16px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  TARGET VISITORS
                </h3>
              </div>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-2">
                {targetVisitors.map((vis, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <vis.icon className="w-4 h-4 text-[#3b8c2a] shrink-0" strokeWidth={2.5} />
                    <span className="text-[13px] font-semibold text-gray-800 leading-tight">{vis.label}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>


      {/* ---------------- 3. BOTTOM FOOTER SECTION ---------------- */}
      <div className="w-full bg-[#fdfcf9]">
        <div className="w-full  px-6 lg:px-14 py-4">

          <div className="flex flex-col xl:flex-row items-stretch justify-between gap-4 mb-4">

            {/* Box 1: Examples of Exhibitors */}
            <div className="border border-gray-200 rounded-[12px] bg-white px-4 py-2 flex-[1.2] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#3b8c2a]" />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase">
                  EXAMPLES OF EXHIBITORS
                </h3>
              </div>
              <div className="flex items-start justify-between w-full">
                {exhibitorExamples.map((ex, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center text-center gap-2 px-1 group cursor-pointer">
                      <div className="w-11 h-11 rounded-full border border-gray-100 bg-[#f8fcf5] group-hover:border-[#3b8c2a] group-hover:bg-[#f0f8ec] transition-all flex items-center justify-center shadow-sm">
                        <ex.icon className="w-[22px] h-[22px] text-[#113d20] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                      </div>
                      <span className="text-[9.5px] font-bold text-gray-700 leading-[1.2] max-w-[70px] group-hover:text-[#113d20] transition-colors">
                        {ex.label}
                      </span>
                    </div>
                    {i < exhibitorExamples.length - 1 && (
                      <div className="w-[1px] h-10 bg-gray-200 mt-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Box 2: Middle Banner */}
            <div className="rounded-[12px] bg-[#0c2f17] px-4 py-2 flex-[1.1] relative overflow-hidden flex flex-col justify-center shadow-md min-h-[140px]">
              {/* Background Image on Right */}
              <div
                className="absolute right-0 top-0 h-full w-[50%] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroBg.src})`,
                  maskImage: "linear-gradient(to right, transparent, black 65%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 65%)"
                }}
              ></div>

              <div className="relative z-10 w-[80%]">
                <h3 className="text-white text-[13px] font-semibold mb-3 leading-[1.4] uppercase">
                  BE PART OF INDIA'S PREMIER PLATFORM FOR ORGANIC, NATURAL & WELLNESS
                </h3>

                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-[11px]">Showcase. Connect. Grow.</span>
                    <a href="/registration/book-a-stand" target="_blank" rel="noopener noreferrer" className="bg-[#ff4500] hover:bg-[#e63e00] text-white text-[12px] font-bold px-4 py-1.5 rounded flex items-center justify-center gap-2 uppercase w-max transition-colors">
                      BOOK A STALL NOW <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* <div className="w-[1px] h-14 bg-white/20 mx-2"></div>

                  <div className="flex flex-col gap-2 justify-center">
                    <span className="text-white text-[11px] mb-0.5">Or Contact Us</span>
                    <div className="flex items-center gap-1.5 text-white/90 text-[10.5px]">
                      <Phone className="w-3.5 h-3.5" /> 9354811889, 9205645544
                    </div>
                    <div className="flex items-center gap-1.5 text-white/90 text-[10.5px]">
                      <Globe className="w-3.5 h-3.5" /> www.bharatorganicexpo.com
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Box 3: Need Help */}
            <div className="border border-gray-200 rounded-[12px] bg-white px-4 py-2 w-full xl:w-[220px] shrink-0 flex flex-col justify-between shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <Headphones className="w-6 h-6 text-[#3b8c2a]" strokeWidth={2} />
                  <div className="text-[14px] font-semibold text-[#3b8c2a]">NEED HELP?</div>
                </div>
                <div className="text-[11px] font-medium text-gray-600 leading-[1.4]">
                  Our team is here to help you find the right category for your business.
                </div>
              </div>
              <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-[#ff4500] text-[12px] font-bold uppercase tracking-wide flex items-center gap-1 mt-4 hover:underline">
                CONTACT US <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </a>
            </div>

          </div>

          {/* Bottom Trust Bar */}
          <div className="pt-2 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 overflow-hidden">
            {[
              { icon: Globe, title: "Global Exposure", desc: "Connect with international\nbuyers and partners." },
              { icon: Users, title: "Right Audience", desc: "Meet verified buyers,\ndistributors & retailers." },
              { icon: TrendingUp, title: "Business Growth", desc: "Generate leads and\nexpand your market." },
              { icon: Megaphone, title: "Brand Visibility", desc: "Increase visibility and\nstrengthen your brand." },
              { icon: Leaf, title: "Sustainable Future", desc: "Be a part of the movement\nfor a better tomorrow." },
            ].map((trust, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-full border border-gray-200 bg-[#f8fcf5] flex items-center justify-center shrink-0">
                    <trust.icon className="w-[24px] h-[24px] text-[#3b8c2a]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#3b8c2a] mb-0.5">{trust.title}</span>
                    <span className="text-[12px] font-medium text-gray-600 leading-[1.3] whitespace-pre-line">{trust.desc}</span>
                  </div>
                </div>
                {i < 4 && (
                  <div className="hidden xl:block w-[1px] h-10 bg-gray-200 shrink-0 mx-1"></div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Sprout,
  ArrowUpRight,
  Leaf,
} from "lucide-react";
import { faqApi, SERVER_URL } from "@/app/lib/api";
import SectionContainer from "@/app/components/layout/SectionContainer";
import Link from "next/link";

const fallbackData = {
  subheading: "Visitor & Exhibitor Information",
  heading: "Everything You Need",
  highlightText: "To Know",
  description:
    "Discover how Bharat Organic Expo connects India's organic ecosystem with buyers, brands, and global business opportunities.",
  items: [
    {
      _id: "1",
      question: "What is Bharat Organic Expo?",
      answer:
        "Bharat Organic Expo is a premium international trade exhibition connecting India's organic ecosystem with buyers, retailers, distributors, exporters, investors, and sustainability-focused businesses from across the world.",
      image: "",
    },
    {
      _id: "2",
      question: "Who should participate in the Expo?",
      answer:
        "Organic farmers, producers, food and beverage brands, Ayurveda and herbal companies, sustainable lifestyle brands, retailers, importers, exporters, distributors, and trade professionals can participate.",
      image: "",
    },
    {
      _id: "3",
      question: "Which sectors are represented?",
      answer:
        "The Expo brings together organic food and beverages, sustainable agriculture, natural wellness, Ayurveda, herbal products, eco-friendly products, organic farming solutions, and conscious lifestyle brands.",
      image: "",
    },
    {
      _id: "4",
      question: "What business opportunities are available?",
      answer:
        "Participants can discover new products, build B2B partnerships, meet buyers and distributors, explore export opportunities, increase brand visibility, and enter new domestic and international markets.",
      image: "",
    },
    {
      _id: "5",
      question: "How does the Expo connect India with global markets?",
      answer:
        "Through curated business networking, buyer-seller interactions, international participation, product discovery, and meaningful industry connections, Bharat Organic Expo creates a bridge between India's organic innovation and global demand.",
      image: "",
    },
  ],
  defaultImage:'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=85'
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [faqData, setFaqData] = useState<any>(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await faqApi.get();

        if (result) {
          setFaqData(result);
        }
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const items = faqData?.items || [];

  return (
    <section className="relative overflow-hidden border-t border-[#D8CDBB] bg-[#EAE2D3] py-8 md:py-10">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#C8784A]/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#8BAE45]/[0.08] blur-3xl" />

      <SectionContainer className="relative z-10">

        {/* HEADER */}
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">

          <div>

            <div className="mb-2 flex items-center gap-2">

              <span className="h-[1.5px] w-7 bg-[#B58A3A]" />

              <span
                className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8A6330]"
                
              >
                {faqData?.subheading}
              </span>

            </div>

            <h2
              className="text-2xl font-black leading-tight text-[#263C2B] md:text-3xl"
              
            >
              {faqData?.heading}{" "}
              <span className="text-[#3b8c2a]">
                {faqData?.highlightText}
              </span>
            </h2>

          </div>

          <p
            className="max-w-md text-[11px] leading-[1.65] text-[#62675C] md:text-right"
            
          >
            {faqData?.description}
          </p>

        </div>


        {/* COMPACT CONTENT */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.8fr_1.2fr]">

          {/* IMAGE */}
          <div className="relative h-[270px] overflow-hidden rounded-2xl bg-[#C9D3B9] md:h-[320px]">

            <img
              loading="lazy"
              decoding="async"
              // src={ faqData?.defaultImage
              //     ? faqData.defaultImage.startsWith("http")
              //       ? faqData.defaultImage
              //       : `${SERVER_URL}${faqData.defaultImage}`
              //    }
              src={
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=85"
              }
              alt="Bharat Organic Expo organic marketplace"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#263C2B]/80 via-transparent to-transparent" />

            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-[#F5F0E7]/90 px-3 py-1.5">

              <Sprout className="h-3.5 w-3.5 text-[#6F9638]" />

              <span
                className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#263C2B]"
                
              >
                Organic Marketplace
              </span>

            </div>

            <div className="absolute bottom-4 left-4 right-4">

              <p
                className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D6A84F]"
                
              >
                Bharat Organic Expo
              </p>

              <p
                className="text-xl font-black leading-tight text-white md:text-2xl"
                
              >
                India’s Organic Ecosystem.
                <br />
                One Global Marketplace.
              </p>

            </div>

          </div>


          {/* FAQ LIST */}
          <div className="space-y-2">

            {items.map((item: any, index: number) => {

              const isActive = activeIndex === index;

              return (

                <motion.div
                  key={item._id || index}
                  layout
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "border-[#B58A3A]/50 bg-[#F7F2E9] shadow-[0_6px_18px_rgba(90,70,40,0.08)]"
                      : "border-[#D6CCBC] bg-[#F1EBE0] hover:border-[#B58A3A]/50"
                  }`}
                >

                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      setActiveIndex(
                        isActive ? null : index
                      )
                    }
                    className="flex w-full items-center gap-3 px-4 py-3 text-left"
                  >

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                        isActive
                          ? "bg-[#3b8c2a] text-white"
                          : "bg-[#DDE5D4] text-[#61774F]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-[12px] font-bold leading-[1.4] ${
                        isActive
                          ? "text-[#263C2B]"
                          : "text-[#596052]"
                      }`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        isActive
                          ? "bg-[#3b8c2a] text-white"
                          : "bg-[#E3DCCF] text-[#77786D]"
                      }`}
                    >
                      {isActive ? (
                        <Minus className="h-3 w-3" />
                      ) : (
                        <Plus className="h-3 w-3" />
                      )}
                    </span>

                  </button>


                  {/* ANSWER OPENS DIRECTLY BELOW QUESTION */}
                  <AnimatePresence initial={false}>

                    {isActive && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeInOut",
                        }}
                      >

                        <div className="px-4 pb-4 pl-[3.75rem]">

                          <div className="mb-2 h-[1px] w-8 bg-[#D6A84F]" />

                          <p
                            className="text-[11.5px] leading-[1.7] text-[#62675C]"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {item.answer}
                          </p>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.div>

              );

            })}

          </div>

        </div>


        {/* COMPACT CTA */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-xl border border-[#D6CCBC] bg-[#F1EBE0] px-4 py-3 sm:flex-row">

          <div className="flex items-center gap-2">

            <Leaf className="h-4 w-4 text-[#6F9638]" />

            <p
              className="text-xs font-medium text-[#62675C]"
              
            >
              Still have questions about participating in Bharat Organic Expo?
            </p>

          </div>

          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-full bg-[#3b8c2a] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#A86542]"
          >
            Contact Expo Team

            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

          </Link>

        </div>

      </SectionContainer>

    </section>
  );
};

export default FAQSection;
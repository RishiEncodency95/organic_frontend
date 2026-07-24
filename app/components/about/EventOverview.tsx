import React from "react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import * as LucideIcons from "lucide-react";

const EventOverview: React.FC = () => {
  const sectors = [
    {
      label: "Organic Food & Beverages",
      color: "#3b8c2a",
      iconName: "Apple",
    },
    {
      label: "Organic Agriculture & Farming",
      color: "#3b8c2a",
      iconName: "Sprout",
    },
    {
      label: "Natural Health & Wellness",
      color: "#3b8c2a",
      iconName: "HeartPulse",
    },
    {
      label: "Organic Beauty & Personal Care",
      color: "#3b8c2a",
      iconName: "Sparkles",
    },
    {
      label: "Sustainable Living & Eco Products",
      color: "#3b8c2a",
      iconName: "Recycle",
    },
    {
      label: "Organic Retail & Global Trade",
      color: "#3b8c2a",
      iconName: "Globe2",
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden bg-[#F8F6EC] pt-[34px] pb-10">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#8BAE45]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D6A84F]/10 blur-3xl" />

      <SectionContainer>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.15fr]">

          {/* LEFT - EVENT OVERVIEW */}
          <div>

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">

              <div className="h-[2px] w-8 bg-[#3b8c2a]" />

              <p
                className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#3b8c2a]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Bharat Organic Expo
              </p>

            </div>

            {/* Heading */}
            <h2
              className="mb-5 text-[28px] font-black leading-[1.2] text-[#173D2B] md:text-[34px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              INDIA'S GATEWAY TO THE{" "}
              <span className="text-[#3b8c2a]">
                ORGANIC WORLD
              </span>
            </h2>

            {/* Decorative Divider */}
            <div className="mb-5 flex items-center gap-2">

              <div className="h-[3px] w-14 bg-[#3b8c2a]" />

            </div>

            {/* Dummy Description */}
            <div
              className="space-y-4 text-justify text-sm leading-[1.7] text-[#405448]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >

              <p>
                Bharat Organic Expo is a premier platform
                bringing together India's organic ecosystem
                under one roof. From organic food and
                agriculture to natural wellness, sustainable
                living, and eco-conscious innovation, the expo
                connects businesses with the growing global
                demand for healthier and more sustainable
                choices.
              </p>

              <p>
                The expo brings together organic brands,
                farmers, producers, manufacturers, buyers,
                retailers, distributors, innovators, and
                industry professionals to discover new
                opportunities, build meaningful partnerships,
                and explore the future of the organic economy.
              </p>

              <p>
                Designed as a powerful business, networking,
                and knowledge platform, Bharat Organic Expo
                creates opportunities for brands to expand
                their visibility, enter new markets, and
                connect with the right audience across India
                and international markets.
              </p>

            </div>

          </div>


          {/* RIGHT - KEY SECTORS */}
          <div>

            {/* Section Heading */}
            <div className="mb-6 flex items-center gap-3">

              <div className="h-[2px] w-8 bg-[]" />

              <p
                className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#3b8c2a]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Explore Organic Sectors
              </p>

            </div>


            {/* Sector Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

              {sectors.map((sector, i) => {

                const Icon =
                  (LucideIcons as any)[
                    sector.iconName
                  ] || LucideIcons.Leaf;

                return (

                  <div
                    key={i}
                    className="group flex min-h-[150px] cursor-default flex-col items-center justify-center gap-3 rounded-xl border border-[#DDE4D5] bg-white/80 p-4 text-center shadow-[0_8px_25px_rgba(23,61,43,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8BAE45] hover:bg-white hover:shadow-[0_12px_30px_rgba(23,61,43,0.10)]"
                  >

                    {/* Icon */}
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${sector.color}15`,
                        color: sector.color,
                      }}
                    >
                      <Icon
                        className="h-9 w-9"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Label */}
                    <span
                      className="text-[11px] font-bold leading-[1.4] text-[#173D2B]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {sector.label}
                    </span>

                  </div>

                );
              })}

            </div>

          </div>

        </div>

      </SectionContainer>

    </section>
  );
};

export default EventOverview;
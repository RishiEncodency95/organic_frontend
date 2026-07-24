import React from "react";
import * as LucideIcons from "lucide-react";
import SectionContainer from "../layout/SectionContainer";

const MissionVision: React.FC = () => {
  const dummyData = {
    vision: {
      title: "Our Vision",
      icon: "Globe2",
      heading: "A Greener Future Powered by Organic Living",
      description:
        "To create a strong and connected organic ecosystem where India's farmers, producers, brands, and innovators can reach new markets and contribute to a healthier and more sustainable future.",
    },

    mission: {
      title: "Our Mission",
      icon: "Sprout",
      heading: "Connecting Organic India with the World",
      description:
        "To bring together organic businesses, farmers, buyers, retailers, exporters, and industry leaders through a powerful platform for business growth, knowledge sharing, meaningful connections, and global opportunities.",
    },
  };

  const VisionIcon =
    (LucideIcons as any)[dummyData.vision.icon] || LucideIcons.Globe2;

  const MissionIcon =
    (LucideIcons as any)[dummyData.mission.icon] || LucideIcons.Sprout;

  return (
    <section className="relative overflow-hidden bg-[#102E21] py-4">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D6A84F]/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#8BAE45]/[0.07] blur-3xl" />

      <SectionContainer className="relative z-10">

        {/* Header */}
        <div className="mb-7 text-center">

          <p
            className="mb-2 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white"
            
          >
            <span className="h-px w-7 bg-white" />

            Our Purpose & Direction

            <span className="h-px w-7 bg-white" />
          </p>

          <h2
            className="text-2xl font-semibold leading-tight text-[#F3F1E8] md:text-3xl"
            
          >
            Growing a Greener, Healthier Future
          </h2>

        </div>


        {/* Content Area */}
        <div className="relative overflow-hidden rounded-xl border border-[#7C9A62]/20 bg-[#1D4932]/80 px-6 py-4 md:px-10">

          {/* Inner Glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6F9638]/[0.04] via-transparent to-[#D6A84F]/[0.04]" />

          <div className="relative grid items-start gap-8 md:grid-cols-[1fr_1px_1fr] md:gap-10">

            {/* VISION */}
            <div data-aos="fade-up">

              <div className="mb-3 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D6A84F]/25 bg-[#D6A84F]/10">

                  <VisionIcon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#D6A84F]"
                  />

                </div>

                <p
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D6A84F]"
                  
                >
                  {dummyData.vision.title}
                </p>

              </div>


              <h3
                className="mb-3 text-xl font-semibold text-[#F3F1E8] md:text-2xl"
                
              >
                {dummyData.vision.heading}
              </h3>


              <p
                className="text-xs leading-[1.5] text-[#C1CEC1] md:text-[15px]"
                
              >
                {dummyData.vision.description}
              </p>

            </div>


            {/* Divider */}
            <div className="hidden h-full min-h-[155px] w-px bg-gradient-to-b from-transparent via-[#D6A84F]/30 to-transparent md:block" />


            {/* MISSION */}
            <div data-aos="fade-up" data-aos-delay="100">

              <div className="mb-3 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#8BAE45]/30 bg-[#8BAE45]/10">

                  <MissionIcon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#9DBB72]"
                  />

                </div>

                <p
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D6A84F]"
                  
                >
                  {dummyData.mission.title}
                </p>

              </div>


              <h3
                className="mb-3 text-xl font-semibold leading-[1.25] text-[#F3F1E8] md:text-2xl"
                
              >
                {dummyData.mission.heading}
              </h3>


              <p
               className="text-xs leading-[1.5] text-[#C1CEC1] md:text-[15px]"
                
              >
                {dummyData.mission.description}
              </p>

            </div>

          </div>


          {/* Bottom Statement */}
          <div className="relative mt-2 border-t border-white/10 pt-4 text-center">

            <p
              className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9DBB72]"
              
            >
              Organic Growth
              <span className="mx-2 text-[#D6A84F]">•</span>
              Sustainable Living
              <span className="mx-2 text-[#D6A84F]">•</span>
              Global Opportunities
            </p>

          </div>

        </div>

      </SectionContainer>

    </section>
  );
};

export default MissionVision;
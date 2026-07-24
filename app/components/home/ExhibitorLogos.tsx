import { useState, useEffect } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import { clientApi, SERVER_URL } from "@/app/lib/api";

interface Logo {
  _id: string;
  altText: string;
  url: string;
}

interface ClientData {
  subheading: string;
  heading: string;
  highlightText: string;
  images: Logo[];
}

const ExhibitorLogos = () => {
  const [data, setData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await clientApi.get();

        if (result) {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching client logos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-[#F5F3E8] py-16">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#6F9638] border-t-transparent" />
      </div>
    );
  }

  if (!data || !data.images || data.images.length === 0) return null;

  const { subheading, images } = data;

  return (
    <section className="relative overflow-hidden bg-[#173D2B] py-3">

      {/* Soft Organic Background Details */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#6F9638]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#D6A84F]/10 blur-3xl" />

      {/* Section Label */}
      <div className="relative z-10 mb-2 px-4">

        <div className="mx-auto flex max-w-3xl items-center justify-center gap-3">

          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D6A84F]/70" />

          <div className="flex items-center gap-2 whitespace-nowrap">

            <span className="h-1 w-1 rounded-full bg-[#D6A84F]" />

            <h2
              className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#F5F3E8] md:text-[10px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {subheading || "Our Exhibitors & Partners"}
            </h2>

            <span className="h-1 w-1 rounded-full bg-[#D6A84F]" />

          </div>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D6A84F]/70" />

        </div>

      </div>

      {/* Logo Carousel */}
      <div className="relative z-10 border-y border-white/10 py-2">

        <Carousel
          opts={{ loop: true }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 0.8,
            }),
          ]}
          className="w-full"
        >

          <CarouselContent className="-ml-3">

            {[...images, ...images, ...images].map((logo, index) => (

              <CarouselItem
                key={`${logo._id}-${index}`}
                className="basis-1/3 pl-3 sm:basis-1/4 md:basis-1/6 lg:basis-[12.5%]"
              >

                {/* Clean Logo Card - No Red Border */}
                <div className="mx-1 flex h-10 items-center justify-center rounded-md bg-white px-3 shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_7px_18px_rgba(0,0,0,0.18)] md:h-12">

                  <img
                    loading="lazy"
                    decoding="async"
                    src={
                      logo.url.startsWith("http")
                        ? logo.url
                        : `${SERVER_URL}${logo.url}`
                    }
                    alt={logo.altText}
                    className="max-h-full max-w-full object-contain grayscale-[0.15] transition-all duration-300 hover:grayscale-0"
                  />

                </div>

              </CarouselItem>

            ))}

          </CarouselContent>

        </Carousel>

        {/* Side Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#173D2B] to-transparent md:w-24" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#173D2B] to-transparent md:w-24" />

      </div>

    </section>
  );
};

export default ExhibitorLogos;
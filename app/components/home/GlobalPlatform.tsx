import React, { useEffect, useState } from 'react';
import { globalPlatformApi, SERVER_URL } from '@/app/lib/api';
import SectionContainer from '../layout/SectionContainer';

interface PlatformData {
  subheading: string;
  title: string;
  highlightText: string;
  descriptionHtml: string;
  points: string[];
  tagline: string;
  images: { url: string; altText: string }[];
}

const organicExpoDummyData: PlatformData = {
  subheading: 'ABOUT ORGANIC EXPO',

  title: 'WHERE ORGANIC BRANDS MEET GLOBAL OPPORTUNITIES',

  highlightText: 'GLOBAL OPPORTUNITIES',

  descriptionHtml: `
    <p>
      Organic Expo is a premier global platform bringing together
      leading organic brands, farmers, producers, buyers, retailers,
      innovators, and sustainability-driven businesses under one roof.
    </p>

    <p style="margin-top: 14px;">
      The expo creates meaningful opportunities to discover innovative
      organic products, build valuable business connections, explore
      new markets, and shape a healthier and more sustainable future.
    </p>
  `,

  points: [
    'Global Organic Brands',
    'Business Networking',
    'Sustainable Innovation',
    'Market Opportunities',
  ],

  tagline:
    'Connecting the organic world with global opportunities.',

images: [
  {
    url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=85',
    altText:
      'Business networking and professional exhibition meeting at Bharat Organic Expo',
  },
],
};

const GlobalPlatform: React.FC = () => {
  const [data, setData] = useState<PlatformData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlatformData = async () => {
      try {
        // const result = await globalPlatformApi.get();
        const result =null;

        if (result) {
          setData(result);
        } else {
          setData(organicExpoDummyData);
        }
      } catch (error) {
        console.error(
          'Error fetching global platform data:',
          error
        );

        // Fallback Organic Expo Dummy Data
        setData(organicExpoDummyData);
      } finally {
        setLoading(false);
      }
    };

    fetchPlatformData();
  }, []);

  if (loading || !data) return null;

  const getImageUrl = (url: string) =>
    url.startsWith('http')
      ? url
      : `${SERVER_URL}${url}`;

  const renderTitle = (
    title: string,
    highlight: string
  ) => {
    if (!highlight) return title;

    const parts = title.split(
      new RegExp(`(${highlight})`, 'gi')
    );

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() ===
          highlight.toLowerCase() ? (
            <span
              key={i}
              className="text-[#8BAE45]"
            >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
   <section className="relative -mt-[34px] overflow-hidden bg-[#F8F6EC] pt-[34px] pb-0 lg:pt-[34px] lg:pb-0">

      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#8BAE45]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D6A84F]/10 blur-3xl" />

      <SectionContainer>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.3fr]">

          {/* ─────────────────────────────
              LEFT: ORGANIC EXPO IMAGE
          ───────────────────────────── */}
          <div className="relative order-2 lg:order-1">

            {/* Top Right Dot Pattern */}
            <div
              className="pointer-events-none absolute -right-4 -top-4 z-0 h-24 w-24"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #8BAE45 1.2px, transparent 1.2px)',
                backgroundSize: '9px 9px',
                opacity: 0.35,
              }}
            />

            {/* Bottom Left Dot Pattern */}
            <div
              className="pointer-events-none absolute -bottom-4 -left-4 z-0 h-24 w-24"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #D6A84F 1.2px, transparent 1.2px)',
                backgroundSize: '9px 9px',
                opacity: 0.35,
              }}
            />

            {/* Image Wrapper */}
            <div
              className="relative z-10"
              style={{ height: '400px' }}
            >

              <div
                className="group relative h-full w-full overflow-hidden rounded-sm"
                style={{
                  outline: '2px solid #173D2B',
                  outlineOffset: '-2px',
                }}
              >

                {data.images?.[0]?.url ? (
                  <img
                    loading="lazy"
                    decoding="async"
                    src={getImageUrl(
                      data.images[0].url
                    )}
                    alt={
                      data.images[0]?.altText ||
                      'Organic Expo'
                    }
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#E8E5D8]">
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#173D2B]">
                      Organic Expo
                    </span>
                  </div>
                )}

                {/* Bottom Gold Accent */}
                <div className="absolute bottom-0 left-0 h-[5px] w-full bg-[#D6A84F]" />

                {/* Left Green Accent */}
                <div className="absolute left-0 top-0 h-full w-[5px] bg-[#8BAE45]" />

              </div>

              {/* Organic Expo Edition Badge */}
              <div
                className="absolute bottom-0 right-0 z-20 flex flex-col items-center justify-center text-center"
                style={{
                  width: '88px',
                  height: '88px',
                  background:
                    'linear-gradient(145deg, #173D2B, #0D291D)',
                  border: '3px solid #F8F6EC',
                  boxShadow:
                    '0 8px 24px rgba(23,61,43,0.35)',
                }}
              >

                <span
                  style={{
                    color: '#D6A84F',
                    fontFamily:
                      "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: '24px',
                    lineHeight: 1,
                  }}
                >
                  9th
                </span>

                <span
                  style={{
                    color: '#F8F6EC',
                    fontFamily:
                      "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '7.5px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}
                >
                  Edition
                </span>

              </div>

            </div>

          </div>


          {/* ─────────────────────────────
              RIGHT: CONTENT
          ───────────────────────────── */}
          <div className="order-1 lg:order-2">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">

              <div className="h-[2px] w-8 bg-[#D6A84F]" />

              <span
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6F9638]"
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                }}
              >
                {data.subheading}
              </span>

            </div>


            {/* Title */}
            <h2
              className="mb-4 text-[28px] font-bold leading-tight text-[#173D2B] md:text-[34px]"
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              {renderTitle(
                data.title,
                data.highlightText
              )}
            </h2>


            {/* Decorative Divider */}
            {/* <div className="mb-5 flex items-center gap-3">

              <div className="h-[3px] w-12 bg-[#8BAE45]" />

              <div className="h-[3px] w-3 bg-[#D6A84F]" />

              <div className="h-[3px] w-2 bg-[#173D2B]" />

            </div> */}


            {/* Description */}
            <div
              className="strip-editor-bg max-w-none text-justify text-sm leading-relaxed text-[#405448]"
              dangerouslySetInnerHTML={{
                __html: data.descriptionHtml,
              }}
            />


            {/* Organic Expo Highlights */}
            {/* <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {data.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#173D2B]">

                    <span className="text-xs font-bold text-[#D6A84F]">
                      {String(index + 1).padStart(
                        2,
                        '0'
                      )}
                    </span>

                  </div>

                  <span className="text-sm font-semibold text-[#173D2B]">
                    {point}
                  </span>

                </div>
              ))}

            </div> */}


            {/* Tagline */}
            {/* <p className="mt-7 border-l-4 border-[#D6A84F] pl-4 text-sm font-semibold italic text-[#6F9638]">
              {data.tagline}
            </p> */}

          </div>

        </div>

      </SectionContainer>

    </section>
  );
};

export default GlobalPlatform;
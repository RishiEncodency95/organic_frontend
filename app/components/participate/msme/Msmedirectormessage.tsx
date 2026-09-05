"use client";

import React, { useState } from "react";

import {
  Award,
  Clock3,
  Leaf,
  Maximize2,
  Pause,
  Play,
  Quote,
  Settings2,
  ShieldCheck,
  User,
  Users,
  Volume2,
} from "lucide-react";

import vleafImg from "@/app/assets/icons/vleaf.png";
import ministryImg from "@/app/assets/participate/msme/ministry.webp";

/* ================================================================
   TYPES
================================================================ */

interface OfficialMessageBannerProps {
  videoThumbnailUrl?: string;
  videoDuration?: string;
}

/* ================================================================
   DEFAULT VIDEO
================================================================ */

const YOUTUBE_ID = "0DQ71A1CnOw";
/* ================================================================
   MAIN
================================================================ */

export default function OfficialMessageBanner({
  videoThumbnailUrl,
  videoDuration = "1:12",
}: OfficialMessageBannerProps) {
  const [playing, setPlaying] = useState(false);

  const thumbnail =
    videoThumbnailUrl ||
    `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

  return (
    <section
      id="official-message"
      aria-labelledby="msme-director-message-heading"
      className="
        relative
        left-1/2
        isolate
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#fbfbf7]

        lg:aspect-[1140/620]
      "
    >
      {/* ==========================================================
          VERY LIGHT BACKGROUND DECORATION
      ========================================================== */}

      <img
        src={vleafImg.src}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[4%]
          -top-[3%]
          z-0
          hidden
          w-[17%]
          -rotate-[22deg]
          object-contain
          opacity-[0.045]
          lg:block
        "
      />

      <img
        src={vleafImg.src}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[4%]
          bottom-[4%]
          z-0
          hidden
          w-[18%]
          rotate-[165deg]
          object-contain
          opacity-[0.035]
          lg:block
        "
      />

      {/* ==========================================================
          DESKTOP
      ========================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          h-full
          w-full
          lg:block
        "
      >
        {/* ========================================================
            EYEBROW
        ======================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[5.7%]
            flex
            -translate-x-1/2
            items-center
            justify-center
            gap-[8px]
          "
        >
          <span
            className="
              h-px
              w-[47px]
              bg-[#739052]
            "
          />

          <Leaf
            className="
              h-[18px]
              w-[18px]
              -rotate-[45deg]
              text-[#397317]
            "
            strokeWidth={1.7}
            fill="currentColor"
          />

          <span
            className="
              whitespace-nowrap
              text-[clamp(11px,1.35vw,17px)]
              font-[600]
              uppercase
              tracking-[0.025em]
              text-[#315e14]
            "
          >
            Hear From MSME Leadership
          </span>

          <Leaf
            className="
              h-[18px]
              w-[18px]
              rotate-[135deg]
              text-[#397317]
            "
            strokeWidth={1.7}
            fill="currentColor"
          />

          <span
            className="
              h-px
              w-[47px]
              bg-[#739052]
            "
          />
        </div>

        {/* ========================================================
            MAIN HEADING
        ======================================================== */}

        <h2
          id="msme-director-message-heading"
          className="
            absolute
            left-1/2
            top-[11.8%]
            w-[82%]
            -translate-x-1/2
            whitespace-nowrap
            text-center
            text-[clamp(27px,2.75vw,39px)]
            font-[700]
            uppercase
            leading-none
            tracking-[-0.028em]
            text-[#111b2c]
          "
        >
          Official Message{" "}

          <span className="text-[#285b12]">
            From MSME Director
          </span>
        </h2>

        {/* ========================================================
            HEADING DECORATION
        ======================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[17.7%]
            flex
            -translate-x-1/2
            items-center
            gap-[6px]
          "
        >
          <span
            className="
              h-px
              w-[43px]
              bg-[#8da575]
            "
          />

          <span className="h-[6px] w-[6px] rounded-full bg-[#3c7218]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#3c7218]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#3c7218]" />

          <span
            className="
              h-px
              w-[43px]
              bg-[#8da575]
            "
          />
        </div>

        {/* ========================================================
            INTRO
        ======================================================== */}

        <p
          className="
            absolute
            left-1/2
            top-[20.5%]
            w-[66%]
            -translate-x-1/2
            text-center
            text-[clamp(12px,1.25vw,17px)]
            font-[400]
            leading-[1.55]
            text-[#252934]
          "
        >
          A message of support and encouragement for all MSMEs
          participating in
          <br />

          <span
            className="
              font-[600]
              text-[#315f14]
            "
          >
            Bharat Organic Expo 2027
          </span>{" "}
          under the PMS Scheme.
        </p>

        {/* ========================================================
            MAIN CONTENT
        ======================================================== */}

        <div
          className="
            absolute
            left-[4.15%]
            top-[29.2%]
            grid
            h-[49.2%]
            w-[91.7%]
            grid-cols-[1.22fr_1fr]
            gap-[1.15%]
          "
        >
          {/* ======================================================
              VIDEO PLAYER
          ====================================================== */}

          <div
            className="
              relative
              h-full
              min-w-0
              overflow-hidden
              rounded-[13px]
              border-[6px]
              border-white
              bg-[#131613]
              shadow-[0_5px_17px_rgba(34,45,29,0.16)]
            "
          >
            {!playing ? (
              <>
                {/* POSTER */}

                <img
                  src={thumbnail}
                  alt="MSME Director Official Message"
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[84%]
                    w-full
                    object-cover
                    object-center
                  "
                />

                {/* slight cinematic overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-[84%]
                    bg-gradient-to-b
                    from-black/[0.05]
                    via-transparent
                    to-black/[0.12]
                  "
                />

                {/* 45–90 sec label */}

                <div
                  className="
                    absolute
                    left-[2.8%]
                    top-[4.3%]
                    flex
                    h-[34px]
                    items-center
                    gap-[7px]
                    rounded-full
                    bg-[#38781c]
                    px-[13px]
                    text-[11px]
                    font-[600]
                    text-white
                    shadow-sm
                  "
                >
                  <Clock3
                    className="h-[18px] w-[18px]"
                    strokeWidth={1.8}
                  />

                  45–90 Sec Message
                </div>

                {/* PLAY */}

                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play MSME Director message"
                  className="
                    absolute
                    left-1/2
                    top-[45%]
                    z-20
                    flex
                    h-[72px]
                    w-[72px]
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#234e10]
                    shadow-[0_5px_18px_rgba(0,0,0,0.18)]
                    transition-transform
                    hover:scale-[1.04]
                  "
                >
                  <Play
                    className="
                      ml-[4px]
                      h-[30px]
                      w-[30px]
                      fill-current
                    "
                    strokeWidth={1.4}
                  />
                </button>

                {/* CUSTOM CONTROL BAR */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    h-[16%]
                    items-center
                    bg-[#171817]
                    px-[3.2%]
                    text-white
                  "
                >
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="
                      flex
                      h-[28px]
                      w-[28px]
                      items-center
                      justify-center
                    "
                  >
                    <Play
                      className="
                        h-[20px]
                        w-[20px]
                        fill-white
                      "
                    />
                  </button>

                  <span
                    className="
                      ml-[10px]
                      whitespace-nowrap
                      text-[11px]
                      font-[400]
                    "
                  >
                    0:00 / {videoDuration}
                  </span>

                  {/* timeline */}

                  <div
                    className="
                      relative
                      ml-[16px]
                      h-[4px]
                      flex-1
                      rounded-full
                      bg-[#505250]
                    "
                  >
                    <div
                      className="
                        h-full
                        w-[36%]
                        rounded-full
                        bg-[#6d9627]
                      "
                    />

                    <span
                      className="
                        absolute
                        left-[36%]
                        top-1/2
                        h-[13px]
                        w-[13px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-white
                      "
                    />
                  </div>

                  <Volume2 className="ml-[20px] h-[21px] w-[21px]" />
                  <Settings2 className="ml-[16px] h-[21px] w-[21px]" />
                  <Maximize2 className="ml-[16px] h-[21px] w-[21px]" />
                </div>
              </>
            ) : (
              <>
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                  title="MSME Director Official Message"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                  "
                />

                <button
                  type="button"
                  onClick={() => setPlaying(false)}
                  aria-label="Close video"
                  className="
                    absolute
                    right-[12px]
                    top-[12px]
                    z-20
                    flex
                    h-[34px]
                    w-[34px]
                    items-center
                    justify-center
                    rounded-full
                    bg-black/60
                    text-white
                  "
                >
                  <Pause className="h-[18px] w-[18px]" />
                </button>
              </>
            )}
          </div>

          {/* ======================================================
              MESSAGE CARD
          ====================================================== */}

          <div
            className="
              relative
              h-full
              min-w-0
              overflow-hidden
              rounded-[13px]
              border
              border-[#cfd3bd]
              bg-[rgba(255,255,252,0.96)]
              px-[4.1%]
              pb-[4%]
              pt-[4.2%]
              shadow-[0_3px_10px_rgba(45,55,33,0.08)]
            "
          >
            {/* TOP TITLE */}

            <div
              className="
                flex
                items-start
                gap-[4%]
              "
            >
              <div
                className="
                  flex
                  aspect-square
                  w-[12.5%]
                  max-w-[52px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#245b00]
                  text-white
                "
              >
                <Quote
                  className="
                    h-[52%]
                    w-[52%]
                    fill-white
                  "
                  strokeWidth={1.3}
                />
              </div>

              <div
                className="
                  min-w-0
                  flex-1
                  pt-[2%]
                "
              >
                <h3
                  className="
                    text-[clamp(13px,1.35vw,18px)]
                    font-[600]
                    uppercase
                    leading-[1.2]
                    text-[#285313]
                  "
                >
                  Message From MSME Leadership
                </h3>

                <div
                  className="
                    mt-[4%]
                    flex
                    items-center
                    justify-center
                    gap-[7px]
                  "
                >
                  <span
                    className="
                      h-px
                      flex-1
                      bg-[#bdc6aa]
                    "
                  />

                  <Leaf
                    className="
                      h-[15px]
                      w-[15px]
                      -rotate-[45deg]
                      text-[#4c7a2b]
                    "
                    fill="currentColor"
                  />

                  <span
                    className="
                      h-px
                      flex-1
                      bg-[#bdc6aa]
                    "
                  />
                </div>
              </div>
            </div>

            {/* QUOTE */}

            <div
              className="
                relative
                mt-[5.2%]
                pl-[5.6%]
                pr-[3%]
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-[-7px]
                  text-[29px]
                  font-serif
                  leading-none
                  text-[#7da048]
                "
              >
                “
              </span>

              <blockquote
                className="
                  text-[clamp(11px,1.13vw,15px)]
                  font-[400]
                  leading-[1.68]
                  text-[#262c38]
                "
              >
                Government of India is committed to empowering MSMEs
                and creating more opportunities for their growth.
                <br />

                We appreciate initiatives like{" "}

                <span className="font-[600] text-[#315d16]">
                  Bharat Organic Expo 2027
                </span>{" "}

                that provide a strong platform for MSMEs to showcase
                their products, build business, and expand globally.
              </blockquote>

              <span
                className="
                  absolute
                  bottom-[-17px]
                  right-[1%]
                  text-[29px]
                  font-serif
                  leading-none
                  text-[#7da048]
                "
              >
                ”
              </span>
            </div>

            {/* DASHED DIVIDER */}

            <div
              className="
                absolute
                bottom-[31.5%]
                left-[4.2%]
                w-[74%]
                border-t
                border-dashed
                border-[#c9cdbf]
              "
            />

            {/* PERSON */}

            <div
              className="
                absolute
                bottom-[5.6%]
                left-[4.2%]
                flex
                w-[73%]
                items-center
                gap-[4%]
              "
            >
              <div
                className="
                  flex
                  aspect-square
                  w-[17%]
                  max-w-[66px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-[3px]
                  border-white
                  bg-[#397815]
                  text-white
                  shadow-[0_0_0_1px_#bfd0ad]
                "
              >
                <User
                  className="
                    h-[60%]
                    w-[60%]
                    fill-white
                  "
                  strokeWidth={1.2}
                />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    text-[clamp(12px,1.2vw,16px)]
                    font-[600]
                    text-[#315b16]
                  "
                >
                  Shri. S. C. L. Das
                </p>

                <p
                  className="
                    mt-[3px]
                    text-[clamp(8px,0.8vw,11px)]
                    font-[400]
                    leading-[1.55]
                    text-[#414753]
                  "
                >
                  Development Commissioner (MSME)
                  <br />
                  Ministry of Micro, Small &amp; Medium Enterprises
                  <br />
                  Government of India
                </p>
              </div>
            </div>

            {/* MINISTRY ART */}

            <img
              src={ministryImg.src}
              alt=""
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-[1.5%]
                right-[0.5%]
                h-[31%]
                w-auto
                object-contain
                opacity-[0.42]
              "
            />
          </div>
        </div>

        {/* ========================================================
            FEATURE STRIP
        ======================================================== */}

        <div
          className="
            absolute
            left-[13.1%]
            top-[80.6%]
            grid
            h-[13.4%]
            w-[76.2%]
            grid-cols-3
            items-center
            overflow-hidden
            rounded-[12px]
            border
            border-[#e0e4da]
            bg-[rgba(255,255,252,0.97)]
            px-[2.8%]
            shadow-[0_4px_13px_rgba(42,55,31,0.08)]
          "
        >
          <FeatureItem
            icon={
              <ShieldCheck
                className="h-[31px] w-[31px]"
                strokeWidth={1.7}
              />
            }
            title="Official Message"
            description="Direct message from MSME Leadership"
          />

          <FeatureItem
            withBorder
            icon={
              <Users
                className="h-[31px] w-[31px]"
                strokeWidth={1.7}
              />
            }
            title="For All MSMEs"
            description="Encouragement for every entrepreneur across India"
          />

          <FeatureItem
            icon={
              <Award
                className="h-[31px] w-[31px]"
                strokeWidth={1.7}
              />
            }
            title="Government Support"
            description="Strong support for growth, competitiveness & global reach"
          />
        </div>
      </div>

      {/* ==========================================================
          MOBILE / TABLET
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[900px]
          px-5
          py-9
          lg:hidden
        "
      >
        {/* EYEBROW */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <span className="h-px w-8 bg-[#799158]" />

          <Leaf
            className="
              h-4
              w-4
              -rotate-45
              fill-current
              text-[#397317]
            "
          />

          <span
            className="
              text-center
              text-[11px]
              font-[600]
              uppercase
              tracking-[0.03em]
              text-[#315e14]
            "
          >
            Hear From MSME Leadership
          </span>

          <Leaf
            className="
              h-4
              w-4
              rotate-[135deg]
              fill-current
              text-[#397317]
            "
          />

          <span className="h-px w-8 bg-[#799158]" />
        </div>

        {/* TITLE */}

        <h2
          className="
            mt-4
            text-center
            text-[30px]
            font-[700]
            uppercase
            leading-[1.08]
            tracking-[-0.03em]
            text-[#111b2c]
          "
        >
          Official Message{" "}

          <span className="text-[#285b12]">
            From MSME Director
          </span>
        </h2>

        {/* DOTS */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <span className="h-px w-10 bg-[#8da575]" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#3c7218]" />
          <span className="h-2 w-2 rounded-full bg-[#3c7218]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#3c7218]" />

          <span className="h-px w-10 bg-[#8da575]" />
        </div>

        {/* SUBTITLE */}

        <p
          className="
            mx-auto
            mt-4
            max-w-[620px]
            text-center
            text-[14px]
            font-[400]
            leading-[1.55]
            text-[#30343d]
          "
        >
          A message of support and encouragement for all MSMEs
          participating in{" "}

          <span className="font-[600] text-[#315f14]">
            Bharat Organic Expo 2027
          </span>{" "}

          under the PMS Scheme.
        </p>

        {/* VIDEO */}

        <div
          className="
            relative
            mt-7
            aspect-video
            overflow-hidden
            rounded-xl
            border-4
            border-white
            bg-black
            shadow-lg
          "
        >
          {!playing ? (
            <>
              <img
                src={thumbnail}
                alt="MSME Director Official Message"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-[64px]
                  w-[64px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#285813]
                  shadow-lg
                "
              >
                <Play className="ml-1 h-7 w-7 fill-current" />
              </button>
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="MSME Director Official Message"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="
                absolute
                inset-0
                h-full
                w-full
              "
            />
          )}
        </div>

        {/* MESSAGE */}

        <div
          className="
            relative
            mt-4
            overflow-hidden
            rounded-xl
            border
            border-[#d8dccd]
            bg-white
            p-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#245b00]
                text-white
              "
            >
              <Quote
                className="
                  h-6
                  w-6
                  fill-current
                "
              />
            </div>

            <h3
              className="
                text-[16px]
                font-[600]
                uppercase
                text-[#285313]
              "
            >
              Message From MSME Leadership
            </h3>
          </div>

          <blockquote
            className="
              mt-5
              text-[13px]
              font-[400]
              leading-[1.7]
              text-[#303541]
            "
          >
            “Government of India is committed to empowering MSMEs
            and creating more opportunities for their growth. We
            appreciate initiatives like{" "}

            <span className="font-[600] text-[#315d16]">
              Bharat Organic Expo 2027
            </span>{" "}

            that provide a strong platform for MSMEs to showcase
            their products, build business, and expand globally.”
          </blockquote>

          <div
            className="
              mt-5
              border-t
              border-dashed
              border-[#cdd2c7]
              pt-4
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#397815]
                  text-white
                "
              >
                <User
                  className="
                    h-7
                    w-7
                    fill-current
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-[14px]
                    font-[600]
                    text-[#315b16]
                  "
                >
                  Shri. S. C. L. Das
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    leading-[1.5]
                    text-[#555c67]
                  "
                >
                  Development Commissioner (MSME)
                  <br />
                  Ministry of Micro, Small &amp; Medium Enterprises
                  <br />
                  Government of India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}

        <div
          className="
            mt-4
            grid
            gap-3
            rounded-xl
            border
            border-[#e0e4da]
            bg-white
            p-4
            sm:grid-cols-3
          "
        >
          <MobileFeature
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Official Message"
            description="Direct message from MSME Leadership"
          />

          <MobileFeature
            icon={<Users className="h-6 w-6" />}
            title="For All MSMEs"
            description="Encouragement for every entrepreneur across India"
          />

          <MobileFeature
            icon={<Award className="h-6 w-6" />}
            title="Government Support"
            description="Strong support for growth, competitiveness & global reach"
          />
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   DESKTOP FEATURE
================================================================ */

function FeatureItem({
  icon,
  title,
  description,
  withBorder = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  withBorder?: boolean;
}) {
  return (
    <div
      className={`
        flex
        h-[64%]
        min-w-0
        items-center
        gap-[8%]

        ${
          withBorder
            ? "border-x border-[#d7ddcf] px-[8%]"
            : ""
        }
      `}
    >
      <div
        className="
          flex
          aspect-square
          w-[25%]
          max-w-[64px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#edf2de]
          text-[#315f17]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[clamp(10px,1.03vw,14px)]
            font-[600]
            uppercase
            leading-[1.2]
            text-[#315b19]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-[5px]
            text-[clamp(8px,0.82vw,11px)]
            font-[400]
            leading-[1.45]
            text-[#343944]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* ================================================================
   MOBILE FEATURE
================================================================ */

function MobileFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#edf2de]
          text-[#315f17]
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            text-[12px]
            font-[600]
            uppercase
            text-[#315b19]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            text-[11px]
            font-[400]
            leading-[1.45]
            text-[#505762]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
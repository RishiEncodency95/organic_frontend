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
import dividerLeafIcon from "@/app/assets/participate/msme/reference-icons/divider-leaf.png";
import vleafImg from "@/app/assets/icons/vleaf.png";
import ministryImg from "@/app/assets/participate/msme/ministry.webp";
import officialIconImg from "@/app/assets/participate/msme/official_icon.png";
import forAllMsmeImg from "@/app/assets/participate/msme/for_all_msme.png";
import governmentApprovedImg from "@/app/assets/participate/msme/governnent_support.png";
import quoteLeftImg from "@/app/assets/participate/msme/quote_left.png";
import quoteRightImg from "@/app/assets/participate/msme/quote_right.png";
import stepsTitleLeftLeafIcon from "@/app/assets/participate/msme/reference-icons/steps-title-left-leaf.png";
import stepsTitleRightLeafIcon from "@/app/assets/participate/msme/reference-icons/steps-title-right-leaf.png";
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

const MSME_DIRECTOR_MESSAGE_DATA = [
  {
    id: 1,
    eyebrow: "Hear From MSME Leadership",
    titleMain: "Official Message",
    titleHighlight: "From MSME Director",
    introLead: "A message of support and encouragement for all MSMEs participating in",
    introHighlight: "Bharat Organic Expo 2027",
    introSub: "under the PMS Scheme.",
    videoDuration: "1:12",
    messageTitle: "Message From MSME Leadership",
    quoteLine1: "Government of India is committed to empowering MSMEs and creating more opportunities for their growth.",
    quoteLine2: "We appreciate initiatives like ",
    quoteExpo: "Bharat Organic Expo 2027",
    quoteLine3: " that provide a strong platform for MSMEs to showcase their products, build business, and expand globally.",
    speakerName: "Shri. S. C. L. Das",
    speakerRole: "Development Commissioner (MSME)",
    speakerMinistry: "Ministry of Micro, Small & Medium Enterprises",
    speakerGov: "Government of India",
    featureStrip: [
      { id: 1, icon: officialIconImg, title: "Official Message", description: "Direct message from MSME Leadership" },
      { id: 2, icon: forAllMsmeImg, title: "For All MSMEs", description: "Encouragement for every entrepreneur across India" },
      { id: 3, icon: governmentApprovedImg, title: "Government Support", description: "Strong support for growth, competitiveness & global reach" },
    ]
  }
];

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
        bg-[#fdfcf9]
        lg:aspect-[1140/620]
        pt-4
        pb-4
        sm:pt-10
        sm:pb-0
      "
    >
      {MSME_DIRECTOR_MESSAGE_DATA.map((data) => (
        <React.Fragment key={data.id}>
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
            {/* EYEBROW */}
            <div
              className="
                absolute
                left-1/2
                top-[2.5%]
                flex
                -translate-x-1/2
                items-center
                justify-center
                gap-[12px]
              "
            >
              <div className="flex items-center">
                <span className="h-px w-[40px] bg-[#739052]" />
                <img
                  src={stepsTitleLeftLeafIcon.src}
                  alt=""
                  className="mr-2 hidden h-7 w-auto object-contain sm:block"
                  aria-hidden="true"
                />
              </div>

              <span
                className="
                  whitespace-nowrap
                  text-[20px]
                  font-semibold
                  uppercase
                  tracking-[0.025em]
                  text-[#315e14]
                "
              >
                {data.eyebrow}
              </span>

              <div className="flex items-center">
                <img
                  src={stepsTitleRightLeafIcon.src}
                  alt=""
                  className="ml-2 h-7 w-auto object-contain"
                  aria-hidden="true"
                />
                <span className="h-px w-[40px] bg-[#739052]" />
              </div>
            </div>

            {/* MAIN HEADING */}
            <h2
              id="msme-director-message-heading"
              className="
                absolute
                left-1/2
                top-[8.5%]
                w-[82%]
                -translate-x-1/2
                whitespace-nowrap
                text-center
                text-[clamp(27px,2.75vw,39px)]
                font-semibold
                uppercase
                leading-none
                tracking-[-0.028em]
                text-[#111b2c]
              "
            >
              {data.titleMain}{" "}
              <span className="text-[#285b12]">
                {data.titleHighlight}
              </span>
            </h2>

            {/* HEADING DECORATION */}
            <div
              className="
                absolute
                left-1/2
                top-[14.5%]
                flex
                -translate-x-1/2
                items-center
                gap-[6px]
              "
            >
              <span className="h-px w-[43px] bg-[#8da575]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#3c7218]" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#3c7218]" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#3c7218]" />
              <span className="h-px w-[43px] bg-[#8da575]" />
            </div>

            {/* INTRO */}
            <p
              className="
                absolute
                left-1/2
                top-[17.5%]
                w-[66%]
                -translate-x-1/2
                text-center
                text-[18px]
                font-[400]
                leading-[1.8]
                text-[#252934]
              "
            >
              {data.introLead}
              <br />
              <span className="font-[600] text-[#315f14]">
                {data.introHighlight}
              </span>{" "}
              {data.introSub}
            </p>

            {/* MAIN CONTENT */}
            <div
              className="
                absolute
                left-[4.15%]
                top-[23%]
                grid
                h-[54%]
                w-[91.7%]
                grid-cols-[1.22fr_1fr]
                gap-[1.15%]
                mt-8
              "
            >
              {/* VIDEO PLAYER */}
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
                        object-top
                      "
                    />

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
                        text-[14px]
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
                          text-[14px]
                          font-[400]
                        "
                      >
                        0:00 / {data.videoDuration}
                      </span>

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

              {/* MESSAGE CARD */}
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

                  <div className="w-fit">
                    <h3
                      className="
                        text-[24px]
                        font-[600]
                        uppercase
                        leading-[1.2]
                        text-[#285313]
                      "
                    >
                      {data.messageTitle}
                    </h3>

                    <div
                      className="
                        mt-[4%]
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-[7px]
                      "
                    >
                      <span className="h-px flex-1 bg-[#bdc6aa]" />
                      <img
                        src={dividerLeafIcon.src}
                        alt=""
                        className="h-8 w-auto object-contain"
                        aria-hidden="true"
                      />
                      <span className="h-px flex-1 bg-[#bdc6aa]" />
                    </div>
                  </div>
                </div>

                <div
                  className="
                    relative
                    mt-[3%]
                    pl-[5.6%]
                    pr-[3%]
                  "
                >
                  <img
                    src={quoteLeftImg.src}
                    alt=""
                    className="
                      absolute
                      left-0
                      top-[-4px]
                      h-[18px]
                      w-auto
                      object-contain
                    "
                  />

                  <blockquote
                    className="
                      text-[clamp(12px,1.2vw,16px)]
                      font-[400]
                      leading-[1.75]
                      text-[#262c38]
                    "
                  >
                    {data.quoteLine1}
                    <br />
                    {data.quoteLine2}
                    <span className="font-[600] text-[#315d16]">
                      {data.quoteExpo}
                    </span>{" "}
                    <br/>
                    {data.quoteLine3}
                  </blockquote>

                  <img
                    src={quoteRightImg.src}
                    alt=""
                    className="
                      absolute
                      bottom-[-12px]
                      right-[1%]
                      h-[18px]
                      w-auto
                      object-contain
                    "
                  />
                </div>

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
                        text-[20px]
                        font-[600]
                        text-[#315b16]
                      "
                    >
                      {data.speakerName}
                    </p>

                    <p
                      className="
                        mt-[3px]
                        text-[14px]
                        font-[400]
                        leading-[1.5]
                        text-[#414753]
                      "
                    >
                      {data.speakerRole}
                      <br />
                      {data.speakerMinistry}
                      <br />
                      {data.speakerGov}
                    </p>
                  </div>
                </div>

                <img
                  src={ministryImg.src}
                  alt=""
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-[0.5%]
                    h-[31%]
                    w-auto
                    object-contain
                    opacity-[0.42]
                    object-bottom
                  "
                />
              </div>
            </div>

            {/* FEATURE STRIP */}
            <div
              className="
                absolute
                left-[13.1%]
                top-[82%]
                grid
                h-[15%]
                w-[76.2%]
                grid-cols-3
                items-center
                overflow-hidden
                rounded-[12px]
                mt-4
                border
                border-[#e0e4da]
                bg-[rgba(255,255,252,0.97)]
                px-[2.8%]
                shadow-[0_4px_13px_rgba(42,55,31,0.08)]
              "
            >
              {data.featureStrip.map((feat, idx) => (
                <FeatureItem
                  key={feat.id}
                  withBorder={idx === 1}
                  withLeftPadding={idx === 2}
                  icon={
                    <img src={feat.icon.src} alt="" className="h-[100px] w-[100px] object-contain" />
                  }
                  title={feat.title}
                  description={feat.description}
                />
              ))}
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
              pt-9
              pb-2
              lg:hidden
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span className="h-px w-12 bg-[#799158]" />
              <span
                className="
                  text-center
                  text-[14px]
                  font-[600]
                  uppercase
                  tracking-[0.03em]
                  text-[#315e14]
                "
              >
                {data.eyebrow}
              </span>
              <span className="h-px w-12 bg-[#799158]" />
            </div>

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
              {data.titleMain}{" "}
              <span className="text-[#285b12]">
                {data.titleHighlight}
              </span>
            </h2>

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
              {data.introLead}{" "}
              <span className="font-[600] text-[#315f14]">
                {data.introHighlight}
              </span>{" "}
              {data.introSub}
            </p>

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
                  <Quote className="h-6 w-6 fill-current" />
                </div>
                <h3
                  className="
                    text-[16px]
                    font-[600]
                    uppercase
                    text-[#285313]
                  "
                >
                  {data.messageTitle}
                </h3>
              </div>

              <blockquote
                className="
                  mt-5
                  text-[14px]
                  font-[400]
                  leading-[1.7]
                  text-[#303541]
                "
              >
                “{data.quoteLine1} {data.quoteLine2}
                <span className="font-[600] text-[#315d16]">
                  {data.quoteExpo}
                </span>{" "}
                {data.quoteLine3}”
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
                <div className="flex items-center gap-3">
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
                    <User className="h-7 w-7 fill-current" />
                  </div>
                  <div>
                    <p className="text-[14px] font-[600] text-[#315b16]">
                      {data.speakerName}
                    </p>
                    <p className="mt-1 text-[14px] leading-[1.5] text-[#555c67]">
                      {data.speakerRole}
                      <br />
                      {data.speakerMinistry}
                      <br />
                      {data.speakerGov}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
                mt-2
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
              {data.featureStrip.map((feat) => (
                <MobileFeature
                  key={feat.id}
                  icon={<img src={feat.icon.src} alt="" className="h-16 w-16 object-contain" />}
                  title={feat.title}
                  description={feat.description}
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
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
  withLeftPadding = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  withBorder?: boolean;
  withLeftPadding?: boolean;
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
            : withLeftPadding
            ? "pl-[8%]"
            : "pl-[8%]"
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
          text-[#315f17]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[16px]
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
            text-[14px]
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
          text-[#315f17]
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            text-[16px]
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
            text-[14px]
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
"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/app/constants/siteConfig";

const SocialSidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ambientBubbles, setAmbientBubbles] = useState<any[]>([]);
  const [glassVisible, setGlassVisible] = useState(false);
  const [liftedItems, setLiftedItems] = useState<number[]>([]);

  const socialLinks = {
    whatsappNumber: SITE_CONFIG.rawPhone.replace(/\D/g, ""),
    whatsappMessage: "Hello! I would like to know more about Bharat Bharat Organic Expo 2027.",
    callNumber: SITE_CONFIG.rawPhone,
    facebook: "https://www.facebook.com/namogangewellness.event",
    instagram: "https://www.instagram.com/namogangewellness/",
    youtube: "https://www.youtube.com/@NamoGangeTrust",
    linkedin: "https://in.linkedin.com/company/namogange",
  };

  const WhatsAppIcon = () => (
    <svg
      viewBox="0 0 32 32"
      width={13}
      height={13}
      fill="white"
      style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
    >
      <path d="M16.01 3.2c-7.11 0-12.88 5.76-12.88 12.86 0 2.27.59 4.48 1.72 6.43L3.2 28.8l6.49-1.7a12.85 12.85 0 0 0 6.32 1.63h.01c7.1 0 12.88-5.77 12.88-12.86 0-3.44-1.34-6.67-3.78-9.1A12.8 12.8 0 0 0 16.01 3.2zm7.55 18.37c-.31.87-1.82 1.67-2.52 1.78-.65.1-1.48.14-2.39-.15-.55-.18-1.25-.41-2.16-.8-3.8-1.64-6.27-5.39-6.46-5.64-.18-.25-1.54-2.05-1.54-3.92 0-1.87.97-2.78 1.32-3.16.35-.38.76-.48 1.01-.48.25 0 .51 0 .73.01.24.01.55-.09.86.65.31.75 1.06 2.59 1.15 2.78.09.19.15.41.03.66-.12.25-.18.41-.35.63-.18.21-.38.47-.54.64-.18.18-.36.38-.15.74.21.36.93 1.53 2 2.48 1.38 1.23 2.53 1.62 2.89 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.09.99 2.45 1.17.36.18.6.27.69.42.09.15.09.87-.22 1.74z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width={13}
      height={13}
      fill="white"
      style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.72l-.43 3H13.1v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width={13}
      height={13}
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width={13}
      height={13}
      fill="white"
      style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width={13}
      height={13}
      fill="white"
      style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );

  const iconStyle: React.CSSProperties = {
    color: "#fff",
    strokeWidth: 2.2,
    position: "relative",
    zIndex: 2,
    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
  };

  const socialData = [
    {
      iconComponent: <Phone size={13} style={iconStyle} />,
      url: `tel:${socialLinks.callNumber}`,
      bg: "linear-gradient(135deg, #1b5e20, #2e7d32)",
      glow: "rgba(27,94,32,0.65)",
      glowColor: "#1b5e20",
      tipColor: "#1b5e20",
      tipArrow: "#1b5e20",
      label: "Call Us",
      isExternal: false,
      dividerAfter: true,
    },
    {
      iconComponent: <WhatsAppIcon />,
      url: `https://wa.me/${socialLinks.whatsappNumber}?text=${encodeURIComponent(socialLinks.whatsappMessage)}`,
      bg: "linear-gradient(135deg, #1fbe5a, #25D366)",
      glow: "rgba(37,211,102,0.65)",
      glowColor: "#25D366",
      tipColor: "#25D366",
      tipArrow: "#25D366",
      label: "WhatsApp",
      isExternal: true,
      dividerAfter: true,
    },
    {
      iconComponent: <FacebookIcon />,
      url: socialLinks.facebook,
      bg: "linear-gradient(135deg, #1565c0, #1877F2)",
      glow: "rgba(24,119,242,0.6)",
      glowColor: "#1877F2",
      tipColor: "#1877F2",
      tipArrow: "#1877F2",
      label: "Facebook",
      isExternal: true,
    },
    {
      iconComponent: <InstagramIcon />,
      url: socialLinks.instagram,
      bg: "linear-gradient(135deg, #6a1ea0, #E1306C, #F77737)",
      glow: "rgba(225,48,108,0.6)",
      glowColor: "#E1306C",
      tipColor: "#E1306C",
      tipArrow: "#E1306C",
      label: "Instagram",
      isExternal: true,
    },
    {
      iconComponent: <YoutubeIcon />,
      url: socialLinks.youtube,
      bg: "linear-gradient(135deg, #c00, #FF0000)",
      glow: "rgba(255,0,0,0.55)",
      glowColor: "#FF0000",
      tipColor: "#cc0000",
      tipArrow: "#cc0000",
      label: "YouTube",
      isExternal: true,
    },
    {
      iconComponent: <LinkedinIcon />,
      url: socialLinks.linkedin,
      bg: "linear-gradient(135deg, #064a8f, #0A66C2)",
      glow: "rgba(10,102,194,0.6)",
      glowColor: "#0A66C2",
      tipColor: "#0A66C2",
      tipArrow: "#0A66C2",
      label: "LinkedIn",
      isExternal: true,
    },
  ];

  useEffect(() => {
    const bubbles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: `${Math.random() * 4 + 2}px`,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 5,
      left: `${Math.random() * 80}%`,
      bottom: `${Math.random() * 15}%`,
      color: `hsla(${Math.random() * 360}, 65%, 70%, 0.4)`,
    }));
    setAmbientBubbles(bubbles);
  }, []);

  useEffect(() => {
    const glassTimer = setTimeout(() => setGlassVisible(true), 300);
    const itemTimers = socialData.map((_, i) =>
      setTimeout(() => {
        setLiftedItems((prev) => [...prev, i]);
      }, 600 + i * 160)
    );
    return () => {
      clearTimeout(glassTimer);
      itemTimers.forEach(clearTimeout);
    };
  }, []);

  const handleMouseEnter = (i: number) => {
    setHoveredIndex(i);
    const el = document.querySelector(`[data-sb-index="${i}"]`);
    if (!el) return;
    const btn = el.querySelector(".sb-btn") as HTMLElement;
    const dots = el.querySelectorAll(".burst-dot");
    if (btn) {
      btn.style.transform = "scale(1.28) rotate(-6deg)";
      btn.style.transition = "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)";
    }
    dots.forEach((dot: any, j) => {
      const angle = (j / dots.length) * 360;
      const rad = (angle * Math.PI) / 180;
      const dist = 14 + Math.random() * 6;
      dot.style.opacity = "0.9";
      dot.style.transform = "translate(-50%, -50%)";
      dot.style.transition = "none";
      requestAnimationFrame(() => {
        dot.style.transition = `opacity 0.6s ease ${j * 0.03}s, transform 0.6s ease ${j * 0.03}s`;
        dot.style.opacity = "0";
        dot.style.transform = `translate(calc(-50% + ${Math.cos(rad) * dist}px), calc(-50% + ${Math.sin(rad) * dist}px)) scale(0.2)`;
      });
    });
  };

  const handleMouseLeave = (i: number) => {
    setHoveredIndex(null);
    const el = document.querySelector(`[data-sb-index="${i}"]`);
    if (!el) return;
    const btn = el.querySelector(".sb-btn") as HTMLElement;
    if (btn) {
      btn.style.transform = "";
      btn.style.transition = "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)";
    }
  };

  const normalizeUrl = (url: string) => {
    if (!url) return "";
    const u = url.trim();
    if (u.startsWith("http://") || u.startsWith("https://") || u.startsWith("tel:")) return u;
    return "https://" + u;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');

        @keyframes floatBubble {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          15%  { opacity: 0.6; }
          80%  { opacity: 0.25; }
          100% { transform: translateY(-80px) scale(0.3); opacity: 0; }
        }

        @keyframes shimmer {
          0%   { left: -100%; }
          100% { left: 150%; }
        }

        @keyframes btnBreathe {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.07); }
        }

        @keyframes tooltipBounce {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50%       { transform: translateY(-50%) scale(1.05); }
        }

        .sb-glass {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.32);
          box-shadow:
            0 8px 32px rgba(0,0,0,0.22),
            0 1px 0 rgba(255,255,255,0.22) inset,
            0 -1px 0 rgba(0,0,0,0.06) inset;
          padding: 8px 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          position: relative;
          overflow: visible;
          min-width: 36px;
          opacity: 0;
          transform: translateX(60px) scale(0.88);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sb-glass.sb-glass--visible {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .sb-bubbles-layer {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .sb-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 1;
        }

        .sb-item--lifted {
          opacity: 1;
          transform: translateY(0);
        }

        .sb-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: pointer;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.45);
          overflow: hidden;
        }

        .sb-btn::before {
          content: '';
          position: absolute;
          top: -50%; left: -100%;
          width: 60%; height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          pointer-events: none;
        }

        .sb-item:hover .sb-btn::before {
          animation: shimmer 0.55s ease forwards;
        }

        .sb-item--lifted .sb-btn {
          animation: btnBreathe var(--breathe-dur, 2.5s) ease-in-out var(--breathe-delay, 0s) infinite;
        }

        .sb-item:hover .sb-btn {
          animation: none !important;
        }

        .burst-wrap {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          pointer-events: none;
          overflow: visible;
        }

        .burst-dot {
          position: absolute;
          border-radius: 50%;
          width: 4px;
          height: 4px;
          opacity: 0;
          pointer-events: none;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Tooltip — colored bg, arrow on right side */
        .sb-tip {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%) translateX(8px) scale(0.88);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 12px;
          color: #fff;
          padding: 6px 14px;
          border-radius: 8px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.22);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          z-index: 100;
        }

        .sb-item:hover .sb-tip {
          opacity: 1;
          transform: translateY(-50%) translateX(0) scale(1);
          animation: tooltipBounce 0.8s ease-in-out infinite;
        }

        /* Arrow pointing right toward the icon */
        .sb-tip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid var(--tip-color);
        }

        .sb-divider {
          width: 16px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.28), transparent);
          margin: 1px 0;
          z-index: 1;
          position: relative;
        }

        .ambient-dot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatBubble var(--dur) ease-in-out var(--del) infinite;
          opacity: 0;
        }
      `}</style>

      <div
        className="hidden lg:block fixed right-0 top-1/2 z-50 pr-1"
        style={{ transform: "translateY(-50%)" }}
      >
        <div className={`sb-glass${glassVisible ? " sb-glass--visible" : ""}`}>

          {/* Ambient bubbles — clipped in their own layer */}
          <div className="sb-bubbles-layer">
            {ambientBubbles.map((b) => (
              <div
                key={b.id}
                className="ambient-dot"
                style={{
                  width: b.size,
                  height: b.size,
                  background: b.color,
                  "--dur": `${b.duration}s`,
                  "--del": `${b.delay}s`,
                  left: b.left,
                  bottom: b.bottom,
                } as any}
              />
            ))}
          </div>

          {socialData.map((social, i) => (
            <div key={i} style={{ position: "relative", zIndex: 1 }}>
              <div
                className={`sb-item${liftedItems.includes(i) ? " sb-item--lifted" : ""}`}
                data-sb-index={i}
                style={{
                  "--breathe-dur": `${2.5 + i * 0.15}s`,
                  "--breathe-delay": `${i * 0.18}s`,
                } as any}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <a
                  href={normalizeUrl(social.url)}
                  target={social.isExternal ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="sb-btn"
                  style={{
                    background: social.bg,
                    boxShadow:
                      hoveredIndex === i
                        ? `0 4px 18px ${social.glow}, 0 0 10px ${social.glow}`
                        : `0 2px 10px ${social.glow}`,
                  }}
                >
                  <div className="burst-wrap">
                    {[...Array(6)].map((_, j) => (
                      <div
                        key={j}
                        className="burst-dot"
                        style={{ background: social.glowColor }}
                      />
                    ))}
                  </div>
                  {social.iconComponent}
                </a>

                {/* Colored tooltip with matching arrow */}
                <div
                  className="sb-tip"
                  style={{
                    backgroundColor: social.tipColor,
                    "--tip-color": social.tipColor,
                  } as any}
                >
                  {social.label}
                </div>
              </div>

              {social.dividerAfter && <div className="sb-divider" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;

"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/app/constants/siteConfig";

const FacebookIcon = ({ size = 16, color = "#1877F2" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 16, color = "#E4405F" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 16, color = "#000000" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = ({ size = 16, color = "#FF0000" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill={color} />
  </svg>
);

const LinkedinIcon = ({ size = 16, color = "#0A66C2" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const config = SITE_CONFIG as any;
  const socialLinks = {
    facebook: config.socialLinks?.facebook || "https://www.facebook.com/namogangewellness.event",
    instagram: config.socialLinks?.instagram || "https://www.instagram.com/namogangewellness/",
    twitter: "https://twitter.com",
    youtube: config.socialLinks?.youtube || "https://www.youtube.com/@NamoGangeTrust",
    linkedin: config.socialLinks?.linkedin || "https://in.linkedin.com/company/namogange",
  };

  // Static social media icons with dynamic links
  const socialData = [
    {
      icon: FacebookIcon,
      url: socialLinks.facebook,
      color: "#1877F2",
      label: "Facebook",
    },
    {
      icon: InstagramIcon,
      url: socialLinks.instagram,
      color: "#E4405F",
      label: "Instagram",
    },
    {
      icon: TwitterIcon,
      url: socialLinks.twitter,
      color: "#000000",
      label: "Twitter",
    },
    {
      icon: YoutubeIcon,
      url: socialLinks.youtube,
      color: "#FF0000",
      label: "YouTube",
    },
    {
      icon: LinkedinIcon,
      url: socialLinks.linkedin,
      color: "#0A66C2",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fallIn {
          from {
            transform: translateY(-100px) rotate(-180deg) scale(0.3);
            opacity: 0;
          }
          to {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes ripple {
          0% { 
            transform: scale(1); 
            opacity: 0.6; 
          }
          100% { 
            transform: scale(1.5); 
            opacity: 0; 
          }
        }

        @keyframes iconSpin {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.1); }
        }

        @keyframes buttonShake {
          0%, 100% { transform: rotate(0deg) scale(1.1); }
          25% { transform: rotate(-10deg) scale(1.1); }
          50% { transform: rotate(10deg) scale(1.1); }
          75% { transform: rotate(-10deg) scale(1.1); }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @keyframes tooltipBounce {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.05); }
        }

        @keyframes particle {
          0% { 
            transform: translate(-50%, -50%) scale(0); 
            opacity: 0; 
          }
          50% { 
            opacity: 0.8; 
          }
          100% { 
            transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.5);
            opacity: 0; 
          }
        }

        .social-item {
          animation: fallIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: calc(var(--index) * 0.12s + 0.2s);
          opacity: 0;
        }

        .social-item.visible {
          opacity: 1;
        }

        .glow-effect {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          filter: blur(12px);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .social-item:hover .glow-effect {
          opacity: 0.6;
          animation: pulse 2s ease-in-out infinite;
        }

        .ripple-effect {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 2px solid;
          opacity: 0;
        }

        .social-item:hover .ripple-effect {
          animation: ripple 1.5s ease-out infinite;
        }

        .social-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          @media (min-width: 1024px) {
            width: 36px;
            height: 36px;
          }
          background: white;
          border-radius: 9999px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 2px solid;
          transition: all 0.3s;
          overflow: hidden;
        }

        .social-button:hover {
          animation: buttonShake 0.5s ease-in-out;
          transform: scale(1.1);
        }

        .social-button:active {
          transform: scale(0.9);
        }

        .icon-wrapper {
          transition: all 0.2s;
        }

        .social-item:hover .icon-wrapper {
          animation: iconSpin 0.6s ease-in-out;
        }

        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: rotate(45deg);
          opacity: 0;
        }

        .social-item:hover .shine-effect {
          opacity: 1;
          animation: shine 0.6s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .tooltip {
          position: absolute;
          right: 100%;
          margin-right: 12px;
          top: 50%;
          transform: translateY(-50%) translateX(10px) scale(0.8);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
        }

        .social-item:hover .tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0) scale(1);
          animation: tooltipBounce 0.8s ease-in-out infinite;
        }

        .tooltip-content {
          padding: 8px 16px;
          border-radius: 8px;
          color: white;
          font-size: 14px;
          font-weight: bold;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          position: relative;
        }

        .tooltip-arrow {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          pointer-events: none;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
        }

        .social-item:hover .particle {
          animation: particle 1s ease-out infinite;
        }

        .particle:nth-child(1) {
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          animation-delay: 0.1s;
        }

        .particle:nth-child(3) {
          animation-delay: 0.2s;
        }
      `}</style>

      <div className="hidden sm:flex flex-col gap-2 fixed right-2 top-[45%] lg:top-1/2 -translate-y-1/2 z-50">
        {socialData.map((social, index) => {
          const Icon = social.icon;

          return (
            <div
              key={index}
              className={`social-item relative ${isVisible ? "visible" : ""}`}
              style={{ "--index": index } as React.CSSProperties}
            >
              {/* Glow */}
              <div
                className="glow-effect"
                style={{ backgroundColor: social.color }}
              />

              {/* Ripple */}
              <div
                className="ripple-effect"
                style={{ borderColor: social.color }}
              />

              {/* Main Button */}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                style={{ borderColor: social.color }}
              >
                <div className="icon-wrapper">
                  <Icon size={16} color={social.color} />
                </div>

                <div className="shine-effect" />
              </a>

              {/* Tooltip */}
              <div className="tooltip">
                <div
                  className="tooltip-content"
                  style={{ backgroundColor: social.color }}
                >
                  {social.label}
                  <div
                    className="tooltip-arrow"
                    style={{ borderLeftColor: social.color }}
                  ></div>
                </div>
              </div>

              {/* Particles */}
              <div
                className="particle"
                style={{
                  backgroundColor: social.color,
                  "--x": "30px",
                  "--y": "0px",
                } as React.CSSProperties}
              />
              <div
                className="particle"
                style={{
                  backgroundColor: social.color,
                  "--x": "-15px",
                  "--y": "26px",
                } as React.CSSProperties}
              />
              <div
                className="particle"
                style={{
                  backgroundColor: social.color,
                  "--x": "-15px",
                  "--y": "-26px",
                } as React.CSSProperties}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SocialSidebar;

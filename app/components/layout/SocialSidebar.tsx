"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const Facebook = ({ size = 24, style }: any) => <svg width={size} height={size} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Instagram = ({ size = 24, style }: any) => <svg width={size} height={size} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Twitter = ({ size = 24, style }: any) => <svg width={size} height={size} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Youtube = ({ size = 24, style }: any) => <svg width={size} height={size} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const Linkedin = ({ size = 24, style }: any) => <svg width={size} height={size} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Whatsapp = ({ size = 24, style }: any) => <svg width={size} height={size} style={style} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const socialLinks = {
    facebook: "https://www.facebook.com/namogangewellness.event",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  };

  // Trigger animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Static social media icons with dynamic links
  const socialData = [
    {
      icon: Facebook,
      url: socialLinks.facebook,
      color: "#1877F2",
      label: "Facebook",
    },
    {
      icon: Instagram,
      url: socialLinks.instagram,
      color: "#E4405F",
      label: "Instagram",
    },
    {
      icon: Twitter,
      url: socialLinks.twitter,
      color: "#000000",
      label: "Twitter",
    },
    {
      icon: Youtube,
      url: socialLinks.youtube,
      color: "#FF0000",
      label: "YouTube",
    },
    {
      icon: Linkedin,
      url: socialLinks.linkedin,
      color: "#0A66C2",
      label: "LinkedIn",
    },
    {
      icon: Phone,
      url: "tel:+919876543210",
      color: "#3b82f6",
      label: "Call Us",
    },
    {
      icon: Whatsapp,
      url: "https://wa.me/919876543210?text=Hello! I would like to know more about the Organic Expo.",
      color: "#25D366",
      label: "WhatsApp",
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

      <div className="flex flex-col gap-2 fixed right-2 top-[45%] lg:top-1/2 -translate-y-1/2 z-50">
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
                  <Icon size={16} style={{ color: social.color }} />
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

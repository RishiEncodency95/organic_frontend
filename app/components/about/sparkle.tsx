import React from "react";

const Sparkle = ({ style, color = '#5ef5e0', shadowColor = '#0A7C6E' }: { style?: React.CSSProperties, color?: string, shadowColor?: string }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '16px',
      color: color,
      textShadow: `0 0 8px ${shadowColor}, 0 0 15px ${color}, 0 0 25px ${color}`,
      animation: 'sparkleAnim 1.8s ease-in-out infinite',
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

export default Sparkle;

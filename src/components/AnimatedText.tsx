import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export interface AnimatedTextProps {
  text: string;
  delay: number;
  fontSize?: number;
  color?: string;
  highlightColor?: string;
  fontWeight?: string;
  textAlign?: "left" | "center" | "right";
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay,
  fontSize = 48,
  color = "#FFFFFF",
  highlightColor,
  fontWeight = "600",
  textAlign = "center",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const springValue = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 20,
      stiffness: 80,
      mass: 0.5,
    },
  });

  const opacity = interpolate(
    frame - delay,
    [0, 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const translateY = interpolate(
    springValue,
    [0, 1],
    [30, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  if (frame < delay) {
    return null;
  }

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        fontSize,
        color: highlightColor || color,
        fontWeight,
        textAlign,
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        lineHeight: 1.3,
        padding: "0 60px",
        textShadow: highlightColor
          ? `0 0 20px ${highlightColor}40, 0 2px 4px rgba(0,0,0,0.5)`
          : "0 2px 4px rgba(0,0,0,0.5)",
      }}
    >
      {text}
    </div>
  );
};

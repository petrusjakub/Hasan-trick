import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export interface BrandWatermarkProps {
  text?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const BrandWatermark: React.FC<BrandWatermarkProps> = ({
  text = "WealthMind Academy",
  position = "bottom-right",
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [20, 40], [0, 0.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const positionStyles: Record<string, React.CSSProperties> = {
    "top-left": { top: 60, left: 40 },
    "top-right": { top: 60, right: 40 },
    "bottom-left": { bottom: 60, left: 40 },
    "bottom-right": { bottom: 60, right: 40 },
  };

  return (
    <div
      style={{
        position: "absolute",
        ...positionStyles[position],
        opacity,
        fontSize: 24,
        fontWeight: "500",
        color: "#FFFFFF",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        letterSpacing: "1px",
        textTransform: "uppercase",
      }}
    >
      {text}
    </div>
  );
};

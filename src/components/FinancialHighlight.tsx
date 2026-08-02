import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export interface FinancialHighlightProps {
  amount: string;
  label?: string;
  delay: number;
  fontSize?: number;
}

export const FinancialHighlight: React.FC<FinancialHighlightProps> = ({
  amount,
  label,
  delay,
  fontSize = 72,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleSpring = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 12,
      stiffness: 100,
      mass: 0.8,
    },
  });

  const opacity = interpolate(
    frame - delay,
    [0, 10],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    scaleSpring,
    [0, 1],
    [0.5, 1],
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: "800",
          color: "#FFD700",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
          textShadow: "0 0 30px rgba(255, 215, 0, 0.4), 0 4px 8px rgba(0,0,0,0.5)",
          letterSpacing: "-1px",
        }}
      >
        {amount}
      </div>
      {label && (
        <div
          style={{
            fontSize: fontSize * 0.4,
            fontWeight: "400",
            color: "#CCCCCC",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            marginTop: 8,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

import React from "react";
import { AbsoluteFill } from "remotion";

export interface BackgroundProps {
  variant?: "dark" | "navy" | "midnight";
}

export const Background: React.FC<BackgroundProps> = ({
  variant = "dark",
}) => {
  const gradients: Record<string, string> = {
    dark: "linear-gradient(180deg, #0A0A0A 0%, #1A1A2E 50%, #0F0F1A 100%)",
    navy: "linear-gradient(180deg, #0D1B2A 0%, #1B2838 50%, #0D1B2A 100%)",
    midnight: "linear-gradient(180deg, #0C0C1E 0%, #1A1A3E 40%, #0C0C1E 100%)",
  };

  return (
    <AbsoluteFill
      style={{
        background: gradients[variant],
      }}
    />
  );
};

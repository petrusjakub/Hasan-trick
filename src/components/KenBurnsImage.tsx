import React from "react";
import {
  AbsoluteFill,
  Img,
  useCurrentFrame,
  interpolate,
} from "remotion";

export interface KenBurnsImageProps {
  /** Full image source path (use staticFile() in parent) */
  src: string;
  /** Zoom direction: "in" scales up, "out" scales down, "none" stays static */
  zoom?: "in" | "out" | "none";
  /** Duration of this slide in frames (for interpolation) */
  durationInFrames: number;
}

/**
 * KenBurnsImage - Displays a background image with a slow Ken Burns zoom effect.
 * Includes a dark overlay for text readability.
 */
export const KenBurnsImage: React.FC<KenBurnsImageProps> = ({
  src,
  zoom = "in",
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const getScale = (): number => {
    if (zoom === "none") return 1;

    const startScale = zoom === "in" ? 1 : 1.2;
    const endScale = zoom === "in" ? 1.2 : 1;

    return interpolate(frame, [0, durationInFrames], [startScale, endScale], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  };

  const scale = getScale();

  return (
    <AbsoluteFill>
      {/* Image layer with zoom */}
      <AbsoluteFill
        style={{
          overflow: "hidden",
        }}
      >
        <Img
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </AbsoluteFill>

      {/* Dark overlay for text readability */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

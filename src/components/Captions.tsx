import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export interface Caption {
  /** The caption text to display */
  text: string;
  /** Frame when this caption appears */
  startFrame: number;
  /** Frame when this caption disappears */
  endFrame: number;
}

export interface CaptionsProps {
  /** Array of timed captions */
  captions: Caption[];
  /** Font size for captions (default: 42) */
  fontSize?: number;
  /** Text color (default: #FFFFFF) */
  color?: string;
  /** Background color for the caption box (default: semi-transparent black) */
  backgroundColor?: string;
  /** Position from bottom in pixels (default: 280) */
  bottomOffset?: number;
}

/**
 * Captions - Displays timed subtitle captions with word-highlight animation.
 * Positioned at the bottom of the frame with a modern pill-style background.
 * Each caption fades in with a spring animation when it appears.
 */
export const Captions: React.FC<CaptionsProps> = ({
  captions,
  fontSize = 42,
  color = "#FFFFFF",
  backgroundColor = "rgba(0, 0, 0, 0.75)",
  bottomOffset = 280,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find the current active caption
  const activeCaption = captions.find(
    (caption) => frame >= caption.startFrame && frame < caption.endFrame
  );

  if (!activeCaption) {
    return null;
  }

  const localFrame = frame - activeCaption.startFrame;
  const captionDuration = activeCaption.endFrame - activeCaption.startFrame;

  // Fade in animation
  const fadeIn = spring({
    frame: localFrame,
    fps,
    config: {
      damping: 20,
      stiffness: 100,
      mass: 0.5,
    },
  });

  // Fade out near the end
  const fadeOut = interpolate(
    localFrame,
    [captionDuration - 8, captionDuration],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const opacity = Math.min(fadeIn, fadeOut);

  // Slide up animation
  const translateY = interpolate(fadeIn, [0, 1], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Word-by-word highlight effect
  const words = activeCaption.text.split(" ");
  const progressPerWord = captionDuration / words.length;
  const currentWordIndex = Math.min(
    Math.floor(localFrame / progressPerWord),
    words.length - 1
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: bottomOffset,
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          backgroundColor,
          borderRadius: 16,
          padding: "16px 32px",
          maxWidth: "90%",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize,
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: "700",
            lineHeight: 1.4,
          }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              style={{
                color: index <= currentWordIndex ? "#FFD700" : color,
                transition: "color 0.1s ease",
                marginRight: index < words.length - 1 ? "0.3em" : 0,
              }}
            >
              {word}
            </span>
          ))}
        </span>
      </div>
    </AbsoluteFill>
  );
};

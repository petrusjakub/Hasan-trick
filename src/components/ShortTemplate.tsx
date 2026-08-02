import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { AnimatedText } from "./AnimatedText";
import { FinancialHighlight } from "./FinancialHighlight";
import { Background, BackgroundProps } from "./Background";
import { BrandWatermark } from "./BrandWatermark";
import { KenBurnsImage } from "./KenBurnsImage";
import { Captions, Caption } from "./Captions";

export interface TextSlide {
  text: string;
  startFrame: number;
  duration: number;
  type: "text" | "financial" | "title" | "subtitle";
  fontSize?: number;
  color?: string;
  highlightColor?: string;
  label?: string;
  /** Path to image relative to public/ folder (e.g. "images/scene1.png") */
  image?: string;
  /** Ken Burns zoom direction: "in" zooms from 1x to 1.2x, "out" zooms from 1.2x to 1x, "none" for static */
  imageZoom?: "in" | "out" | "none";
}

export interface ShortTemplateProps {
  slides: TextSlide[];
  backgroundVariant?: BackgroundProps["variant"];
  showWatermark?: boolean;
  title?: string;
  /** Path to audio file relative to public/ folder (e.g. "audio/voiceover.mp3") */
  audioSrc?: string;
  /** Audio volume from 0 to 1 (default: 1) */
  audioVolume?: number;
  /** Captions array for subtitle overlay */
  captions?: Caption[];
}

export const ShortTemplate: React.FC<ShortTemplateProps> = ({
  slides,
  backgroundVariant = "dark",
  showWatermark = true,
  title,
  audioSrc,
  audioVolume = 1,
  captions,
}) => {
  return (
    <AbsoluteFill>
      {/* Base background (shown when no image is present) */}
      <Background variant={backgroundVariant} />

      {/* Per-slide background images with Ken Burns effect */}
      {slides.map((slide, index) =>
        slide.image ? (
          <Sequence
            key={`img-${index}`}
            from={slide.startFrame}
            durationInFrames={slide.duration}
          >
            <KenBurnsImage
              src={staticFile(slide.image)}
              zoom={slide.imageZoom || "in"}
              durationInFrames={slide.duration}
            />
          </Sequence>
        ) : null
      )}

      {/* Text content overlay */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "120px 40px",
        }}
      >
        {slides.map((slide, index) => (
          <Sequence
            key={index}
            from={slide.startFrame}
            durationInFrames={slide.duration}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              {slide.type === "financial" ? (
                <FinancialHighlight
                  amount={slide.text}
                  label={slide.label}
                  delay={0}
                  fontSize={slide.fontSize || 72}
                />
              ) : (
                <AnimatedText
                  text={slide.text}
                  delay={0}
                  fontSize={
                    slide.fontSize ||
                    (slide.type === "title" ? 64 : slide.type === "subtitle" ? 36 : 48)
                  }
                  color={slide.color || "#FFFFFF"}
                  highlightColor={slide.highlightColor}
                  fontWeight={slide.type === "title" ? "800" : "600"}
                />
              )}
            </div>
          </Sequence>
        ))}
      </AbsoluteFill>

      {/* Captions overlay (positioned at bottom) */}
      {captions && captions.length > 0 && <Captions captions={captions} />}

      {showWatermark && <BrandWatermark />}

      {/* Audio track */}
      {audioSrc && (
        <Audio src={staticFile(audioSrc)} volume={audioVolume} />
      )}
    </AbsoluteFill>
  );
};

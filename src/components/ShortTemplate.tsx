import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { AnimatedText } from "./AnimatedText";
import { FinancialHighlight } from "./FinancialHighlight";
import { Background, BackgroundProps } from "./Background";
import { BrandWatermark } from "./BrandWatermark";

export interface TextSlide {
  text: string;
  startFrame: number;
  duration: number;
  type: "text" | "financial" | "title" | "subtitle";
  fontSize?: number;
  color?: string;
  highlightColor?: string;
  label?: string;
}

export interface ShortTemplateProps {
  slides: TextSlide[];
  backgroundVariant?: BackgroundProps["variant"];
  showWatermark?: boolean;
  title?: string;
}

export const ShortTemplate: React.FC<ShortTemplateProps> = ({
  slides,
  backgroundVariant = "dark",
  showWatermark = true,
  title,
}) => {
  return (
    <AbsoluteFill>
      <Background variant={backgroundVariant} />

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

      {showWatermark && <BrandWatermark />}
    </AbsoluteFill>
  );
};

import React from "react";
import { ShortTemplate } from "../components/ShortTemplate";
import {
  latteFactorSlides,
  latteFactorCaptions,
  latteFactorMeta,
} from "../data/short-latte-factor";

/**
 * LatteFactorShort - "The Latte Factor" Short
 * Shows how daily coffee spending could become a retirement fund if invested.
 *
 * Features used:
 * - Background images per slide with Ken Burns zoom effect
 * - Audio voiceover synced to the video
 * - Auto-captions with word-by-word highlight
 * - Midnight background variant
 * - Brand watermark
 *
 * To use this composition:
 * 1. Add images to public/images/ (latte1.png through latte5.png)
 * 2. Add voiceover audio to public/audio/voiceover-latte-factor.mp3
 * 3. Run: npx remotion render src/index.ts LatteFactorShort out/latte-factor.mp4
 */
export const LatteFactorShort: React.FC = () => {
  return (
    <ShortTemplate
      slides={latteFactorSlides}
      backgroundVariant="midnight"
      showWatermark={true}
      audioSrc={latteFactorMeta.audioSrc}
      audioVolume={1}
      captions={latteFactorCaptions}
    />
  );
};

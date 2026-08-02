import React from "react";
import { ShortTemplate } from "../components/ShortTemplate";
import {
  investing101Slides,
  investing101Captions,
  investing101Meta,
} from "../data/short-investing-101";

/**
 * FullShortExample - Demonstrates ALL features:
 * - Background images per slide with Ken Burns zoom effect
 * - Audio voiceover synced to the video
 * - Auto-captions with word-by-word highlight
 *
 * To use this composition:
 * 1. Add images to public/images/ (scene1.png through scene5.png)
 * 2. Add voiceover audio to public/audio/voiceover-investing-101.mp3
 * 3. Run: npx remotion render src/index.ts FullShortExample out/investing-101.mp4
 */
export const FullShortExample: React.FC = () => {
  return (
    <ShortTemplate
      slides={investing101Slides}
      backgroundVariant="midnight"
      showWatermark={true}
      audioSrc={investing101Meta.audioSrc}
      audioVolume={1}
      captions={investing101Captions}
    />
  );
};

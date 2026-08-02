import { TextSlide } from "../components/ShortTemplate";
import { Caption } from "../components/Captions";

/**
 * Full Short Example: "Investing 101 - Start With $100"
 * Duration: 10 seconds (300 frames at 30fps)
 * Demonstrates: background images + Ken Burns zoom + audio voiceover + captions
 *
 * Images should be placed in public/images/ folder.
 * Audio voiceover should be placed in public/audio/ folder.
 *
 * Script breakdown:
 * - Slide 1 (0-2s): Hook with background image
 * - Slide 2 (2-4s): Key insight with image
 * - Slide 3 (4-6s): Financial example with image
 * - Slide 4 (6-8s): Result/proof with image
 * - Slide 5 (8-10s): CTA with image
 */

export const investing101Slides: TextSlide[] = [
  {
    text: "You Only Need $100\nTo Start Investing",
    startFrame: 0,
    duration: 60,
    type: "title",
    fontSize: 58,
    image: "images/scene1.png",
    imageZoom: "in",
  },
  {
    text: "Most people think investing\nis only for the wealthy.",
    startFrame: 60,
    duration: 60,
    type: "text",
    fontSize: 44,
    image: "images/scene2.png",
    imageZoom: "out",
  },
  {
    text: "$100/month",
    startFrame: 120,
    duration: 60,
    type: "financial",
    fontSize: 80,
    label: "in an index fund (S&P 500)",
    image: "images/scene3.png",
    imageZoom: "in",
  },
  {
    text: "$185,000+",
    startFrame: 180,
    duration: 60,
    type: "financial",
    fontSize: 90,
    label: "after 30 years at 10% return",
    image: "images/scene4.png",
    imageZoom: "out",
  },
  {
    text: "Start today.\nYour future self will thank you.",
    startFrame: 240,
    duration: 60,
    type: "text",
    fontSize: 42,
    color: "#E0E0E0",
    image: "images/scene5.png",
    imageZoom: "in",
  },
];

/**
 * Captions synced to voiceover audio.
 * Each caption represents one phrase/sentence in the voiceover.
 * The active word is highlighted in gold as the caption plays.
 */
export const investing101Captions: Caption[] = [
  { text: "You only need one hundred dollars", startFrame: 0, endFrame: 30 },
  { text: "to start investing today", startFrame: 30, endFrame: 60 },
  { text: "Most people think investing", startFrame: 60, endFrame: 90 },
  { text: "is only for the wealthy", startFrame: 90, endFrame: 120 },
  { text: "But just one hundred a month", startFrame: 120, endFrame: 150 },
  { text: "in the S&P 500 index fund", startFrame: 150, endFrame: 180 },
  { text: "grows to over 185 thousand dollars", startFrame: 180, endFrame: 215 },
  { text: "after thirty years", startFrame: 215, endFrame: 240 },
  { text: "Start today", startFrame: 240, endFrame: 265 },
  { text: "Your future self will thank you", startFrame: 265, endFrame: 300 },
];

export const investing101Meta = {
  title: "Investing 101 - Start With $100",
  description:
    "Learn how you can start investing with just $100 per month and build significant wealth over time through index fund investing.",
  tags: [
    "investing",
    "index funds",
    "S&P 500",
    "wealth building",
    "financial freedom",
    "passive income",
  ],
  durationInFrames: 300,
  fps: 30,
  audioSrc: "audio/voiceover-investing-101.mp3",
};

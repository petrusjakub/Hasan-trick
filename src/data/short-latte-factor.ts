import { TextSlide } from "../components/ShortTemplate";
import { Caption } from "../components/Captions";

/**
 * The Latte Factor - Skip Coffee, Become Rich
 * Duration: 10 seconds (300 frames at 30fps)
 * Demonstrates: background images + Ken Burns zoom + audio voiceover + captions
 *
 * Images should be placed in public/images/ folder (latte1.png through latte5.png).
 * Audio voiceover should be placed in public/audio/ folder.
 *
 * Script breakdown:
 * - Scene 1 (0-2s): Hook - your coffee is costing you
 * - Scene 2 (2-3.8s): Daily cost breakdown
 * - Scene 3 (3.8-5.7s): What if you invested instead
 * - Scene 4 (5.7-7.8s): The big result
 * - Scene 5 (7.8-10s): CTA - retirement fund
 */

export const latteFactorSlides: TextSlide[] = [
  {
    text: "Your Coffee is\nCosting You a Fortune",
    startFrame: 0,
    duration: 60,
    type: "title",
    fontSize: 56,
    image: "images/latte1.png",
    imageZoom: "in",
  },
  {
    text: "$5/day = $150/month",
    startFrame: 60,
    duration: 55,
    type: "financial",
    fontSize: 72,
    label: "spent on coffee",
    image: "images/latte2.png",
    imageZoom: "out",
  },
  {
    text: "$150/month\ninvested in S&P 500",
    startFrame: 115,
    duration: 55,
    type: "text",
    fontSize: 46,
    image: "images/latte3.png",
    imageZoom: "in",
  },
  {
    text: "$413,000+",
    startFrame: 170,
    duration: 65,
    type: "financial",
    fontSize: 96,
    label: "after 30 years at 10% return",
    image: "images/latte4.png",
    imageZoom: "out",
  },
  {
    text: "Your daily coffee\ncould be your retirement fund",
    startFrame: 235,
    duration: 65,
    type: "text",
    fontSize: 42,
    color: "#E0E0E0",
    image: "images/latte5.png",
    imageZoom: "in",
  },
];

/**
 * Captions synced to voiceover audio.
 * Each caption represents one phrase/sentence in the voiceover.
 * The active word is highlighted in gold as the caption plays.
 */
export const latteFactorCaptions: Caption[] = [
  { text: "You spend five dollars on coffee", startFrame: 0, endFrame: 25 },
  { text: "every single day", startFrame: 25, endFrame: 45 },
  { text: "That's a hundred fifty a month", startFrame: 45, endFrame: 70 },
  { text: "But what if you invested that instead", startFrame: 70, endFrame: 100 },
  { text: "One hundred fifty a month", startFrame: 100, endFrame: 125 },
  { text: "in the S&P 500", startFrame: 125, endFrame: 145 },
  { text: "becomes four hundred thirteen thousand", startFrame: 145, endFrame: 180 },
  { text: "dollars in thirty years", startFrame: 180, endFrame: 205 },
  { text: "Your daily coffee could've been", startFrame: 205, endFrame: 240 },
  { text: "a retirement fund", startFrame: 240, endFrame: 265 },
  { text: "Start investing today", startFrame: 265, endFrame: 285 },
  { text: "Follow for more", startFrame: 285, endFrame: 300 },
];

export const latteFactorMeta = {
  title: "The Latte Factor - Skip Coffee, Become Rich",
  description:
    "Discover how your daily coffee habit could be costing you hundreds of thousands in potential investment returns over 30 years.",
  tags: [
    "latte factor",
    "investing",
    "coffee money",
    "wealth building",
    "compound interest",
    "financial freedom",
    "money tips",
  ],
  durationInFrames: 300,
  fps: 30,
  audioSrc: "audio/voiceover-latte-factor.mp3",
};

import { TextSlide } from "../components/ShortTemplate";

/**
 * Short: "The Magic of Compound Interest"
 * Duration: 10 seconds (300 frames at 30fps)
 * Topic: How compound interest turns small investments into massive wealth over time.
 *
 * Script breakdown:
 * - Slide 1 (0-2s): Hook / Title
 * - Slide 2 (2-4s): The key insight
 * - Slide 3 (4-5.5s): Financial example - initial investment
 * - Slide 4 (5.5-7s): Financial example - result after 30 years
 * - Slide 5 (7-9s): The takeaway
 * - Slide 6 (9-10s): Call to action
 */

export const compoundInterestSlides: TextSlide[] = [
  {
    text: "The Magic of Compound Interest",
    startFrame: 0,
    duration: 60,
    type: "title",
    fontSize: 64,
  },
  {
    text: "Your money earns money.\nThen THAT money earns money too.",
    startFrame: 60,
    duration: 60,
    type: "text",
    fontSize: 44,
  },
  {
    text: "$200/month",
    startFrame: 120,
    duration: 45,
    type: "financial",
    fontSize: 80,
    label: "invested monthly starting at age 25",
  },
  {
    text: "$1,000,000+",
    startFrame: 165,
    duration: 45,
    type: "financial",
    fontSize: 90,
    label: "by age 65 (at 10% avg return)",
  },
  {
    text: "Start early. Stay consistent.\nLet time do the heavy lifting.",
    startFrame: 210,
    duration: 60,
    type: "text",
    fontSize: 42,
    color: "#E0E0E0",
  },
  {
    text: "Follow for more wealth tips",
    startFrame: 270,
    duration: 30,
    type: "subtitle",
    fontSize: 36,
    highlightColor: "#FFD700",
  },
];

export const compoundInterestMeta = {
  title: "The Magic of Compound Interest",
  description:
    "Learn how investing just $200/month starting at age 25 can grow to over $1,000,000 by age 65 through the power of compound interest.",
  tags: [
    "compound interest",
    "investing",
    "wealth building",
    "financial freedom",
    "money tips",
  ],
  durationInFrames: 300,
  fps: 30,
};

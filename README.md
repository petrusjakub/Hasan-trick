# WealthMind Academy - YouTube Shorts Template

A ready-to-use **Remotion** template for creating vertical YouTube Shorts (1080x1920) with animated text, financial highlights, and dark themed backgrounds. Built for the **WealthMind Academy** channel (personal finance & wealth building content).

## Features

- Vertical format (1080x1920) at 30fps - perfect for YouTube Shorts, TikTok, Reels
- Dark gradient backgrounds with professional look
- Fade-in text animations with spring physics
- Gold (#FFD700) highlighted financial numbers with scale-in effect
- Reusable template - create new Shorts by just changing the data
- Brand watermark included
- One complete example Short about compound interest

## Quick Start with GitHub Codespaces (Android/Chrome)

This project is designed to work seamlessly in GitHub Codespaces, so you can create and render videos directly from your Android phone using Chrome.

### Step 1: Open in Codespaces

1. Open this repository on GitHub in Chrome on your phone
2. Tap the green **"Code"** button
3. Select the **"Codespaces"** tab
4. Tap **"Create codespace on main"**
5. Wait for the environment to load (first time takes 2-3 minutes)

### Step 2: Install Dependencies

Once the Codespace terminal is ready, run:

```bash
npm install
```

### Step 3: Launch Remotion Studio (Preview)

```bash
npm start
```

This starts the Remotion Studio on port 3000. The Codespace will show a notification to open the forwarded port - tap it to preview your Shorts in the browser.

### Step 4: Render Final Video

To render the compound interest Short as an MP4:

```bash
npm run build
```

The output will be saved to `out/compound-interest.mp4`.

## Creating a New Short

The template is designed to be reusable. To create a new Short:

### 1. Create a Data File

Create a new file in `src/data/` with your script:

```typescript
// src/data/short-my-topic.ts
import { TextSlide } from "../components/ShortTemplate";

export const myTopicSlides: TextSlide[] = [
  {
    text: "Your Title Here",
    startFrame: 0,       // starts at 0 seconds
    duration: 60,        // lasts 2 seconds (60 frames at 30fps)
    type: "title",
    fontSize: 64,
  },
  {
    text: "Key insight or fact",
    startFrame: 60,      // starts at 2 seconds
    duration: 60,
    type: "text",
    fontSize: 48,
  },
  {
    text: "$50,000",
    startFrame: 120,     // starts at 4 seconds
    duration: 45,
    type: "financial",   // uses gold highlight
    fontSize: 80,
    label: "description of the number",
  },
  // Add more slides...
];
```

### 2. Create a Composition File

```typescript
// src/compositions/MyTopicShort.tsx
import React from "react";
import { ShortTemplate } from "../components/ShortTemplate";
import { myTopicSlides } from "../data/short-my-topic";

export const MyTopicShort: React.FC = () => {
  return (
    <ShortTemplate
      slides={myTopicSlides}
      backgroundVariant="dark"  // "dark" | "navy" | "midnight"
      showWatermark={true}
    />
  );
};
```

### 3. Register in Root.tsx

Add your new composition to `src/Root.tsx`:

```typescript
import { MyTopicShort } from "./compositions/MyTopicShort";

// Inside the Root component, add:
<Composition
  id="MyTopicShort"
  component={MyTopicShort}
  durationInFrames={300}  // 10 seconds at 30fps
  fps={30}
  width={1080}
  height={1920}
/>
```

### 4. Render

```bash
npx remotion render src/index.ts MyTopicShort out/my-topic.mp4
```

## Slide Types

| Type | Description | Special Features |
|------|-------------|-----------------|
| `title` | Large bold text | 64px, weight 800 |
| `text` | Regular content text | 48px, fade-in animation |
| `subtitle` | Smaller text | 36px, good for CTAs |
| `financial` | Financial numbers | Gold (#FFD700) color, scale-in animation, optional label |

## TextSlide Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `text` | string | Yes | The text to display |
| `startFrame` | number | Yes | When the slide appears (in frames, 30 = 1 second) |
| `duration` | number | Yes | How long the slide stays (in frames) |
| `type` | string | Yes | "text", "financial", "title", or "subtitle" |
| `fontSize` | number | No | Custom font size (defaults vary by type) |
| `color` | string | No | Text color (default: #FFFFFF) |
| `highlightColor` | string | No | Glow color for emphasis |
| `label` | string | No | Sub-label (used with "financial" type) |

## Background Variants

- **`dark`** - Deep black to dark grey gradient (default)
- **`navy`** - Dark navy blue tones
- **`midnight`** - Deep purple/navy midnight theme

## Project Structure

```
.
├── .devcontainer/
│   └── devcontainer.json    # GitHub Codespaces config
├── src/
│   ├── index.ts             # Remotion entry point
│   ├── Root.tsx             # Composition definitions
│   ├── components/
│   │   ├── AnimatedText.tsx      # Fade-in text with spring animation
│   │   ├── Background.tsx        # Dark gradient backgrounds
│   │   ├── BrandWatermark.tsx    # Channel watermark
│   │   ├── FinancialHighlight.tsx # Gold-highlighted numbers
│   │   ├── ShortTemplate.tsx     # Main reusable template
│   │   └── index.ts             # Component exports
│   ├── compositions/
│   │   └── CompoundInterestShort.tsx  # Example Short
│   └── data/
│       └── short-compound-interest.ts  # Example script/data
├── package.json
├── tsconfig.json
├── remotion.config.ts
└── README.md
```

## Timing Guide

At 30fps:
- 30 frames = 1 second
- 60 frames = 2 seconds
- 90 frames = 3 seconds
- 300 frames = 10 seconds (max for YouTube Shorts)

For a typical 10-second Short, plan 4-6 slides with 1.5-2.5 seconds each.

## Customization

### Change Brand Name
Edit `src/components/BrandWatermark.tsx` or pass a `text` prop when using it.

### Change Colors
- Background: Edit gradient values in `src/components/Background.tsx`
- Financial highlight: Change `#FFD700` in `src/components/FinancialHighlight.tsx`
- Text: Pass `color` or `highlightColor` in your slide data

### Change Animation Speed
Adjust `spring` config values in AnimatedText and FinancialHighlight components:
- `damping` - higher = less bouncy
- `stiffness` - higher = snappier
- `mass` - higher = heavier/slower

## Rendering Tips

- For YouTube Shorts: render as MP4 (default)
- Keep videos under 60 seconds (YouTube Shorts limit)
- Optimal duration: 15-30 seconds for engagement
- Use `npx remotion render --codec=h264` for best compatibility

## License

MIT

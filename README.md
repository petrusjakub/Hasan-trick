# WealthMind Academy - YouTube Shorts Template

A ready-to-use **Remotion** template for creating vertical YouTube Shorts (1080x1920) with animated text, background images with Ken Burns effect, audio voiceover, auto-captions, and dark themed backgrounds. Built for the **WealthMind Academy** channel (personal finance & wealth building content).

## Features

- Vertical format (1080x1920) at 30fps - perfect for YouTube Shorts, TikTok, Reels
- Dark gradient backgrounds with professional look
- Fade-in text animations with spring physics
- Gold (#FFD700) highlighted financial numbers with scale-in effect
- **Background images per slide** with Ken Burns zoom-in/zoom-out effect
- **Audio/voiceover support** - sync MP3/WAV files to your video
- **Auto-captions** with word-by-word highlight animation (karaoke style)
- Reusable template - create new Shorts by just changing the data
- Full backward compatibility - slides without images still work as before
- Brand watermark included
- Two complete examples: text-only and full image+audio+captions

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

To render the compound interest Short (text only):

```bash
npm run build
```

To render the full example with images + audio + captions:

```bash
npm run build:full
```

Output will be saved to the `out/` folder.

---

## New Features: Images, Audio & Captions

### Background Images with Ken Burns Effect

Each slide can optionally have a background image with a smooth Ken Burns zoom animation. The image fills the entire frame with a dark overlay for text readability.

**How to add images:**

1. Place your images in the `public/images/` folder (PNG, JPG, or WebP)
2. Recommended size: 1080x1920 (vertical) or larger
3. Reference them in your slide data:

```typescript
{
  text: "Your Title Here",
  startFrame: 0,
  duration: 60,
  type: "title",
  image: "images/scene1.png",   // path relative to public/
  imageZoom: "in",              // "in" | "out" | "none"
}
```

**Zoom options:**
- `"in"` - Slowly zooms from 1x to 1.2x (default, creates forward motion)
- `"out"` - Slowly zooms from 1.2x to 1x (creates settling effect)
- `"none"` - Static image, no movement

**Where to get images:**
- [Unsplash](https://unsplash.com) - Free stock photos
- [Pexels](https://pexels.com) - Free stock photos and videos
- AI image generators (Midjourney, DALL-E, Leonardo AI)
- Use portrait/vertical orientation for best results

### Audio/Voiceover Support

Sync an audio voiceover file with your video. The audio plays from the start of the composition.

**How to add audio:**

1. Place your audio file in `public/audio/` (MP3 or WAV format)
2. Pass the `audioSrc` prop to ShortTemplate:

```typescript
<ShortTemplate
  slides={mySlides}
  audioSrc="audio/voiceover.mp3"    // path relative to public/
  audioVolume={1}                    // 0 to 1
/>
```

**How to generate voiceover:**
- [ElevenLabs](https://elevenlabs.io) - AI voice generation (recommended)
- [Play.ht](https://play.ht) - AI text-to-speech
- [Google Cloud TTS](https://cloud.google.com/text-to-speech) - Google AI voices
- Record yourself using any voice recorder app

**Tips for voiceover:**
- Keep it under 10 seconds for YouTube Shorts
- Match your captions timing to the actual audio pacing
- Use a clear, engaging voice with good pacing
- Export as MP3 for smaller file size

### Auto-Captions (Subtitles)

Display timed captions with a modern word-by-word highlight effect. The active word is highlighted in gold as the audio plays - similar to karaoke-style subtitles.

**How to add captions:**

1. Define your captions array with timing:

```typescript
import { Caption } from "../components/Captions";

export const myCaptions: Caption[] = [
  { text: "You only need one hundred dollars", startFrame: 0, endFrame: 30 },
  { text: "to start investing today", startFrame: 30, endFrame: 60 },
  { text: "The earlier you start", startFrame: 60, endFrame: 90 },
  // ... more captions
];
```

2. Pass captions to ShortTemplate:

```typescript
<ShortTemplate
  slides={mySlides}
  audioSrc="audio/voiceover.mp3"
  captions={myCaptions}
/>
```

**Caption timing tips:**
- Each caption should be one short phrase (5-8 words max)
- Time them to match your voiceover exactly
- At 30fps: 30 frames = 1 second
- Leave no gaps between captions for smooth flow
- Words highlight progressively from left to right

---

## Creating a New Short

### Text-Only Short (Basic)

Create a new Short with just animated text (no images/audio needed):

#### 1. Create a Data File

```typescript
// src/data/short-my-topic.ts
import { TextSlide } from "../components/ShortTemplate";

export const myTopicSlides: TextSlide[] = [
  {
    text: "Your Title Here",
    startFrame: 0,
    duration: 60,
    type: "title",
    fontSize: 64,
  },
  {
    text: "Key insight or fact",
    startFrame: 60,
    duration: 60,
    type: "text",
    fontSize: 48,
  },
  {
    text: "$50,000",
    startFrame: 120,
    duration: 45,
    type: "financial",
    fontSize: 80,
    label: "description of the number",
  },
];
```

#### 2. Create a Composition File

```typescript
// src/compositions/MyTopicShort.tsx
import React from "react";
import { ShortTemplate } from "../components/ShortTemplate";
import { myTopicSlides } from "../data/short-my-topic";

export const MyTopicShort: React.FC = () => {
  return (
    <ShortTemplate
      slides={myTopicSlides}
      backgroundVariant="dark"
      showWatermark={true}
    />
  );
};
```

### Full Short (Images + Audio + Captions)

Create a cinematic Short with all features:

#### 1. Prepare Assets

```
public/
  images/
    scene1.png    (1080x1920 recommended)
    scene2.png
    scene3.png
  audio/
    voiceover.mp3 (under 10 seconds)
```

#### 2. Create a Data File

```typescript
// src/data/short-my-full-topic.ts
import { TextSlide } from "../components/ShortTemplate";
import { Caption } from "../components/Captions";

export const mySlides: TextSlide[] = [
  {
    text: "Amazing Title",
    startFrame: 0,
    duration: 90,
    type: "title",
    fontSize: 58,
    image: "images/scene1.png",
    imageZoom: "in",
  },
  {
    text: "$10,000",
    startFrame: 90,
    duration: 90,
    type: "financial",
    fontSize: 80,
    label: "passive income per year",
    image: "images/scene2.png",
    imageZoom: "out",
  },
  {
    text: "Follow for more tips",
    startFrame: 180,
    duration: 120,
    type: "subtitle",
    image: "images/scene3.png",
    imageZoom: "in",
  },
];

export const myCaptions: Caption[] = [
  { text: "Here is an amazing fact", startFrame: 0, endFrame: 45 },
  { text: "that will blow your mind", startFrame: 45, endFrame: 90 },
  { text: "You can earn ten thousand", startFrame: 90, endFrame: 135 },
  { text: "in passive income yearly", startFrame: 135, endFrame: 180 },
  { text: "Follow for more tips", startFrame: 180, endFrame: 300 },
];

export const myMeta = {
  title: "My Topic",
  durationInFrames: 300,
  fps: 30,
  audioSrc: "audio/voiceover.mp3",
};
```

#### 3. Create a Composition File

```typescript
// src/compositions/MyFullShort.tsx
import React from "react";
import { ShortTemplate } from "../components/ShortTemplate";
import { mySlides, myCaptions, myMeta } from "../data/short-my-full-topic";

export const MyFullShort: React.FC = () => {
  return (
    <ShortTemplate
      slides={mySlides}
      backgroundVariant="midnight"
      showWatermark={true}
      audioSrc={myMeta.audioSrc}
      captions={myCaptions}
    />
  );
};
```

#### 4. Register in Root.tsx

```typescript
import { MyFullShort } from "./compositions/MyFullShort";

// Add inside Root component:
<Composition
  id="MyFullShort"
  component={MyFullShort}
  durationInFrames={300}
  fps={30}
  width={1080}
  height={1920}
/>
```

#### 5. Render

```bash
npx remotion render src/index.ts MyFullShort out/my-full-short.mp4
```

---

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
| `image` | string | No | Image path relative to public/ folder |
| `imageZoom` | string | No | Ken Burns zoom: "in", "out", or "none" (default: "in") |

## Caption Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `text` | string | Yes | Caption text to display |
| `startFrame` | number | Yes | Frame when caption appears |
| `endFrame` | number | Yes | Frame when caption disappears |

## ShortTemplate Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `slides` | TextSlide[] | Yes | Array of slide data |
| `backgroundVariant` | string | No | "dark", "navy", or "midnight" (default: "dark") |
| `showWatermark` | boolean | No | Show brand watermark (default: true) |
| `audioSrc` | string | No | Path to audio file relative to public/ |
| `audioVolume` | number | No | Volume from 0 to 1 (default: 1) |
| `captions` | Caption[] | No | Array of timed captions |

## Background Variants

- **`dark`** - Deep black to dark grey gradient (default)
- **`navy`** - Dark navy blue tones
- **`midnight`** - Deep purple/navy midnight theme

## Project Structure

```
.
├── .devcontainer/
│   └── devcontainer.json        # GitHub Codespaces config
├── public/
│   ├── images/                  # Background images for slides
│   │   └── scene1.png, etc.
│   └── audio/                   # Voiceover audio files
│       └── voiceover.mp3, etc.
├── src/
│   ├── index.ts                 # Remotion entry point
│   ├── Root.tsx                 # Composition definitions
│   ├── components/
│   │   ├── AnimatedText.tsx         # Fade-in text with spring animation
│   │   ├── Background.tsx           # Dark gradient backgrounds
│   │   ├── BrandWatermark.tsx       # Channel watermark
│   │   ├── Captions.tsx             # Auto-captions with word highlight
│   │   ├── FinancialHighlight.tsx   # Gold-highlighted numbers
│   │   ├── KenBurnsImage.tsx        # Image with zoom effect + overlay
│   │   ├── ShortTemplate.tsx        # Main reusable template
│   │   └── index.ts                 # Component exports
│   ├── compositions/
│   │   ├── CompoundInterestShort.tsx  # Text-only example
│   │   └── FullShortExample.tsx       # Full example (images+audio+captions)
│   └── data/
│       ├── short-compound-interest.ts  # Text-only data example
│       └── short-investing-101.ts      # Full data example (images+audio+captions)
├── package.json
├── tsconfig.json
├── remotion.config.ts
└── README.md
```

## Workflow: Creating a Faceless YouTube Short

Here is the recommended workflow for creating faceless YouTube Shorts with this template:

1. **Write the script** - Create your slide text and timing in a data file
2. **Generate voiceover** - Use ElevenLabs or similar to generate audio from your script
3. **Generate/find images** - Create AI images or use stock photos for each scene
4. **Create captions** - Time your captions to match the voiceover audio
5. **Preview** - Run `npm start` and preview in Remotion Studio
6. **Adjust timing** - Fine-tune startFrame/endFrame values until everything syncs perfectly
7. **Render** - Export as MP4 and upload to YouTube Shorts

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
- Caption highlight: Change `#FFD700` in `src/components/Captions.tsx`
- Text: Pass `color` or `highlightColor` in your slide data

### Change Animation Speed
Adjust `spring` config values in AnimatedText and FinancialHighlight components:
- `damping` - higher = less bouncy
- `stiffness` - higher = snappier
- `mass` - higher = heavier/slower

### Change Caption Style
Edit `src/components/Captions.tsx` to customize:
- `fontSize` - Caption text size (default: 42)
- `bottomOffset` - Distance from bottom (default: 280px)
- `backgroundColor` - Caption box background
- Word highlight color (default: gold #FFD700)

## Rendering Tips

- For YouTube Shorts: render as MP4 (default)
- Keep videos under 60 seconds (YouTube Shorts limit)
- Optimal duration: 15-30 seconds for engagement
- Use `npx remotion render --codec=h264` for best compatibility
- Add `--quality=80` flag if file size is too large

## License

MIT

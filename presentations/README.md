# AI Heroes Presentation System

A fully-branded, custom React presentation system built for workshop presentations. Designed to match the AI Heroes brand identity with support for rich media, interactive elements, and speaker notes.

## Features

- **Keyboard Navigation**: Arrow keys, space bar, home/end
- **Speaker Notes**: Toggle with 'N' or 'S' key
- **Fullscreen Mode**: Press 'F' to enter/exit
- **Progress Tracking**: Visual progress bar and slide counter
- **Progressive Reveal**: Click to show bullet points one by one
- **Rich Media Support**: Videos (YouTube, Vimeo, local), images, charts
- **Bilingual**: Built-in support for Dutch and English content
- **Fully Branded**: Uses AI Heroes colors, fonts, and design system

## Quick Start

View the demo presentation at: `/internal/demo-presentation`

## Creating a New Presentation

```tsx
import {
  PresentationContainer,
  TitleSlide,
  ContentSlide,
  PresentationConfig,
} from '../presentations';

const config: PresentationConfig = {
  title: 'Your Workshop Title',
  author: 'AI Heroes',
  date: '28 januari 2026',
  lang: 'nl',
  logo: '/logo.svg',
};

export default function MyPresentation() {
  return (
    <PresentationContainer config={config}>
      <TitleSlide
        title="Welcome"
        subtitle="Your workshop subtitle"
        notes="Speaker notes go here"
      />

      <ContentSlide
        title="Main Points"
        items={[
          'First point',
          'Second point',
          'Third point'
        ]}
        progressive
        notes="Talk about each point as it appears"
      />
    </PresentationContainer>
  );
}
```

## Available Slide Templates

### TitleSlide
Opening/closing slides with large centered text.

```tsx
<TitleSlide
  title="AI Foundations"
  subtitle="De eerste stap van je team in AI"
  author="AI Heroes"
  date="28 januari 2026"
  logo="/logo.svg"
  background="bg-brand-dark"
  notes="Welcome everyone!"
/>
```

### ContentSlide
Standard content slides with title and bullet points.

```tsx
<ContentSlide
  title="Key Concepts"
  subtitle="What you need to know"
  items={['Point 1', 'Point 2', 'Point 3']}
  progressive  // Show items one by one
  accent="red"  // or "blue", "taupe"
  notes="Emphasize each point"
/>
```

### TwoColumnSlide
Split layout for text + media combinations.

```tsx
<TwoColumnSlide
  title="Comparison"
  left={<div>Left content</div>}
  right={<div>Right content</div>}
  split="50/50"  // or "40/60", "60/40"
  align="center"  // or "start", "end"
  gap="xl"  // or "sm", "md", "lg"
/>
```

### ImageSlide
Full-bleed images with optional overlay text.

```tsx
<ImageSlide
  src="/path/to/image.jpg"
  overlay={
    <div>
      <h2 className="text-5xl font-display text-white">
        Overlay Text
      </h2>
    </div>
  }
  overlayPosition="center"  // or "top", "bottom", etc.
  overlayBg="dark"  // or "light", "none"
  objectFit="cover"  // or "contain"
/>
```

### QuoteSlide
Large quotes or testimonials.

```tsx
<QuoteSlide
  quote="This workshop transformed our approach to AI"
  author="Bobby Kremer"
  role="Nationale Postcode Loterij"
  image="/path/to/photo.jpg"
  accent="red"
/>
```

### VideoSlide
Embedded videos (YouTube, Vimeo, or local).

```tsx
<VideoSlide
  title="Demo Video"
  src="https://youtube.com/watch?v=..."
  type="youtube"  // or "vimeo", "local"
  autoPlay={false}
  controls={true}
/>
```

### SectionSlide
Section dividers between topics.

```tsx
<SectionSlide
  number="01"
  title="Getting Started"
  subtitle="The basics you need"
  accent="blue"
/>
```

### ChartSlide
Data visualizations (use any charting library).

```tsx
<ChartSlide
  title="Growth Metrics"
  subtitle="Q4 2025 Results"
  chart={<YourChartComponent />}
  caption="Source: Internal data"
/>
```

## Utility Components

### LogoGrid
Display client logos in a grid.

```tsx
import { LogoGrid } from '../presentations';

<LogoGrid
  logos={[
    { src: '/logos/client1.svg', alt: 'Client 1' },
    { src: '/logos/client2.svg', alt: 'Client 2' },
  ]}
  columns={4}
  size="md"
  grayscale={true}
/>
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Toggle fullscreen |
| `N` or `S` | Toggle speaker notes |
| `C` | Toggle controls |
| `Esc` | Close speaker notes |

## Speaker Notes

Add notes to any slide using the `notes` prop:

```tsx
<ContentSlide
  title="Important Topic"
  items={['Point 1', 'Point 2']}
  notes="Remember to ask the audience about their experience with this topic.

  Spend about 5 minutes here.

  Common questions:
  - How does this apply to our industry?
  - What tools do we need?"
/>
```

Notes support multi-line text and will be displayed in a panel at the bottom of the screen when speaker notes are enabled.

## Brand Colors

The system uses AI Heroes brand colors:
- `brand-red`: #D9534F - Primary accent
- `brand-blue`: #2563EB - Secondary accent
- `brand-taupe`: #A47E68 - Tertiary accent
- `brand-light`: #FDFCF8 - Light backgrounds
- `brand-dark`: #1C1917 - Dark backgrounds
- `brand-stone`: #E7E5E4 - Neutral tone
- `brand-sand`: #F5F5F4 - Subtle backgrounds

## Typography

- **Headlines**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- Access via: `font-display` and `font-sans` utility classes

## Tips

1. **Keep it visual**: Use images and diagrams liberally
2. **Less text, more talk**: Slides are prompts for discussion
3. **Progressive reveal**: Use `progressive` prop for suspense
4. **Practice with notes**: Speaker notes help you stay on track
5. **Use sections**: Break long presentations into clear sections
6. **Test fullscreen**: Always preview in fullscreen mode before presenting

## Adding to Routes

Add your presentation to `App.tsx`:

```tsx
const MyPresentation = React.lazy(() => import('./presentations/examples/MyPresentation').then(m => ({ default: m.default })));

// In Routes:
<Route path="/internal/my-presentation" element={<MyPresentation />} />
```

## Examples

See `presentations/examples/DemoPresentation.tsx` for a complete example showcasing all features.

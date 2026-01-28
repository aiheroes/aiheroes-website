# Getting Started with AI Heroes Presentations

## View the Demo

Your presentation system is ready! Visit:

**http://localhost:3000/internal/demo-presentation**

## Keyboard Controls

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | Jump to first slide |
| `End` | Jump to last slide |
| `F` | Toggle fullscreen (recommended!) |
| `N` or `S` | Toggle speaker notes panel |
| `C` | Hide/show controls |

## What You Can Do

### 1. Try the Demo
- Navigate through slides with arrow keys
- Press `F` to go fullscreen
- Press `N` to see speaker notes
- Click on slides with bullet points to reveal items progressively

### 2. Create Your Own Presentation

Create a new file: `presentations/examples/MyWorkshop.tsx`

```tsx
import {
  PresentationContainer,
  TitleSlide,
  ContentSlide,
  SectionSlide,
  QuoteSlide,
  PresentationConfig,
} from '../index';

const config: PresentationConfig = {
  title: 'My Workshop',
  author: 'AI Heroes',
  date: 'Januari 2026',
  lang: 'nl',
  logo: '/logo.svg',
};

export default function MyWorkshop() {
  return (
    <PresentationContainer config={config}>
      <TitleSlide
        title="Workshop Titel"
        subtitle="Een geweldige workshop"
        notes="Welkom iedereen! Deze workshop duurt 2 uur."
      />

      <SectionSlide
        number="01"
        title="Deel Een"
        subtitle="De basis"
        accent="red"
      />

      <ContentSlide
        title="Belangrijke Punten"
        items={[
          'Eerste punt',
          'Tweede punt',
          'Derde punt'
        ]}
        progressive
        notes="Klik door elk punt. Vraag of er vragen zijn."
      />

      <QuoteSlide
        quote="AI Heroes heeft ons goed geholpen!"
        author="Tevreden Klant"
        role="Bedrijf XYZ"
      />
    </PresentationContainer>
  );
}
```

### 3. Add Route to App.tsx

```tsx
// Add at top with other lazy imports:
const MyWorkshop = React.lazy(() => import('./presentations/examples/MyWorkshop').then(m => ({ default: m.default })));

// Add in Routes section:
<Route path="/internal/my-workshop" element={<MyWorkshop />} />
```

### 4. View Your Presentation

Visit: `http://localhost:3000/internal/my-workshop`

## Available Slide Types

1. **TitleSlide** - Opening/closing slides
2. **ContentSlide** - Bullet points (with progressive reveal!)
3. **TwoColumnSlide** - Side-by-side layouts
4. **ImageSlide** - Full-screen images with overlays
5. **QuoteSlide** - Large testimonials
6. **VideoSlide** - YouTube, Vimeo, or local videos
7. **SectionSlide** - Section dividers
8. **ChartSlide** - Data visualizations

See `presentations/README.md` for detailed documentation.

## Embed Rich Media

### Videos
```tsx
<VideoSlide
  title="Product Demo"
  src="https://youtube.com/watch?v=xyz"
  type="youtube"
/>
```

### Images with Text Overlay
```tsx
<ImageSlide
  src="/campaign-photos/groningen.webp"
  overlay={
    <h2 className="font-display text-5xl text-white">
      Groningen
    </h2>
  }
  overlayPosition="center"
/>
```

### Client Logos
```tsx
import { LogoGrid } from '../presentations';

<TwoColumnSlide
  title="Onze Klanten"
  left={
    <LogoGrid
      logos={[
        { src: '/logos/client1.svg', alt: 'Client 1' },
        { src: '/logos/client2.svg', alt: 'Client 2' },
      ]}
      columns={3}
      grayscale
    />
  }
  right={<p>Toelichting...</p>}
/>
```

## Tips for Great Workshops

1. **Keep slides minimal** - Your voice is the content, slides are just visual aids
2. **Use progressive reveal** - Build suspense, control pacing
3. **Practice with speaker notes** - Write detailed notes for yourself
4. **Test fullscreen** - Always present in fullscreen mode
5. **Use sections** - Break long presentations into clear parts
6. **Add interactivity** - Pause for questions, do live demos

## Branded Colors

Your presentations automatically use AI Heroes brand colors:
- Red accent: `accent="red"`
- Blue accent: `accent="blue"`
- Taupe accent: `accent="taupe"`
- Dark backgrounds: `background="bg-brand-dark"`
- Light backgrounds: `background="bg-brand-light"`

## Next Steps

1. ✅ View the demo presentation
2. ✅ Try keyboard shortcuts
3. ✅ Enable speaker notes and see how they work
4. ✅ Test fullscreen mode
5. 📄 Share your workshop PDF - I'll help you recreate it!

## Need Help?

Check the full documentation: `presentations/README.md`

Or just ask - I'm here to help you build amazing workshop presentations! 🎯

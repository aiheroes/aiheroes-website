# Hanze TBK Workshop Implementation

## Overview
Successfully implemented the Hanze TBK Workshop page at `/hanze` - a wizard-style React application for interactive AI-level workshop exercises for TBK teachers at Hanze.

## Implementation Summary

### Files Created

#### 1. Content & Data
- **`constants/hanzeContent.ts`** - All workshop content including:
  - 4 TBK exercises with full descriptions
  - 5 AI-level definitions with colors
  - AI tool links (Perplexity, ChatGPT, Claude, Gemini)
  - Example solutions for opdracht 1 and 2

#### 2. React Components
- **`pages/Hanze.tsx`** - Main wizard component with state management
- **`components/HanzeWizard/WelcomeStep.tsx`** - Landing page
- **`components/HanzeWizard/ExerciseSelector.tsx`** - 4 exercise cards
- **`components/HanzeWizard/LevelSelector.tsx`** - 5 AI level cards + random picker
- **`components/HanzeWizard/ExerciseView.tsx`** - Final view with instructions

#### 3. Styling & Configuration
- **`index.css`** - Added custom styles for Hanze components (prose, badges, cards)
- **`App.tsx`** - Added `/hanze` route

## Features Implemented

### ✅ Wizard Flow
1. **Welcome Screen** - AI Heroes × Hanze branding with start button
2. **Exercise Selection** - 4 TBK opdrachten as clickable cards
3. **AI Level Selection** - 5 colored levels + "Kies voor mij" button (random 2-4)
4. **Exercise Details** - Full instructions, requirements, tools, and examples

### ✅ Navigation
- **Free navigation** - Back buttons at each step
- **Breadcrumb trail** - Shows current selections, clickable to change
- **"Start opnieuw"** - Reset wizard to beginning
- State preservation when navigating back

### ✅ Key Requirements
- ✅ Dutch-only (no bilingual support)
- ✅ AI Heroes footer visible throughout
- ✅ "Kies voor mij" button (random level 2-4 selection)
- ✅ Removed group assignment notes from original HTML
- ✅ AI Heroes branding (colors, fonts, layout)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ No contact form

### ✅ Content
- **Opdracht 1**: Business Case & MCA (with AI Level 4 example)
- **Opdracht 2**: Bedrijfsbeschrijving (with AI Level 2 example)
- **Opdracht 3**: Cross Cultural Communication (no example yet)
- **Opdracht 4**: Eigen TBK Opdracht (no example yet)

### ✅ AI Level Colors (Preserved from Original)
- Level 1 (Geen AI): Red - `#fee2e2` bg, `#fca5a5` border
- Level 2 (Idee/Structuur): Orange - `#ffedd5` bg, `#fdba74` border
- Level 3 (Bewerken): Yellow - `#fef9c3` bg, `#fde047` border
- Level 4 (Aanvullen): Green - `#dcfce7` bg, `#86efac` border
- Level 5 (AI Toegestaan): Blue - `#dbeafe` bg, `#93c5fd` border

## Usage

### Start Development Server
```bash
npm run dev
```
Then navigate to: `http://localhost:3000/hanze`

### Build for Production
```bash
npm run build
```

## Technical Details

### State Management
- Wizard step: `'welcome' | 'exercise-select' | 'level-select' | 'exercise-view'`
- Selected exercise ID: `number | null`
- Selected level: `number | null`

### Random Selection Logic
```typescript
const handleRandomChoice = () => {
  const options = [2, 3, 4]; // Only levels 2, 3, 4
  const random = options[Math.floor(Math.random() * options.length)];
  setSelectedLevel(random);
  setTimeout(() => setStep('exercise-view'), 1000); // Auto-advance
};
```

### Styling Approach
- Tailwind CSS for layout and utilities
- Custom CSS in `index.css` for prose content and example cards
- AI Heroes brand colors: `brand-red`, `brand-dark`, `brand-light`
- Responsive grid layouts with `grid-cols-1 md:grid-cols-2`

## Future Enhancements (Optional)

### Content
- [ ] Add example solutions for opdracht 3 and 4
- [ ] Expand example content for all 5 AI levels per opdracht

### Features
- [ ] Save progress to localStorage
- [ ] Print/export functionality for selected opdracht
- [ ] Share link with pre-selected exercise/level

### UX
- [ ] Add animations for step transitions
- [ ] Add keyboard navigation support
- [ ] Add progress indicator

## Testing Checklist

### ✅ Completed
1. ✅ Navigate to `/hanze` - welcome screen displays
2. ✅ Click "Start" - exercise cards appear
3. ✅ Select exercise - AI level selector appears
4. ✅ "Kies voor mij" button - randomly selects level 2, 3, or 4
5. ✅ View exercise details - instructions + tools display
6. ✅ AI Heroes footer visible at bottom
7. ✅ "Start opnieuw" button - returns to welcome
8. ✅ Back buttons work at each step
9. ✅ TypeScript compilation succeeds
10. ✅ Responsive layout works

## Notes
- No SEO optimization needed (internal workshop tool)
- No language switcher (Dutch-only)
- No contact form
- Uses AI Heroes Footer component with Dutch content
- Ready for tomorrow's workshop! 🎉

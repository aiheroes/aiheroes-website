// Core components
export { default as PresentationContainer, usePresentation } from './components/PresentationContainer';
export { default as Slide } from './components/Slide';
export { default as Controls } from './components/Controls';
export { default as SpeakerNotes } from './components/SpeakerNotes';
export { default as LogoGrid } from './components/LogoGrid';

// Slide templates
export { default as TitleSlide } from './slides/TitleSlide';
export { default as ContentSlide } from './slides/ContentSlide';
export { default as TwoColumnSlide } from './slides/TwoColumnSlide';
export { default as ImageSlide } from './slides/ImageSlide';
export { default as QuoteSlide } from './slides/QuoteSlide';
export { default as VideoSlide } from './slides/VideoSlide';
export { default as SectionSlide } from './slides/SectionSlide';
export { default as ChartSlide } from './slides/ChartSlide';

// Types
export type { PresentationConfig, SlideProps, NavigationState, Language } from './types';

export type Language = 'nl' | 'en';

export interface SlideProps {
  /** Current language */
  lang?: Language;
  /** Additional CSS classes */
  className?: string;
  /** Background color or gradient */
  background?: string;
  /** Speaker notes (only visible in presenter mode) */
  notes?: string;
}

export interface PresentationConfig {
  /** Presentation title */
  title: string;
  /** Author/presenter name */
  author?: string;
  /** Date of presentation */
  date?: string;
  /** Language */
  lang: Language;
  /** Brand logo URL */
  logo?: string;
}

export interface NavigationState {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  showNotes: boolean;
  showControls: boolean;
}

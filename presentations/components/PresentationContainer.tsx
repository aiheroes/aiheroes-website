import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { NavigationState, PresentationConfig } from '../types';
import Controls from './Controls';
import SpeakerNotes from './SpeakerNotes';

interface PresentationContextValue extends NavigationState {
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  toggleFullscreen: () => void;
  toggleNotes: () => void;
  toggleControls: () => void;
  config: PresentationConfig;
}

const PresentationContext = createContext<PresentationContextValue | null>(null);

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within PresentationContainer');
  }
  return context;
};

interface Props {
  config: PresentationConfig;
  children: ReactNode[];
}

export default function PresentationContainer({ config, children }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = Array.isArray(children) ? children : [children];
  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleNotes = () => setShowNotes(!showNotes);
  const toggleControls = () => setShowControls(!showControls);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
        case 's':
        case 'S':
          e.preventDefault();
          toggleNotes();
          break;
        case 'c':
        case 'C':
          e.preventDefault();
          toggleControls();
          break;
        case 'Escape':
          if (showNotes) {
            e.preventDefault();
            setShowNotes(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, showNotes]);

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const contextValue: PresentationContextValue = {
    currentSlide,
    totalSlides,
    isFullscreen,
    showNotes,
    showControls,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    toggleNotes,
    toggleControls,
    config,
  };

  // Extract speaker notes from current slide
  const currentSlideElement = slides[currentSlide];
  const speakerNotes = currentSlideElement?.props?.notes || '';

  return (
    <PresentationContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className="relative w-screen h-screen overflow-hidden bg-brand-dark"
        style={{ cursor: showControls ? 'default' : 'none' }}
      >
        {/* Main slide area */}
        <div className={`w-full transition-all duration-300 ${showNotes ? 'h-2/3' : 'h-full'}`}>
          <div className="w-full h-full">
            {slides[currentSlide]}
          </div>
        </div>

        {/* Speaker notes panel */}
        {showNotes && <SpeakerNotes notes={speakerNotes} />}

        {/* Controls overlay */}
        {showControls && <Controls />}
      </div>
    </PresentationContext.Provider>
  );
}

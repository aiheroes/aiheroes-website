import { usePresentation } from './PresentationContainer';

export function Controls() {
  const {
    currentSlide,
    totalSlides,
    prevSlide,
    nextSlide,
    toggleFullscreen,
    toggleNotes,
    isFullscreen,
    showNotes,
    config,
  } = usePresentation();

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50">
      {/* Progress bar */}
      <div className="h-1 bg-white/10">
        <div
          className="h-full bg-brand-red transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Control bar */}
      <div className="bg-brand-dark/90 backdrop-blur-sm border-t border-white/10">
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Left: Logo and title */}
          <div className="flex items-center gap-4">
            {config.logo && (
              <img src={config.logo} alt="Logo" className="h-8 w-auto" />
            )}
            <div className="text-sm text-white/60 font-sans">
              {config.title}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="px-4 py-2 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Previous (←)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-sm text-white/80 font-sans min-w-[4rem] text-center">
              {currentSlide + 1} / {totalSlides}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="px-4 py-2 text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Next (→)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleNotes}
              className={`px-3 py-2 text-sm font-sans rounded transition-colors ${
                showNotes
                  ? 'bg-brand-red text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              title="Toggle speaker notes (N)"
            >
              Notes
            </button>

            <button
              onClick={toggleFullscreen}
              className="px-3 py-2 text-white/60 hover:text-white transition-colors"
              title="Fullscreen (F)"
            >
              {isFullscreen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

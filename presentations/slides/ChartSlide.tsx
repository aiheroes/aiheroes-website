import { ReactNode } from 'react';
import Slide from '../components/Slide';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  title: string;
  subtitle?: string;
  /** Chart component (use any charting library like recharts, chart.js, etc.) */
  chart: ReactNode;
  /** Optional caption below chart */
  caption?: string;
}

export default function ChartSlide({
  title,
  subtitle,
  chart,
  caption,
  background = 'bg-brand-light',
  notes,
}: Props) {
  return (
    <Slide background={background} padding="xl" notes={notes}>
      <div className="h-full flex flex-col">
        {/* Title */}
        <div className="mb-8">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-brand-dark leading-tight">
            {title}
          </h2>
          <div className="h-1.5 w-24 bg-brand-red mt-4" />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-sans text-xl md:text-2xl text-brand-dark/70 mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Chart container */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="w-full h-full max-w-5xl">
            {chart}
          </div>
        </div>

        {/* Caption */}
        {caption && (
          <p className="font-sans text-sm text-brand-dark/50 text-center mt-4">
            {caption}
          </p>
        )}
      </div>
    </Slide>
  );
}

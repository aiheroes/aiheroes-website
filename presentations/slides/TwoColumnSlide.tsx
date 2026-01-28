import { ReactNode } from 'react';
import Slide from '../components/Slide';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  title?: string;
  left: ReactNode;
  right: ReactNode;
  /** Column width ratio (default 50/50) */
  split?: '40/60' | '50/50' | '60/40';
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end';
  /** Gap between columns */
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

const splitClasses = {
  '40/60': 'grid-cols-[2fr_3fr]',
  '50/50': 'grid-cols-2',
  '60/40': 'grid-cols-[3fr_2fr]',
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
};

const gapClasses = {
  sm: 'gap-8',
  md: 'gap-12',
  lg: 'gap-16',
  xl: 'gap-24',
};

export default function TwoColumnSlide({
  title,
  left,
  right,
  split = '50/50',
  align = 'center',
  gap = 'xl',
  background = 'bg-brand-light',
  notes,
}: Props) {
  return (
    <Slide background={background} padding="xl" notes={notes}>
      <div className="h-full flex flex-col">
        {/* Title */}
        {title && (
          <div className="mb-12">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-brand-dark leading-tight">
              {title}
            </h2>
            <div className="h-1.5 w-24 bg-brand-red mt-4" />
          </div>
        )}

        {/* Two columns */}
        <div className={`flex-1 grid ${splitClasses[split]} ${gapClasses[gap]} ${alignClasses[align]}`}>
          <div className="flex flex-col justify-center">
            {left}
          </div>
          <div className="flex flex-col justify-center">
            {right}
          </div>
        </div>
      </div>
    </Slide>
  );
}

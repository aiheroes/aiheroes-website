import Slide from '../components/Slide';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  title: string;
  subtitle?: string;
  number?: string | number;
  accent?: 'red' | 'blue' | 'taupe';
}

const accentColors = {
  red: 'text-brand-red',
  blue: 'text-brand-blue',
  taupe: 'text-brand-taupe',
};

export default function SectionSlide({
  title,
  subtitle,
  number,
  accent = 'red',
  background = 'bg-brand-dark',
  notes,
}: Props) {
  return (
    <Slide background={background} center notes={notes}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Section number */}
        {number && (
          <div className={`font-display text-9xl font-bold ${accentColors[accent]} mb-8 leading-none opacity-50`}>
            {number}
          </div>
        )}

        {/* Title */}
        <h2 className="font-display text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          {title}
        </h2>

        {/* Divider */}
        <div className={`h-1.5 w-32 ${accentColors[accent].replace('text-', 'bg-')} mx-auto mb-8`} />

        {/* Subtitle */}
        {subtitle && (
          <p className="font-sans text-2xl md:text-3xl text-white/60 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </Slide>
  );
}

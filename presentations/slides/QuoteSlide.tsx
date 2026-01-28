import { Slide } from '../components/Slide';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  quote: string;
  author?: string;
  role?: string;
  image?: string;
  accent?: 'red' | 'blue' | 'taupe';
}

const accentColors = {
  red: 'text-brand-red',
  blue: 'text-brand-blue',
  taupe: 'text-brand-taupe',
};

export function QuoteSlide({
  quote,
  author,
  role,
  image,
  accent = 'red',
  background = 'bg-brand-dark',
  notes,
}: Props) {
  return (
    <Slide background={background} center notes={notes}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote mark */}
        <div className={`text-8xl font-display ${accentColors[accent]} mb-8 leading-none`}>
          "
        </div>

        {/* Quote text */}
        <blockquote className="font-display text-4xl md:text-5xl text-white leading-relaxed mb-12">
          {quote}
        </blockquote>

        {/* Attribution */}
        {(author || role || image) && (
          <div className="flex items-center justify-center gap-6 mt-16">
            {image && (
              <img
                src={image}
                alt={author || ''}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div className="text-left">
              {author && (
                <div className="font-sans text-xl text-white font-semibold">
                  {author}
                </div>
              )}
              {role && (
                <div className="font-sans text-lg text-white/60 mt-1">
                  {role}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Slide>
  );
}

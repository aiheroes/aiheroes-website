import { Slide } from '../components/Slide';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  logo?: string;
}

export function TitleSlide({
  title,
  subtitle,
  author,
  date,
  logo,
  background = 'bg-brand-dark',
  notes,
}: Props) {
  return (
    <Slide background={background} center notes={notes}>
      <div className="max-w-5xl mx-auto text-center">
        {logo && (
          <div className="mb-12">
            <img src={logo} alt="Logo" className="h-16 mx-auto" />
          </div>
        )}

        <h1 className="font-display text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="font-sans text-2xl md:text-3xl text-white/70 mb-12 leading-relaxed">
            {subtitle}
          </p>
        )}

        {(author || date) && (
          <div className="mt-16 font-sans text-lg text-white/50">
            {author && <div>{author}</div>}
            {date && <div className="mt-2">{date}</div>}
          </div>
        )}
      </div>
    </Slide>
  );
}

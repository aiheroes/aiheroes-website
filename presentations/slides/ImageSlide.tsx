import { ReactNode } from 'react';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  src: string;
  alt?: string;
  /** Overlay content */
  overlay?: ReactNode;
  /** Overlay position */
  overlayPosition?: 'top' | 'center' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Overlay background */
  overlayBg?: 'dark' | 'light' | 'none';
  /** Image object fit */
  objectFit?: 'cover' | 'contain';
}

const overlayPositionClasses = {
  top: 'items-start justify-center',
  center: 'items-center justify-center',
  bottom: 'items-end justify-center',
  'top-left': 'items-start justify-start',
  'top-right': 'items-start justify-end',
  'bottom-left': 'items-end justify-start',
  'bottom-right': 'items-end justify-end',
};

const overlayBgClasses = {
  dark: 'bg-brand-dark/80 backdrop-blur-sm',
  light: 'bg-white/90 backdrop-blur-sm',
  none: '',
};

export default function ImageSlide({
  src,
  alt = '',
  overlay,
  overlayPosition = 'center',
  overlayBg = 'dark',
  objectFit = 'cover',
  notes,
}: Props) {
  return (
    <div className="relative w-full h-full bg-brand-dark">
      {/* Background image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-${objectFit}`}
      />

      {/* Overlay content */}
      {overlay && (
        <div className={`absolute inset-0 flex p-16 ${overlayPositionClasses[overlayPosition]}`}>
          <div className={`${overlayBgClasses[overlayBg]} p-12 rounded-lg max-w-3xl`}>
            {overlay}
          </div>
        </div>
      )}
    </div>
  );
}

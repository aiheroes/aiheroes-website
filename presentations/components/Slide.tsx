import { ReactNode, MouseEventHandler } from 'react';
import { SlideProps } from '../types';

interface Props extends SlideProps {
  children: ReactNode;
  /** Center content vertically and horizontally */
  center?: boolean;
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Click handler for interactive slides */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const paddingClasses = {
  none: '',
  sm: 'p-8',
  md: 'p-12',
  lg: 'p-16',
  xl: 'p-24',
};

export default function Slide({
  children,
  className = '',
  background = 'bg-brand-light',
  center = false,
  padding = 'xl',
  notes,
  onClick,
}: Props) {
  return (
    <div
      className={`w-full h-full ${background} ${paddingClasses[padding]} ${
        center ? 'flex items-center justify-center' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

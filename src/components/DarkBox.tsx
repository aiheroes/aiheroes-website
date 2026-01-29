import React from 'react';

interface DarkBoxProps {
  children: React.ReactNode;
  accentColor?: 'red' | 'blue';
  className?: string;
}

export const DarkBox: React.FC<DarkBoxProps> = ({
  children,
  accentColor = 'red',
  className = ''
}) => {
  const borderColor = accentColor === 'red' ? 'border-brand-red' : 'border-brand-blue';

  return (
    <div className={`dark-box not-prose bg-brand-dark text-white/85 p-6 md:p-8 rounded-lg border-l-4 ${borderColor} ${className}`}>
      <div className="dark-box-content">
        {children}
      </div>
    </div>
  );
};

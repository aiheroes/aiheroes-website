import React from 'react';

interface DarkBoxProps {
  children: React.ReactNode;
  accentColor?: 'red' | 'blue';
  className?: string;
}

// A solid dark block (no side stripe; see docs/plan-zijlijnen-2026-09-29.md).
// `accentColor` is kept for existing callers but no longer draws anything.
export const DarkBox: React.FC<DarkBoxProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`dark-box not-prose bg-brand-dark text-white/85 p-6 md:p-8 ${className}`}>
      <div className="dark-box-content">
        {children}
      </div>
    </div>
  );
};

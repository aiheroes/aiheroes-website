import React from 'react';

interface ChoiceChipsProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  /** Single choice (radio-like) or multiple. */
  multiple?: boolean;
  accent?: 'red' | 'blue';
  compact?: boolean;
}

// Pill-shaped choice buttons used by both contact forms for entry, budget and
// ownership. Choices, not free text: the visitor picks in one tap and the
// answer lands in the mail as a fixed value the team can filter on.
export const ChoiceChips: React.FC<ChoiceChipsProps> = ({
  label,
  options,
  value,
  onChange,
  multiple = false,
  accent = 'blue',
  compact = false,
}) => {
  const selectedClasses = accent === 'red' ? 'bg-brand-red border-brand-red' : 'bg-brand-blue border-brand-blue';
  const hoverClasses = accent === 'red'
    ? 'hover:border-brand-red hover:text-brand-red'
    : 'hover:border-brand-blue hover:text-brand-blue';

  const toggle = (option: string) => {
    if (multiple) {
      onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option]);
    } else {
      onChange(value.includes(option) ? [] : [option]);
    }
  };

  return (
    <div role="group" aria-label={label}>
      <p className={`block font-bold uppercase tracking-wider text-stone-500 ${compact ? 'text-[8px] md:text-xs mb-2 md:mb-3' : 'text-xs mb-3'}`}>
        {label}
      </p>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {options.map((option) => {
          const isSelected = value.includes(option);
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggle(option)}
              className={`${compact ? 'px-3 py-1.5 md:px-5 md:py-2.5 text-xs md:text-sm' : 'px-4 py-2 text-sm'} font-medium rounded-full border-2 transition-all duration-200 ${
                isSelected ? `${selectedClasses} text-white` : `bg-transparent border-stone-300 text-stone-600 ${hoverClasses}`
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

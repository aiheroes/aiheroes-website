import React, { useId, useState } from 'react';
import { Logo, LogoVariant, LogoColorVariant } from './Logo';

type BgKey = 'light' | 'dark' | 'red' | 'blue';

interface BgConfig {
  bgClass: string;
  swatchClass: string;
  logoColor: LogoColorVariant;
}

const BG_CONFIG: Record<BgKey, BgConfig> = {
  light: { bgClass: 'bg-brand-light', swatchClass: 'bg-brand-light border border-stone-300', logoColor: 'fullcolor' },
  dark:  { bgClass: 'bg-brand-dark',  swatchClass: 'bg-brand-dark',                          logoColor: 'white' },
  red:   { bgClass: 'bg-brand-red',   swatchClass: 'bg-brand-red',                           logoColor: 'white' },
  blue:  { bgClass: 'bg-brand-blue',  swatchClass: 'bg-brand-blue',                          logoColor: 'white' },
};

interface LogoShowcaseProps {
  variant: LogoVariant;
  labels: {
    groupLabel: string;
    light: string;
    dark: string;
    red: string;
    blue: string;
  };
}

export const LogoShowcase: React.FC<LogoShowcaseProps> = ({ variant, labels }) => {
  const groupName = useId();
  const [selected, setSelected] = useState<BgKey>('light');
  const config = BG_CONFIG[selected];

  const options: { key: BgKey; label: string }[] = [
    { key: 'light', label: labels.light },
    { key: 'dark',  label: labels.dark },
    { key: 'red',   label: labels.red },
    { key: 'blue',  label: labels.blue },
  ];

  const logoSizeClass = variant === 'wordmark'
    ? 'h-16 md:h-20 w-auto'
    : 'h-24 md:h-32 w-auto';

  return (
    <div className="bg-white border border-stone-200">
      <div
        className={`flex items-center justify-center px-6 py-12 md:py-20 motion-safe:transition-colors motion-safe:duration-300 ${config.bgClass}`}
      >
        <Logo className={logoSizeClass} variant={variant} colorVariant={config.logoColor} />
      </div>
      <fieldset className="border-t border-stone-200 px-4 py-5 md:px-6 md:py-6">
        <legend className="sr-only">{labels.groupLabel}</legend>
        <div className="flex items-start justify-center gap-6 md:gap-10">
          {options.map((opt) => {
            const cfg = BG_CONFIG[opt.key];
            const isChecked = selected === opt.key;
            return (
              <label
                key={opt.key}
                className="flex flex-col items-center gap-2 cursor-pointer select-none"
              >
                <input
                  type="radio"
                  name={groupName}
                  value={opt.key}
                  checked={isChecked}
                  onChange={() => setSelected(opt.key)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`w-11 h-11 md:w-12 md:h-12 rounded-full ring-offset-2 ring-offset-white motion-safe:transition-shadow peer-checked:ring-2 peer-checked:ring-brand-dark peer-focus-visible:ring-2 peer-focus-visible:ring-brand-dark ${cfg.swatchClass}`}
                />
                <span
                  className={`text-xs md:text-sm motion-safe:transition-colors ${
                    isChecked ? 'text-brand-dark font-medium' : 'text-stone-500'
                  }`}
                >
                  {opt.label}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

interface Logo {
  src: string;
  alt: string;
}

interface Props {
  logos: Logo[];
  /** Number of columns */
  columns?: 3 | 4 | 5 | 6;
  /** Logo size */
  size?: 'sm' | 'md' | 'lg';
  /** Apply grayscale filter (common for logo grids) */
  grayscale?: boolean;
}

const columnsClasses = {
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};

const sizeClasses = {
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-24',
};

export function LogoGrid({
  logos,
  columns = 4,
  size = 'md',
  grayscale = true,
}: Props) {
  return (
    <div className={`grid ${columnsClasses[columns]} gap-12 items-center`}>
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <img
            src={logo.src}
            alt={logo.alt}
            className={`${sizeClasses[size]} w-auto object-contain transition-all duration-300 ${
              grayscale ? 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100' : ''
            }`}
          />
        </div>
      ))}
    </div>
  );
}

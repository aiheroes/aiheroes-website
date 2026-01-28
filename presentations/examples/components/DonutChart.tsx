import React from 'react';

interface DonutChartProps {
  percentage: number;
  label: string;
  color: 'green' | 'red';
  size?: number;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  label,
  color,
  size = 200,
}) => {
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    green: '#16A34A',
    red: '#DC2626',
  };

  const bgColorMap = {
    green: '#E7E5E4',
    red: '#E7E5E4',
  };

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColorMap[color]}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colorMap[color]}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        {/* Center percentage text */}
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-bold transform rotate-90"
          style={{ fontSize: '48px', transformOrigin: 'center' }}
          fill={colorMap[color]}
        >
          {percentage}%
        </text>
      </svg>
      <p className="mt-4 text-xl font-semibold text-stone-700">{label}</p>
    </div>
  );
};

interface DonutComparisonProps {
  title?: string;
  subtitle?: string;
}

export const DonutComparison: React.FC<DonutComparisonProps> = ({
  title = 'Perplexity vs. ChatGPT Citation Nauwkeurigheid',
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-12">
      <h2 className="text-4xl font-serif text-brand-dark mb-4 text-center">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-stone-600 mb-12 text-center max-w-3xl">
          {subtitle}
        </p>
      )}

      <div className="flex items-center justify-center gap-24 mb-12">
        <DonutChart percentage={93} label="Perplexity" color="green" size={280} />
        <DonutChart percentage={76} label="ChatGPT" color="red" size={280} />
      </div>

      <div className="max-w-4xl text-center">
        <p className="text-lg text-stone-600 leading-relaxed">
          Perplexity heeft een significant hogere citation accuracy dan ChatGPT en raadpleegt een
          diverser schala aan bronnen, wat het een betrouwbaarder hulpmiddel maakt voor onderwijs
          research.
        </p>
      </div>
    </div>
  );
};

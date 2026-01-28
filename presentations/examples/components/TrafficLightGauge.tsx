import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Level {
  number: number;
  color: string;
  label: string;
  description: string;
  angle: number; // Position on the gauge
}

const levels: Level[] = [
  {
    number: 1,
    color: '#DC2626', // red-600
    label: 'Geen AI',
    description: 'Deze opdracht moet volledig zonder AI gemaakt worden.',
    angle: -90,
  },
  {
    number: 2,
    color: '#EA580C', // orange-600
    label: 'Idee/structuur',
    description: 'AI mag gebruikt worden om ideeën op te doen of om structuur te vinden. De ingeleverde opdracht mag géén AI bevatten.',
    angle: -45,
  },
  {
    number: 3,
    color: '#EAB308', // yellow-500
    label: 'Bewerken',
    description: 'AI mag gebruikt worden om de opdracht te verbeteren en te bewerken. AI mag géén nieuwe inhoud creëren. Eigen, originele werk moet worden toegevoegd.',
    angle: 0,
  },
  {
    number: 4,
    color: '#65A30D', // lime-600
    label: 'Aanvullen',
    description: 'AI mag gebruikt worden om delen van de opdracht te maken. Waar dit gebeurt, moet duidelijk worden aangegeven.',
    angle: 45,
  },
  {
    number: 5,
    color: '#16A34A', // green-600
    label: 'AI toegestaan',
    description: 'AI mag in deze opdracht overal worden toegepast.',
    angle: 90,
  },
];

interface TrafficLightGaugeProps {
  onLevelChange?: (level: number) => void;
}

export const TrafficLightGauge: React.FC<TrafficLightGaugeProps> = ({ onLevelChange }) => {
  const [activeLevel, setActiveLevel] = useState(1);

  const handlePrevious = () => {
    const newLevel = activeLevel > 1 ? activeLevel - 1 : 5;
    setActiveLevel(newLevel);
    onLevelChange?.(newLevel);
  };

  const handleNext = () => {
    const newLevel = activeLevel < 5 ? activeLevel + 1 : 1;
    setActiveLevel(newLevel);
    onLevelChange?.(newLevel);
  };

  const currentLevel = levels[activeLevel - 1];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-12">
      {/* Gauge Container */}
      <div className="relative w-full max-w-4xl mb-12">
        {/* Semi-circular gauge background */}
        <svg viewBox="0 0 400 220" className="w-full">
          {/* Background segments */}
          {levels.map((level, idx) => {
            const startAngle = -90 + (idx * 45);
            const endAngle = startAngle + 45;
            const largeArc = 0;

            const radius = 140;
            const centerX = 200;
            const centerY = 200;

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = centerX + radius * Math.cos(startRad);
            const y1 = centerY + radius * Math.sin(startRad);
            const x2 = centerX + radius * Math.cos(endRad);
            const y2 = centerY + radius * Math.sin(endRad);

            const innerRadius = 100;
            const x3 = centerX + innerRadius * Math.cos(endRad);
            const y3 = centerY + innerRadius * Math.sin(endRad);
            const x4 = centerX + innerRadius * Math.cos(startRad);
            const y4 = centerY + innerRadius * Math.sin(startRad);

            const isActive = level.number === activeLevel;
            const opacity = isActive ? 1 : 0.3;

            return (
              <path
                key={level.number}
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`}
                fill={level.color}
                opacity={opacity}
                className="transition-opacity duration-500"
              />
            );
          })}

          {/* Center white circle */}
          <circle cx="200" cy="200" r="90" fill="white" />

          {/* Needle */}
          <g className="transition-transform duration-700 ease-out" style={{ transformOrigin: '200px 200px', transform: `rotate(${currentLevel.angle}deg)` }}>
            <path
              d="M 200 200 L 195 205 L 200 110 L 205 205 Z"
              fill="#2563EB"
            />
            <circle cx="200" cy="200" r="8" fill="#2563EB" />
          </g>

          {/* Level numbers on the arc */}
          {levels.map((level) => {
            const angle = level.angle;
            const rad = (angle * Math.PI) / 180;
            const radius = 120;
            const x = 200 + radius * Math.cos(rad);
            const y = 200 + radius * Math.sin(rad);

            return (
              <text
                key={level.number}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold text-xl"
                fill={level.number === activeLevel ? level.color : '#999'}
              >
                {level.number}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Current Level Display */}
      <div className="text-center max-w-3xl mb-8">
        <div
          className="inline-block px-6 py-2 rounded-full mb-4 font-bold text-white text-lg transition-colors duration-500"
          style={{ backgroundColor: currentLevel.color }}
        >
          Niveau {currentLevel.number}: {currentLevel.label}
        </div>
        <p className="text-2xl text-stone-700 leading-relaxed">
          {currentLevel.description}
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={handlePrevious}
          className="flex items-center gap-2 px-6 py-3 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors text-stone-700 font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          Vorige
        </button>

        <div className="text-stone-500 font-mono">
          {activeLevel} / 5
        </div>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors text-stone-700 font-medium"
        >
          Volgende
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Keyboard hint */}
      <p className="mt-6 text-sm text-stone-400">
        Gebruik ← → pijltjestoetsen om te navigeren
      </p>
    </div>
  );
};

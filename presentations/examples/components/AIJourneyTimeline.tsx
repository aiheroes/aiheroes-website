import React from 'react';
import { TrendingDown, TrendingUp, Target } from 'lucide-react';

interface Phase {
  title: string;
  subtitle: string;
  points: string[];
  icon: React.ReactNode;
  color: string;
}

const phases: Phase[] = [
  {
    title: 'Phase 1: Pre-AI',
    subtitle: 'Onbekend met AI',
    points: [
      'Langzame vooruitgang',
      'Gebrek aan kennis is een hinder',
      'Beperkt door tijd en expertise',
    ],
    icon: <TrendingDown className="w-12 h-12" />,
    color: '#DC2626',
  },
  {
    title: 'Phase 2: AI-afhankelijk',
    subtitle: 'AI ontdekken',
    points: [
      'Je krijgt in één keer meer gedaan',
      'Je produceert veel meer dan voorheen',
      'Maar; als de AI ontoereikend is, ben ik dat ook',
    ],
    icon: <TrendingUp className="w-12 h-12" />,
    color: '#EAB308',
  },
  {
    title: 'Phase 3: AI-geïmplementeerd',
    subtitle: 'AI geïntegreerd in je workflow',
    points: [
      'Bekend met mogelijkheden van AI',
      'Erkent de limieten van AI',
      'Je resultaten consistent verbeteren',
      'Gebruikt AI waar het logisch is',
      'Maar; niet afhankelijk van AI',
    ],
    icon: <Target className="w-12 h-12" />,
    color: '#16A34A',
  },
];

export const AIJourneyTimeline: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-12">
      <h2 className="text-5xl font-serif text-brand-dark mb-4 text-center">
        The AI Journey
      </h2>
      <p className="text-xl text-stone-600 mb-16 text-center">
        Van begrip naar implementatie
      </p>

      <div className="grid grid-cols-3 gap-8 w-full max-w-7xl">
        {phases.map((phase, idx) => (
          <div
            key={idx}
            className="bg-white border-4 rounded-lg p-8 flex flex-col"
            style={{ borderColor: phase.color }}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: phase.color, color: 'white' }}
            >
              {phase.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif mb-2" style={{ color: phase.color }}>
              {phase.title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-stone-500 mb-6 italic">{phase.subtitle}</p>

            {/* Points */}
            <ul className="space-y-3 flex-1">
              {phase.points.map((point, pointIdx) => (
                <li key={pointIdx} className="flex items-start gap-2">
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: phase.color }}
                  />
                  <span className="text-stone-700 text-base leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

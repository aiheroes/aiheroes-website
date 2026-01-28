import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Stage {
  title: string;
  subtitle: string;
  color: string;
  textColor: string;
}

const stages: Stage[] = [
  {
    title: 'Misvatting over AI',
    subtitle: 'Studenten denken dat AI alles kan',
    color: '#DC2626',
    textColor: '#FFFFFF',
  },
  {
    title: 'AI is een statistisch trucje',
    subtitle: 'Leg uit dat AI menselijke intelligentie niet kan vervangen',
    color: '#A8A29E',
    textColor: '#FFFFFF',
  },
  {
    title: 'AI is geen vervanging',
    subtitle: 'AI: assistentie, geen vervanging',
    color: '#78716C',
    textColor: '#FFFFFF',
  },
  {
    title: 'Begrip van AI',
    subtitle: 'Studenten begrijpen de rol van AI',
    color: '#16A34A',
    textColor: '#FFFFFF',
  },
];

export const HexagonFlow: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-12">
      <h2 className="text-4xl font-serif text-brand-dark mb-4 text-center">
        Van Misvatting naar Begrip
      </h2>
      <p className="text-xl text-stone-600 mb-16 text-center max-w-3xl">
        Benadruk de beperkingen → Opheldering over AI bij studenten
      </p>

      <div className="flex items-center justify-center gap-4 w-full max-w-6xl">
        {stages.map((stage, idx) => (
          <React.Fragment key={idx}>
            {/* Hexagon Stage */}
            <div className="flex-1 flex flex-col items-center">
              <div
                className="relative w-full aspect-square max-w-[200px] flex items-center justify-center"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                  backgroundColor: stage.color,
                }}
              >
                <div className="text-center px-6">
                  <p
                    className="font-bold text-base mb-2"
                    style={{ color: stage.textColor }}
                  >
                    {stage.title}
                  </p>
                </div>
              </div>
              <p className="text-sm text-stone-600 text-center mt-4 max-w-[180px] leading-tight">
                {stage.subtitle}
              </p>
            </div>

            {/* Arrow between stages */}
            {idx < stages.length - 1 && (
              <ArrowRight className="w-8 h-8 text-stone-400 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

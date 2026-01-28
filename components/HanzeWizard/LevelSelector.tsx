import React from 'react';
import { AILevel } from '../../constants/hanzeContent';

interface LevelSelectorProps {
  levels: AILevel[];
  selectedLevel: number | null;
  onSelectLevel: (level: number) => void;
  onRandomChoice: () => void;
  onBack: () => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({
  levels,
  selectedLevel,
  onSelectLevel,
  onRandomChoice,
  onBack
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-stone-600 hover:text-brand-dark transition-colors mb-8 font-medium"
      >
        <span>←</span>
        Terug naar opdrachten
      </button>

      <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4 text-center">
        Kies je AI-Level
      </h2>
      <p className="text-lg text-stone-600 mb-8 text-center max-w-2xl mx-auto">
        Selecteer het AI-niveau dat je wilt toepassen op deze opdracht.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {levels.map((level) => {
          const isSelected = selectedLevel === level.level;
          const isOtherSelected = selectedLevel !== null && !isSelected;

          return (
            <button
              key={level.level}
              onClick={() => onSelectLevel(level.level)}
              className={`
                p-6 rounded-xl border-2 text-left transition-all
                ${isSelected ? 'ring-4 ring-blue-500 shadow-lg scale-105' : ''}
                ${isOtherSelected ? 'opacity-40 scale-95' : ''}
                ${!selectedLevel ? 'hover:scale-105 hover:shadow-md' : ''}
              `}
              style={{
                backgroundColor: level.bgColor,
                borderColor: level.borderColor
              }}
            >
              <h3 className="font-bold text-lg text-brand-dark mb-2">
                {level.level}. {level.title}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                {level.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <button
          onClick={onRandomChoice}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-stone-300 text-stone-700 font-semibold rounded-lg hover:bg-stone-50 hover:border-stone-400 transition-all"
        >
          <span className="text-xl">🎲</span>
          Kies voor mij (niveau 2-4)
        </button>
        <p className="text-sm text-stone-500 mt-3">
          Laat het systeem willekeurig een niveau kiezen tussen 2, 3 en 4
        </p>
      </div>
    </div>
  );
};

import React from 'react';
import { Exercise } from '../../constants/hanzeContent';

interface ExerciseSelectorProps {
  exercises: Exercise[];
  onSelectExercise: (exerciseId: number) => void;
  onBack: () => void;
}

export const ExerciseSelector: React.FC<ExerciseSelectorProps> = ({
  exercises,
  onSelectExercise,
  onBack
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-stone-600 hover:text-brand-dark transition-colors mb-8 font-medium"
      >
        <span>←</span>
        Terug naar welkom
      </button>

      <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4 text-center">
        Kies je Opdracht
      </h2>
      <p className="text-lg text-stone-600 mb-12 text-center max-w-2xl mx-auto">
        Selecteer een van de vier TBK-opdrachten om mee aan de slag te gaan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exercises.map((exercise) => (
          <button
            key={exercise.id}
            onClick={() => onSelectExercise(exercise.id)}
            className="bg-white border border-stone-200 rounded-xl p-6 text-left hover:border-brand-red hover:shadow-lg transition-all group"
          >
            <div className="flex items-start gap-4">
              <span className="inline-block bg-brand-red/10 text-brand-red font-bold text-sm px-3 py-1 rounded-full flex-shrink-0">
                OPDRACHT {exercise.id}
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-dark mt-4 mb-3 group-hover:text-brand-red transition-colors">
              {exercise.shortTitle}
            </h3>
            <p className="text-stone-600 leading-relaxed">
              {exercise.description}
            </p>
            <div className="flex items-center gap-2 mt-6 text-brand-red font-semibold">
              <span>Selecteer opdracht</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

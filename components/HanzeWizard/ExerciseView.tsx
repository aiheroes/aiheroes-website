import React, { useState } from 'react';
import { Exercise, AILevel, Tool } from '../../constants/hanzeContent';

interface ExerciseViewProps {
  exercise: Exercise;
  level: AILevel;
  tools: Tool[];
  onChangeExercise: () => void;
  onChangeLevel: () => void;
  onRestart: () => void;
}

export const ExerciseView: React.FC<ExerciseViewProps> = ({
  exercise,
  level,
  tools,
  onChangeExercise,
  onChangeLevel,
  onRestart
}) => {
  const [showExample, setShowExample] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb Navigation */}
      <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">
        <button
          onClick={onChangeExercise}
          className="text-brand-red hover:underline font-medium"
        >
          Opdracht {exercise.id}: {exercise.shortTitle}
        </button>
        <span className="text-stone-400">›</span>
        <button
          onClick={onChangeLevel}
          className="text-brand-red hover:underline font-medium"
        >
          AI Level {level.level}
        </button>
        <span className="text-stone-400">›</span>
        <span className="text-stone-600">Details</span>
      </div>

      {/* Header */}
      <div className="bg-white border border-stone-200 rounded-xl p-8 mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="inline-block bg-brand-red/10 text-brand-red font-bold text-sm px-3 py-1 rounded-full mb-3">
              OPDRACHT {exercise.id}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-2">
              {exercise.title}
            </h1>
          </div>
        </div>

        <div
          className="p-4 rounded-lg mb-4"
          style={{
            backgroundColor: level.bgColor,
            borderLeft: `4px solid ${level.borderColor}`
          }}
        >
          <div className="font-bold text-brand-dark mb-1">
            Gekozen AI-Level: {level.level} - {level.title}
          </div>
          <div className="text-stone-700 text-sm">
            {level.description}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-8">
        <div
          dangerouslySetInnerHTML={{ __html: exercise.fullInstructions }}
          className="prose prose-stone max-w-none"
        />
      </div>

      {/* AI Tools Section */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 mb-8">
        <h3 className="font-serif text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
          <span>🛠️</span>
          AI Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-stone-100 text-stone-700 font-semibold text-center rounded-lg hover:bg-stone-200 transition-colors text-sm"
            >
              {tool.name}
            </a>
          ))}
        </div>
      </div>

      {/* Assignment Details */}
      <div className="bg-white border border-stone-200 rounded-xl p-8 mb-8">
        <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6 pb-4 border-b border-stone-200">
          📊 De Originele Opdracht
        </h2>

        <p className="text-stone-600 mb-6 leading-relaxed">
          {exercise.description}
        </p>

        {exercise.requirements.length > 0 && (
          <>
            <h3 className="font-semibold text-lg text-stone-800 mb-3">
              Vereisten:
            </h3>
            <ul className="space-y-2 mb-6">
              {exercise.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-stone-600">
                  <span className="text-brand-red mt-1">•</span>
                  <span dangerouslySetInnerHTML={{ __html: req }} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Example Solution */}
      {exercise.hasExample && exercise.exampleContent && (
        <>
          <button
            onClick={() => setShowExample(!showExample)}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border border-stone-300 text-stone-700 font-semibold rounded-lg hover:bg-stone-50 transition-all mb-6"
          >
            <span>📖</span>
            <span>{showExample ? 'Verberg voorbeeld' : 'Toon voorbeeld (AI Level 4)'}</span>
            <span className={`transform transition-transform ${showExample ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {showExample && (
            <div className="bg-stone-50 border-2 border-dashed border-stone-300 rounded-xl p-8 mb-8 animate-fadeIn">
              <div
                dangerouslySetInnerHTML={{ __html: exercise.exampleContent }}
                className="prose prose-stone max-w-none"
              />
            </div>
          )}
        </>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8 border-t border-stone-200">
        <button
          onClick={onChangeLevel}
          className="px-6 py-3 bg-white border border-stone-300 text-stone-700 font-semibold rounded-lg hover:bg-stone-50 transition-colors"
        >
          Wijzig AI-Level
        </button>
        <button
          onClick={onChangeExercise}
          className="px-6 py-3 bg-white border border-stone-300 text-stone-700 font-semibold rounded-lg hover:bg-stone-50 transition-colors"
        >
          Kies andere opdracht
        </button>
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
        >
          Start opnieuw
        </button>
      </div>
    </div>
  );
};

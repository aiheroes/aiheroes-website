import React from 'react';

interface WelcomeStepProps {
  onStart: () => void;
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ onStart }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6">
          AI Heroes × Hanze TBK Workshop
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 mb-8 leading-relaxed">
          Interactieve workshop over AI-gebruik in TBK-opdrachten
        </p>
        <p className="text-lg text-stone-500 mb-12 max-w-2xl mx-auto">
          Ontdek hoe je AI-niveaus kunt toepassen op verschillende TBK-opdrachten.
          Kies een opdracht, selecteer een AI-level, en krijg direct inzicht in hoe je de opdracht AI-proof maakt.
        </p>
        <button
          onClick={onStart}
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-600 transition-colors text-lg"
        >
          Start Workshop
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

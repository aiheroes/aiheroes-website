import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { WelcomeStep } from '../components/HanzeWizard/WelcomeStep';
import { ExerciseSelector } from '../components/HanzeWizard/ExerciseSelector';
import { LevelSelector } from '../components/HanzeWizard/LevelSelector';
import { ExerciseView } from '../components/HanzeWizard/ExerciseView';
import { HANZE_CONTENT } from '../constants/hanzeContent';
import { CONTENT } from '../constants';

type WizardStep = 'welcome' | 'exercise-select' | 'level-select' | 'exercise-view';

export const Hanze: React.FC = () => {
  const [step, setStep] = useState<WizardStep>('welcome');
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const handleStart = () => {
    setStep('exercise-select');
  };

  const handleSelectExercise = (exerciseId: number) => {
    setSelectedExercise(exerciseId);
    setSelectedLevel(null); // Reset level when changing exercise
    setStep('level-select');
  };

  const handleSelectLevel = (level: number) => {
    setSelectedLevel(level);
    // Auto-advance to exercise view after a brief moment
    setTimeout(() => {
      setStep('exercise-view');
    }, 500);
  };

  const handleRandomChoice = () => {
    const options = [2, 3, 4];
    const random = options[Math.floor(Math.random() * options.length)];
    setSelectedLevel(random);
    // Auto-advance to exercise view after showing selection
    setTimeout(() => {
      setStep('exercise-view');
    }, 1000);
  };

  const handleChangeExercise = () => {
    setStep('exercise-select');
    setSelectedLevel(null);
  };

  const handleChangeLevel = () => {
    setStep('level-select');
  };

  const handleRestart = () => {
    setStep('welcome');
    setSelectedExercise(null);
    setSelectedLevel(null);
  };

  const handleBackToWelcome = () => {
    setStep('welcome');
    setSelectedExercise(null);
    setSelectedLevel(null);
  };

  const handleBackToExercises = () => {
    setStep('exercise-select');
    setSelectedLevel(null);
  };

  // Get current exercise and level data
  const currentExercise = selectedExercise
    ? HANZE_CONTENT.exercises.find(ex => ex.id === selectedExercise)
    : null;

  const currentLevel = selectedLevel
    ? HANZE_CONTENT.aiLevels.find(lvl => lvl.level === selectedLevel)
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      {/* Main Content */}
      <main className="flex-grow">
        {step === 'welcome' && (
          <WelcomeStep onStart={handleStart} />
        )}

        {step === 'exercise-select' && (
          <ExerciseSelector
            exercises={HANZE_CONTENT.exercises}
            onSelectExercise={handleSelectExercise}
            onBack={handleBackToWelcome}
          />
        )}

        {step === 'level-select' && (
          <LevelSelector
            levels={HANZE_CONTENT.aiLevels}
            selectedLevel={selectedLevel}
            onSelectLevel={handleSelectLevel}
            onRandomChoice={handleRandomChoice}
            onBack={handleBackToExercises}
          />
        )}

        {step === 'exercise-view' && currentExercise && currentLevel && (
          <ExerciseView
            exercise={currentExercise}
            level={currentLevel}
            tools={HANZE_CONTENT.tools}
            onChangeExercise={handleChangeExercise}
            onChangeLevel={handleChangeLevel}
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* AI Heroes Footer */}
      <Footer
        content={CONTENT.nl.footer}
        nav={CONTENT.nl.nav}
        lang="nl"
      />
    </div>
  );
};

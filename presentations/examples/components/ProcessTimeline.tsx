import React from 'react';
import { Lightbulb, BookOpen, Code, FileText, Bot } from 'lucide-react';

interface ProcessStage {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const stages: ProcessStage[] = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    label: 'Brainstorming',
    color: '#EAB308',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    label: 'Study',
    color: '#2563EB',
  },
  {
    icon: <Code className="w-8 h-8" />,
    label: 'Code',
    color: '#16A34A',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    label: 'Document',
    color: '#A47E68',
  },
  {
    icon: <Bot className="w-8 h-8" />,
    label: 'Output',
    color: '#D9534F',
  },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-12">
      <h2 className="text-4xl font-serif text-brand-dark mb-16 text-center">
        Het Nieuwe Nakijken
      </h2>

      <div className="w-full max-w-6xl mb-16">
        {/* S-shaped timeline */}
        <div className="relative">
          {/* Connecting line */}
          <svg
            className="absolute top-12 left-0 w-full h-24"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 50 50 Q 250 10, 450 50 T 950 50"
              fill="none"
              stroke="#E7E5E4"
              strokeWidth="3"
            />
          </svg>

          {/* Stages */}
          <div className="relative flex justify-between items-center">
            {stages.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center z-10">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center bg-white border-4 shadow-lg"
                  style={{ borderColor: stage.color, color: stage.color }}
                >
                  {stage.icon}
                </div>
                <p className="mt-4 text-sm font-semibold text-stone-700">
                  {stage.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Split sections */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
        {/* 50% Drafts/Logs */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-500 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              50%
            </div>
            <h3 className="text-2xl font-serif text-blue-900">
              Drafts/Logs/Reflectie
            </h3>
          </div>
          <ul className="space-y-2 text-stone-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Studenten gebruiken AI voor conceptontwikkeling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>Zichtbaar leerproces</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>AI-gebruik wordt transparant gemaakt</span>
            </li>
          </ul>
        </div>

        {/* 50% Eindproduct */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-500 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
              50%
            </div>
            <h3 className="text-2xl font-serif text-green-900">
              Eindproduct
            </h3>
          </div>
          <ul className="space-y-2 text-stone-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>Studenten leveren eindproducten met AI-ondersteuning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>Duidelijke richtlijnen voorkomen fraude</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>AI verbetert feedbackproces</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

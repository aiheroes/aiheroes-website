import React from 'react';

interface Cause {
  category: string;
  issues: string[];
  position: 'top' | 'bottom';
}

const causes: Cause[] = [
  {
    category: 'Feitenverificatie',
    issues: [
      'Misinterpretatie van Gegevens',
      'Gebrek aan Bronnen',
    ],
    position: 'top',
  },
  {
    category: 'Nuance en Context',
    issues: [
      'Gebrek aan Emotioneel Begrip',
      'Toon',
      'Gebrek aan Cultureel Begrip',
    ],
    position: 'bottom',
  },
  {
    category: 'Gebrek aan Creativiteit',
    issues: [
      'Herhaling van Bestaande Ideeën',
      'Conceptuele Innovatie',
    ],
    position: 'top',
  },
  {
    category: 'Onvermogen tot Kritische Evaluatie',
    issues: [
      'Gebrek aan Bewustzijn',
      'Zelfreflectie',
    ],
    position: 'bottom',
  },
];

export const FishboneDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-12">
      <h2 className="text-4xl font-serif text-brand-dark mb-16 text-center">
        Wat werkt nu wel en wat niet
      </h2>

      <div className="relative w-full max-w-6xl">
        <svg viewBox="0 0 1200 600" className="w-full">
          {/* Main spine (horizontal arrow) */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#D9534F" />
            </marker>
          </defs>

          {/* Spine line */}
          <line
            x1="100"
            y1="300"
            x2="1100"
            y2="300"
            stroke="#D9534F"
            strokeWidth="4"
            markerEnd="url(#arrowhead)"
          />

          {/* Top branches */}
          {causes
            .filter((c) => c.position === 'top')
            .map((cause, idx) => {
              const x = 250 + idx * 300;
              return (
                <g key={cause.category}>
                  {/* Angled line */}
                  <line
                    x1={x}
                    y1="300"
                    x2={x - 80}
                    y2="150"
                    stroke="#2563EB"
                    strokeWidth="3"
                  />
                  {/* Category box */}
                  <rect
                    x={x - 180}
                    y="80"
                    width="200"
                    height="60"
                    fill="#2563EB"
                    rx="4"
                  />
                  <text
                    x={x - 80}
                    y="115"
                    textAnchor="middle"
                    className="text-sm font-bold fill-white"
                  >
                    {cause.category}
                  </text>
                  {/* Issues */}
                  {cause.issues.map((issue, issueIdx) => (
                    <text
                      key={issue}
                      x={x - 80}
                      y={170 + issueIdx * 25}
                      textAnchor="middle"
                      className="text-xs fill-stone-600"
                    >
                      • {issue}
                    </text>
                  ))}
                </g>
              );
            })}

          {/* Bottom branches */}
          {causes
            .filter((c) => c.position === 'bottom')
            .map((cause, idx) => {
              const x = 400 + idx * 300;
              return (
                <g key={cause.category}>
                  {/* Angled line */}
                  <line
                    x1={x}
                    y1="300"
                    x2={x - 80}
                    y2="450"
                    stroke="#2563EB"
                    strokeWidth="3"
                  />
                  {/* Category box */}
                  <rect
                    x={x - 180}
                    y="460"
                    width="200"
                    height="60"
                    fill="#2563EB"
                    rx="4"
                  />
                  <text
                    x={x - 80}
                    y="485"
                    textAnchor="middle"
                    className="text-sm font-bold fill-white"
                  >
                    {cause.category.length > 20
                      ? cause.category.substring(0, 20) + '...'
                      : cause.category}
                  </text>
                  <text
                    x={x - 80}
                    y="505"
                    textAnchor="middle"
                    className="text-sm font-bold fill-white"
                  >
                    {cause.category.length > 20
                      ? cause.category.substring(20)
                      : ''}
                  </text>
                  {/* Issues */}
                  {cause.issues.map((issue, issueIdx) => (
                    <text
                      key={issue}
                      x={x - 80}
                      y={380 + issueIdx * 25}
                      textAnchor="middle"
                      className="text-xs fill-stone-600"
                    >
                      • {issue}
                    </text>
                  ))}
                </g>
              );
            })}

          {/* Result box (head of the fish) */}
          <rect
            x="920"
            y="250"
            width="180"
            height="100"
            fill="#D9534F"
            rx="8"
          />
          <text
            x="1010"
            y="285"
            textAnchor="middle"
            className="text-sm font-bold fill-white"
          >
            Onbetrouwbaarheid
          </text>
          <text
            x="1010"
            y="305"
            textAnchor="middle"
            className="text-sm font-bold fill-white"
          >
            van AI in
          </text>
          <text
            x="1010"
            y="325"
            textAnchor="middle"
            className="text-sm font-bold fill-white"
          >
            Academische Context
          </text>
        </svg>
      </div>
    </div>
  );
};

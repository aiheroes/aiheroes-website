import React from 'react';
import { useSEO } from '../../hooks/useSEO';

type Pillar = 'software' | 'consulting';

interface Tool {
  name: string;
  primary?: boolean;
}

interface MenuCardData {
  title: string;
  pillar: Pillar;
  examples: string[];
  tools: Tool[];
}

const CARDS: MenuCardData[] = [
  {
    title: 'Agents',
    pillar: 'software',
    examples: [
      'Een chatbot die 24/7 retour- en factuurvragen afhandelt',
      'Een zoek-agent die het interne wiki in natuurlijke taal doorzoekt',
      'Een lead-assistent die contactformulieren direct opvolgt en kwalificeert',
      'Een research-agent die marktanalyses en concurrentie-overzichten opstelt',
      'Eén agent die werkt op website, WhatsApp, Teams en Slack tegelijk',
    ],
    tools: [
      { name: 'Claude API', primary: true },
      { name: 'OpenAI API', primary: true },
      { name: 'LangChain' },
      { name: 'LlamaIndex' },
      { name: 'Pinecone' },
      { name: 'n8n' },
      { name: 'Vapi' },
      { name: 'ElevenLabs' },
      { name: 'WhatsApp Cloud API' },
      { name: 'Slack API' },
      { name: 'Microsoft Teams' },
    ],
  },
  {
    title: 'Automation & Pipeline',
    pillar: 'software',
    examples: [
      'Een workflow die offertes uit inkomende e-mail haalt en in je CRM zet',
      'Een automatisering die facturen inleest, boekt en archiveert',
      'Een campagne-flow die leads op basis van gedrag automatisch opwarmt',
      'Een lead-router die inbound direct aan de juiste accountmanager koppelt',
      'Een integratie die CRM, boekhouding, marketing en support laat meepraten',
      'Een middleware-laag die een legacy-systeem ontsluit voor een modern platform',
    ],
    tools: [
      { name: 'n8n', primary: true },
      { name: 'Make', primary: true },
      { name: 'Zapier' },
      { name: 'Power Automate' },
      { name: 'Temporal' },
      { name: 'Airbyte' },
      { name: 'Python' },
      { name: 'GitHub Actions' },
      { name: 'Webhooks' },
      { name: 'Custom APIs' },
    ],
  },
  {
    title: 'Web Development',
    pillar: 'software',
    examples: [
      'Een bedrijfswebsite met CMS waar marketing zelf in werkt',
      'Een internal tool die een foutgevoelig Excel-proces vervangt',
      'Een landingspagina met A/B-test en analytics voor een campagne',
      'Een SaaS-platform met login, abonnementen en facturatie',
      'Een klantportaal waar klanten hun eigen gegevens en documenten beheren',
    ],
    tools: [
      { name: 'Next.js', primary: true },
      { name: 'React', primary: true },
      { name: 'Vite' },
      { name: 'Tailwind' },
      { name: 'Vercel' },
      { name: 'Netlify' },
      { name: 'Supabase' },
      { name: 'Postgres' },
      { name: 'Cursor' },
      { name: 'Claude Code' },
      { name: 'Figma' },
    ],
  },
  {
    title: 'Dashboards',
    pillar: 'software',
    examples: [
      'Een KPI-dashboard dat directie en MT maandagochtend als eerste openen',
      'Een realtime-view die productie- of servicecijfers live toont',
      'Een rapportage-tool die maand- en kwartaalrapportages automatisch genereert',
      'Een BI-overzicht dat data uit meerdere bronnen samenvoegt in één beeld',
      'Een admin-panel waar support klanten, accounts en settings beheert',
    ],
    tools: [
      { name: 'Metabase', primary: true },
      { name: 'Retool', primary: true },
      { name: 'Grafana' },
      { name: 'Superset' },
      { name: 'PowerBI' },
      { name: 'Looker' },
      { name: 'dbt' },
      { name: 'BigQuery' },
      { name: 'Snowflake' },
      { name: 'Recharts' },
    ],
  },
  {
    title: 'Document Processing',
    pillar: 'software',
    examples: [
      'Een generator die contracten, offertes en rapporten op maat opstelt',
      'Een analyzer die lange contracten samenvat en risico’s markeert',
      'Een offerte-tool die binnen minuten een voorstel op basis van klantdata levert',
      'Een OCR-flow die stapels papieren documenten digitaliseert en structureert',
      'Een batch-verwerker die duizenden PDF’s leest, categoriseert en verrijkt',
    ],
    tools: [
      { name: 'Claude API', primary: true },
      { name: 'Azure Document Intelligence', primary: true },
      { name: 'AWS Textract' },
      { name: 'Google Vision' },
      { name: 'Tesseract OCR' },
      { name: 'Unstructured' },
      { name: 'PyPDF' },
      { name: 'Nanonets' },
    ],
  },
  {
    title: 'Business Case & POC',
    pillar: 'consulting',
    examples: [
      'Een AI readiness scan die in kaart brengt waar AI voor jou loont',
      'Een werkende proof-of-concept om een idee te valideren vóór je opschaalt',
      'Een pilot-traject met één afdeling als springplank naar bredere uitrol',
      'Een ROI- en haalbaarheidsanalyse die business case én risico’s zichtbaar maakt',
    ],
    tools: [
      { name: 'Cursor', primary: true },
      { name: 'Claude Code', primary: true },
      { name: 'n8n' },
      { name: 'Figma' },
      { name: 'Airtable' },
      { name: 'Notion' },
      { name: 'Jupyter' },
    ],
  },
  {
    title: 'Compliance & Governance',
    pillar: 'consulting',
    examples: [
      'Een EU AI Act compliance-check op je bestaande AI-toepassingen',
      'Een AVG-audit op AI- en datagebruik binnen je organisatie',
      'Een risk assessment van modellen, data en leveranciers',
      'Een AI- en data-beleid dat aansluit bij je sector en wet- en regelgeving',
    ],
    tools: [
      { name: 'Claude API', primary: true },
      { name: 'Document-analyse', primary: true },
      { name: 'Microsoft Purview' },
      { name: 'OneTrust' },
      { name: 'Atlassian' },
      { name: 'EU AI Act frameworks' },
    ],
  },
];

const MENU_PRINT_STYLES = `
  @media print {
    @page { size: A4 landscape; margin: 0; }
    html, body {
      background: white !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    .menu-page {
      background: white !important;
      padding: 0 !important;
      min-height: 0 !important;
    }
    .menu-toolbar { display: none !important; }
    .menu-sheet-wrap {
      padding: 0 !important;
      max-width: none !important;
      margin: 0 !important;
    }
    .menu-sheet {
      width: 297mm !important;
      height: 210mm !important;
      padding: 7mm !important;
      margin: 0 !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      grid-template-columns: repeat(4, 1fr) !important;
      grid-template-rows: repeat(2, 1fr) !important;
      gap: 4mm !important;
      page-break-after: avoid;
    }
    .menu-card {
      padding: 4.5mm 4mm 4mm !important;
      border-radius: 3mm !important;
      break-inside: avoid;
    }
    .menu-card-intro {
      padding: 5mm 4.5mm !important;
    }
    .menu-title {
      font-size: 14pt !important;
      line-height: 1.1 !important;
      margin: 0 0 2.5mm !important;
    }
    .menu-intro-h1 {
      font-size: 22pt !important;
      line-height: 1.05 !important;
      margin: 0 0 3mm !important;
    }
    .menu-intro-lead {
      font-size: 8pt !important;
      line-height: 1.45 !important;
      margin: 0 0 4mm !important;
    }
    .menu-examples {
      margin: 0 0 2.5mm !important;
    }
    .menu-example {
      font-size: 7.5pt !important;
      padding: 1mm 0 1mm 3mm !important;
      line-height: 1.3 !important;
    }
    .menu-dot {
      top: 2.5mm !important;
      left: 0 !important;
      width: 1.2mm !important;
      height: 1.2mm !important;
    }
    .menu-section-label {
      font-size: 6pt !important;
      margin: 0 0 1.5mm !important;
    }
    .menu-tag {
      font-size: 6pt !important;
      padding: 0.8mm 2mm !important;
    }
    .menu-tools {
      padding-top: 2mm !important;
    }
    .menu-tools-tags {
      gap: 1mm !important;
    }
    .menu-eyebrow {
      font-size: 6pt !important;
      margin-bottom: 3mm !important;
    }
    .menu-brand-foot {
      padding-top: 2.5mm !important;
      font-size: 7pt !important;
    }
    .menu-brand-name {
      font-size: 9pt !important;
      margin-bottom: 0.5mm !important;
    }
    .menu-accent-stripe {
      height: 2px !important;
    }
  }
`;

function getAccentBg(pillar: Pillar) {
  return pillar === 'consulting' ? 'bg-brand-blue' : 'bg-brand-dark';
}

function getPrimaryTagClasses(pillar: Pillar) {
  return pillar === 'consulting'
    ? 'bg-blue-50 border-blue-200 text-brand-blue'
    : 'bg-stone-100 border-stone-400 text-brand-dark';
}

const MenuCardView: React.FC<{ card: MenuCardData }> = ({ card }) => {
  const accentBg = getAccentBg(card.pillar);
  const primaryTagClass = getPrimaryTagClasses(card.pillar);

  return (
    <article className="menu-card relative bg-white border border-stone-200 rounded-md px-5 pt-5 pb-4 flex flex-col overflow-hidden">
      <span className={`menu-accent-stripe absolute inset-x-0 top-0 h-0.5 ${accentBg}`} />
      <h2 className="menu-title font-serif font-semibold text-xl leading-tight text-brand-dark mb-3">
        {card.title}
      </h2>
      <p className="menu-section-label text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-taupe mb-2">
        Voorbeelden
      </p>
      <ul className="menu-examples list-none p-0 mb-3 flex-grow space-y-1">
        {card.examples.map((ex, i) => (
          <li key={i} className="menu-example relative pl-4 text-sm leading-snug text-brand-dark">
            <span className={`menu-dot absolute left-0 top-2 w-1.5 h-1.5 rounded-full ${accentBg}`} />
            {ex}
          </li>
        ))}
      </ul>
      <div className="menu-tools mt-auto pt-3 border-t border-stone-200">
        <p className="menu-section-label text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-taupe mb-2">
          Tools
        </p>
        <div className="menu-tools-tags flex flex-wrap gap-1">
          {card.tools.map((t, i) => (
            <span
              key={i}
              className={`menu-tag text-[11px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap leading-tight ${
                t.primary ? primaryTagClass : 'bg-brand-light border-stone-200 text-stone-600'
              }`}
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const IntroCard: React.FC = () => (
  <article className="menu-card menu-card-intro relative bg-brand-dark text-brand-light px-6 pt-6 pb-5 rounded-md flex flex-col justify-between overflow-hidden">
    <span className="menu-accent-stripe absolute inset-x-0 top-0 h-0.5 bg-brand-red" />
    <div>
      <p className="menu-eyebrow text-[10px] font-medium tracking-[0.2em] uppercase text-brand-taupe mb-3">
        Ons menu
      </p>
      <h1 className="menu-intro-h1 font-serif font-bold text-3xl leading-[1.05] mb-3">
        Wat wij <em className="italic font-normal text-brand-red">bouwen</em>
      </h1>
      <p className="menu-intro-lead text-sm text-stone-400 leading-relaxed mb-4">
        Een overzicht van de technische klussen en adviestrajecten die wij voor organisaties oppakken. Van autonome agents tot compliance-vraagstukken.
      </p>
    </div>
    <div className="menu-brand-foot border-t border-white/10 pt-3 text-xs text-stone-400">
      <span className="menu-brand-name block font-serif italic text-base text-brand-light mb-0.5">
        AI Heroes
      </span>
      AI werkt als je weet hoe
      <br />
      hello@aiheroes.io
    </div>
  </article>
);

export const MenuNL: React.FC = () => {
  useSEO({
    title: 'Menu',
    description: 'Wat wij bouwen: een overzicht van AI-toepassingen, software en advies door AI Heroes.',
    lang: 'nl',
    path: '/nl/menu',
    noindex: true,
  });

  return (
    <>
      <style>{MENU_PRINT_STYLES}</style>
      <div className="menu-page min-h-screen bg-stone-200 font-sans">
        <div className="menu-toolbar max-w-[1400px] mx-auto px-4 md:px-6 pt-6 pb-4 flex items-center justify-between gap-4">
          <div className="text-stone-600 text-sm">
            <span className="font-serif italic text-brand-dark text-base mr-2">AI Heroes</span>
            <span className="hidden sm:inline">· Menu</span>
          </div>
          <button
            onClick={() => window.print()}
            className="bg-brand-dark text-brand-light px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-red transition-colors"
          >
            Download als PDF
          </button>
        </div>

        <div className="menu-sheet-wrap max-w-[1400px] mx-auto px-4 md:px-6 pb-8">
          <div className="menu-sheet bg-brand-light shadow-xl rounded-md p-4 md:p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <IntroCard />
            {CARDS.map((card) => (
              <MenuCardView key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

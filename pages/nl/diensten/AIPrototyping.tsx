import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIPrototypingNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Proof of Concept"
      subtitle="Valideer je AI-idee voordat je groot investeert. Rapid proof-of-concept in een 6-daagse sprint."
      seoDescription="AI Prototyping: valideer je AI-idee met een rapid proof-of-concept. 6-daagse sprint methodologie die investering de-risked. Door AI Heroes."
      accentColor="blue"
      pillarBadge="Software & Implementatie"
      ctaLabel="Bespreek je project"
      trustedBy={["Trabu", "TicketGenie", "050-IT"]}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Bewijs dat het werkt, voordat je bouwt
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Veel AI-projecten beginnen te groot. Maanden development, grote teams, flinke budgetten — om er dan achter te komen dat de aanpak niet werkt. Wij draaien het om: begin klein, bewijs de waarde, en schaal dan op. In 6 dagen heb je een werkend prototype.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">De 6-daagse sprint</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Dag 1-2:</strong> Scope definiëren, data verkennen, architectuur kiezen</li>
            <li><strong>Dag 3-4:</strong> Bouwen van het kernprototype</li>
            <li><strong>Dag 5:</strong> Integratie en testen met echte data</li>
            <li><strong>Dag 6:</strong> Demo, evaluatie en go/no-go voor volledig traject</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Waarom prototypen?</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">De-risk je investering</h4>
            <p className="text-sm text-stone-600">
              Ontdek vroeg of je aanpak werkt, voordat je €50K+ committeert aan een volledig traject.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Tastbaar bewijs</h4>
            <p className="text-sm text-stone-600">
              Een werkend prototype overtuigt stakeholders beter dan elk PowerPoint deck.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Snelle feedback</h4>
            <p className="text-sm text-stone-600">
              Gebruikers kunnen het prototype testen en feedback geven. Bouwt draagvlak.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Herbruikbare code</h4>
            <p className="text-sm text-stone-600">
              Het prototype is geen wegwerpartie — het vormt de basis voor de volledige oplossing.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Wat we prototypen</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">AI-assistenten</h4>
            <p className="text-sm text-stone-600">Chatbots en copilots met jouw bedrijfscontext.</p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Documentverwerking</h4>
            <p className="text-sm text-stone-600">Automatische extractie, classificatie en samenvatting.</p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Workflow automatisering</h4>
            <p className="text-sm text-stone-600">AI-gestuurde processtappen die handmatig werk vervangen.</p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Data-analyse pipelines</h4>
            <p className="text-sm text-stone-600">Geautomatiseerde inzichten uit je bestaande data.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">6 dagen</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Tot prototype</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Vanaf €8.000</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Investering</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Werkend</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Proof of concept</div>
          </div>
        </div>

        <DarkBox accentColor="red">
          <h3>Van prototype naar productie</h3>
          <p>
            Tevreden met het prototype? Schaal op naar een volledige oplossing met{' '}
            <Link to="/nl/diensten/maatwerk-ai-oplossingen" className="text-white underline underline-offset-2 hover:text-white/80">
              Maatwerk AI-Oplossingen
            </Link>. Nog geen strategie?{' '}
            <Link to="/nl/diensten/ai-roadmap" className="text-white underline underline-offset-2 hover:text-white/80">
              Begin met een AI Roadmap
            </Link>.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};

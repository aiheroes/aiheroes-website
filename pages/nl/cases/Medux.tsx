import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const MeduxNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="Case Study: Medux"
      subtitle="Voice-to-voice AI klantenservice. 70% kostenbesparing, 80% van de gesprekken geautomatiseerd."
      accentColor="red"
      pillarBadge="Software & Implementatie"
      seoDescription="Case study Medux: voice-to-voice AI klantenservice met 70% kostenbesparing en 80% geautomatiseerde gesprekken. Gebouwd door AI Heroes."
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De uitdaging
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Medux, een toonaangevende Nederlandse zorgorganisatie voor mensen met mobiliteitsbeperkingen, stond voor een uitdaging. Hun klantenbestand bestaat grotendeels uit ouderen die liever bellen dan online boeken. Met een groeiend aantal klanten werd het steeds moeilijker om de klantenservice op te schalen zonder de kosten te laten exploderen.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          Een chatbot was geen optie: veel klanten zijn niet comfortabel met digitale interfaces. Medux zocht een oplossing die menselijk contact respecteert en tegelijk schaalbaar en kostenefficiënt is.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <h3 className="text-xl font-serif text-brand-dark mb-3">De kansen</h3>
          <ul className="space-y-2 text-stone-600">
            <li><strong>Schalen zonder kosten:</strong> Hoog belvolume efficiënt afhandelen</li>
            <li><strong>Medewerker-welzijn:</strong> Repetitieve taken wegnemen om burn-out te voorkomen</li>
            <li><strong>24/7 beschikbaarheid:</strong> Service buiten kantooruren mogelijk maken</li>
          </ul>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De oplossing
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          We ontwikkelden een voice-to-voice AI-oplossing die natuurlijke telefoongesprekken kan voeren. Het systeem klinkt menselijk, begrijpt context, en kan zelfstandig afspraken inplannen, vragen beantwoorden en formulieren verwerken.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Natuurlijke gesprekken</h4>
            <p className="text-sm text-stone-600">
              AI die menselijk klinkt en context begrijpt. Klanten merken vaak niet dat ze met een systeem praten.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Meertalig</h4>
            <p className="text-sm text-stone-600">
              Ondersteuning voor meerdere talen, waardoor taalbarrières verdwijnen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Slimme doorschakeling</h4>
            <p className="text-sm text-stone-600">
              Complexe of urgente vragen worden automatisch doorgeschakeld naar menselijke medewerkers.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Volledige logging</h4>
            <p className="text-sm text-stone-600">
              Elk gesprek wordt getranscribeerd voor compliance en kwaliteitscontrole.
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          De resultaten
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-brand-red text-white p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">70%</div>
            <div className="text-sm text-white/80">kostenbesparing</div>
          </div>
          <DarkBox accentColor="red" className="p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">80%</div>
            <div className="text-sm">gesprekken via AI</div>
          </DarkBox>
          <div className="bg-brand-red text-white p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">7.8</div>
            <div className="text-sm text-white/80">klanttevredenheid</div>
          </div>
        </div>

        <p className="text-stone-600 leading-relaxed mb-8">
          De AI handelt nu maandelijks zo'n 4.000 gesprekken af. Klanten waarderen de kortere wachttijden en het feit dat ze ook buiten kantooruren geholpen worden. Medewerkers richten zich nu op complexe gevallen die menselijke aandacht vragen.
        </p>

        <DarkBox accentColor="red">
          <h3>Over Medux</h3>
          <p>
            Medux is een vooraanstaand Nederlands zorginnovatiebedrijf gespecialiseerd in hulpmiddelen en zorgtechnologie. Als betrouwbare partner voor zorginstellingen en particulieren maken zij zorg toegankelijker en betaalbaarder in heel Nederland.
          </p>
        </DarkBox>

        <DarkBox accentColor="blue" className="mt-8">
          <h3 className="text-xl font-serif mb-3">Wil je vergelijkbare resultaten?</h3>
          <p className="mb-4">
            Vertel ons over je uitdaging. We denken graag mee over hoe AI jouw organisatie kan helpen.
          </p>
          <Link
            to="/nl/diensten#software"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-red-600 transition-colors"
          >
            Bekijk onze diensten
          </Link>
        </DarkBox>
      </div>
    </PageLayout>
  );
};

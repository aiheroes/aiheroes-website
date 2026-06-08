import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIBureauNederlandNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="AI Bureau voor heel Nederland"
      subtitle="AI Heroes is het full-service AI bureau uit Groningen dat organisaties door heel Nederland helpt met training, consulting en maatwerk software."
      seoTitle="AI Bureau Nederland | Training, Consulting & Software"
      seoDescription="Op zoek naar een AI bureau in Nederland? AI Heroes helpt organisaties met AI-training, consulting en maatwerk software. Van strategie tot implementatie, vanuit Groningen."
      accentColor="blue"
      ctaLabel="Plan een kennismaking"
      trustedBy={["Postcode Loterij", "Banijay", "Prosus", "Medux", "Envalior"]}
    >
      <div className="prose prose-lg max-w-none">
        {/* Answer-capsule intro: a self-contained definition for search + AI answers */}
        <p className="text-xl text-stone-700 leading-relaxed mb-8">
          AI Heroes is een full-service AI bureau uit Groningen, actief in heel Nederland. Sinds 2019 helpen we
          meer dan 50 organisaties met het hele AI-traject: van training en strategisch advies tot het bouwen van
          maatwerk software. Drie pijlers, één partner, van change management tot technische implementatie.
        </p>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Wat een full-service AI bureau voor je doet
        </h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          De meeste bureaus doen één ding: ze trainen, of ze adviseren, of ze bouwen. Wij doen alle drie, onder
          één dak. Daardoor blijft er niets liggen tussen het advies en de uitvoering, en werk je met een team dat
          jouw organisatie van begin tot eind kent.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 not-prose">
          <div className="p-6 bg-white border border-stone-200">
            <h3 className="font-serif text-xl text-brand-dark mb-2">Training</h3>
            <p className="text-sm text-stone-600 mb-4">
              Workshops en incompany-trainingen die je team AI-vaardig maken, van directie tot developers.
            </p>
            <Link to="/nl/diensten/ai-foundations" className="text-brand-blue text-sm font-medium underline underline-offset-2">
              Bekijk trainingen
            </Link>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h3 className="font-serif text-xl text-brand-dark mb-2">Consulting</h3>
            <p className="text-sm text-stone-600 mb-4">
              AI-readiness scans, roadmaps en business cases die ambitie vertalen naar een concreet plan.
            </p>
            <Link to="/nl/diensten/ai-readiness-scan" className="text-brand-blue text-sm font-medium underline underline-offset-2">
              Bekijk consulting
            </Link>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h3 className="font-serif text-xl text-brand-dark mb-2">Software</h3>
            <p className="text-sm text-stone-600 mb-4">
              Maatwerk AI-oplossingen die echte bedrijfsproblemen oplossen, van prototype tot productie.
            </p>
            <Link to="/nl/diensten/maatwerk-ai-oplossingen" className="text-brand-blue text-sm font-medium underline underline-offset-2">
              Bekijk software
            </Link>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Door heel Nederland, met basis in Groningen
        </h2>
        <p className="text-stone-600 leading-relaxed mb-8">
          Onze klanten zitten door het hele land, van de Randstad tot het noorden. We werken op locatie en remote,
          en geven trainingen waar jouw team ook zit. Onze thuisbasis is Groningen, de AI-hoofdstad van Europa, met
          de AI Fabriek en een groeiend ecosysteem van AI-talent op de stoep.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10 not-prose">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">50+</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Organisaties geholpen</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">1.000+</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Professionals getraind</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Sinds 2019</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">AI in de praktijk</div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Resultaten bij Nederlandse organisaties
        </h2>
        <p className="text-stone-600 leading-relaxed mb-6">
          We laten liever zien wat we doen dan dat we het beloven. Een paar voorbeelden:
        </p>
        <ul className="mb-8">
          <li>
            <Link to="/nl/cases/medux" className="text-brand-blue underline underline-offset-2">Medux</Link>: 70% lagere kosten op een arbeidsintensief proces.
          </li>
          <li>
            <Link to="/nl/cases/trabu" className="text-brand-blue underline underline-offset-2">Trabu</Link>: van idee naar werkend prototype in 6 dagen.
          </li>
          <li>
            <Link to="/nl/cases/innoenergy" className="text-brand-blue underline underline-offset-2">InnoEnergy</Link>: van AI-strategie naar goedkeuring door de board.
          </li>
        </ul>

        <DarkBox accentColor="red">
          <h3>Op zoek naar een AI bureau in Nederland?</h3>
          <p>
            Plan een vrijblijvende kennismaking. We denken mee over waar AI voor jouw organisatie waarde oplevert,
            of je nu wilt starten met training, een{' '}
            <Link to="/nl/diensten/ai-readiness-scan" className="text-white underline underline-offset-2 hover:text-white/80">
              readiness scan
            </Link>{' '}
            wilt, of direct iets wilt laten bouwen.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};

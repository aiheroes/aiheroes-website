import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';
import { Link } from 'react-router-dom';

export const AIMediaLiteracyNL: React.FC = () => {
  return (
    <PageLayout
      lang="nl"
      title="AI Media Literacy"
      subtitle="Deepfakes, AI-gegenereerde content en desinformatie. Leer herkennen wat echt is en wat niet."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Kritisch denken in het AI-tijdperk
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI maakt het steeds makkelijker om overtuigende fake content te maken. Van deepfake video's tot AI-gegenereerde nieuwsartikelen - de lijn tussen echt en nep vervaagt. In deze workshop leer je hoe je AI-content herkent en kritisch blijft.
        </p>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-blue">
          <h3 className="text-xl font-serif text-brand-dark mb-3">Onderwerpen</h3>
          <ul className="space-y-2 text-stone-600">
            <li>Hoe deepfakes en face-reenactments werken</li>
            <li>AI-gegenereerde afbeeldingen herkennen</li>
            <li>Tekst-detectie: is dit geschreven door AI?</li>
            <li>Audio deepfakes en voice cloning</li>
            <li>Desinformatie en manipulatie patronen</li>
            <li>Verificatie tools en technieken</li>
          </ul>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Hands-on detectie</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          We laten je zien hoe makkelijk het is om overtuigende fake content te maken. Niet om je te leren manipuleren, maar om je te wapenen. Je leert de telltale signs herkennen en tools gebruiken om content te verifiëren.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Visuele Detectie</h4>
            <p className="text-sm text-stone-600">
              Leer artifacten herkennen in AI-afbeeldingen: handen, tekst, achtergronden en meer.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Video Analyse</h4>
            <p className="text-sm text-stone-600">
              Deepfake detectie technieken: lip-sync issues, lighting inconsistenties, etc.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Tekst Verificatie</h4>
            <p className="text-sm text-stone-600">
              AI-detectie tools gebruiken en hun beperkingen begrijpen.
            </p>
          </div>
          <div className="p-6 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Brononderzoek</h4>
            <p className="text-sm text-stone-600">
              Reverse image search, metadata analyse en andere verificatie technieken.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Waarom dit belangrijk is</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          AI-gegenereerde content wordt steeds overtuigender. Voor organisaties betekent dit risico's op het gebied van reputatie, fraude en interne communicatie. Voor individuen gaat het om mediawijsheid en het vermogen om geïnformeerde beslissingen te nemen.
        </p>

        <DarkBox accentColor="red" className="mb-8">
          <h3>Case: Mark Rutte Deepfake</h3>
          <p>
            We laten zien hoe we een overtuigende deepfake van Mark Rutte maakten - en welke tekenen je hadden kunnen helpen het te herkennen. Een praktijkvoorbeeld van hoe deze technologie werkt.
          </p>
        </DarkBox>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">2-3 uur</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Workshop duur</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">10-30</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Deelnemers</div>
          </div>
          <div className="text-center p-6 bg-white border border-stone-200">
            <div className="text-3xl font-serif text-brand-blue mb-2">Interactief</div>
            <div className="text-sm text-stone-500 uppercase tracking-wider">Live demo's</div>
          </div>
        </div>

        <h3 className="text-xl font-serif text-brand-dark mb-4">Voor wie?</h3>
        <p className="text-stone-600 leading-relaxed mb-8">
          Deze workshop is geschikt voor iedereen: van communicatieprofessionals en journalisten tot HR teams en management. Mediawijsheid is een skill die iedereen nodig heeft in het AI-tijdperk.
        </p>

        <DarkBox accentColor="blue">
          <h3>Europese digitale weerbaarheid</h3>
          <p>
            Deepfakes en desinformatie raken ook aan digitale soevereiniteit. Bekijk onze{' '}
            <Link to="/nl/diensten/eu-training" className="text-white underline underline-offset-2 hover:text-white/80">
              EU Training
            </Link>{' '}
            voor een breder perspectief op digitale risico's en Europese alternatieven.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};

import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { DarkBox } from '../../../src/components/DarkBox';

export const TermsEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Terms of Service"
      subtitle="The ground rules for our collaboration. Last updated: January 2026."
      accentColor="red"
      showContactForm={false}
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          Article 1 - Definitions
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          In these terms of service, the following definitions apply:
        </p>

        <ul className="text-stone-600 leading-relaxed mb-8 space-y-2">
          <li><strong>AI Heroes:</strong> AI Heroes, a trade name of Lucidium, registered in the Netherlands, Chamber of Commerce number 78738105</li>
          <li><strong>Client:</strong> The natural or legal person entering into an agreement with AI Heroes</li>
          <li><strong>Services:</strong> All work performed by AI Heroes for the client, including workshops, training, consulting, and software development</li>
        </ul>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 2 - Applicability
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          These terms of service apply to all offers, quotes, and agreements between AI Heroes and the client. Deviations are only valid if agreed upon in writing.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 3 - Quotes and Agreements
        </h2>

        <div className="bg-stone-50 p-6 md:p-8 mb-8 border-l-4 border-brand-red">
          <ul className="space-y-2 text-stone-600">
            <li>Quotes are non-binding and valid for 30 days</li>
            <li>An agreement is established upon written confirmation by AI Heroes</li>
            <li>Prices are exclusive of VAT unless otherwise stated</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 4 - Execution of Services
        </h2>

        <p className="text-stone-600 leading-relaxed mb-6">
          AI Heroes performs all services to the best of its ability in accordance with good professional standards. Our services are obligations of effort, not results, unless explicitly agreed otherwise.
        </p>

        <p className="text-stone-600 leading-relaxed mb-8">
          For workshops and training, the content is tailored to the time of delivery. AI and technology evolve rapidly; we guarantee that the knowledge is current at the time of the workshop.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 5 - Payment
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Payment Term</h4>
            <p className="text-sm text-stone-600">
              Invoices must be paid within 14 days of the invoice date.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Advance Payment</h4>
            <p className="text-sm text-stone-600">
              For certain services, advance payment may be required.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Default</h4>
            <p className="text-sm text-stone-600">
              Late payment incurs statutory commercial interest.
            </p>
          </div>
          <div className="p-4 bg-white border border-stone-200">
            <h4 className="font-bold text-brand-dark mb-2">Collection Costs</h4>
            <p className="text-sm text-stone-600">
              Extrajudicial collection costs are borne by the client.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 6 - Cancellation
        </h2>

        <p className="text-stone-600 leading-relaxed mb-6">
          The following cancellation terms apply to workshops and training:
        </p>

        <ul className="text-stone-600 leading-relaxed mb-8 space-y-2">
          <li>Up to 14 days before: free cancellation</li>
          <li>7-14 days before: 50% of the amount due</li>
          <li>Less than 7 days before: 100% of the amount due</li>
          <li>Rescheduling to another date is possible in consultation</li>
        </ul>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 7 - Intellectual Property
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          All rights to materials, methodologies, and software developed by AI Heroes remain with AI Heroes unless otherwise agreed in writing. The client receives a license for personal use. Materials may not be distributed or resold without permission.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 8 - Liability
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          AI Heroes' liability is limited to the amount paid out by our liability insurance in the relevant case, with a maximum of the invoice amount of the assignment in question. AI Heroes is not liable for indirect damage, consequential damage, or lost profits.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 9 - Confidentiality
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Both parties are obliged to maintain confidentiality of all confidential information they have obtained from each other in the context of the agreement. This obligation continues after termination of the agreement.
        </p>

        <h2 className="text-2xl font-serif text-brand-dark mb-4">
          Article 10 - Disputes
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Dutch law applies to all agreements. Disputes are submitted to the competent court in the district where AI Heroes is established.
        </p>

        <DarkBox accentColor="red">
          <h3>Questions?</h3>
          <p>
            Have questions about these terms of service? Feel free to contact us. We're happy to explain in plain language.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};

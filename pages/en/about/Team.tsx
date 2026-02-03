import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import { Image } from '../../../components/Image';
import { DarkBox } from '../../../src/components/DarkBox';

export const TeamEN: React.FC = () => {
  return (
    <PageLayout
      lang="en"
      title="Our Team"
      subtitle="We are Frans, Jan and David. We help you move forward when you get stuck with AI."
      accentColor="blue"
    >
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
          The people behind AI Heroes
        </h2>

        <p className="text-stone-600 leading-relaxed mb-8">
          Since 2019, we've trained teams at organizations like Postcodeloterij, Prosus and Banijay Benelux. Practical AI knowledge, immediately applicable.
        </p>

        {/* Team Members */}
        <div className="space-y-12 mb-12">
          {/* Frans */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <Image src="/team/frans.webp" alt="Frans Hoorn" loading="lazy" className="w-full h-full object-cover object-top scale-125 brightness-110 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Frans Hoorn</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · Strategy & Product</p>
              <p className="text-stone-600 leading-relaxed">
                Combines strategic thinking with a sharp eye for user experience. Helps organizations see AI not as standalone technology, but as an integral part of their product and brand strategy. With a background in UX/UI design and product management, he translates complex trajectories into concrete roadmaps. Delivers workshops to executive and management teams on AI strategy and prompt engineering.
              </p>
            </div>
          </div>

          {/* David */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <Image src="/team/david.webp" alt="David Homan" loading="lazy" className="w-full h-full object-cover object-top scale-125 brightness-110 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">David Homan</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · AI & Development</p>
              <p className="text-stone-600 leading-relaxed">
                The link between tech and boardroom. Understands how AI models work under the hood—from transformers to image generation—and translates that knowledge into what it means for your business processes. Builds with tools like GitHub Copilot and local AI models, giving him precise insight into what's technically possible and what's feasible within your organization. Passionate speaker who conveys complex AI concepts clearly and energetically.
              </p>
            </div>
          </div>

          {/* Jan */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-stone-200 rounded-full overflow-hidden">
              <Image src="/team/jan.webp" alt="Jan Brusse" loading="lazy" className="w-full h-full object-cover object-top scale-125 brightness-110 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-brand-dark mb-1">Jan Brusse</h3>
              <p className="text-brand-red font-medium mb-3">Managing Partner · Training & Innovation</p>
              <p className="text-stone-600 leading-relaxed">
                Specialist in making complex technology accessible. Has spent years building an innovation lab where he trained thousands of people—from beginners to experts—in new technologies. Knows like no other how to turn a tough subject into an interactive, practical session that sticks. Picks up new AI developments at lightning speed and immediately translates them into applications for your team.
              </p>
            </div>
          </div>
        </div>

        {/* Advisor */}
        <div className="border-t border-stone-200 pt-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-stone-200 rounded-full overflow-hidden">
              <Image src="/team/joseph.png" alt="Joseph Groot Kormelink" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-serif text-brand-dark mb-1">Joseph Groot Kormelink</h3>
              <p className="text-brand-blue font-medium mb-2 text-sm">Industry Advisor</p>
              <p className="text-stone-600 leading-relaxed text-sm">
                Well-known in Amsterdam's AI and startup scene. Advises on enterprise matters.
              </p>
            </div>
          </div>
        </div>

        <DarkBox accentColor="blue">
          <h3>Work together?</h3>
          <p>
            Whether you want to book a workshop or explore possibilities — get in touch.
          </p>
        </DarkBox>
      </div>
    </PageLayout>
  );
};

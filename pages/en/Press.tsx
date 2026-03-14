import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';
import { CONTENT } from '../../constants';
import { ArrowLeft, Download } from 'lucide-react';
import { DarkBox } from '../../src/components/DarkBox';
import { useSEO } from '../../hooks/useSEO';

export const PressEN: React.FC = () => {
  const content = CONTENT['en'];

  const location = useLocation();
  useSEO({
    title: 'Press & Media',
    description: 'AI Heroes press & media: brand identity, logo, brand colors and guidelines. Brand assets and press contact.',
    lang: 'en',
    path: location.pathname
  });

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className="h-8 w-auto text-brand-dark" variant="wordmark" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-stone-600 hover:text-brand-dark flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-dark border-b-4 border-brand-red">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Press & Media</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Brand assets, guidelines, and information for press and media inquiries.
          </p>
        </div>
      </header>

      {/* Brand Bible Section */}
      <main className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* About Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">About AI Heroes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  AI Heroes helps organizations navigate the complexities of Artificial Intelligence with practical skills and strategic insight. Founded in 2019, we've trained thousands of professionals at companies ranging from startups to Fortune 500 enterprises.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Our workshops cut through the hype to deliver real, applicable AI knowledge. We believe AI works when you know how.
                </p>
              </div>
              <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
                <h3 className="font-bold text-brand-dark mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-stone-600 text-sm">
                  <li><strong>Founded:</strong> 2019</li>
                  <li><strong>Headquarters:</strong> Groningen, Netherlands</li>
                  <li><strong>Focus:</strong> AI Training & Consulting</li>
                  <li><strong>Contact:</strong> hello@aiheroes.io</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Logo Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Logo</h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Our logo combines the letters "AI" with a distinctive frame enclosing "HEROES" — a mark that represents structure, clarity, and the power of AI.
            </p>

            <h3 className="text-xl font-serif text-brand-dark mb-4">Wordmark</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-8 border border-stone-200 flex flex-col items-center">
                <div className="bg-brand-light p-6 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-12 w-auto" variant="wordmark" colorVariant="fullcolor" />
                </div>
                <span className="text-sm text-stone-500">On light</span>
              </div>
              <div className="bg-brand-dark p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-6 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-12 w-auto text-white" variant="wordmark" />
                </div>
                <span className="text-sm text-white/70">On dark</span>
              </div>
              <div className="bg-brand-red p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-6 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-12 w-auto text-white" variant="wordmark" />
                </div>
                <span className="text-sm text-white/80">On red</span>
              </div>
            </div>

            <h3 className="text-xl font-serif text-brand-dark mb-4">Icon</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-8 border border-stone-200 flex flex-col items-center">
                <div className="bg-brand-light p-4 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-20 w-20" variant="icon" colorVariant="fullcolor" />
                </div>
                <span className="text-sm text-stone-500">On light</span>
              </div>
              <div className="bg-brand-dark p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-4 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-20 w-20 text-white" variant="icon" />
                </div>
                <span className="text-sm text-white/70">On dark</span>
              </div>
              <div className="bg-brand-red p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-4 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-20 w-20 text-white" variant="icon" />
                </div>
                <span className="text-sm text-white/80">On red</span>
              </div>
              <div className="bg-brand-blue p-8 border border-stone-200 flex flex-col items-center">
                <div className="p-4 rounded-lg mb-4 w-full flex justify-center">
                  <Logo className="h-20 w-20 text-white" variant="icon" />
                </div>
                <span className="text-sm text-white/80">On blue</span>
              </div>
            </div>

            <div className="bg-stone-50 p-6 border-l-4 border-brand-blue">
              <h3 className="font-bold text-brand-dark mb-2">Logo Usage Guidelines</h3>
              <ul className="text-stone-600 text-sm space-y-1">
                <li>• Maintain minimum clear space equal to the height of the logo mark</li>
                <li>• Do not rotate, skew, or distort the logo</li>
                <li>• Do not change the logo colors outside of approved variants</li>
                <li>• Minimum size: 32px height for digital, 10mm for print</li>
              </ul>
            </div>
          </section>

          {/* Colors Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Brand Colors</h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Each colour in our palette represents a pillar of AI Heroes. Together they form the identity of our brand.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group">
                <div className="bg-brand-red h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Foundry Red</h4>
                  <p className="text-xs text-stone-500 font-mono">#D9534F</p>
                  <p className="text-xs text-stone-400 mt-1">Training</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-blue h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Catalyst Blue</h4>
                  <p className="text-xs text-stone-500 font-mono">#2563EB</p>
                  <p className="text-xs text-stone-400 mt-1">Consulting</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-dark h-32 rounded-t-lg"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Forged Black</h4>
                  <p className="text-xs text-stone-500 font-mono">#1C1917</p>
                  <p className="text-xs text-stone-400 mt-1">Software</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-light h-32 rounded-t-lg border border-stone-200 border-b-0"></div>
                <div className="bg-white p-4 border border-t-0 border-stone-200 rounded-b-lg">
                  <h4 className="font-bold text-brand-dark text-sm">Rooftop White</h4>
                  <p className="text-xs text-stone-500 font-mono">#FDFCF8</p>
                  <p className="text-xs text-stone-400 mt-1">Backgrounds & logo</p>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Typography</h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl">
              We use a combination of serif and sans-serif typefaces to balance professionalism with approachability.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-stone-200">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-4">Headlines</p>
                <p className="text-5xl font-serif text-brand-dark mb-4">Playfair Display</p>
                <p className="text-stone-600 text-sm">
                  Used for headlines and display text. Elegant serifs convey expertise and authority.
                </p>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="font-serif text-2xl text-brand-dark">AI works if you know how</p>
                </div>
              </div>

              <div className="bg-white p-8 border border-stone-200">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-4">Body Text</p>
                <p className="text-5xl font-sans font-light text-brand-dark mb-4">Inter</p>
                <p className="text-stone-600 text-sm">
                  Used for body copy and UI elements. Clean and highly legible at all sizes.
                </p>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="font-sans text-base text-brand-dark">We give practical workshops where people actually learn something. Skills that work for you.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Taglines Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Taglines & Messaging</h2>

            <div className="space-y-6">
              <div className="bg-brand-dark p-8 text-white">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Primary Tagline</p>
                <p className="text-3xl md:text-4xl font-serif">
                  AI <span className="underline decoration-brand-red decoration-4">works</span> if you know <span className="underline decoration-brand-blue decoration-4">how</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-stone-50 p-6 border-l-4 border-brand-red">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Mission Statement</p>
                  <p className="text-stone-700 font-medium">
                    We help organizations navigate the complexities of Artificial Intelligence with practical skills and strategic insight.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 border-l-4 border-brand-blue">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Value Proposition</p>
                  <p className="text-stone-700 font-medium">
                    Practical workshops where people actually learn something. Skills that work for you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Press Contact */}
          <section className="not-prose">
            <DarkBox accentColor="red">
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Press Inquiries</h2>
              <p className="mb-6 max-w-xl">
                For press inquiries, interview requests, or additional brand assets, please contact us directly.
              </p>
              <a
                href="mailto:hello@aiheroes.io"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-red-600 transition-colors"
              >
                Contact Press Team
              </a>
            </DarkBox>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer
        content={content.footer}
        nav={content.nav}
        lang="en"
        alternateUrl="/nl/pers"
      />
    </div>
  );
};

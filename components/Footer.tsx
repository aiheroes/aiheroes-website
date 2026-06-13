import React from 'react';
import { Link } from 'react-router-dom';
import type { Content, Language } from '../types';
import { Logo } from './Logo';
import { CONTENT } from '../constants';

// Technology partner SVG logo paths
const TECH_PARTNERS = [
  {
    name: 'Microsoft',
    viewBox: '0 0 16 16',
    path: 'M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z'
  },
  {
    name: 'OpenAI',
    viewBox: '0 0 24 24',
    path: 'M22.282 9.821a5.985 5.985 0 0 0-.516-4.911 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.14-.08 4.778-2.758a.795.795 0 0 0 .393-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.758a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.814 3.354-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.856l-5.833-3.387L15.124 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.41-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.41 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.307 12.863l-2.02-1.164a.08.08 0 0 1-.038-.057V6.074a4.5 4.5 0 0 1 7.376-3.454l-.142.08-4.778 2.76a.795.795 0 0 0-.393.681zm1.097-2.362l2.603-1.502 2.603 1.502v3.004l-2.603 1.502-2.603-1.502z'
  },
  {
    name: 'Anthropic',
    viewBox: '0 0 24 24',
    path: 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z'
  },
  {
    name: 'Google',
    viewBox: '0 0 24 24',
    path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
  },
  {
    name: 'Vercel',
    viewBox: '0 0 24 24',
    path: 'm12 1.608 12 20.784H0Z'
  },
  {
    name: 'Deepgram',
    viewBox: '0 0 24 24',
    path: 'M11.203 24H1.517a.364.364 0 0 1-.258-.62l6.239-6.275a.366.366 0 0 1 .259-.108h3.52c2.723 0 5.025-2.127 5.107-4.845a5.004 5.004 0 0 0-4.999-5.148H7.613v4.646c0 .2-.164.364-.365.364H.968a.365.365 0 0 1-.363-.364V.364C.605.164.768 0 .969 0h10.416c6.684 0 12.111 5.485 12.01 12.187C23.293 18.77 17.794 24 11.202 24z'
  },
  {
    name: 'Mistral',
    viewBox: '0 0 24 24',
    path: 'M17.143 3.429v3.428h-3.429v3.429h-3.428V6.857H6.857V3.43H3.43v13.714H0v3.428h10.286v-3.428H6.857v-3.429h3.429v3.429h3.429v-3.429h3.428v3.429h-3.428v3.428H24v-3.428h-3.43V3.429z'
  }
];

// EU flag star positions (12 stars in a circle)
const EU_STARS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 - 90) * (Math.PI / 180);
  return { x: 405 + 140 * Math.cos(angle), y: 270 + 140 * Math.sin(angle) };
});

// Generate 5-pointed star polygon points
const starPoints = (cx: number, cy: number, outerR: number, innerR: number): string => {
  return Array.from({ length: 10 }, (_, i) => {
    const angle = (i * 36 - 90) * (Math.PI / 180);
    const r = i % 2 === 0 ? outerR : innerR;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(' ');
};

interface FooterProps {
  content: Content['footer'];
  nav: Content['nav'];
  lang: Language;
  setLang?: (lang: Language) => void;
  alternateUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({ content, nav, lang, setLang, alternateUrl }) => {
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const pressUrl = lang === 'nl' ? '/nl/pers' : '/en/press';
  const pressLabel = lang === 'nl' ? 'Pers' : 'Press';
  const companyLabel = lang === 'nl' ? 'Bedrijf' : 'Company';

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 mt-auto border-t border-stone-800 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[88rem] mx-auto px-6 lg:px-8">

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-6 mb-10">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-6 flex justify-center lg:-ml-6">
              <Logo className="h-20 w-20 lg:h-24 lg:w-24" variant="icon" colorVariant="white" />
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-4 text-pretty">
              {content.tagline}
            </p>
            <div className="space-y-1.5 text-sm text-stone-400">
              <a href={`mailto:${CONTENT[lang].contactForm.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                {CONTENT[lang].contactForm.email}
              </a>
              <a href={CONTENT[lang].contactForm.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {CONTENT[lang].contactForm.phone}
              </a>
            </div>
          </div>

          {/* Training Column */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">{lang === 'nl' ? 'Training' : 'Training'}</h3>
            <ul className="space-y-2">
              {nav.services.children?.filter(c => c.category === 'training').map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultancy Column */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">
              <Link to={lang === 'nl' ? '/nl/diensten' : '/en/services'} className="hover:text-stone-300 transition-colors">
                {lang === 'nl' ? 'Consultancy' : 'Consulting'}
              </Link>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to={lang === 'nl' ? '/nl/diensten/ai-bureau-nederland' : '/en/services/ai-agency-netherlands'} className="text-stone-400 hover:text-white transition-colors text-sm">
                  {lang === 'nl' ? 'AI Bureau Nederland' : 'AI Agency Netherlands'}
                </Link>
              </li>
              {nav.services.children?.filter(c => c.category === 'consulting').map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Column */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Software</h3>
            <ul className="space-y-2">
              {nav.services.children?.filter(c => c.category === 'software').map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Column */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">{content.caseStudies.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${lang}/cases/medux`} className="text-stone-400 hover:text-white transition-colors text-sm">Medux</Link>
              </li>
              <li>
                <Link to={`/${lang}/cases/olx`} className="text-stone-400 hover:text-white transition-colors text-sm">OLX</Link>
              </li>
              <li>
                <Link to={`/${lang}/cases/trabu`} className="text-stone-400 hover:text-white transition-colors text-sm">Trabu</Link>
              </li>
              <li>
                <Link to={`/${lang}/cases/innoenergy`} className="text-stone-400 hover:text-white transition-colors text-sm">InnoEnergy</Link>
              </li>
            </ul>
          </div>

          {/* Company + Resources + Legal Column */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">{companyLabel}</h3>
            <ul className="space-y-2">
              {nav.about.children?.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={pressUrl} className="text-stone-400 hover:text-white transition-colors text-sm">
                  {pressLabel}
                </Link>
              </li>
              <li>
                <Link to={lang === 'nl' ? '/nl/vacatures' : '/en/careers'} className="text-stone-400 hover:text-white transition-colors text-sm">
                  {lang === 'nl' ? 'Vacatures' : 'Careers'}
                </Link>
              </li>
              <li>
                <Link
                  to={lang === 'en' ? '/en#contact' : '/#contact'}
                  onClick={(e: React.MouseEvent) => {
                    // On the homepage, smooth-scroll instead of navigating. Checked at
                    // click time (not render) so server/client HTML stays identical.
                    const p = window.location.pathname;
                    if (p === '/' || p === '/en') {
                      e.preventDefault();
                      scrollTo('#contact');
                    }
                  }}
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  {nav.contact.label}
                </Link>
              </li>
              <li>
                <a
                  href={CONTENT[lang].contactForm.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  {CONTENT[lang].contactForm.meetingLabel}
                </a>
              </li>
            </ul>

            <h3 className="font-serif text-lg mb-3 mt-6 text-white">{nav.resources.label}</h3>
            <ul className="space-y-2">
              {nav.resources.children?.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-lg mb-3 mt-6 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${lang}/legal/privacy`} className="text-stone-400 hover:text-white transition-colors text-sm">{content.legal.privacy}</Link>
              </li>
              <li>
                <Link to={lang === 'nl' ? '/nl/legal/voorwaarden' : '/en/legal/terms'} className="text-stone-400 hover:text-white transition-colors text-sm">{content.legal.terms}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Partners & Trust */}
        <div className="pt-8 mb-6">
          {/* Gradient accent line */}
          <div className="h-px bg-gradient-to-r from-brand-red/40 via-purple-500/20 to-brand-blue/40 mb-7" />

          {/* Partner logos row */}
          <div className="flex flex-wrap items-center gap-y-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-600 pr-6 w-full md:w-auto mb-1 md:mb-0">
              {lang === 'nl' ? 'We werken met' : 'We work with'}
            </span>
            {/* AI providers */}
            {TECH_PARTNERS.slice(0, 4).map(({ name, viewBox, path }) => (
              <div
                key={name}
                className="group flex items-center gap-2 text-stone-500 hover:text-stone-300 transition-all duration-300 pr-6"
                title={name}
              >
                <svg viewBox={viewBox} className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d={path} />
                </svg>
                <span className="text-xs font-medium">{name}</span>
              </div>
            ))}
            {/* Separator */}
            <div className="hidden md:block w-px h-4 bg-stone-700 mr-6" />
            {/* Platform & infra */}
            {TECH_PARTNERS.slice(4).map(({ name, viewBox, path }) => (
              <div
                key={name}
                className="group flex items-center gap-2 text-stone-500 hover:text-stone-300 transition-all duration-300 pr-6"
                title={name}
              >
                <svg viewBox={viewBox} className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d={path} />
                </svg>
                <span className="text-xs font-medium">{name}</span>
              </div>
            ))}
          </div>

          {/* EU Trust Badges row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* GDPR */}
            <div className="flex items-center gap-3 bg-stone-800/80 border border-stone-700/60 px-5 py-3 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <svg viewBox="0 0 810 540" className="w-7 h-5 flex-shrink-0 rounded-[2px]" aria-label="EU Flag">
                <rect width="810" height="540" fill="#003399"/>
                {EU_STARS.map((pos, i) => (
                  <polygon key={i} points={starPoints(pos.x, pos.y, 16, 7)} fill="#FFCC00"/>
                ))}
              </svg>
              <div>
                <span className="text-xs font-semibold text-stone-200 block leading-tight">
                  {lang === 'nl' ? 'AVG / GDPR-proof' : 'GDPR compliant'}
                </span>
                <span className="text-[10px] text-stone-500 leading-tight">
                  {lang === 'nl' ? 'Databescherming conform EU-recht' : 'EU data protection standards'}
                </span>
              </div>
            </div>

            {/* EU AI Act */}
            <div className="flex items-center gap-3 bg-stone-800/80 border border-stone-700/60 px-5 py-3 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <div>
                <span className="text-xs font-semibold text-stone-200 block leading-tight">
                  EU AI Act ready
                </span>
                <span className="text-[10px] text-stone-500 leading-tight">
                  {lang === 'nl' ? 'Verantwoorde AI volgens EU-richtlijnen' : 'Responsible AI per EU guidelines'}
                </span>
              </div>
            </div>

            {/* EU Hosting */}
            <div className="flex items-center gap-3 bg-stone-800/80 border border-stone-700/60 px-5 py-3 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-stone-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
              </svg>
              <div>
                <span className="text-xs font-semibold text-stone-200 block leading-tight">
                  {lang === 'nl' ? 'Europese hosting' : 'European hosting'}
                </span>
                <span className="text-[10px] text-stone-500 leading-tight">
                  {lang === 'nl' ? 'Data blijft binnen de EU' : 'Your data stays in the EU'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6">
          <div className="h-px bg-gradient-to-r from-brand-red/30 via-purple-500/15 to-brand-blue/30 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-xs text-stone-500 gap-3">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="flex items-center gap-1.5 whitespace-nowrap">
                <span>{content.copyright}</span>
                <span className="text-stone-700">|</span>
                <img src="/Flag_Groningen.svg" alt="Groningen flag" className="w-4 h-[11px] rounded-[1px] flex-shrink-0" />
                <span>{content.madeIn}</span>
              </p>
              <p className="text-[11px] text-stone-600">
                AI Heroes B.V. · Aarhusweg 4-16, 9723 JJ Groningen · KvK 42051968 · BTW NL869486263B01
              </p>
            </div>

          <div className="flex items-center gap-6 md:pt-0.5">
            <div className="flex gap-3">
              {alternateUrl ? (
                <>
                  {lang === 'nl' ? (
                    <span className="text-white font-bold">NL</span>
                  ) : (
                    <Link to={alternateUrl} className="hover:text-white transition-colors">NL</Link>
                  )}
                  <span className="text-stone-700">|</span>
                  {lang === 'en' ? (
                    <span className="text-white font-bold">EN</span>
                  ) : (
                    <Link to={alternateUrl} className="hover:text-white transition-colors">EN</Link>
                  )}
                </>
              ) : (
                <>
                  <button onClick={() => setLang?.('nl')} className={`hover:text-white transition-colors ${lang === 'nl' ? 'text-white font-bold' : ''}`}>NL</button>
                  <span className="text-stone-700">|</span>
                  <button onClick={() => setLang?.('en')} className={`hover:text-white transition-colors ${lang === 'en' ? 'text-white font-bold' : ''}`}>EN</button>
                </>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

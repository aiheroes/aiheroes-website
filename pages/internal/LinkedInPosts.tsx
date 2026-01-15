import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { ArrowLeft, Sparkles, Target, Users, Shield, Zap, BookOpen } from 'lucide-react';

// LinkedIn Post Visual Component - designed for screenshots
const LinkedInVisual: React.FC<{
  variant: 'dark' | 'light' | 'red' | 'blue';
  headline: string;
  subtext?: string;
  icon?: React.ReactNode;
  accentColor?: 'red' | 'blue';
}> = ({ variant, headline, subtext, icon, accentColor = 'red' }) => {
  const backgrounds = {
    dark: 'bg-brand-dark text-white',
    light: 'bg-brand-light text-brand-dark border border-stone-200',
    red: 'bg-brand-red text-white',
    blue: 'bg-brand-blue text-white'
  };

  const accentUnderline = accentColor === 'red'
    ? 'decoration-brand-red'
    : 'decoration-brand-blue';

  return (
    <div className={`aspect-square w-full max-w-[500px] ${backgrounds[variant]} p-8 md:p-12 flex flex-col justify-between relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Top: Logo */}
      <div className="relative z-10 flex items-center gap-3">
        <Logo className="h-10 w-10" variant={variant === 'light' ? 'square' : 'square'} />
        <span className={`text-lg font-bold ${variant === 'light' ? 'text-brand-dark' : 'text-white'}`}>
          AI Heroes
        </span>
      </div>

      {/* Middle: Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        {icon && (
          <div className={`mb-4 ${variant === 'light' ? 'text-brand-dark' : 'text-white/80'}`}>
            {icon}
          </div>
        )}
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-serif leading-tight ${variant === 'dark' ? `underline ${accentUnderline} decoration-4 underline-offset-8` : ''}`}>
          {headline}
        </h2>
        {subtext && (
          <p className={`mt-4 text-base md:text-lg ${variant === 'light' ? 'text-stone-600' : 'text-white/80'}`}>
            {subtext}
          </p>
        )}
      </div>

      {/* Bottom: Tagline */}
      <div className="relative z-10">
        <p className={`text-sm font-medium uppercase tracking-widest ${variant === 'light' ? 'text-stone-400' : 'text-white/50'}`}>
          AI werkt als je weet hoe
        </p>
      </div>
    </div>
  );
};

// Carousel/Multi-slide Visual
const LinkedInCarousel: React.FC<{
  slides: { headline: string; subtext?: string }[];
  variant?: 'dark' | 'light';
}> = ({ slides, variant = 'dark' }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-[300px] aspect-[4/5] ${variant === 'dark' ? 'bg-brand-dark text-white' : 'bg-brand-light text-brand-dark border border-stone-200'} p-6 flex flex-col justify-between`}
        >
          <div className="flex items-center justify-between">
            <Logo className="h-8 w-8" variant="square" />
            <span className={`text-xs font-bold ${variant === 'dark' ? 'text-white/50' : 'text-stone-400'}`}>
              {index + 1}/{slides.length}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-serif leading-tight mb-2">{slide.headline}</h3>
            {slide.subtext && (
              <p className={`text-sm ${variant === 'dark' ? 'text-white/70' : 'text-stone-500'}`}>
                {slide.subtext}
              </p>
            )}
          </div>
          <div className={`text-xs uppercase tracking-widest ${variant === 'dark' ? 'text-white/40' : 'text-stone-300'}`}>
            AI Heroes
          </div>
        </div>
      ))}
    </div>
  );
};

export const LinkedInPosts: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Simple Nav */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Logo className="h-8 w-8" variant="square" />
            <div>
              <span className="font-bold text-brand-dark">AI Heroes</span>
              <span className="text-stone-400 mx-2">|</span>
              <span className="text-stone-500 text-sm">Internal: LinkedIn Posts</span>
            </div>
          </div>
          <Link to="/" className="text-sm text-stone-500 hover:text-brand-dark flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 mb-12 rounded-lg">
          <h2 className="font-bold text-yellow-800 mb-2">How to use these visuals</h2>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>1. Find the visual you want to use</li>
            <li>2. Right-click and "Open image in new tab" or take a screenshot</li>
            <li>3. For best quality, screenshot the visual directly (it's sized for LinkedIn)</li>
            <li>4. Copy the suggested post text and customize as needed</li>
          </ul>
        </div>

        {/* Website Relaunch Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Website Relaunch</h2>
          <p className="text-stone-500 mb-8">Posts announcing the new website</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Post 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <LinkedInVisual
                  variant="dark"
                  headline="Nieuwe website, dezelfde missie"
                  subtext="AI werkt als je weet hoe. Ontdek onze vernieuwde aanpak."
                  accentColor="red"
                />
              </div>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Trots om onze nieuwe website te lanceren! 🚀<br /><br />
                  Sinds 2019 helpen we bedrijven verder waar ze vastlopen met AI. Nu met een frisse look die beter laat zien wat we doen:<br /><br />
                  ✅ AI Foundations - onze kernworkshop<br />
                  ✅ Opportunity Scouting - waar laat je geld liggen?<br />
                  ✅ Specialistische tracks voor developers, privacy & meer<br /><br />
                  AI werkt als je weet hoe. Benieuwd? Link in comments 👇<br /><br />
                  #AI #AITraining #DigitaleTransformatie
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <LinkedInVisual
                  variant="red"
                  headline="We've got a new look"
                  subtext="Same mission: making AI work for you."
                  icon={<Sparkles className="w-8 h-8" />}
                />
              </div>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text (English)</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Fresh website, same mission. 🎯<br /><br />
                  We've been helping companies navigate AI since 2019. Now our website finally reflects what we do.<br /><br />
                  Practical workshops. Real skills. No fluff.<br /><br />
                  Check it out: aiheroes.io<br /><br />
                  #AI #AITraining #FutureOfWork
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlight Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Service Highlights</h2>
          <p className="text-stone-500 mb-8">Posts highlighting specific services</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Foundations */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <LinkedInVisual
                  variant="dark"
                  headline="AI Foundations"
                  subtext="Onze kernworkshop. We komen langs en werken met je team tot iedereen het snapt."
                  icon={<BookOpen className="w-8 h-8" />}
                  accentColor="red"
                />
              </div>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  "Maar wat IS AI eigenlijk? En wat kan het voor ons betekenen?"<br /><br />
                  Deze vragen horen we dagelijks. Daarom ontwikkelden we AI Foundations - onze kernworkshop.<br /><br />
                  Geen slides vol buzzwords. Wel:<br />
                  → Hands-on oefeningen met echte tools<br />
                  → Afgestemd op jouw sector<br />
                  → Van basis tot direct toepasbaar<br /><br />
                  Na een middag snapt je hele team het. Gegarandeerd.<br /><br />
                  #AIWorkshop #AITraining #Teamontwikkeling
                </p>
              </div>
            </div>

            {/* Opportunity Scouting */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <LinkedInVisual
                  variant="light"
                  headline="Waar laat je geld liggen?"
                  subtext="Opportunity Scouting: we analyseren je processen en komen terug met een AI-roadmap."
                  icon={<Target className="w-8 h-8 text-brand-red" />}
                  accentColor="red"
                />
              </div>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  De meeste bedrijven weten dat AI kan helpen. Maar waar begin je?<br /><br />
                  Met Opportunity Scouting analyseren we je processen en identificeren we waar AI écht impact maakt.<br /><br />
                  Het resultaat: een concrete roadmap met:<br />
                  📊 Quick wins die direct renderen<br />
                  🎯 Strategische projecten voor de lange termijn<br />
                  💡 Prioritering op basis van ROI<br /><br />
                  Geen vage visiedocumenten. Wel een helder actieplan.<br /><br />
                  #AIStrategie #DigitaleTransformatie #Innovation
                </p>
              </div>
            </div>

            {/* Copilot Basics */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <LinkedInVisual
                  variant="blue"
                  headline="Microsoft Copilot onder de knie"
                  subtext="Van beginner naar power user in een middag."
                  icon={<Zap className="w-8 h-8" />}
                  accentColor="blue"
                />
              </div>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Je organisatie heeft Copilot licenties. Maar gebruikt iedereen het ook echt?<br /><br />
                  In onze Copilot Basics workshop leren we je team:<br /><br />
                  📝 Copilot in Word - documenten in minuten<br />
                  📊 Copilot in Excel - data-analyse zonder formules<br />
                  📧 Copilot in Outlook - inbox zero wordt haalbaar<br />
                  👥 Copilot in Teams - nooit meer notulen missen<br /><br />
                  3-4 uur, hands-on, direct toepasbaar.<br /><br />
                  #MicrosoftCopilot #Microsoft365 #Productiviteit
                </p>
              </div>
            </div>

            {/* AI Privacy & Security */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <LinkedInVisual
                  variant="dark"
                  headline="AI zonder risico's"
                  subtext="Privacy, security & compliance voor AI-gebruik in je organisatie."
                  icon={<Shield className="w-8 h-8" />}
                  accentColor="blue"
                />
              </div>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  "Mogen we dit wel in ChatGPT stoppen?"<br /><br />
                  Terechte vraag. AI-tools zijn krachtig, maar niet zonder risico's.<br /><br />
                  In onze AI Privacy & Security workshop behandelen we:<br /><br />
                  🔒 Wat je wel en niet kunt delen met AI-tools<br />
                  📋 AVG/GDPR compliance bij AI-gebruik<br />
                  🏢 Enterprise vs. consumer versies<br />
                  ✅ Richtlijnen voor veilig AI-gebruik<br /><br />
                  Zodat je team met vertrouwen aan de slag kan.<br /><br />
                  #AIPrivacy #GDPR #AIGovernance
                </p>
              </div>
            </div>

            {/* Team/About */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <LinkedInVisual
                  variant="light"
                  headline="Frans, Jan & David"
                  subtext="Sinds 2019 helpen we bedrijven verder waar ze vastlopen met AI."
                  icon={<Users className="w-8 h-8 text-brand-dark" />}
                />
              </div>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Wij zijn AI Heroes. Drie mensen met één missie: AI begrijpelijk maken.<br /><br />
                  Geen consultants die alleen rapporten schrijven. Wij gaan de werkvloer op en zorgen dat je team écht met AI aan de slag kan.<br /><br />
                  Van startups tot multinationals - we passen ons aan aan jouw context.<br /><br />
                  Want een marketingteam heeft andere vragen dan een IT-afdeling. En een gemeente werkt anders dan een startup.<br /><br />
                  Benieuwd wat we voor jou kunnen betekenen?<br /><br />
                  #AI #AIHeroes #TeamIntro
                </p>
              </div>
            </div>

            {/* Quote/Testimonial style */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <div className="aspect-square w-full max-w-[500px] bg-brand-dark text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                  <Logo className="h-10 w-10" variant="square" />
                  <div>
                    <p className="text-2xl md:text-3xl font-serif leading-tight italic mb-6">
                      "Frans heeft ons een fantastische workshop gegeven waar we met de theorie en de praktijk aan de slag zijn gegaan."
                    </p>
                    <div>
                      <p className="font-bold">Bobby Kremer</p>
                      <p className="text-white/60 text-sm">Nationale Postcode Loterij</p>
                    </div>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/40">
                    AI Heroes
                  </div>
                </div>
              </div>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Dit soort feedback maakt ons werk zo leuk.<br /><br />
                  We geven geen standaard PowerPoint-presentaties. We gaan met je team aan de slag tot iedereen het snapt.<br /><br />
                  Theorie én praktijk. Vragen stellen mag. Hands-on oefenen is de norm.<br /><br />
                  Bedankt Bobby en team! 🙏<br /><br />
                  #Klantreview #AIWorkshop #TrainingDieWerkt
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Carousel Posts</h2>
          <p className="text-stone-500 mb-8">Multi-slide posts for more engagement</p>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm font-bold text-brand-dark mb-4">5 AI-tips voor je werkdag</p>
            <LinkedInCarousel
              slides={[
                { headline: "5 AI-tips voor je werkdag", subtext: "Swipe voor praktische tips →" },
                { headline: "1. Begin met één tool", subtext: "Kies één AI-tool en word er goed in. Beter dan 5 tools half gebruiken." },
                { headline: "2. Wees specifiek", subtext: "Hoe specifieker je vraag, hoe beter het antwoord. Context is alles." },
                { headline: "3. Itereer", subtext: "Het eerste antwoord is zelden het beste. Vraag door, verfijn, verbeter." },
                { headline: "4. Check altijd", subtext: "AI maakt fouten. Controleer feiten, cijfers en bronnen." },
                { headline: "5. Deel je learnings", subtext: "Wat werkt voor jou? Deel het met je team. Samen leer je sneller." },
              ]}
              variant="dark"
            />
            <div className="border-t border-stone-100 pt-4 mt-6">
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Suggested post text</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                5 AI-tips die je vandaag nog kunt toepassen 👆<br /><br />
                Swipe door voor praktische tips om meer uit AI te halen.<br /><br />
                Welke tip ga jij als eerste proberen?<br /><br />
                #AITips #Productiviteit #AIWerkt
              </p>
            </div>
          </div>
        </section>

        {/* Quick Visual Templates */}
        <section>
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Quick Templates</h2>
          <p className="text-stone-500 mb-8">Generic visuals for various posts</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <LinkedInVisual variant="dark" headline="Coming soon" />
            <LinkedInVisual variant="red" headline="Tip van de dag" />
            <LinkedInVisual variant="blue" headline="Wist je dat...?" />
            <LinkedInVisual variant="light" headline="Workshop alert" />
          </div>
        </section>
      </main>
    </div>
  );
};

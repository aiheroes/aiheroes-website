import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
import { HomePage } from './pages/HomePage';

// Dutch Service Pages
import { AIFoundationsNL } from './pages/nl/diensten/AIFoundations';
import { OpportunityScoutingNL } from './pages/nl/diensten/OpportunityScouting';
import { CopilotBasicsNL } from './pages/nl/diensten/CopilotBasics';
import { AIVoorDevelopersNL } from './pages/nl/diensten/AIVoorDevelopers';
import { AIPrivacySecurityNL } from './pages/nl/diensten/AIPrivacySecurity';
import { AIMediaLiteracyNL } from './pages/nl/diensten/AIMediaLiteracy';

// English Service Pages
import { AIFoundationsEN } from './pages/en/services/AIFoundations';
import { OpportunityScoutingEN } from './pages/en/services/OpportunityScouting';
import { CopilotBasicsEN } from './pages/en/services/CopilotBasics';
import { AIForDevelopersEN } from './pages/en/services/AIForDevelopers';
import { AIPrivacySecurityEN } from './pages/en/services/AIPrivacySecurity';
import { AIMediaLiteracyEN } from './pages/en/services/AIMediaLiteracy';

// Dutch About Pages
import { AanpakNL } from './pages/nl/over-ons/Aanpak';
import { TeamNL } from './pages/nl/over-ons/Team';

// English About Pages
import { ApproachEN } from './pages/en/about/Approach';
import { TeamEN } from './pages/en/about/Team';

// Dutch Resource Pages
import { AIGeletterdheidNL } from './pages/nl/resources/AIGeletterdheid';
import { AIStrategieGidsNL } from './pages/nl/resources/AIStrategieGids';

// English Resource Pages
import { AILiteracyEN } from './pages/en/resources/AILiteracy';
import { AIStrategyGuideEN } from './pages/en/resources/AIStrategyGuide';

// Dutch Case Study Pages
import { MeduxNL } from './pages/nl/cases/Medux';
import { OLXNL } from './pages/nl/cases/OLX';
import { TrabuNL } from './pages/nl/cases/Trabu';
import { InnoEnergyNL } from './pages/nl/cases/InnoEnergy';

// English Case Study Pages
import { MeduxEN } from './pages/en/cases/Medux';
import { OLXEN } from './pages/en/cases/OLX';
import { TrabuEN } from './pages/en/cases/Trabu';
import { InnoEnergyEN } from './pages/en/cases/InnoEnergy';

// Dutch Legal Pages
import { PrivacyNL } from './pages/nl/legal/Privacy';
import { VoorwaardenNL } from './pages/nl/legal/Voorwaarden';

// English Legal Pages
import { PrivacyEN } from './pages/en/legal/Privacy';
import { TermsEN } from './pages/en/legal/Terms';

// Press/Media Pages
import { PersNL } from './pages/nl/Pers';
import { PressEN } from './pages/en/Press';

// Internal Pages (hidden from public navigation)
import { LinkedInPosts } from './pages/internal/LinkedInPosts';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Homepage with dynamic language switching */}
        <Route path="/" element={<HomePage />} />

        {/* Dutch Service Pages */}
        <Route path="/nl/diensten/ai-foundations" element={<AIFoundationsNL />} />
        <Route path="/nl/diensten/opportunity-scouting" element={<OpportunityScoutingNL />} />
        <Route path="/nl/diensten/copilot-basics" element={<CopilotBasicsNL />} />
        <Route path="/nl/diensten/ai-voor-developers" element={<AIVoorDevelopersNL />} />
        <Route path="/nl/diensten/ai-privacy-security" element={<AIPrivacySecurityNL />} />
        <Route path="/nl/diensten/ai-media-literacy" element={<AIMediaLiteracyNL />} />

        {/* English Service Pages */}
        <Route path="/en/services/ai-foundations" element={<AIFoundationsEN />} />
        <Route path="/en/services/opportunity-scouting" element={<OpportunityScoutingEN />} />
        <Route path="/en/services/copilot-basics" element={<CopilotBasicsEN />} />
        <Route path="/en/services/ai-for-developers" element={<AIForDevelopersEN />} />
        <Route path="/en/services/ai-privacy-security" element={<AIPrivacySecurityEN />} />
        <Route path="/en/services/ai-media-literacy" element={<AIMediaLiteracyEN />} />

        {/* Dutch About Pages */}
        <Route path="/nl/over-ons/aanpak" element={<AanpakNL />} />
        <Route path="/nl/over-ons/team" element={<TeamNL />} />

        {/* English About Pages */}
        <Route path="/en/about/approach" element={<ApproachEN />} />
        <Route path="/en/about/team" element={<TeamEN />} />

        {/* Dutch Resource Pages */}
        <Route path="/nl/resources/ai-geletterdheid" element={<AIGeletterdheidNL />} />
        <Route path="/nl/resources/ai-strategie-gids" element={<AIStrategieGidsNL />} />

        {/* English Resource Pages */}
        <Route path="/en/resources/ai-literacy" element={<AILiteracyEN />} />
        <Route path="/en/resources/ai-strategy-guide" element={<AIStrategyGuideEN />} />

        {/* Dutch Case Study Pages */}
        <Route path="/nl/cases/medux" element={<MeduxNL />} />
        <Route path="/nl/cases/olx" element={<OLXNL />} />
        <Route path="/nl/cases/trabu" element={<TrabuNL />} />
        <Route path="/nl/cases/innoenergy" element={<InnoEnergyNL />} />

        {/* English Case Study Pages */}
        <Route path="/en/cases/medux" element={<MeduxEN />} />
        <Route path="/en/cases/olx" element={<OLXEN />} />
        <Route path="/en/cases/trabu" element={<TrabuEN />} />
        <Route path="/en/cases/innoenergy" element={<InnoEnergyEN />} />

        {/* Dutch Legal Pages */}
        <Route path="/nl/legal/privacy" element={<PrivacyNL />} />
        <Route path="/nl/legal/voorwaarden" element={<VoorwaardenNL />} />

        {/* English Legal Pages */}
        <Route path="/en/legal/privacy" element={<PrivacyEN />} />
        <Route path="/en/legal/terms" element={<TermsEN />} />

        {/* Press/Media Pages */}
        <Route path="/nl/pers" element={<PersNL />} />
        <Route path="/en/press" element={<PressEN />} />

        {/* Internal Pages (hidden from public navigation) */}
        <Route path="/internal/linkedin-posts" element={<LinkedInPosts />} />

        {/* Fallback to homepage */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

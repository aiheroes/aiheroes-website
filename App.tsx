import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

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

// HomePage is eagerly loaded (critical for initial render)
import { HomePage } from './pages/HomePage';
import { Hanze } from './pages/Hanze';
import { ContactRedirect } from './components/ContactRedirect';

// All other pages are lazily loaded
const AIFoundationsNL = React.lazy(() => import('./pages/nl/diensten/AIFoundations').then(m => ({ default: m.AIFoundationsNL })));
const OpportunityScoutingNL = React.lazy(() => import('./pages/nl/diensten/OpportunityScouting').then(m => ({ default: m.OpportunityScoutingNL })));
const CopilotBasicsNL = React.lazy(() => import('./pages/nl/diensten/CopilotBasics').then(m => ({ default: m.CopilotBasicsNL })));
const AIVoorDevelopersNL = React.lazy(() => import('./pages/nl/diensten/AIVoorDevelopers').then(m => ({ default: m.AIVoorDevelopersNL })));
const AIPrivacySecurityNL = React.lazy(() => import('./pages/nl/diensten/AIPrivacySecurity').then(m => ({ default: m.AIPrivacySecurityNL })));
const AIMediaLiteracyNL = React.lazy(() => import('./pages/nl/diensten/AIMediaLiteracy').then(m => ({ default: m.AIMediaLiteracyNL })));
const AIReadinessScanNL = React.lazy(() => import('./pages/nl/diensten/AIReadinessScan').then(m => ({ default: m.AIReadinessScanNL })));
const AIRoadmapNL = React.lazy(() => import('./pages/nl/diensten/AIRoadmap').then(m => ({ default: m.AIRoadmapNL })));
const MaatwerkAIOplossigenNL = React.lazy(() => import('./pages/nl/diensten/MaatwerkAIOplossingen').then(m => ({ default: m.MaatwerkAIOplossigenNL })));
const DigitaleOnafhankelijkheidNL = React.lazy(() => import('./pages/nl/diensten/DigitaleOnafhankelijkheid').then(m => ({ default: m.DigitaleOnafhankelijkheidNL })));
const EUTrainingNL = React.lazy(() => import('./pages/nl/diensten/EUTraining').then(m => ({ default: m.EUTrainingNL })));
const EUConsultancyNL = React.lazy(() => import('./pages/nl/diensten/EUConsultancy').then(m => ({ default: m.EUConsultancyNL })));
const EUDevelopmentNL = React.lazy(() => import('./pages/nl/diensten/EUDevelopment').then(m => ({ default: m.EUDevelopmentNL })));
const BusinessCaseDevelopmentNL = React.lazy(() => import('./pages/nl/diensten/BusinessCaseDevelopment').then(m => ({ default: m.BusinessCaseDevelopmentNL })));
const AIImplementatiebegeleidingNL = React.lazy(() => import('./pages/nl/diensten/AIImplementatiebegeleiding').then(m => ({ default: m.AIImplementatiebegeleidingNL })));
const ProcesanalyseNL = React.lazy(() => import('./pages/nl/diensten/Procesanalyse').then(m => ({ default: m.ProcesanalyseNL })));
const AIPrototypingNL = React.lazy(() => import('./pages/nl/diensten/AIPrototyping').then(m => ({ default: m.AIPrototypingNL })));
const AIIntegratieNL = React.lazy(() => import('./pages/nl/diensten/AIIntegratie').then(m => ({ default: m.AIIntegratieNL })));
const AIDevelopmentTeamsNL = React.lazy(() => import('./pages/nl/diensten/AIDevelopmentTeams').then(m => ({ default: m.AIDevelopmentTeamsNL })));
const DigitalTwinsNL = React.lazy(() => import('./pages/nl/diensten/DigitalTwins').then(m => ({ default: m.DigitalTwinsNL })));
const AIBureauNederlandNL = React.lazy(() => import('./pages/nl/diensten/AIBureauNederland').then(m => ({ default: m.AIBureauNederlandNL })));

const DienstenNL = React.lazy(() => import('./pages/nl/Diensten').then(m => ({ default: m.DienstenNL })));
const ServicesEN = React.lazy(() => import('./pages/en/Services').then(m => ({ default: m.ServicesEN })));

const AIFoundationsEN = React.lazy(() => import('./pages/en/services/AIFoundations').then(m => ({ default: m.AIFoundationsEN })));
const OpportunityScoutingEN = React.lazy(() => import('./pages/en/services/OpportunityScouting').then(m => ({ default: m.OpportunityScoutingEN })));
const CopilotBasicsEN = React.lazy(() => import('./pages/en/services/CopilotBasics').then(m => ({ default: m.CopilotBasicsEN })));
const AIForDevelopersEN = React.lazy(() => import('./pages/en/services/AIForDevelopers').then(m => ({ default: m.AIForDevelopersEN })));
const AIPrivacySecurityEN = React.lazy(() => import('./pages/en/services/AIPrivacySecurity').then(m => ({ default: m.AIPrivacySecurityEN })));
const AIMediaLiteracyEN = React.lazy(() => import('./pages/en/services/AIMediaLiteracy').then(m => ({ default: m.AIMediaLiteracyEN })));
const AIReadinessScanEN = React.lazy(() => import('./pages/en/services/AIReadinessScan').then(m => ({ default: m.AIReadinessScanEN })));
const AIRoadmapEN = React.lazy(() => import('./pages/en/services/AIRoadmap').then(m => ({ default: m.AIRoadmapEN })));
const CustomAISolutionsEN = React.lazy(() => import('./pages/en/services/CustomAISolutions').then(m => ({ default: m.CustomAISolutionsEN })));
const DigitalIndependenceEN = React.lazy(() => import('./pages/en/services/DigitalIndependence').then(m => ({ default: m.DigitalIndependenceEN })));
const EUTrainingEN = React.lazy(() => import('./pages/en/services/EUTraining').then(m => ({ default: m.EUTrainingEN })));
const EUConsultancyEN = React.lazy(() => import('./pages/en/services/EUConsultancy').then(m => ({ default: m.EUConsultancyEN })));
const EUDevelopmentEN = React.lazy(() => import('./pages/en/services/EUDevelopment').then(m => ({ default: m.EUDevelopmentEN })));
const BusinessCaseDevelopmentEN = React.lazy(() => import('./pages/en/services/BusinessCaseDevelopment').then(m => ({ default: m.BusinessCaseDevelopmentEN })));
const AIImplementationGuidanceEN = React.lazy(() => import('./pages/en/services/AIImplementationGuidance').then(m => ({ default: m.AIImplementationGuidanceEN })));
const ProcessAnalysisEN = React.lazy(() => import('./pages/en/services/ProcessAnalysis').then(m => ({ default: m.ProcessAnalysisEN })));
const AIPrototypingEN = React.lazy(() => import('./pages/en/services/AIPrototyping').then(m => ({ default: m.AIPrototypingEN })));
const AIIntegrationEN = React.lazy(() => import('./pages/en/services/AIIntegration').then(m => ({ default: m.AIIntegrationEN })));
const AIDevelopmentTeamsEN = React.lazy(() => import('./pages/en/services/AIDevelopmentTeams').then(m => ({ default: m.AIDevelopmentTeamsEN })));
const DigitalTwinsEN = React.lazy(() => import('./pages/en/services/DigitalTwins').then(m => ({ default: m.DigitalTwinsEN })));
const AIAgencyNetherlandsEN = React.lazy(() => import('./pages/en/services/AIAgencyNetherlands').then(m => ({ default: m.AIAgencyNetherlandsEN })));

const OverOnsNL = React.lazy(() => import('./pages/nl/OverOns').then(m => ({ default: m.OverOnsNL })));
const AanpakNL = React.lazy(() => import('./pages/nl/over-ons/Aanpak').then(m => ({ default: m.AanpakNL })));
const TeamNL = React.lazy(() => import('./pages/nl/over-ons/Team').then(m => ({ default: m.TeamNL })));

const AboutEN = React.lazy(() => import('./pages/en/About').then(m => ({ default: m.AboutEN })));
const ApproachEN = React.lazy(() => import('./pages/en/about/Approach').then(m => ({ default: m.ApproachEN })));
const TeamEN = React.lazy(() => import('./pages/en/about/Team').then(m => ({ default: m.TeamEN })));

const ResourcesNL = React.lazy(() => import('./pages/nl/Resources').then(m => ({ default: m.ResourcesNL })));
const AIGeletterdheidNL = React.lazy(() => import('./pages/nl/resources/AIGeletterdheid').then(m => ({ default: m.AIGeletterdheidNL })));
const AIStrategieGidsNL = React.lazy(() => import('./pages/nl/resources/AIStrategieGids').then(m => ({ default: m.AIStrategieGidsNL })));

const ResourcesPageEN = React.lazy(() => import('./pages/en/ResourcesPage').then(m => ({ default: m.ResourcesPageEN })));
const AILiteracyEN = React.lazy(() => import('./pages/en/resources/AILiteracy').then(m => ({ default: m.AILiteracyEN })));
const AIStrategyGuideEN = React.lazy(() => import('./pages/en/resources/AIStrategyGuide').then(m => ({ default: m.AIStrategyGuideEN })));

const MeduxNL = React.lazy(() => import('./pages/nl/cases/Medux').then(m => ({ default: m.MeduxNL })));
const OLXNL = React.lazy(() => import('./pages/nl/cases/OLX').then(m => ({ default: m.OLXNL })));
const TrabuNL = React.lazy(() => import('./pages/nl/cases/Trabu').then(m => ({ default: m.TrabuNL })));
const InnoEnergyNL = React.lazy(() => import('./pages/nl/cases/InnoEnergy').then(m => ({ default: m.InnoEnergyNL })));

const MeduxEN = React.lazy(() => import('./pages/en/cases/Medux').then(m => ({ default: m.MeduxEN })));
const OLXEN = React.lazy(() => import('./pages/en/cases/OLX').then(m => ({ default: m.OLXEN })));
const TrabuEN = React.lazy(() => import('./pages/en/cases/Trabu').then(m => ({ default: m.TrabuEN })));
const InnoEnergyEN = React.lazy(() => import('./pages/en/cases/InnoEnergy').then(m => ({ default: m.InnoEnergyEN })));

const PrivacyNL = React.lazy(() => import('./pages/nl/legal/Privacy').then(m => ({ default: m.PrivacyNL })));
const VoorwaardenNL = React.lazy(() => import('./pages/nl/legal/Voorwaarden').then(m => ({ default: m.VoorwaardenNL })));

const PrivacyEN = React.lazy(() => import('./pages/en/legal/Privacy').then(m => ({ default: m.PrivacyEN })));
const TermsEN = React.lazy(() => import('./pages/en/legal/Terms').then(m => ({ default: m.TermsEN })));

const PersNL = React.lazy(() => import('./pages/nl/Pers').then(m => ({ default: m.PersNL })));
const PressEN = React.lazy(() => import('./pages/en/Press').then(m => ({ default: m.PressEN })));

const VacaturesNL = React.lazy(() => import('./pages/nl/Vacatures').then(m => ({ default: m.VacaturesNL })));
const CareersEN = React.lazy(() => import('./pages/en/Careers').then(m => ({ default: m.CareersEN })));
const JobDetailPage = React.lazy(() => import('./pages/JobDetailPage').then(m => ({ default: m.JobDetailPage })));

const MenuNL = React.lazy(() => import('./pages/nl/Menu').then(m => ({ default: m.MenuNL })));

const AISalonPage = React.lazy(() => import('./pages/AISalonPage').then(m => ({ default: m.AISalonPage })));

const BarePathRedirect = React.lazy(() => import('./components/BarePathRedirect').then(m => ({ default: m.BarePathRedirect })));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          {/* Homepage - Dutch default */}
          <Route path="/" element={<HomePage defaultLang="nl" />} />
          {/* Homepage - English */}
          <Route path="/en" element={<HomePage defaultLang="en" />} />

          {/* Services Overview Pages */}
          <Route path="/nl/diensten" element={<DienstenNL />} />
          <Route path="/en/services" element={<ServicesEN />} />

          {/* Dutch Service Pages */}
          <Route path="/nl/diensten/ai-foundations" element={<AIFoundationsNL />} />
          <Route path="/nl/diensten/opportunity-scouting" element={<OpportunityScoutingNL />} />
          <Route path="/nl/diensten/copilot-basics" element={<CopilotBasicsNL />} />
          <Route path="/nl/diensten/ai-voor-developers" element={<AIVoorDevelopersNL />} />
          <Route path="/nl/diensten/ai-privacy-security" element={<AIPrivacySecurityNL />} />
          <Route path="/nl/diensten/ai-media-literacy" element={<AIMediaLiteracyNL />} />
          <Route path="/nl/diensten/ai-readiness-scan" element={<AIReadinessScanNL />} />
          <Route path="/nl/diensten/ai-roadmap" element={<AIRoadmapNL />} />
          <Route path="/nl/diensten/maatwerk-ai-oplossingen" element={<MaatwerkAIOplossigenNL />} />
          <Route path="/nl/diensten/digitale-onafhankelijkheid" element={<DigitaleOnafhankelijkheidNL />} />
          <Route path="/nl/diensten/eu-training" element={<EUTrainingNL />} />
          <Route path="/nl/diensten/eu-consultancy" element={<EUConsultancyNL />} />
          <Route path="/nl/diensten/eu-development" element={<EUDevelopmentNL />} />
          <Route path="/nl/diensten/business-case-development" element={<BusinessCaseDevelopmentNL />} />
          <Route path="/nl/diensten/ai-implementatiebegeleiding" element={<AIImplementatiebegeleidingNL />} />
          <Route path="/nl/diensten/procesanalyse" element={<ProcesanalyseNL />} />
          <Route path="/nl/diensten/ai-prototyping" element={<AIPrototypingNL />} />
          <Route path="/nl/diensten/ai-integratie" element={<AIIntegratieNL />} />
          <Route path="/nl/diensten/ai-development-teams" element={<AIDevelopmentTeamsNL />} />
          <Route path="/nl/diensten/digital-twins" element={<DigitalTwinsNL />} />
          <Route path="/nl/diensten/ai-bureau-nederland" element={<AIBureauNederlandNL />} />

          {/* English Service Pages */}
          <Route path="/en/services/ai-foundations" element={<AIFoundationsEN />} />
          <Route path="/en/services/opportunity-scouting" element={<OpportunityScoutingEN />} />
          <Route path="/en/services/copilot-basics" element={<CopilotBasicsEN />} />
          <Route path="/en/services/ai-for-developers" element={<AIForDevelopersEN />} />
          <Route path="/en/services/ai-privacy-security" element={<AIPrivacySecurityEN />} />
          <Route path="/en/services/ai-media-literacy" element={<AIMediaLiteracyEN />} />
          <Route path="/en/services/ai-readiness-scan" element={<AIReadinessScanEN />} />
          <Route path="/en/services/ai-roadmap" element={<AIRoadmapEN />} />
          <Route path="/en/services/custom-ai-solutions" element={<CustomAISolutionsEN />} />
          <Route path="/en/services/digital-independence" element={<DigitalIndependenceEN />} />
          <Route path="/en/services/eu-training" element={<EUTrainingEN />} />
          <Route path="/en/services/eu-consultancy" element={<EUConsultancyEN />} />
          <Route path="/en/services/eu-development" element={<EUDevelopmentEN />} />
          <Route path="/en/services/business-case-development" element={<BusinessCaseDevelopmentEN />} />
          <Route path="/en/services/ai-implementation-guidance" element={<AIImplementationGuidanceEN />} />
          <Route path="/en/services/process-analysis" element={<ProcessAnalysisEN />} />
          <Route path="/en/services/ai-prototyping" element={<AIPrototypingEN />} />
          <Route path="/en/services/ai-integration" element={<AIIntegrationEN />} />
          <Route path="/en/services/ai-development-teams" element={<AIDevelopmentTeamsEN />} />
          <Route path="/en/services/digital-twins" element={<DigitalTwinsEN />} />
          <Route path="/en/services/ai-agency-netherlands" element={<AIAgencyNetherlandsEN />} />

          {/* Dutch About Pages */}
          <Route path="/nl/over-ons" element={<OverOnsNL />} />
          <Route path="/nl/over-ons/aanpak" element={<AanpakNL />} />
          <Route path="/nl/over-ons/team" element={<TeamNL />} />

          {/* English About Pages */}
          <Route path="/en/about" element={<AboutEN />} />
          <Route path="/en/about/approach" element={<ApproachEN />} />
          <Route path="/en/about/team" element={<TeamEN />} />

          {/* Dutch Resource Pages */}
          <Route path="/nl/resources" element={<ResourcesNL />} />
          <Route path="/nl/resources/ai-geletterdheid" element={<AIGeletterdheidNL />} />
          <Route path="/nl/resources/ai-strategie-gids" element={<AIStrategieGidsNL />} />

          {/* English Resource Pages */}
          <Route path="/en/resources" element={<ResourcesPageEN />} />
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

          {/* Careers Pages */}
          <Route path="/nl/vacatures" element={<VacaturesNL />} />
          <Route path="/en/careers" element={<CareersEN />} />
          <Route path="/nl/vacatures/:slug" element={<JobDetailPage lang="nl" />} />
          <Route path="/en/careers/:slug" element={<JobDetailPage lang="en" />} />

          {/* Partner Menu (reseller-facing, noindex) */}
          <Route path="/nl/menu" element={<MenuNL />} />

          {/* AI Salon Event Pages */}
          <Route path="/nl/ai-salon" element={<AISalonPage lang="nl" />} />
          <Route path="/en/ai-salon" element={<AISalonPage lang="en" />} />

          {/* Hanze Workshop Page */}
          <Route path="/hanze" element={<Hanze />} />

          {/* Contact is the #contact section on the homepage, not a standalone page */}
          <Route path="/contact" element={<ContactRedirect />} />
          <Route path="/nl/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/en/contact" element={<Navigate to="/en#contact" replace />} />

          {/* Prefix-less URLs redirect to the right language; genuine 404s fall through */}
          <Route path="*" element={<BarePathRedirect />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

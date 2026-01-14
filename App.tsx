import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

// Dutch Service Pages
import { AIFoundationsNL } from './pages/nl/diensten/AIFoundations';
import { OpportunityScoutingNL } from './pages/nl/diensten/OpportunityScouting';
import { ChatGPTBasicsNL } from './pages/nl/diensten/ChatGPTBasics';
import { AIVoorDevelopersNL } from './pages/nl/diensten/AIVoorDevelopers';
import { AIPrivacySecurityNL } from './pages/nl/diensten/AIPrivacySecurity';
import { AIMediaLiteracyNL } from './pages/nl/diensten/AIMediaLiteracy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage with dynamic language switching */}
        <Route path="/" element={<HomePage />} />

        {/* Dutch Service Pages */}
        <Route path="/nl/diensten/ai-foundations" element={<AIFoundationsNL />} />
        <Route path="/nl/diensten/opportunity-scouting" element={<OpportunityScoutingNL />} />
        <Route path="/nl/diensten/chatgpt-basics" element={<ChatGPTBasicsNL />} />
        <Route path="/nl/diensten/ai-voor-developers" element={<AIVoorDevelopersNL />} />
        <Route path="/nl/diensten/ai-privacy-security" element={<AIPrivacySecurityNL />} />
        <Route path="/nl/diensten/ai-media-literacy" element={<AIMediaLiteracyNL />} />

        {/* English Service Pages - Placeholder routes for now */}
        <Route path="/en/services/ai-foundations" element={<div>AI Foundations EN - Coming Soon</div>} />
        <Route path="/en/services/opportunity-scouting" element={<div>Opportunity Scouting EN - Coming Soon</div>} />
        <Route path="/en/services/chatgpt-basics" element={<div>ChatGPT Basics EN - Coming Soon</div>} />
        <Route path="/en/services/ai-for-developers" element={<div>AI for Developers EN - Coming Soon</div>} />
        <Route path="/en/services/ai-privacy-security" element={<div>AI Privacy & Security EN - Coming Soon</div>} />
        <Route path="/en/services/ai-media-literacy" element={<div>AI Media Literacy EN - Coming Soon</div>} />

        {/* Fallback to homepage */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

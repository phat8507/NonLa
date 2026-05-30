import React, { Suspense, lazy } from 'react';
import StickyNav from './components/StickyNav';
import FloatingElements from './components/FloatingElements';

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero'));
const ExecutiveSummary = lazy(() => import('./sections/ExecutiveSummary'));
const MarketResearch = lazy(() => import('./sections/MarketResearch'));
const BrandUnderstanding = lazy(() => import('./sections/BrandUnderstanding'));
const CompetitorLandscape = lazy(() => import('./sections/CompetitorLandscape'));
const TargetAudience = lazy(() => import('./sections/TargetAudience'));
const CustomerJourney = lazy(() => import('./sections/CustomerJourney'));
const Insight = lazy(() => import('./sections/Insight'));
const BigIdea = lazy(() => import('./sections/BigIdea'));
const StrategicApproach = lazy(() => import('./sections/StrategicApproach'));
const IMCPlan = lazy(() => import('./sections/IMCPlan'));
const RevenueModel = lazy(() => import('./sections/RevenueModel'));
const RiskMitigation = lazy(() => import('./sections/RiskMitigation'));
const Closing = lazy(() => import('./sections/Closing'));

// Loading fallback
const SectionLoader = () => (
  <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#0A1628]">
    <div className="w-12 h-12 non-la bg-[#F4B400] animate-pulse"></div>
  </div>
);

function App() {
  return (
    <div className="relative w-full overflow-x-hidden text-white font-jakarta">
      {/* Global Navigation */}
      <StickyNav />
      
      {/* Global Background Elements */}
      <FloatingElements count={25} dark={true} />

      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
          <ExecutiveSummary />
          <MarketResearch />
          <BrandUnderstanding />
          <CompetitorLandscape />
          <TargetAudience />
          <CustomerJourney />
          <Insight />
          <BigIdea />
          <StrategicApproach />
          <IMCPlan />
          <RevenueModel />
          <RiskMitigation />
          <Closing />
        </Suspense>
      </main>
    </div>
  );
}

export default App;

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

const SectionLoader = () => (
  <div className="flex min-h-[50vh] w-full items-center justify-center bg-[#0A1628]">
    <div className="non-la h-12 w-12 animate-pulse bg-[#F4B400]" />
  </div>
);

function App() {
  return (
    <div className="relative w-full overflow-x-hidden font-jakarta text-white">
      <StickyNav />

      <FloatingElements count={10} dark={true} />

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

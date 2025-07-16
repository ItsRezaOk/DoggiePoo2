import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ComicStrip from './components/ComicStrip';
import HowItWorks from './components/HowItWorks';
import InteractivePricing from './components/InteractivePricing';
import ServiceCards from './components/ServiceCards';
import DeluxeSpotlight from './components/DeluxeSpotlight';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import CustomerLove from './components/CustomerLove';
import OnboardingWizard from './components/OnboardingWizard';
import ReferralRewards from './components/ReferralRewards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import UrgencyRibbon from './components/UrgencyRibbon';
import ExitIntentPopup from './components/ExitIntentPopup';
import PawCursor from './components/PawCursor';
import NavTabs from './components/NavTabs';
import About from './components/About';

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showPawCursor, setShowPawCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 50) {
        setShowExitPopup(true);
      }
    };

    const handleMouseEnter = () => setShowPawCursor(true);
    const handleMouseLeave = () => setShowPawCursor(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F2] relative overflow-x-hidden">
      {showPawCursor && <PawCursor />}
      <UrgencyRibbon />
      <NavTabs />
      <Hero />
      <About />
      <ComicStrip />
      <HowItWorks />
      <InteractivePricing />
      <ServiceCards />
      <DeluxeSpotlight />
      <BeforeAfterGallery />
      <CustomerLove />
      <OnboardingWizard />
      <ReferralRewards />
      <FAQ />
      <Footer />
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}
    </div>
  );
}

export default App;
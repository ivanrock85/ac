import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FleetSection } from './components/FleetSection';
import { ScenariosSection } from './components/ScenariosSection';
import { StatsSection } from './components/StatsSection';
import { RoutesSection } from './components/RoutesSection';
import { CasesSection } from './components/CasesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <FleetSection />
        <ScenariosSection />
        <StatsSection />
        <RoutesSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
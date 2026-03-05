import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Phase 3 components
import Services from './components/Services';
import About from './components/About';
import ManagementTeam from './components/ManagementTeam';
import ImpactGallery from './components/ImpactGallery';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container flex-column">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <ManagementTeam />
        <ImpactGallery />
        <TrustSignals />
      </main>

      <Footer />
    </div>
  );
}

export default App;

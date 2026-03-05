import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Scroll to the top on page load/refresh
    window.scrollTo(0, 0);

    // Once the page is loaded, clear the section hash (e.g. #about) 
    // from the URL so that subsequent refreshes stay at the top.
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

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

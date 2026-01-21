
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';
import RebateCalculator from './components/RebateCalculator';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import StickyEmergencyBar from './components/StickyEmergencyBar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'story', 'services', 'gallery', 'rebates', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen mesh-bg selection:bg-orange-500/30">
      <StickyEmergencyBar />
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="story" className="py-24 px-6 md:px-12 lg:px-24">
          <Story />
        </section>

        <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-black/20">
          <Services />
        </section>

        <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24">
          <ProjectGallery />
        </section>

        <section id="rebates" className="py-24 px-6 md:px-12 lg:px-24 bg-orange-600/5">
          <RebateCalculator />
        </section>

        <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24 bg-black/20">
          <Testimonials />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
          <Footer />
        </section>
      </main>

      <AIChat />
    </div>
  );
};

export default App;

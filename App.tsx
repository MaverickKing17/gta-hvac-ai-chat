
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';
import RebateCalculator from './components/RebateCalculator';
import Testimonials from './components/Testimonials';
import ServiceAreaMap from './components/ServiceAreaMap';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import StickyEmergencyBar from './components/StickyEmergencyBar';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update Active Section
      const sections = ['hero', 'story', 'services', 'gallery', 'rebates', 'testimonials', 'map', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }

      // Update Scroll Progress & Visibility
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Global Tech Texture Overlay to prevent "blankness" */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
      
      <StickyEmergencyBar />
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="hero" className="border-b border-slate-100">
          <Hero />
        </section>
        
        <section id="story" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50/50">
          <Story />
        </section>

        <section id="services" className="py-20 px-6 md:px-12 lg:px-24">
          <Services />
        </section>

        <section id="gallery" className="py-16 px-6 md:px-12 lg:px-24">
          <ProjectGallery />
        </section>

        <section id="rebates" className="py-24 px-6 md:px-12 lg:px-24 border-y border-slate-100 overflow-hidden">
          <RebateCalculator />
        </section>

        <section id="testimonials" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50/50">
          <Testimonials />
        </section>

        <section id="map" className="border-b border-slate-100">
          <ServiceAreaMap />
        </section>

        <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-slate-900 text-white">
          <Footer />
        </section>
      </main>

      {/* Floating Scroll to Top button with Progress Circle */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 z-[100] w-14 h-14 bg-white border border-slate-200 rounded-full shadow-2xl flex items-center justify-center text-slate-900 transition-all duration-500 hover:bg-orange-600 hover:text-white hover:border-orange-500 active:scale-95 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
          <circle 
            cx="28" cy="28" r="24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="opacity-10"
          />
          <circle 
            cx="28" cy="28" r="24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="150.79" 
            strokeDashoffset={150.79 - (150.79 * scrollProgress) / 100} 
            className="text-orange-500 transition-all duration-200"
          />
        </svg>
        <ChevronUp size={24} strokeWidth={2.5} />
      </button>

      <AIChat />
    </div>
  );
};

export default App;

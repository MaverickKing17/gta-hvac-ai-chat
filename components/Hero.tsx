
import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs font-bold uppercase tracking-wider mb-8 animate-float">
          <ShieldCheck size={14} />
          <span>Licensed & Insured Toronto Experts</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
          Toronto's Trusted <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-blue-400">
            Family HVAC Since 1978
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {TAGLINE}. Specializing in high-efficiency heat pumps, modern boilers, and luxury snow melting systems. Up to $10,500 in rebates available.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20"
          >
            View Recent Projects
            <ArrowRight size={20} />
          </button>
          
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
            className="w-full sm:w-auto glass-card hover:bg-white/10 text-white px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare size={20} className="text-orange-500" />
            Chat with AI Expert
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-60">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-white">46+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Years Experience</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-white">10k+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Projects Done</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-white">24/7</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Emergency Support</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-white">4.9/5</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Customer Rating</span>
          </div>
        </div>
      </div>

      {/* Hero Image Mockup (Blurred Background) */}
      <div className="mt-24 w-full max-w-6xl mx-auto rounded-3xl overflow-hidden glass-card p-2 relative">
        <img 
          src="https://picsum.photos/seed/atomic-hero/1200/500?grayscale" 
          alt="HVAC Installation Work" 
          className="w-full h-auto rounded-2xl object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;

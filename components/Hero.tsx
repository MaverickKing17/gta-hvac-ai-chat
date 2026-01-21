
import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, ChevronDown } from 'lucide-react';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-orange-600/20 blur-[150px] rounded-full mix-blend-screen opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-[10px] font-black uppercase tracking-[0.25em] mb-10 animate-float shadow-2xl shadow-orange-500/10">
          <ShieldCheck size={12} className="text-orange-500" />
          <span>Premier Mechanical Solutions</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black mb-10 leading-[0.95] tracking-tighter">
          Mastering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600 drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]">
            Indoor Climate
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-300 mb-14 max-w-4xl mx-auto leading-tight font-light tracking-tight">
          {TAGLINE}. High-performance heating, cooling, and hydronics engineered for the modern Toronto home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white px-12 py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,107,0,0.3)]"
          >
            EXPLORE PROJECTS
            <ArrowRight size={22} strokeWidth={3} />
          </button>
          
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
            className="w-full sm:w-auto glass-card hover:bg-white/10 text-white px-12 py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-3 transition-all border border-white/20"
          >
            <MessageSquare size={22} className="text-orange-500" strokeWidth={3} />
            ASK OUR EXPERTS
          </button>
        </div>

        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-12">
          {[
            { value: '46+', label: 'Years of Trust' },
            { value: '10k+', label: 'Systems Tuned' },
            { value: '24/7', label: 'Emergency Response' },
            { value: 'Elite', label: 'GCP/HRAI Certified' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 group">
              <span className="text-4xl font-black text-white group-hover:text-orange-500 transition-colors duration-500">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;


import React from 'react';
import { ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white pt-24 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck size={14} className="text-orange-600" />
            Licensed Toronto Master Contractors
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Quality HVAC <br />
            <span className="text-orange-600">Built for Toronto.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Since 1978, we've provided high-integrity heating and cooling solutions. 
            From high-efficiency heat pumps to luxury hydronics, we engineer comfort.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 ms-button text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              View Our Solutions
              <ArrowRight size={18} />
            </button>
            
            <button 
              onClick={() => document.getElementById('rebates')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white border border-slate-300 hover:border-slate-900 text-slate-900 px-8 py-4 ms-button text-sm font-bold flex items-center justify-center gap-2"
            >
              Estimate Your Rebate
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Trusted By</span>
            <div className="flex gap-6 items-center">
              <span className="text-lg font-black italic text-slate-900">Carrier</span>
              <span className="text-lg font-black italic text-slate-900">Mitsubishi</span>
              <span className="text-lg font-black italic text-slate-900">Viessmann</span>
            </div>
          </div>
        </div>

        <div className="relative lg:block">
          <div className="relative bg-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://picsum.photos/seed/atomic-pro/1000/800" 
              alt="Professional HVAC Installation" 
              className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur shadow-xl rounded-xl border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">4.9</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Top Rated Service</p>
                  <p className="text-xs text-slate-500">Based on 500+ Local Reviews</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/5 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-900/5 blur-3xl rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

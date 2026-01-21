
import React from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, Star } from 'lucide-react';

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

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
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

        <div className="relative lg:block group">
          <div className="relative bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://i.ibb.co/HTnFLH3J/gemini-3-pro-image-preview-2k-a-A-professional-high.png" 
              alt="Professional HVAC Installation" 
              className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            
            {/* Microsoft-style Floating Glass Rating Card */}
            <div className="absolute bottom-8 left-8 right-8 p-1 bg-white/40 backdrop-blur-xl shadow-2xl rounded-[1.8rem] border border-white/40 overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-500">
              <div className="bg-white/80 rounded-[1.6rem] p-6 flex items-center gap-6">
                <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-[0_10px_20px_rgba(255,107,0,0.3)]">
                  4.9
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FF6B00" className="text-orange-600" />
                    ))}
                  </div>
                  <p className="font-black text-slate-900 text-[15px] tracking-tight">Top Rated Service</p>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Based on 500+ Local Reviews</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full -z-10 group-hover:bg-orange-600/15 transition-colors"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-slate-200 blur-[100px] rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

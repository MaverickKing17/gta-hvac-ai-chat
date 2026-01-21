
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const scrollToGallery = () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      window.scrollTo({
        top: gallery.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* 2026 Tech Aesthetic Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-md text-[9px] font-black uppercase tracking-[0.3em] mb-6 border border-white/10">
            <Icons.Cpu size={12} className="text-orange-500" />
            Precision Mechanical Systems
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
            Advanced <br />
            <span className="text-orange-600">Solutions.</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            We engineer environments. Our systems are optimized for maximum efficiency, 
            longevity, and the unique climate challenges of Toronto.
          </p>
        </div>
        
        {/* ENHANCED VISIBILITY: Operational Telemetry Panel */}
        <div className="relative group/status">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 to-slate-900/30 rounded-3xl blur-xl opacity-0 group-hover/status:opacity-100 transition-opacity duration-700"></div>
          <div className="relative bg-[#020617] border border-white/15 rounded-3xl p-8 min-w-[320px] shadow-2xl overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
            
            {/* Header: Market Status */}
            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.35em] mb-1">Operational Metrics</p>
                <h4 className="text-white font-black text-sm uppercase tracking-widest">Market Status</h4>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                <div className="relative w-2.5 h-2.5">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]"></div>
                </div>
                <span className="text-green-500 text-[11px] font-black uppercase tracking-widest">Active Scan</span>
              </div>
            </div>

            {/* Metrics List - Enhanced Contrast */}
            <div className="space-y-8 relative z-10">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-white/80 font-black text-[12px] uppercase tracking-wider">Residential Projects</span>
                  <span className="text-white font-black text-lg tabular-nums">94.2% <span className="text-[10px] text-orange-500 ml-1">EF.</span></span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden flex border border-white/5">
                  <div className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 w-[94.2%] rounded-full shadow-[0_0_15px_rgba(234,88,12,0.4)]"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-white/80 font-black text-[12px] uppercase tracking-wider">Commercial Retrofits</span>
                  <span className="text-white font-black text-lg tabular-nums">88.7% <span className="text-[10px] text-slate-400 ml-1">EF.</span></span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden flex border border-white/5">
                  <div className="h-full bg-gradient-to-r from-slate-500 to-slate-400 w-[88.7%] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
                </div>
              </div>
            </div>

            {/* Technical Footer Readout - Increased Visibility */}
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 group-hover/status:text-orange-400 transition-colors">
                <Icons.Activity size={14} className="text-orange-500" />
                <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.2em]">Signal: 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Database size={12} className="text-slate-500" />
                <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.2em]">Uptime: 99.9%</span>
              </div>
            </div>
            
            {/* Live Scan Line Animation */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-[scan_4s_ease-in-out_infinite] shadow-[0_0_10px_#ea580c] opacity-50"></div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {SERVICES.map((service) => {
          const Icon = (Icons as any)[service.icon] || Icons.Wrench;
          return (
            <div 
              key={service.id} 
              className="group relative flex flex-col h-full bg-white border border-slate-200 rounded-[2rem] p-10 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle tech grid background on card hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-10 border border-slate-100 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 group-hover:shadow-[0_12px_24px_rgba(255,107,0,0.2)] transition-all duration-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tighter leading-tight group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-12 text-[16px] font-medium opacity-90">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto relative z-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  {service.rebateAvailable ? (
                    <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-green-700">
                      <Icons.CheckCircle2 size={12} className="text-green-500" />
                      Rebate Eligible
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <Icons.Zap size={12} className="text-slate-300" />
                      Premium Service
                    </div>
                  )}
                  <div className="text-[10px] font-bold text-slate-400/60 uppercase tracking-widest mt-1">
                    System ID: {service.id.slice(0, 4)}-2026
                  </div>
                </div>

                <button 
                  onClick={scrollToGallery}
                  className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl text-slate-900 hover:bg-orange-600 hover:text-white transition-all duration-300 border border-slate-100 group-hover:border-orange-500 shadow-sm"
                >
                  <span className="text-[11px] font-black uppercase tracking-widest hidden group-hover:inline-block ml-2 animate-in fade-in slide-in-from-right-2">View Log</span>
                  <Icons.ArrowUpRight size={18} />
                </button>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10px] right-[-10px] w-12 h-12 border-t-2 border-r-2 border-slate-100 group-hover:border-orange-200 transition-colors"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Guarantee Indicator */}
      <div className="mt-24 p-12 bg-slate-950 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #FF6B00 0%, transparent 50%)' }}></div>
        <div className="relative z-10 flex items-center gap-8">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-orange-500 shadow-[0_0_30px_rgba(255,107,0,0.2)]">
            <Icons.ShieldCheck size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-black mb-2 tracking-tight">The Atomic Performance Guarantee</h4>
            <p className="text-slate-400 font-medium text-sm">Every installation is backed by a 10-year craftsmanship warranty.</p>
          </div>
        </div>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="relative z-10 px-10 py-5 bg-white text-slate-900 font-black text-sm uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-all active:scale-95 shadow-xl"
        >
          Request Technical Consult
        </button>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}</style>
    </div>
  );
};

export default Services;

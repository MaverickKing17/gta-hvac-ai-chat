
import React from 'react';
import { MapPin, Shield, Navigation, Activity, Target, Radio, Globe } from 'lucide-react';

const ServiceAreaMap: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden relative">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-lg text-orange-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-100">
              <Radio size={12} className="animate-pulse" />
              Broadband Service Reach
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
              Tactical <br />
              <span className="text-orange-600">Coverage.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              We deploy priority emergency teams across the Greater Toronto Area. 
              Our dispatch logic ensures average response times of 45 minutes for critical failures.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                { label: "Central Operations", city: "Toronto Hub" },
                { label: "West Deployment", city: "Mississauga & Etobicoke" },
                { label: "North Corridor", city: "Vaughan & Richmond Hill" },
                { label: "East Reach", city: "Scarborough & North York" }
              ].map((region, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{region.label}</p>
                    <p className="text-slate-900 font-bold tracking-tight">{region.city}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden group border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform">
                <Globe size={100} strokeWidth={1} />
              </div>
              <p className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-3">Custom Deployment</p>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
                Our heavy mechanical division facilitates large-scale retrofits across all of Southern Ontario.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="flex items-center gap-3 text-white font-black text-[11px] uppercase tracking-[0.2em] hover:text-orange-500 transition-colors"
              >
                Inquire External Zone <Navigation size={14} />
              </button>
            </div>
          </div>

          {/* REDESIGNED: Tactical Mission Map Visualization */}
          <div className="lg:col-span-8 relative">
            <div className="relative bg-slate-950 rounded-[3.5rem] p-4 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden min-h-[640px] flex items-center justify-center">
              
              {/* Stylized Toronto Map Graphic (SVG) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none p-12">
                <svg viewBox="0 0 800 600" className="w-full h-full text-white/50" stroke="currentColor" fill="none" strokeWidth="2">
                   {/* Abstract GTA Shoreline */}
                   <path d="M50,450 Q200,430 400,440 T750,420" strokeLinecap="round" opacity="0.3" />
                   {/* Abstract Grid Circles */}
                   <circle cx="400" cy="300" r="100" opacity="0.1" />
                   <circle cx="400" cy="300" r="200" opacity="0.05" />
                   <circle cx="400" cy="300" r="300" opacity="0.02" />
                </svg>
              </div>

              {/* Data Overlays */}
              <div className="absolute top-12 left-12 flex gap-4">
                <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                   <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">Signal: Optimal</span>
                </div>
                <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                   <Target size={14} className="text-orange-500" />
                   <span className="text-[10px] font-black text-white/80 uppercase tracking-widest">GTA SEC_V2</span>
                </div>
              </div>

              <div className="absolute bottom-12 right-12 text-right">
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Coordinates</p>
                <p className="text-white font-mono text-sm opacity-60">43.6532° N, 79.3832° W</p>
              </div>

              {/* Central Radar Pulse */}
              <div className="relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-600/10 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/5 border border-orange-500/20 rounded-full"></div>
                 
                 {/* Active Site Pings */}
                 {[
                   { t: '15%', l: '40%', label: 'VAUGHAN' },
                   { t: '50%', l: '50%', label: 'TORONTO_HUB', primary: true },
                   { t: '60%', l: '20%', label: 'MISSISSAUGA' },
                   { t: '35%', l: '70%', label: 'NORTH_YORK' },
                   { t: '75%', l: '85%', label: 'SCARBOROUGH' }
                 ].map((site, i) => (
                   <div key={i} className="absolute" style={{ top: site.t, left: site.l }}>
                      <div className="relative flex items-center justify-center">
                         <div className={`absolute w-12 h-12 rounded-full animate-ping opacity-25 ${site.primary ? 'bg-orange-500' : 'bg-white'}`}></div>
                         <div className={`relative w-4 h-4 rounded-full border-2 border-white shadow-2xl ${site.primary ? 'bg-orange-600 scale-125' : 'bg-slate-700'}`}></div>
                         <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg">
                            <span className="text-[8px] font-black text-white uppercase tracking-widest">{site.label}</span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>

              {/* HUD Elements */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-slate-950"></div>
              <div className="absolute inset-0 pointer-events-none rounded-[3.2rem] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
              
              {/* Scanline Animation */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 animate-[mapScan_8s_linear_infinite] blur-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes mapScan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ServiceAreaMap;

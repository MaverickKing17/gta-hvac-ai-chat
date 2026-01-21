
import React from 'react';
import { MapPin, Navigation, Radio, Globe, Target, Activity, ShieldCheck, Zap } from 'lucide-react';

const ServiceAreaMap: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden relative">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600 text-white rounded-lg text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-lg shadow-orange-600/20">
              <Radio size={12} className="animate-pulse" />
              GTA Dispatch Center
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              Tactical <br />
              <span className="text-orange-600">Operations.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Our fleet is geofenced within the Greater Toronto Area to guarantee ultra-low latency response. 
              Real-time telemetry ensures we arrive with the right specialized components for your specific system architecture.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { label: "DOWNTOWN", city: "Toronto Hub", status: "Active" },
                { label: "WEST_SEC", city: "Mississauga", status: "Optimal" },
                { label: "NORTH_SEC", city: "Vaughan", status: "Active" },
                { label: "EAST_SEC", city: "North York", status: "Optimal" }
              ].map((region, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-orange-500/30 transition-all">
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{region.label}</p>
                  <p className="text-slate-900 font-bold text-sm tracking-tight">{region.city}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[8px] font-black text-green-600 uppercase tracking-widest">{region.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-950 rounded-[2.5rem] text-white relative overflow-hidden group border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                <ShieldCheck size={120} strokeWidth={1} className="text-orange-500" />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-4">Enterprise Reach</p>
                <p className="text-white font-black text-xl mb-6 tracking-tight">
                  State-Wide Deployment <br />Available for Heavy Projects.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-5 py-3 rounded-xl border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] transition-all"
                >
                  Request External Dispatch <Navigation size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* REDESIGNED: High-Fidelity Tactical Mission Map */}
          <div className="lg:col-span-8 relative">
            <div className="relative bg-[#020617] rounded-[3.5rem] border border-white/15 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden min-h-[680px] flex items-center justify-center group/map">
              
              {/* Vibrant Gradient Backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-[#020617] to-[#0a1a3a]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/2"></div>

              {/* Detailed Toronto Map Geometry (SVG) */}
              <div className="absolute inset-0 flex items-center justify-center p-12 opacity-40">
                <svg viewBox="0 0 800 600" className="w-full h-full text-white/40" stroke="currentColor" fill="none" strokeWidth="1.5">
                   {/* Realistic Toronto Shoreline Path */}
                   <path d="M50,480 Q150,460 250,485 T450,490 T650,470 T780,440" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                   
                   {/* Major Highway Infrastructure (Simulated) */}
                   <path d="M50,420 L750,380" stroke="orange" strokeDasharray="4 8" strokeOpacity="0.3" /> {/* QEW/401 */}
                   <path d="M400,100 L400,490" stroke="white" strokeDasharray="2 10" strokeOpacity="0.2" /> {/* DVP/404 */}
                   <path d="M250,150 L250,485" stroke="white" strokeDasharray="2 10" strokeOpacity="0.2" /> {/* 427 */}

                   {/* Concentric Grid Overlay */}
                   <circle cx="400" cy="350" r="100" opacity="0.05" strokeWidth="1" />
                   <circle cx="400" cy="350" r="200" opacity="0.03" strokeWidth="1" />
                   <circle cx="400" cy="350" r="300" opacity="0.01" strokeWidth="1" />
                </svg>
              </div>

              {/* HIGH VISIBILITY HUD OVERLAYS */}
              <div className="absolute top-12 left-12 flex flex-col gap-3">
                <div className="px-5 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center gap-4 shadow-2xl">
                   <div className="relative">
                     <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40"></div>
                     <div className="relative w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e]"></div>
                   </div>
                   <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Uplink: Optimal</span>
                </div>
                <div className="px-5 py-3 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4">
                   <Target size={16} className="text-orange-500" />
                   <span className="text-[11px] font-black text-white/90 uppercase tracking-[0.2em]">Sector GTA_V4</span>
                </div>
              </div>

              <div className="absolute bottom-12 right-12 text-right space-y-2">
                <div className="flex items-center gap-2 justify-end text-orange-500 mb-2">
                  <Zap size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Live Fleet Telemetry</span>
                </div>
                <p className="text-[11px] font-black text-white uppercase tracking-[0.5em] opacity-40">Operational Grid</p>
                <p className="text-white font-mono text-base font-bold">43.6532° N // 79.3832° W</p>
              </div>

              {/* VIBRANT CENTRAL INTERACTION */}
              <div className="relative group/radar">
                 {/* Central Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full animate-[radarPulse_6s_ease-in-out_infinite]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-600/5 border border-orange-500/20 rounded-full"></div>
                 
                 {/* Active Site Pings - MORE COLORFUL & VISIBLE */}
                 {[
                   { t: '15%', l: '40%', label: 'VAUGHAN_DEPLOY', color: 'bg-cyan-500' },
                   { t: '50%', l: '50%', label: 'CENTRAL_HUB', primary: true, color: 'bg-orange-600' },
                   { t: '65%', l: '20%', label: 'ETOBICOKE_WEST', color: 'bg-emerald-500' },
                   { t: '35%', l: '75%', label: 'RICHMOND_NORTH', color: 'bg-cyan-500' },
                   { t: '75%', l: '85%', label: 'SCARBOROUGH_EAST', color: 'bg-blue-500' }
                 ].map((site, i) => (
                   <div key={i} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: site.t, left: site.l }}>
                      <div className="relative flex flex-col items-center">
                         {/* Glowing Ring */}
                         <div className={`absolute w-14 h-14 rounded-full animate-ping opacity-20 ${site.primary ? 'bg-orange-500' : site.color}`}></div>
                         
                         {/* Site Marker */}
                         <div className={`relative w-5 h-5 rounded-full border-2 border-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover/map:scale-125 ${site.primary ? 'bg-orange-600' : site.color}`}>
                            <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                         </div>

                         {/* High-Contrast Label */}
                         <div className="mt-4 whitespace-nowrap bg-white px-4 py-2 rounded-xl shadow-2xl border border-slate-200 translate-y-2 opacity-0 group-hover/map:opacity-100 group-hover/map:translate-y-0 transition-all duration-500">
                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{site.label}</span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>

              {/* TECH HUD DETAILS (Bright White) */}
              <div className="absolute bottom-12 left-12">
                 <div className="flex items-center gap-6">
                    <div className="space-y-1">
                       <p className="text-[9px] font-black text-white/50 uppercase tracking-widest">Active Units</p>
                       <p className="text-white font-black text-2xl tracking-tighter">12 <span className="text-orange-500">/ 14</span></p>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="space-y-1">
                       <p className="text-[9px] font-black text-white/50 uppercase tracking-widest">Avg Response</p>
                       <p className="text-white font-black text-2xl tracking-tighter">42.8m</p>
                    </div>
                 </div>
              </div>

              {/* Decorative HUD Elements */}
              <div className="absolute inset-0 pointer-events-none border-[24px] border-slate-950/40"></div>
              <div className="absolute inset-0 pointer-events-none rounded-[3.2rem] shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
              
              {/* Vibrant Scanline */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent animate-[mapScanVibrant_10s_linear_infinite] blur-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes mapScanVibrant {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes radarPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.1; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default ServiceAreaMap;

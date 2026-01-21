
import React, { useEffect, useRef } from 'react';
import { MapPin, Navigation, Radio, Globe, Target, Activity, ShieldCheck, Zap } from 'lucide-react';
import L from 'leaflet';

const ServiceAreaMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Initialize map centered on Toronto
      const torontoCoords: [number, number] = [43.6532, -79.3832];
      
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: true,
      }).setView(torontoCoords, 10);

      // Add high-tech dark matter tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Define locations for markers
      const locations = [
        { coords: [43.6532, -79.3832] as [number, number], label: 'CENTRAL HUB' },
        { coords: [43.7886, -79.4659] as [number, number], label: 'NORTH SEC' },
        { coords: [43.5890, -79.6441] as [number, number], label: 'WEST SEC' },
        { coords: [43.7731, -79.2577] as [number, number], label: 'EAST SEC' }
      ];

      // Add custom pulsing markers
      locations.forEach((loc) => {
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `
            <div class="relative flex items-center justify-center">
              <div class="absolute w-8 h-8 bg-orange-500 rounded-full animate-ping opacity-40"></div>
              <div class="relative w-4 h-4 bg-orange-600 rounded-full border-2 border-white shadow-lg shadow-orange-600/50"></div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        L.marker(loc.coords, { icon: customIcon })
          .addTo(map)
          .bindTooltip(loc.label, {
            permanent: false,
            direction: 'top',
            className: 'atomic-tooltip'
          });
      });

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

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

          {/* REAL-WORLD INTERACTIVE MAP SECTION */}
          <div className="lg:col-span-8 relative">
            <div className="relative bg-[#020617] rounded-[3.5rem] border border-white/15 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden min-h-[680px] group/map">
              
              {/* Map Container */}
              <div ref={mapContainerRef} className="absolute inset-0 z-0" />

              {/* HUD OVERLAYS (Layered over Map) */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute inset-0 border-[24px] border-slate-950/40"></div>
                <div className="absolute inset-0 rounded-[3.2rem] shadow-[inset_0_0_150px_rgba(0,0,0,0.7)]"></div>
                
                {/* Target Corners */}
                <div className="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-orange-500 opacity-60"></div>
                <div className="absolute top-12 right-12 w-12 h-12 border-t-2 border-r-2 border-white/20"></div>
                <div className="absolute bottom-12 left-12 w-12 h-12 border-b-2 border-l-2 border-white/20"></div>
                <div className="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-orange-500 opacity-60"></div>

                {/* Status Readouts */}
                <div className="absolute top-16 left-16 flex flex-col gap-3">
                  <div className="px-5 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center gap-4 shadow-2xl">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40"></div>
                      <div className="relative w-3 h-3 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e]"></div>
                    </div>
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Uplink: Optimal</span>
                  </div>
                  <div className="px-5 py-3 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4">
                    <Target size={16} className="text-orange-500" />
                    <span className="text-[11px] font-black text-white/90 uppercase tracking-[0.2em]">Sector GTA_LIVE</span>
                  </div>
                </div>

                <div className="absolute bottom-16 right-16 text-right space-y-2">
                  <div className="flex items-center gap-2 justify-end text-orange-500 mb-2">
                    <Zap size={14} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Active Dispatch Link</span>
                  </div>
                  <p className="text-[11px] font-black text-white uppercase tracking-[0.5em] opacity-40">Operational Grid</p>
                  <p className="text-white font-mono text-base font-bold">43.6532° N // 79.3832° W</p>
                </div>
              </div>

              {/* Interaction Callout (Center) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500">
                 <div className="bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-4 rounded-3xl text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4">
                    <Navigation size={18} className="text-orange-500" />
                    Live Map Interactive
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .atomic-tooltip {
          background: #0f172a !important;
          border: 1px solid #FF6B00 !important;
          color: white !important;
          font-weight: 900 !important;
          font-size: 10px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.1em !important;
          padding: 6px 12px !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.4) !important;
        }
        .atomic-tooltip:before {
          border-top-color: #FF6B00 !important;
        }
      `}</style>
    </div>
  );
};

export default ServiceAreaMap;

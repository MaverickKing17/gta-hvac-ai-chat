
import React, { useEffect, useRef } from 'react';
import { MapPin, Navigation, Radio, Globe, Target, Activity, ShieldCheck, Zap, Crosshair } from 'lucide-react';
import L from 'leaflet';

const ServiceAreaMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Initialize map centered on Toronto
      const torontoCoords: [number, number] = [43.6650, -79.3832];
      
      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: true,
      }).setView(torontoCoords, 10);

      // Add high-detail dark matter tiles with labels for better context
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Add a vibrant pulsing circle to define the core service perimeter
      const serviceCircle = L.circle(torontoCoords, {
        radius: 28000, // 28km radius covering most of GTA
        color: '#FF6B00',
        fillColor: '#FF6B00',
        fillOpacity: 0.05,
        weight: 2,
        dashArray: '10, 10',
        className: 'service-perimeter-pulse'
      }).addTo(map);

      // Define locations for markers with slightly adjusted positions for visual balance
      const locations = [
        { coords: [43.6532, -79.3832] as [number, number], label: 'MAIN HUB: DOWNTOWN' },
        { coords: [43.8561, -79.3370] as [number, number], label: 'MARKHAM NORTH' },
        { coords: [43.5890, -79.6441] as [number, number], label: 'MISSISSAUGA WEST' },
        { coords: [43.7731, -79.2577] as [number, number], label: 'SCARBOROUGH EAST' },
        { coords: [43.7941, -79.5448] as [number, number], label: 'VAUGHAN OPERATIONS' }
      ];

      // Add high-vibrancy custom markers
      locations.forEach((loc) => {
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `
            <div class="relative flex items-center justify-center">
              <div class="absolute w-12 h-12 bg-orange-500/30 rounded-full animate-ping"></div>
              <div class="absolute w-8 h-8 bg-orange-600/40 rounded-full animate-pulse"></div>
              <div class="relative w-5 h-5 bg-orange-600 rounded-full border-2 border-white shadow-[0_0_20px_rgba(255,107,0,0.8)] flex items-center justify-center">
                <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
          `,
          iconSize: [48, 48],
          iconAnchor: [24, 24],
        });

        L.marker(loc.coords, { icon: customIcon })
          .addTo(map)
          .bindTooltip(loc.label, {
            permanent: false,
            direction: 'top',
            className: 'atomic-tooltip-vibrant',
            offset: [0, -10]
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
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-xl shadow-slate-900/10">
              <Radio size={12} className="text-orange-500 animate-pulse" />
              Real-Time GTA Telemetry
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              Strategic <br />
              <span className="text-orange-600">Coverage.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              We maintain active service nodes across the Golden Horseshoe. 
              Our map visualization uses real-time dispatch data to ensure our <span className="text-slate-900 font-bold italic">Atomic Fleet</span> is always within a 45-minute response window of your location.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              {[
                { label: "HUB_PRIMARY", city: "Old Toronto", status: "Active", color: "bg-green-500" },
                { label: "PEEL_ZONE", city: "Mississauga", status: "Optimal", color: "bg-blue-500" },
                { label: "YORK_ZONE", city: "Vaughan", status: "Active", color: "bg-green-500" },
                { label: "DURHAM_LINK", city: "Pickering", status: "Standby", color: "bg-orange-500" }
              ].map((region, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm group hover:border-orange-500/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{region.label}</p>
                    <div className={`w-2 h-2 ${region.color} rounded-full animate-pulse shadow-sm`}></div>
                  </div>
                  <p className="text-slate-900 font-black text-sm tracking-tight">{region.city}</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase mt-1">Status: {region.status}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-950 rounded-[2.5rem] text-white relative overflow-hidden group border border-white/5 shadow-2xl">
              <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                <Globe size={200} strokeWidth={1} className="text-orange-500" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Zap size={20} className="text-white" />
                  </div>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em]">Fleet Performance</p>
                </div>
                <p className="text-white font-black text-xl mb-6 tracking-tight leading-tight">
                  Intelligent Dispatch <br />Architecture.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="w-full bg-white/10 hover:bg-white/20 px-5 py-4 rounded-xl border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
                >
                  Verify Your Zone <Navigation size={14} className="text-orange-500" />
                </button>
              </div>
            </div>
          </div>

          {/* COLOR-ENHANCED REAL-WORLD INTERACTIVE MAP */}
          <div className="lg:col-span-8 relative">
            <div className="relative bg-[#020617] rounded-[3.5rem] border-4 border-slate-900 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden min-h-[720px] group/map">
              
              {/* Map Container with CSS Filter for Enhanced Colors */}
              <div 
                ref={mapContainerRef} 
                className="absolute inset-0 z-0 map-vibrant-filter" 
                style={{ filter: 'saturate(1.4) brightness(1.1) contrast(1.1) hue-rotate(-5deg)' }}
              />

              {/* HUD OVERLAYS - COLORFUL HUD */}
              <div className="absolute inset-0 pointer-events-none z-10">
                {/* Vignette & Depth */}
                <div className="absolute inset-0 rounded-[3.2rem] shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]"></div>
                
                {/* Colorful HUD Frame Corners */}
                <div className="absolute top-10 left-10 w-16 h-16 border-t-4 border-l-4 border-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>
                <div className="absolute top-10 right-10 w-16 h-16 border-t-4 border-r-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 border-b-4 border-l-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-b-4 border-r-4 border-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>

                {/* Top Status Indicators */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <div className="px-6 py-3 bg-slate-950/80 backdrop-blur-xl rounded-full border border-white/20 flex items-center gap-4 shadow-2xl">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse [animation-delay:200ms]"></div>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse [animation-delay:400ms]"></div>
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Active Node Synchronization: 100%</span>
                  </div>
                </div>

                {/* Bottom Stats Readout */}
                <div className="absolute bottom-16 left-16 flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-orange-500 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-orange-500/30">
                    <Activity size={14} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Live Dispatch Frequency</span>
                  </div>
                  <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-600 to-blue-600 w-3/4 animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>

                <div className="absolute bottom-16 right-16 text-right">
                   <div className="p-6 bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em] mb-2">Geolocation Data</p>
                      <p className="text-white font-mono text-xl font-bold tracking-tighter">43.6650° N <span className="text-orange-500">//</span> 79.3832° W</p>
                      <div className="flex items-center justify-end gap-2 mt-4">
                        <div className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-[8px] font-black uppercase border border-blue-500/30">Sector_Z4</div>
                        <div className="px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded text-[8px] font-black uppercase border border-orange-500/30">Active_Op</div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Interaction Callout */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 opacity-0 group-hover/map:opacity-100 transition-all duration-700 translate-y-4 group-hover/map:translate-y-0">
                 <div className="bg-orange-600/90 backdrop-blur-xl border border-white/30 px-10 py-5 rounded-[2rem] text-white font-black text-sm uppercase tracking-[0.3em] flex items-center gap-4 shadow-[0_25px_50px_rgba(255,107,0,0.4)]">
                    <Crosshair size={20} className="animate-spin-slow" />
                    Interactive Ops Grid
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .service-perimeter-pulse {
          animation: dash-pulse 4s linear infinite;
        }
        @keyframes dash-pulse {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        .atomic-tooltip-vibrant {
          background: #FF6B00 !important;
          border: 2px solid white !important;
          color: white !important;
          font-weight: 950 !important;
          font-size: 11px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.15em !important;
          padding: 8px 16px !important;
          border-radius: 12px !important;
          box-shadow: 0 15px 35px rgba(255,107,0,0.5) !important;
          opacity: 1 !important;
        }
        .atomic-tooltip-vibrant:before {
          border-top-color: #FF6B00 !important;
        }
      `}</style>
    </div>
  );
};

export default ServiceAreaMap;

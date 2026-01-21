
import React, { useState } from 'react';
import { Cpu, Activity, Zap, Flame, Wind, Droplets, MapPin, Target, ShieldCheck, ChevronRight, Binary } from 'lucide-react';

interface SystemNode {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  metric: string;
  metricLabel: string;
  icon: React.ReactNode;
  coords: { x: string; y: string };
}

const ProjectGallery: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('node-1');

  const nodes: SystemNode[] = [
    {
      id: 'node-1',
      title: 'Precision Hydronic Center',
      category: 'HEATING',
      description: 'The heart of the home. Features a high-efficiency combi-boiler with smart hydraulic separation for multi-zone comfort.',
      location: 'Basement Mechanical Room',
      metric: '98.2%',
      metricLabel: 'ANNUAL EFFICIENCY',
      icon: <Flame size={20} />,
      coords: { x: '42%', y: '82%' }
    },
    {
      id: 'node-2',
      title: 'Cold-Climate Heat Pump',
      category: 'CLIMATE',
      description: 'Ultra-quiet outdoor unit capable of full heating performance in Toronto winters down to -25°C.',
      location: 'Exterior East Pad',
      metric: '3.4 COP',
      metricLabel: 'THERMAL OUTPUT',
      icon: <Wind size={20} />,
      coords: { x: '82%', y: '72%' }
    },
    {
      id: 'node-3',
      title: 'Zonal Air Management',
      category: 'COOLING',
      description: 'Smart dampers and variable speed air handlers ensuring every room maintains the exact target temperature.',
      location: 'Attic / Central Plenums',
      metric: '22 SEER2',
      metricLabel: 'EFFICIENCY RATING',
      icon: <Zap size={20} />,
      coords: { x: '55%', y: '25%' }
    },
    {
      id: 'node-4',
      title: 'Automated Snow Melt',
      category: 'SPECIALTY',
      description: 'Hydronic driveway heating integrated with moisture sensors to eliminate the need for salting or shoveling.',
      location: 'Driveway Sub-Surface',
      metric: '45°F',
      metricLabel: 'TARGET SLAB TEMP',
      icon: <Droplets size={20} />,
      coords: { x: '15%', y: '88%' }
    }
  ];

  const activeData = nodes.find(n => n.id === activeNode);

  return (
    <div className="relative bg-slate-950 py-32 rounded-[3.5rem] px-8 md:px-16 overflow-hidden border border-white/5 shadow-2xl">
      {/* Background HUD Graphics */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
        
        {/* Left: Interactive Blueprint Visual */}
        <div className="w-full lg:w-3/5 relative aspect-video bg-slate-900/50 rounded-[2.5rem] border border-white/10 p-12 overflow-hidden group">
          
          {/* Stylized Home Silhouette (SVG) */}
          <svg viewBox="0 0 800 500" className="w-full h-full text-slate-700/30 transition-all duration-700 group-hover:text-slate-700/50" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Ground line */}
            <path d="M50 450 H750" />
            {/* House Outline */}
            <path d="M150 450 V200 L400 50 L650 200 V450 H150" />
            {/* Floors */}
            <path d="M150 320 H650" />
            {/* Internal Rooms */}
            <path d="M400 200 V450" />
            <path d="M400 320 H650" />
            {/* Driveway */}
            <path d="M50 450 L150 450" strokeDasharray="5,5" />
          </svg>

          {/* Interactive Nodes */}
          {nodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className="absolute group/node"
              style={{ left: node.coords.x, top: node.coords.y }}
            >
              <div className={`relative flex items-center justify-center w-10 h-10 transition-all duration-500 ${activeNode === node.id ? 'scale-125' : 'scale-100 hover:scale-110'}`}>
                {/* Concentric Pulsing Rings */}
                <div className={`absolute inset-0 rounded-full animate-ping ${activeNode === node.id ? 'bg-orange-500/40' : 'bg-slate-400/20'}`}></div>
                <div className={`absolute -inset-2 border border-dashed rounded-full animate-spin-slow ${activeNode === node.id ? 'border-orange-500/50 opacity-100' : 'border-slate-400/0 opacity-0'}`} style={{ animationDuration: '8s' }}></div>
                
                {/* Core Icon */}
                <div className={`relative z-10 w-full h-full rounded-full flex items-center justify-center border-2 transition-all ${activeNode === node.id ? 'bg-orange-600 border-white text-white shadow-[0_0_25px_rgba(255,107,0,0.5)]' : 'bg-slate-800 border-slate-600 text-slate-400 group-hover/node:border-white'}`}>
                  {node.icon}
                </div>

                {/* Technical Label Tooltip */}
                <div className={`absolute top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border border-white/10 rounded-md whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity pointer-events-none z-20`}>
                  <p className="text-[9px] font-black text-white uppercase tracking-widest">{node.title}</p>
                </div>
              </div>
            </button>
          ))}

          {/* Telemetry Corner Decorations */}
          <div className="absolute bottom-8 left-8 flex items-center gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            <Binary size={14} className="text-orange-600" />
            <span>Telemetry Active: TOR_MS_01</span>
          </div>
          <div className="absolute top-8 right-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Remote Diagnostics Online</span>
          </div>
        </div>

        {/* Right: Technical Data Card */}
        <div className="w-full lg:w-2/5">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                <Target size={14} className="text-orange-500" />
                System Anatomy
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                The Anatomy of <br />
                <span className="text-orange-600">Comfort.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                Click the system nodes to explore the technical integration points of an Atomic High-Performance home.
              </p>
            </div>

            {/* Active Data Panel */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden transition-all duration-500 min-h-[400px]">
              {activeData ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="px-3 py-1 bg-orange-600 text-white rounded text-[9px] font-black uppercase tracking-widest mb-3 inline-block">
                        {activeData.category}
                      </span>
                      <h3 className="text-3xl font-black text-white tracking-tighter">{activeData.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                      <p className="text-xs font-black text-green-500 uppercase flex items-center gap-1.5 justify-end">
                        <Activity size={12} />
                        Optimized
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-400 font-medium leading-relaxed text-base mb-10">
                    {activeData.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-auto">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Location ID</p>
                      <div className="flex items-center gap-2 text-white font-bold text-xs uppercase">
                        <MapPin size={14} className="text-orange-500" />
                        {activeData.location}
                      </div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">{activeData.metricLabel}</p>
                      <div className="flex items-center gap-2 text-white font-black text-xl tracking-tighter">
                        <Cpu size={16} className="text-orange-500" />
                        {activeData.metric}
                      </div>
                    </div>
                  </div>

                  <button className="mt-10 w-full py-5 bg-white/5 hover:bg-orange-600 border border-white/10 hover:border-orange-500 rounded-2xl text-white font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 group/btn shadow-xl active:scale-95">
                    View Technical Datasheet
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-40">
                  <Cpu size={48} className="text-slate-600" />
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Select a Node to Initialize Telemetry</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Modules */}
      <div className="mt-24 pt-16 border-t border-white/5 grid md:grid-cols-3 gap-12 relative z-10">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-orange-500">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h5 className="text-white font-black text-xs uppercase tracking-widest mb-2">Integrated Monitoring</h5>
            <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase tracking-wider">Systems linked directly to our central engineering hub for 24/7 reliability.</p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400">
            <Binary size={24} />
          </div>
          <div>
            <h5 className="text-white font-black text-xs uppercase tracking-widest mb-2">Calculated Load Sync</h5>
            <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase tracking-wider">Every component sized using proprietary Manual J and S calculation standards.</p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400">
            <Zap size={24} />
          </div>
          <div>
            <h5 className="text-white font-black text-xs uppercase tracking-widest mb-2">Peak Performance</h5>
            <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase tracking-wider">Guaranteed 95%+ operational efficiency across all hydronic and forced-air systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;

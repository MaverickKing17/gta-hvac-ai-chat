
import React, { useState, useEffect } from 'react';
import { Cpu, Activity, Zap, Flame, Wind, Droplets, MapPin, Target, ShieldCheck, ChevronRight, Binary, Box, Move3D } from 'lucide-react';

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
  color: string;
}

const ProjectGallery: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('node-1');
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Subtle 3D tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * 5, y: -x * 5 });
  };

  const nodes: SystemNode[] = [
    {
      id: 'node-1',
      title: 'Precision Hydronic Center',
      category: 'HEATING',
      description: 'The tactical heart of the home. Features a high-efficiency combi-boiler with smart hydraulic separation, ensuring perfect thermal distribution to every floor.',
      location: 'Basement Mechanical Room',
      metric: '98.2%',
      metricLabel: 'ANNUAL EFFICIENCY',
      icon: <Flame size={20} />,
      coords: { x: '45%', y: '80%' },
      color: 'orange'
    },
    {
      id: 'node-2',
      title: 'Cold-Climate Heat Pump',
      category: 'CLIMATE',
      description: 'The exterior engine. An ultra-quiet inverter unit capable of harvesting thermal energy from Toronto winters even at -30°C.',
      location: 'Exterior East Pad',
      metric: '3.4 COP',
      metricLabel: 'THERMAL OUTPUT',
      icon: <Wind size={20} />,
      coords: { x: '85%', y: '70%' },
      color: 'blue'
    },
    {
      id: 'node-3',
      title: 'Zonal Air Management',
      category: 'COOLING',
      description: 'Smart-damper integration within the central plenum, allowing independent climate profiling for bedrooms versus living areas.',
      location: 'Attic Mechanical Hub',
      metric: '22 SEER2',
      metricLabel: 'EFFICIENCY RATING',
      icon: <Zap size={20} />,
      coords: { x: '55%', y: '20%' },
      color: 'cyan'
    },
    {
      id: 'node-4',
      title: 'Automated Snow Melt',
      category: 'SPECIALTY',
      description: 'Invisible winter protection. A custom hydronic loop beneath the hardscape that activates based on atmospheric moisture sensors.',
      location: 'Driveway Sub-Structure',
      metric: '45°F',
      metricLabel: 'SLAB TEMP TARGET',
      icon: <Droplets size={20} />,
      coords: { x: '12%', y: '90%' },
      color: 'orange'
    }
  ];

  const activeData = nodes.find(n => n.id === activeNode);

  return (
    <div className="relative bg-[#020617] py-32 rounded-[4rem] px-8 md:px-16 overflow-hidden border border-white/5 shadow-2xl">
      {/* Cinematic HUD Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-24 relative z-10">
        
        {/* Left: 3D Isometric Visualization */}
        <div 
          className="w-full lg:w-3/5 relative min-h-[550px] flex items-center justify-center cursor-crosshair group/viz"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        >
          {/* 3D Perspective Container */}
          <div 
            className="relative w-full h-full transition-transform duration-500 ease-out"
            style={{ 
              transform: `perspective(1200px) rotateX(${15 + rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* The 3D House Schematic (SVG) */}
            <svg viewBox="0 0 800 600" className="w-full h-auto filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <defs>
                <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Base / Foundation */}
              <path d="M100,500 L400,580 L700,500 L400,420 Z" fill="rgba(15, 23, 42, 0.4)" stroke="#334155" strokeWidth="1" />
              
              {/* House Main Volume (Transparent 3D) */}
              {/* Left Wall */}
              <path d="M200,450 L200,250 L400,320 L400,520 Z" fill="url(#wallGrad)" stroke="#475569" strokeWidth="1.5" />
              {/* Right Wall */}
              <path d="M400,520 L400,320 L600,250 L600,450 Z" fill="rgba(30, 41, 59, 0.3)" stroke="#475569" strokeWidth="1.5" />
              
              {/* Roof Planes */}
              <path d="M200,250 L400,100 L600,250 L400,320 Z" fill="rgba(255, 107, 0, 0.05)" stroke="#64748b" strokeWidth="1" />
              <path d="M400,100 L600,250 L400,320 Z" fill="rgba(15, 23, 42, 0.6)" stroke="#475569" strokeWidth="1.5" />
              
              {/* Basement Slice */}
              <path d="M200,450 L400,520 L600,450 L400,380 Z" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" />

              {/* Internal Floors (Holographic effect) */}
              <path d="M200,350 L400,420 L600,350" fill="none" stroke="#334155" strokeWidth="1" opacity="0.5" />

              {/* ACTIVE ZONE GLOW (Thermal Aura) */}
              {activeNode === 'node-1' && (
                <path d="M250,480 L400,530 L550,480 L400,430 Z" fill="#FF6B00" fillOpacity="0.2" filter="url(#glow)" className="animate-pulse" />
              )}
              {activeNode === 'node-3' && (
                <path d="M250,220 L400,150 L550,220 L400,280 Z" fill="#22d3ee" fillOpacity="0.15" filter="url(#glow)" className="animate-pulse" />
              )}
            </svg>

            {/* Float-Space Nodes */}
            {nodes.map((node) => (
              <div
                key={node.id}
                className="absolute z-50 transform-gpu transition-all duration-700"
                style={{ 
                    left: node.coords.x, 
                    top: node.coords.y,
                    transform: 'translateZ(50px)' 
                }}
              >
                <button
                  onClick={() => setActiveNode(node.id)}
                  className="relative group/node"
                >
                  <div className={`relative flex items-center justify-center w-12 h-12 transition-all duration-500 ${activeNode === node.id ? 'scale-125' : 'scale-100 hover:scale-110'}`}>
                    {/* Multi-layered Pulsing Rings */}
                    <div className={`absolute inset-0 rounded-2xl animate-ping opacity-20 ${activeNode === node.id ? 'bg-orange-500' : 'bg-slate-400'}`}></div>
                    <div className={`absolute -inset-4 border border-dashed rounded-full animate-spin-slow transition-opacity duration-500 ${activeNode === node.id ? 'border-orange-500/50 opacity-100' : 'border-slate-400/0 opacity-0'}`} style={{ animationDuration: '12s' }}></div>
                    
                    {/* The Node Interface */}
                    <div className={`relative z-10 w-full h-full rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${activeNode === node.id ? 'bg-orange-600 border-white text-white shadow-[0_0_40px_rgba(255,107,0,0.6)]' : 'bg-slate-900 border-slate-700 text-slate-400 group-hover/node:border-slate-400 group-hover/node:bg-slate-800'}`}>
                      {node.icon}
                    </div>

                    {/* Floating Label */}
                    <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl whitespace-nowrap transition-all duration-300 pointer-events-none z-50 ${activeNode === node.id ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-2'}`}>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                        <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{node.title}</p>
                      </div>
                      <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900/90 border-r border-b border-white/10 rotate-45"></div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Viz Decorations */}
          <div className="absolute top-12 left-12 p-6 border-l-2 border-t-2 border-orange-600/30 rounded-tl-3xl">
             <div className="flex items-center gap-4 text-white">
                <Move3D size={20} className="text-orange-500" />
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Visualization Mode</p>
                    <p className="text-sm font-black uppercase tracking-widest">3D Isometric Hub</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right: Technical Command Sidebar */}
        <div className="w-full lg:w-2/5">
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-600/10 border border-orange-500/20 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">
                <Box size={14} className="animate-pulse" />
                System Anatomy v4.0
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] group-hover:text-orange-600 transition-colors">
                Brilliant <br />
                <span className="text-orange-600">Precision.</span>
              </h2>
              <p className="text-slate-400 font-medium text-xl leading-relaxed max-w-lg">
                We design high-fidelity mechanical environments where every component is a strategic asset.
              </p>
            </div>

            {/* Technical Detail Card */}
            <div className="relative group/card">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-slate-800 rounded-[3rem] blur-2xl opacity-10 group-hover/card:opacity-20 transition-opacity"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 min-h-[450px] flex flex-col shadow-2xl">
                {activeData ? (
                  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-10">
                      <div>
                        <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-3">Module // {activeData.category}</p>
                        <h3 className="text-4xl font-black text-white tracking-tighter leading-none">{activeData.title}</h3>
                      </div>
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 shadow-inner">
                        {activeData.icon}
                      </div>
                    </div>

                    <p className="text-slate-400 font-medium leading-relaxed text-lg mb-12 border-l-2 border-orange-600/30 pl-8">
                      {activeData.description}
                    </p>

                    <div className="grid grid-cols-2 gap-8 mt-auto">
                      <div className="bg-white/5 p-8 rounded-3xl border border-white/5 group/stat hover:border-orange-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin size={16} className="text-orange-500" />
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Installation Zone</p>
                        </div>
                        <p className="text-white font-black text-sm uppercase tracking-widest">{activeData.location}</p>
                      </div>
                      <div className="bg-white/5 p-8 rounded-3xl border border-white/5 group/stat hover:border-orange-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <Activity size={16} className="text-orange-500" />
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">{activeData.metricLabel}</p>
                        </div>
                        <p className="text-white font-black text-3xl tracking-tighter">{activeData.metric}</p>
                      </div>
                    </div>

                    <button className="mt-12 w-full py-6 bg-orange-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] hover:bg-orange-500 hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group/btn shadow-[0_20px_40px_rgba(255,107,0,0.25)] active:scale-95">
                      Request System Specs
                      <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-8 py-20">
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-slate-700 animate-pulse border border-white/10">
                      <Cpu size={48} />
                    </div>
                    <div>
                        <p className="text-white font-black text-xl uppercase tracking-widest mb-2">Awaiting Input</p>
                        <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Select a node to activate system telemetry</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Integrity Footer */}
      <div className="mt-32 pt-16 border-t border-white/5 grid md:grid-cols-3 gap-16 relative z-10">
        {[
          { icon: <ShieldCheck size={28} />, title: "Audit Verification", desc: "Every project is benchmarked against CSA-B214 hydronic standards and AHRI efficiency certifications." },
          { icon: <Binary size={28} />, title: "Data-Driven Sizing", desc: "We utilize Wrightsoft Manual J Load Calculations for precise system matching and peak performance." },
          { icon: <Target size={28} />, title: "Precision Tuning", desc: "Zero-tolerance commissioning ensures your mechanical systems operate at factory-specified peak load profiles." }
        ].map((item, i) => (
          <div key={i} className="flex gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-[1.5rem] flex items-center justify-center text-slate-400 group-hover:text-orange-500 group-hover:border-orange-500 transition-all">
              {item.icon}
            </div>
            <div>
              <h5 className="text-white font-black text-sm uppercase tracking-widest mb-3">{item.title}</h5>
              <p className="text-slate-500 text-xs font-medium leading-relaxed uppercase tracking-[0.15em]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;

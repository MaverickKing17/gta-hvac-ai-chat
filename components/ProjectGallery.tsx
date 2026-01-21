
import React, { useState } from 'react';
import { Cpu, Activity, Zap, Flame, Wind, Droplets, MapPin, Target, ShieldCheck, ChevronRight, Binary, Box, Move3d } from 'lucide-react';

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
  theme: string;
}

const ProjectGallery: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('node-1');
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * 8, y: -x * 8 });
  };

  const nodes: SystemNode[] = [
    {
      id: 'node-1',
      title: 'Precision Hydronic Center',
      category: 'HEATING',
      description: 'The tactical heart of the home. Features a high-efficiency combi-boiler with smart hydraulic separation, ensuring perfect thermal distribution.',
      location: 'Basement Mechanical Room',
      metric: '98.2%',
      metricLabel: 'ANNUAL EFFICIENCY',
      icon: <Flame size={20} />,
      coords: { x: '45%', y: '78%' },
      theme: 'orange'
    },
    {
      id: 'node-2',
      title: 'Cold-Climate Heat Pump',
      category: 'CLIMATE',
      description: 'The exterior engine. An ultra-quiet inverter unit harvesting thermal energy from Toronto winters even at extreme sub-zero levels.',
      location: 'Exterior East Pad',
      metric: '3.4 COP',
      metricLabel: 'THERMAL OUTPUT',
      icon: <Wind size={20} />,
      coords: { x: '85%', y: '68%' },
      theme: 'blue'
    },
    {
      id: 'node-3',
      title: 'Zonal Air Management',
      category: 'COOLING',
      description: 'Smart-damper integration within the central plenum, allowing independent climate profiling for bedrooms vs living areas.',
      location: 'Attic Mechanical Hub',
      metric: '22 SEER2',
      metricLabel: 'EFFICIENCY RATING',
      icon: <Zap size={20} />,
      coords: { x: '55%', y: '22%' },
      theme: 'cyan'
    },
    {
      id: 'node-4',
      title: 'Automated Snow Melt',
      category: 'SPECIALTY',
      description: 'Invisible winter protection. A custom hydronic loop beneath the hardscape that activates via moisture and temp sensors.',
      location: 'Driveway Sub-Structure',
      metric: '45°F',
      metricLabel: 'SLAB TEMP TARGET',
      icon: <Droplets size={20} />,
      coords: { x: '12%', y: '88%' },
      theme: 'orange'
    }
  ];

  const activeData = nodes.find(n => n.id === activeNode);

  return (
    <div className="relative bg-[#020617] py-24 rounded-[4rem] px-8 md:px-16 overflow-hidden border border-white/5 shadow-2xl">
      {/* Background HUD Layer */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Holographic Visualization Area */}
        <div 
          className="w-full lg:w-3/5 relative min-h-[500px] flex items-center justify-center group/viz"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        >
          <div 
            className="relative w-full h-full transition-transform duration-700 ease-out"
            style={{ 
              transform: `perspective(1500px) rotateX(${15 + rotation.x}deg) rotateY(${rotation.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* The 3D House - Holographic Glass Style */}
            <svg viewBox="0 0 800 600" className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
              <defs>
                <linearGradient id="glassWall" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
                </linearGradient>
                <filter id="thermalGlow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Floor Base */}
              <path d="M100,500 L400,580 L700,500 L400,420 Z" fill="rgba(15, 23, 42, 0.6)" stroke="#334155" strokeWidth="1" />
              
              {/* Internal Framing (Grid) */}
              <path d="M200,450 L400,520 L600,450" fill="none" stroke="#1e293b" strokeWidth="1" opacity="0.3" />
              <path d="M400,520 V100" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.5" />

              {/* Dynamic Aura - Brilliant Thermal Effect */}
              {activeNode === 'node-1' && (
                <path d="M250,480 L400,530 L550,480 L400,430 Z" fill="#FF6B00" fillOpacity="0.3" filter="url(#thermalGlow)" className="animate-pulse" />
              )}
              {activeNode === 'node-3' && (
                <path d="M250,230 L400,160 L550,230 L400,290 Z" fill="#22d3ee" fillOpacity="0.25" filter="url(#thermalGlow)" className="animate-pulse" />
              )}

              {/* Transparent Shell */}
              <path d="M200,450 L200,250 L400,100 L600,250 L600,450 L400,520 Z" fill="url(#glassWall)" stroke="#475569" strokeWidth="1.5" />
              <path d="M200,250 L400,320 L600,250" fill="none" stroke="#475569" strokeWidth="1.5" />
              <path d="M400,520 L400,320 L400,100" fill="none" stroke="#475569" strokeWidth="1.5" />
            </svg>

            {/* System Nodes Floating in 3D Space */}
            {nodes.map((node) => (
              <div
                key={node.id}
                className="absolute z-50 transform-gpu"
                style={{ 
                    left: node.coords.x, 
                    top: node.coords.y,
                    transform: 'translateZ(60px)' 
                }}
              >
                <button
                  onClick={() => setActiveNode(node.id)}
                  className="relative group/node"
                >
                  <div className={`relative flex items-center justify-center w-12 h-12 transition-all duration-500 ${activeNode === node.id ? 'scale-125' : 'scale-100 hover:scale-110'}`}>
                    <div className={`absolute inset-0 rounded-2xl animate-ping opacity-20 ${activeNode === node.id ? 'bg-orange-500' : 'bg-slate-400'}`}></div>
                    <div className={`relative z-10 w-full h-full rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${activeNode === node.id ? 'bg-orange-600 border-white text-white shadow-[0_0_40px_rgba(255,107,0,0.6)]' : 'bg-slate-900 border-slate-700 text-slate-400 group-hover/node:border-slate-400'}`}>
                      {node.icon}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div className="absolute top-12 left-12 p-5 border-l-2 border-orange-600/40 rounded-tl-xl backdrop-blur-sm bg-white/5">
             <div className="flex items-center gap-4 text-white">
                <Move3d size={20} className="text-orange-500" />
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Visualizer v4.2</p>
                    <p className="text-sm font-black uppercase tracking-widest">Holo-Core Interface</p>
                </div>
             </div>
          </div>
        </div>

        {/* Technical Sidebar */}
        <div className="w-full lg:w-2/5">
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-600/10 border border-orange-500/20 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">
                <Target size={14} className="animate-spin-slow" />
                Mechanical Precision
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                Integrated <br />
                <span className="text-orange-600">Excellence.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-md">
                We engineer systems that integrate seamlessly into your architecture for invisible, high-fidelity comfort.
              </p>
            </div>

            {/* Data Readout Panel */}
            <div className="relative group/card">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-slate-800 rounded-[3rem] blur-2xl opacity-10"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 min-h-[420px] flex flex-col shadow-2xl">
                {activeData ? (
                  <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-2">{activeData.category} MODULE</p>
                        <h3 className="text-3xl font-black text-white tracking-tighter">{activeData.title}</h3>
                      </div>
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10">
                        {activeData.icon}
                      </div>
                    </div>

                    <p className="text-slate-400 font-medium leading-relaxed text-base mb-10 border-l-2 border-orange-600/30 pl-6">
                      {activeData.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-auto">
                      <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">ZONE ID</p>
                        <p className="text-white font-black text-[11px] uppercase tracking-widest">{activeData.location}</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">{activeData.metricLabel}</p>
                        <p className="text-white font-black text-2xl tracking-tighter">{activeData.metric}</p>
                      </div>
                    </div>

                    <button className="mt-10 w-full py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 group/btn shadow-xl active:scale-95">
                      System Specifications
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-30 py-10">
                    <Cpu size={48} className="animate-pulse" />
                    <p className="text-xs font-black text-white uppercase tracking-widest">Select Node to Initialize</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-12 border-t border-white/5 grid md:grid-cols-3 gap-12 relative z-10">
        {[
          { icon: <ShieldCheck size={20} />, title: "TSSA Compliant", desc: "Rigorous safety inspections for all fuel-fired and pressurized systems." },
          { icon: <Binary size={20} />, title: "Calculated Sizing", desc: "Manual J load profiles ensure every ton of cooling is perfectly matched." },
          { icon: <Activity size={20} />, title: "Live Diagnostics", desc: "Every smart component tested for real-time telemetry accuracy." }
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="text-orange-500 mt-1">{item.icon}</div>
            <div>
              <h5 className="text-white font-black text-xs uppercase tracking-widest mb-1">{item.title}</h5>
              <p className="text-slate-500 text-[10px] font-medium leading-relaxed uppercase tracking-wider">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;

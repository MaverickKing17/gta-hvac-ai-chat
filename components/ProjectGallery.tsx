
import React, { useState } from 'react';
import { 
  Cpu, Activity, Zap, Flame, Wind, Droplets, MapPin, 
  Target, ShieldCheck, ChevronRight, Binary, Box, 
  Terminal, Search, ClipboardCheck, ArrowUpRight, Info
} from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectGallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const activeProject = PROJECTS.find(p => p.id === selectedId) || PROJECTS[0];

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#020617] py-24 rounded-[3.5rem] px-8 md:px-16 overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
      {/* HUD Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-6">
              <Terminal size={14} className="animate-pulse" />
              Field Log: Operational Case Studies
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              Precision <br />
              <span className="text-orange-600">Deployments.</span>
            </h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-xl">
              Real-world documentation of our most complex mechanical installations across the Greater Toronto Area. Each build is a testament to honest salesmanship and expert craftsmanship.
            </p>
          </div>
          
          {/* Diagnostic Metrics */}
          <div className="hidden lg:flex items-center gap-12 border-l border-white/10 pl-12 h-24">
            <div className="space-y-1">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Total Projects</p>
              <p className="text-white text-3xl font-black tracking-tighter">14,200+</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">System Precision</p>
              <p className="text-orange-500 text-3xl font-black tracking-tighter">±0.1°C</p>
            </div>
          </div>
        </div>

        {/* Main Diagnostic View */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Project Navigation (Field Log Selector) */}
          <div className="lg:col-span-3 space-y-3 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                  selectedId === project.id 
                    ? 'bg-orange-600 border-orange-500 shadow-[0_15px_30px_rgba(234,88,12,0.3)]' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <div className="relative z-10">
                  <p className={`text-[8px] font-black uppercase tracking-[0.2em] mb-1 ${selectedId === project.id ? 'text-white/60' : 'text-slate-500'}`}>
                    {project.category} // {project.systemId.split('-')[1]}
                  </p>
                  <p className={`text-sm font-black tracking-tight ${selectedId === project.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {project.title}
                  </p>
                </div>
                {selectedId === project.id && (
                  <div className="absolute top-0 right-0 p-3 text-white/20">
                    <Activity size={24} className="animate-pulse" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Imaging & Telemetry Panel - ENHANCED RELATABILITY */}
          <div className="lg:col-span-6">
            <div className="relative group/image overflow-hidden rounded-[2.5rem] border border-white/15 bg-slate-900 aspect-video lg:aspect-square flex items-center justify-center shadow-2xl">
              {/* Image with Scanning Animation */}
              <img 
                src={activeProject.imageUrl} 
                alt={activeProject.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Visual Scanner HUD Overlay */}
              <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover/image:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20 opacity-80"></div>
                
                {/* HUD Corners */}
                <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-orange-500"></div>
                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/30"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/30"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-orange-500"></div>
                
                {/* Relatability Callouts (Appear on Hover) */}
                <div className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-1/4 right-[20%] p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                    <p className="text-[8px] font-black text-orange-400 uppercase tracking-widest">Component Analysis</p>
                    <p className="text-[10px] text-white font-bold">Main Manifold Distribution</p>
                  </div>
                  <div className="absolute bottom-1/3 left-[15%] p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                    <p className="text-[8px] font-black text-orange-400 uppercase tracking-widest">Thermal Sync</p>
                    <p className="text-[10px] text-white font-bold">Inbound: 142°F // Out: 130°F</p>
                  </div>
                </div>

                {/* Scan Line Animation */}
                <div className="absolute left-8 right-8 top-1/2 h-[2px] bg-orange-500/60 animate-[scan_3s_ease-in-out_infinite] blur-[1px] shadow-[0_0_10px_#ea580c]"></div>
                
                {/* Floating Meta Labels */}
                <div className="absolute top-12 left-12 space-y-1">
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Capture Node: {activeProject.systemId}</p>
                  <p className="text-white/60 text-xs font-mono">ENCRYPTED_FIELD_INTEL_2026</p>
                </div>
                <div className="absolute bottom-12 left-12">
                   <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-xl">
                      <MapPin size={14} className="text-orange-500" />
                      <span className="text-[11px] text-white font-black uppercase tracking-widest">{activeProject.location}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Sidebar */}
          <div className="lg:col-span-3">
            <div className="h-full flex flex-col justify-between bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-sm">
              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                    <Activity size={12} className="text-orange-500" />
                    Diagnostic Specs
                  </h4>
                  <div className="space-y-8">
                    <div>
                      <p className="text-white/50 text-[10px] font-black uppercase mb-1.5 tracking-widest">Efficiency Benchmark</p>
                      <p className="text-white text-3xl font-black tracking-tighter">{activeProject.efficiency}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-[10px] font-black uppercase mb-1.5 tracking-widest">Commission Year</p>
                      <p className="text-white text-3xl font-black tracking-tighter">{activeProject.year}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-[10px] font-black uppercase mb-4 tracking-widest">Primary Components</p>
                      <div className="flex flex-wrap gap-2.5">
                        {activeProject.components.map((comp, idx) => (
                          <span key={idx} className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase border border-white/10 hover:bg-orange-600 transition-colors">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/10">
                  <div className="flex items-start gap-3 mb-4">
                    <Info size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-white font-bold text-sm tracking-tight leading-snug">
                      Mission Brief:
                    </p>
                  </div>
                  <p className="text-slate-400 text-[15px] leading-relaxed italic">
                    "{activeProject.description}"
                  </p>
                </div>
              </div>

              <div className="space-y-5 pt-12">
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95 group"
                >
                  Request System Specs
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-[9px] text-slate-500 font-black text-center uppercase tracking-widest opacity-60">
                  Authentication: Licensed Master Signed // {activeProject.id}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Global Verification Footer */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck size={20} />, label: "Security", val: "TSSA Certified" },
            { icon: <ClipboardCheck size={20} />, label: "Verification", val: "Manual J Calculation" },
            { icon: <Binary size={20} />, label: "Precision", val: "±0.1% Variance" },
            { icon: <Search size={20} />, label: "Audit", val: "Bi-Annual Analysis" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-5 group">
              <div className="text-orange-500 bg-white/5 p-3 rounded-xl border border-white/5 group-hover:bg-orange-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</p>
                <p className="text-white font-black text-[11px] uppercase tracking-widest mt-1">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 15%; }
          50% { top: 85%; }
          100% { top: 15%; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 107, 0, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 107, 0, 0.7);
        }
      `}</style>
    </div>
  );
};

export default ProjectGallery;

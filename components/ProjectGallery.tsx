
import React, { useState } from 'react';
import { 
  Cpu, Activity, Zap, Flame, Wind, Droplets, MapPin, 
  Target, ShieldCheck, ChevronRight, Binary, Box, 
  Terminal, Search, ClipboardCheck, ArrowUpRight
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
              Real-world documentation of our most complex mechanical installations across the Greater Toronto Area. Each project undergoes a rigorous 48-hour stress test before commissioning.
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

          {/* Imaging & Telemetry Panel */}
          <div className="lg:col-span-6">
            <div className="relative group/image overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 aspect-video lg:aspect-square flex items-center justify-center shadow-2xl">
              {/* Image with Scanning Animation */}
              <img 
                src={activeProject.imageUrl} 
                alt={activeProject.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Visual Scanner HUD Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                
                {/* HUD Corners */}
                <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-orange-500/50"></div>
                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/20"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-orange-500/50"></div>
                
                {/* Scan Line Animation */}
                <div className="absolute left-8 right-8 top-1/2 h-[1px] bg-orange-500/40 animate-[scan_3s_ease-in-out_infinite] blur-[1px]"></div>
                
                {/* Floating Meta Labels */}
                <div className="absolute top-12 left-12 space-y-1">
                  <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Capture Node</p>
                  <p className="text-white text-xs font-mono">0x4F92-TOR</p>
                </div>
                <div className="absolute bottom-12 left-12">
                   <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <MapPin size={12} className="text-orange-500" />
                      <span className="text-[10px] text-white font-black uppercase tracking-widest">{activeProject.location}</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Sidebar */}
          <div className="lg:col-span-3">
            <div className="h-full flex flex-col justify-between bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-sm">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Diagnostic Specs</h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-white/40 text-[9px] font-black uppercase mb-1 tracking-widest">Efficiency Benchmark</p>
                      <p className="text-white text-2xl font-black tracking-tighter">{activeProject.efficiency}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[9px] font-black uppercase mb-1 tracking-widest">Commission Year</p>
                      <p className="text-white text-2xl font-black tracking-tighter">{activeProject.year}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[9px] font-black uppercase mb-3 tracking-widest">System Components</p>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.components.map((comp, idx) => (
                          <span key={idx} className="bg-white/5 px-3 py-1.5 rounded-lg text-[9px] font-black text-slate-300 uppercase border border-white/5">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <p className="text-slate-400 text-sm leading-relaxed italic mb-8">
                    "{activeProject.description}"
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                >
                  System Specs
                  <ArrowUpRight size={16} />
                </button>
                <p className="text-[8px] text-slate-500 font-black text-center uppercase tracking-widest">
                  Authentication: Master Tech Signed // {activeProject.id}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Global Verification Footer */}
        <div className="mt-16 pt-12 border-t border-white/5 grid md:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck size={20} />, label: "Security", val: "TSSA Certified" },
            { icon: <ClipboardCheck size={20} />, label: "Verification", val: "Manual J Calculation" },
            { icon: <Binary size={20} />, label: "Precision", val: "±0.1% Variance" },
            { icon: <Search size={20} />, label: "Audit", val: "Bi-Annual Analysis" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-orange-500">{item.icon}</div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</p>
                <p className="text-white font-bold text-xs uppercase tracking-widest">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 10%; }
          50% { top: 90%; }
          100% { top: 10%; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 107, 0, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 107, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ProjectGallery;

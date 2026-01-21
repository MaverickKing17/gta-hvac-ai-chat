
import React, { useState } from 'react';
import { PROJECTS, ProjectExtended } from '../constants';
import { Target, Cpu, Activity, ArrowUpRight, Shield, Layers, Camera, Maximize2, MapPin, Gauge } from 'lucide-react';

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const categories = ['All', 'Residential', 'Commercial', 'Specialty'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="relative bg-[#020617] py-32 rounded-[3.5rem] px-8 md:px-16 overflow-hidden">
      {/* HUD-Style Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 blur-[150px] -z-10"></div>

      {/* Header Module */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-orange-600/10 border border-orange-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-orange-500">
            <Activity size={14} className="animate-pulse" />
            Active Engineering Records
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Mechanical <br />
            <span className="text-orange-600">Archive.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
            A high-fidelity record of Atomic Air's craftsmanship. We don't just install systems; we build mechanical masterpieces optimized for Toronto's core infrastructure.
          </p>
        </div>

        {/* Technical Filter Control */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl flex flex-wrap gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 ${
                filter === cat 
                  ? 'bg-orange-600 text-white shadow-xl shadow-orange-600/20 translate-y-[-1px]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project: ProjectExtended) => (
          <div 
            key={project.id} 
            className="group relative h-[600px] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Main Project Image */}
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 ease-out scale-100 group-hover:scale-110"
            />
            
            {/* Scanline Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[2s] ease-in-out pointer-events-none z-30"></div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>

            {/* Static HUD Info (Always Visible) */}
            <div className="absolute top-8 left-8 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center text-orange-500 shadow-xl">
                  <Cpu size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Record Index</p>
                  <p className="text-xs font-black text-white uppercase tracking-wider leading-none">#{project.systemId}</p>
                </div>
              </div>
            </div>

            {/* Expanded Technical View (On Hover) */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-orange-600 text-white rounded text-[9px] font-black uppercase tracking-[0.2em]">{project.category}</span>
                <span className="flex items-center gap-1.5 text-white/50 text-[9px] font-black uppercase tracking-[0.2em]">
                  <MapPin size={10} className="text-orange-500" />
                  {project.location}
                </span>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter leading-tight">{project.title}</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 line-clamp-3">{project.description}</p>
              
              {/* Performance Metrics Bar */}
              <div className="flex items-center gap-8 mb-8 border-y border-white/10 py-6">
                <div>
                  <p className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">Primary Efficiency</p>
                  <div className="flex items-center gap-2">
                    <Gauge size={14} className="text-orange-500" />
                    <span className="text-lg font-black text-white tracking-tighter">{project.efficiency}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">Commission Year</p>
                  <span className="text-lg font-black text-white tracking-tighter uppercase">{project.year}</span>
                </div>
              </div>

              {/* Component Reveal Sidebar */}
              <div className="flex flex-wrap gap-2">
                {project.components.map((comp, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-white/70 uppercase tracking-widest">
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Interaction Button */}
            <div className="absolute bottom-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
              <button className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:bg-orange-500 transition-all active:scale-95">
                <Maximize2 size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Methodology Footer */}
      <div className="mt-32 pt-16 border-t border-white/10 grid md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-1">
          <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center text-orange-500 mb-6">
            <Shield size={24} />
          </div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-3">Integrity Log</h4>
          <p className="text-slate-500 text-xs font-medium leading-relaxed">Every installation documented here passed our proprietary 124-point Master Tech audit.</p>
        </div>
        <div className="md:col-span-1">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 mb-6">
            <Layers size={24} />
          </div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-3">Service Fidelity</h4>
          <p className="text-slate-500 text-xs font-medium leading-relaxed">Images represent authentic field conditions. No staged studio photography is utilized in our records.</p>
        </div>
        <div className="md:col-span-2 bg-white/5 p-8 rounded-3xl border border-white/10 flex items-center justify-between">
          <div>
            <h4 className="text-white font-black text-lg tracking-tighter mb-1">Request Field Intelligence</h4>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Get a detailed case study of our commercial or residential retrofits.</p>
          </div>
          <button className="px-8 py-4 bg-orange-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-orange-500 transition-all">
            Download Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;

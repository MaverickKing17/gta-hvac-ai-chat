
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Plus } from 'lucide-react';

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Specialty'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Project Gallery</h2>
          <p className="text-lg text-gray-500">
            Real photos from our job sites across Toronto. We take pride in clean, precision mechanical rooms.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                filter === cat 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20' 
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="relative group rounded-3xl overflow-hidden break-inside-avoid shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-orange-500 font-bold text-sm mb-2 uppercase tracking-widest">{project.category}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-6">{project.description}</p>
              <button className="flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 w-fit px-5 py-2 rounded-xl backdrop-blur-md transition-colors">
                <Plus size={18} /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;

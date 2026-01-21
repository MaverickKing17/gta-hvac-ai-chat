
import React from 'react';
import { TIMELINE } from '../constants';

const Story: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/atomic-team/800/1000" 
            alt="The Atomic Air Team" 
            className="rounded-3xl object-cover w-full aspect-[4/5] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl border-orange-500/30">
            <p className="text-4xl font-bold text-orange-500 mb-1">Since 1978</p>
            <p className="text-gray-400 font-medium">Built on Trust & Integrity</p>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Our Legacy</h2>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Since arriving in Canada in 1978 and establishing Atomic Heating and Cooling in 1984, our family has earned a reputation as one of Toronto's top HVAC providers. We treat every home as if it were our own.
        </p>

        <div className="space-y-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
          {TIMELINE.map((event, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gray-900 border border-orange-500/50 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              </div>
              <p className="text-orange-500 font-bold mb-1 tracking-tighter text-lg">{event.year}</p>
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-gray-500 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;

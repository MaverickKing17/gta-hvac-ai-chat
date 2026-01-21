
import React from 'react';
import { TIMELINE } from '../constants';

const Story: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1">
        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-600/5 rounded-[2.5rem] blur-2xl group-hover:bg-orange-600/10 transition-colors"></div>
          <div className="relative">
            <img 
              src="https://i.ibb.co/XkW63hRx/gemini-3-pro-image-preview-2k-a-Replace-the-current.png" 
              alt="Atomic Air Legacy Installation" 
              className="rounded-3xl w-full h-auto shadow-2xl transition-all duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-slate-200 shadow-2xl max-w-[280px] z-10">
              <p className="text-4xl font-black text-orange-600 mb-1 tracking-tighter">Since 1978</p>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Built on Trust & Integrity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-slate-100 rounded-lg text-slate-600 text-[11px] font-bold uppercase tracking-widest">
          Trusted GTA Heritage
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
          A Legacy of <br />
          <span className="text-orange-600">Mechanical Excellence</span>
        </h2>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
          Since arriving in Canada in 1978 and establishing Atomic Heating and Cooling in 1984, our family has earned a reputation as Toronto's premier HVAC specialists. We treat every home with the same integrity that built our name.
        </p>

        <div className="space-y-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200"></div>
          {TIMELINE.map((event, index) => (
            <div key={index} className="relative pl-12 group">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10 group-hover:border-orange-600 transition-colors shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-orange-600 transition-all"></div>
              </div>
              <div>
                <p className="text-orange-600 font-black mb-1 tracking-tighter text-lg">{event.year}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{event.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px] max-w-lg">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;

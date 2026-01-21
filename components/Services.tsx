
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Enterprise-Grade Solutions</h2>
          <p className="text-lg text-slate-600 font-medium">
            Engineered for longevity, efficiency, and peak performance. We don't just install; we optimize your living environment.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-500 bg-slate-50">Residential</div>
          <div className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-500 bg-slate-50">Commercial</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = (Icons as any)[service.icon];
          return (
            <div 
              key={service.id} 
              className="pro-card group p-10 rounded-3xl flex flex-col h-full bg-white border border-slate-200 hover:border-orange-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 mb-8 border border-slate-100 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(255,107,0,0.3)] transition-all">
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{service.title}</h3>
              <p className="text-slate-700 leading-relaxed mb-10 flex-grow text-[16px] font-medium">
                {service.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-100">
                {service.rebateAvailable ? (
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-green-700 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">Rebate Eligible</span>
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Expert Install</span>
                )}
                <button className="text-orange-600 font-black text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Details <Icons.ChevronRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

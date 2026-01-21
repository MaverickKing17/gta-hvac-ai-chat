
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Enterprise-Grade Solutions</h2>
          <p className="text-lg text-slate-600">
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
              className="pro-card group p-8 rounded-xl flex flex-col h-full bg-white border border-slate-200"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 mb-8 border border-slate-100 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-10 flex-grow text-[15px]">
                {service.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                {service.rebateAvailable ? (
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-2.5 py-1 rounded">Rebate Eligible</span>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Expert Install</span>
                )}
                <button className="text-orange-600 font-bold text-sm flex items-center gap-1 hover:translate-x-1 transition-transform">
                  Learn more <Icons.ChevronRight size={14} />
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

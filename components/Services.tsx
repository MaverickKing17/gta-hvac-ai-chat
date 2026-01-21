
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div>
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Master Craftsmanship</h2>
        <p className="text-lg text-gray-400">
          Residential • Commercial • Installation • Maintenance • 24/7 Emergency Service
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => {
          const Icon = (Icons as any)[service.icon];
          return (
            <div 
              key={service.id} 
              className="group glass-card p-8 rounded-3xl hover:bg-orange-600/10 transition-all duration-500 cursor-pointer border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon size={120} />
              </div>

              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-orange-500 mb-6 border border-white/10 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Icon size={28} />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              {service.rebateAvailable && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-[10px] font-black uppercase tracking-widest">
                  <Icons.Zap size={12} />
                  Rebate Eligible
                </div>
              )}
              
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-orange-500 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                Learn More <Icons.ChevronRight size={16} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

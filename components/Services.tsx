
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Precision Engineering</h2>
        <p className="text-xl text-gray-500 font-light tracking-tight max-w-2xl mx-auto leading-relaxed">
          From heritage home retrofits to commercial mechanical rooms, we deliver high-integrity solutions that stand the test of time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = (Icons as any)[service.icon];
          return (
            <div 
              key={service.id} 
              className="group relative glass-card p-10 rounded-[2.5rem] hover:bg-white/[0.05] transition-all duration-700 cursor-pointer border border-white/[0.08] overflow-hidden flex flex-col h-full"
            >
              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/5 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-orange-500 mb-8 border border-white/10 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                  <Icon size={32} strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors tracking-tight">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors font-medium">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  {service.rebateAvailable ? (
                    <div className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-green-500 bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/20">
                      <Icons.Zap size={10} fill="currentColor" />
                      Rebate Ready
                    </div>
                  ) : (
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">Standard Program</div>
                  )}
                  
                  <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-orange-500 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    Details <Icons.ChevronRight size={14} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Decorative Background Icon */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-125 transition-all duration-1000">
                <Icon size={240} strokeWidth={1} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

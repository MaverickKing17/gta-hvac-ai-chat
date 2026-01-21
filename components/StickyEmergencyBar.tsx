
import React from 'react';
import { AlertTriangle, Clock, Phone, ChevronRight } from 'lucide-react';
import { PHONE } from '../constants';

const StickyEmergencyBar: React.FC = () => {
  return (
    <div className="relative z-[100] group">
      {/* High-Impact Alert Bar */}
      <div className="bg-slate-950 border-b border-orange-500/20 px-4 md:px-12 py-3 overflow-hidden">
        {/* Background Mesh/Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #ea580c 12.5%, transparent 12.5%, transparent 50%, #ea580c 50%, #ea580c 62.5%, transparent 62.5%, transparent 100%)', backgroundSize: '4px 4px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 opacity-90"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Status Segment */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                <div className="relative w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">System Live</span>
            </div>
            
            <div className="hidden md:flex items-center gap-3 text-white/90">
              <AlertTriangle size={14} className="text-white animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] border-r border-white/20 pr-6">24/7 Critical Response</span>
            </div>
          </div>

          {/* Action Segment */}
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-2 text-white/80">
              <Clock size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Avg. Response: 45 Mins</span>
            </div>

            <a 
              href={`tel:${PHONE}`} 
              className="group/btn relative flex items-center gap-3 bg-white text-slate-900 px-6 py-2 rounded-full font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <Phone size={14} className="relative z-10 group-hover/btn:text-white transition-colors" />
              <span className="relative z-10 group-hover/btn:text-white transition-colors">Book Repair: {PHONE}</span>
              <ChevronRight size={14} className="relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        {/* Top/Bottom Scanner Lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/10"></div>
      </div>
    </div>
  );
};

export default StickyEmergencyBar;

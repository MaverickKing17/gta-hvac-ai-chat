
import React from 'react';
import { AlertTriangle, Clock } from 'lucide-react';
import { PHONE } from '../constants';

const StickyEmergencyBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-6 flex items-center justify-center gap-6 text-xs font-black uppercase tracking-[0.2em] z-[100] relative">
      <div className="hidden sm:flex items-center gap-2">
        <AlertTriangle size={14} />
        24/7 EMERGENCY?
      </div>
      <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
      <a href={`tel:${PHONE}`} className="hover:underline flex items-center gap-2">
        <Clock size={14} />
        BOOK REPAIR NOW: {PHONE}
      </a>
    </div>
  );
};

export default StickyEmergencyBar;


import React, { useState } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { COMPANY_NAME, PHONE } from '../constants';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Legacy', id: 'story' },
    { label: 'Solutions', id: 'services' },
    { label: 'Rebate Estimator', id: 'rebates' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 px-6 md:px-12 flex items-center justify-between shadow-sm">
      <div 
        className="flex items-center gap-3 cursor-pointer group" 
        onClick={() => scrollTo('hero')}
      >
        <div className="w-9 h-9 bg-slate-950 flex items-center justify-center font-black text-xl text-white rounded-lg shadow-lg group-hover:bg-orange-600 transition-colors duration-300">A</div>
        <span className="font-black text-xl tracking-tighter text-slate-950 group-hover:text-orange-600 transition-colors duration-300">{COMPANY_NAME}</span>
      </div>

      {/* Desktop Menu - High Prominence Redesign */}
      <div className="hidden lg:flex items-center gap-12">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all relative py-2 border-b-2 ${
              activeSection === item.id 
                ? 'text-orange-600 border-orange-600' 
                : 'text-slate-900 border-transparent hover:text-orange-600 hover:border-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden xl:flex flex-col items-end">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Priority Dispatch</p>
          <a 
            href={`tel:${PHONE}`}
            className="text-slate-950 hover:text-orange-600 font-black text-base tracking-tight transition-colors"
          >
            {PHONE}
          </a>
        </div>
        
        <a 
          href={`tel:${PHONE}`}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg shadow-orange-600/20 transition-all active:scale-95"
        >
          Contact <span className="hidden sm:inline">Now</span>
          <ChevronRight size={14} />
        </a>
        
        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-2xl font-black uppercase tracking-tight text-left flex items-center justify-between group ${
                activeSection === item.id ? 'text-orange-600' : 'text-slate-900'
              }`}
            >
              {item.label}
              <ChevronRight size={24} className="opacity-20 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
          <div className="pt-6 border-t border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 text-center">Live Dispatch Availability</p>
            <a 
              href={`tel:${PHONE}`}
              className="w-full bg-slate-950 text-white px-6 py-5 rounded-2xl text-center font-black text-lg tracking-tight flex items-center justify-center gap-3 shadow-xl"
            >
              <Phone size={20} />
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

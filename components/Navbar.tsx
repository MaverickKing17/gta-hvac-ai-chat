
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
    { label: 'Project Gallery', id: 'gallery' },
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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 px-6 md:px-12 flex items-center justify-between">
      <div 
        className="flex items-center gap-3 cursor-pointer group" 
        onClick={() => scrollTo('hero')}
      >
        <div className="w-8 h-8 bg-orange-600 flex items-center justify-center font-bold text-lg text-white rounded-[4px] shadow-sm">A</div>
        <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">{COMPANY_NAME}</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-[13px] font-medium transition-all relative py-2 ${
              activeSection === item.id ? 'text-slate-900 border-b-2 border-orange-600' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a 
          href={`tel:${PHONE}`}
          className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 ms-button text-[13px] font-semibold flex items-center gap-2 shadow-sm"
        >
          {PHONE}
          <ChevronRight size={14} />
        </a>
        
        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-xl font-semibold text-left ${
                activeSection === item.id ? 'text-orange-600' : 'text-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={`tel:${PHONE}`}
            className="bg-slate-900 text-white px-6 py-4 rounded-lg text-center font-bold"
          >
            Call {PHONE}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

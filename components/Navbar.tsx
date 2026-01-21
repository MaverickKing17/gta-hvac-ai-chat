
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_NAME, PHONE } from '../constants';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Story', id: 'story' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Rebates', id: 'rebates' },
    { label: 'Contact', id: 'contact' },
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
    <nav className="sticky-nav glass-card border-x-0 border-t-0 py-4 px-6 md:px-12 flex items-center justify-between z-50">
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => scrollTo('hero')}
      >
        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">A</div>
        <span className="font-bold text-lg hidden sm:block tracking-tight text-white">{COMPANY_NAME}</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-sm font-medium transition-colors hover:text-orange-500 ${
              activeSection === item.id ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            {item.label}
          </button>
        ))}
        <a 
          href={`tel:${PHONE}`}
          className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <Phone size={16} />
          {PHONE}
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass-card p-6 border-x-0 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-lg font-semibold text-left ${
                activeSection === item.id ? 'text-orange-500' : 'text-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={`tel:${PHONE}`}
            className="bg-orange-600 text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-3"
          >
            <Phone size={20} />
            {PHONE}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

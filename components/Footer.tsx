
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { COMPANY_NAME, PHONE, EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20">
      <div className="relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full -z-10"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Get a Fast Quote</h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
          Tell us about your project. Most residential quotes delivered within 24 hours.
        </p>

        <form 
          action="https://formspree.io/f/xojjbbza" 
          method="POST"
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-gray-600"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-gray-600"
            />
          </div>
          <input 
            type="text" 
            name="service"
            placeholder="Service Needed (e.g., Heat Pump Installation)" 
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-gray-600"
          />
          <textarea 
            name="message"
            placeholder="Tell us about your home and your HVAC needs..." 
            rows={4}
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-gray-600"
          ></textarea>
          
          <button 
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-600/20 active:scale-[0.98] group"
          >
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            SEND REQUEST
          </button>
        </form>
      </div>

      <div className="flex flex-col justify-between">
        <div className="grid gap-12">
          <div className="flex items-start gap-6 group">
            <div className="bg-white/5 p-4 rounded-2xl text-orange-500 border border-white/10 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-400 transition-all shadow-lg">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-orange-500/60 uppercase tracking-[0.2em] mb-1">Direct Line</p>
              <a href={`tel:${PHONE}`} className="text-2xl font-bold text-white hover:text-orange-500 transition-colors tracking-tight">{PHONE}</a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="bg-white/5 p-4 rounded-2xl text-orange-500 border border-white/10 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-400 transition-all shadow-lg">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-orange-500/60 uppercase tracking-[0.2em] mb-1">Email Inquiry</p>
              <a href={`mailto:${EMAIL}`} className="text-2xl font-bold text-white hover:text-orange-500 transition-colors tracking-tight">{EMAIL}</a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="bg-white/5 p-4 rounded-2xl text-orange-500 border border-white/10 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-400 transition-all shadow-lg">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-orange-500/60 uppercase tracking-[0.2em] mb-1">Service Area</p>
              <p className="text-2xl font-bold text-white leading-tight tracking-tight">Toronto, Etobicoke, <br />Mississauga & GTA</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors"><Instagram size={22} /></a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors"><Facebook size={22} /></a>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Legacy of Excellence</p>
            <p className="text-gray-600 text-[10px] font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { COMPANY_NAME, PHONE, EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 py-12">
      <div>
        <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Connect with Us</h2>
        <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-lg">
          We pride ourselves on honest communication. Send us a message and a master contractor will get back to you shortly.
        </p>

        <form 
          action="https://formspree.io/f/xojjbbza" 
          method="POST"
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" required className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-all" />
            <input name="email" type="email" placeholder="Email" required className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-all" />
          </div>
          <input name="service" placeholder="Service (e.g., Boiler Service)" required className="w-full bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-all" />
          <textarea name="message" placeholder="Project details..." rows={4} required className="w-full bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-orange-500 transition-all"></textarea>
          
          <button type="submit" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 ms-button flex items-center gap-2 shadow-lg w-full sm:w-auto">
            <Send size={18} />
            Submit Request
          </button>
        </form>
      </div>

      <div className="flex flex-col justify-between">
        <div className="space-y-12">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-white/10 rounded-lg text-orange-500"><Phone size={24} /></div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us Directly</p>
              <a href={`tel:${PHONE}`} className="text-3xl font-bold hover:text-orange-500 transition-colors tracking-tight">{PHONE}</a>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="p-3 bg-white/10 rounded-lg text-orange-500"><Mail size={24} /></div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Inquiry</p>
              <a href={`mailto:${EMAIL}`} className="text-2xl font-bold hover:text-orange-500 transition-colors">{EMAIL}</a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Licensed & Insured.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

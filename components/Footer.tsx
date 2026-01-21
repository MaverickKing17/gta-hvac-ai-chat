
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { COMPANY_NAME, PHONE, EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Get a Fast Quote</h2>
        <p className="text-xl text-gray-500 mb-10">
          Tell us about your project. Most residential quotes delivered within 24 hours.
        </p>

        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <input 
            type="text" 
            placeholder="Service Needed (e.g., Heat Pump Installation)" 
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
          />
          <textarea 
            placeholder="Project Details" 
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
          ></textarea>
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-600/10">
            <Send size={20} />
            SEND REQUEST
          </button>
        </form>
      </div>

      <div className="flex flex-col justify-between">
        <div className="grid gap-10">
          <div className="flex items-start gap-6 group">
            <div className="bg-white/5 p-4 rounded-2xl text-orange-500 border border-white/10 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Direct Line</p>
              <a href={`tel:${PHONE}`} className="text-2xl font-bold text-white hover:text-orange-500 transition-colors">{PHONE}</a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="bg-white/5 p-4 rounded-2xl text-orange-500 border border-white/10 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Inquiry</p>
              <a href={`mailto:${EMAIL}`} className="text-2xl font-bold text-white hover:text-orange-500 transition-colors">{EMAIL}</a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="bg-white/5 p-4 rounded-2xl text-orange-500 border border-white/10 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Service Area</p>
              <p className="text-2xl font-bold text-white leading-tight">Toronto, Etobicoke, <br />Mississauga & GTA</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={24} /></a>
          </div>
          <p className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


import React from 'react';
import { Mail, Phone, Instagram, Facebook, Send, ShieldCheck, MapPin, ExternalLink, Globe, Lock, LifeBuoy, FileText } from 'lucide-react';
import { COMPANY_NAME, PHONE, EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Precision Engineering Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Upper Footer: Contact & Form */}
        <div className="grid lg:grid-cols-2 gap-24 pb-20 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-black uppercase tracking-[0.3em] mb-8 text-orange-500">
              <ShieldCheck size={12} />
              Secure Engineering Channel
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-white">
              Connect with <br />
              <span className="text-orange-600">Our Masters.</span>
            </h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-lg font-medium">
              Every project starts with a technical consultation. Submit your blueprints or requirements and an Atomic Master Contractor will respond within 4 business hours.
            </p>

            <form 
              action="https://formspree.io/f/xojjbbza" 
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative group">
                  <input name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all font-semibold text-sm" placeholder="Full Name" />
                  <div className="absolute top-0 right-4 h-full flex items-center opacity-0 group-focus-within:opacity-100 transition-opacity">
                    <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="relative group">
                  <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all font-semibold text-sm" placeholder="Email Address" />
                </div>
              </div>
              <div className="relative group">
                <input name="service" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all font-semibold text-sm" placeholder="Service Type (e.g. Heat Pump Retrofit)" />
              </div>
              <div className="relative group">
                <textarea name="message" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.08] transition-all font-semibold text-sm resize-none" placeholder="Project Specifications..."></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button type="submit" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-12 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_20px_40px_rgba(234,88,12,0.2)] text-xs uppercase tracking-[0.2em] group">
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Dispatch Inquiry
                </button>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hidden sm:block">
                  Avg. Response: <span className="text-white">128 Minutes</span>
                </div>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-between pt-12 lg:pt-0">
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-10">
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Emergency Dispatch</p>
                    <a href={`tel:${PHONE}`} className="text-2xl font-black text-white hover:text-orange-500 transition-colors tracking-tighter">{PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Direct Engineering</p>
                    <a href={`mailto:${EMAIL}`} className="text-xl font-black text-white hover:text-orange-500 transition-colors tracking-tight">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-sm font-bold text-white tracking-tight">Etobicoke, ON <br /> Serving Greater Toronto</p>
                  </div>
                </div>
              </div>
              
              {/* Pro Link Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white text-[11px] font-black uppercase tracking-[0.2em] mb-6">Solutions</h4>
                  <ul className="space-y-4 text-xs font-bold text-slate-500">
                    <li><a href="#services" className="hover:text-orange-500 transition-colors">Hydronic Systems</a></li>
                    <li><a href="#services" className="hover:text-orange-500 transition-colors">Heat Pump Retrofits</a></li>
                    <li><a href="#services" className="hover:text-orange-500 transition-colors">Commercial HVAC</a></li>
                    <li><a href="#services" className="hover:text-orange-500 transition-colors">Precision Cooling</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-[11px] font-black uppercase tracking-[0.2em] mb-6">Support</h4>
                  <ul className="space-y-4 text-xs font-bold text-slate-500">
                    <li className="flex items-center gap-2"><LifeBuoy size={12} /> <a href="#" className="hover:text-orange-500 transition-colors">Technical Help</a></li>
                    <li className="flex items-center gap-2"><Globe size={12} /> <a href="#map" className="hover:text-orange-500 transition-colors">Service Area</a></li>
                    <li className="flex items-center gap-2"><FileText size={12} /> <a href="#rebates" className="hover:text-orange-500 transition-colors">Rebate Guide</a></li>
                    <li className="flex items-center gap-2"><ExternalLink size={12} /> <a href="#" className="hover:text-orange-500 transition-colors">Emergency Portal</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tech Status Badge */}
            <div className="mt-12 p-6 bg-white/[0.03] rounded-2xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Engineering Systems Online</span>
              </div>
              <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">
                VER: 2026.04.12
              </div>
            </div>
          </div>
        </div>

        {/* Lower Footer: Compliance & Social */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-10 pb-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-colors">
                <Lock size={12} className="text-orange-500" /> Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Warranty Info</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-600 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-600 transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

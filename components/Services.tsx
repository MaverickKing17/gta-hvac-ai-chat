
import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

const categoryColors: Record<string, { primary: string, light: string, text: string }> = {
  heating: { primary: 'bg-orange-600', light: 'bg-orange-50', text: 'text-orange-600' },
  cooling: { primary: 'bg-cyan-600', light: 'bg-cyan-50', text: 'text-cyan-600' },
  water: { primary: 'bg-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-600' },
  specialty: { primary: 'bg-slate-900', light: 'bg-slate-50', text: 'text-slate-900' },
  commercial: { primary: 'bg-indigo-600', light: 'bg-indigo-50', text: 'text-indigo-600' }
};

const Services: React.FC = () => {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      window.scrollTo({
        top: contact.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-12 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-md text-[9px] font-black uppercase tracking-[0.3em] mb-6 border border-white/10 shadow-lg">
            <Icons.Cpu size={12} className="text-orange-500" />
            Active Solution Matrix
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            Precision <br />
            <span className="text-orange-600">Mechanicals.</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
            Our systems are architected for Toronto's specific climate cycles. 
            High-uptime, maximum efficiency, zero compromise.
          </p>
        </div>
        
        {/* Market Metrics Panel */}
        <div className="relative group/status hidden lg:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 to-slate-900/30 rounded-3xl blur-xl opacity-50 group-hover/status:opacity-100 transition-opacity duration-700"></div>
          <div className="relative bg-[#020617] border border-white/15 rounded-3xl p-8 min-w-[340px] shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.35em]">Node 01: Status</p>
                <h4 className="text-white font-black text-sm uppercase tracking-widest">Operational</h4>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-orange-500">
                <Icons.Activity size={18} className="animate-pulse" />
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Network Efficiency', val: '94.2%', color: 'bg-orange-500' },
                { label: 'System Uptime', val: '99.9%', color: 'bg-green-500' },
                { label: 'Field Reliability', val: '100%', color: 'bg-blue-500' }
              ].map((m, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[9px] font-black text-white/60 uppercase tracking-widest">
                    <span>{m.label}</span>
                    <span>{m.val}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${m.color} rounded-full`} style={{ width: m.val }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {SERVICES.map((service) => {
          const Icon = (Icons as any)[service.icon] || Icons.Wrench;
          const colors = categoryColors[service.category] || categoryColors.specialty;
          
          return (
            <div 
              key={service.id} 
              className="group relative flex flex-col h-full bg-white border border-slate-200 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Category-specific accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-2 ${colors.primary} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center ${colors.text} mb-10 border border-transparent group-hover:border-slate-200 group-hover:shadow-inner transition-all duration-500`}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-tight group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className={`w-1.5 h-1.5 rounded-full ${colors.primary} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-12 text-[16px] font-medium opacity-90 min-h-[80px]">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto relative z-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  {service.rebateAvailable ? (
                    <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      <Icons.CheckCircle2 size={10} />
                      Rebate Eligible
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <Icons.Target size={10} className="text-slate-300" />
                      Premium System
                    </div>
                  )}
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                    {service.id.toUpperCase()}-026
                  </div>
                </div>

                <button 
                  onClick={scrollToContact}
                  className="w-12 h-12 flex items-center justify-center bg-slate-50 text-slate-900 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 group/btn border border-slate-100 shadow-sm"
                >
                  <Icons.ArrowUpRight size={20} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Technical Grid on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.015] pointer-events-none transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            </div>
          );
        })}
      </div>

      <div className="mt-24 p-12 bg-slate-950 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #FF6B00 0%, transparent 50%)' }}></div>
        <div className="relative z-10 flex items-center gap-8">
          <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 shadow-2xl backdrop-blur-md">
            <Icons.ShieldCheck size={40} />
          </div>
          <div>
            <h4 className="text-3xl font-black mb-2 tracking-tighter">The Atomic Shield</h4>
            <p className="text-slate-400 font-medium text-lg">Every deployment is logged and warrantied for 10 years.</p>
          </div>
        </div>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="relative z-10 px-12 py-6 bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-[0.3em] transition-all active:scale-95 shadow-[0_20px_40px_rgba(234,88,12,0.3)] rounded-2xl"
        >
          Initialize Consult
        </button>
      </div>
    </div>
  );
};

export default Services;

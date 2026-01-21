
import React, { useState } from 'react';
import { CheckCircle2, Calculator, Info, Sparkles, TrendingUp, Zap, Flame, Droplets } from 'lucide-react';
import { REBATE_MAX_VALUE } from '../constants';

const RebateCalculator: React.FC = () => {
  const [homeSize, setHomeSize] = useState(1800);
  const [fuelType, setFuelType] = useState('gas');

  const calculateEstimate = () => {
    let base = 6500;
    if (homeSize > 2500) base += 2000;
    if (fuelType === 'oil' || fuelType === 'electric') base += 2000;
    return Math.min(base, REBATE_MAX_VALUE);
  };

  const estimate = calculateEstimate();

  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      {/* Left Column: Context & Benefits */}
      <div className="relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/5 border border-green-500/20 rounded-full text-green-600 text-[11px] font-bold uppercase tracking-widest mb-8">
          <Sparkles size={14} className="animate-pulse" />
          2026 Efficiency Standards
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.05] text-slate-900">
          Ontario Rebate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Estimator.</span>
        </h2>
        
        <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg font-medium">
          Leverage the <span className="text-slate-900 font-bold underline decoration-green-500/30 decoration-4">Home Efficiency Rebate Plus</span>. We manage the complexity, you secure the funding.
        </p>

        <div className="grid gap-6">
          {[
            { title: 'Incentive Stacking', desc: 'Federal & Provincial combined programs.', icon: <TrendingUp size={18} /> },
            { title: 'Operational Savings', desc: 'Up to 40% reduction in annual load.', icon: <Zap size={18} /> },
            { title: 'Zero Out-of-Pocket*', desc: 'Qualify for Cold-Climate Heat Pumps.', icon: <Flame size={18} /> },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 group">
              <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg tracking-tight mb-1">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: High-Tech Calculator Card */}
      <div className="relative">
        {/* Floating Accent Background */}
        <div className="absolute inset-0 bg-slate-950 rounded-[3.5rem] -rotate-1 translate-x-2 translate-y-2 opacity-10"></div>
        
        <div className="relative bg-slate-900 p-1 rounded-[3.5rem] shadow-2xl overflow-hidden">
          <div className="bg-[#0b1221] rounded-[3.3rem] p-10 md:p-14 border border-white/5">
            
            {/* Range Slider Section */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Estimated Area</p>
                  <h3 className="text-white text-3xl font-black tracking-tight">
                    {homeSize.toLocaleString()} <span className="text-slate-600 text-sm">SQ.FT.</span>
                  </h3>
                </div>
                <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  Precision Adjusted
                </div>
              </div>
              
              <div className="relative group py-4">
                <input 
                  type="range" 
                  min="500" 
                  max="5000" 
                  step="100" 
                  value={homeSize}
                  onChange={(e) => setHomeSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-full appearance-none cursor-pointer accent-orange-600 hover:accent-orange-500 transition-all"
                />
                <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-600 tracking-widest">
                  <span>500 SQ.FT.</span>
                  <span>5,000 SQ.FT.</span>
                </div>
              </div>
            </div>

            {/* Fuel Selection Section */}
            <div className="mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Current Primary Energy Source</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Gas', icon: <Flame size={14} /> },
                  { label: 'Oil', icon: <Droplets size={14} /> },
                  { label: 'Electric', icon: <Zap size={14} /> }
                ].map((type) => (
                  <button
                    key={type.label}
                    onClick={() => setFuelType(type.label.toLowerCase())}
                    className={`relative flex flex-col items-center gap-3 py-6 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all border group ${
                      fuelType === type.label.toLowerCase()
                        ? 'bg-orange-600 border-orange-400 text-white shadow-[0_15px_40px_rgba(234,88,12,0.3)]'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10'
                    }`}
                  >
                    <span className={`${fuelType === type.label.toLowerCase() ? 'text-white' : 'text-slate-600 group-hover:text-slate-300'}`}>
                      {type.icon}
                    </span>
                    {type.label}
                    {fuelType === type.label.toLowerCase() && (
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Savings Result Section */}
            <div className="bg-black/40 rounded-[2.5rem] border border-white/5 p-10 text-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Maximum Estimated Rebate</p>
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="text-4xl font-black text-orange-600/50 mt-2">$</span>
                  <span className="text-7xl font-black text-white tracking-tighter drop-shadow-[0_10px_30px_rgba(255,107,0,0.3)]">
                    {estimate.toLocaleString()}
                  </span>
                </div>
                
                <div className="inline-flex items-center gap-2 bg-orange-600/10 px-5 py-2.5 rounded-full text-[10px] text-orange-500 font-black uppercase tracking-widest border border-orange-500/20">
                  <Info size={12} />
                  Official Program Data Source
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full mt-10 bg-white hover:bg-slate-100 text-slate-900 py-6 rounded-2xl font-black text-sm tracking-[0.2em] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)] active:scale-[0.98] uppercase group flex items-center justify-center gap-3"
            >
              Secure My Savings
              <CheckCircle2 size={18} className="group-hover:scale-125 transition-transform text-orange-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RebateCalculator;

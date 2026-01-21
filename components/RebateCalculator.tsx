
import React, { useState, useMemo } from 'react';
import { CheckCircle2, Info, Sparkles, TrendingUp, Zap, Flame, Droplets, Target, Cpu } from 'lucide-react';
import { REBATE_MAX_VALUE } from '../constants';

const RebateCalculator: React.FC = () => {
  const [homeSize, setHomeSize] = useState(1800);
  const [fuelType, setFuelType] = useState('gas');

  const estimate = useMemo(() => {
    let base = 6500;
    if (homeSize > 2500) base += 2000;
    if (fuelType === 'oil' || fuelType === 'electric') base += 2000;
    return Math.min(base, REBATE_MAX_VALUE);
  }, [homeSize, fuelType]);

  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
      {/* Left Column: Context & Technical Benefits */}
      <div className="relative">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-md text-[9px] font-black uppercase tracking-[0.3em] mb-8">
          <Cpu size={12} className="text-orange-500" />
          Incentive Processing Engine
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none text-slate-900">
          Rebate <br />
          <span className="text-orange-600">Calibration.</span>
        </h2>
        
        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg font-medium">
          The <span className="text-slate-900 font-bold border-b-2 border-orange-200">2026 Home Efficiency Program</span> offers significant capital recovery for precision HVAC upgrades. Calculate your eligibility instantly.
        </p>

        <div className="space-y-8">
          {[
            { title: 'Capital Recovery', desc: 'Direct federal grants for heat pump adoption.', icon: <Target size={20} /> },
            { title: 'Efficiency Load Sync', desc: 'Optimized for Ontario cold-climate standards.', icon: <TrendingUp size={20} /> },
            { title: 'Zero Interest Funding', desc: 'Stackable with Clean Energy financing.', icon: <Zap size={20} /> },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-orange-500 group-hover:border-slate-800 transition-all duration-500">
                {item.icon}
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-lg tracking-tight mb-1">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Industrial Interface Calculator */}
      <div className="relative">
        {/* Technical Grid Overlay */}
        <div className="absolute -inset-10 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative bg-white border border-slate-200 rounded-[3rem] p-2 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.1)] overflow-hidden">
          <div className="bg-slate-50 rounded-[2.8rem] p-10 md:p-14 border border-white">
            
            {/* Range Input: Area Calibration */}
            <div className="mb-14">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    Area Calibration
                  </div>
                  <h3 className="text-slate-900 text-5xl font-black tracking-tighter">
                    {homeSize.toLocaleString()} <span className="text-slate-400 text-lg font-bold">SQ.FT.</span>
                  </h3>
                </div>
                <div className="hidden sm:block text-[9px] font-black text-slate-300 uppercase tracking-widest border border-slate-200 px-3 py-1.5 rounded-lg">
                  REF_ID: TOR_Z4_HVAC
                </div>
              </div>
              
              <div className="relative pt-6 pb-2">
                <input 
                  type="range" 
                  min="500" 
                  max="5000" 
                  step="50" 
                  value={homeSize}
                  onChange={(e) => setHomeSize(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900 hover:accent-orange-600 transition-all"
                />
                <div className="flex justify-between mt-6 text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">
                  <span>Min Range (500)</span>
                  <div className="h-4 w-px bg-slate-200"></div>
                  <span>Max Range (5000)</span>
                </div>
              </div>
            </div>

            {/* Segmented Control: Energy Source */}
            <div className="mb-14">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-6">Inbound Energy Source</p>
              <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
                {[
                  { label: 'Gas', icon: <Flame size={16} /> },
                  { label: 'Oil', icon: <Droplets size={16} /> },
                  { label: 'Electric', icon: <Zap size={16} /> }
                ].map((type) => (
                  <button
                    key={type.label}
                    onClick={() => setFuelType(type.label.toLowerCase())}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all duration-300 ${
                      fuelType === type.label.toLowerCase()
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                        : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {type.icon}
                    <span className="hidden sm:inline">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* High-Impact Result Readout */}
            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #FF6B00 12.5%, transparent 12.5%, transparent 50%, #FF6B00 50%, #FF6B00 62.5%, transparent 62.5%, transparent 100%)', backgroundSize: '8px 8px' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent"></div>
              
              <div className="relative z-10">
                <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-6">Total Estimated Recovery</p>
                <div className="flex items-start justify-center gap-1 mb-8">
                  <span className="text-3xl font-black text-orange-500 mt-3">$</span>
                  <span className="text-8xl font-black text-white tracking-tighter tabular-nums">
                    {estimate.toLocaleString()}
                  </span>
                </div>
                
                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full text-[10px] text-white font-black uppercase tracking-[0.25em] border border-white/10">
                  <Sparkles size={14} className="text-orange-500" />
                  Maximized for 2026 Cycle
                </div>
              </div>
            </div>

            {/* Action Group */}
            <div className="mt-12 space-y-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-orange-600 hover:bg-orange-500 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-[0_20px_40px_rgba(234,88,12,0.2)] active:scale-95 flex items-center justify-center gap-4 group"
              >
                Execute Rebate Filing
                <CheckCircle2 size={18} className="group-hover:rotate-[360deg] transition-transform duration-700" />
              </button>
              <p className="text-[9px] text-slate-400 font-bold text-center uppercase tracking-widest flex items-center justify-center gap-2">
                <Info size={12} />
                Calculations based on current Ontario HERP+ guidelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RebateCalculator;

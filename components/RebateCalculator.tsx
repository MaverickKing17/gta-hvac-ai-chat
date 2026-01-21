
import React, { useState } from 'react';
import { CheckCircle2, Calculator, Info, Sparkles } from 'lucide-react';
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
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-[10px] font-black uppercase tracking-widest mb-6">
          <Sparkles size={12} />
          Maximum Efficiency Savings
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter leading-tight">Ontario Rebate <br /><span className="text-green-500">Estimator</span></h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
          We specialize in the <b>Home Efficiency Rebate Plus</b> program, guiding you through the paperwork to secure up to <b>$10,500</b> in government funding.
        </p>

        <ul className="space-y-6">
          {[
            'Federal & Provincial combined incentives',
            'Up to 40% reduction in annual energy costs',
            'Upgrade to Cold-Climate Heat Pumps for $0 out-of-pocket*',
            'Complimentary energy audit coordination'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-gray-300 group">
              <div className="mt-1 bg-green-500/20 p-1.5 rounded-xl text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-lg font-medium tracking-tight group-hover:text-white transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="glass-card p-1 p-0.5 rounded-[3rem] shadow-2xl relative overflow-hidden group">
        <div className="bg-gray-950/80 p-10 md:p-14 rounded-[2.9rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <Calculator size={180} />
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Estimated Living Space</label>
              <span className="text-2xl font-black text-white bg-white/5 px-4 py-1 rounded-xl border border-white/10">{homeSize.toLocaleString()} <span className="text-xs text-gray-500 font-bold">SQ.FT.</span></span>
            </div>
            <input 
              type="range" 
              min="500" 
              max="5000" 
              step="100" 
              value={homeSize}
              onChange={(e) => setHomeSize(parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-orange-500 hover:accent-orange-400 transition-all"
            />
          </div>

          <div className="mb-14">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6">Current Primary Fuel</label>
            <div className="grid grid-cols-3 gap-4">
              {['Gas', 'Oil', 'Electric'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFuelType(type.toLowerCase())}
                  className={`py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border ${
                    fuelType === type.toLowerCase()
                      ? 'bg-orange-600 border-orange-400 text-white shadow-[0_10px_30px_rgba(255,107,0,0.2)]'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-black/60 p-10 rounded-[2rem] border border-white/5 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/5 to-transparent"></div>
            <p className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Maximum Estimated Savings</p>
            <p className="text-7xl font-black text-white mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              ${estimate.toLocaleString()}
            </p>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full text-[10px] text-orange-400 font-black uppercase tracking-widest border border-orange-500/20">
              <Info size={12} />
              Official Program Estimate
            </div>
          </div>

          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full mt-10 bg-white hover:bg-gray-100 text-black py-6 rounded-2xl font-black text-lg tracking-widest transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-[0.98]"
          >
            SECURE MY SAVINGS
          </button>
        </div>
      </div>
    </div>
  );
};

export default RebateCalculator;

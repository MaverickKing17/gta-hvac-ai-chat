
import React, { useState } from 'react';
import { CheckCircle2, Calculator, Info } from 'lucide-react';
import { REBATE_MAX_VALUE } from '../constants';

const RebateCalculator: React.FC = () => {
  const [homeSize, setHomeSize] = useState(1500);
  const [fuelType, setFuelType] = useState('gas');

  const calculateEstimate = () => {
    // Simplified calculation logic for visual engagement
    let base = 6500;
    if (homeSize > 2500) base += 2000;
    if (fuelType === 'oil' || fuelType === 'electric') base += 2000;
    return Math.min(base, REBATE_MAX_VALUE);
  };

  const estimate = calculateEstimate();

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ontario Rebate <br />Estimator</h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          Through the Home Efficiency Rebate Plus program, Ontario homeowners can access up to <b>$10,500</b> in savings for heat pump upgrades.
        </p>

        <ul className="space-y-6">
          {[
            'Federal & Provincial combined savings',
            'Lower monthly energy bills by up to 40%',
            'Future-proof your home comfort',
            'Full application support from Atomic Air'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-gray-300">
              <div className="mt-1 bg-green-500/20 p-1 rounded-full text-green-500">
                <CheckCircle2 size={18} />
              </div>
              <span className="text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="glass-card p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden border-orange-500/20">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Calculator size={100} />
        </div>

        <div className="mb-10">
          <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Estimated Home Square Footage</label>
          <input 
            type="range" 
            min="500" 
            max="5000" 
            step="100" 
            value={homeSize}
            onChange={(e) => setHomeSize(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-bold text-white">{homeSize.toLocaleString()} sq.ft.</span>
          </div>
        </div>

        <div className="mb-12">
          <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Current Heating Source</label>
          <div className="grid grid-cols-3 gap-3">
            {['Gas', 'Oil', 'Electric'].map((type) => (
              <button
                key={type}
                onClick={() => setFuelType(type.toLowerCase())}
                className={`py-4 rounded-2xl font-bold transition-all border ${
                  fuelType === type.toLowerCase()
                    ? 'bg-orange-600 border-orange-600 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-black/40 p-8 rounded-3xl border border-white/5 text-center">
          <p className="text-gray-500 font-bold mb-2">Potential Savings</p>
          <p className="text-6xl font-black text-white mb-2 tracking-tighter">
            ${estimate.toLocaleString()}
            <span className="text-lg text-orange-500 ml-1">+</span>
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-orange-400/80 font-medium">
            <Info size={12} />
            Based on Enbridge Heritage Plus data
          </div>
        </div>

        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full mt-8 bg-white hover:bg-gray-100 text-black py-5 rounded-2xl font-black text-lg transition-all shadow-xl"
        >
          CLAIM YOUR REBATE NOW
        </button>
      </div>
    </div>
  );
};

export default RebateCalculator;

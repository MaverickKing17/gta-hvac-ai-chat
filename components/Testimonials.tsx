
import React from 'react';
import { Star, Quote, CheckCircle, ShieldCheck, Award, Verified } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="relative">
      {/* Refined Header Block */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-lg text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
          <Star size={12} fill="currentColor" />
          Verified Customer Experiences
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          What Our <span className="text-orange-600">Clients</span> Say
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
          Honest feedback from homeowners and businesses across the GTA. 
          We let our mechanical craftsmanship speak for itself.
        </p>
      </div>
      
      {/* Grid of Testimonials */}
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div 
            key={t.id} 
            className="group relative bg-white p-10 rounded-[2rem] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full overflow-hidden"
          >
            {/* Decorative Quote Mark */}
            <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
              <Quote size={140} className="text-slate-900" />
            </div>

            {/* Rating and Verification */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < t.rating ? "#FF6B00" : "none"} 
                    className={i < t.rating ? "text-orange-600" : "text-slate-200"} 
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded-md">
                <CheckCircle size={10} />
                Verified Review
              </div>
            </div>

            {/* Quote Body - HIGH VISIBILITY */}
            <p className="text-[17px] text-slate-700 font-medium leading-[1.7] italic mb-10 flex-grow relative z-10">
              {t.quote}
            </p>

            {/* Author Attribution */}
            <div className="flex items-center gap-4 pt-8 border-t border-slate-100 mt-auto">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center font-bold text-white shadow-lg shadow-slate-900/10 text-lg group-hover:bg-orange-600 transition-colors duration-300">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-[15px] tracking-tight">{t.name}</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Platform Logos - REDESIGNED FOR MAXIMUM VISIBILITY */}
      <div className="mt-24 pt-16 border-t border-slate-200">
        <div className="flex flex-col items-center gap-12">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Authorized Field Verification</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            
            {/* Google Reviews Badge */}
            <div className="flex items-center gap-4 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-blue-500/30 hover:shadow-xl transition-all duration-500 group cursor-default">
              <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
                <span className="text-base font-black text-slate-700 tracking-tighter group-hover:text-blue-600 transition-colors">Reviews</span>
              </div>
              <div className="w-px h-6 bg-slate-200"></div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black text-slate-900">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#FBBC05" className="text-[#FBBC05]" />)}
                </div>
              </div>
            </div>

            {/* HomeStars Badge */}
            <div className="flex items-center gap-4 px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-orange-500/30 hover:shadow-xl transition-all duration-500 group cursor-default">
              <div className="flex flex-col">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Top Rated</span>
                <span className="text-base font-black text-slate-900 tracking-tighter group-hover:text-orange-600 transition-colors">HOMESTARS</span>
              </div>
              <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
                <span className="text-[10px] font-black text-orange-600">10/10</span>
                <Star size={10} fill="#FF6B00" className="text-orange-600" />
              </div>
            </div>

            {/* Trusted Pros Badge */}
            <div className="flex items-center gap-4 px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all duration-500 group cursor-default">
              <ShieldCheck size={24} className="text-white animate-pulse" />
              <div>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-0.5 leading-none">Verified Network</p>
                <p className="text-white text-base font-black tracking-tight flex items-center gap-2">
                  TRUSTED PROS <span className="text-orange-500 italic">CERTIFIED</span>
                </p>
              </div>
            </div>

          </div>

          <div className="flex items-center gap-3 opacity-60">
             <div className="h-[2px] w-12 bg-slate-200"></div>
             <Verified size={16} className="text-slate-400" />
             <div className="h-[2px] w-12 bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

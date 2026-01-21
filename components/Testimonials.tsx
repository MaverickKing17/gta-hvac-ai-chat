
import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
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

      {/* Trust Platform Logos */}
      <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-center gap-12 opacity-40 hover:opacity-100 transition-all duration-700">
        <div className="flex items-center gap-2 grayscale group hover:grayscale-0 transition-all cursor-default">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5" />
          <span className="text-sm font-black text-slate-900 tracking-tighter">REVIEWS</span>
        </div>
        <div className="text-slate-900 font-black text-sm tracking-[0.2em] grayscale group hover:grayscale-0 transition-all cursor-default">
          HOME STARS <span className="text-orange-600">★★★★★</span>
        </div>
        <div className="text-slate-900 font-black text-sm tracking-[0.2em] grayscale group hover:grayscale-0 transition-all cursor-default uppercase">
          Trusted Pros <span className="text-slate-400 font-medium">Certified</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

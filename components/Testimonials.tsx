
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16">What Our Clients Say</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="glass-card p-10 rounded-3xl text-left relative flex flex-col">
            <div className="text-orange-500/20 absolute top-8 right-8">
              <Quote size={48} />
            </div>
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < t.rating ? "#FF6B00" : "none"} className="text-orange-600" />
              ))}
            </div>

            <p className="text-lg text-gray-300 italic mb-10 leading-relaxed flex-grow">
              {t.quote}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-600/20 border border-orange-500/30 flex items-center justify-center font-bold text-orange-500">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Reviews" className="h-6" />
        <span className="text-xl font-black text-white">HOME STARS</span>
        <span className="text-xl font-black text-white">TRUSTED PROS</span>
      </div>
    </div>
  );
};

export default Testimonials;

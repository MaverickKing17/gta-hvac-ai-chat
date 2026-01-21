
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapPin, Shield, Navigation, Loader2 } from 'lucide-react';

const ServiceAreaMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' } // Start loading 200px before it enters viewport
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && mapContainerRef.current && !mapRef.current) {
      // Initialize map centered on Toronto/GTA
      mapRef.current = L.map(mapContainerRef.current, {
        center: [43.68, -79.45],
        zoom: 10,
        scrollWheelZoom: false,
        zoomControl: false,
        fadeAnimation: true,
        markerZoomAnimation: true
      });

      // Add clean, professional tile layer (CartoDB Positron)
      const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
      });

      tiles.on('load', () => setIsLoaded(true));
      tiles.addTo(mapRef.current);

      // Add a circle representing the 35km service radius
      L.circle([43.6532, -79.3832], {
        color: '#FF6B00',
        fillColor: '#FF6B00',
        fillOpacity: 0.08,
        weight: 1,
        radius: 35000 
      }).addTo(mapRef.current);

      // Custom Atomic Marker Icon
      const atomicIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #FF6B00; width: 14px; height: 14px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 10px rgba(255,107,0,0.4);"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      // Hub locations
      const locations = [
        { name: "Downtown Toronto", coords: [43.6532, -79.3832] as [number, number] },
        { name: "Etobicoke", coords: [43.6205, -79.5132] as [number, number] },
        { name: "Mississauga", coords: [43.5890, -79.6441] as [number, number] },
        { name: "North York", coords: [43.7615, -79.4111] as [number, number] },
        { name: "Scarborough", coords: [43.7764, -79.2318] as [number, number] }
      ];

      const markerLayer = L.layerGroup();
      locations.forEach(loc => {
        L.marker(loc.coords, { icon: atomicIcon })
          .bindPopup(`<b>${loc.name} Hub</b><br>Full mechanical service area.`)
          .addTo(markerLayer);
      });
      markerLayer.addTo(mapRef.current);
      
      L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isVisible]);

  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-20 items-center">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-6">
              <Navigation size={14} className="text-orange-600" />
              Service Reach
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Across the <span className="text-orange-600">GTA</span></h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              We provide priority emergency response and premium mechanical installations throughout the Greater Toronto Area.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Toronto (Old Toronto, York, East York)",
                "Etobicoke & Mississauga (West Region)",
                "North York & Scarborough (East/North Region)",
                "Vaughan & Richmond Hill (York Region)"
              ].map((region, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                  <Shield size={16} className="text-orange-600 flex-shrink-0" />
                  {region}
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                <MapPin size={80} />
              </div>
              <p className="text-sm font-bold text-slate-900 mb-2">Outside our standard radius?</p>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Atomic Air often facilitates high-performance specialty projects and commercial retrofits across Southern Ontario.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="text-orange-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Inquire about custom locations <Navigation size={14} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="pro-card p-2 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl relative z-10 overflow-hidden">
              <div 
                ref={mapContainerRef} 
                className={`rounded-[2.2rem] overflow-hidden transition-opacity duration-700 bg-slate-50 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                style={{ height: '580px' }}
              ></div>
              {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/50 backdrop-blur-sm z-20 rounded-[2.2rem]">
                  <Loader2 className="w-10 h-10 text-orange-600 animate-spin mb-4" />
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Optimizing Service Map...</p>
                </div>
              )}
            </div>
            {/* Decorative MS-style elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-600/5 blur-3xl rounded-full -z-0"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-slate-200 blur-3xl rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;

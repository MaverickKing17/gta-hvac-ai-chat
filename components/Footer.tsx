
import React, { useState } from 'react';
import { 
  Mail, Phone, Instagram, Facebook, Send, ShieldCheck, 
  MapPin, ExternalLink, Globe, Lock, LifeBuoy, FileText, 
  X, ChevronRight, Scale, BookOpen, Wrench, Award, AlertCircle,
  Database, Activity, MessageSquare, CheckCircle, RefreshCcw, Loader2
} from 'lucide-react';
import { COMPANY_NAME, PHONE, EMAIL } from '../constants';

const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{title: string, content: React.ReactNode} | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xojjbbza", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <footer className="relative bg-[#020617] pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: Branding & Technical Consult Form */}
        <div className="grid lg:grid-cols-2 gap-24 pb-24 border-b border-white/5">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-orange-500">
              <ShieldCheck size={14} />
              Field Operations Active
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white leading-none">
              Engineering <br />
              <span className="text-orange-600">The Future.</span>
            </h2>
            <p className="text-slate-400 mb-12 text-xl leading-relaxed max-w-lg font-medium">
              Ready to optimize your home's mechanical core? Submit a field inquiry for a precision HVAC consultation.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 pt-4 opacity-60">
              <div className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest border border-white/10 px-4 py-2 rounded-lg">
                <Award size={14} className="text-orange-500" /> TSSA CERTIFIED
              </div>
              <div className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest border border-white/10 px-4 py-2 rounded-lg">
                <Award size={14} className="text-orange-500" /> HRAI MEMBER
              </div>
            </div>
          </div>

          {/* REDESIGNED: AJAX Integrated Contact Form */}
          <div className="relative group min-h-[500px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-slate-800 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative h-full bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-xl flex flex-col justify-center overflow-hidden">
              
              {formStatus === 'success' ? (
                /* SUCCESS STATE UI */
                <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                    <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                      <CheckCircle size={48} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center gap-3 mb-3">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.4em]">Transmission Received</span>
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tighter mb-4">Data Synchronized.</h3>
                    <p className="text-slate-400 font-medium leading-relaxed max-w-xs mx-auto">
                      Your technical consult request has been successfully uploaded to our field dispatch queue. A Master Technician will review your specs shortly.
                    </p>
                  </div>

                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mx-auto flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.3em] transition-all active:scale-95"
                  >
                    <RefreshCcw size={14} />
                    New Transmission
                  </button>
                </div>
              ) : (
                /* INPUT STATE UI */
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-600/20 rounded-xl flex items-center justify-center text-orange-500">
                        <Database size={18} />
                      </div>
                      <h3 className="text-white font-black uppercase tracking-widest text-xs">Technical Consult Request</h3>
                    </div>
                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-500 text-[9px] font-black uppercase tracking-widest animate-pulse">
                        <AlertCircle size={14} /> Uplink Error
                      </div>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Full Name" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 transition-all font-bold text-sm"
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 transition-all font-bold text-sm"
                    />
                  </div>

                  <select 
                    name="system_type"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-all font-bold text-sm appearance-none"
                  >
                    <option value="" className="bg-slate-900">Select System Interest</option>
                    <option value="heat_pump" className="bg-slate-900">Cold-Climate Heat Pump</option>
                    <option value="boiler" className="bg-slate-900">High-Efficiency Boiler</option>
                    <option value="snow_melt" className="bg-slate-900">Snow Melting System</option>
                    <option value="service" className="bg-slate-900">Emergency Repair / Service</option>
                  </select>

                  <textarea 
                    name="message"
                    placeholder="Mission Brief / Project Details" 
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 transition-all font-bold text-sm resize-none"
                  ></textarea>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-orange-600 hover:bg-orange-500 text-white py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Processing Uplink...
                      </>
                    ) : (
                      <>
                        Initialize Request
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-24">
          <div className="space-y-6">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <div className="w-1 h-3 bg-orange-600"></div> Systems
            </h4>
            <ul className="space-y-4 text-xs font-bold text-slate-500">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-orange-500 transition-colors">Hydronic Heating</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-orange-500 transition-colors">Heat Pump Retrofits</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-orange-500 transition-colors">Combi-Boiler Arrays</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-orange-500 transition-colors">Commercial RTUs</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-orange-500 transition-colors">Smart Snow Melt</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <div className="w-1 h-3 bg-slate-700"></div> Resources
            </h4>
            <ul className="space-y-4 text-xs font-bold text-slate-500">
              <li><button onClick={() => openModal('Rebate Guide 2026', <RebateGuide />)} className="hover:text-orange-500 transition-colors flex items-center gap-2"><FileText size={12}/> Rebate Guide</button></li>
              <li><button onClick={() => openModal('Maintenance Checklist', <MaintenanceChecklist />)} className="hover:text-orange-500 transition-colors flex items-center gap-2"><BookOpen size={12}/> Field Checklist</button></li>
              <li><button onClick={() => document.getElementById('map')?.scrollIntoView({behavior:'smooth'})} className="hover:text-orange-500 transition-colors flex items-center gap-2"><Globe size={12}/> Project Map</button></li>
              <li><button onClick={() => openModal('Emergency Procedures', <EmergencyProcedures />)} className="hover:text-orange-500 transition-colors flex items-center gap-2 text-red-400"><AlertCircle size={12}/> Emergency SOP</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <div className="w-1 h-3 bg-slate-700"></div> Support
            </h4>
            <ul className="space-y-4 text-xs font-bold text-slate-500">
              <li><button onClick={() => openModal('Support Center', <SupportCenter />)} className="hover:text-orange-500 transition-colors flex items-center gap-2"><LifeBuoy size={12}/> Help Center</button></li>
              <li><button onClick={() => openModal('Technical Support', <TechSupport />)} className="hover:text-orange-500 transition-colors flex items-center gap-2"><Wrench size={12}/> Tech Support</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="hover:text-orange-500 transition-colors flex items-center gap-2"><ExternalLink size={12}/> Service Booking</button></li>
              <li><button onClick={() => openModal('Accessibility Policy', <Accessibility />)} className="hover:text-orange-500 transition-colors">Accessibility</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <div className="w-1 h-3 bg-slate-700"></div> Legal
            </h4>
            <ul className="space-y-4 text-xs font-bold text-slate-500">
              <li><button onClick={() => openModal('Privacy Policy', <PrivacyPolicy />)} className="hover:text-orange-500 transition-colors flex items-center gap-2"><Lock size={12}/> Privacy Policy</button></li>
              <li><button onClick={() => openModal('Terms of Service', <TermsOfService />)} className="hover:text-orange-500 transition-colors flex items-center gap-2"><Scale size={12}/> Terms of Service</button></li>
              <li><button onClick={() => openModal('Warranty Coverage', <WarrantyInfo />)} className="hover:text-orange-500 transition-colors flex items-center gap-2"><ShieldCheck size={12}/> Warranty Info</button></li>
              <li><button onClick={() => openModal('License Information', <LicenseInfo />)} className="hover:text-orange-500 transition-colors">License & Insurance</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              <div className="w-1 h-3 bg-slate-700"></div> Connect
            </h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-600 transition-all shadow-lg">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-600 transition-all shadow-lg">
                <Facebook size={20} />
              </a>
            </div>
            <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 space-y-4">
              <p className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                System Status
              </p>
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[94%]"></div>
              </div>
              <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Efficiency Benchmark: 94.2%</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - UPDATED WITH BRIGHT WHITE BOLDER TEXT */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white text-[11px] font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {COMPANY_NAME}. Licensed Master HVAC Contractor #40012354
          </p>
          <div className="flex items-center gap-8">
            <p className="text-[9px] text-white/90 font-black uppercase tracking-widest">Toronto • Etobicoke • Mississauga • North York • Vaughan</p>
            <div className="w-px h-4 bg-white/20 hidden md:block"></div>
            <p className="text-[9px] text-white/90 font-black uppercase tracking-widest">Designed for High-Performance Mechanical Excellence</p>
          </div>
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {modalContent && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6 md:px-12 py-12">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative w-full max-w-4xl h-full max-h-[85vh] bg-slate-900 border border-white/10 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-8 md:p-12 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tighter">{modalContent.title}</h3>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">ATOMIC DOCUMENTATION v2.0</p>
                </div>
              </div>
              <button onClick={closeModal} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow p-8 md:p-12 overflow-y-auto scroll-smooth">
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed font-medium">
                {modalContent.content}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock size={14} className="text-green-500" />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Encrypted Internal Access</span>
              </div>
              <button onClick={() => window.print()} className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest hover:text-orange-500 transition-colors">
                <ChevronRight size={14} /> Download PDF Version
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

// ... existing modal content components ...
const PrivacyPolicy = () => (
  <div className="space-y-8">
    <section>
      <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">1. Information Architecture</h4>
      <p>Atomic Air ("The Company") values the high-fidelity security of our client data. We collect technical site data, contact information, and mechanical load profiles strictly for the purpose of engineering precision HVAC environments. We utilize enterprise-grade encryption for all project specifications.</p>
    </section>
    <section>
      <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">2. Telemetry & Smart Diagnostics</h4>
      <p>Homeowners utilizing our connected service packages may have system telemetry data recorded to ensure peak performance and predictive maintenance. This data is anonymized and stored on secure local Toronto servers.</p>
    </section>
    <section>
      <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">3. Data Integrity</h4>
      <p>We do not sell user data to third-party HVAC manufacturers or marketing conglomerates. Your mechanical blueprint remains your property.</p>
    </section>
  </div>
);

const TermsOfService = () => (
  <div className="space-y-8 text-sm">
    <p className="bg-white/5 p-4 rounded-xl border border-white/10">LAST UPDATED: APRIL 2026. These terms govern all service contracts and maintenance agreements with Atomic Air Heating & Cooling.</p>
    <section>
      <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">Engineering Protocol</h4>
      <p>All work is performed by Licensed Master Technicians in strict accordance with Ontario Building Codes, TSSA Safety Standards, and AHRI Efficiency Protocols. Clients must provide clear access to mechanical rooms and outdoor pads as per our site safety checklist.</p>
    </section>
    <section>
      <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">Financial Scheduling</h4>
      <p>Capital projects (Boiler Arrays, Heat Pump Retrofits) require a 30% mobilization deposit. Final balancing and commissioning reports will be provided upon project completion.</p>
    </section>
  </div>
);

const WarrantyInfo = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 bg-orange-600/10 border border-orange-500/20 rounded-2xl">
        <h5 className="text-orange-500 font-black mb-2 uppercase tracking-widest">Craftsmanship</h5>
        <p className="text-white text-3xl font-black mb-4 tracking-tighter">10 YEARS</p>
        <p className="text-slate-400 text-xs">Full guarantee on all pipework, electrical terminations, and structural mounting. Zero tolerance for field failure.</p>
      </div>
      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
        <h5 className="text-slate-400 font-black mb-2 uppercase tracking-widest">Parts (Manufacturer)</h5>
        <p className="text-white text-3xl font-black mb-4 tracking-tighter">12 YEARS</p>
        <p className="text-slate-400 text-xs">Standard on all major compressors, heat exchangers, and primary manifold components from our partners.</p>
      </div>
    </div>
    <section className="pt-8">
      <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">Eligibility Maintenance</h4>
      <p>To maintain your Atomic Performance Warranty, systems must undergo an annual optimization audit. Failure to clean filters or exterior coils by unauthorized parties may void primary components coverage.</p>
    </section>
  </div>
);

const MaintenanceChecklist = () => (
  <div className="space-y-6">
    <h4 className="text-white font-black text-xl mb-6 tracking-tighter">Seasonal Optimization SOP</h4>
    <div className="space-y-4">
      {[
        { zone: "Indoor Unit", task: "Filter replacement (MERV 11 or higher recommended)", freq: "90 Days" },
        { zone: "Outdoor Pad", task: "Clear 24-inch debris clearance around coil fins", freq: "Weekly (Spring/Fall)" },
        { zone: "Hydronic Hub", task: "Pressure gauge verification (12-15 PSI standard)", freq: "Monthly" },
        { zone: "Drainage", task: "Condensate pump and line flush to prevent biological growth", freq: "Annual" }
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
          <div>
            <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest">{item.zone}</p>
            <p className="text-white font-bold">{item.task}</p>
          </div>
          <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{item.freq}</p>
        </div>
      ))}
    </div>
  </div>
);

const RebateGuide = () => (
  <div className="space-y-8">
    <p>The 2026 Home Efficiency Rebate Plus (HERP+) offers GTA homeowners up to $10,500 in direct capital recovery. Atomic Air handles 100% of the technical filing and load calculation requirements.</p>
    <div className="space-y-4">
      <h5 className="text-white font-black uppercase tracking-widest text-xs mb-4">Rebate Breakdown</h5>
      <div className="p-4 border-l-4 border-orange-600 bg-white/5">
        <p className="text-white font-bold">$7,500 - Cold-Climate Heat Pump Installation</p>
        <p className="text-slate-500 text-xs">Units must be AHRI certified and listed on the NRCAN eligible list.</p>
      </div>
      <div className="p-4 border-l-4 border-slate-700 bg-white/5">
        <p className="text-white font-bold">$1,500 - Advanced Smart Controls & Zoning</p>
        <p className="text-slate-500 text-xs">When integrated with existing high-efficiency air handlers.</p>
      </div>
      <div className="p-4 border-l-4 border-slate-700 bg-white/5">
        <p className="text-white font-bold">$1,500 - Hydraulic Separation Retrofits</p>
        <p className="text-slate-500 text-xs">Primary/Secondary loop upgrades for legacy boiler systems.</p>
      </div>
    </div>
  </div>
);

const EmergencyProcedures = () => (
  <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-3xl space-y-6">
    <h4 className="text-red-500 font-black text-xl mb-4 tracking-tighter">Emergency Response Protocol</h4>
    <p className="text-slate-300">If you experience a total heating failure in sub-zero temperatures (below -5°C):</p>
    <ol className="space-y-4 list-decimal pl-6 text-slate-400">
      <li>Contact our 24/7 Priority Line at <span className="text-white font-bold">{PHONE}</span>.</li>
      <li>Do not attempt to cycle the main circuit breaker more than once.</li>
      <li>Check the thermostat for "Auxiliary Heat" or "Emergency Heat" settings if on a hybrid system.</li>
      <li>Ensure all exterior intake/exhaust vents are clear of snow or ice blockages.</li>
    </ol>
    <div className="pt-6 border-t border-red-500/10 text-center">
      <p className="text-red-400 text-xs font-black uppercase tracking-widest">Priority response guaranteed for maintenance agreement holders.</p>
    </div>
  </div>
);

const SupportCenter = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <button className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-orange-600/10 hover:border-orange-500/30 transition-all text-left group">
        <div className="w-10 h-10 rounded-xl bg-orange-600/20 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-600 group-hover:text-white">
          <Wrench size={20} />
        </div>
        <p className="text-white font-bold mb-1">Troubleshooting</p>
        <p className="text-slate-500 text-xs">Self-service guides for thermostat and filter issues.</p>
      </button>
      <button className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-orange-600/10 hover:border-orange-500/30 transition-all text-left group">
        <div className="w-10 h-10 rounded-xl bg-orange-600/20 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-600 group-hover:text-white">
          <BookOpen size={20} />
        </div>
        <p className="text-white font-bold mb-1">Owner Manuals</p>
        <p className="text-slate-500 text-xs">PDF downloads for Carrier, Mitsubishi, and Viessmann.</p>
      </button>
    </div>
    <p className="text-slate-500 text-sm italic">Additional technical documentation available via the Atomic Client Portal.</p>
  </div>
);

const TechSupport = () => (
  <div className="space-y-8">
    <div className="p-8 bg-blue-900/10 border border-blue-500/20 rounded-3xl">
      <h5 className="text-blue-500 font-black uppercase tracking-widest text-xs mb-4">Live Engineering Status</h5>
      <p className="text-slate-300">Our remote diagnostic engineers are currently monitoring 452 residential systems. Current remote fix success rate: <span className="text-white font-black">68%</span>.</p>
    </div>
    <section>
      <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">Direct Field Link</h4>
      <p>Qualified technicians can provide live video-assisted troubleshooting for smart thermostat configuration and Wi-Fi pairing issues. Schedule a 15-minute diagnostic call for immediate resolution.</p>
    </section>
  </div>
);

const Accessibility = () => (
  <div className="space-y-6">
    <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">WCAG 2.1 Compliance</h4>
    <p>Atomic Air is committed to digital engineering excellence for all users. Our site is designed with high-contrast UI, screen-reader optimized headings, and keyboard-only navigation capability. If you experience difficulty accessing our technical resources, please call our support line for personal assistance.</p>
  </div>
);

const LicenseInfo = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
      <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white">
        <ShieldCheck size={32} />
      </div>
      <div>
        <p className="text-white font-black text-lg">Full Operational Coverage</p>
        <p className="text-slate-500 text-sm font-medium">Insured up to $5,000,000 per project incident.</p>
      </div>
    </div>
    <section>
      <h4 className="text-white font-black text-lg mb-4 uppercase tracking-tight">Authorized Operations</h4>
      <ul className="space-y-2 text-slate-400 font-medium">
        <li>• TSSA Fuel Safety Licensed Contractor #400...</li>
        <li>• Workplace Safety and Insurance Board (WSIB) Compliant</li>
        <li>• Red Seal Certified Master Technicians</li>
        <li>• CFC/HRAI Ozone Depletion Prevention Certified</li>
      </ul>
    </section>
  </div>
);

export default Footer;

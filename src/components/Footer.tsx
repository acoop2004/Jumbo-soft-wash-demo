import React from 'react';
import { Phone, Mail, MapPin, Instagram, ShieldCheck } from 'lucide-react';
import { AppRoute } from '../types';
import jumboElephant from '../assets/images/jumbo_elephant_1780947373781.png';

interface FooterProps {
  setCurrentRoute: (route: AppRoute) => void;
}

export default function Footer({ setCurrentRoute }: FooterProps) {
  
  const handleNavClick = (route: AppRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white border-t border-primary/20 pt-20 pb-8 relative overflow-hidden">
      {/* Wave bottom graphical accent */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-accent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-primary/20 flex items-center justify-center shadow-lg overflow-hidden transform group-hover:scale-105 transition-all">
                <img 
                  src={jumboElephant} 
                  alt="Jumbo Elephant Mascot" 
                  className="w-full h-full scale-110 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight block">
                  JUMBO <span className="text-primary font-bold">SOFT WASH</span>
                </span>
                <span className="text-[10px] text-white/40 tracking-widest font-mono uppercase block -mt-1 font-bold">
                  LLC
                </span>
              </div>
            </div>
            
            <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-sm">
              South Jersey's premium exterior cleaning services. We specialize in low-pressure soft washing, siding restoration, and deep concrete brightening.
            </p>

            <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Fully Licensed &amp; Insured</span>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-xs md:text-sm text-white/75 font-semibold">
              <button onClick={() => handleNavClick('home')} className="hover:text-primary text-left transition-colors cursor-pointer">Home</button>
              <button onClick={() => handleNavClick('services')} className="hover:text-primary text-left transition-colors cursor-pointer">Services</button>
              <button onClick={() => handleNavClick('gallery')} className="hover:text-primary text-left transition-colors cursor-pointer">Gallery</button>
              <button onClick={() => handleNavClick('faq')} className="hover:text-primary text-left transition-colors cursor-pointer">FAQ</button>
              <button onClick={() => handleNavClick('about')} className="hover:text-primary text-left transition-colors cursor-pointer">About Us</button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-primary text-left transition-colors cursor-pointer">Contact</button>
            </div>
            
            <div className="pt-4 flex items-center gap-2">
              <a 
                href="https://instagram.com/jumbosoftwash" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-amber-500 hover:scale-105 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-[10px] text-white/50 font-bold font-mono uppercase tracking-wider">
                Follow @jumbosoftwash
              </span>
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4 text-xs md:text-sm text-white/80 font-mono">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <a href="tel:8565623557" className="hover:text-primary transition-colors">
                  856-562-3557
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:jumbosoftwash@gmail.com" className="hover:text-primary transition-colors break-all">
                  jumbosoftwash@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70">
                  401 N Main St Apartment 230b<br />
                  Williamstown, NJ 08094
                </span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom copyright declaration block */}
        <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-neutral-400 font-mono">
            &copy; 2026 Jumbo Soft Wash LLC. All Rights Reserved. Fully Insured.
          </p>
          <div className="flex gap-4 text-[11px] font-bold text-white/30 uppercase tracking-widest">
            <button onClick={() => handleNavClick('faq')} className="hover:text-primary transition-colors cursor-pointer">Terms</button>
            <span>•</span>
            <button onClick={() => handleNavClick('faq')} className="hover:text-primary transition-colors cursor-pointer">Privacy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

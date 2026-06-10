import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { AppRoute } from '../types';
import jumboElephant from '../assets/images/jumbo_elephant_1780947373781.png';

interface NavbarProps {
  currentRoute: AppRoute;
  setCurrentRoute: (route: AppRoute) => void;
  onContactClick: () => void;
}

export default function Navbar({ currentRoute, setCurrentRoute, onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: AppRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'FAQ', route: 'faq' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: AppRoute) => {
    setCurrentRoute(route);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-info header */}
      <div className="bg-secondary-light text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center z-40 border-b border-white/5 font-mono">
        <div className="flex items-center gap-4">
          <a href="tel:8565623557" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5 text-primary" /> 856-562-3557
          </a>
          <a href="mailto:jumbosoftwash@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5 text-primary" /> jumbosoftwash@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>Serving Williamstown & South Jersey • 4.9 ★ Google Rated</span>
        </div>
      </div>

      <header 
        id="main-nav"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-secondary/95 backdrop-blur-md py-3 shadow-lg border-b border-primary/20' 
            : 'bg-secondary py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Group */}
            <div 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-primary/20 flex items-center justify-center shadow-md shadow-primary/10 overflow-hidden transform group-hover:scale-105 transition-all">
                <img 
                  src={jumboElephant} 
                  alt="Jumbo Elephant Mascot" 
                  className="w-full h-full scale-120 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg md:text-xl text-white tracking-tight flex items-center gap-1.5">
                  JUMBO <span className="text-primary font-bold">SOFT WASH</span>
                </div>
                <div className="text-[10px] text-white/60 tracking-wider font-mono -mt-1 uppercase hidden sm:block">
                  Powerful Results. Gentle Touch.
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                    currentRoute === link.route 
                      ? 'text-primary bg-primary-light border-b-2 border-primary' 
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                  } cursor-pointer`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={onContactClick}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm tracking-wide rounded-lg hover:from-primary-hover hover:to-primary-hover active:scale-95 shadow-md shadow-primary/10 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Free Quote</span>
              </button>
            </nav>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-b border-primary/20 shadow-xl py-4 px-4 flex flex-col gap-2 z-50 animate-fade-in-up">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  currentRoute === link.route 
                    ? 'text-primary bg-primary-light border-l-4 border-primary pl-3' 
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 mt-2">
              <button 
                onClick={() => {
                  onContactClick();
                  setIsOpen(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-sm tracking-wide rounded-lg text-center shadow-lg hover:from-primary-hover hover:to-primary-hover transition-all"
              >
                Free Quote (856-562-3557)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon, 
  Droplets, 
  Sparkles, 
  Zap, 
  Layers, 
  ShieldAlert, 
  Flame, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ExternalLink,
  Instagram,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

import { AppRoute } from './types';
import { SERVICES, REVIEWS, FAQS, GALLERY_ITEMS } from './data';
import jumboElephant from './assets/images/jumbo_elephant_1780947373781.png';
import jumboHummer from './assets/images/jumbo_hummer_real.png';

import PromoRibbon from './components/PromoRibbon';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import TestimonialCarousel from './components/TestimonialCarousel';
import FAQAccordion from './components/FAQAccordion';
import GalleryGrid from './components/GalleryGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MobileCallButton from './components/MobileCallButton';

// Icon dynamic resolver mapping
const getServiceIcon = (iconName: string) => {
  const IconStyle = "w-7 h-7 text-primary shrink-0";
  switch (iconName) {
    case 'Home': return <HomeIcon className={IconStyle} />;
    case 'Droplets': return <Droplets className={IconStyle} />;
    case 'Sparkles': return <Sparkles className={IconStyle} />;
    case 'Zap': return <Zap className={IconStyle} />;
    case 'Layers': return <Layers className={IconStyle} />;
    case 'ShieldAlert': return <ShieldAlert className={IconStyle} />;
    case 'Flame': return <Flame className={IconStyle} />;
    default: return <Sparkles className={IconStyle} />;
  }
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('home');
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  // Handle intersection observer triggers on viewport reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      revealElements.forEach((el) => observer.observe(el));
      
      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentRoute]);

  // Command handlers
  const handleQuoteRequest = (serviceValue?: string) => {
    if (serviceValue) {
      setSelectedServiceForQuote(serviceValue);
    }
    setCurrentRoute('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToGallery = () => {
    setCurrentRoute('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter 3 services for Home Page: Roof Cleaning, House Wash, Driveway
  const homeServices = SERVICES.filter(s => ['roof', 'house', 'driveway'].includes(s.id));

  return (
    <div className="min-h-screen bg-bg-light text-text-dark flex flex-col antialiased">
      {/* 10% Off First-Time Ribbon */}
      <PromoRibbon onQuoteClick={() => handleQuoteRequest()} />

      {/* Primary Sticky Top Navbar */}
      <Navbar 
        currentRoute={currentRoute} 
        setCurrentRoute={setCurrentRoute} 
        onContactClick={() => handleQuoteRequest()} 
      />

      {/* Main Content Area based on Client State Routing */}
      <main className="flex-grow">
        
        {/* =======================================================
            HOME PAGE
           ======================================================= */}
        {currentRoute === 'home' && (
          <div className="animate-fade-in-up">
            
            {/* HERO SECTION - Minimum 120px top/bottom padding on desktop */}
            <div className="relative bg-gradient-water text-white overflow-hidden py-20 md:py-32 border-b border-primary/20">
              {/* Background ripple-inspired mesh decoration */}
              <div className="absolute inset-0 opacity-15 bg-water-grid pointer-events-none"></div>
              
              {/* Giant abstract water flow ripple circle in back */}
              <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none animate-ripple-pulse"></div>
              <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Promo text and buttons */}
                  <div className="lg:col-span-7 space-y-8">
                    {/* Floating Google rating banner */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 transition-all text-xs font-bold leading-none uppercase tracking-widest font-mono backdrop-blur-sm shadow-sm md:w-fit">
                      <span className="text-amber-400">★★★★★</span>
                      <span>4.9 Star Google Rated</span>
                    </div>

                    <h1 className="font-display font-black text-[34px] sm:text-[40px] md:text-[64px] tracking-tight text-white leading-tight">
                      South Jersey's Most <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 drop-shadow-sm">
                        Trusted Exterior Cleaning
                      </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-semibold max-w-2xl">
                      Professional low-pressure soft washing and pressure cleaning safely restoring your Jersey curb appeal.
                    </p>

                    <div className="pt-6 flex flex-col sm:flex-row gap-5">
                      <button
                        onClick={() => handleQuoteRequest()}
                        className="px-[40px] py-[18px] bg-primary hover:bg-primary-hover text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-primary/25 cursor-pointer transform hover:scale-102 hover:-translate-y-0.5 active:scale-95 text-center"
                      >
                        Get A Free Quote
                      </button>
                      <button
                        onClick={handleNavigateToGallery}
                        className="px-[40px] py-[18px] bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all border border-white/20 hover:border-white/40 cursor-pointer text-center"
                      >
                        See Our Work
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Branded Fleet & Elephant Mascot Layered Visuals */}
                  <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center">
                    {/* Main Branded Hummer Image Card */}
                    <div className="relative group w-full max-w-md bg-secondary border border-white/10 p-3 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-800">
                        <img 
                          src="https://drive.google.com/thumbnail?id=1ZLseqZwxrW9RBrqrOLabTvmxt8Vv5UkT&sz=w1000" 
                          alt="Branded Hummer H2 towing specialized soft wash trailer" 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-3 p-1.5 space-y-1">
                        <div className="flex justify-between items-center text-xs font-bold text-white uppercase tracking-tight">
                          <span>Jumbo Soft Wash Vehicle</span>
                          <span className="text-primary font-mono font-extrabold">856-562-3557</span>
                        </div>
                        <p className="text-[11px] text-white/70 leading-relaxed">
                          Our mobile unit delivers soft washing and pressure cleaning tools directly to Swedesboro and Williamstown homes!
                        </p>
                      </div>
                    </div>

                    {/* Overlapping Elephant Mascot badge */}
                    <div className="absolute -top-6 -right-4 md:-right-8 z-30 bg-white border-2 border-primary/40 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl transform hover:scale-105 transition-all max-w-[210px]">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 border border-primary/10 overflow-hidden">
                        <img 
                          src={jumboElephant} 
                          alt="Jumbo Mascot Logo" 
                          className="w-11 h-11 object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="block font-display font-black text-xs text-secondary leading-none">
                          Meet Jumbo!
                        </span>
                        <span className="block text-[10px] text-neutral-500 font-mono font-semibold leading-tight mt-1">
                          Our friendly, safe soft-wash mascot
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* WHY SOFT WASH? SECTION - Double padding py-20 md:py-32 */}
            <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Side: Generous card with more padding (min 40px all sides) */}
                <div className="lg:col-span-5 reveal-on-scroll reveal-hidden">
                  <div className="bg-secondary p-10 md:p-[40px] rounded-2xl border border-primary/20 text-white relative overflow-hidden shadow-xl">
                    <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-primary/25 blur-2xl pointer-events-none"></div>
                    <div className="absolute right-6 top-6 p-3 rounded-lg bg-primary/10 text-primary">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>

                    <h3 className="font-display font-extrabold text-xl tracking-tight mb-6 text-primary">
                      The Jumbo Safety Method
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-8 font-semibold">
                      Blasting delicate shingles with heavy pressure causes surface rot and aggregate loss. We introduce optimized chemical solutions to sanitize exterior surfaces safely.
                    </p>

                    {/* Bullet List - Strictly max 2 items */}
                    <div className="space-y-4 font-semibold text-xs text-white/90">
                      <div className="flex gap-2.5 items-start">
                        <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Aggressive organic termination at structural roots</span>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Low pressure (under 300 PSI) causing zero siding damage</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Informative Text Block with generous heading margins */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  
                  {/* Eyebrow Label: spaced tracking-0.2em block and brand blue header */}
                  <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4 mt-2">
                    Eco-Clean Science
                  </span>
                  
                  <h2 className="font-display font-black text-[28px] sm:text-[34px] md:text-[48px] text-secondary tracking-tight leading-tight mb-6">
                    What is Soft Washing and <br />
                    Why Does Your Home Need It?
                  </h2>
                  
                  <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Soft washing uses low-pressure water combined with biodegradable chemistry to wash spots and mildew safely. This safe method causes zero damage and results last three to six times longer than blasting.
                  </p>

                  <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    Black streaks on rooftops degrade aggregate roofing material over time. Our soft wash process sanitizes shingle moss completely, blocking immediate regrowth.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => handleQuoteRequest()}
                      className="px-6 py-3.5 bg-secondary hover:bg-secondary-light text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Get a Free estimate</span>
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* SERVICES OVERVIEW GRID SECTION - py-20 md:py-32 */}
            <section className="py-20 md:py-32 bg-slate-100 border-y border-neutral-200">
              <div className="max-w-7xl mx-auto px-6">
                
                {/* Heading with generous supporting margin */}
                <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll reveal-hidden">
                  <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4 mt-2">
                    Premium Wash Solutions
                  </span>
                  <h2 className="font-display font-black text-[28px] sm:text-[34px] md:text-[48px] text-secondary tracking-tight leading-tight mb-6">
                    Exterior Cleaning Services Offered
                  </h2>
                  <p className="text-neutral-500 text-xs sm:text-sm font-semibold max-w-md mx-auto">
                    We combine low-pressure chemistry and power washing to treat your South Jersey shingles, walls, and driveways correctly.
                  </p>
                </div>

                {/* 3 Service cards: Roof Cleaning, House Wash, Driveway */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {homeServices.map((service) => (
                    <div 
                      key={service.id}
                      className="bg-white rounded-2xl group border border-neutral-100 shadow-md hover:border-primary/20 hover:shadow-xl transition-all overflow-hidden flex flex-col h-[400px] reveal-on-scroll reveal-hidden"
                    >
                      {/* Compact Image Container */}
                      <div className="h-[50%] bg-slate-200 relative overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Text details side - Compact padding, No CTA button */}
                      <div className="h-[50%] p-6 flex flex-col justify-center">
                        <h3 className="font-display font-bold text-base text-secondary mb-2">
                          {service.name}
                        </h3>
                        <p className="text-neutral-600 text-xs sm:text-xs leading-relaxed font-semibold">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-16">
                  <button
                    onClick={() => {
                      setCurrentRoute('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-extrabold text-sm uppercase tracking-wide rounded-xl shadow-md cursor-pointer transition-all active:scale-95 inline-flex items-center gap-2"
                  >
                    <span>View All Services</span>
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </button>
                </div>

              </div>
            </section>

            {/* STATS COUNT BAR SECTION - py-20, border-t/b, 72px fonts */}
            <section className="bg-secondary text-white py-20 md:py-32 relative overflow-hidden border-t border-b border-primary/30">
              <div className="absolute inset-0 bg-water-grid opacity-10 pointer-events-none"></div>
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                  
                  <div className="space-y-2">
                    <div className="text-[44px] md:text-[72px] font-display font-black text-primary leading-none">
                      <Counter end={4.9} decimals={1} suffix=" ★" />
                    </div>
                    <p className="text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">
                      Google Rating
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[44px] md:text-[72px] font-display font-black text-white leading-none">
                      <Counter end={100} suffix="+" />
                    </div>
                    <p className="text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">
                      Happy Customers
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[44px] md:text-[72px] font-display font-black text-primary leading-none">
                      <Counter end={7} />
                    </div>
                    <p className="text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">
                      Core Cleaning Services
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[20px] md:text-[24px] font-display font-black text-white py-6 leading-tight">
                      Williamstown, NJ
                    </div>
                    <p className="text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">
                      Williamstown Based
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* TESTIMONIAL CAROUSEL SECTION - py-20 md:py-32 */}
            <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4 mt-2">
                  Client Testimonials
                </span>
                <h2 className="font-display font-black text-[28px] sm:text-[34px] md:text-[48px] text-secondary tracking-tight leading-tight mb-6">
                  What South Jersey Neighbors Say
                </h2>
                <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4"></div>
              </div>

              {/* Dynamic Interactive Testimonies Carousel */}
              <TestimonialCarousel reviews={REVIEWS} />

              <div className="text-center mt-8">
                <a 
                  href="https://www.google.com/maps/place/Jumbo+Soft+Wash+LLC./@39.6884376,-75.0053659,17z/data=!4m8!3m7!1s0x89c6d55a5cc4498d:0xc33a0d392c22aca5!8m2!3d39.6884376!4d-75.002791!9m1!1b1!16s%2Fg%2F11x61d8yf7?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-secondary hover:text-primary transition-all font-mono uppercase tracking-wide border-b-2 border-neutral-200 hover:border-primary pb-0.5"
                >
                  <span>See all real reviews on Google Map Search</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>

            {/* FEATURED IN / PRESS SECTION: Simplified to One Pull Quote only, no body text */}
            <section className="py-20 md:py-32 bg-neutral-50 border-t border-b border-neutral-200 overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="inline-block px-3 py-1 rounded bg-secondary text-primary font-mono text-[10px] font-extrabold uppercase tracking-widest mb-3">
                    Featured Media Profile
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-secondary tracking-tight">
                    Swedesboro-Woolwich Neighbors Magazine
                  </h3>
                  <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4"></div>
                </div>

                {/* Main Newspaper-inspired card: One Pull Quote Only, no body copy */}
                <div className="bg-white border border-neutral-200/90 shadow-xl rounded-3xl p-10 md:p-16 max-w-4xl mx-auto text-center reveal-on-scroll reveal-hidden">
                  <blockquote className="font-display font-black text-xl sm:text-2xl md:text-3xl text-secondary leading-relaxed italic mb-8">
                    "Jumbo Soft Wash is South Jersey's absolute game-changer. They sanitize shingle moss fully at the root, making results last up to six times longer than standard high-pressure blasting."
                  </blockquote>
                  <cite className="font-mono text-xs md:text-sm font-black text-primary uppercase tracking-[0.2em] block not-italic">
                    — JAMES CONLEY, FOUNDER • SWEDESBORO-WOOLWICH NEIGHBORS
                  </cite>
                </div>

              </div>
            </section>

            {/* ACTION BANNER CALLOUT - py-16 md:py-24 */}
            <section className="bg-primary py-16 md:py-24 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Side: Content */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <span className="inline-block px-3 py-1 rounded bg-secondary text-primary font-mono text-[10px] font-extrabold uppercase tracking-widest">
                      Schedule Today
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                      Ready to See the Difference on Your Property?
                    </h3>
                    <p className="text-white/90 text-sm md:text-base max-w-xl font-medium leading-relaxed">
                      Call Jim Conley at Jumbo Soft Wash for a prioritized free verbal or written estimate on professional soft washing and pressure cleaning.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                      <a 
                        href="tel:8565623557"
                        className="px-6 py-4 bg-secondary hover:bg-secondary-light text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-102 active:scale-95 cursor-pointer flex items-center gap-2 justify-center"
                      >
                        <Phone className="w-4 h-4 text-primary" />
                        <span>Call 856-562-3557</span>
                      </a>
                      <button 
                        onClick={() => handleQuoteRequest()}
                        className="px-6 py-4 bg-white text-secondary hover:bg-neutral-100 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer text-center"
                      >
                        Request a Free Quote
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Image with dynamic premium container */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative group">
                      {/* Decorative background accent card */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary/50 rounded-2xl opacity-30 blur-lg group-hover:opacity-40 transition duration-500"></div>
                      
                      {/* Real Image container with shadow and roundness */}
                      <div className="relative bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/15 shadow-2xl overflow-hidden aspect-video md:aspect-[4/3] lg:aspect-square max-h-[400px] w-full">
                        <img 
                          src="https://drive.google.com/thumbnail?id=10xScq4zbPUeGCVUhQrywwgAwJLroJfVw&sz=w1000" 
                          alt="Professional cleaning results by Jumbo Soft Wash" 
                          className="w-full h-full object-cover rounded-xl shadow-inner hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Badge overlay indicating quality/experience */}
                      <div className="absolute -bottom-4 right-4 bg-secondary text-primary px-4 py-2 rounded-lg text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-xl border border-white/10">
                        100% Saturation Sanitized
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>
        )}

        {/* =======================================================
            SERVICES PAGE
           ======================================================= */}
        {currentRoute === 'services' && (
          <div className="bg-slate-50/50 py-20 md:py-32 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4 mt-2">
                  Perfect Clean Guarantee
                </span>
                <h1 className="font-display font-black text-[34px] sm:text-[40px] md:text-[64px] text-secondary tracking-tight mt-1 leading-tight">
                  Our Professional Services
                </h1>
                <p className="text-neutral-500 text-xs sm:text-sm font-semibold max-w-md mx-auto mt-4">
                  We use optimized commercial equipment and selected ecological treatments to clean your South Jersey property beautifully.
                </p>
                <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6"></div>
              </div>

              {/* Ready to clean? CTA Box */}
              <div className="max-w-5xl mx-auto mb-16 bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 relative min-h-[250px] md:min-h-auto overflow-hidden">
                  <img 
                    src="https://drive.google.com/thumbnail?id=1zVQUAB9MUgxOxzi6WJqUX2o2uAsGQGXc&sz=w1000" 
                    alt="Ready for a pristine clean" 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                </div>
                <div className="md:col-span-7 p-10 md:p-12 flex flex-col justify-center">
                  <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                    Instant Quote
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-secondary tracking-tight mb-4">
                    Ready to Restore Your Property's Shine?
                  </h3>
                  <p className="text-neutral-500 text-sm md:text-base mb-8 font-semibold leading-relaxed">
                    Our team of friendly soft wash specialists is standing by. Get a clear, competitive verbal or written estimate for your roof, gutters, siding, or pavers today.
                  </p>
                  <div>
                    <button
                      onClick={() => handleQuoteRequest()}
                      className="px-6 py-4 bg-primary hover:bg-primary-hover text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Get Started Now</span>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

               {/* Detailed Services list render */}
              <div className="space-y-10">
                {SERVICES.map((service, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div 
                      key={service.id}
                      className="bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-md grid grid-cols-1 lg:grid-cols-12 max-w-4xl mx-auto lg:min-h-[230px] lg:h-auto reveal-on-scroll reveal-hidden"
                    >
                      {/* Image side - Compacted to 5 cols out of 12 */}
                      <div className={`lg:col-span-5 relative h-[180px] lg:h-full ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent"></div>
                      </div>

                      {/* Text details side - Compact padding and typography */}
                      <div className="lg:col-span-7 p-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-1.5 rounded-lg bg-primary-light text-primary shrink-0">
                              {getServiceIcon(service.iconName)}
                            </div>
                            <h3 className="font-display font-black text-base md:text-lg text-secondary tracking-tight">
                              {service.name}
                            </h3>
                          </div>

                          <p className="text-neutral-600 text-xs sm:text-xs leading-relaxed mb-4 font-semibold line-clamp-3">
                            {service.longDescription || service.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={() => handleQuoteRequest(service.name)}
                            className="px-4 py-2.5 bg-primary hover:bg-primary-hover text-white font-extrabold text-[11px] uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                          >
                            <span>Get Free Estimate</span>
                            <ChevronRight className="w-3.5 h-3.5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Location Callout Box */}
              <div className="max-w-3xl mx-auto mt-24 bg-gradient-to-r from-secondary to-secondary-light text-white rounded-2xl p-10 md:p-[40px] border border-primary/20 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <h4 className="font-display font-extrabold text-lg text-primary tracking-tight mb-4">
                  Proudly Serving South Jersey Families
                </h4>
                <p className="text-white/85 text-sm md:text-base leading-relaxed font-semibold">
                  We treat homes throughout Williamstown, Glassboro, Sewell, Turnersville, Swedesboro, and neighboring communities.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono text-white/50 tracking-wider uppercase font-bold">
                  <span>Williamstown</span>
                  <span>•</span>
                  <span>Glassboro</span>
                  <span>•</span>
                  <span>Sewell</span>
                  <span>•</span>
                  <span>Turnersville</span>
                  <span>•</span>
                  <span>Swedesboro</span>
                  <span>•</span>
                  <span>Mullica Hill</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* =======================================================
            GALLERY PAGE
           ======================================================= */}
        {currentRoute === 'gallery' && (
          <div className="py-20 md:py-32 bg-slate-50/50 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Animated water-ripple banner background in gallery page header */}
              <div className="water-ripple-header text-white py-16 md:py-24 px-6 md:px-12 text-center rounded-3xl mt-2 mb-16 shadow-2xl relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-water-grid opacity-15 pointer-events-none"></div>
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4">
                  Proof Is In The Washing
                </span>
                <h1 className="font-display font-black text-[34px] sm:text-[40px] md:text-[60px] text-white tracking-tight mt-1 leading-tight mb-6">
                  Before &amp; After Gallery
                </h1>
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-semibold max-w-xl mx-auto">
                  Moss and deep ecological slime vanished completely. Inspect real South Jersey property transformations below.
                </p>
              </div>

              {/* Filterable comparison grid system (3 col desktop, 2 col tablet, 1 col mobile) */}
              <GalleryGrid items={GALLERY_ITEMS} />

            </div>
          </div>
        )}

        {/* =======================================================
            FAQ PAGE
           ======================================================= */}
        {currentRoute === 'faq' && (
          <div className="py-20 md:py-32 bg-slate-50/50 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4 mt-2">
                  Clear Business Integrity
                </span>
                <h1 className="font-display font-black text-[34px] sm:text-[40px] md:text-[64px] text-secondary tracking-tight mt-1 leading-tight">
                  Frequently Asked Questions
                </h1>
                <p className="text-neutral-500 text-xs sm:text-sm font-semibold max-w-md mx-auto mt-4">
                  Have questions about chemical selections, Low-PSI systems, or quoting? We have direct transparent responses.
                </p>
                <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6"></div>
              </div>

              {/* Responsive 2-column layout to fill visual whitespace on large viewports */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
                
                {/* Left Side: Premium Visual & Helpful Sidebars */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Visual 1: Soft Wash vs Pressure Wash Comparison Checklist */}
                  <div className="bg-white border border-neutral-100 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        <Sparkles className="w-5 h-5 shrink-0" />
                      </div>
                      <h3 className="font-display font-black text-lg text-secondary">
                        Wash Method Guide
                      </h3>
                    </div>
                    <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                      Understanding the core visual and mechanical difference behind our specialized process vs standard pressure wash.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-neutral-50 rounded-xl space-y-2 border border-primary/20">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-secondary font-mono uppercase tracking-wide">Soft Washing (HQ)</span>
                          <span className="px-2 py-0.5 text-[8px] font-bold text-emerald-700 bg-emerald-50 rounded font-mono uppercase tracking-wider">Premium Safe</span>
                        </div>
                        <ul className="text-[11px] text-neutral-500 font-semibold space-y-1.5 list-disc pl-4 leading-normal">
                          <li>PSI range: Under 150 (Gentle as rain waterfall)</li>
                          <li>Cleans mold, moss &amp; algae deep in shingle seams</li>
                          <li>100% plant-safe biodegradable sanitizers</li>
                          <li>Safe for shingle grit, wood, stucco &amp; vinyl siding</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-neutral-50/50 rounded-xl space-y-2 border border-dashed border-neutral-200">
                        <div className="flex items-center justify-between opacity-80">
                          <span className="text-xs font-bold text-neutral-400 font-mono uppercase tracking-wide">Traditional Blasting</span>
                          <span className="px-2 py-0.5 text-[8px] font-bold text-red-700 bg-red-50 rounded font-mono uppercase tracking-wider">High Risk</span>
                        </div>
                        <ul className="text-[11px] text-neutral-400 font-semibold space-y-1.5 list-disc pl-4 leading-normal opacity-80">
                          <li>PSI range: 3000 to 4500 (Abrupt surface blast)</li>
                          <li>Leaves spores alive behind cracks (faster regrowth)</li>
                          <li>Relies on heavy water pressure, causing paint leaks</li>
                          <li>High risk of blowing off shingle grit &amp; stripping seals</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual 2: Plant Safety Guarantee / Ecological Card */}
                  <div className="bg-secondary text-white p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="p-2 bg-white/10 text-primary rounded-lg shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-base text-white">
                        Lawn &amp; Flowerbed Safe
                      </h4>
                    </div>
                    <p className="text-white/80 text-xs leading-relaxed font-semibold mb-4">
                      Our custom-configured wash sequence ensures absolute botanical protection. Surrounding landscape beds are treated with heavy pre-wetting, neutral chemical dilution rinses, and final nutrient hydrating washes.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-primary font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      <span>Zero-Toxin Sanitizer Formula</span>
                    </div>
                  </div>

                </div>

                {/* Right Side: Accordion */}
                <div className="lg:col-span-8">
                  <FAQAccordion faqs={FAQS} />
                </div>

              </div>

              {/* Secondary CTA block */}
              <div className="mt-16 text-center max-w-md mx-auto p-10 bg-white rounded-2xl border border-neutral-100 shadow-xl">
                <h4 className="font-display font-extrabold text-base text-secondary mb-3">
                  Have another specific question?
                </h4>
                <p className="text-neutral-500 text-xs sm:text-sm mb-6 leading-relaxed font-semibold">
                  Call Jim directly for transparent guidance, and we will answer your question immediately.
                </p>
                <a 
                  href="tel:8565623557"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 856-562-3557</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* =======================================================
            ABOUT PAGE
           ======================================================= */}
        {currentRoute === 'about' && (
          <div className="py-20 md:py-32 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6">
              
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4 mt-2">
                  Local Trust &amp; Sincerity
                </span>
                <h1 className="font-display font-black text-[34px] sm:text-[40px] md:text-[64px] text-secondary tracking-tight mt-1 leading-tight">
                  About Jumbo Soft Wash LLC
                </h1>
                <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6"></div>
              </div>

              {/* Story Grid representation: About page body cut by 50% */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
                {/* Left Photo side - Shrunk to col-span-4, max-w-md, and aspect-[16/10] */}
                <div className="lg:col-span-4 max-w-md mx-auto w-full reveal-on-scroll reveal-hidden">
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-200/50 shadow-2xl">
                    <img 
                      src="https://drive.google.com/thumbnail?id=1ZLseqZwxrW9RBrqrOLabTvmxt8Vv5UkT&sz=w1000"
                      alt="James Conley Jumbo Soft Wash Founder"
                      className="w-full h-full object-cover aspect-[16/10]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="font-display font-black text-sm uppercase tracking-wider text-primary">Conley Clean Guarantee</p>
                      <p className="text-xs text-white/80 font-mono mt-1">Established Williamstown Local Business</p>
                    </div>
                  </div>
                </div>

                {/* Right text Story side - widened to col-span-8 for perfect proportions */}
                <div className="lg:col-span-8 space-y-8">
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-secondary tracking-tight leading-tight">
                    South Jersey's Trusted Name in Exterior Cleaning
                  </h2>

                  <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                    <p>
                      Jumbo Soft Wash LLC is a locally owned South Jersey company founded by James Conley on a simple belief: your home deserves the utmost pride and professional care.
                    </p>
                    <p>
                      We specialize in low-pressure soft washing and exterior cleaning, restoring your aging rooftops, siding, and grimy driveways to a pristine, brand-new condition.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 font-display font-bold text-sm sm:text-base italic text-secondary-light leading-relaxed my-6 bg-primary-light/50 py-3.5 pr-4 rounded-r-xl">
                    "We are not just spraying water — we are restoring beauty and protecting your homegrown value." <br />
                    <span className="text-xs text-primary font-extrabold uppercase font-mono block mt-1.5">— James Conley, Founder</span>
                  </div>

                  {/* Press Quote Section */}
                  <div className="p-4 bg-slate-50 border rounded-xl flex items-start gap-3">
                    <div className="p-2 rounded bg-primary-light shrink-0 text-primary mt-1">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-secondary text-xs sm:text-sm font-semibold font-display">
                        Featured Business Profile
                      </p>
                      <p className="text-neutral-500 text-xs italic leading-relaxed">
                        Read our full feature from the Swedesboro-Woolwich Neighbors Magazine below!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMMERSIVE NEWSPAPER CLIPPING SECTION: Full Original Magazine Feature */}
              <div className="mt-20 max-w-4xl mx-auto bg-stone-50 border-[3px] border-stone-800 p-8 sm:p-12 rounded-lg shadow-xl relative overflow-hidden text-stone-900 font-serif">
                {/* Vintage paper texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>
                <div className="absolute top-0 inset-x-0 h-1.5 bg-stone-800"></div>

                {/* Newspaper Header Masthead */}
                <div className="text-center border-b-[3px] border-stone-800 pb-6 mb-6">
                  <div className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.34em] text-stone-600 uppercase mb-2">
                    — COMMUNITY BUSINESS SPOTLIGHT FEATURE —
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-stone-900 tracking-tight uppercase leading-none my-3">
                    Swedesboro-Woolwich Neighbors
                  </h3>
                  <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono border-t border-b border-stone-800 py-1.5 mt-4 text-stone-600">
                    <span>VOLUME VII • NO. 4</span>
                    <span className="font-bold">PRESS PROFILE ARCHIVE</span>
                    <span>VERIFIED LOCAL NEWS</span>
                  </div>
                </div>

                {/* Main Article Titles */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-2xl sm:text-4.5xl font-extrabold text-stone-900 leading-tight tracking-tight font-serif text-center sm:text-left">
                    The Science of the Soft Wash: How Jumbo Soft Wash LLC Safely Restores South Jersey Curb Appeal
                  </h4>
                  <p className="text-sm sm:text-base italic text-stone-700 font-medium leading-relaxed max-w-3xl border-l-2 border-stone-400 pl-4 py-1">
                    Local entrepreneur James Conley explains why high-pressure blasting does more harm than good to delicate shingle roofs and home siding, and how scientific low-pressure sanitization extends exterior material lifetimes.
                  </p>
                </div>

                {/* Multi-column Body Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-800 text-sm sm:text-base leading-relaxed text-justify">
                  <div className="space-y-4">
                    <p>
                      <span className="float-left text-5xl font-black font-serif mr-2 mt-1 leading-none text-stone-900">F</span>
                      or many homeowners, keeping property siding and roofing clean is a continuous battle against South Jersey's humid summers. But according to James Conley, founder of Jumbo Soft Wash LLC, the standard response of renting a high-power pressure washer and blasting the grime away can lead to thousands of dollars in water damage, cracked vinyl siding, and degraded shingle aggregate.
                    </p>
                    <p>
                      "High pressure is excellent for dense concrete or thick brick masonry, but it is highly destructive for standard household roofs and delicate siding," Conley warns during our profile discussion. "Brute water force strips the helpful protective granule layers directly off of asphalt shingles. This invites rapid water retention and leads to structural material degradation."
                    </p>
                    <p>
                      Instead, Jumbo Soft Wash LLC pioneers an optimized low-pressure soft-washing technique. By deploying custom-balanced, highly targeted biodegradable soap solutions, the team sanitizes organic contaminants directly at their roots. 
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Pull Quote Block inside the newspaper */}
                    <div className="p-4 bg-stone-100/80 border-t border-b-2 border-stone-400 my-2 italic text-stone-900 font-semibold text-center leading-relaxed">
                      "We sanitize shingle moss fully at the root, making results last up to six times longer than standard pressure blasting."
                    </div>
                    <p>
                      Once the chemical solution completely dissolves deep-rooted infestations of green algae, black mold, moss, and lichens, a gentle low-pressure rinse (often at a lower pressure than a standard garden hose) whisks away all residual debris cleanly and safely.
                    </p>
                    <p>
                      "Our process is scientific," Conley notes. "We are not raw-blasting away surface marks; we are chemically sanitizing the underlying growth. The result is a sparkling clean home that stays spotless for twice as long without putting shingles or seals at risk."
                    </p>
                    <p>
                      Based in Williamstown and serving Glassboro, Sewell, Turnersville, and Swedesboro families, Jumbo Soft Wash has established itself as South Jersey's premium, fully insured standard for residential exterior washing.
                    </p>
                  </div>
                </div>

                {/* Article Sign-off Footer */}
                <div className="border-t border-stone-800 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-stone-600 gap-2">
                  <span>FACSIMILE OF SW NEWS MAG FEB 2026</span>
                  <span className="font-extrabold uppercase text-stone-900">★ CONLEY CLEAN GUARANTEED ★</span>
                </div>
              </div>

              {/* WHY CHOOSE US BULLETIN SECTION: Removed and structured to max 2 bullet cards */}
              <div className="mt-24 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-secondary tracking-tight">
                    Why Property Owners Choose Jumbo
                  </h3>
                  <div className="w-8 h-0.5 bg-primary mx-auto mt-3"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  {/* Card 1: Zero Damage Low PSI */}
                  <div className="p-10 bg-white border border-neutral-100 rounded-2xl shadow-md hover:shadow-lg transition-all reveal-on-scroll reveal-hidden">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center font-bold mb-6 border border-primary">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-display font-extrabold text-base text-secondary mb-3">Zero Damage Low-PSI</h4>
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-semibold">
                      We let optimized scientific chemistry melt away spots or growths — causing zero shingle wear.
                    </p>
                  </div>

                  {/* Card 2: Neighbor Trust Rating */}
                  <div className="p-10 bg-white border border-neutral-100 rounded-2xl shadow-md hover:shadow-lg transition-all reveal-on-scroll reveal-hidden">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold mb-6 border border-amber-500">
                      ★
                    </div>
                    <h4 className="font-display font-extrabold text-base text-secondary mb-3">4.9 Star Neighbor Trust</h4>
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-semibold">
                      Consistently rated five stars by Glassboro, Sewell, and Williamstown local homeowners.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* =======================================================
            CONTACT CLIENT FORM PAGE
           ======================================================= */}
        {currentRoute === 'contact' && (
          <div className="py-20 md:py-32 bg-slate-50/50 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-4 mt-2">
                  Fast Verbal Estimates
                </span>
                <h1 className="font-display font-black text-[34px] sm:text-[40px] md:text-[64px] text-secondary tracking-tight mt-1 leading-tight">
                  Get Your Free Quote Today
                </h1>
                <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6"></div>
              </div>

              {/* Form & Info Grid representation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                
                {/* Left Column: Form component */}
                <div className="lg:col-span-7">
                  <ContactForm preselectedService={selectedServiceForQuote} />
                </div>

                {/* Right Column: Contact info details & maps */}
                <div className="lg:col-span-5 space-y-8">
                  
                  {/* Physical details credentials: Added thin blue left border accent */}
                  <div className="bg-secondary text-white p-10 md:p-[40px] rounded-2xl border-l-[3px] border-primary shadow-2xl">
                    <h4 className="font-display font-extrabold text-xs uppercase tracking-[0.2em] text-primary mb-8">
                      Direct Connection info
                    </h4>
                    
                    <ul className="space-y-6 font-mono text-xs sm:text-sm">
                      <li className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-white/10 text-primary">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider">Call or Text</span>
                          <a href="tel:8565623557" className="text-base font-black hover:text-primary transition-colors block mt-1">
                            856-562-3557
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-white/10 text-primary">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider">Email Portal</span>
                          <a href="mailto:jumbosoftwash@gmail.com" className="text-sm font-black hover:text-primary transition-colors block mt-1 break-all">
                            jumbosoftwash@gmail.com
                          </a>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-white/10 text-primary">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider">HQ Address</span>
                          <span className="text-white/80 leading-relaxed font-semibold block mt-1 font-sans">
                            401 N Main St Apartment 230b<br />
                            Williamstown, NJ 08094
                          </span>
                        </div>
                      </li>
                    </ul>

                    {/* Social connection portal info */}
                    <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-gradient-to-tr from-purple-600 to-amber-500 rounded-lg text-white">
                          <Instagram className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-white/80">Follow @jumbosoftwash</span>
                      </div>
                      <a 
                        href="https://instagram.com/jumbosoftwash" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs text-primary font-bold hover:underline font-mono uppercase tracking-widest flex items-center gap-1"
                      >
                        <span>View Instagram</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Embedded Google Maps locator iframe for location */}
                  <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-xl aspect-[4/3] relative h-72">
                    <iframe
                      id="google-maps"
                      title="Jumbo Soft Wash LLC Office Map Location"
                      src="https://maps.google.com/maps?q=401%20N%20Main%20St%20Apartment%20230b,%20Williamstown,%20NJ%2008094&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Main footer layout with 3 columns, clean copyright, and no repeated nav lists */}
      <Footer setCurrentRoute={setCurrentRoute} />

      {/* Mobile-only pulsing bottom dial button - Large size (60px) and box-shadow-pulse */}
      <MobileCallButton onQuoteClick={() => handleQuoteRequest()} />
    </div>
  );
}

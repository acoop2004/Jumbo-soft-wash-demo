import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckSquare, Send, CheckCircle, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactFormProps {
  preselectedService?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ preselectedService, onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    services: preselectedService ? [preselectedService] : [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    { label: 'Roof Cleaning', value: 'Roof Cleaning' },
    { label: 'Gutter Cleaning', value: 'Gutter Cleaning' },
    { label: 'House Wash / Siding', value: 'House Wash / Exterior Soft Wash' },
    { label: 'Pressure Washing (Driveways/Walks)', value: 'Pressure Washing' },
    { label: 'Driveway Cleaning', value: 'Driveway Cleaning' },
    { label: 'Sidewalks & Walkways', value: 'Sidewalks & Walkways' },
    { label: 'Patios & Decks', value: 'Patios & Decks' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(value);
      const updatedServices = isSelected
        ? prev.services.filter(s => s !== value)
        : [...prev.services, value];
      return { ...prev, services: updatedServices };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Quick validation
    if (!formData.name.trim()) return setErrorMessage('Name is required.');
    if (!formData.phone.trim()) return setErrorMessage('Phone number is required.');
    if (!formData.address.trim()) return setErrorMessage('Service address is required.');
    if (formData.services.length === 0) return setErrorMessage('Please select at least one service.');

    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Store in localStorage as demo archive
      try {
        const existing = localStorage.getItem('jumbo_quotes') || '[]';
        const parsed = JSON.parse(existing);
        parsed.push({
          ...formData,
          id: Date.now().toString(),
          timestamp: new Date().toLocaleString(),
          status: 'Pending Review'
        });
        localStorage.setItem('jumbo_quotes', JSON.stringify(parsed));
      } catch (err) {
        console.error('Storage error:', err);
      }

      if (onSuccess) {
        onSuccess();
      }
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-secondary/5 border border-neutral-100 overflow-hidden">
      {/* Form Header Accent */}
      <div className="bg-secondary p-6 text-white text-center border-b border-primary/10">
        <h3 className="font-display font-extrabold text-xl md:text-2xl text-white tracking-tight">
          Request Your Free Quote
        </h3>
        <p className="text-white/85 text-xs md:text-sm font-semibold mt-1.5 font-mono text-primary uppercase tracking-wider">
          Response is typically within 1 hour!
        </p>
      </div>

      {isSuccess ? (
        <div className="p-8 md:p-12 text-center animate-fade-in-up">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-emerald-500 shadow-md animate-bounce">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h4 className="font-display font-extrabold text-xl md:text-2xl text-secondary tracking-tight mb-2">
            Quote Request Received!
          </h4>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-6">
            Thank you, <strong className="text-secondary">{formData.name}</strong>. Jim from Jumbo Soft Wash is reviewing your request for <strong className="text-secondary">{formData.address}</strong> and will call you at <strong className="text-secondary">{formData.phone}</strong> shortly.
          </p>
          <div className="bg-slate-50 border border-neutral-200 rounded-xl p-4 max-w-sm mx-auto mb-8 text-left text-xs font-semibold text-secondary space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-4 h-4" />
              <span>Estimated response time: <strong>30-45 minutes</strong></span>
            </div>
            <div className="border-t border-neutral-200 my-2 pt-2">
              <div className="font-mono text-neutral-400 uppercase tracking-widest text-[9px] mb-1">Services Needed:</div>
              <ul className="list-disc pl-4 space-y-0.5 text-neutral-700">
                {formData.services.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
          <button 
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                address: '',
                services: [],
                message: ''
              });
            }}
            className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {errorMessage && (
            <div className="p-3.5 bg-red-50 text-accent border-l-4 border-accent text-xs font-bold rounded-r-lg">
              Attention: {errorMessage}
            </div>
          )}

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name-input" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                Your Full Name <span className="text-accent">*</span>
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                required
                placeholder="e.g., John Smith"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 min-h-[56px] bg-slate-50 border border-neutral-200 rounded-xl text-secondary text-sm font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone-input" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                Phone Number <span className="text-accent">*</span>
              </label>
              <input
                id="phone-input"
                type="tel"
                name="phone"
                required
                placeholder="e.g., 856-555-0123"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 min-h-[56px] bg-slate-50 border border-neutral-200 rounded-xl text-secondary text-sm font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email-input" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                Email Address
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                placeholder="e.g., john@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 min-h-[56px] bg-slate-50 border border-neutral-200 rounded-xl text-secondary text-sm font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* Service Address */}
            <div>
              <label htmlFor="address-input" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                Service Property Address <span className="text-accent">*</span>
              </label>
              <input
                id="address-input"
                type="text"
                name="address"
                required
                placeholder="e.g., 123 Maple Ave, Glassboro, NJ"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 min-h-[56px] bg-slate-50 border border-neutral-200 rounded-xl text-secondary text-sm font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Service Selector Block */}
          <div>
            <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
              Select Services Needed (Select at least one) <span className="text-accent">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {servicesList.map((service) => {
                const isSelected = formData.services.includes(service.value);
                return (
                  <button
                    key={service.value}
                    type="button"
                    onClick={() => handleCheckboxChange(service.value)}
                    className={`flex items-center text-left gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary-light border-primary text-primary shadow-sm shadow-primary/5'
                        : 'bg-slate-50 border-neutral-200 hover:border-primary/40 hover:bg-neutral-50 text-secondary'
                    }`}
                  >
                    <CheckSquare className={`w-4 h-4 shrink-0 ${isSelected ? 'text-primary fill-primary/10' : 'text-neutral-400'}`} />
                    <span>{service.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message-input" className="block text-xs font-bold text-secondary uppercase tracking-wider mb-3">
              Project Details & Message (Optional)
            </label>
            <textarea
              id="message-input"
              name="message"
              rows={3}
              placeholder="e.g., Tell us about the level of dirt, special access requests, or timeframe..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-neutral-200 rounded-xl text-secondary text-sm font-semibold focus:outline-none focus:border-primary focus:bg-white transition-all shadow-inner resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-primary to-blue-500 text-white hover:from-primary-hover hover:to-primary-hover text-sm font-extrabold uppercase tracking-widest rounded-xl transition-all shadow-lg active:scale-99 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Request My Free Quote</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

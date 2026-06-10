import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>('faq1'); // Default open first FAQ

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div 
            key={faq.id} 
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              isOpen 
                ? 'border-primary bg-white shadow-md shadow-primary/5' 
                : 'border-secondary-light/10 bg-white hover:border-primary/45 hover:shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between p-4 md:p-5 text-left font-display font-bold text-[18px] md:text-[20px] text-secondary transition-colors cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3">
                <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-neutral-400'}`} />
                <span className="leading-snug">{faq.question}</span>
              </div>
              <ChevronDown className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                isOpen 
                  ? 'max-h-[500px] border-t border-primary/10 opacity-100' 
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="p-4 md:p-5 text-sm md:text-base text-text-dark/85 leading-relaxed bg-slate-50/50">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

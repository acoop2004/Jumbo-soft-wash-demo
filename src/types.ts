export type AppRoute = 'home' | 'services' | 'gallery' | 'faq' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  iconName: string; // Dynamic icon reference mapping to Lucide icon
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  stars: number;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Roof' | 'House Wash' | 'Driveway' | 'Patio' | 'Gutter' | 'Deck' | 'Concrete' | 'Our Team';
  location: string;
  beforeImage: string;
  afterImage: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  services: string[];
  message: string;
}


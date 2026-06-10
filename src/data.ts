import { ServiceItem, ReviewItem, FAQItem, GalleryItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'roof',
    name: 'Roof Cleaning',
    description: 'Soft wash your roof to eliminate algae, mold, moss, and black streaks safely.',
    longDescription: 'Our low-pressure soft wash eliminates black streaks, mold, and moss at the roots. This safe process protects shingles, extends roof life, and instantly restores pristine curb appeal.',
    iconName: 'Home',
    image: 'https://drive.google.com/thumbnail?id=1aGPc2t9EmS3-ajZ8GAePr7c0gbe0H1EW&sz=w1000'
  },
  {
    id: 'gutter',
    name: 'Gutter Cleaning',
    description: 'Full removal of leaves, debris, and blockages to protect your foundation.',
    longDescription: 'We completely clear all leaves, debris, and blockages from your gutters. This vital service guarantees proper drainage and protects your foundation from water damage.',
    iconName: 'Droplets',
    image: 'https://drive.google.com/thumbnail?id=1oTChHZTa6GAXbl0mTOJ7ImXX0xM-y2gb&sz=w1000'
  },
  {
    id: 'house',
    name: 'House Wash / Exterior Soft Wash',
    description: 'Low-pressure soft wash removes dirt, mold, and mildew safely from your siding.',
    longDescription: 'Our signature low-pressure wash sanitizes vinyl, stucco, and wood siding safely. We eliminate green algae and grime without risking any surface or water damage.',
    iconName: 'Sparkles',
    image: 'https://drive.google.com/thumbnail?id=1yuRrB-HgA3SAHPmbfE9ZsCs1S61SCYoV&sz=w1000'
  },
  {
    id: 'pressure',
    name: 'Pressure Washing',
    description: 'High-powered cleaning for concrete, brick, and durable hard surfaces.',
    longDescription: 'Commercial-grade pressure wash scouring away deeply embedded grime, rust, and oil. Perfect for reviving dense masonry, concrete paths, and enduring brickwork.',
    iconName: 'Zap',
    image: 'https://drive.google.com/thumbnail?id=1oewpf--jeTRCn5k4oWLjMDZbkmN2QUtd&sz=w1000'
  },
  {
    id: 'driveway',
    name: 'Driveway Cleaning',
    description: 'Remove oil stains, tire marks, and embedded grime to restore concrete appeal.',
    longDescription: 'We lift stubborn motor oil stains, grease, and dark organic film from concrete. Our advanced post-treatment brighteners keep your driveway cleaner for twice as long.',
    iconName: 'Layers',
    image: 'https://drive.google.com/thumbnail?id=1E2WEWH0nrX2QtfpWl_02gwFQlzqR1dwG&sz=w1000'
  },
  {
    id: 'sidewalks',
    name: 'Sidewalks & Walkways',
    description: 'Eliminate slippery algae buildup and organic staining for safer pathways.',
    longDescription: 'We remove slippery green algae and dark moss from sidewalk pathways and steps. This essential service mitigates slipping hazards while immediately brightening your walkways.',
    iconName: 'ShieldAlert',
    image: 'https://drive.google.com/thumbnail?id=192_Sk41fHElChrs5_mMLIFUMYNeovuBC&sz=w1000'
  },
  {
    id: 'patios',
    name: 'Patios & Decks',
    description: 'Careful deep cleaning of wood, composite, brick, and concrete outdoor living areas.',
    longDescription: 'Safe, meticulous washing for delicate wood composite, brick pavers, and concrete patios. We gently dissolve graying, mold, and accumulated pollen to restore vibrant surfaces.',
    iconName: 'Flame',
    image: 'https://drive.google.com/thumbnail?id=10xScq4zbPUeGCVUhQrywwgAwJLroJfVw&sz=w1000'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev1',
    name: 'Robert M.',
    location: 'Williamstown, NJ',
    stars: 5,
    content: 'Jim did an outstanding job washing our siding and roof shingles. Meticulous work, exceptional customer service, and very fair pricing!'
  },
  {
    id: 'rev2',
    name: 'Dave G.',
    location: 'Swedesboro, NJ',
    stars: 5,
    content: 'Jumbo Soft Wash completely transformed our dirty concrete driveway and siding. He was incredibly responsive, prompt, and professional.'
  },
  {
    id: 'rev3',
    name: 'Patricia K.',
    location: 'Sewell, NJ',
    stars: 5,
    content: 'We had our roof treated for moss and house soft washed. Jim is extremely careful with our flowerbeds and took real homegrown pride in his work.'
  },
  {
    id: 'rev4',
    name: 'Linda S.',
    location: 'Turnersville, NJ',
    stars: 5,
    content: 'Our vinyl siding and gutters look brand new. Jumbo Soft Wash is extremely professional, safe on delicate surfaces, and highly recommended!'
  },
  {
    id: 'rev5',
    name: 'James C.',
    location: 'Haddonfield, NJ',
    stars: 5,
    content: 'Highly recommend Jim for high-reach gutter flushing and siding sanitation. Best soft wash exterior cleaning service in all of South Jersey!'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What is soft washing and how is it different from pressure washing?',
    answer: 'Soft washing uses low-pressure water and biodegradable solutions to safely sanitize surfaces. It kills organic growth at its root, making it safer for roofs and siding than high-pressure blasting.'
  },
  {
    id: 'faq2',
    question: 'Will soft washing damage my roof or siding?',
    answer: 'No, our soft washing process is designed to prevent damage. The low-pressure system is completely safe for delicate shingles, siding, and seals.'
  },
  {
    id: 'faq3',
    question: 'How long does a typical job take?',
    answer: 'Most residential jobs take between 1 to 3 hours depending on property size. We will provide a precise time estimate before starting.'
  },
  {
    id: 'faq4',
    question: 'Do I need to be home during the service?',
    answer: 'No, you do not need to be home. As long as we have water access, we can complete the wash and send you photo updates.'
  },
  {
    id: 'faq5',
    question: 'How often should I get my house or roof washed?',
    answer: 'We recommend washing your house every 1–2 years and your roof every 2–3 years. Properties with heavy shade may require more frequent washings.'
  },
  {
    id: 'faq6',
    question: 'Are your cleaning solutions safe for my plants and landscaping?',
    answer: 'Absolutely. We utilize biodegradable, plant-safe solutions and thoroughly rinse all surrounding landscaping before, during, and after our clean.'
  },
  {
    id: 'faq7',
    question: 'Do you offer free estimates?',
    answer: 'Yes, we provide 100% free, no-obligation estimates. Call us at 856-562-3557 or fill out our online form to receive yours.'
  },
  {
    id: 'faq8',
    question: 'What areas do you serve?',
    answer: 'We are based in Williamstown, NJ and serve all of South Jersey including Glassboro, Sewell, Turnersville, and Swedesboro.'
  },
  {
    id: 'faq9',
    question: 'Are you insured?',
    answer: 'Yes, Jumbo Soft Wash LLC is fully licensed and insured for your complete peace of mind.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal1',
    title: 'Asphalt Shingle Organic Treatment',
    category: 'Concrete',
    location: 'Williamstown, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1Dwy0tTq1O1S2KIgdJNXh2By43i7G2604&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1f3fdRh4QF136bCF8VPto-rOiw8kKf9p-&sz=w1000'
  },
  {
    id: 'gal7',
    title: 'Under-Soffit Gutter Wash',
    category: 'Deck',
    location: 'Williamstown, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1awbeec9rx9oUw2P5_JH-zHpqCs1pfN74&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1OztGVcTYqBz9rcpspnKM84FGdOFUo_AV&sz=w1000'
  },
  {
    id: 'gal8',
    title: 'Vinyl Cladding Mold Removal',
    category: 'Concrete',
    location: 'Swedesboro, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=10xScq4zbPUeGCVUhQrywwgAwJLroJfVw&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=192_Sk41fHElChrs5_mMLIFUMYNeovuBC&sz=w1000'
  },
  {
    id: 'gal12',
    title: 'Brick Exterior Soft Sanitization',
    category: 'Our Team',
    location: 'Mannington, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1P28Q4Bh03XgN_oENZKwkVWSytT-s1Rsi&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1RBxYfXeJBUUiZUAJ-jeHqIJkj-MP3iH8&sz=w1000'
  },
  {
    id: 'gal13',
    title: 'Double-Wide Textured Driveway',
    category: 'Deck',
    location: 'Deptford, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1TEIHe0jH_HqYCKiSk6odQhqYaGHgdOlT&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1TiOn_3pj_XTtyPKscgdhM3kzCTV-6a15&sz=w1000'
  },
  {
    id: 'gal15',
    title: 'High-Reach Downspout Flush',
    category: 'Roof',
    location: 'Glassboro, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1Pz6K9TNr2-9dXATmc6hKVl3Tdp32GUZ3&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=12tqbuKXj-FpIgwJKz8qYw4Q75IsqeW92&sz=w1000'
  },
  {
    id: 'gal17',
    title: 'Colonial Manor Complete Soft Wash',
    category: 'Our Team',
    location: 'Haddonfield, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1-FIUb-X_GkRP6bznBpk902rnbbcDeAfx&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1cp8f2vEv4X0Wlg0SRUpAHwHi7zuZOB_J&sz=w1000'
  },
  {
    id: 'gal18',
    title: 'Stained Concrete Sidewalk & Apron',
    category: 'Our Team',
    location: 'Turnersville, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1R0ORX7FSOatP6ze_WB4mYT6nZz_uFqtK&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1AbpKqQJwBeTQ96NZmbA-NdaoKYP7DXRd&sz=w1000'
  },
  {
    id: 'gal19',
    title: 'Bluestone Patio Lichen Scrape',
    category: 'Roof',
    location: 'Sewell, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1c_PDe2NEJn9PY7VBIUH8hOXyXhsphCOl&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1aGPc2t9EmS3-ajZ8GAePr7c0gbe0H1EW&sz=w1000'
  },
  {
    id: 'gal20',
    title: 'Jumbo Wash Team on Site',
    category: 'Our Team',
    location: 'Swedesboro, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1JfMYQnjApOmQHKt7dMltLHyD-4JsbXDO&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1JfMYQnjApOmQHKt7dMltLHyD-4JsbXDO&sz=w1000'
  },
  {
    id: 'gal21',
    title: 'Eaves & Gutter Channel Polishing',
    category: 'Our Team',
    location: 'Swedesboro, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1oTChHZTa6GAXbl0mTOJ7ImXX0xM-y2gb&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1aJj1TwMWAtkBTDbA6_hEbgHOZ2zxt5h-&sz=w1000'
  },
  {
    id: 'gal23',
    title: 'Cedar Shingle Revitalization',
    category: 'Deck',
    location: 'Williamstown, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1yuRrB-HgA3SAHPmbfE9ZsCs1S61SCYoV&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=10xScq4zbPUeGCVUhQrywwgAwJLroJfVw&sz=w1000'
  },
  {
    id: 'gal24',
    title: 'Deck Softwash Preparation',
    category: 'Deck',
    location: 'Deptford, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=12tqbuKXj-FpIgwJKz8qYw4Q75IsqeW92&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=12tqbuKXj-FpIgwJKz8qYw4Q75IsqeW92&sz=w1000'
  },
  {
    id: 'gal25',
    title: 'Driveway High Pressure Sweep',
    category: 'Concrete',
    location: 'Glassboro, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=12ImfwmKAAfucBqXhfbsN-XTC-0_1mVpn&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=12ImfwmKAAfucBqXhfbsN-XTC-0_1mVpn&sz=w1000'
  },
  {
    id: 'gal26',
    title: 'Rustic Timber Deck Refresh',
    category: 'Deck',
    location: 'Mullica Hill, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1TiOn_3pj_XTtyPKscgdhM3kzCTV-6a15&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1TiOn_3pj_XTtyPKscgdhM3kzCTV-6a15&sz=w1000'
  },
  {
    id: 'gal27',
    title: 'Restored Cedar Outdoor Platform',
    category: 'Deck',
    location: 'Mullica Hill, NJ',
    beforeImage: 'https://drive.google.com/thumbnail?id=1awbeec9rx9oUw2P5_JH-zHpqCs1pfN74&sz=w1000',
    afterImage: 'https://drive.google.com/thumbnail?id=1awbeec9rx9oUw2P5_JH-zHpqCs1pfN74&sz=w1000'
  }
];

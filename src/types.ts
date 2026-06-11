export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: {
    en: string;
    ar: string;
  };
}

export interface PracticeArea {
  id: string;
  icon: string; // Name of Lucide icon
  title: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  fullDescription: {
    en: string;
    ar: string;
  };
  features: {
    en: string[];
    ar: string[];
  };
}

export interface TeamMember {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  bio: {
    en: string;
    ar: string;
  };
  education: {
    en: string[];
    ar: string[];
  };
  specialties: {
    en: string[];
    ar: string[];
  };
  image: string; // Image path or generated image placeholder
}

export interface FAQItem {
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
}

export interface OfficeLocation {
  city: {
    en: string;
    ar: string;
  };
  address: {
    en: string;
    ar: string;
  };
  phone: string;
  email: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  practiceArea: string;
  message: string;
  timestamp: string;
  status: 'new' | 'reviewed' | 'contacted';
}

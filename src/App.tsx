import { useState, useEffect } from 'react';
import { Language, ContactInquiry } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PracticeAreas from './components/PracticeAreas';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageSquare, Phone, Mail, MapPin, Globe, Linkedin } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  // State for form entries (retained for functionality, but not rendered publicly)
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('lex_inbounds');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync orientation direction in document body
  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
    document.body.className = language === 'ar' ? 'font-arabic bg-[#faf9f6]' : 'font-sans bg-[#faf9f6]';
  }, [language]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleNewInquiry = (newInq: ContactInquiry) => {
    const updated = [newInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('lex_inbounds', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-brand-charcoal flex flex-col justify-between selection:bg-brand-gold/30">
      
      {/* Sticky Bilingual Header Navigation */}
      <Header language={language} onLanguageChange={handleLanguageChange} />

      {/* Main Sections flow */}
      <main className="flex-grow">
        
        {/* Dynamic Presentation Hero Area */}
        <Hero language={language} />

        {/* Trustworthy General Presentation */}
        <AboutSection language={language} />

        {/* Dynamic filterable practices with cards and overlays */}
        <PracticeAreas language={language} />

        {/* Core Case / Inquiry Submission Section */}
        <section id="contact-section" className="py-24 bg-brand-charcoal-dark border-t border-brand-gold/15 relative">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,168,128,0.08),transparent_60%)] pointer-events-none" />

          <div className="max-w-2xl mx-auto px-6 relative z-10">

            {/* Centered header */}
            <div className="text-center space-y-5 mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/15 text-brand-gold text-xs font-semibold rounded-full uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight leading-tight">
                {language === 'en'
                  ? "Let's discuss your legal needs"
                  : 'لنتحدث عن احتياجاتك القانونية'}
              </h2>

              <p className="text-slate-300 leading-relaxed text-lg">
                {language === 'en'
                  ? 'Reach out for a consultation or send your inquiry using the form. Everything you share is treated in full confidentiality.'
                  : 'تواصل معنا للحصول على استشارة أو أرسل استفسارك عبر النموذج. تُعامل جميع المعلومات التي تشاركها بسرية تامة.'}
              </p>
            </div>

            {/* Contact Us form */}
            <ContactForm language={language} onNewInquiry={handleNewInquiry} />

          </div>
        </section>

      </main>

      {/* Global Bilingual Footer Section */}
      <Footer language={language} />
      
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Language, ContactInquiry } from './types';
import { TRANSLATIONS, CONTACT } from './data';
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

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Contact details */}
              <div className="space-y-8">
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

                {/* Contact details list */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <a href={CONTACT.phoneHref} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-light text-brand-gold-dark flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{TRANSLATIONS[language].phone}</p>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors" dir="ltr">{CONTACT.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-light text-brand-gold-dark flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{TRANSLATIONS[language].email}</p>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors" dir="ltr">{CONTACT.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-light text-brand-gold-dark flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{TRANSLATIONS[language].address}</p>
                      <p className="text-sm font-semibold text-white">{CONTACT.address[language]}</p>
                    </div>
                  </div>

                  <a href={CONTACT.websiteUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-light text-brand-gold-dark flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">{TRANSLATIONS[language].website}</p>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors" dir="ltr">{CONTACT.website}</p>
                    </div>
                  </a>

                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-light text-brand-gold-dark flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">LinkedIn</p>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">lex-insight-legal</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Contact Us form */}
              <div className="space-y-8">
                <ContactForm language={language} onNewInquiry={handleNewInquiry} />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Global Bilingual Footer Section */}
      <Footer language={language} />
      
    </div>
  );
}

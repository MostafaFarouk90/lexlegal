import { Language } from '../types';
import { TRANSLATIONS, NAV_ITEMS } from '../data';
import LanguageSelector from './LanguageSelector';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id === 'hero' ? 'hero-section' : `${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 w-full bg-brand-blue/95 backdrop-blur-md border-b border-brand-gold/20 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleScroll('hero')}
          className="flex items-center cursor-pointer group"
          aria-label={t.firmName}
        >
          <Logo
            language={language}
            variant="light"
            heightClass="h-[55px] sm:h-[60px]"
            className="transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-white/85 hover:text-brand-gold text-sm font-semibold tracking-wide transition duration-200 cursor-pointer"
            >
              {item.label[language]}
            </button>
          ))}
        </nav>

        {/* Call to action & Language selector wrapper */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
          
          <button
            id="header-cta-btn"
            onClick={() => handleScroll('contact')}
            className="px-5 py-2.5 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-navy text-xs font-bold uppercase tracking-wider rounded-xl transition duration-300 cursor-pointer shadow-sm"
          >
            {t.bookConsultation}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-brand-gold transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden absolute top-[80px] left-0 right-0 bg-brand-blue border-b border-brand-gold/20 p-6 flex flex-col gap-5 animate-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                id={`nav-link-mobile-${item.id}`}
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-white/80 hover:text-brand-gold text-sm font-semibold tracking-wide text-left py-2 border-b border-white/5 cursor-pointer"
              >
                {item.label[language]}
              </button>
            ))}
          </div>
          
          <button
            id="header-cta-mobile-btn"
            onClick={() => handleScroll('contact')}
            className="w-full py-3 bg-brand-gold text-brand-navy font-bold text-sm rounded-xl uppercase tracking-wider text-center cursor-pointer hover:bg-brand-gold/90"
          >
            {t.bookConsultation}
          </button>
        </div>
      )}
    </header>
  );
}

import { Language } from '../types';
import { Languages } from 'lucide-react';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  return (
    <button
      id="language-selector-btn"
      onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-brand-gold/30 rounded-full text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold transition duration-300 backdrop-blur-sm shadow-sm cursor-pointer"
      title={language === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch selection to English'}
    >
      <Languages className="w-4 h-4" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}

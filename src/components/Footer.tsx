import { Language } from '../types';
import { TRANSLATIONS, CONTACT } from '../data';
import Logo from './Logo';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = TRANSLATIONS[language];

  return (
    <footer id="footer-section" className="bg-brand-blue text-slate-300 border-t border-brand-gold/30">

      {/* Middle Footer: Brand and contact info */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand block */}
          <div className="md:col-span-5 space-y-5">
            <Logo language={language} variant="light" heightClass="h-16" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'Specialized legal consultancy serving individuals and businesses across the United Arab Emirates with over 15 years of practical experience.'
                : 'استشارات قانونية متخصصة تخدم الأفراد والشركات في دولة الإمارات العربية المتحدة بخبرة عملية تتجاوز 15 عاماً.'}
            </p>
          </div>

          {/* Contact block */}
          <div className="md:col-span-7">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-5">
              {t.ourOffices}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-slate-300 hover:text-brand-gold transition">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span dir="ltr">{CONTACT.phone}</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-300 hover:text-brand-gold transition">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span dir="ltr">{CONTACT.email}</span>
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-brand-gold transition">
                <Linkedin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300 sm:col-span-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{CONTACT.address[language]}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer: Copyrights */}
      <div className="bg-slate-950/70 py-6 border-t border-white/5 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {t.firmName}. {t.rightsReserved}
          </p>
          <p className="text-slate-400 max-w-xl sm:text-right leading-relaxed">
            {language === 'en'
              ? 'The content of this website is provided for general information and does not constitute formal legal advice.'
              : 'محتوى هذا الموقع مقدم لأغراض المعلومات العامة ولا يشكل مشورة قانونية رسمية.'}
          </p>
        </div>
      </div>

    </footer>
  );
}

import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Scale, ShieldCheck } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = TRANSLATIONS[language];

  return (
    <footer id="footer-section" className="bg-brand-blue text-slate-300 border-t border-brand-gold/30">

      {/* Middle Footer: Brand and Disclaimer info */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gold text-brand-blue flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">{t.firmName}</h4>
              <p className="text-[10px] font-mono uppercase text-brand-gold/70">{t.tagline}</p>
            </div>
          </div>

          <div className="md:col-span-8 text-xs text-slate-400 leading-relaxed space-y-2 md:text-right">
            <p>
              {language === 'en'
                ? 'LexInsight Legal Practice is structured as an alliance of legal advocates registered under regulatory authorities in active jurisdictions. Material displayed on this portal represents institutional capabilities and is not formal legal representation.'
                : 'ليكس إنسايت للاستشارات القانونية مهيكلة كتحالف من الممثلين والمحامين المسجلين لدى السلطات التنظيمية في الولايات القضائية المعنية. المواد المعروضة على هذا الموقع تمثل القدرات المؤسسية ولا تشكل مشورة قانونية رسمية.'}
            </p>
            <p className="flex items-center gap-1.5 md:justify-end">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>{language === 'en' ? 'Attorney-Client Privilege Guarantee Secured' : 'ضمان الحصانة والسرية بين المحامي والعميل مؤمن بالكامل'}</span>
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Footer: Copyrights */}
      <div className="bg-slate-950/70 py-6 border-t border-white/5 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {t.firmName}. {t.rightsReserved}
          </p>
          <div className="flex items-center gap-1.5">
            <span>{language === 'en' ? 'Form destination secured:' : 'البريد المستلم المعتمد:'}</span>
            <span className="font-mono text-brand-gold font-bold">info@lexinsightlegal.com</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

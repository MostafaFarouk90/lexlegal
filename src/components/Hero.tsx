import { Language } from '../types';
import { TRANSLATIONS, CONTACT } from '../data';
import Logo from './Logo';
import { ShieldCheck, ArrowRight, ArrowLeft, Award, Lock, MapPin } from 'lucide-react';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = TRANSLATIONS[language];

  const handleScroll = (id: string) => {
    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative min-h-[85vh] bg-brand-blue text-white overflow-hidden flex items-center py-20"
    >
      {/* Visual background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(197,168,128,0.22),rgba(15,23,42,0))]" />
      
      {/* Abstract geometric vector shape representing stability / pillars */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 hidden lg:block pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline Block */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status indicator pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold/15 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Trusted Legal Counsel in the UAE' : 'استشارات قانونية موثوقة في الإمارات'}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] font-display">
              <span className="block text-white">
                {t.tagline.split('.')[0]}.
              </span>
              <span className="block text-brand-gold mt-1">
                {t.tagline.split('.')[1]}
              </span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              {t.taglineSub}
            </p>

            {/* Bullet achievements badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-gold" />
                <span>{language === 'en' ? '15+ Years of Experience' : 'خبرة تتجاوز 15 عاماً'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-brand-gold" />
                <span>{language === 'en' ? 'Strict Confidentiality' : 'سرية تامة'}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                id="hero-cta-assessment"
                onClick={() => handleScroll('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-navy hover:bg-white hover:text-brand-navy font-bold text-sm uppercase tracking-wider rounded-xl transition duration-300 cursor-pointer shadow-lg shadow-brand-gold/10"
              >
                {t.bookConsultation}
              </button>
              
              <button
                id="hero-cta-practices"
                onClick={() => handleScroll('practices')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 border border-white/20 hover:border-brand-gold text-white text-sm font-bold uppercase tracking-wider rounded-xl transition duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.learnMore}</span>
                {language === 'en' ? (
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 hover:translate-x-1" />
                ) : (
                  <ArrowLeft className="w-4 h-4 transition-transform duration-200 hover:-translate-x-1" />
                )}
              </button>
            </div>
          </div>

          {/* Luxury Graphic / Illustration Column */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-end">
            <div className="w-full max-w-md relative aspect-square">
              {/* Overlapping legal graphic blocks representing law and structure */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-brand-gold/20 rounded-3xl -rotate-6 border border-brand-gold/20 shadow-2xl" />
              
              <div className="absolute inset-0 bg-slate-900 rounded-3xl border border-brand-gold/30 p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                {/* Soft brand glow */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl" />

                <div className="flex items-center justify-center border-b border-white/10 pb-6">
                  <Logo language={language} variant="light" heightClass="h-24" />
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold mb-1">{language === 'en' ? 'Litigation & Advocacy' : 'التقاضي والترافع'}</p>
                    <p className="text-sm font-medium text-slate-300">{language === 'en' ? 'Representation before all UAE courts and arbitration centers' : 'التمثيل أمام جميع محاكم الدولة ومراكز التحكيم'}</p>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold mb-1">{language === 'en' ? 'Legal Consultations' : 'الاستشارات القانونية'}</p>
                    <p className="text-sm font-medium text-slate-300">{language === 'en' ? 'Clear, modern advice backed by deep expertise' : 'مشورة واضحة وعصرية مدعومة بخبرة عميقة'}</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-center gap-2 text-slate-400 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{CONTACT.address[language]}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

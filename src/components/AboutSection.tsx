import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Gavel, HeartHandshake, Globe } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export default function AboutSection({ language }: AboutSectionProps) {
  const t = TRANSLATIONS[language];

  return (
    <section id="about-section" className="py-24 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs font-semibold uppercase tracking-wider">
              <Gavel className="w-3.5 h-3.5" />
              <span>{t.aboutBadge}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-blue tracking-tight leading-tight">
              {t.aboutTitle}
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.aboutP1}
            </p>
            
            <p className="text-gray-500 text-base leading-relaxed">
              {t.aboutP2}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold-dark shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-blue">
                    {language === 'en' ? 'Uncompromising Ethics' : 'أخلاقيات لا تساوم'}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {language === 'en' ? 'Absolute attorney-client confidentiality' : 'السرية المطلقة للموكلين'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold-dark shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-blue">
                    {language === 'en' ? 'Bilingual Excellence' : 'تميز وكفاءة ثنائية اللغة'}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {language === 'en' ? 'Fully integrated English & Arabic counsel' : 'تقديم المشورة المتكاملة باللغتين العربية والإنجليزية'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000"
                alt="Law chambers board conference"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold tracking-wider text-brand-gold uppercase mb-1">
                  {language === 'en' ? 'LexInsight Legal standards' : 'معايير ليكس إنسايت القانونية'}
                </p>
                <p className="text-lg font-serif italic text-slate-100">
                  {language === 'en' 
                    ? '"Diligence in preparation, audacity in execution."' 
                    : '"الاجتهاد في التحضير، والجرأة في التنفيذ."'}
                </p>
              </div>
            </div>

            {/* Accent badge floating behind/under image */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/15 rounded-full -z-10 blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-300 rounded-3xl rotate-12 -z-10 opacity-35" />
          </div>

        </div>
      </div>
    </section>
  );
}

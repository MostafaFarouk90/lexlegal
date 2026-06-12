import { Language } from '../types';
import { TRANSLATIONS, BRAND_VALUES } from '../data';
import { Gavel, Eye, Target, BadgeCheck } from 'lucide-react';

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

            <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-blue tracking-tight leading-tight">
              {t.aboutTitle}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {t.aboutP1}
            </p>

            <p className="text-gray-500 text-base leading-relaxed">
              {t.aboutP2}
            </p>

            {/* Core values */}
            <div className="pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-4 flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                <span>{t.valuesTitle}</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {BRAND_VALUES.map((v) => (
                  <span
                    key={v.id}
                    className="px-4 py-2 rounded-full bg-white border border-brand-gold/30 text-sm font-semibold text-brand-navy shadow-sm"
                  >
                    {v.label[language]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000"
                alt={language === 'en' ? 'Legal consultation' : 'استشارة قانونية'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/85 via-brand-blue/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold tracking-wider text-brand-gold uppercase mb-1">
                  {t.firmName}
                </p>
                <p className="text-lg font-display italic text-slate-100">
                  {language === 'en'
                    ? '“Modern legal solutions, grounded in trust and clarity.”'
                    : '«حلول قانونية عصرية، مبنية على الثقة والوضوح.»'}
                </p>
              </div>
            </div>

            {/* Accent shapes */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/15 rounded-full -z-10 blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-bronze/15 rounded-3xl rotate-12 -z-10 opacity-50" />
          </div>

        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="p-8 rounded-2xl bg-brand-blue text-white border border-brand-gold/20 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">{t.visionTitle}</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">{t.visionText}</p>
          </div>

          <div className="p-8 rounded-2xl bg-brand-bronze text-white border border-brand-gold/20 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">{t.missionTitle}</h3>
            </div>
            <p className="text-amber-50/90 leading-relaxed">{t.missionText}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

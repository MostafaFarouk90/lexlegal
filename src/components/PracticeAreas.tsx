import React, { useState } from 'react';
import { Language, PracticeArea } from '../types';
import { PRACTICE_AREAS, TRANSLATIONS } from '../data';
import { Gavel, MessagesSquare, FileSignature, ScrollText, Scale, ChevronRight, X, Sparkles } from 'lucide-react';

interface PracticeAreasProps {
  language: Language;
}

const IconMapper: Record<string, React.ComponentType<{ className?: string }>> = {
  Gavel,
  MessagesSquare,
  FileSignature,
  ScrollText,
  Scale,
};

export default function PracticeAreas({ language }: PracticeAreasProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDetails, setActiveDetails] = useState<PracticeArea | null>(null);
  const t = TRANSLATIONS[language];

  const filteredPractices = selectedCategory === 'all'
    ? PRACTICE_AREAS
    : PRACTICE_AREAS.filter(p => p.id === selectedCategory);

  return (
    <section id="practices-section" className="py-24 bg-white border-t border-brand-gold/15 relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold-light/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs font-semibold tracking-wider uppercase mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>{t.learnMore}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-blue tracking-tight mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t.servicesSub}
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 mr-2">
            {t.filterLabel}
          </span>
          <button
            id="filter-all-btn"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-brand-navy text-brand-gold shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t.filterAll}
          </button>
          {PRACTICE_AREAS.map((p) => (
            <button
              id={`filter-${p.id}-btn`}
              key={p.id}
              onClick={() => setSelectedCategory(p.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                selectedCategory === p.id
                  ? 'bg-brand-navy text-brand-gold shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {p.title[language]}
            </button>
          ))}
        </div>

        {/* Practices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPractices.map((p) => {
            const IconComponent = IconMapper[p.icon] || Scale;
            return (
              <div
                id={`practice-card-${p.id}`}
                key={p.id}
                className="group p-8 rounded-2xl bg-white border border-gray-200/80 shadow-md shadow-gray-100/30 hover:border-brand-gold/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-gold-light text-brand-gold-dark flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-navy transition-colors duration-300">
                    {p.title[language]}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {p.shortDescription[language]}
                  </p>
                </div>

                <button
                  id={`view-details-${p.id}`}
                  onClick={() => setActiveDetails(p)}
                  className="flex items-center gap-2 text-sm font-semibold text-brand-gold-dark hover:text-brand-navy group-visited:text-brand-gold transition-colors duration-200 w-fit cursor-pointer self-start"
                >
                  <span>{t.viewDetails}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Overlay Sheet / Modal */}
      {activeDetails && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            id="practice-details-modal" 
            className="bg-white rounded-3xl border border-brand-gold/30 shadow-2xl max-w-2xl w-full p-8 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Elegant header bar in modal */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gold" />
            
            <button
              id="close-details-modal"
              onClick={() => setActiveDetails(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition duration-300 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center shadow-lg shadow-brand-navy/10">
                {(() => {
                  const Icon = IconMapper[activeDetails.icon] || Scale;
                  return <Icon className="w-7 h-7" />;
                })()}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-brand-gold-dark tracking-widest">{t.firmName}</span>
                <h3 className="text-2xl font-bold text-brand-blue tracking-tight">
                  {activeDetails.title[language]}
                </h3>
              </div>
            </div>

            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                {activeDetails.fullDescription[language]}
              </p>
              
              <h4 className="text-sm font-bold uppercase text-brand-navy tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span>{language === 'en' ? 'What We Provide' : 'ما نقدمه'}</span>
              </h4>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-500 font-sans">
                {activeDetails.features[language].map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-gold mt-1 font-bold">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end border-t border-gray-100 pt-6">
              <button
                id="close-protocol-btn"
                onClick={() => setActiveDetails(null)}
                className="px-6 py-2.5 bg-brand-navy text-brand-gold text-sm font-semibold rounded-xl hover:bg-brand-gold hover:text-brand-navy transition duration-300 cursor-pointer"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

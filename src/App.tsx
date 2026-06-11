import { useState, useEffect } from 'react';
import { Language, ContactInquiry } from './types';
import { TRANSLATIONS } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PracticeAreas from './components/PracticeAreas';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageSquare, AlertCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-[#faf9f6] flex flex-col justify-between selection:bg-brand-gold/30">
      
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
        <section id="contact-section" className="py-24 bg-white border-t border-brand-gold/15 relative">
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(197,168,128,0.06),transparent_60%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Context guidelines */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-gold-dark text-xs font-semibold rounded-full uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Counsel Protocol' : 'بروتوكول الاستشارة الفورية'}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue tracking-tight leading-tight">
                  {language === 'en' 
                    ? 'Register Your Case Under Legal Privilege'
                    : 'سجل استفسارك القضائي بموجب الحصانة المهنية الكاملة'}
                </h2>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {language === 'en'
                    ? 'Submit details about your commercial litigation, intellectual property filings, or regulatory requirements. Our specialists monitor incoming files 24/7 to secure corporate interests.'
                    : 'أرسل تفاصيل قضيتك أو متطلباتك التنظيمية في سرية تامة. يقوم المستشارون والخبراء بمراقبة الملفات الواردة ومعالجتها لتأمين المصالح الشاملة لشركائنا.'}
                </p>

                {/* Secure pipeline explanation list */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue text-sm">
                        {language === 'en' ? 'Immediate Triage' : 'فرز وتصنيف فوري'}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {language === 'en' 
                          ? 'Incoming claims are directed strictly to practice area directors corresponding with the topic.' 
                          : 'يتم تحويل الطلبات الواردة فوراً إلى القسم القانوني المتخصص بموضوع القضية.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue text-sm">
                        {language === 'en' ? 'Confidential Assessment' : 'تقييم مجاني بالكامل خالي من الالتزامات'}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {language === 'en'
                          ? 'The initial roadmap assessment and consultative feedback carry zero financial obligation.'
                          : 'جلسة التقييم الاستراتيجية الأولية لا تطالب بأي التزامات مالية مسبقة.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue text-sm">
                        {language === 'en' ? 'Strategic Desk Execution' : 'تنفيذ فوري عبر المكاتب الدولية'}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {language === 'en'
                          ? 'Multi-hub execution guarantees continuous legal representation in both UK and Gulf centers.'
                          : 'يضمن التنفيذ المزدوج استمرار المتابعة القانونية والمرافعة في المراكز البريطانية والخليجية.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secure email address notice */}
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-brand-gold/20 flex gap-3 text-brand-navy">
                  <AlertCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <p className="font-bold">
                      {language === 'en' ? 'Designated Secure Receiver Inbound' : 'البريد الإلكتروني المعتمد لتلقي الطلبات'}
                    </p>
                    <p className="text-slate-600 font-mono text-[11px]">
                      info@lexinsightlegal.com
                    </p>
                  </div>
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

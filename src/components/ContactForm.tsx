import React, { useState } from 'react';
import { Language, ContactInquiry } from '../types';
import { TRANSLATIONS, PRACTICE_AREAS } from '../data';
import { Send, CheckCircle, ShieldCheck, HelpCircle } from 'lucide-react';

interface ContactFormProps {
  language: Language;
  onNewInquiry: (inquiry: ContactInquiry) => void;
}

export default function ContactForm({ language, onNewInquiry }: ContactFormProps) {
  const t = TRANSLATIONS[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    practiceArea: 'litigation',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const freshErrors: Record<string, string> = {};
    if (!formData.name.trim()) freshErrors.name = t.mandatoryField;
    if (!formData.email.trim()) {
      freshErrors.email = t.mandatoryField;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      freshErrors.email = language === 'en' ? 'Invalid email format' : 'صيغة البريد الإلكتروني غير صالحة';
    }
    if (!formData.phone.trim()) freshErrors.phone = t.mandatoryField;
    if (!formData.message.trim()) freshErrors.message = t.mandatoryField;
    
    setErrors(freshErrors);
    return Object.keys(freshErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear specific error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    
    // Simulate real security pipeline dispatch delay
    setTimeout(() => {
      const newInquiry: ContactInquiry = {
        id: 'INQ-' + Math.floor(100000 + Math.random() * 900000),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        practiceArea: formData.practiceArea,
        message: formData.message,
        timestamp: new Date().toISOString(),
        status: 'new'
      };

      onNewInquiry(newInquiry);
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        practiceArea: 'litigation',
        message: ''
      });

      // Dismiss success status after 7 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 7000);

    }, 1500);
  };

  return (
    <div id="contact-form-card" className="bg-white rounded-3xl border border-brand-gold/25 shadow-xl shadow-brand-navy/5 overflow-hidden p-8 md:p-10 relative">
      {/* Decorative side accent lines */}
      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-brand-gold" />

      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-gold" />
          <span>{t.statusBadge}</span>
        </span>
      </div>

      <h3 className="text-2xl font-bold text-brand-blue mb-2">
        {language === 'en' ? 'Request a Consultation' : 'اطلب استشارة'}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        {language === 'en'
          ? 'Share a few details about your matter and one of our consultants will get back to you shortly.'
          : 'شاركنا بعض التفاصيل حول قضيتك وسيتواصل معك أحد مستشارينا في أقرب وقت.'}
      </p>

      {success ? (
        <div id="form-success-banner" className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-teal-800 animate-in fade-in zoom-in-95 duration-300">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-6 h-6 text-teal-600 shrink-0" />
            <h4 className="font-bold text-base text-teal-900">{t.submittedSuccess}</h4>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            {t.successMsg}
          </p>
          <div className="text-xs bg-teal-100/60 inline-block px-3 py-1.5 rounded-md font-semibold text-teal-700">
            {t.senderEmail}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
                {t.fullName} <span className="text-brand-gold">*</span>
              </label>
              <input
                id="form-input-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={language === 'en' ? 'e.g. Ahmed Al Mansoori' : 'مثال: أحمد المنصوري'}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-brand-blue text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 transition duration-200 ${
                  errors.name ? 'border-red-400 ring-1 ring-red-100' : 'border-gray-200'
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
                {t.email} <span className="text-brand-gold">*</span>
              </label>
              <input
                id="form-input-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-brand-blue text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 transition duration-200 ${
                  errors.email ? 'border-red-400 ring-1 ring-red-100' : 'border-gray-200'
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Telephone */}
            <div>
              <label className="block text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
                {t.phone} <span className="text-brand-gold">*</span>
              </label>
              <input
                id="form-input-phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-brand-blue text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 transition duration-200 ${
                  errors.phone ? 'border-red-400 ring-1 ring-red-100' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Corporate Name (Optional) */}
            <div>
              <label className="block text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
                {t.companyOptional}
              </label>
              <input
                id="form-input-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={language === 'en' ? 'Your company name' : 'اسم شركتك'}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 text-brand-blue text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 transition duration-200"
              />
            </div>
          </div>

          {/* Practice Area Selector */}
          <div>
            <label className="block text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
              {t.practiceAreaLabel}
            </label>
            <select
              id="form-select-practice"
              name="practiceArea"
              value={formData.practiceArea}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-slate-50 text-brand-blue text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 transition duration-200 cursor-pointer"
            >
              {PRACTICE_AREAS.map(p => (
                <option key={p.id} value={p.id}>
                  {p.title[language]}
                </option>
              ))}
            </select>
          </div>

          {/* Inquiry Description */}
          <div>
            <label className="block text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
              {t.messageLabel} <span className="text-brand-gold">*</span>
            </label>
            <textarea
              id="form-input-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder={t.messagePlaceholder}
              className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-brand-blue text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 transition duration-200 ${
                errors.message ? 'border-red-400 ring-1 ring-red-100' : 'border-gray-200'
              }`}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          {/* Button Trigger */}
          <button
            id="form-submit-btn"
            type="submit"
            disabled={submitting}
            className="w-full py-4 px-6 bg-brand-navy hover:bg-brand-gold text-brand-gold hover:text-brand-navy font-bold text-sm rounded-xl uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{t.submitting}</span>
              </>
            ) : (
              <>
                <Send className={`w-4 h-4 ${language === 'ar' ? '-scale-x-100' : ''}`} />
                <span>{t.bookConsultation}</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Attorney-Client Privilege reassurance disclaimer */}
      <p className="text-[11px] text-gray-400 mt-6 leading-relaxed flex items-center gap-1">
        <HelpCircle className="w-3 h-3 shrink-0 text-slate-300" />
        <span>{t.confidentialPromise}</span>
      </p>
    </div>
  );
}

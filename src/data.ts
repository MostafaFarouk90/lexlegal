import { PracticeArea, OfficeLocation } from './types';

export const NAV_ITEMS = [
  { id: 'hero', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'about', label: { en: 'About Us', ar: 'من نحن' } },
  { id: 'practices', label: { en: 'Our Services', ar: 'خدماتنا' } },
  { id: 'contact', label: { en: 'Contact Us', ar: 'اتصل بنا' } }
];

// Real contact details from the Lex Insight company profile.
export const CONTACT = {
  phone: '+971 55 200 9082',
  phoneHref: 'tel:+971552009082',
  email: 'info@lexinsightlegal.com',
  website: 'www.lexinsightlegal.com',
  websiteUrl: 'https://www.lexinsightlegal.com',
  linkedin: 'https://www.linkedin.com/company/lex-insight-legal',
  address: {
    en: 'Sharjah, United Arab Emirates',
    ar: 'الشارقة، الإمارات العربية المتحدة'
  }
};

// Core values drawn from the company profile ("Our Values").
export const BRAND_VALUES = [
  { id: 'quality', label: { en: 'Quality', ar: 'الجودة' } },
  { id: 'efficiency', label: { en: 'Efficiency', ar: 'الكفاءة' } },
  { id: 'confidentiality', label: { en: 'Confidentiality', ar: 'السرية' } },
  { id: 'precision', label: { en: 'Precision', ar: 'الدقة' } },
  { id: 'commitment', label: { en: 'Commitment', ar: 'الالتزام' } }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'litigation',
    icon: 'Gavel',
    title: {
      en: 'Litigation & Advocacy',
      ar: 'التقاضي والترافع'
    },
    shortDescription: {
      en: 'Representing clients before judicial and quasi-judicial bodies, defending their interests, and submitting legal memoranda.',
      ar: 'تمثيل العملاء أمام الجهات القضائية وشبه القضائية والمرافعة والمدافعة وتقديم المذكرات.'
    },
    fullDescription: {
      en: 'Lex Insight represents clients before all courts across the UAE — whether in Dubai, the federal courts, or arbitration centers — drawing on more than fifteen years of practical courtroom experience. We defend our clients’ interests with clear, strategic advocacy and prepare and submit precise legal memoranda at every stage of the dispute.',
      ar: 'تمثل ليكس إنسايت عملاءها أمام جميع المحاكم في الدولة سواء في دبي أو المحاكم الاتحادية أو مراكز التحكيم، بخبرة عملية تتجاوز خمسة عشر عاماً. ندافع عن مصالح عملائنا باستراتيجية واضحة ونعد ونقدم المذكرات القانونية الدقيقة في كل مرحلة من مراحل النزاع.'
    },
    features: {
      en: [
        'Representation before courts and judicial committees',
        'Quasi-judicial and arbitration proceedings',
        'Defense and submission of legal memoranda',
        'Dispute strategy and case management'
      ],
      ar: [
        'التمثيل أمام المحاكم واللجان القضائية',
        'الإجراءات شبه القضائية والتحكيم',
        'المدافعة وتقديم المذكرات القانونية',
        'استراتيجية النزاع وإدارة القضايا'
      ]
    }
  },
  {
    id: 'consultations',
    icon: 'MessagesSquare',
    title: {
      en: 'Legal Consultations',
      ar: 'الاستشارات القانونية'
    },
    shortDescription: {
      en: 'Providing legal and Sharia consultations, studies, research, and specialized legal reports.',
      ar: 'تقديم الاستشارات القانونية والشرعية والدراسات والأبحاث والتقارير القانونية المتخصصة.'
    },
    fullDescription: {
      en: 'We provide clear, modern legal and Sharia consultations supported by in-depth studies, research, and specialized legal reports. Our advice helps individuals and businesses understand their rights and obligations under UAE and international law and make confident, well-informed decisions.',
      ar: 'نقدم استشارات قانونية وشرعية واضحة وعصرية مدعومة بالدراسات والأبحاث والتقارير القانونية المتخصصة. تساعد مشورتنا الأفراد والشركات على فهم حقوقهم والتزاماتهم وفق القوانين الإماراتية والدولية واتخاذ قرارات واثقة ومدروسة.'
    },
    features: {
      en: [
        'Legal and Sharia consultations',
        'Legal studies and research',
        'Specialized legal reports',
        'Regulatory and compliance advisory'
      ],
      ar: [
        'الاستشارات القانونية والشرعية',
        'الدراسات والأبحاث القانونية',
        'التقارير القانونية المتخصصة',
        'الاستشارات التنظيمية والامتثال'
      ]
    }
  },
  {
    id: 'contracts',
    icon: 'FileSignature',
    title: {
      en: 'Contract & Agreement Drafting',
      ar: 'صياغة العقود والاتفاقيات'
    },
    shortDescription: {
      en: 'Drafting, reviewing, and preparing contracts, agreements, and various legal documents.',
      ar: 'إعداد وصياغة ومراجعة العقود والاتفاقيات والأوراق القانونية الأخرى باختلاف أنواعها.'
    },
    fullDescription: {
      en: 'Our team drafts, reviews, and prepares contracts, agreements, and legal documents of every type with precision and commercial awareness. We ensure each document protects your interests, reflects the parties’ intentions clearly, and remains fully compliant with applicable laws.',
      ar: 'يقوم فريقنا بإعداد وصياغة ومراجعة العقود والاتفاقيات والأوراق القانونية بمختلف أنواعها بدقة ووعي تجاري. نحرص على أن تحمي كل وثيقة مصالحكم وتعبر بوضوح عن إرادة الأطراف وتظل متوافقة تماماً مع القوانين المعمول بها.'
    },
    features: {
      en: [
        'Drafting commercial and corporate contracts',
        'Reviewing and revising agreements',
        'Preparing legal documents and forms',
        'Negotiation support and risk review'
      ],
      ar: [
        'صياغة العقود التجارية وعقود الشركات',
        'مراجعة وتنقيح الاتفاقيات',
        'إعداد المستندات والنماذج القانونية',
        'دعم التفاوض ومراجعة المخاطر'
      ]
    }
  },
  {
    id: 'memoranda',
    icon: 'ScrollText',
    title: {
      en: 'Legal Memorandum Writing',
      ar: 'كتابة المذكرات القانونية'
    },
    shortDescription: {
      en: 'Drafting, writing, and submitting legal memoranda, pleadings, and briefs related to disputes.',
      ar: 'صياغة وكتابة وتقديم المذكرات والصحف واللوائح القانونية المتعلقة بالنزاعات.'
    },
    fullDescription: {
      en: 'We draft, write, and submit legal memoranda, pleadings, and briefs related to disputes before judicial and quasi-judicial authorities. Each memorandum is built on a deep understanding of the case and the relevant law to present the strongest possible position for our clients.',
      ar: 'نقوم بصياغة وكتابة وتقديم المذكرات والصحف واللوائح القانونية المتعلقة بالنزاعات المقامة أمام الجهات القضائية وشبه القضائية. تُبنى كل مذكرة على فهم عميق للقضية والقانون ذي الصلة لتقديم أقوى موقف ممكن لعملائنا.'
    },
    features: {
      en: [
        'Drafting memoranda and pleadings',
        'Preparing statements of claim and defense',
        'Submissions before judicial authorities',
        'Quasi-judicial briefs and replies'
      ],
      ar: [
        'صياغة المذكرات واللوائح',
        'إعداد صحف الدعوى والدفاع',
        'التقديم أمام الجهات القضائية',
        'المذكرات والردود شبه القضائية'
      ]
    }
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [];

export const TRANSLATIONS = {
  en: {
    firmName: 'Lex Insight Legal Consultancy',
    firmShort: 'Lex Insight',
    tagline: 'Modern Legal Solutions. Built on Trust.',
    taglineSub: 'With over 15 years of experience in the UAE, Lex Insight delivers clear, strategic, and high-quality legal services for individuals and businesses.',
    arabic: 'العربية',
    english: 'English',
    languageName: 'العربية',
    bookConsultation: 'Request a Consultation',
    learnMore: 'Explore Our Services',
    ourOffices: 'Reach Us',
    rightsReserved: 'All rights reserved.',
    submitting: 'Sending your request...',
    submittedSuccess: 'Request Received',
    successMsg: 'Thank you. Your request has been received in full confidentiality. One of our consultants will contact you by email or phone shortly.',
    errorMsg: 'Submission encountered an issue. Please retry or contact us directly at info@lexinsightlegal.com.',
    senderEmail: 'Sent to: info@lexinsightlegal.com',
    enquiryReceived: 'Enquiry Received',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    website: 'Website',
    office: 'Office',
    practiceAreaLabel: 'Service of Interest',
    fullName: 'Full Name',
    emailPlaceholder: 'you@example.com',
    phonePlaceholder: '+971 55 000 0000',
    companyOptional: 'Company (Optional)',
    messageLabel: 'Brief description of your inquiry',
    messagePlaceholder: 'Please outline the legal assistance or consultation you require...',
    mandatoryField: 'Required field',
    selectPractice: 'Select a service',
    trustBadges: 'Why Lex Insight',
    confidentialPromise: 'All information you share is treated with strict confidentiality and professional privilege between consultant and client.',
    practice_litigation: 'Litigation & Advocacy',
    practice_consultations: 'Legal Consultations',
    practice_contracts: 'Contract & Agreement Drafting',
    practice_memoranda: 'Legal Memorandum Writing',
    filterAll: 'All Services',
    filterLabel: 'Filter services:',
    viewDetails: 'View Details',
    close: 'Close',
    aboutTitle: 'A Specialized Legal Consultancy in the UAE',
    aboutP1: 'Lex Insight is a specialized legal consultancy delivering clear, strategic, and high-quality legal solutions for individuals and businesses. Our team provides expertise in corporate law, contract drafting, dispute resolution, and regulatory compliance.',
    aboutP2: 'We are committed to professionalism, confidentiality, and building long-term client partnerships grounded in trust and clarity. We continue to grow and evolve in the legal field by fully embracing technology to deliver precise, reliable results.',
    backToApp: 'Return to Homepage',
    statusBadge: 'info@lexinsightlegal.com',
    aboutBadge: 'Who We Are',
    valuesTitle: 'Our Values',
    visionTitle: 'Our Vision',
    visionText: 'To stand among the leading global legal consultancy firms and become a distinguished, exemplary legal reference in the region.',
    missionTitle: 'Our Mission',
    missionText: 'To provide reliable legal protection and practical solutions using a modern, efficient approach supported by advanced digital tools and technology.',
    servicesTitle: 'Our Services',
    servicesSub: 'Practical legal services delivered with extensive experience across all courts in the United Arab Emirates.'
  },
  ar: {
    firmName: 'ليكس إنسايت للاستشارات القانونية',
    firmShort: 'ليكس إنسايت',
    tagline: 'حلول قانونية عصرية. مبنية على الثقة.',
    taglineSub: 'بخبرة تتجاوز 15 عاماً في دولة الإمارات، تقدم ليكس إنسايت خدمات قانونية واضحة واستراتيجية وعالية الجودة للأفراد والشركات.',
    arabic: 'العربية',
    english: 'English',
    languageName: 'English',
    bookConsultation: 'اطلب استشارة',
    learnMore: 'استكشف خدماتنا',
    ourOffices: 'تواصل معنا',
    rightsReserved: 'جميع الحقوق محفوظة.',
    submitting: 'جاري إرسال طلبك...',
    submittedSuccess: 'تم استلام الطلب',
    successMsg: 'شكراً لك. تم استلام طلبك بسرية تامة. سيتواصل معك أحد مستشارينا عبر بريدك الإلكتروني أو هاتفك في أقرب وقت.',
    errorMsg: 'واجه الإرسال مشكلة. يرجى إعادة المحاولة أو التواصل معنا مباشرة عبر info@lexinsightlegal.com.',
    senderEmail: 'البريد المستلم: info@lexinsightlegal.com',
    enquiryReceived: 'تم استلام طلب جديد',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    website: 'الموقع الإلكتروني',
    office: 'المكتب',
    practiceAreaLabel: 'الخدمة المطلوبة',
    fullName: 'الاسم الكامل',
    emailPlaceholder: 'you@example.com',
    phonePlaceholder: '+971 55 000 0000',
    companyOptional: 'الشركة (اختياري)',
    messageLabel: 'وصف موجز لاستفسارك',
    messagePlaceholder: 'يرجى توضيح المساعدة القانونية أو الاستشارة التي تحتاجها...',
    mandatoryField: 'حقل مطلوب',
    selectPractice: 'اختر الخدمة',
    trustBadges: 'لماذا ليكس إنسايت',
    confidentialPromise: 'تُعامل جميع المعلومات التي تشاركها بسرية تامة وامتياز مهني بين المستشار والعميل.',
    practice_litigation: 'التقاضي والترافع',
    practice_consultations: 'الاستشارات القانونية',
    practice_contracts: 'صياغة العقود والاتفاقيات',
    practice_memoranda: 'كتابة المذكرات القانونية',
    filterAll: 'جميع الخدمات',
    filterLabel: 'فلترة الخدمات:',
    viewDetails: 'عرض التفاصيل',
    close: 'إغلاق',
    aboutTitle: 'استشارات قانونية متخصصة في دولة الإمارات',
    aboutP1: 'ليكس إنسايت شركة متخصصة في تقديم الاستشارات القانونية، حيث توفر حلولاً قانونية واضحة واستراتيجية وعالية الجودة للأفراد والشركات. يقدم فريقنا خبرته في قانون الشركات وصياغة العقود وحل النزاعات والامتثال التنظيمي.',
    aboutP2: 'نلتزم بالاحترافية والسرية وبناء شراكات طويلة الأمد مع العملاء تقوم على الثقة والوضوح. ونواصل النمو والتطور في المجال القانوني من خلال الاعتماد الكامل على التقنية لتقديم نتائج دقيقة وموثوقة.',
    backToApp: 'العودة إلى الصفحة الرئيسية',
    statusBadge: 'info@lexinsightlegal.com',
    aboutBadge: 'من نحن',
    valuesTitle: 'قيمنا',
    visionTitle: 'رؤيتنا',
    visionText: 'أن نكون في مصاف شركات الاستشارات القانونية العالمية الرائدة، ونصبح مرجعاً قانونياً متميزاً ومثالياً في المنطقة.',
    missionTitle: 'رسالتنا',
    missionText: 'توفير الوقاية القانونية الموثوقة والحلول العملية وفق أسلوب عصري وفعّال مدعوم بأدوات وتقنيات رقمية حديثة.',
    servicesTitle: 'خدماتنا',
    servicesSub: 'خدمات قانونية عملية نقدمها بخبرة واسعة أمام جميع المحاكم في دولة الإمارات العربية المتحدة.'
  }
};

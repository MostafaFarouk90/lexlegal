import { PracticeArea, OfficeLocation } from './types';

export const NAV_ITEMS = [
  { id: 'hero', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'about', label: { en: 'About Us', ar: 'من نحن' } },
  { id: 'practices', label: { en: 'Practice Areas', ar: 'مجالات الاختصاص' } },
  { id: 'contact', label: { en: 'Contact Us', ar: 'اتصل بنا' } }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate',
    icon: 'Briefcase',
    title: {
      en: 'Corporate & M&A',
      ar: 'الشركات والاستحواذات'
    },
    shortDescription: {
      en: 'Comprehensive business legal solutions including cross-border transactions, setup, and governance.',
      ar: 'حلول قانونية شاملة للأعمال بما في ذلك المعاملات عابرة الحدود، التأسيس، والحوكمة.'
    },
    fullDescription: {
      en: 'LexInsight Legal provides sophisticated strategic advice to corporations, startups, and private equity funds. We navigate clients through complex regulatory landscapes, multi-jurisdictional compliance, and structured M&A transactions with absolute commercial foresight.',
      ar: 'تقدم ليكس إنسايت للاستشارات القانونية مشورة استراتيجية متطورة للشركات، الشركات الناشئة، وصناديق الاستثمار الخاص. نحن نقود عملاءنا عبر المشاهد التنظيمية المعقدة، والامتثال متعدد الولاية القضائية، وعمليات الدمج والاستحواذ المهيكلة ببعد نظر تجاري مطلق.'
    },
    features: {
      en: [
        'Mergers & Acquisitions advisory',
        'Corporate structuring and reorganization',
        'Regulatory compliance and reporting',
        'Joint ventures & shareholder agreements'
      ],
      ar: [
        'تقديم الاستشارات في مجال عمليات الدمج والاستحواذ',
        'هيكلة الشركات وإعادة تنظيمها',
        'الامتثال التنظيمي وإعداد التقارير',
        'المشاريع المشتركة واتفاقيات المساهمين'
      ]
    }
  },
  {
    id: 'dispute',
    icon: 'Scale',
    title: {
      en: 'Dispute Resolution & Litigation',
      ar: 'فض النزاعات والتقاضي'
    },
    shortDescription: {
      en: 'Strategic representation before local/federal courts and international arbitration tribunals.',
      ar: 'تمثيل استراتيجي أمام المحاكم المحلية والاتحادية وهيئات التحكيم الدولية.'
    },
    fullDescription: {
      en: 'Our formidable dispute resolution practice handles high-stakes commercial litigation, investment disputes, and mediation. We aim to secure favorable results with clean strategies designed to minimize commercial disruption and protect corporate reputations.',
      ar: 'يتعامل قسم فض النزاعات الهائل لدينا مع قضايا التقاضي التجاري عالية المخاطر، والنزاعات الاستثمارية، والوساطة. نحن نهدف إلى تحقيق نتائج مواتية باستراتيجيات واضحة مصممة لتقليل الاضطراب التجاري وحماية سمعة الشركات.'
    },
    features: {
      en: [
        'Commercial litigation and advocacy',
        'International commercial arbitration',
        'White-collar defense & investigations',
        'Pre-litigation risk mapping'
      ],
      ar: [
        'التقاضي التجاري والمرافعة السليمة',
        'التحكيم التجاري الدولي',
        'الدفاع في الجرائم المالية والتحقيقات',
        'رسم خرائط المخاطر قبل التقاضي'
      ]
    }
  },
  {
    id: 'ip',
    icon: 'ShieldAlert',
    title: {
      en: 'Intellectual Property Security',
      ar: 'حماية الملكية الفكرية'
    },
    shortDescription: {
      en: 'Securing patents, trademarks, copyrights, and managing proprietary technological portfolios worldwide.',
      ar: 'تأمين براءات الاختراع والعلامات التجارية وحقوق الطبع والنشر وإدارة محافظ التكنولوجيا عالمياً.'
    },
    fullDescription: {
      en: 'In an economy driven by technological innovation, protecting intellectual capital is paramount. We structure robust frameworks to shield your IP assets, handle strategic monetization, and lead powerful enforcement actions against infringers on global scales.',
      ar: 'في اقتصاد يقوده الابتكار التكنولوجي، تعد حماية رأس المال الفكري أمراً بالغ الأهمية. نقوم بهيكلة أطر عمل قوية لحماية أصول الملكية الفكرية الخاصة بك، والتعامل مع تحقيق الدخل الاستراتيجي، وقيادة إجراءات إنفاذ قوية ضد المنتهكين على مستويات عالمية.'
    },
    features: {
      en: [
        'Trademark & copyright registration',
        'IP audit and portfolio management',
        'Licensing, franchising, and tech-transfer',
        'Patent prosecution and infringement claims'
      ],
      ar: [
        'تسجيل العلامات التجارية وحقوق الطبع والنشر',
        'تدقيق الملكية الفكرية وإدارة المحافظ',
        'الترخيص والامتياز التجاري ونقل التكنولوجيا',
        'مقاضاة انتهاك براءات الاختراع ومطالبات التعويض'
      ]
    }
  },
  {
    id: 'finance',
    icon: 'Coins',
    title: {
      en: 'Banking & Islamic Finance',
      ar: 'الخدمات المصرفية والتمويل الإسلامي'
    },
    shortDescription: {
      en: 'Tailored banking compliance and Shariah-compliant structuring of complex financial facilities.',
      ar: 'امتثال مصرفي مخصص وهيكلة فريدة متوافقة مع الشريعة الإسلامية للتسهيلات المالية المعقدة.'
    },
    fullDescription: {
      en: 'Our elite banking division advises financial institutions and global corporates on conventional credit, asset-backed lending, and Shariah-compliant fund structures including Sukuk issuance and Murabaha financing.',
      ar: 'يقدم قسم الخدمات المصرفية النخبة لدينا المشورة للمؤسسات المالية والشركات العالمية بشأن الائتمان التقليدي، والتمويل المضمون بالأصول، وهياكل الصناديق المتوافقة مع الشريعة الإسلامية بما في ذلك إصدار الصكوك وتمويل المرابحة.'
    },
    features: {
      en: [
        'Shariah-compliant financial structuring',
        'Sovereign and syndicated loan facilitation',
        'Fintech licensing and digital asset regulations',
        'Anti-money laundering compliance (AML/CFT)'
      ],
      ar: [
        'الهيكلة المالية المتوافقة مع الشريعة الإسلامية',
        'تسهيل القروض السيادية والمشتركة',
        'ترخيص التكنولوجيا المالية وتنظيم الأصول الرقمية',
        'الامتثال لمكافحة غسيل الأموال وتمويل الإرهاب'
      ]
    }
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [];

export const TRANSLATIONS = {
  en: {
    firmName: 'LexInsight Legal',
    tagline: 'Precision Counsel. Visionary Protection.',
    taglineSub: 'Serving world-class enterprises with trusted counsel and sharp multi-jurisdictional strategies.',
    arabic: 'العربية',
    english: 'English',
    languageName: 'العربية',
    bookConsultation: 'Request Free Case Assessment',
    learnMore: 'Explore Practice Areas',
    ourOffices: 'Our Global Presence',
    rightsReserved: 'All rights reserved.',
    submitting: 'Securing Connection...',
    submittedSuccess: 'Inquiry Registered Securely',
    successMsg: 'Thank you. Your request is registered under high confidentiality guidelines. We will connect at your email or phone within 12 business hours.',
    errorMsg: 'Submission encountered an issue. Please retry or contact info@lexinsightlegal.com directly.',
    senderEmail: 'Sent To: info@lexinsightlegal.com',
    enquiryReceived: 'Enquiry Received',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    office: 'Office',
    practiceAreaLabel: 'Preferred Practice Area',
    fullName: 'Full Name',
    emailPlaceholder: 'you@enterprise.com',
    phonePlaceholder: '+1 (555) 000-0000',
    companyOptional: 'Company (Optional)',
    messageLabel: 'Brief context or inquiry description',
    messagePlaceholder: 'Please outline the legal assistance or regulatory counsel you require...',
    mandatoryField: 'Required field',
    selectPractice: 'Select Corporate Specialty',
    trustBadges: 'Trust Credentials',
    confidentialPromise: 'All transmissions are secured via end-to-end industry AES standard compliance and covered by Attorney-Client Privilege.',
    practice_corporate: 'Corporate & M&A',
    practice_dispute: 'Dispute Resolution & Litigation',
    practice_ip: 'Intellectual Property Security',
    practice_finance: 'Banking & Islamic Finance',
    filterAll: 'All Legal Practices',
    filterLabel: 'Practice focus:',
    viewDetails: 'Review Framework',
    close: 'Close Protocol',
    aboutTitle: 'Sovereign Integrity. Tailor-Made Outcomes.',
    aboutP1: 'Founded by senior commercial specialists, LexInsight Legal bridges the classic diligence of premium advocacy with the adaptive dynamics of 21st-century technology rules. We assist client organizations not only in containing legal exposure but in seizing regulatory structures as vital catalysts for growth.',
    aboutP2: 'Our team of experienced lawyers and advisors ensures that whether you are structuring commercial business operations, navigating technology-driven legal landscapes, or resolving key corporate challenges, your organization is guided by legal excellence and sharp commercial foresight.',
    backToApp: 'Return to Homepage',
    statusBadge: 'Secure Live Connection: info@lexinsightlegal.com',
    aboutBadge: 'About the firm'
  },
  ar: {
    firmName: 'ليكس إنسايت للاستشارات القانونية',
    tagline: 'مشورة دقيقة. حماية قانونية للمستقبل.',
    taglineSub: 'خدمة الشركات العالمية الرائدة بمشورة موثوقة واستراتيجيات حادة متعددة الولايات القضائية.',
    arabic: 'العربية',
    english: 'English',
    languageName: 'English',
    bookConsultation: 'طلب تقييم مجاني للقضية',
    learnMore: 'استكشف مجالات الاختصاص',
    ourOffices: 'حضورنا العالمي',
    rightsReserved: 'جميع الحقوق محفوظة.',
    submitting: 'جاري تأمين الاتصال الإلكتروني...',
    submittedSuccess: 'تم تسجيل الاستفسار بأمان كامل',
    successMsg: 'شكراً لك. تم تسجيل طلبك بموجب إرشادات السرية التامة لمهنة المحاماة. سيتواصل معك أحد مستشارينا عبر بريدك الإلكتروني أو هاتفك في غضون 12 ساعة عمل.',
    errorMsg: 'واجه الإرسال مشكلة. يرجى إعادة المحاولة من جديد أو الاتصال بنا مباشرة عبر info@lexinsightlegal.com.',
    senderEmail: 'البريد المستلم: info@lexinsightlegal.com',
    enquiryReceived: 'تم استلام طلب جديد',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    office: 'المكتب',
    practiceAreaLabel: 'مجال الاختصاص المطلوب',
    fullName: 'الاسم الكامل',
    emailPlaceholder: 'you@enterprise.com',
    phonePlaceholder: '+966 55 000 0000',
    companyOptional: 'الشركة (اختياري)',
    messageLabel: 'سياق موجز أو وصف للاستفسار',
    messagePlaceholder: 'يرجى تقديم تفاصيل قصيرة حول المساعدة القانونية المطلوبة أو الاستشارة التنظيمية...',
    mandatoryField: 'حقل مطلوب',
    selectPractice: 'اختر الاختصاص القانوني المعني',
    trustBadges: 'أوراق الاعتماد والمصداقية',
    confidentialPromise: 'جميع البيانات المرسلة مشفرة ومعالجة وفقاً لأعلى معايير السرية المطلقة وامتياز الحصانة بين المحامي والموكل.',
    practice_corporate: 'الشركات والاستحواذات',
    practice_dispute: 'فض النزاعات والتقاضي',
    practice_ip: 'حماية الملكية الفكرية',
    practice_finance: 'الخدمات المصرفية والتمويل الإسلامي',
    filterAll: 'كافة الاختصاصات القانونية',
    filterLabel: 'فلترة الاختصاص:',
    viewDetails: 'عرض إطار التفاصيل',
    close: 'إغلاق نافذة البروتوكول',
    aboutTitle: 'أعلى درجات النزاهة والاحتراف. نتائج قانونية مفصلة.',
    aboutP1: 'تأسست شركة ليكس إنسايت للاستشارات القانونية على أيدي كبار الممارسين في مجال قانون الأعمال لتخدم بقوة وجدية احتياجات وتحديات القرن الحادي والعشرين. نحن لا نكتفي بالدفاع وتحجيم المخاطر، بل نسخر القوانين والتشريعات كحافز حقيقي لنمو وازدهار مشاريعكم.',
    aboutP2: 'يضمن فريقنا من المحامين والشركاء ذوي الخبرة أنه سواء كنت بصدد هيكلة المعاملات التجارية للشركات، أو تقود المشاهد التنظيمية المعقدة، فستحصل على مشورة قانونية دقيقة وحلول مبتكرة تدعم أعمالكم بكفاءة تامة.',
    backToApp: 'العودة إلى الصفحة الرئيسية',
    statusBadge: 'اتصال خادم آمن: info@lexinsightlegal.com',
    aboutBadge: 'نبذة عن مكتب الاستشارة والخدمات'
  }
};

import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ru" | "ky" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navbar
    features: "Возможности",
    howItWorks: "Как это работает",
    pricing: "Тарифные планы",
    designers: "Дизайнерам",
    signIn: "Войти",
    exit: "Выйти",
    startFree: "Начать бесплатно",

    // Hero
    badge: "✦ AI нового поколения",
    heroTitle: "Твой персональный AI‑стилист",
    heroSubtitle: "Загрузи фото и получи рекомендации по одежде, прическам, цветам и уходу за кожей",
    startAnalysis: "Начать анализ",
    watchDemo: "Демо",
    socialProof: "10 000+ пользователей",

    // How it works
    step1Title: "Загрузи фото",
    step1Desc: "Фото лица и в полный рост",
    step2Title: "AI анализирует",
    step2Desc: "Определяем твой цветотип и форму",
    step3Title: "Получи образы",
    step3Desc: "Персональные рекомендации",

    // Features
    faceShapeTitle: "Форма лица",
    faceShapeDesc: "Определяем идеальные прически и аксессуары",
    colorPaletteTitle: "Цветовая палитра",
    colorPaletteDesc: "Твой персональный цветотип",
    outfitsTitle: "Образы",
    outfitsDesc: "Готовые луки под твой стиль",
    hairstylesTitle: "Прически",
    hairstylesDesc: "Что тебе подойдет",
    skincareTitle: "Уход за кожей",
    skincareDesc: "Рекомендации по косметике",
    seasonalTitle: "Сезонные стили",
    seasonalDesc: "Капсульный гардероб",

    // Try-On
    tryOnTitle: "3D Примерка",
    tryOnDesc: "Примеряй одежду виртуально",
    tryOnFeature1: "Реалистичная 3D модель",
    tryOnFeature2: "Тысячи брендов",
    tryOnFeature3: "Сохраняй любимые образы",
    tryButton: "Попробовать",

    // Pricing
    pricingTitle: "Тарифные планы",
    monthly: "Ежемесячно",
    yearly: "Ежегодно",
    yearlyDiscount: "−20%",
    free: "Бесплатно",
    premium: "Premium",
    vip: "VIP",
    popular: "★ Популярный",
    feature1: "Базовый анализ",
    feature2: "5 образов",
    feature3: "Цветотип",
    feature4: "Неограниченные анализы",
    feature5: "50+ образов",
    feature6: "3D примерка",
    feature7: "Консультация стилиста",
    feature8: "Эксклюзивные бренды",
    feature9: "Персональный шоппинг",
    selectPlan: "Выбрать",

    // Testimonials
    testimonialsTitle: "Отзывы",
    testimonial1: "Я наконец-то поняла, какие цвета мне идут! Гардероб обновила полностью.",
    testimonial2: "AI подобрал мне идеальную прическу. Стилист подтвердил!",
    testimonial3: "Экономлю время на шоппинг — все образы уже подобраны.",

    // Onboarding
    welcome: "Добро пожаловать!",
    nameLabel: "Как тебя зовут?",
    namePlaceholder: "Введи имя",
    ageLabel: "Возраст",
    genderLabel: "Пол",
    male: "М",
    female: "Ж",
    other: "Другое",
    next: "Далее",
    back: "Назад",

    uploadTitle: "Загрузи свои фото",
    uploadFace: "Фото лица",
    uploadProfile: "Профиль",
    uploadFullBody: "В полный рост",

    paramsTitle: "Параметры тела",
    height: "Рост (см)",
    weight: "Вес (кг)",
    bodyType: "Тип фигуры",

    styleTitle: "Твой стиль",
    styleDesc: "Выбери предпочтения (можно несколько)",
    casual: "Casual",
    formal: "Formal",
    sport: "Sport",
    minimal: "Minimal",
    streetwear: "Streetwear",
    classic: "Classic",
    startAnalysisBtn: "Запустить анализ",

    analyzing: "Анализируем лицо...",
    detectingColors: "Определяем цветотип...",
    ready: "Готово ✓",

    // Dashboard
    greeting: "Привет",
    analysisReady: "Твой анализ готов ✦",
    faceShape: "Форма лица",
    colorType: "Цветотип",
    figureType: "Тип фигуры",
    outfitsSection: "Образы для тебя",
    tryOn: "Примерить",
    hairstylesSection: "Прически",
    whySuits: "Почему подойдет",
    recommendedBrands: "Рекомендуемые бренды",
  },
  ky: {
    // Navbar
    features: "Мүмкүнчүлүктөр",
    howItWorks: "Бул кантип иштейт",
    pricing: "Тариф пландары",
    designers: "Дизайнерлерге",
    signIn: "Кирүү",
    exit: "Чыгуу",
    startFree: "Акысыз баштоо",

    // Hero
    badge: "✦ Жаңы муундагы AI",
    heroTitle: "Сенин жеке AI‑стилистиң",
    heroSubtitle: "Сүрөтүңдү жүктө жана кийимге, чачыңа, түстөргө жана териңе кам көрүүгө кеңештерди ал",
    startAnalysis: "Анализди баштоо",
    watchDemo: "Демо",
    socialProof: "10 000+ колдонуучулар",

    // How it works
    step1Title: "Сүрөттү жүктө",
    step1Desc: "Бетиңдин жана толук денеңдин сүрөтү",
    step2Title: "AI анализдейт",
    step2Desc: "Сенин түс типиңди жана формаңды аныктайбыз",
    step3Title: "Образдарды ал",
    step3Desc: "Жеке кеңештер",

    // Features
    faceShapeTitle: "Беттин формасы",
    faceShapeDesc: "Идеалдуу чач түзүмдөрдү жана аксессуарларды аныктайбыз",
    colorPaletteTitle: "Түс палитрасы",
    colorPaletteDesc: "Сенин жеке түс типиң",
    outfitsTitle: "Образдар",
    outfitsDesc: "Сенин стилиңе даяр луктар",
    hairstylesTitle: "Чач түзүмдөрү",
    hairstylesDesc: "Сага эмне ылайык",
    skincareTitle: "Териге кам көрүү",
    skincareDesc: "Косметикага кеңештер",
    seasonalTitle: "Мезгилдүү стилдер",
    seasonalDesc: "Капсулалык гардероб",

    // Try-On
    tryOnTitle: "3D кийүү",
    tryOnDesc: "Кийимди виртуалдык кий",
    tryOnFeature1: "Реалисттик 3D модель",
    tryOnFeature2: "Миңдеген бренддер",
    tryOnFeature3: "Сүйүктүү образдарды сактоо",
    tryButton: "Сыноо",

    // Pricing
    pricingTitle: "Тариф пландары",
    monthly: "Ай сайын",
    yearly: "Жыл сайын",
    yearlyDiscount: "−20%",
    free: "Акысыз",
    premium: "Premium",
    vip: "VIP",
    popular: "★ Популярдуу",
    feature1: "Базалык анализ",
    feature2: "5 образ",
    feature3: "Түс типи",
    feature4: "Чексиз анализдер",
    feature5: "50+ образдар",
    feature6: "3D кийүү",
    feature7: "Стилист консультациясы",
    feature8: "Эксклюзивдүү бренддер",
    feature9: "Жеке шоппинг",
    selectPlan: "Тандоо",

    // Testimonials
    testimonialsTitle: "Пикирлер",
    testimonial1: "Мен акыры кайсы түстөр мага ылайыктуу экенин түшүндүм! Гардеробумду толук жаңылаттым.",
    testimonial2: "AI мага идеалдуу чач түзүмүн тандады. Стилист ырастады!",
    testimonial3: "Шоппингге убакыт үнөмдөйм — бардык образдар тандалган.",

    // Onboarding
    welcome: "Кош келиңиз!",
    nameLabel: "Атың ким?",
    namePlaceholder: "Атыңды жаз",
    ageLabel: "Жаш",
    genderLabel: "Жынысы",
    male: "Э",
    female: "А",
    other: "Башка",
    next: "Кийинки",
    back: "Артка",

    uploadTitle: "Сүрөттөрүңдү жүктө",
    uploadFace: "Беттин сүрөтү",
    uploadProfile: "Профиль",
    uploadFullBody: "Толук рост",

    paramsTitle: "Дене параметрлери",
    height: "Бою (см)",
    weight: "Салмак (кг)",
    bodyType: "Фигура түрү",

    styleTitle: "Сенин стилиң",
    styleDesc: "Каалагандарыңды тандагыла (бир нече болсо болот)",
    casual: "Күнүмдүк",
    formal: "Расмий",
    sport: "Спорт",
    minimal: "Минималдык",
    streetwear: "Көчө",
    classic: "Классикалык",
    startAnalysisBtn: "Анализди баштоо",

    analyzing: "Бетти анализдөө...",
    detectingColors: "Түс типин аныктоо...",
    ready: "Даяр ✓",

    // Dashboard
    greeting: "Салам",
    analysisReady: "Сенин анализиң даяр ✦",
    faceShape: "Беттин формасы",
    colorType: "Түс типи",
    figureType: "Фигура түрү",
    outfitsSection: "Сага арналган образдар",
    tryOn: "Кийүү",
    hairstylesSection: "Чач түзүмдөрү",
    whySuits: "Эмне үчүн ылайыктуу",
    recommendedBrands: "Сунушталган бренддер",
  },
  en: {
    // Navbar
    features: "Features",
    howItWorks: "How It Works",
    pricing: "Pricing Plans",
    designers: "For Designers",
    signIn: "Sign In",
    exit: "Exit",
    startFree: "Start Free",

    // Hero
    badge: "✦ Next-gen AI",
    heroTitle: "Your personal AI stylist",
    heroSubtitle: "Upload photo, get recommendations for clothing, hairstyles, colors, and skincare",
    startAnalysis: "Start Analysis",
    watchDemo: "Demo",
    socialProof: "10,000+ users",

    // How it works
    step1Title: "Upload photo",
    step1Desc: "Face and full body shots",
    step2Title: "AI analyzes",
    step2Desc: "We determine your color type and shape",
    step3Title: "Get looks",
    step3Desc: "Personalized recommendations",

    // Features
    faceShapeTitle: "Face Shape",
    faceShapeDesc: "Find perfect hairstyles and accessories",
    colorPaletteTitle: "Color Palette",
    colorPaletteDesc: "Your personal color type",
    outfitsTitle: "Outfits",
    outfitsDesc: "Ready looks for your style",
    hairstylesTitle: "Hairstyles",
    hairstylesDesc: "What suits you",
    skincareTitle: "Skincare",
    skincareDesc: "Cosmetics recommendations",
    seasonalTitle: "Seasonal Styles",
    seasonalDesc: "Capsule wardrobe",

    // Try-On
    tryOnTitle: "3D Try-On",
    tryOnDesc: "Try clothes virtually",
    tryOnFeature1: "Realistic 3D model",
    tryOnFeature2: "Thousands of brands",
    tryOnFeature3: "Save favorite looks",
    tryButton: "Try Now",

    // Pricing
    pricingTitle: "Pricing Plans",
    monthly: "Monthly",
    yearly: "Yearly",
    yearlyDiscount: "−20%",
    free: "Free",
    premium: "Premium",
    vip: "VIP",
    popular: "★ Popular",
    feature1: "Basic analysis",
    feature2: "5 looks",
    feature3: "Color type",
    feature4: "Unlimited analyses",
    feature5: "50+ looks",
    feature6: "3D try-on",
    feature7: "Stylist consultation",
    feature8: "Exclusive brands",
    feature9: "Personal shopping",
    selectPlan: "Select",

    // Testimonials
    testimonialsTitle: "Testimonials",
    testimonial1: "I finally understood which colors suit me! Updated my entire wardrobe.",
    testimonial2: "AI picked the perfect hairstyle for me. My stylist confirmed it!",
    testimonial3: "Save time shopping — all looks are already styled.",

    // Onboarding
    welcome: "Welcome!",
    nameLabel: "What's your name?",
    namePlaceholder: "Enter name",
    ageLabel: "Age",
    genderLabel: "Gender",
    male: "M",
    female: "F",
    other: "Other",
    next: "Next",
    back: "Back",

    uploadTitle: "Upload your photos",
    uploadFace: "Face photo",
    uploadProfile: "Profile",
    uploadFullBody: "Full body",

    paramsTitle: "Body parameters",
    height: "Height (cm)",
    weight: "Weight (kg)",
    bodyType: "Body type",

    styleTitle: "Your style",
    styleDesc: "Choose preferences (multiple allowed)",
    casual: "Casual",
    formal: "Formal",
    sport: "Sport",
    minimal: "Minimal",
    streetwear: "Streetwear",
    classic: "Classic",
    startAnalysisBtn: "Start Analysis",

    analyzing: "Analyzing face...",
    detectingColors: "Detecting color type...",
    ready: "Ready ✓",

    // Dashboard
    greeting: "Hello",
    analysisReady: "Your analysis is ready ✦",
    faceShape: "Face shape",
    colorType: "Color type",
    figureType: "Figure type",
    outfitsSection: "Outfits for you",
    tryOn: "Try On",
    hairstylesSection: "Hairstyles",
    whySuits: "Why it suits",
    recommendedBrands: "Recommended brands",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

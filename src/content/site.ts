import svcStore from "@/assets/svc-store.jpg";
import svcInventory from "@/assets/svc-inventory.jpg";
import svcShipping from "@/assets/svc-shipping.jpg";
import svcPayments from "@/assets/svc-payments.jpg";
import svcApps from "@/assets/svc-apps.jpg";
import svcAutomation from "@/assets/svc-automation.jpg";
import svcSystems from "@/assets/svc-systems.jpg";
import svcGrowth from "@/assets/svc-growth.jpg";
const seoImage = svcGrowth;

export type Bi<T = string> = { ar: T; en: T };

// Absolute production URL, used for canonical tags, Open Graph URLs, JSON-LD and
// the sitemap. IMPORTANT: set this to your real domain — either edit the value
// here or define VITE_SITE_URL in your environment. Keep it in sync with
// public/sitemap.xml. No trailing slash.
export const SITE_URL = (
  import.meta.env["VITE_SITE_URL"] ?? "https://ather-digital-studio.lovable.app"
).replace(/\/+$/, "");

// Shared social preview image (Open Graph / Twitter card). Lives in /public.
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const company = {
  nameAr: "أثر",
  logoNameAr: "أَثَر",
  nameEn: "Athr",
  taglineAr: "للحلول البرمجية",
  taglineEn: "Software Solutions",
  phone: "+201559011073",
  phoneDisplay: "+20 155 901 1073",
  whatsapp: "https://wa.me/201559011073",
  email: "athr@gmail.com",
  addressAr: "مصر – قنا – شارع جميل",
  addressEn: "Gameel Street, Qena, Egypt",
  hoursAr: "يوميا من 8 صباحا حتى 10 مساء",
  hoursEn: "Daily, 8:00 AM – 10:00 PM",
};

export const nav: { to: string; label: Bi }[] = [
  { to: "/", label: { ar: "الرئيسية", en: "Home" } },
  { to: "/services", label: { ar: "الخدمات", en: "Services" } },
  { to: "/packages", label: { ar: "الباقات", en: "Packages" } },
  { to: "/about", label: { ar: "من نحن", en: "About" } },
  { to: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
];

export const platforms = [
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/1a2440" },
  { name: "Salla", logo: "https://cdn.simpleicons.org/salla/1a2440" },
  {
    name: "Zid",
    logo: "https://www.google.com/s2/favicons?domain=zid.sa&sz=128",
  },
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/1a2440" },
  { name: "WooCommerce", logo: "https://cdn.simpleicons.org/woocommerce/1a2440" },
  { name: "Zoho", logo: "https://cdn.simpleicons.org/zoho/1a2440" },
  { name: "DHL", logo: "https://cdn.simpleicons.org/dhl/1a2440" },
  {
    name: "Aramex",
    logo: "https://www.google.com/s2/favicons?domain=aramex.com&sz=128",
  },
  {
    name: "Klaviyo",
    logo: "https://www.google.com/s2/favicons?domain=klaviyo.com&sz=128",
  },
  { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/1a2440" },
  { name: "Google", logo: "https://cdn.simpleicons.org/google/1a2440" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/1a2440" },
];

export const stats: { value: string; label: Bi }[] = [
  { value: "+50", label: { ar: "عميل حول المنطقة", en: "Clients across the region" } },
  { value: "+150", label: { ar: "مشروع تم تسليمه", en: "Projects delivered" } },
  { value: "+40", label: { ar: "تكامل وربط خارجي", en: "Integrations built" } },
  { value: "98%", label: { ar: "نسبة رضا العملاء", en: "Client satisfaction" } },
];

export type Service = {
  slug: string;
  image: string;
  title: Bi;
  summary: Bi;
  points: Bi<string[]>;
};

export const services: Service[] = [
  {
    slug: "stores",
    image: svcStore,
    title: { ar: "تأسيس وإطلاق المتجر الإلكتروني", en: "Online Store Setup & Launch" },
    summary: {
      ar: "من الفكرة حتى أول طلب، نجهّز لك متجرا كاملا جاهزا للبيع على شوبيفاي أو سلة أو زد أو ووكومرس، مضبوطا بالكامل ليناسب سوقك.",
      en: "From idea to first order, we deliver a complete, ready-to-sell store on Shopify, Salla, Zid or WooCommerce — fully configured for your market.",
    },
    points: {
      ar: [
        "ربط النطاق والبريد الرسمي وشهادة الأمان SSL منذ اليوم الأول",
        "ضبط المتجر لسوقك: العملة، ضريبة القيمة المضافة، مناطق الشحن، والسياسات",
        "هيكلة واضحة للأقسام وبحث ذكي بالاسم أو SKU أو الباركود أو رقم المنتج",
        "فواتير متوافقة مع هيئة الزكاة والضريبة (ZATCA) لمتاجر الخليج",
        "نسخة احتياطية كاملة واختبار آمن قبل الإطلاق الفعلي",
      ],
      en: [
        "Connected domain, branded business email and SSL security from day one",
        "Configured for your market: currency, VAT, shipping zones and store policies",
        "Clear category structure and smart search by name, SKU, barcode or product ID",
        "ZATCA-compliant e-invoicing set up correctly for Gulf stores",
        "A full backup and safe testing before you ever go live",
      ],
    },
  },
  {
    slug: "theme",
    image: svcSystems,
    title: { ar: "تصميم الواجهة والتطوير المخصص", en: "Storefront Design & Custom Development" },
    summary: {
      ar: "نصمم واجهة متجر تعكس هوية علامتك وتحوّل الزوار إلى مشترين، بأقسام وبرمجة خاصة بعيدا عن القوالب الجاهزة.",
      en: "We craft a storefront that reflects your brand and turns more visitors into buyers — with custom sections and code, not a generic template.",
    },
    points: {
      ar: [
        "أقسام تركّز على زيادة المبيعات: وصل حديثا، الأكثر مبيعا، وعروض بعداد تنازلي",
        "سلايدر للمنتجات وتوصيات ذكية وعرض خيارات المنتج في الواجهة",
        "شارات ثقة وأيقونات وسائل الدفع تطمئن المشتري لأول مرة",
        "دعم كامل للعربية (RTL) وتجربة سريعة تبدأ من الجوال",
        "مزايا مخصصة ببرمجة المنصة تناسب طريقة عملك بالضبط",
      ],
      en: [
        "Conversion-focused sections: new arrivals, best sellers and countdown offers",
        "Product sliders, smart recommendations and variants shown up front",
        "Trust badges and payment icons that reassure first-time buyers",
        "Flawless Arabic RTL and a fast, mobile-first experience",
        "Custom features coded to fit exactly how you work",
      ],
    },
  },
  {
    slug: "products",
    image: svcInventory,
    title: { ar: "رفع المنتجات وإدارة المخزون", en: "Product Upload & Inventory Setup" },
    summary: {
      ar: "نرفع كتالوجك بالكامل — مئات المنتجات — ببيانات نظيفة وصور موحدة، ونحافظ على دقة المخزون حتى لا تبيع ما ليس متاحا.",
      en: "We load your full catalogue — hundreds of products — with clean data and consistent imagery, then keep stock accurate so you never oversell.",
    },
    points: {
      ar: [
        "رفع جماعي للأسماء والأسعار والأوصاف وأكواد SKU والباركود والخيارات",
        "معايير موحدة للصور: المقاس، الخلفية، الصورة الرئيسية وصور التفاصيل",
        "حقول إضافية مثل الأبعاد والوزن ومدة الضمان",
        "خصم المخزون عند إتمام الدفع فقط لتفادي البيع الزائد",
        "مزامنة لحظية للمخزون بين متجرك ونظامك الخلفي",
      ],
      en: [
        "Bulk import of titles, prices, descriptions, SKUs, barcodes and variants",
        "Consistent image standards: size, background, main and detail shots",
        "Extra fields such as dimensions, weight and warranty periods",
        "Stock reserved at checkout, not at add-to-cart, to prevent overselling",
        "Complete migration from your old store — images and categories included",
      ],
    },
  },
  {
    slug: "integrations",
    image: svcAutomation,
    title: { ar: "التكامل مع زوهو وأتمتة العمليات", en: "Zoho Integration & Automation" },
    summary: {
      ar: "نربط متجرك بمنظومة زوهو — إنفنتوري، بوكس، CRM، وميل — ونؤتمت العمل اليومي ليوفر فريقك ساعات كل أسبوع.",
      en: "We connect your store to the Zoho suite — Inventory, Books, CRM and Mail — and automate the daily work so your team saves hours every week.",
    },
    points: {
      ar: [
        "مزامنة ثنائية الاتجاه مع زوهو إنفنتوري لدقة المخزون والطلبات",
        "فواتير ومحاسبة تلقائية ثنائية اللغة عبر زوهو بوكس",
        "تسجيل كل طلب وعميل في زوهو CRM للمتابعة والاحتفاظ",
        "بريد رسمي على اسم نطاقك عبر زوهو ميل",
        "سير عمل مخصص للموافقات وحالات الطلب وتنبيهات الفريق",
      ],
      en: [
        "Two-way sync with Zoho Inventory to keep stock and orders accurate",
        "Automatic bilingual invoicing and accounting through Zoho Books",
        "Every order and customer captured in Zoho CRM for follow-up",
        "Business email on your own domain with Zoho Mail",
        "Custom workflows for approvals, order status and team alerts",
      ],
    },
  },
  {
    slug: "shipping",
    image: svcShipping,
    title: { ar: "الشحن والربط مع شركات التوصيل", en: "Shipping & Carrier Integration" },
    summary: {
      ar: "نربط شركات الشحن المناسبة لسوقك لتشحن أسرع، مع أسعار لحظية وبوالص شحن تلقائية وتتبع يتابعه عميلك خطوة بخطوة.",
      en: "We connect the right carriers for your market so orders ship faster — with live rates, automatic labels and tracking your customers can follow.",
    },
    points: {
      ar: [
        "أسعار لحظية وبوالص شحن تلقائية مع أرامكس وDHL وبوسطة وغيرها",
        "مناطق شحن محلية وخليجية ودولية بقواعد أسعار واضحة",
        "قواعد للشحن المجاني والدفع عند الاستلام حسب قيمة الطلب أو المنطقة",
        "احتساب الوزن الحجمي للطرود الكبيرة",
        "إرسال تلقائي للشحنات وإشعارات تتبع لحظية للعملاء",
      ],
      en: [
        "Live rates and automatic AWB labels with Aramex, DHL, Bosta and more",
        "Local, GCC and international shipping zones with clear pricing rules",
        "Free-shipping and cash-on-delivery rules by order value or region",
        "Volumetric weight handled correctly for bulky items",
        "Automated dispatch and real-time tracking notifications for customers",
      ],
    },
  },
  {
    slug: "payments",
    image: svcPayments,
    title: { ar: "بوابات الدفع وتعدد العملات", en: "Payments & Multi-Currency" },
    summary: {
      ar: "نفعّل وسائل الدفع التي يثق بها عملاؤك ونعرض الأسعار بعملتهم، لتقليل الطلبات المتروكة عند الدفع وزيادة إتمام الشراء.",
      en: "We activate the payment methods your customers trust and show prices in their own currency — so fewer carts are abandoned at checkout.",
    },
    points: {
      ar: [
        "بوابات محلية وعالمية: باي موب، فوري، مدى، Apple Pay، البطاقات والمحافظ",
        "خيارات الدفع الآجل مثل تابي وتمارا معروضة في صفحة المنتج",
        "تحويل تلقائي للعملة حسب موقع الزائر",
        "احتساب صحيح لضريبة القيمة المضافة عند الدفع وجاهزية ZATCA للخليج",
        "اختبار كامل في وضع التجربة قبل تفعيل الدفع الفعلي",
      ],
      en: [
        "Local and global gateways: Paymob, Fawry, Mada, Apple Pay, cards and wallets",
        "Buy-now-pay-later options like Tabby and Tamara shown on the product page",
        "Automatic currency conversion based on the visitor's location",
        "VAT applied correctly at checkout, ZATCA-ready for the Gulf",
        "Full sandbox testing before real payments go live",
      ],
    },
  },
  {
    slug: "apps",
    image: svcApps,
    title: { ar: "تطبيقات الجوال", en: "Mobile App Development" },
    summary: {
      ar: "نضع متجرك في جيب عميلك بتطبيق سريع لأندرويد وiOS يبقى متزامنا مع منتجاتك وطلباتك على مدار الساعة.",
      en: "We put your store in your customers' pockets with a fast Android and iOS app that stays in sync with your catalogue and orders.",
    },
    points: {
      ar: [
        "تطبيق بأداء أصلي يعمل بنفس بيانات المتجر ويتحدث تلقائيا",
        "إشعارات فورية للعروض وحالة الطلب وإعادة جذب العملاء",
        "تبديل العربية والإنجليزية داخل التطبيق بدعم كامل لـ RTL",
        "النشر على App Store وGoogle Play وHuawei حتى الموافقة",
        "تجربة سلسة ومتجاوبة مع كل مقاسات الشاشات",
      ],
      en: [
        "Native-feel app on the same store data, updated automatically",
        "Push notifications for offers, order status and re-engagement",
        "In-app Arabic/English switching with full RTL support",
        "Publishing to the App Store, Google Play and Huawei until approval",
        "A smooth, responsive experience across every screen size",
      ],
    },
  },
  {
    slug: "growth",
    image: seoImage,
    title: { ar: "تحسين الظهور ونمو المبيعات", en: "SEO & Sales Growth" },
    summary: {
      ar: "نساعد متجرك على الظهور في نتائج جوجل والبيع أكثر لنفس زواره، ونحوّل الزيارات إلى إيرادات متكررة.",
      en: "We help your store get found on Google and sell more to the visitors you already have — turning traffic into repeat revenue.",
    },
    points: {
      ar: [
        "تحسين تقني وداخلي لمحركات البحث للصفحات والأقسام والمنتجات",
        "سرعة تحميل أعلى وتجربة جوال أكثر سلاسة",
        "قواعد العروض المكملة والمنتجات المجانية لرفع متوسط قيمة الطلب",
        "برامج نقاط وولاء تعيد العملاء للشراء مجددا",
        "لوحات واضحة لمتابعة الطلبات والزيارات والأداء",
      ],
      en: [
        "Technical and on-page SEO for pages, collections and products",
        "Faster load times and a smoother mobile experience",
        "Upsell, cross-sell and free-gift rules that raise average order value",
        "Loyalty and points programmes that bring customers back",
        "Clear dashboards to track orders, traffic and performance",
      ],
    },
  },
  {
    slug: "social-media",
    image: svcGrowth,
    title: { ar: "إدارة وتسويق السوشيال ميديا", en: "Social Media Management" },
    summary: {
      ar: "ندير قنواتك الاجتماعية من الألف إلى الياء — استراتيجية ومحتوى وتصميم وتفاعل يومي — لبناء جمهور يشتري فعلا.",
      en: "We run your social channels end to end — strategy, content, design and daily engagement — to build an audience that actually buys.",
    },
    points: {
      ar: [
        "إدارة كاملة لفيسبوك وإنستجرام وتيك توك ولينكدإن",
        "استراتيجية محتوى شهرية وجدول نشر منتظم",
        "تصاميم منشورات لافتة وريلز قصيرة توقف التمرير",
        "إدارة المجتمع والرد على التعليقات والرسائل المباشرة",
        "تقارير شهرية بالمؤشرات التي تهم نشاطك",
      ],
      en: [
        "Full management of Facebook, Instagram, TikTok and LinkedIn",
        "Monthly content strategy and a consistent posting calendar",
        "Scroll-stopping post designs and short-form reels",
        "Community management: replies to comments and direct messages",
        "Monthly reports with the metrics that matter to your business",
      ],
    },
  },
  {
    slug: "advertising",
    image: svcAutomation,
    title: { ar: "الإعلانات المدفوعة والأداء", en: "Performance Advertising" },
    summary: {
      ar: "نحوّل ميزانية الإعلان إلى مبيعات قابلة للقياس عبر حملات مستهدفة على ميتا وجوجل وتيك توك، محسّنة لعائد حقيقي لا مجرد نقرات.",
      en: "We turn ad budget into measurable sales with targeted campaigns across Meta, Google and TikTok — optimised for real return, not just clicks.",
    },
    points: {
      ar: [
        "حملات على ميتا (فيسبوك وإنستجرام) وجوجل وتيك توك",
        "استهداف دقيق وإعادة استهداف الزوار السابقين",
        "تصاميم ونصوص إعلانية عالية التحويل مصممة للبيع",
        "تحسين مستمر للحملات لخفض تكلفة النتيجة",
        "تقارير شفافة لعائد الاستثمار والتحويلات",
      ],
      en: [
        "Campaigns across Meta (Facebook/Instagram), Google and TikTok",
        "Precise audience targeting and retargeting of past visitors",
        "High-converting ad creative and copy built to sell",
        "Continuous optimisation to lower cost per result",
        "Transparent ROI and conversion reporting",
      ],
    },
  },
  {
    slug: "graphic-design",
    image: svcSystems,
    title: { ar: "الهوية البصرية والتصميم", en: "Brand Identity & Design" },
    summary: {
      ar: "نبني علامة تليق بك — من الشعار والدليل حتى التصاميم اليومية التي تحافظ على تناسقك في كل نقطة تواصل.",
      en: "We build a brand that looks the part — from logo and guidelines to the everyday designs that keep you consistent everywhere.",
    },
    points: {
      ar: [
        "تصميم الشعار ونظام هوية بصرية متكامل",
        "دليل العلامة: الألوان والخطوط والاستخدام الصحيح",
        "تصاميم متسقة مع العلامة للسوشيال ميديا والإعلانات",
        "مواد تسويقية: بروشور، رول أب، وبطاقات عمل",
        "قوالب قابلة لإعادة الاستخدام تحافظ على تناسق كل قناة",
      ],
      en: [
        "Logo design and a complete visual identity system",
        "Brand guidelines: colours, typography and correct usage",
        "On-brand designs for social media and advertising",
        "Marketing collateral: brochures, roll-ups and business cards",
        "Reusable templates that keep every touchpoint consistent",
      ],
    },
  },
  {
    slug: "video",
    image: svcApps,
    title: { ar: "إنتاج الفيديو والريلز", en: "Video Production & Reels" },
    summary: {
      ar: "نصنع فيديو يوقف التمرير — من ريلز باحتراف إلى محتوى بالذكاء الاصطناعي وتعليق صوتي — يجعل علامتك تُشاهَد وتُشارَك.",
      en: "We create scroll-stopping video — from professionally edited reels to AI-generated content and voice-over — that gets your brand watched and shared.",
    },
    points: {
      ar: [
        "مونتاج احترافي للريلز والفيديوهات القصيرة بحركة وتأثيرات",
        "فيديو بالذكاء الاصطناعي وتحريك الصور لمحتوى مميز",
        "تعليق صوتي بجودة استوديو بلهجات ونبرات متعددة",
        "أفتار مخصص بالذكاء الاصطناعي يقدّم علامتك بثبات",
        "فيديو إعلاني وتعليمي وسينمائي لكل قناة",
      ],
      en: [
        "Professionally edited reels and short videos with motion and effects",
        "AI-generated video and image animation for standout content",
        "Studio-quality voice-over in multiple dialects and tones",
        "A custom AI avatar to present your brand consistently",
        "Promotional, educational and cinematic video for every channel",
      ],
    },
  },
];

export const process: { step: string; title: Bi; body: Bi }[] = [
  {
    step: "01",
    title: { ar: "التأسيس", en: "Foundation" },
    body: {
      ar: "دراسة نشاطك، فتح الصلاحيات، نسخة احتياطية كاملة، وضبط إعدادات المتجر الأساسية.",
      en: "We study your business, secure admin access, take a full backup and configure core store settings.",
    },
  },
  {
    step: "02",
    title: { ar: "التنظيم", en: "Structure" },
    body: {
      ar: "بناء شجرة الأقسام والفلاتر والبحث، وتجهيز بيانات المنتجات للرفع.",
      en: "Category tree, filters and search are built while product data is prepared for import.",
    },
  },
  {
    step: "03",
    title: { ar: "التنفيذ", en: "Build" },
    body: {
      ar: "تخصيص التصميم، رفع المنتجات، وتفعيل الدفع والشحن والتكاملات.",
      en: "Design customization, product upload, then payments, shipping and integrations go live.",
    },
  },
  {
    step: "04",
    title: { ar: "الإطلاق والمتابعة", en: "Launch & Support" },
    body: {
      ar: "اختبار كامل للطلبات، فيديوهات تدريب لفريقك، ثم دعم مستمر بعد الإطلاق.",
      en: "Full order testing, training videos for your team, then continuous post‑launch support.",
    },
  },
];

export const packages: {
  name: Bi;
  best?: boolean;
  for: Bi;
  features: Bi<string[]>;
}[] = [
  {
    name: { ar: "باقة الإطلاق", en: "Launch" },
    for: { ar: "لمن يبدأ متجره الأول", en: "For a first online store" },
    features: {
      ar: [
        "إنشاء متجر على المنصة المناسبة لك",
        "ربط النطاق والبريد الرسمي",
        "تجهيز الأقسام والسياسات وصفحات المتجر",
        "رفع حتى 100 منتج",
        "وسيلة دفع وشركة شحن واحدة",
        "دعم فني لمدة شهر",
      ],
      en: [
        "Store creation on the platform that fits you",
        "Domain and business email connection",
        "Categories, policies and core store pages",
        "Up to 100 products uploaded",
        "One payment method and one carrier",
        "One month of technical support",
      ],
    },
  },
  {
    name: { ar: "باقة النمو", en: "Growth" },
    best: true,
    for: {
      ar: "للمتاجر التي تبيع فعلا وتريد التوسع",
      en: "For stores already selling and scaling",
    },
    features: {
      ar: [
        "كل ما في باقة الإطلاق",
        "تخصيص التصميم ببرمجة خاصة",
        "رفع حتى 300 منتج بصور موحدة",
        "محول عملات تلقائي حسب الدولة",
        "ربط شركات الشحن وحساب الوزن الحجمي",
        "واجهة عربية وإنجليزية كاملة",
        "دعم فني لمدة ثلاثة أشهر",
      ],
      en: [
        "Everything in Launch",
        "Custom‑coded theme customization",
        "Up to 300 products with unified imagery",
        "Automatic currency converter by country",
        "Carrier integration with volumetric weight",
        "Complete Arabic and English storefront",
        "Three months of technical support",
      ],
    },
  },
  {
    name: { ar: "باقة الأعمال", en: "Business" },
    for: { ar: "للشركات ذات المخزون والفروع", en: "For companies with inventory and branches" },
    features: {
      ar: [
        "كل ما في باقة النمو",
        "تكامل زوهو إنفنتوري وإدارة المستودعات",
        "سير عمل مخصص وموافقات داخلية",
        "فواتير ثنائية اللغة وتذكير السلال المتروكة",
        "برنامج نقاط وولاء",
        "تحسين محركات البحث",
        "دعم فني لمدة ستة أشهر",
      ],
      en: [
        "Everything in Growth",
        "Zoho Inventory and warehouse management integration",
        "Custom workflows and internal approvals",
        "Bilingual invoices and abandoned cart reminders",
        "Loyalty and points programme",
        "Search engine optimisation",
        "Six months of technical support",
      ],
    },
  },
  {
    name: { ar: "باقة المشاريع الخاصة", en: "Enterprise" },
    for: { ar: "للأنظمة والتطبيقات المفصلة", en: "For tailored systems and applications" },
    features: {
      ar: [
        "نظام أو منصة مبنية خصيصا لنشاطك",
        "تطبيق جوال لأندرويد وiOS وهواوي",
        "نقل بيانات كامل من نظامك القديم",
        "لوحات تحكم وتقارير إدارية",
        "تدريب الفريق بفيديوهات وجلسات مباشرة",
        "اتفاقية دعم وصيانة سنوية",
      ],
      en: [
        "A system or platform built specifically for your business",
        "Mobile app for Android, iOS and Huawei",
        "Full data migration from your legacy system",
        "Admin dashboards and management reporting",
        "Team training with videos and live sessions",
        "Annual support and maintenance agreement",
      ],
    },
  },
];

export const values: { title: Bi; body: Bi }[] = [
  {
    title: { ar: "وضوح من البداية", en: "Clarity from day one" },
    body: {
      ar: "خطة مكتوبة بمراحل ومدد واضحة، وتحديث دوري حتى التسليم.",
      en: "A written plan with clear stages and timelines, plus regular updates until delivery.",
    },
  },
  {
    title: { ar: "تسليم قابل للقياس", en: "Measurable delivery" },
    body: {
      ar: "كل مرحلة تنتهي باختبار وموافقة منك قبل الانتقال للتي بعدها.",
      en: "Every stage ends with a test and your sign‑off before the next one starts.",
    },
  },
  {
    title: { ar: "تدريب فريقك", en: "We train your team" },
    body: {
      ar: "نسلم فيديوهات شرح لكل عملية حتى يدير فريقك المتجر بنفسه.",
      en: "We hand over walkthrough videos so your team can run the store independently.",
    },
  },
  {
    title: { ar: "دعم بعد الإطلاق", en: "Support after launch" },
    body: {
      ar: "لا نختفي بعد التسليم؛ نتابع الأداء ونعالج الملاحظات بسرعة.",
      en: "We do not disappear after handover; we monitor performance and fix issues fast.",
    },
  },
];

export const faqs: { q: Bi; a: Bi }[] = [
  {
    q: { ar: "كم يستغرق إطلاق المتجر؟", en: "How long does a store launch take?" },
    a: {
      ar: "غالبا من أسبوع إلى ثلاثة أسابيع حسب عدد المنتجات والتكاملات المطلوبة.",
      en: "Usually one to three weeks depending on product count and the integrations required.",
    },
  },
  {
    q: { ar: "هل تعملون على متجر قائم بالفعل؟", en: "Do you work on an existing store?" },
    a: {
      ar: "نعم، نأخذ نسخة احتياطية كاملة أولا ثم نعمل على نسخة تجريبية قبل النشر.",
      en: "Yes. We take a full backup first and work on a duplicate theme before publishing anything.",
    },
  },
  {
    q: { ar: "هل يدعم المتجر لغتين؟", en: "Will the store support two languages?" },
    a: {
      ar: "نعم، عربي وإنجليزي بتبديل تلقائي حسب لغة الجهاز، والفرنسية متاحة مستقبلا.",
      en: "Yes — Arabic and English with automatic switching by device language, and French can be added later.",
    },
  },
  {
    q: { ar: "هل توفرون الدعم بعد التسليم؟", en: "Is there support after handover?" },
    a: {
      ar: "كل باقة تشمل فترة دعم، ويمكن تجديدها بعقد صيانة سنوي.",
      en: "Every package includes a support period, renewable through an annual maintenance agreement.",
    },
  },
];

export const testimonials: { name: Bi; role: Bi; quote: Bi; image?: string }[] = [
  {
    name: { ar: "أحمد محمد", en: "Ahmed Mohamed" },
    role: { ar: "مؤسس متجر إلكتروني", en: "E-commerce Founder" },
    quote: {
      ar: "فريق أثر قدم لنا تجربة متجر إلكتروني استثنائية من البداية للنهاية. سرعة في التنفيذ واحترافية في التعامل.",
      en: "The Athr team provided us with an exceptional e-commerce experience from start to finish. Fast execution and professional conduct.",
    },
  },
  {
    name: { ar: "سارة خالد", en: "Sarah Khaled" },
    role: { ar: "مديرة تسويق", en: "Marketing Manager" },
    quote: {
      ar: "التكامل مع زوهو وإدارة المخزون وفر علينا الكثير من الوقت والجهد. شكرا أثر!",
      en: "The integration with Zoho and inventory management saved us a lot of time and effort. Thank you Athr!",
    },
  },
  {
    name: { ar: "خالد عبدالله", en: "Khaled Abdullah" },
    role: { ar: "صاحب سلسلة معارض", en: "Retail Chain Owner" },
    quote: {
      ar: "أفضل استثمار قمنا به كان العمل مع فريق أثر لتطوير متجرنا ونظام المبيعات الخاص بنا.",
      en: "The best investment we made was working with the Athr team to develop our store and sales system.",
    },
  },
];

export const portfolio: { title: Bi; category: Bi; image: string }[] = [
  {
    title: { ar: "متجر ملابس عصري", en: "Modern Clothing Store" },
    category: { ar: "شوبيفاي", en: "Shopify" },
    image: svcStore,
  },
  {
    title: { ar: "منصة بيع جملة", en: "Wholesale Platform" },
    category: { ar: "تطوير خاص", en: "Custom Development" },
    image: svcSystems,
  },
  {
    title: { ar: "تطبيق جوال لمطعم", en: "Restaurant Mobile App" },
    category: { ar: "تطبيقات جوال", en: "Mobile Apps" },
    image: svcApps,
  },
];

// --- 12 NEW PLACEHOLDER SECTIONS DATA ---

export const team: { name: Bi; role: Bi; image?: string }[] = [
  {
    name: { ar: "علاء مبارك", en: "Alaa Mubarak" },
    role: { ar: "المدير التنفيذي", en: "CEO & Founder" },
  },
  {
    name: { ar: "أحمد أبو الوفا", en: "Ahmed Abouelwafa" },
    role: { ar: "المدير التنفيذي", en: "CEO & Founder" },
  },
  {
    name: { ar: "مهند محمد", en: "Mohand Mohamed" },
    role: { ar: "مصمم واجهات", en: "UI/UX Designer" },
  },
  {
    name: { ar: "سارة أحمد", en: "Sarah Ahmed" },
    role: { ar: "مديرة تسويق", en: "Marketing Manager" },
  },
];

export const techStack: { name: string; category: Bi }[] = [
  { name: "Angular", category: { ar: "تطوير الواجهات", en: "Frontend Development" } },
  { name: ".NET", category: { ar: "تطوير الخلفية", en: "Backend Development" } },
  { name: "React / Next.js", category: { ar: "تطوير الواجهات", en: "Frontend Development" } },
  { name: "Node.js / Bun", category: { ar: "تطوير الخلفية", en: "Backend Development" } },
  { name: "Shopify / Salla / Zid", category: { ar: "منصات المتاجر", en: "E-commerce Platforms" } },
  { name: "Zoho Suite", category: { ar: "أنظمة الإدارة", en: "Management Systems" } },
];

export const industries: { name: Bi; icon: string }[] = [
  { name: { ar: "التجزئة والأزياء", en: "Retail & Fashion" }, icon: "shopping-bag" },
  { name: { ar: "الأغذية والمشروبات", en: "Food & Beverage" }, icon: "coffee" },
  { name: { ar: "الإلكترونيات", en: "Electronics" }, icon: "cpu" },
  { name: { ar: "الخدمات الطبية", en: "Healthcare" }, icon: "heart" },
];

export const blogPosts: { title: Bi; date: string; excerpt: Bi }[] = [
  {
    title: {
      ar: "كيف تزيد مبيعات متجرك في 2024؟",
      en: "How to increase your store sales in 2024?",
    },
    date: "2024-01-15",
    excerpt: {
      ar: "نصائح عملية لتحسين تجربة المستخدم وزيادة معدل التحويل.",
      en: "Actionable tips to improve UX and increase conversion rate.",
    },
  },
  {
    title: { ar: "أهمية الربط مع أنظمة ERP", en: "The importance of ERP integration" },
    date: "2024-02-02",
    excerpt: {
      ar: "لماذا تحتاج المتاجر الكبيرة إلى زوهو لإدارة المخزون؟",
      en: "Why large stores need Zoho for inventory management.",
    },
  },
  {
    title: { ar: "تصميم المتاجر للجوال أولاً", en: "Mobile-first store design" },
    date: "2024-03-10",
    excerpt: {
      ar: "أكثر من 80٪ من المشترين يستخدمون الجوال، كيف تستعد؟",
      en: "Over 80% of buyers use mobile, how to prepare?",
    },
  },
];

export const awards: { title: Bi; year: string; organization: Bi }[] = [
  {
    title: { ar: "أفضل وكالة شوبيفاي", en: "Best Shopify Agency" },
    year: "2023",
    organization: { ar: "إيكوميرس الشرق الأوسط", en: "E-commerce ME" },
  },
  {
    title: { ar: "جائزة التميز التقني", en: "Tech Excellence Award" },
    year: "2022",
    organization: { ar: "غرفة التجارة", en: "Chamber of Commerce" },
  },
];

export const partners: { name: string; type: Bi }[] = [
  { name: "Shopify Partners", type: { ar: "شريك رسمي", en: "Official Partner" } },
  { name: "Zoho Partners", type: { ar: "شريك تقني", en: "Tech Partner" } },
  { name: "Paymob", type: { ar: "شريك مدفوعات", en: "Payment Partner" } },
  { name: "Aramex", type: { ar: "شريك لوجستي", en: "Logistics Partner" } },
];

export const benefits: { title: Bi; description: Bi }[] = [
  {
    title: { ar: "سرعة التنفيذ", en: "Fast Execution" },
    description: {
      ar: "نسلم مشاريعنا في وقت قياسي دون مساومة على الجودة.",
      en: "We deliver projects in record time without compromising quality.",
    },
  },
  {
    title: { ar: "دعم فني مستمر", en: "Continuous Support" },
    description: {
      ar: "فريقنا معك دائماً لحل أي مشكلة تقنية.",
      en: "Our team is always with you to solve any technical issue.",
    },
  },
  {
    title: { ar: "حلول مخصصة", en: "Custom Solutions" },
    description: {
      ar: "لا نستخدم قوالب جاهزة، بل نبني ما يناسب نشاطك.",
      en: "We don't use generic templates, we build what fits your business.",
    },
  },
];

export const caseStudies: { title: Bi; result: Bi; metric: string }[] = [
  {
    title: { ar: "متجر أزياء كبير", en: "Large Fashion Store" },
    result: { ar: "زيادة في المبيعات", en: "Increase in sales" },
    metric: "+150%",
  },
  {
    title: { ar: "شركة أجهزة إلكترونية", en: "Electronics Company" },
    result: { ar: "تقليل تكلفة التشغيل", en: "Reduction in operations cost" },
    metric: "-40%",
  },
];

export const locations: { city: Bi; address: Bi }[] = [
  {
    city: { ar: "قنا، مصر", en: "Qena, Egypt" },
    address: { ar: "شارع جميل", en: "Gameel Street" },
  },
  {
    city: { ar: "الرياض، السعودية", en: "Riyadh, KSA" },
    address: { ar: "قريباً", en: "Coming Soon" },
  },
];

export const guarantees: { title: Bi; description: Bi }[] = [
  {
    title: { ar: "ضمان الرضا 100٪", en: "100% Satisfaction Guarantee" },
    description: {
      ar: "نعمل حتى تكون راضياً تماماً عن النتيجة.",
      en: "We work until you are completely satisfied with the result.",
    },
  },
  {
    title: { ar: "ضمان الاستقرار", en: "Uptime Guarantee" },
    description: {
      ar: "نضمن استقرار متجرك بنسبة 99.9٪.",
      en: "We guarantee 99.9% uptime for your store.",
    },
  },
];

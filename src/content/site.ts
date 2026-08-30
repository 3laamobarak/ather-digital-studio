import svcStore from "@/assets/svc-store.jpg";
import svcInventory from "@/assets/svc-inventory.jpg";
import svcShipping from "@/assets/svc-shipping.jpg";
import svcPayments from "@/assets/svc-payments.jpg";
import svcApps from "@/assets/svc-apps.jpg";
import svcAutomation from "@/assets/svc-automation.jpg";
import svcSystems from "@/assets/svc-systems.jpg";
import svcGrowth from "@/assets/svc-growth.jpg";

export type Bi<T = string> = { ar: T; en: T };

export const company = {
  nameAr: "أثر",
  nameEn: "Ather",
  taglineAr: "للحلول البرمجية",
  taglineEn: "Software Solutions",
  phone: "+201068134463",
  phoneDisplay: "+20 106 813 4463",
  whatsapp: "https://wa.me/201068134463",
  email: "3laa.m0o0barak@gmail.com",
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
  { name: "Klaviyo", logo: "https://cdn.simpleicons.org/klaviyo/1a2440" },
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
    title: { ar: "بناء المتاجر الإلكترونية", en: "E‑commerce Store Build" },
    summary: {
      ar: "ننشئ متجرك على شوبيفاي أو سلة أو زد أو ووردبريس من الصفر حتى أول طلب، مع إعداد كامل للنطاق والإعدادات والسياسات.",
      en: "We launch your store on Shopify, Salla, Zid or WordPress from zero to first order, with full domain, settings and policy setup.",
    },
    points: {
      ar: [
        "ربط النطاق والبريد الرسمي وشهادة الأمان",
        "إعداد المتجر: العملات، الضرائب، مناطق الشحن، السياسات",
        "بناء شجرة الأقسام (رئيسي ← فرعي ← فرعي دقيق)",
        "بحث ذكي بالاسم أو رقم المنتج أو الباركود أو SKU",
        "نسخة احتياطية كاملة قبل أي تعديل",
      ],
      en: [
        "Domain, business email and SSL setup",
        "Store settings: currency, taxes, shipping zones, policies",
        "Category tree build (Main → Sub → Baby category)",
        "Smart search by name, product ID, barcode or SKU",
        "Full backup before any change goes live",
      ],
    },
  },
  {
    slug: "theme",
    image: svcSystems,
    title: { ar: "تخصيص القوالب والبرمجة الخاصة", en: "Theme Customization & Custom Code" },
    summary: {
      ar: "نعيد تشكيل قالب متجرك بالكامل ببرمجة خاصة تناسب هويتك وترفع معدل الشراء.",
      en: "We reshape your storefront with custom code that fits your brand and lifts conversion rate.",
    },
    points: {
      ar: [
        "أقسام مخصصة: وصل حديثا، الأكثر مبيعا، عروض بعداد تنازلي",
        "سلايدر للمنتجات وترتيب عشوائي ومنتجات مقترحة",
        "عرض خيارات المنتج في الصفحة الرئيسية",
        "أيقونات وسائل الدفع في التذييل وشارات الثقة",
        "دعم كامل للعربية من اليمين لليسار وتصميم متجاوب",
      ],
      en: [
        "Custom sections: new arrivals, best sellers, countdown offers",
        "Product sliders, random sorting and recommended products",
        "Product variants shown on the home page",
        "Payment icons in the footer plus trust badges",
        "Full Arabic RTL support and responsive layouts",
      ],
    },
  },
  {
    slug: "products",
    image: svcInventory,
    title: { ar: "رفع المنتجات وإدارة المخزون", en: "Bulk Products & Inventory" },
    summary: {
      ar: "نرفع لك 300 منتج أو أكثر ببيانات نظيفة وصور موحدة، ونربط المخزون بنظامك.",
      en: "We upload 300+ products with clean data and consistent imagery, then sync stock with your system.",
    },
    points: {
      ar: [
        "رفع جماعي للبيانات: الاسم، السعر، الوصف، SKU، الباركود، الخيارات",
        "قواعد موحدة للصور (مقاس، خلفية، صورة رئيسية وثانوية)",
        "حقول إضافية مثل الطول والعرض والارتفاع ومدة الضمان",
        "خصم المخزون عند إتمام الدفع فقط وليس عند الإضافة للسلة",
        "نقل بيانات كامل من متجرك القديم بالصور والأقسام",
      ],
      en: [
        "Bulk data import: title, price, description, SKU, barcode, variants",
        "Unified image rules (size, background, main and secondary shots)",
        "Extra fields such as length, width, height and warranty periods",
        "Stock deducted at checkout only, not at add‑to‑cart",
        "Full migration from your old store including images and categories",
      ],
    },
  },
  {
    slug: "integrations",
    image: svcAutomation,
    title: { ar: "التكامل مع زوهو وسير العمل", en: "Zoho Integrations & Workflows" },
    summary: {
      ar: "نربط متجرك بمنظومة زوهو ونؤتمت العمليات اليومية لتوفر ساعات عمل كل يوم.",
      en: "We connect your store to the Zoho suite and automate daily operations to save hours every day.",
    },
    points: {
      ar: [
        "مزامنة ثنائية الاتجاه مع زوهو إنفنتوري وإدارة المستودعات",
        "زوهو ميل للبريد الرسمي وفواتير ثنائية اللغة بمرفقات",
        "سير عمل مخصص للموافقات وحالات الطلب والتنبيهات",
        "تذكير السلال المتروكة وحملات البريد التسويقية",
        "ربط أكثر من موقع بنفس مصدر البيانات",
      ],
      en: [
        "Two‑way sync with Zoho Inventory and warehouse management",
        "Zoho Mail for business email plus bilingual invoices with attachments",
        "Custom workflows for approvals, order states and alerts",
        "Abandoned cart reminders and marketing email flows",
        "Multiple storefronts reading from one single source of truth",
      ],
    },
  },
  {
    slug: "shipping",
    image: svcShipping,
    title: { ar: "الشحن وشركات التوصيل", en: "Shipping & Carrier Integration" },
    summary: {
      ar: "نفعل الشحن اللحظي مع أرامكس وDHL وغيرها، مع قواعد ذكية للأسعار.",
      en: "Real‑time shipping with Aramex, DHL and more, backed by smart pricing rules.",
    },
    points: {
      ar: [
        "أسعار لحظية من شركات الشحن مع بديل يدوي آمن",
        "مناطق شحن محلية وخليجية ودولية",
        "حساب الوزن الحجمي للطرود الكبيرة",
        "قواعد الشحن المجاني حسب قيمة الطلب أو نوع المنتج",
        "تتبع الشحنة وإشعارات للعميل",
      ],
      en: [
        "Live carrier rates with a safe manual fallback",
        "Local, GCC and international shipping zones",
        "Volumetric weight calculation for bulky items",
        "Free shipping rules by order value or product type",
        "Shipment tracking and customer notifications",
      ],
    },
  },
  {
    slug: "payments",
    image: svcPayments,
    title: { ar: "بوابات الدفع ومحول العملات", en: "Payments & Currency Converter" },
    summary: {
      ar: "نفعل وسائل الدفع المناسبة لسوقك ونعرض الأسعار بعملة الزائر تلقائيا.",
      en: "We activate the right payment methods for your market and show prices in the visitor's currency automatically.",
    },
    points: {
      ar: [
        "تفعيل محافظ وبطاقات وبوابات محلية ودولية",
        "الدفع بالتقسيط على أربع دفعات مع عرض السعر في صفحة المنتج",
        "محول عملات تلقائي حسب موقع الزائر مع هامش ورسوم دولة",
        "ضريبة قيمة مضافة تلقائية عند الدفع",
        "اختبار كامل في وضع التجربة ثم التشغيل الفعلي",
      ],
      en: [
        "Local and international wallets, cards and gateways",
        "Buy‑now‑pay‑later split pricing shown on the product page",
        "Automatic currency converter by visitor location with margin and country fees",
        "Automatic VAT applied at checkout",
        "Full sandbox testing before going live",
      ],
    },
  },
  {
    slug: "apps",
    image: svcApps,
    title: { ar: "تطبيقات الجوال", en: "Mobile Applications" },
    summary: {
      ar: "تطبيقات متاجر وخدمات لأندرويد وiOS وهواوي، من تطبيق متكامل إلى نسخة مرتبطة بمتجرك.",
      en: "Store and service apps for Android, iOS and Huawei — from a full native experience to a store‑linked build.",
    },
    points: {
      ar: [
        "تطبيق يعمل بنفس بيانات متجرك ويتحدث تلقائيا",
        "إشعارات فورية للعروض وحالة الطلب",
        "تبديل اللغة واتجاه الواجهة داخل التطبيق",
        "رفع ونشر التطبيق على المتاجر حتى الموافقة",
        "تصميم متجاوب لكل مقاسات الشاشات",
      ],
      en: [
        "App running on the same store data with automatic updates",
        "Push notifications for offers and order status",
        "In‑app language and layout direction switching",
        "Store submission and publishing until approval",
        "Responsive design across all screen sizes",
      ],
    },
  },
  {
    slug: "growth",
    image: svcGrowth,
    title: { ar: "تحسين الظهور ونمو المبيعات", en: "Visibility & Sales Growth" },
    summary: {
      ar: "نجعل متجرك يظهر في نتائج البحث ويبيع أكثر لنفس عدد الزوار.",
      en: "We make your store easier to find and help it sell more to the same traffic.",
    },
    points: {
      ar: [
        "تحسين محركات البحث للصفحات والأقسام والمنتجات",
        "برنامج نقاط وولاء للعملاء المتكررين",
        "عروض مكملة ومنتجات مجانية ورفع قيمة السلة",
        "تحسين سرعة المتجر وتجربة الجوال",
        "لوحة تقارير لمتابعة الطلبات والأداء",
      ],
      en: [
        "SEO for pages, collections and product listings",
        "Loyalty and points programme for repeat buyers",
        "Upsell, cross‑sell and free‑gift rules to raise cart value",
        "Store speed and mobile experience optimisation",
        "Reporting dashboard for orders and performance",
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
    for: { ar: "للمتاجر التي تبيع فعلا وتريد التوسع", en: "For stores already selling and scaling" },
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

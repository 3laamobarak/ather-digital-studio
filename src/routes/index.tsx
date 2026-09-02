import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CtaBand, PlatformMarquee, SectionHeading } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import {
  company,
  faqs,
  process,
  services,
  SITE_URL,
  stats,
  values,
  testimonials,
  portfolio,
  packages,
  team,
  techStack,
  industries,
  blogPosts,
  awards,
  partners,
  benefits,
  caseStudies,
  locations,
  guarantees,
} from "@/content/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Athr — E‑commerce Stores, Integrations & Software Solutions" },
      {
        name: "description",
        content:
          "Athr builds and scales online stores on Shopify, Salla, Zid and WordPress: domain setup, payments, carriers, Zoho integrations, bulk products and mobile apps.",
      },
      { property: "og:title", content: "Athr — E‑commerce & Software Solutions" },
      {
        property: "og:description",
        content:
          "Store builds, custom themes, payment gateways, carrier and Zoho integrations, bulk product uploads and mobile apps.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useI18n();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,var(--sand),transparent)]" />
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t({ ar: "أثر للحلول البرمجية", en: "Athr Software Solutions" })}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] text-ink sm:text-5xl lg:text-[3.4rem]">
                {t({
                  ar: "نبني متجرك الإلكتروني",
                  en: "We build the online store",
                })}{" "}
                <span className="amber-text">
                  {t({ ar: "ونشغله بالكامل", en: "and run it end to end" })}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t({
                  ar: "من النطاق وإعداد المتجر، إلى وسائل الدفع وشركات الشحن ورفع المنتجات والتكامل مع أنظمة إدارة المخزون والبريد — نسلمك متجرا جاهزا للبيع.",
                  en: "From domain and store setup to payment gateways, carriers, bulk products and integrations with inventory and mail systems — we hand over a store ready to sell.",
                })}
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                {t({ ar: "ابدأ مشروعك", en: "Start your project" })}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
              >
                {t({ ar: "تعرف على خدماتنا", en: "Explore services" })}
                <Arrow className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal
              delay={280}
              className="mt-7 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Clock className="h-4 w-4 text-accent" />
              {t({ ar: company.hoursAr, en: company.hoursEn })}
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-4xl bg-accent/10 blur-2xl" />
            <img
              src={heroImg}
              alt={t({
                ar: "لوحة تحكم متجر إلكتروني على حاسوب وهاتف",
                en: "E‑commerce dashboard shown on a laptop and phone",
              })}
              width={1600}
              height={1104}
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="surface-card absolute -bottom-6 start-4 hidden items-center gap-3 px-5 py-4 sm:flex">
              <span className="text-2xl font-extrabold text-ink">+150</span>
              <span className="max-w-[9rem] text-xs font-semibold leading-tight text-muted-foreground">
                {t({ ar: "مشروع تم تسليمه بنجاح", en: "Projects delivered successfully" })}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 70} className="bg-card p-7 text-center">
              <p className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t(s.label)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <PlatformMarquee />
      </div>

      {/* About Preview */}
      <section className="container-page py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow={t({ ar: "من نحن", en: "About Us" })}
              title={t({ ar: "شريكك التقني للنمو", en: "Your technical partner for growth" })}
              body={t({
                ar: "بدأنا من قنا في مصر بفكرة بسيطة: أن صاحب العمل يحتاج شريكا تقنيا يفهم البيع، لا مجرد موقع جميل. نعمل مع تجار وشركات في مصر والخليج على بناء متاجر وأنظمة تدار بسهولة وتنمو مع نشاطهم.",
                en: "We started in Qena, Egypt with a simple idea: business owners need a tech partner who understands sales, not just pretty websites. We work with merchants across Egypt and the Gulf to build stores and systems that are easy to run and scale.",
              })}
            />
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t({ ar: "اقرأ المزيد عنا", en: "Read more about us" })}
              <Arrow className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal
            delay={120}
            className="relative aspect-square overflow-hidden rounded-3xl md:aspect-[4/3]"
          >
            <img src={heroImg} alt="About Athr" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-ink/10" />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "خدماتنا", en: "Services" })}
          title={t({
            ar: "كل ما يحتاجه متجرك تحت سقف واحد",
            en: "Everything your store needs, under one roof",
          })}
          body={t({
            ar: "نغطي دورة حياة المتجر كاملة: بناء، تخصيص، تكامل، تشغيل، ونمو.",
            en: "We cover the full store lifecycle: build, customize, integrate, operate and grow.",
          })}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 60}
              as="article"
              className="surface-card group overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={t(s.title)}
                  loading="lazy"
                  width={1024}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <h3 className="absolute bottom-4 start-5 end-5 text-lg font-bold text-primary-foreground">
                  {t(s.title)}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{t(s.summary)}</p>
                <ul className="mt-4 space-y-2">
                  {t(s.points)
                    .slice(0, 3)
                    .map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-ink-soft">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
          >
            {t({ ar: "كل الخدمات بالتفصيل", en: "All services in detail" })}
            <Arrow className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Portfolio */}
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow={t({ ar: "أعمالنا", en: "Our Work" })}
          title={t({ ar: "مشاريع نفخر بها", en: "Projects we are proud of" })}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, i) => (
            <Reveal key={p.title.en} delay={i * 60} className="surface-card group overflow-hidden">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={t(p.title)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t(p.category)}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ink">{t(p.title)}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="ink-panel py-20">
        <div className="container-page">
          <SectionHeading
            invert
            eyebrow={t({ ar: "لماذا أثر", en: "Why Athr" })}
            title={t({
              ar: "طريقة عمل منظمة، لا وعود عامة",
              en: "A disciplined way of working, not vague promises",
            })}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title.en}
                delay={i * 70}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-base font-bold text-primary-foreground">{t(v.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {t(v.body)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "آراء العملاء", en: "Testimonials" })}
          title={t({ ar: "ماذا يقول عملاؤنا", en: "What our clients say" })}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((tItem, i) => (
            <Reveal key={tItem.name.en} delay={i * 60} className="surface-card p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">"{t(tItem.quote)}"</p>
              <div className="mt-6">
                <p className="text-sm font-bold text-ink">{t(tItem.name)}</p>
                <p className="text-xs text-muted-foreground">{t(tItem.role)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "مراحل العمل", en: "How we work" })}
          title={t({ ar: "أربع مراحل واضحة حتى الإطلاق", en: "Four clear stages to launch" })}
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 70} as="li" className="surface-card relative p-6">
              <span className="font-display text-4xl font-extrabold text-accent/40">{p.step}</span>
              <h3 className="mt-3 text-base font-bold text-ink">{t(p.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(p.body)}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Pricing / Packages */}
      <section className="ink-panel py-20">
        <div className="container-page">
          <SectionHeading
            invert
            eyebrow={t({ ar: "الباقات", en: "Packages" })}
            title={t({ ar: "خطط تناسب حجم نشاطك", en: "Plans that fit your business size" })}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <Reveal
                key={pkg.name.en}
                delay={i * 60}
                className={`relative flex flex-col rounded-2xl p-6 ${
                  pkg.best
                    ? "bg-accent text-accent-foreground"
                    : "border border-white/10 bg-white/5"
                }`}
              >
                {pkg.best && (
                  <span className="absolute -top-3 end-4 rounded-full bg-ink px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {t({ ar: "الأكثر طلبا", en: "Most Popular" })}
                  </span>
                )}
                <h3 className={`text-xl font-bold ${pkg.best ? "text-ink" : "text-white"}`}>
                  {t(pkg.name)}
                </h3>
                <p className={`mt-2 text-sm ${pkg.best ? "text-ink/80" : "text-white/70"}`}>
                  {t(pkg.for)}
                </p>
                <Link
                  to="/packages"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                    pkg.best
                      ? "bg-ink text-white hover:bg-ink/90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {t({ ar: "عرض التفاصيل", en: "View details" })}
                  <Arrow className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pb-20">
        <SectionHeading
          eyebrow={t({ ar: "أسئلة شائعة", en: "FAQ" })}
          title={t({ ar: "أسئلة نسأل عنها كثيرا", en: "Questions we hear often" })}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q.en} delay={i * 60} className="surface-card p-6">
              <h3 className="text-base font-bold text-ink">{t(f.q)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(f.a)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 1. Team */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "فريقنا", en: "Our Team" })}
          title={t({ ar: "تعرف على الخبراء", en: "Meet the experts" })}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name.en} delay={i * 60} className="surface-card p-6 text-center">
              <div className="mx-auto h-24 w-24 rounded-full bg-muted" />
              <h3 className="mt-4 text-base font-bold text-ink">{t(member.name)}</h3>
              <p className="text-sm text-muted-foreground">{t(member.role)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 2. Tech Stack */}
      <section className="ink-panel py-20">
        <div className="container-page">
          <SectionHeading
            invert
            eyebrow={t({ ar: "التقنيات", en: "Tech Stack" })}
            title={t({ ar: "أدوات نعتمد عليها", en: "Tools we rely on" })}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech, i) => (
              <Reveal
                key={tech.name}
                delay={i * 60}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white"
              >
                <h4 className="font-bold">{tech.name}</h4>
                <p className="mt-1 text-xs text-white/70">{t(tech.category)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industries */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "الصناعات", en: "Industries" })}
          title={t({ ar: "قطاعات نخدمها", en: "Sectors we serve" })}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name.en} delay={i * 60} className="surface-card p-6 text-center">
              <h4 className="text-lg font-bold text-ink">{t(ind.name)}</h4>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Blog Posts */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "المدونة", en: "Blog" })}
          title={t({ ar: "أحدث المقالات", en: "Latest Articles" })}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title.en} delay={i * 60} className="surface-card p-6">
              <span className="text-xs text-accent">{post.date}</span>
              <h3 className="mt-2 text-base font-bold text-ink">{t(post.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(post.excerpt)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Awards */}
      <section className="ink-panel py-20">
        <div className="container-page text-center">
          <SectionHeading
            invert
            eyebrow={t({ ar: "الجوائز", en: "Awards" })}
            title={t({ ar: "تكريمات نفخر بها", en: "Recognitions we are proud of" })}
          />
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {awards.map((award, i) => (
              <Reveal key={award.title.en} delay={i * 60} className="text-white">
                <h4 className="text-xl font-bold text-accent">{t(award.title)}</h4>
                <p className="text-sm text-white/80">
                  {award.year} - {t(award.organization)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partners */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "شركاؤنا", en: "Our Partners" })}
          title={t({ ar: "نعمل مع الأفضل", en: "We work with the best" })}
        />
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {partners.map((partner, i) => (
            <Reveal
              key={partner.name}
              delay={i * 60}
              className="surface-card px-8 py-4 text-center"
            >
              <h4 className="font-bold text-ink">{partner.name}</h4>
              <span className="text-xs text-muted-foreground">{t(partner.type)}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. Benefits */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "المميزات", en: "Benefits" })}
          title={t({ ar: "لماذا تختار حلولنا؟", en: "Why choose our solutions?" })}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title.en} delay={i * 60} className="surface-card p-6">
              <h3 className="text-lg font-bold text-ink">{t(benefit.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(benefit.description)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8. Case Studies */}
      <section className="ink-panel py-20">
        <div className="container-page">
          <SectionHeading
            invert
            eyebrow={t({ ar: "دراسات حالة", en: "Case Studies" })}
            title={t({ ar: "قصص نجاح عملائنا", en: "Our clients success stories" })}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal
                key={study.title.en}
                delay={i * 60}
                className="rounded-xl border border-white/10 bg-white/5 p-8 text-white"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{t(study.title)}</h3>
                  <span className="text-3xl font-extrabold text-accent">{study.metric}</span>
                </div>
                <p className="mt-2 text-white/70">{t(study.result)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Locations */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "فروعنا", en: "Locations" })}
          title={t({ ar: "أين تجدنا", en: "Where to find us" })}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.city.en} delay={i * 60} className="surface-card p-6 text-center">
              <h3 className="text-lg font-bold text-ink">{t(loc.city)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(loc.address)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10. Guarantees */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow={t({ ar: "الضمانات", en: "Guarantees" })}
          title={t({ ar: "وعودنا لك", en: "Our promises to you" })}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {guarantees.map((guar, i) => (
            <Reveal key={guar.title.en} delay={i * 60} className="surface-card p-6">
              <h3 className="text-lg font-bold text-ink">{t(guar.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(guar.description)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 11. Newsletter */}
      <section className="ink-panel py-20 text-center">
        <div className="container-page max-w-xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-white">
              {t({ ar: "اشترك في النشرة البريدية", en: "Subscribe to our newsletter" })}
            </h2>
            <p className="mt-3 text-white/70">
              {t({
                ar: "احصل على أحدث التحديثات والمقالات مباشرة في بريدك الإلكتروني.",
                en: "Get the latest updates and articles directly in your inbox.",
              })}
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t({ ar: "بريدك الإلكتروني", en: "Your email address" })}
                className="flex-1 rounded-full px-5 py-3 text-ink outline-none"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-7 py-3 font-bold text-accent-foreground hover:bg-accent/90"
              >
                {t({ ar: "اشترك الآن", en: "Subscribe Now" })}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 12. Contact Form Preview */}
      <section className="container-page py-20 text-center">
        <Reveal>
          <SectionHeading
            eyebrow={t({ ar: "تواصل معنا", en: "Contact Us" })}
            title={t({ ar: "هل أنت مستعد للبدء؟", en: "Ready to get started?" })}
          />
          <p className="mt-6 text-muted-foreground">
            {t({
              ar: "املأ النموذج وسنتواصل معك في أقرب وقت.",
              en: "Fill out the form and we will get back to you shortly.",
            })}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-1"
          >
            {t({ ar: "اذهب إلى صفحة التواصل", en: "Go to Contact Page" })}
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}

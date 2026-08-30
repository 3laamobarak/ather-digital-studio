import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { CtaBand, PlatformMarquee, SectionHeading } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import { company, faqs, process, services, SITE_URL, stats, values } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ather — E‑commerce Stores, Integrations & Software Solutions" },
      {
        name: "description",
        content:
          "Ather builds and scales online stores on Shopify, Salla, Zid and WordPress: domain setup, payments, carriers, Zoho integrations, bulk products and mobile apps.",
      },
      { property: "og:title", content: "Ather — E‑commerce & Software Solutions" },
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
                {t({ ar: "أثر للحلول البرمجية", en: "Ather Software Solutions" })}
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
            <Reveal delay={280} className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
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
          {services.slice(0, 6).map((s, i) => (
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

      {/* Values */}
      <section className="ink-panel py-20">
        <div className="container-page">
          <SectionHeading
            invert
            eyebrow={t({ ar: "لماذا أثر", en: "Why Ather" })}
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
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{t(v.body)}</p>
              </Reveal>
            ))}
          </div>
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

      <CtaBand />
    </>
  );
}

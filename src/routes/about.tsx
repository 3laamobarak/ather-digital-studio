import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { CtaBand, PlatformMarquee, SectionHeading } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import { company, SITE_URL, stats, values } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Athr — A Software Studio in Qena, Egypt" },
      {
        name: "description",
        content:
          "Athr is a software studio in Qena, Egypt building online stores, integrations and business systems for merchants across the region.",
      },
      { property: "og:title", content: "About Athr" },
      {
        property: "og:description",
        content:
          "Who we are, how we work, and why merchants trust Athr with their stores and business systems.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  const contactRows = [
    { icon: Phone, value: company.phoneDisplay, href: `tel:${company.phone}`, ltr: true },
    { icon: Mail, value: company.email, href: `mailto:${company.email}`, ltr: true },
    { icon: MapPin, value: t({ ar: company.addressAr, en: company.addressEn }) },
    { icon: Clock, value: t({ ar: company.hoursAr, en: company.hoursEn }) },
  ];

  return (
    <>
      <section className="border-b border-border bg-[radial-gradient(70%_70%_at_50%_0%,var(--sand),transparent)] py-16">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <SectionHeading
              eyebrow={t({ ar: "من نحن", en: "About us" })}
              title={t({
                ar: "أثر — فريق يترك أثرا في كل مشروع",
                en: "Athr — a team that leaves a mark on every project",
              })}
              body={t({
                ar: "بدأنا من قنا في مصر بفكرة بسيطة: أن صاحب العمل يحتاج شريكا تقنيا يفهم البيع، لا مجرد موقع جميل. نعمل مع تجار وشركات في مصر والخليج على بناء متاجر وأنظمة تدار بسهولة وتنمو مع نشاطهم.",
                en: "We started in Qena, Egypt with one simple belief: a business owner needs a technical partner who understands selling, not just a pretty website. We work with merchants and companies across Egypt and the Gulf, building stores and systems that are easy to run and grow with the business.",
              })}
            />
          </div>
          <Reveal delay={120} className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-accent/10 blur-2xl" />
            <img
              src={aboutImg}
              alt={t({ ar: "استشارة مع عميل", en: "A consultation with a client" })}
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 60} className="bg-card p-7 text-center">
              <p className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t(s.label)}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title.en} delay={i * 60} className="surface-card p-6">
              <h3 className="text-base font-bold text-ink">{t(v.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(v.body)}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <Reveal className="ink-panel rounded-3xl p-8">
            <h2 className="text-2xl font-extrabold text-primary-foreground">
              {t({ ar: "رسالتنا", en: "Our mission" })}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              {t({
                ar: "أن يكون لكل نشاط تجاري في المنطقة متجر إلكتروني يعمل بكفاءة، بلغة عملائه، وبوسائل دفع وشحن موثوقة — دون تعقيد تقني على صاحب العمل.",
                en: "That every business in the region runs an online store that works properly, speaks its customers' language, and ships and collects money reliably — without pushing technical complexity onto the owner.",
              })}
            </p>
          </Reveal>
          <Reveal delay={80} className="surface-card p-8">
            <h2 className="text-2xl font-extrabold text-ink">
              {t({ ar: "بيانات التواصل", en: "Company details" })}
            </h2>
            <ul className="mt-5 space-y-4">
              {contactRows.map((row) => (
                <li key={row.value} className="flex items-start gap-3 text-sm text-ink-soft">
                  <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {row.href ? (
                    <a
                      href={row.href}
                      dir={row.ltr ? "ltr" : undefined}
                      className="break-all hover:text-accent"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span>{row.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <PlatformMarquee />

      <div className="py-20">
        <CtaBand />
      </div>
    </>
  );
}

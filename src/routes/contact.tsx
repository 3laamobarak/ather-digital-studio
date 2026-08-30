import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CtaBand, SectionHeading } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import { company, faqs } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ather — WhatsApp, Email & Office in Qena" },
      {
        name: "description",
        content:
          "Talk to Ather about your online store or business system. WhatsApp +20 106 813 4463, email 3laa.m0o0barak@gmail.com, open daily 8 AM to 10 PM.",
      },
      { property: "og:title", content: "Contact Ather" },
      {
        property: "og:description",
        content: "Reach Ather on WhatsApp or email and get a detailed proposal after a short call.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();

  const rows = [
    {
      icon: MessageCircle,
      label: t({ ar: "واتساب", en: "WhatsApp" }),
      value: company.phoneDisplay,
      href: company.whatsapp,
      ltr: true,
    },
    {
      icon: Phone,
      label: t({ ar: "الهاتف", en: "Phone" }),
      value: company.phoneDisplay,
      href: `tel:${company.phone}`,
      ltr: true,
    },
    {
      icon: Mail,
      label: t({ ar: "البريد الإلكتروني", en: "Email" }),
      value: company.email,
      href: `mailto:${company.email}`,
      ltr: true,
    },
    {
      icon: MapPin,
      label: t({ ar: "العنوان", en: "Address" }),
      value: t({ ar: company.addressAr, en: company.addressEn }),
    },
    {
      icon: Clock,
      label: t({ ar: "ساعات العمل", en: "Working hours" }),
      value: t({ ar: company.hoursAr, en: company.hoursEn }),
    },
  ];

  return (
    <>
      <section className="border-b border-border bg-[radial-gradient(70%_70%_at_50%_0%,var(--sand),transparent)] py-16">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow={t({ ar: "تواصل معنا", en: "Contact" })}
            title={t({
              ar: "احك لنا عن مشروعك ونرد عليك في نفس اليوم",
              en: "Tell us about your project and get a same‑day reply",
            })}
            body={t({
              ar: "أسرع طريقة هي واتساب. أرسل نشاطك والمنصة التي تفكر فيها وما تحتاجه، ونرسل لك خطة وعرض سعر مفصل.",
              en: "WhatsApp is the fastest route. Send your business, the platform you have in mind and what you need — we reply with a plan and a detailed quote.",
            })}
          />
        </div>
      </section>

      <div className="container-page grid gap-8 py-20 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="surface-card p-8">
          <h2 className="text-2xl font-extrabold text-ink">
            {t({ ar: "بيانات التواصل", en: "Contact details" })}
          </h2>
          <ul className="mt-6 space-y-5">
            {rows.map((row) => (
              <li key={row.label} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <row.icon className="h-4 w-4 text-accent-foreground" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      dir={row.ltr ? "ltr" : undefined}
                      className="mt-1 break-all text-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="mt-1 text-sm text-ink-soft">{row.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            {t({ ar: "ابدأ محادثة على واتساب", en: "Start a WhatsApp chat" })}
          </a>
        </Reveal>

        <Reveal delay={90} className="ink-panel rounded-3xl p-8">
          <h2 className="text-2xl font-extrabold text-primary-foreground">
            {t({ ar: "أسئلة متكررة", en: "Frequently asked" })}
          </h2>
          <div className="mt-6 divide-y divide-white/10">
            {faqs.map((f) => (
              <details key={f.q.en} className="group py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-primary-foreground">
                  {t(f.q)}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{t(f.a)}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="pb-20">
        <CtaBand />
      </div>
    </>
  );
}

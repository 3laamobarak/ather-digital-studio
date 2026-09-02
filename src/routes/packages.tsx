import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { CtaBand, SectionHeading } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import { company, packages, process, SITE_URL } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages — Launch, Growth, Business & Enterprise | Athr" },
      {
        name: "description",
        content:
          "Four Athr packages for online stores and custom systems: store setup, custom themes, integrations, mobile apps and ongoing support. Quotes on request.",
      },
      { property: "og:title", content: "Athr Packages" },
      {
        property: "og:description",
        content:
          "Launch, Growth, Business and Enterprise packages covering store builds, integrations, apps and support.",
      },
      { property: "og:url", content: `${SITE_URL}/packages` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/packages` }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="border-b border-border bg-[radial-gradient(70%_70%_at_50%_0%,var(--sand),transparent)] py-16">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow={t({ ar: "الباقات", en: "Packages" })}
            title={t({
              ar: "اختر نقطة البداية المناسبة لنشاطك",
              en: "Choose the starting point that fits your business",
            })}
            body={t({
              ar: "كل باقة تسعر حسب حجم العمل المطلوب، ونرسل لك عرضا مفصلا بعد مكالمة قصيرة.",
              en: "Each package is quoted by scope. After a short call we send you a detailed proposal.",
            })}
          />
        </div>
      </section>

      <div className="container-page py-20">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {packages.map((p, i) => (
            <Reveal
              key={p.name.en}
              delay={i * 70}
              as="article"
              className={cn(
                "flex flex-col p-7 transition-transform duration-500 hover:-translate-y-1",
                p.best ? "ink-panel rounded-2xl shadow-[var(--shadow-lift)]" : "surface-card",
              )}
            >
              {p.best && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground">
                  {t({ ar: "الأكثر طلبا", en: "Most popular" })}
                </span>
              )}
              <h2
                className={cn(
                  "text-xl font-extrabold",
                  p.best ? "text-primary-foreground" : "text-ink",
                )}
              >
                {t(p.name)}
              </h2>
              <p
                className={cn(
                  "mt-2 text-sm",
                  p.best ? "text-primary-foreground/70" : "text-muted-foreground",
                )}
              >
                {t(p.for)}
              </p>
              <div className={cn("my-6 h-px", p.best ? "bg-white/15" : "bg-border")} />
              <ul className="flex-1 space-y-3">
                {t(p.features).map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex gap-2.5 text-sm leading-relaxed",
                      p.best ? "text-primary-foreground/85" : "text-ink-soft",
                    )}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                  p.best ? "bg-accent text-accent-foreground" : "bg-ink text-primary-foreground",
                )}
              >
                <MessageCircle className="h-4 w-4" />
                {t({ ar: "اطلب عرض سعر", en: "Request a quote" })}
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow={t({ ar: "ما يحدث بعد الموافقة", en: "After you approve" })}
            title={t({
              ar: "تنفيذ على مراحل بموافقة في كل خطوة",
              en: "Staged delivery with sign‑off at every step",
            })}
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 60} as="li" className="surface-card p-6">
                <span className="font-display text-3xl font-extrabold text-accent/40">
                  {p.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{t(p.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(p.body)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>

      <div className="pb-20">
        <CtaBand />
      </div>
    </>
  );
}

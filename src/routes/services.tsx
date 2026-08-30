import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CtaBand, PlatformMarquee, SectionHeading } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Store Builds, Integrations & Apps | Ather" },
      {
        name: "description",
        content:
          "Store builds on Shopify, Salla, Zid and WordPress, custom themes, bulk product uploads, Zoho and carrier integrations, payments, currency converter and mobile apps.",
      },
      { property: "og:title", content: "Ather Services — Stores, Integrations & Apps" },
      {
        property: "og:description",
        content:
          "Domain and store setup, payments, Aramex and DHL shipping, Zoho Inventory and Mail, 300+ products, currency converter, mobile apps.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="border-b border-border bg-[radial-gradient(70%_70%_at_50%_0%,var(--sand),transparent)] py-16">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow={t({ ar: "الخدمات", en: "Services" })}
            title={t({
              ar: "خدمات مبنية على تنفيذ حقيقي",
              en: "Services shaped by real delivery work",
            })}
            body={t({
              ar: "لكل خدمة مخرجات واضحة تسلم وتختبر معك خطوة بخطوة.",
              en: "Each service has clear deliverables that are handed over and tested with you step by step.",
            })}
          />
        </div>
      </section>

      <div className="container-page space-y-16 py-20 sm:space-y-24">
        {services.map((s, i) => (
          <Reveal
            key={s.slug}
            as="article"
            className={cn(
              "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
              i % 2 === 1 && "lg:[&>figure]:order-2",
            )}
          >
            <figure className="relative">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-accent/10 blur-2xl" />
              <img
                src={s.image}
                alt={t(s.title)}
                loading="lazy"
                width={1024}
                height={700}
                className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-soft)]"
              />
            </figure>
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">{t(s.title)}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t(s.summary)}</p>
              <ul className="mt-6 space-y-3">
                {t(s.points).map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check className="h-3 w-3 text-accent-foreground" />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <PlatformMarquee />

      <div className="py-20">
        <CtaBand />
      </div>
    </>
  );
}

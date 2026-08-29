import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { company, platforms } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  center,
  invert,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <span className={cn("eyebrow", invert && "text-accent")}>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold leading-tight sm:text-4xl",
          invert ? "text-primary-foreground" : "text-ink",
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            invert ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}

export function PlatformMarquee() {
  const { t } = useI18n();
  const row = [...platforms, ...platforms];

  return (
    <section className="border-y border-border bg-card/60 py-10">
      <p className="container-page text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {t({
          ar: "نَعْمَل عَلَى الْمَنَصَّات وَالْأَنْظِمَة الَّتِي يَعْتَمِد عَلَيْهَا سُوقُك",
          en: "We work across the platforms and systems your market relies on",
        })}
      </p>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-12 px-6">
          {row.map((p, i) => (
            <li key={`${p.name}-${i}`} className="flex items-center gap-3 opacity-70">
              <img
                src={p.logo}
                alt={p.name}
                loading="lazy"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="text-sm font-bold text-ink-soft">{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useI18n();

  return (
    <section className="container-page">
      <Reveal className="surface-card relative overflow-hidden p-8 sm:p-12">
        <div className="absolute -end-16 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
              {t({
                ar: "جَاهِز نَبْدَأ مَتْجَرَك أَوْ نُطَوِّر مَا لَدَيْك؟",
                en: "Ready to launch your store or upgrade what you have?" ,
              })}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "أَرْسِلْ لَنَا تَفَاصِيل نَشَاطِك وَسَنَعُود إِلَيْك بِخُطَّة وَاضِحَة بِمَرَاحِل وَمُدَد.",
                en: "Send us your business details and we will reply with a clear staged plan and timeline.",
              })}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              {t({ ar: "وَاتْسَاب", en: "WhatsApp" })}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
            >
              {t({ ar: "صَفْحَة التَّوَاصُل", en: "Contact page" })}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function WhatsAppFab() {
  const { t } = useI18n();
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={t({ ar: "تَحَدَّثْ مَعَنَا عَلَى وَاتْسَاب", en: "Chat with us on WhatsApp" })}
      className="fixed bottom-5 end-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { company, nav } from "@/content/site";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="ink-panel mt-24">
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            {t({
              ar: "نَبْنِي مَتَاجِر إِلِكْتُرُونِيَّة وَأَنْظِمَة أَعْمَال تَعْمَل بِهُدُوء وَتَبِيع كُلَّ يَوْم.",
              en: "We build online stores and business systems that run quietly and sell every day.",
            })}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            {t({ ar: "الصَّفَحَات", en: "Pages" })}
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            {t({ ar: "تَوَاصَلْ مَعَنَا", en: "Contact" })}
          </h3>
          <ul className="mt-5 space-y-3.5 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${company.phone}`} dir="ltr" className="hover:text-accent">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} dir="ltr" className="break-all hover:text-accent">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{t({ ar: company.addressAr, en: company.addressEn })}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{t({ ar: company.hoursAr, en: company.hoursEn })}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {t({ ar: company.nameAr, en: company.nameEn })} —{" "}
            {t({ ar: "جَمِيع الْحُقُوق مَحْفُوظَة", en: "All rights reserved" })}
          </span>
          <span>{t({ ar: "قِنَا – مِصْر", en: "Qena — Egypt" })}</span>
        </div>
      </div>
    </footer>
  );
}

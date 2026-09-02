import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { company, nav } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, lang, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
              activeProps={{ className: "bg-secondary text-ink" }}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-border px-3 py-2 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-secondary"
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            {lang === "ar" ? "EN" : "ع"}
          </button>

          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            {t({ ar: "اطلب عرضك", en: "Get a quote" })}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
            aria-label={t({ ar: "القائمة", en: "Menu" })}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-base font-semibold text-ink last:border-0"
              >
                {t(item.label)}
              </Link>
            ))}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              {t({ ar: "تحدث معنا على واتساب", en: "Chat on WhatsApp" })}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

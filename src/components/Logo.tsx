import { Link } from "@tanstack/react-router";
import mark from "@/assets/ather-mark.png";
import { company } from "@/content/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  const { lang } = useI18n();

  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)} aria-label={company.nameEn}>
      <img
        src={mark}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 transition-transform duration-500 group-hover:-rotate-6"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-extrabold tracking-tight",
            invert ? "text-primary-foreground" : "text-ink",
          )}
        >
          {lang === "ar" ? company.nameAr : company.nameEn}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em]",
            invert ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {lang === "ar" ? company.taglineAr : company.taglineEn}
        </span>
      </span>
    </Link>
  );
}

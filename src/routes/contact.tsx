import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, MessageCircle, Paperclip, Send, X } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import { company, faqs, SITE_URL } from "@/content/site";
import { PhoneField } from "@/components/PhoneField";
import { sendContactEmail } from "@/lib/contact";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ather — WhatsApp, Email & Office in Qena" },
      {
        name: "description",
        content:
          "Talk to Ather about your online store or business system. WhatsApp +20 155 901 1073, email 3laa.m0o0barak@gmail.com, open daily 8 AM to 10 PM.",
      },
      { property: "og:title", content: "Contact Ather" },
      {
        property: "og:description",
        content: "Reach Ather on WhatsApp or email and get a detailed proposal after a short call.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactForm() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  // Bumped after a successful send to remount PhoneField / file input and clear them.
  const [phoneKey, setPhoneKey] = useState(0);
  const [file, setFile] = useState<
    { filename: string; mime: string; dataBase64: string; size: number } | null
  >(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const MAX_FILE_BYTES = 5 * 1024 * 1024;

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    setStatus("idle");
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      return;
    }
    if (f.size > MAX_FILE_BYTES) {
      setFile(null);
      e.target.value = "";
      setFileError(t({ ar: "الحد الأقصى لحجم الملف 5 ميجابايت.", en: "Maximum file size is 5 MB." }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const res = String(reader.result);
      const base64 = res.includes(",") ? res.slice(res.indexOf(",") + 1) : res;
      setFile({ filename: f.name, mime: f.type || "application/octet-stream", dataBase64: base64, size: f.size });
    };
    reader.onerror = () =>
      setFileError(t({ ar: "تعذر قراءة الملف، حاول مرة أخرى.", en: "Couldn't read the file, please try again." }));
    reader.readAsDataURL(f);
  };

  const clearFile = () => {
    setFile(null);
    setFileError(null);
  };

  const formatSize = (bytes: number) =>
    bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) => {
    setStatus("idle");
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const body = t({
    ar: `الاسم: ${form.name}\nالبريد الإلكتروني: ${form.email}\nرقم الهاتف: ${form.phone}\nالموضوع: ${form.subject}\n\nالتفاصيل:\n${form.message}`,
    en: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nDetails:\n${form.message}`,
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContactEmail({
        data: {
          ...form,
          lang,
          attachment: file
            ? { filename: file.filename, mime: file.mime, dataBase64: file.dataBase64 }
            : undefined,
        },
      });
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      clearFile();
      setPhoneKey((k) => k + 1);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  const field =
    "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";
  const label = "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground";

  return (
    <Reveal className="surface-card p-8">
      <form onSubmit={submit}>
      <h2 className="text-2xl font-extrabold text-ink">
        {t({ ar: "أرسل لنا تفاصيل مشروعك", en: "Send us your project details" })}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {t({
          ar: "املأ الحقول وسنستلم رسالتك على بريدنا ونرد عليك في نفس اليوم.",
          en: "Fill in the fields and your message reaches our inbox — we reply the same day.",
        })}
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            {t({ ar: "الاسم", en: "Full name" })}
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={set("name")}
            placeholder={t({ ar: "محمد أحمد", en: "Mohamed Ahmed" })}
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            {t({ ar: "رقم الهاتف مع كود الدولة", en: "Phone with country code" })}
          </label>
          <PhoneField
            key={phoneKey}
            id="phone"
            required
            onChange={(value) => {
              setStatus("idle");
              setForm((f) => ({ ...f, phone: value }));
            }}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="email">
          {t({ ar: "البريد الإلكتروني", en: "Email address" })}
        </label>
        <input
          id="email"
          required
          type="email"
          dir="ltr"
          value={form.email}
          onChange={set("email")}
          placeholder="you@example.com"
          className={field}
        />
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="subject">
          {t({ ar: "الموضوع", en: "Subject" })}
        </label>
        <input
          id="subject"
          required
          value={form.subject}
          onChange={set("subject")}
          placeholder={t({ ar: "متجر جديد على شوبيفاي", en: "New Shopify store" })}
          className={field}
        />
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">
          {t({ ar: "تفاصيل الطلب", en: "Description" })}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          placeholder={t({
            ar: "احك لنا عن نشاطك، المنصة، والخدمات التي تحتاجها.",
            en: "Tell us about your business, the platform and the services you need.",
          })}
          className={`${field} resize-y`}
        />
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="attachment">
          {t({ ar: "إرفاق ملف أو صورة (اختياري)", en: "Attach a file or image (optional)" })}
        </label>
        {!file ? (
          <label
            htmlFor="attachment"
            className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-ink"
          >
            <Paperclip className="h-4 w-4 shrink-0" />
            <span>{t({ ar: "اختر ملفا (بحد أقصى 5 ميجابايت)", en: "Choose a file (max 5 MB)" })}</span>
          </label>
        ) : (
          <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm">
            <span className="flex min-w-0 items-center gap-2 text-ink">
              <Paperclip className="h-4 w-4 shrink-0 text-accent-foreground" />
              <span className="truncate">{file.filename}</span>
              <span className="shrink-0 text-muted-foreground">({formatSize(file.size)})</span>
            </span>
            <button
              type="button"
              onClick={clearFile}
              aria-label={t({ ar: "إزالة الملف", en: "Remove file" })}
              className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        <input
          id="attachment"
          key={phoneKey}
          type="file"
          accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip"
          onChange={onFile}
          className="sr-only"
        />
        {fileError && <p className="mt-2 text-sm font-semibold text-red-700">{fileError}</p>}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {sending
            ? t({ ar: "جاري الإرسال…", en: "Sending…" })
            : t({ ar: "إرسال إلى بريدنا", en: "Send to our email" })}
        </button>
        <a
          href={`${company.whatsapp}?text=${encodeURIComponent(body)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
        >
          <MessageCircle className="h-4 w-4" />
          {t({ ar: "إرسال على واتساب", en: "Send on WhatsApp" })}
        </a>
      </div>

      {status === "sent" && (
        <p
          role="status"
          className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-700"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {t({
            ar: "تم إرسال رسالتك بنجاح، وسنرد عليك في نفس اليوم.",
            en: "Your message was sent — we'll reply the same day.",
          })}
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-700"
        >
          {t({
            ar: "تعذر إرسال الرسالة الآن. جرّب مرة أخرى أو راسلنا على واتساب.",
            en: "We couldn't send the message right now. Please try again or reach us on WhatsApp.",
          })}
        </p>
      )}
      </form>
    </Reveal>
  );
}

function ContactPage() {
  const { t } = useI18n();

  const rows = [
    {
      icon: MessageCircle,
      label: t({ ar: "الهاتف وواتساب", en: "Phone & WhatsApp" }),
      value: company.phoneDisplay,
      href: company.whatsapp,
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
              en: "Tell us about your project and get a same-day reply",
            })}
            body={t({
              ar: "املأ النموذج أو راسلنا على واتساب. أرسل نشاطك والمنصة التي تفكر فيها وما تحتاجه، ونرسل لك خطة وعرض سعر مفصل.",
              en: "Use the form or WhatsApp. Send your business, the platform you have in mind and what you need — we reply with a plan and a detailed quote.",
            })}
          />
        </div>
      </section>

      <div className="container-page grid gap-8 py-20 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <div className="space-y-8">
          <Reveal delay={90} className="surface-card p-8">
            <h2 className="text-xl font-extrabold text-ink">
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
          </Reveal>

          <Reveal delay={140} className="ink-panel rounded-3xl p-8">
            <h2 className="text-xl font-extrabold text-primary-foreground">
              {t({ ar: "أسئلة متكررة", en: "Frequently asked" })}
            </h2>
            <div className="mt-5 divide-y divide-white/10">
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
      </div>
    </>
  );
}

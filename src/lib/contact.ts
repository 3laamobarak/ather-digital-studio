import { createServerFn } from "@tanstack/react-start";
import nodemailer, { type Transporter } from "nodemailer";
import { z } from "zod";
import { company, SITE_URL } from "@/content/site";

// Brand assets/values reused across the emails (single source of truth).
// The logo is referenced by its hosted URL so it does NOT show up as a file
// attachment on the email. It loads once the site is deployed (public/athr-mark.png).
const LOGO_URL = `${SITE_URL}/athr-mark.png`;
const NAVY = "#1a2440";
const GOLD = "#d9a441";

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024; // 5 MB

// Validation runs on BOTH the client (before the request) and the server
// (inside the handler), so never trust the incoming payload without it.
const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(160),
  phone: z.string().trim().min(3, "Phone is required").max(40),
  subject: z.string().trim().min(1, "Subject is required").max(160),
  message: z.string().trim().min(1, "Message is required").max(5000),
  lang: z.enum(["ar", "en"]).default("en"),
  // Optional single file/image, sent from the client as base64 (no data: prefix).
  attachment: z
    .object({
      filename: z.string().trim().min(1).max(255),
      mime: z.string().trim().min(1).max(150),
      dataBase64: z.string().min(1),
    })
    .refine(
      (a) => Math.floor((a.dataBase64.length * 3) / 4) <= MAX_ATTACHMENT_BYTES,
      "Attachment exceeds the 5 MB limit",
    )
    .optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;

/**
 * Reads SMTP settings from environment variables so the Gmail app password
 * NEVER ends up in the client bundle or in git. In local dev these come from
 * `.env`; on Cloudflare/Wrangler they come from `.dev.vars` / dashboard secrets.
 */
function getSmtpConfig() {
  const host = process.env["SMTP_HOST"] ?? "smtp.gmail.com";
  const port = Number(process.env["SMTP_PORT"] ?? "587");
  const user = process.env["SMTP_USER"];
  const pass = process.env["SMTP_PASSWORD"];
  const displayName = process.env["SMTP_DISPLAY_NAME"] ?? "Athr Website";
  // Where the contact form lands. Defaults to the sending mailbox.
  const to = process.env["CONTACT_TO"] ?? user;

  if (!user || !pass) {
    throw new Error("Email is not configured on the server (missing SMTP_USER / SMTP_PASSWORD).");
  }

  return { host, port, user, pass, displayName, to: to as string };
}

function buildTransporter(): Transporter {
  const { host, port, user, pass } = getSmtpConfig();
  return nodemailer.createTransport({
    host,
    port,
    // Port 465 is implicit TLS; 587 upgrades via STARTTLS.
    secure: port === 465,
    auth: { user, pass },
  });
}

// Current date/time formatted in the Cairo timezone (Africa/Cairo).
function cairoNow(lang: "ar" | "en"): string {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-EG" : "en-GB", {
    timeZone: "Africa/Cairo",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const { displayName, to, user } = getSmtpConfig();
    const transporter = buildTransporter();

    const heading =
      data.lang === "ar" ? "طلب جديد من موقع أثر" : "New request from the Athr website";

    const rows: Array<[string, string]> = [
      [data.lang === "ar" ? "الاسم" : "Name", data.name],
      [data.lang === "ar" ? "البريد الإلكتروني" : "Email", data.email],
      [data.lang === "ar" ? "الهاتف" : "Phone", data.phone],
      [data.lang === "ar" ? "الموضوع" : "Subject", data.subject],
      [data.lang === "ar" ? "وقت الاستلام (القاهرة)" : "Received (Cairo)", cairoNow(data.lang)],
    ];

    const text = [
      heading,
      "",
      ...rows.map(([k, v]) => `${k}: ${v}`),
      "",
      `${data.lang === "ar" ? "التفاصيل" : "Details"}:`,
      data.message,
    ].join("\n");

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color:#1a2440;">
        <h2 style="margin:0 0 16px;">${escapeHtml(heading)}</h2>
        <table style="border-collapse:collapse; font-size:14px;">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:4px 12px 4px 0; color:#6b7280; font-weight:600;">${escapeHtml(
                  k,
                )}</td><td style="padding:4px 0;">${escapeHtml(v)}</td></tr>`,
            )
            .join("")}
        </table>
        <p style="margin:16px 0 4px; color:#6b7280; font-weight:600; font-size:14px;">
          ${escapeHtml(data.lang === "ar" ? "التفاصيل" : "Details")}
        </p>
        <p style="white-space:pre-wrap; font-size:14px; line-height:1.6; margin:0;">${escapeHtml(
          data.message,
        )}</p>
      </div>`;

    // 1) Notify Athr. replyTo is the visitor so a reply goes straight to them.
    // The visitor's optional upload is attached here.
    await transporter.sendMail({
      from: `"${displayName}" <${user}>`,
      to,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `[Athr] ${data.subject}`,
      text,
      html,
      attachments: data.attachment
        ? [
            {
              filename: data.attachment.filename,
              content: Buffer.from(data.attachment.dataBase64, "base64"),
              contentType: data.attachment.mime,
            },
          ]
        : undefined,
    });

    // 2) Auto-reply thank-you to the visitor. A failure here must NOT fail the
    // whole request — the important message (to Athr) already went out.
    try {
      await transporter.sendMail({
        from: `"${displayName}" <${user}>`,
        to: `"${data.name}" <${data.email}>`,
        replyTo: `"${displayName}" <${to}>`,
        subject: data.lang === "ar" ? "شكرا لتواصلك مع أثر" : "Thanks for contacting Athr",
        text: buildThankYouText(data.name, data.lang),
        html: buildThankYouHtml(data.name, data.lang, LOGO_URL),
      });
    } catch (autoReplyError) {
      console.error("Contact auto-reply failed:", autoReplyError);
    }

    return { ok: true as const };
  });

function buildThankYouText(name: string, lang: "ar" | "en"): string {
  if (lang === "ar") {
    return [
      `مرحبا ${name},`,
      "",
      "شكرا لاختيارك أثر وتواصلك معنا. لقد استلمنا رسالتك، وسيتواصل معك فريقنا خلال ساعتين كحد أقصى خلال ساعات العمل (يوميا من 8 صباحا حتى 10 مساء).",
      "",
      `إذا كان طلبك عاجلا، راسلنا مباشرة على واتساب: ${company.whatsapp}`,
      "",
      "تحياتنا،",
      "فريق أثر للحلول البرمجية",
    ].join("\n");
  }
  return [
    `Hi ${name},`,
    "",
    "Thanks for choosing Athr and reaching out. We've received your message and our team will contact you within 2 hours maximum during working hours (daily, 8:00 AM – 10:00 PM).",
    "",
    `If it's urgent, message us directly on WhatsApp: ${company.whatsapp}`,
    "",
    "Best regards,",
    "The Athr Software Solutions team",
  ].join("\n");
}

function buildThankYouHtml(name: string, lang: "ar" | "en", logoSrc: string): string {
  const dir = lang === "ar" ? "rtl" : "ltr";
  const align = lang === "ar" ? "right" : "left";
  const safeName = escapeHtml(name);
  const c =
    lang === "ar"
      ? {
          tagline: "للحلول البرمجية",
          hi: `مرحبا ${safeName}،`,
          p1: "شكرا لاختيارك <strong>أثر</strong> وتواصلك معنا. لقد استلمنا رسالتك بنجاح.",
          badge: "سيتواصل معك فريقنا خلال ساعتين كحد أقصى",
          hours: "خلال ساعات العمل: يوميا من 8 صباحا حتى 10 مساء",
          p2: "إذا كان طلبك عاجلا، يمكنك مراسلتنا مباشرة على واتساب:",
          cta: "تواصل على واتساب",
          sign: "تحياتنا،<br>فريق أثر للحلول البرمجية",
          footEmail: "البريد",
          footPhone: "الهاتف",
        }
      : {
          tagline: "Software Solutions",
          hi: `Hi ${safeName},`,
          p1: "Thanks for choosing <strong>Athr</strong> and reaching out. We've received your message successfully.",
          badge: "Our team will contact you within 2 hours maximum",
          hours: "During working hours: daily, 8:00 AM – 10:00 PM",
          p2: "If it's urgent, message us directly on WhatsApp:",
          cta: "Chat on WhatsApp",
          sign: "Best regards,<br>The Athr Software Solutions team",
          footEmail: "Email",
          footPhone: "Phone",
        };

  return `
  <div style="margin:0; padding:0; background:#f4f5f7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7; padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" dir="${dir}"
                 style="width:600px; max-width:100%; background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e6e8ec; font-family:'Segoe UI',system-ui,-apple-system,Roboto,Arial,sans-serif;">
            <!-- Header -->
            <tr>
              <td style="background:${NAVY}; padding:28px 32px;" align="${align}">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-${lang === "ar" ? "left" : "right"}:14px; vertical-align:middle;">
                      <img src="${logoSrc}" width="52" height="52" alt="Athr"
                           style="display:block; width:52px; height:52px; border:0;" />
                    </td>
                    <td style="vertical-align:middle;">
                      <div style="color:#ffffff; font-size:24px; font-weight:800; letter-spacing:0.5px; line-height:1;">
                        ${lang === "ar" ? "أَثَر" : "Athr"}
                      </div>
                      <div style="color:${GOLD}; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:2px; margin-top:6px;">
                        ${c.tagline}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Gold divider -->
            <tr><td style="height:4px; background:${GOLD};"></td></tr>
            <!-- Body -->
            <tr>
              <td style="padding:32px;" align="${align}">
                <h1 style="margin:0 0 14px; font-size:22px; color:${NAVY};">${c.hi}</h1>
                <p style="margin:0 0 22px; font-size:15px; line-height:1.7; color:#3a4256;">${c.p1}</p>

                <!-- Highlighted 2-hour callout -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                       style="background:#fbf5e9; border:1px solid ${GOLD}; border-radius:12px; margin:0 0 24px;">
                  <tr>
                    <td style="padding:16px 18px;" align="${align}">
                      <div style="font-size:15px; font-weight:700; color:${NAVY};">⏱ ${c.badge}</div>
                      <div style="font-size:13px; color:#6b7280; margin-top:6px;">${c.hours}</div>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#3a4256;">${c.p2}</p>

                <!-- WhatsApp CTA -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 8px;">
                  <tr>
                    <td style="border-radius:999px; background:#25D366;">
                      <a href="${company.whatsapp}"
                         style="display:inline-block; padding:13px 28px; font-size:15px; font-weight:700; color:#ffffff; text-decoration:none; border-radius:999px;">
                        ${c.cta}
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:28px 0 0; font-size:14px; line-height:1.7; color:#6b7280;">${c.sign}</p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background:#f7f8fa; border-top:1px solid #e6e8ec; padding:20px 32px;" align="${align}">
                <div style="font-size:13px; color:#6b7280; line-height:1.9;">
                  <span style="color:${NAVY}; font-weight:600;">${c.footEmail}:</span>
                  <a href="mailto:${company.email}" style="color:${NAVY}; text-decoration:none;">${company.email}</a><br>
                  <span style="color:${NAVY}; font-weight:600;">${c.footPhone}:</span>
                  <span dir="ltr">${company.phoneDisplay}</span>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>`;
}

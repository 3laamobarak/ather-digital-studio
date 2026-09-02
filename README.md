# Athr — E‑commerce & Software Solutions

Bilingual (Arabic / English) marketing website for **Athr**, a software and
digital studio based in Qena, Egypt. Athr builds and scales online stores and
handles the marketing around them — from store setup and integrations to social
media, advertising and video.

**Live site:** https://ather-digital-studio.lovable.app

## Features

- **Bilingual, RTL‑first** — Arabic and English with automatic language detection
  and full right‑to‑left support.
- **12 services** — store builds, storefront design, product & inventory setup,
  Zoho integration, shipping, payments, mobile apps, SEO, social media,
  advertising, brand design and video production.
- **Working contact form** — sends real email over SMTP and auto‑replies to the
  visitor with a branded, bilingual "thank you" message (see below).
- **SEO‑ready** — per‑page metadata, Open Graph, canonical URLs, JSON‑LD
  structured data, `robots.txt` and `sitemap.xml`.
- **Fast & responsive** — server‑side rendered, animated on scroll, tuned for
  performance on mobile and desktop.

## Getting started

Requires [Node.js](https://nodejs.org) (or [Bun](https://bun.sh)).

```sh
git clone https://github.com/3laamobarak/ather-digital-studio.git
cd ather-digital-studio
npm install     # or: bun install
npm run dev     # or: bun run dev
```

The dev server runs at http://localhost:8080.

## Contact form email (SMTP)

The contact form (`/contact`) submits to a server function
(`src/lib/contact.ts`) that sends email over SMTP with `nodemailer`. Credentials
live in environment variables and never reach the browser.

1. Copy `.env.example` to `.env` and fill in your Gmail address and a Gmail
   **App Password** — create one at https://myaccount.google.com/apppasswords
   (2‑Step Verification must be on; a normal account password is rejected with
   `535 BadCredentials`).
2. Run `npm run dev`. On each submit two emails go out:
   - a **notification** to `CONTACT_TO` (reply‑to set to the visitor, with any
     uploaded file attached), and
   - an automatic bilingual **"thank you"** reply to the visitor.

> **Deployment note:** `nodemailer` needs a Node runtime. On the Cloudflare
> Workers runtime it builds but cannot open SMTP connections — switch the sender
> to an HTTP email API (e.g. [Resend](https://resend.com)) in the same server
> function. Local dev (`.env`) and any Node host work as‑is; Wrangler dev reads
> `.dev.vars`.

## Environment variables

| Variable            | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `SMTP_HOST`         | SMTP server (default `smtp.gmail.com`)              |
| `SMTP_PORT`         | SMTP port (default `587`)                           |
| `SMTP_USER`         | Sending email address                               |
| `SMTP_PASSWORD`     | Gmail App Password                                  |
| `SMTP_DISPLAY_NAME` | Sender display name                                 |
| `CONTACT_TO`        | Inbox that receives messages (defaults to the user) |
| `VITE_SITE_URL`     | Absolute site URL for SEO / canonical (optional)    |

`.env` and `.dev.vars` are gitignored — never commit real credentials.

## Project structure

```
src/
  content/site.ts     Company info, services, packages, platforms (single source of truth)
  routes/             Pages: index, services, packages, about, contact
  components/          Header, footer, phone field, shared UI
  lib/contact.ts       Contact-form server function (SMTP + auto-reply)
public/                Logo, OG image, robots.txt, sitemap.xml
```

## SEO

- Per‑page `<title>`, meta description, Open Graph and canonical tags (each
  route's `head()` and `src/routes/__root.tsx`).
- `ProfessionalService` JSON‑LD (name, Qena address, phone, hours) plus a
  services `ItemList`.
- `public/robots.txt` and `public/sitemap.xml`.
- Absolute URLs come from `SITE_URL` in `src/content/site.ts` (override with the
  `VITE_SITE_URL` env var). Keep it in sync with `robots.txt` and `sitemap.xml`
  if you connect a custom domain.

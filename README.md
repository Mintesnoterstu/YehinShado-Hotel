# Yehin Shado Hotel

Production website for **Yehin Shado Hotel** — rooms, spa, restaurant and bar in Jemo 1, Addis Ababa. Bookings go through WhatsApp. English and Amharic. Dark theme by default.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- Custom i18n (`/messages/en.json`, `/messages/am.json`)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/rooms` | Standard single & double rooms |
| `/spa` | Moroccan bath, sauna, steam, massage |
| `/dining` | Restaurant & bar |
| `/contact` | Form → WhatsApp, map, hours |

Every **Book Now / Reserve** control opens `https://wa.me/251904222223` with a section-specific message.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: **Next.js**. No extra env vars required.
4. Deploy. Media files live in `/public` and ship with the build.

Optional: set the production domain, then update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts` / `app/robots.ts`.

## Notes

- Theme persists via `next-themes` (default: dark).
- Language persists in `localStorage` as `yehin-shado-lang`.
- Images and videos are the real files under `/public/images` and `/public/videos`. Filenames with spaces are encoded at render time.

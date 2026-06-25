# Rodriguez Roofing LLC — marketing site

The primary web presence for **Rodriguez Roofing LLC**, built with Astro 6 +
TypeScript (strict) + Tailwind CSS v4. It gets the business found on Google, shows
the services they actually offer, surfaces honest trust signals, and captures
free-quote requests.

Content and photos are drawn from the business's own Facebook page and branded
cover/promo graphics (June 2026). It uses the navy + sky-blue brand palette and the
real logo cropped from their cover graphic (nav + footer).

> **New business, honest content.** Rodriguez Roofing is a new business (~47
> Facebook followers, **0 reviews**). The site deliberately does **not** invent
> years-in-business, review counts, star ratings, testimonials, license numbers,
> warranty terms, or operating hours. A few owner-supplied facts remain to be
> confirmed — see the checklist below (`// CONFIRM` in `src/data/site.ts`).

## Run it

```bash
npm install
npm run build     # static build into dist/
npm run dev       # local dev server
npm run preview   # preview the production build
```

## Stack

- Astro 6, TypeScript (strict), Tailwind CSS v4 (`@theme` tokens in `src/styles/global.css`).
- `src/data/site.ts` is the **single source of truth** for all copy.
- One `.astro` component per section in `src/components/`; single page at `src/pages/index.astro`.
- Real Facebook photos in `src/assets/` (`fb00.jpg`–`fb11.jpg`). See `src/assets/README.md`.

## Sections

Hero (real crew photo) · Services grid (their stated list) · Captioned project
gallery (real photos, stage-labeled) · Financing & insurance-claims info · Why-us
trust signals + an honest "reviews coming soon" block · Request-a-quote form ·
Service area + map · Footer · Sticky mobile call/quote bar.

---

## Real, verified content (the business's own)

- **Name:** Rodriguez Roofing LLC.
- **Tagline:** "Need a New Roof or Repair? We've Got You Covered!" (their cover graphic).
- **Phone:** (803) 288-7569 · **Email:** isaiasmejiarodriguez@gmail.com.
- **Home base:** Lancaster, SC (no published street address — schema uses locality only).
- **Service area:** Lancaster & Pageland SC, Monroe & Greenville NC, Charleston SC.
- **Bilingual:** English & Spanish ("Se habla español").
- **Services:** roof replacement (lead), repair, new installation, leak detection,
  storm/wind/hail damage, free inspections, gutter installation, maintenance, and
  commercial roofing (residential & commercial).
- **Stated offers:** free roof inspections, affordable financing, 100% satisfaction
  guaranteed, "licensed team" using "top-quality materials."

## Still to confirm before launch (`// CONFIRM`)

- [ ] **License number(s)** and issuing state(s). The site says "licensed team" (their
      own claim) but **publishes no license number** until provided.
- [ ] **Insurance** (general liability / workers' comp) — not asserted as fact yet.
- [ ] **Financing partner** specifics — "affordable financing" is advertised; partner
      details are unconfirmed.
- [ ] **Commercial roofing systems** (TPO, modified bitumen, etc.) — offered generally;
      specific systems not stated.
- [ ] **Operating hours** — none published, so the site says "Call for hours" rather
      than inventing a schedule.
- [ ] **Photo usage rights** — owner-posted Facebook photos are in use; get the owner's
      written OK before launch.
- [ ] **Real domain** — set in `astro.config.mjs` → `site` (currently a placeholder
      `.example` domain) so Open Graph + structured-data URLs are correct.
- [ ] **Reviews** — none yet (0 on Facebook). The site shows an honest "reviews coming
      soon / ask us for references" block; **no fabricated testimonials**.
- [ ] **Google Business Profile** — claim/verify so the site + Maps reinforce each other.

## Mocked / non-functional

- **Request-a-quote form** — validates client-side, then shows a notice directing
  visitors to **call or email** (online submissions aren't wired yet). Connect it to
  email/SMS or a form service (e.g. Formspree) before relying on it.
- **Click-to-call / mailto** use the real phone and email above.
- **Before/After slider was removed** in favor of an honest captioned gallery — photos
  are labeled by stage (On the job / During / Finished) and are different projects, not
  a single roof's before-and-after.

## SEO / schema

`Layout.astro` emits `RoofingContractor` JSON-LD: real name, phone, email, locality
(Lancaster, SC — no fabricated street address), `areaServed` for all five cities, and
`knowsLanguage` = English, Spanish. Opening hours are omitted (not published). The
OG/social image is the branded cover banner (`public/og-image.jpg`).

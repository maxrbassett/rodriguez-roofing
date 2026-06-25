# Claude Code prompt — Rodriguez Roofing LLC website build-out

Paste everything below the line into Claude Code, run from the project root
(`rodriguez-roofing/`). It turns the current placeholder proof-of-concept into a
real, trustworthy contractor site built from the business's actual details and
photos.

All facts below were verified from the business's own Facebook page
(facebook.com/p/Rodriguez-Roofing-LLC-61582874124809) and its branded cover/promo
graphics, June 2026. Treat them as the new source of truth and replace the
`// POC` / `// CONFIRM` placeholders in `src/data/site.ts`. Real photos from the
page have been saved to `src/assets/` as `fb00.jpg`–`fb11.jpg`.

---

## GOAL

Replace the unverified placeholder content with the real business information and
real project photos, so the site can serve as Rodriguez Roofing's primary web
presence. Keep the existing Astro architecture, components, design system, and
the honest, safety-forward tone. This is a content + imagery overhaul, not a
rebuild. Keep the trustworthy structure (services, our work, financing/insurance,
why-us, service area, free-quote form).

**Honesty guardrails (important):** this is a NEW business — the Facebook page has
only ~47 followers and **0 reviews**. Do **not** invent years-in-business, review
counts, star ratings, fake testimonials, license numbers, or warranty terms.
Where the business hasn't stated something, leave it out or keep a clearly labeled
`// CONFIRM`. Only claim what the business itself claims (see below).

---

## 1. CORRECT THE CORE FACTS (`src/data/site.ts`)

**Identity & brand**
- Name: **Rodriguez Roofing LLC**
- Tagline (their real one, from the cover graphic): **"Need a New Roof or Repair?
  We've Got You Covered!"** Use this (or adapt) for the hero instead of "Roofing
  Done Right. Built to Last."
- Logo: a navy + light-blue **two-house / rooflines mark** with "RODRIGUEZ ROOFING
  LLC" wordmark — see `fb00.jpg` (cover) and `fb11.jpg` (promo). Recreate the
  favicon/nav logo in that palette, or extract/crop the logo from those graphics.
- **Bilingual:** the business serves customers in **English and Spanish.** Surface
  this as a trust/accessibility signal (e.g. "Se habla español"). Consider making
  the site genuinely bilingual, or at least add that line.

**Contact (replace the demo placeholders)**
- Phone: **(803) 288-7569** (tel: `+18032887569`). Remove the
  `phoneDisplayNote`/"demo number" warnings.
- Email: **isaiasmejiarodriguez@gmail.com** (replace the `.example` placeholder).
- Base / location: **Lancaster, SC** (this is their home base — the prototype left
  HQ unconfirmed; it's Lancaster, SC). A specific street address isn't published,
  so keep the schema without a street address but DO set the locality to Lancaster,
  SC.

**Service area** (from their page + branding — broader than the prototype's three)
- Primary: **Lancaster, SC** and **Monroe, NC**
- Also listed: **Pageland, SC · Greenville, NC · Charleston, SC**
- Update `serviceAreas`, `serviceAreaLine`, and the map embed to reflect the
  Lancaster, SC ↔ Monroe, NC core plus the other listed cities. (These cover a
  wide SC/NC stretch — present it as "serving the Carolinas: Lancaster & Pageland
  SC, Monroe & Greenville NC, and Charleston SC.")

**Hours:** the business has not published hours. Either remove the hours block or
keep it clearly labeled "Call for hours" rather than showing the invented
7am–6pm schedule as fact. Update/justify `openingHoursSpec` accordingly (omit if
unconfirmed).

---

## 2. SERVICES (`services`) — use their real, stated list

From their Facebook "about" and posts, they provide **residential and commercial
roofing**:
- **Roof replacement** (their lead offering — "Roof Replacement Experts You Can
  Trust"; replaces aged/weathered roofs with quality materials)
- **Roof repair** ("Fast and Reliable Roof Repairs" — leak detection & patching)
- **Roof installation** (new roofs)
- **Leak detection**
- **Storm, wind & hail damage repair / restoration** (stated in posts)
- **Roof inspections** (they offer **free roof inspections**)
- **Gutter installation**
- **Roof maintenance**

Keep these accurate. Commercial roofing IS offered (their about says "residential
and commercial"), but they haven't specified systems (TPO/modified bitumen, etc.) —
so describe commercial generally and drop the invented system names, or mark
`// CONFIRM specific commercial systems`.

**Stated offers/claims to feature (these are the business's own words):**
- ✅ Free roof inspections / free estimates
- ✅ Affordable financing options
- ✅ 100% satisfaction guaranteed
- "Licensed team" using "top-quality materials" (they call themselves licensed —
  fine to state "licensed"; mark insurance/license # as `// CONFIRM`).

---

## 3. USE THE REAL PHOTOS (`src/assets/fb00.jpg`–`fb11.jpg`)

Replace the placeholder SVGs (`hero-placeholder.svg`, the before/after SVGs) with
the real photos. Identified inventory:

**Branding graphics:**
- `fb00.jpg` — **cover banner** with the logo, tagline, Lancaster SC / Monroe NC,
  phone, and email. Source for the **logo** and a strong hero/CTA band.
- `fb11.jpg` — vertical **"Roofing Company" promo** (logo, Greenville NC /
  Lancaster SC, phone, "Call Now"). Good for a CTA card or social/OG image.

**Real job photos (use for hero, services, and the "Our Work" gallery):**
- `fb01.jpg` — **crew working on a roof** under blue sky (great hero / "real
  people, real work" shot). Reinforces the safety-forward angle.
- `fb04.jpg`, `fb05.jpg` — **new wood roof decking exposed** during a tear-off
  (shows proper re-decking / thorough work).
- `fb06.jpg`, `fb07.jpg` — **tear-off in progress** with synthetic underlayment &
  tools (process shots; pair as "during").
- `fb02.jpg`, `fb03.jpg`, `fb10.jpg` — **new/finished gray architectural shingles**
  (close-up texture + finished slopes).
- `fb08.jpg` — **finished roof with brick chimney**, residential (clean "after").
- `fb09.jpg` — **large finished shingle roof**, neighborhood context.

**Before/After:** the current slider expects before/after pairs. You can build an
honest "process" sequence instead — e.g. tear-off/decking (`fb04`/`fb07`) →
finished (`fb08`/`fb10`) — but **don't label two unrelated photos as the same
project's before & after** unless that's true. Prefer a captioned gallery or a
"During → After" framing. Update `beforeAfter`/`galleryCaption` data accordingly,
with accurate, generic alt text (don't assert a specific address/customer).

**Technical:** use Astro `<Image>` (astro:assets) for optimization, set
width/height, lazy-load below-the-fold, eager + `fetchpriority="high"` on the hero,
and write specific alt text ("Rodriguez Roofing crew installing shingles on a
residential roof," etc.). Keep imagery data-driven in `site.ts` where practical.

---

## 4. TRUST / REVIEWS / FINANCING — keep honest

- **Reviews:** the page has 0 reviews. Remove the placeholder testimonials section
  or replace it with a neutral "Reviews coming soon — ask us for references" block.
  Do not render fake testimonials.
- **Financing & insurance-claims** section: keep it (they advertise "affordable
  financing options" and storm/insurance work), but keep the existing honest
  disclaimer that they're a roofing contractor, not a public adjuster/insurer.
  Mark financing-partner specifics as `// CONFIRM`.
- **Why Us / trust points:** lead with what's real and verifiable — bilingual
  (English/Spanish), free inspections, financing, 100% satisfaction guarantee,
  storm/hail experience, local (Lancaster, SC). Keep "licensed & insured" but
  mark `// CONFIRM` until the owner provides the license number and insurance
  details; do not publish a fabricated license number.

---

## 5. VISUAL THEME

Match their branding: a clean, professional **navy + sky-blue** palette (from the
logo/graphics) on white, with strong contrast and big, obvious **"Call (803)
288-7569"** and **"Get a Free Quote"** CTAs. Mobile-first; keep the sticky mobile
call bar and wire it to the real number. Roofing customers act on trust + ease of
contact, so prioritize phone, service area, free-inspection offer, and the quote
form above the fold.

---

## 6. SEO / SCHEMA

Update `seo` and the LocalBusiness/RoofingContractor JSON-LD: real name, real
phone, real email, locality **Lancaster, SC** (no fabricated street address),
`areaServed` = Lancaster & Pageland SC, Monroe & Greenville NC, Charleston SC;
`knowsLanguage` = English, Spanish; services list above. Title e.g.
*"Rodriguez Roofing LLC | Roof Replacement, Repair & Storm Damage — Lancaster,
SC & Monroe, NC."* Use `fb00.jpg` or `fb11.jpg` for the OG/social image.

---

## CONSTRAINTS
- Keep the Astro architecture and ensure `npm run build` passes.
- Single source of truth stays `src/data/site.ts`.
- Do not invent reviews, ratings, years in business, license numbers, warranty
  terms, or hours. Leave `// CONFIRM` where the business hasn't stated something.
- Confirm photo usage rights with the owner before launch (note in README).
- Keep the safety-forward, no-pressure, trustworthy tone.

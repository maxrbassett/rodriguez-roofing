/**
 * Single source of truth for site copy — Rodriguez Roofing LLC.
 *
 * Content has been updated from the business's own Facebook page and branded
 * cover/promo graphics (facebook.com/p/Rodriguez-Roofing-LLC-61582874124809,
 * June 2026). Identity, contact, service area, services, and stated offers are
 * the business's own. This is a NEW business (~47 followers, 0 reviews), so we
 * deliberately do NOT claim years-in-business, review counts, star ratings,
 * testimonials, license numbers, or warranty terms. Values the owner still
 * needs to supply are marked `// CONFIRM`. Do not publish a fabricated fact in
 * place of a `// CONFIRM`. See README.md.
 */

// --- Identity ------------------------------------------------------------------
export const name = 'Rodriguez Roofing LLC';
export const shortName = 'Rodriguez Roofing';

// Their real tagline, from the cover graphic.
export const heroTagline = "Need a New Roof or Repair? We've Got You Covered!";
export const heroSubhead =
  'Residential & commercial roofing — replacement, repair, and storm damage, done right. Free inspections, financing, and 100% satisfaction guaranteed.';

// Short, single-line area label for the hero overlay (the full list lives in the
// Service Area section).
export const heroAreaLine = 'Lancaster, SC · Serving the Carolinas';

export const trustLine =
  'Free roof inspections • Affordable financing • 100% satisfaction guaranteed • Se habla español';

// --- Navigation ----------------------------------------------------------------
export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Financing', href: '#financing' },
  { label: 'Why Us', href: '#trust' },
  { label: 'Service Area', href: '#area' },
  { label: 'Get a Quote', href: '#quote' },
];

// --- Contact / location --------------------------------------------------------
export const phone = '(803) 288-7569';
export const phoneTel = '+18032887569';

export const email = 'isaiasmejiarodriguez@gmail.com';

// Home base. No specific street address is published, so the schema keeps the
// locality (Lancaster, SC) without a street address.
export const baseCity = 'Lancaster';
export const baseState = 'SC';
export const baseLine = 'Based in Lancaster, SC';

// Bilingual service is a real, owner-stated accessibility/trust signal.
export const languagesNote = 'Se habla español';

// Service area per their page + branding — a wide SC/NC stretch.
export const serviceAreas = [
  { city: 'Lancaster', state: 'SC' },
  { city: 'Pageland', state: 'SC' },
  { city: 'Monroe', state: 'NC' },
  { city: 'Greenville', state: 'NC' },
  { city: 'Charleston', state: 'SC' },
];
export const serviceAreaLine =
  'Serving the Carolinas — Lancaster & Pageland, SC · Monroe & Greenville, NC · Charleston, SC';

// Keyless Google Maps embed centered on the home base. Static `&output=embed`
// form needs no API key.
export const mapEmbedUrl =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('Lancaster, SC') +
  '&z=7&output=embed';

// Reference only — not linked in copy (no social-media comparison in copy).
export const facebookPageId = '61582874124809';

// --- Hours ---------------------------------------------------------------------
// The business has not published operating hours, so we don't invent a schedule.
export const hoursNote = 'Call for hours';

// --- Hero trust badges ---------------------------------------------------------
// All from the business's own claims.
export const heroBadges = [
  'Free roof inspections',
  'Affordable financing',
  '100% satisfaction guaranteed',
  'Se habla español',
];

// --- Services ------------------------------------------------------------------
// Their real, stated list (residential and commercial roofing).
export const services = [
  {
    icon: 'shingle',
    title: 'Roof Replacement',
    blurb:
      'Our lead service — full tear-off and re-roof with top-quality materials. Clean install, clean site, built to last.',
  },
  {
    icon: 'wrench',
    title: 'Roof Repair',
    blurb:
      'Fast, reliable repairs for leaks, missing shingles, and flashing — diagnosed and fixed right the first time.',
  },
  {
    icon: 'hammer',
    title: 'New Roof Installation',
    blurb:
      'New roofs for new builds, additions, and replacements — installed to spec with quality materials.',
  },
  {
    icon: 'drop',
    title: 'Leak Detection',
    blurb:
      'We track down the real source of a leak — not just the stain — and stop water before it does more damage.',
  },
  {
    icon: 'storm',
    title: 'Storm, Wind & Hail Damage',
    blurb:
      'Damage assessment, repair, and restoration after a storm — with help documenting the loss for your insurer.',
  },
  {
    icon: 'search',
    title: 'Free Roof Inspections',
    blurb:
      'No-pressure inspections at no cost — know the real condition of your roof before you buy, sell, or file a claim.',
  },
  {
    icon: 'gutter',
    title: 'Gutter Installation',
    blurb:
      'Gutter installation to move water away from your roof, walls, and foundation and protect your home.',
  },
  {
    icon: 'maintenance',
    title: 'Roof Maintenance',
    blurb:
      'Routine maintenance and minor fixes that add years to your roof and head off bigger problems.',
  },
  {
    icon: 'building',
    title: 'Commercial Roofing',
    blurb:
      'Roofing for businesses as well as homes. Tell us about your building and we’ll recommend the right approach.', // CONFIRM specific commercial systems
  },
];

// --- Project gallery -----------------------------------------------------------
export const galleryCaption =
  'Real photos from our jobs — tear-offs, fresh decking, underlayment, and finished roofs. ' +
  'Each photo is labeled by stage; these are different projects, not a single before-and-after.';

// Captioned gallery of real Facebook job photos. Images are imported and keyed
// by `id` in Gallery.astro. `stage` is an honest per-photo label (not a paired
// before/after of one project). Alt text is specific but does not assert a
// particular address or customer.
export const gallery = [
  {
    id: 'fb01',
    stage: 'On the job',
    caption: 'Our crew at work',
    alt: 'Rodriguez Roofing crew working on a roof tear-off on a brick home under a clear blue sky',
  },
  {
    id: 'fb06',
    stage: 'During',
    caption: 'Tear-off in progress',
    alt: 'Old weathered shingles being stripped, with new shingle bundles staged on the roof slope',
  },
  {
    id: 'fb04',
    stage: 'During',
    caption: 'Fresh roof decking',
    alt: 'New wood roof decking exposed during a tear-off, ready for underlayment',
  },
  {
    id: 'fb07',
    stage: 'During',
    caption: 'Underlayment down, shingles staged',
    alt: 'Synthetic roofing underlayment installed across a roof with new shingle bundles staged for installation',
  },
  {
    id: 'fb08',
    stage: 'Finished',
    caption: 'Finished roof with chimney',
    alt: 'Finished gray architectural shingle roof with flashing around a brick chimney',
  },
  {
    id: 'fb10',
    stage: 'Finished',
    caption: 'Clean finished ridge',
    alt: 'Finished gray architectural shingles with a clean ridge cap and roof vent',
  },
  {
    id: 'fb09',
    stage: 'Finished',
    caption: 'A completed re-roof',
    alt: 'Large finished gray architectural shingle roof over a residential home',
  },
  {
    id: 'fb03',
    stage: 'Finished',
    caption: 'Architectural shingles, up close',
    alt: 'Finished dark architectural shingle roof on a residential home in the late afternoon',
  },
];

// --- Financing & insurance claims ----------------------------------------------
export const financing = {
  heading: 'Financing & insurance claims',
  blurb:
    'A new roof is a big decision. We offer affordable financing options to make it manageable, and we help take the headache out of storm-damage insurance claims.',
  financingPoints: [
    { title: 'Affordable financing', body: 'Flexible payment options to fit your budget.' }, // CONFIRM financing partner specifics
    { title: 'Free inspection & estimate', body: 'A free roof inspection and a clear estimate up front — no surprises, no pressure.' },
    { title: '100% satisfaction guaranteed', body: 'We stand behind our work and aren’t done until you’re satisfied.' },
  ],
  claimSteps: [
    { step: '1', title: 'Free damage inspection', body: 'We document the condition of your roof with photos and notes after a storm.' },
    { step: '2', title: 'File with your insurer', body: 'We help you understand the claim and provide the documentation adjusters look for.' },
    { step: '3', title: 'Meet the adjuster', body: 'We can be on-site with your adjuster to make sure nothing is missed.' },
    { step: '4', title: 'Quality repair or replacement', body: 'Once approved, we complete the work with top-quality materials.' },
  ],
  disclaimer:
    'We are a roofing contractor, not a public adjuster or insurer. We help document and coordinate; the claim decision rests with your insurance company.',
};

// --- Trust signals -------------------------------------------------------------
// Lead with what's real and verifiable. "Licensed" is the business's own claim;
// insurance details and a license number are CONFIRM until the owner supplies
// them. Do NOT publish a fabricated license number.
export const trust = {
  baseLine: 'Locally based in Lancaster, SC',
  points: [
    { icon: 'badge', title: 'Licensed team', body: 'A licensed roofing team using top-quality materials on every job.' }, // CONFIRM license # & insurance
    { icon: 'star', title: '100% satisfaction guaranteed', body: 'We aren’t finished until the work is done right and you’re happy with it.' },
    { icon: 'language', title: 'Se habla español', body: 'We serve our customers in both English and Spanish.' },
    { icon: 'search', title: 'Free roof inspections', body: 'Honest, no-pressure inspections at no cost — so you know where your roof really stands.' },
  ],
  // Extra verifiable signals surfaced in the section subhead.
  highlights: ['Storm, wind & hail experience', 'Affordable financing', 'Residential & commercial'],
};

// --- Reviews -------------------------------------------------------------------
// This is a new business with 0 reviews. We do NOT render fabricated
// testimonials. A neutral, honest note invites references instead.
export const reviewsNote =
  'We’re a growing local business building our reputation one roof at a time. Reviews coming soon — and we’re happy to provide references on request.';

// --- Quote form ----------------------------------------------------------------
export const quote = {
  heading: 'Request a free quote',
  blurb:
    'Tell us about your roof and we’ll get back to you to schedule a free, no-pressure inspection and estimate.',
  serviceTypes: [
    'Roof replacement',
    'Roof repair',
    'New roof installation',
    'Leak detection',
    'Storm / wind / hail damage',
    'Free roof inspection',
    'Gutter installation',
    'Roof maintenance',
    'Commercial roofing',
    'Not sure / something else',
  ],
};

// --- SEO -----------------------------------------------------------------------
export const seo = {
  title:
    'Rodriguez Roofing LLC | Roof Replacement, Repair & Storm Damage — Lancaster, SC & Monroe, NC',
  description:
    'Rodriguez Roofing LLC — residential & commercial roofing serving Lancaster & Pageland SC, Monroe & Greenville NC, and Charleston SC. Roof replacement, repair, storm & hail damage, free inspections, gutters, and maintenance. Affordable financing, 100% satisfaction guaranteed, se habla español. Request a free quote.',
  priceRange: '$$',
  // Languages served — surfaced in JSON-LD knowsLanguage.
  languages: ['English', 'Spanish'],
};

# Solin Studio Events — website

React 18 + Vite + React Router. No UI library; ~72 kB gzipped JS for the homepage bundle.

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # serve the build locally
```

## Design system (derived from the Source 1 homepage)
All visual values live in `src/styles/tokens.css`: palette, three colour schemes (`scheme-1` ink,
`scheme-2` charcoal, `scheme-3` cream), type scale (desktop / ≤991px / ≤479px), spacing, container.
Components read those variables, so every page inherits the same look. Brand is square-cornered, flat, no shadows.

## Structure
- `src/pages/` one file per route: `/`, `/events`, `/production`, `/venue-solutions`, `/creative`, `/our-work`, `/about`, `/contact`
- `src/components/layout/` Navbar, Footer, Section, Layout (one navbar + footer for every page)
- `src/components/sections/` reusable blocks: Hero, PageHeader, Split, FeatureRows, PlanningGrid, Timeline, ImageGrid, Gallery (lightbox), ProjectGrid, FeatureList, ProcessList, CtaBand, FormSection/ContactForm
- `src/data/` `content.js` (copy), `site.js` (nav/footer), `seo.js` (titles + descriptions), `images.js` (image manifest)

## Things you need to configure
1. **Form delivery** — set `VITE_FORM_ENDPOINT` (JSON POST). Without it, submissions are *not sent anywhere*
   (the UI still shows success and logs a console warning). See `src/lib/submitBrief.js`.
   The original used Cloudflare Turnstile; this build uses a honeypot field. Swap in Turnstile if your endpoint needs it.
2. **Site URL** — set `VITE_SITE_URL` (e.g. `https://www.yourdomain.com`) to emit canonical URLs, `og:url`,
   absolute OG image URLs and `sitemap.xml`.
3. **Social links** — add URLs in `src/data/site.js`; icons are non-interactive until you do.
4. **Placeholder projects** — "Experiences we create" content is flagged PLACEHOLDER in the source designs.
   Edit `homeProjects` / `workProjects` in `src/data/content.js`.

## Images
Every photo is a key in `src/data/images.js` (size + alt text). Optimised WebP (480/960/original) is in `public/images`.
To replace one: put `<key>.jpg` in `assets-src/` and run `npm run images`.

## Hosting
`npm run build` writes `dist/<route>/index.html` for each route with its own title/description/OG tags, plus `404.html`
and an SPA rewrite (`_redirects` for Netlify; for other hosts rewrite unknown paths to `/index.html`).

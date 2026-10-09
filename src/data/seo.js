/**
 * Per-route SEO. Read by <Seo/> at runtime AND by vite-plugins/seo-pages.js at
 * build time (which writes static <head> tags into dist/<route>/index.html so
 * crawlers and link previews see the right metadata without running JS).
 */
export const SITE_NAME = "Solin Studio Events";

/** Set VITE_SITE_URL (e.g. https://www.example.com) to emit canonical / og:url / sitemap. */
export const SITE_URL = String(
  import.meta.env?.VITE_SITE_URL ?? (typeof process !== "undefined" ? process.env.VITE_SITE_URL : "") ?? ""
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const pages = {
  "/": {
    title: "Solin Studio Events | Event Production & Venue Solutions, Dubai",
    description:
      "Dubai event production and venue solutions studio. Transforming spaces and creating experiences, from concept and AV technology through to full event execution.",
  },
  "/events": {
    title: "Events | Solin Studio Events",
    description:
      "Corporate events, conferences, product launches, galas, concerts and church events: event management and production by Solin Studio Events, Dubai.",
  },
  "/production": {
    title: "Audio Visual & Technical Services | Solin Studio Events",
    description:
      "Professional sound systems, PA design and installation, LED screens, projection, live streaming, stage lighting, video production and hybrid event technology.",
  },
  "/venue-solutions": {
    title: "Venue & Studio Solutions | Solin Studio Events",
    description:
      "Studio design and setup, event venue transformation, church auditorium design, stage construction, seating layout, acoustic treatment and venue branding.",
  },
  "/creative": {
    title: "Creative Services | Solin Studio Events",
    description:
      "Event branding, graphic design, digital content creation, promotional materials, event photography, videography and social media coverage.",
  },
  "/our-work": {
    title: "Our Work | Solin Studio Events",
    description:
      "Selected event production, venue transformation and creative work delivered by Solin Studio Events.",
  },
  "/about": {
    title: "About | Solin Studio Events",
    description:
      "Solin Studio Events is an event production and venue solutions company creating live, corporate, faith-based and entertainment experiences.",
  },
  "/contact": {
    title: "Start a Project | Solin Studio Events",
    description:
      "Share the shape of your event and Solin Studio Events will come back to you with the right production, technical and venue approach.",
  },
};

export const notFound = {
  title: "Page not found | Solin Studio Events",
  description: "The page you are looking for does not exist.",
};

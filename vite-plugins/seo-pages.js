// After `vite build`, writes dist/<route>/index.html for every route with its own
// <title>, description, Open Graph and Twitter tags (plus 404.html and sitemap.xml
// when VITE_SITE_URL is set). Single source of truth: src/data/seo.js
import fs from "node:fs";
import path from "node:path";
import { pages, notFound, SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "../src/data/seo.js";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function head(route, meta) {
  const abs = (p) => (SITE_URL ? SITE_URL + p : p);
  const url = SITE_URL ? SITE_URL + (route === "/" ? "/" : route) : "";
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    url && `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    url && `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${abs(DEFAULT_OG_IMAGE)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${abs(DEFAULT_OG_IMAGE)}" />`,
  ].filter(Boolean).join("\n    ");
}

export default function seoPages() {
  let outDir = "dist";
  return {
    name: "solin-seo-pages",
    apply: "build",
    configResolved(c) { outDir = path.resolve(c.root, c.build.outDir); },
    closeBundle() {
      const tpl = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      const re = /<!-- SEO_HEAD:START[\s\S]*?SEO_HEAD:END -->/;
      const render = (route, meta) => tpl.replace(re, head(route, meta));
      fs.writeFileSync(path.join(outDir, "index.html"), render("/", pages["/"]));
      for (const [route, meta] of Object.entries(pages)) {
        if (route === "/") continue;
        const dir = path.join(outDir, route);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), render(route, meta));
      }
      fs.writeFileSync(path.join(outDir, "404.html"), render("/404", notFound).replace("</title>", "</title>\n    <meta name=\"robots\" content=\"noindex\" />"));
      if (SITE_URL) {
        const urls = Object.keys(pages).map((r) => `  <url><loc>${SITE_URL}${r === "/" ? "/" : r}</loc></url>`).join("\n");
        fs.writeFileSync(path.join(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
        fs.appendFileSync(path.join(outDir, "robots.txt"), `\nSitemap: ${SITE_URL}/sitemap.xml\n`);
      }
    },
  };
}

import { useEffect } from "react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "../data/seo.js";

function setTag(selector, create, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) { el = document.createElement(create); document.head.appendChild(el); }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

/** Keeps <head> in sync on client-side navigation (static tags are written at build). */
export default function useSeo({ title, description, path }) {
  useEffect(() => {
    document.title = title;
    const abs = (p) => (SITE_URL ? SITE_URL + p : p);
    setTag('meta[name="description"]', "meta", { name: "description", content: description });
    setTag('meta[property="og:title"]', "meta", { property: "og:title", content: title });
    setTag('meta[property="og:description"]', "meta", { property: "og:description", content: description });
    setTag('meta[property="og:site_name"]', "meta", { property: "og:site_name", content: SITE_NAME });
    setTag('meta[property="og:image"]', "meta", { property: "og:image", content: abs(DEFAULT_OG_IMAGE) });
    setTag('meta[name="twitter:card"]', "meta", { name: "twitter:card", content: "summary_large_image" });
    if (SITE_URL) {
      setTag('link[rel="canonical"]', "link", { rel: "canonical", href: SITE_URL + path });
      setTag('meta[property="og:url"]', "meta", { property: "og:url", content: SITE_URL + path });
    }
  }, [title, description, path]);
}

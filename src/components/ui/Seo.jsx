import useSeo from "../../hooks/useSeo.js";
import { pages, notFound } from "../../data/seo.js";

/** <Seo path="/about" /> pulls title + description from data/seo.js */
export default function Seo({ path, notfound = false }) {
  const meta = notfound ? notFound : pages[path];
  useSeo({ ...meta, path });
  return null;
}

import { images, imageWidths } from "../../data/images.js";

/**
 * Responsive image driven by the manifest in data/images.js.
 * <Img name="hero-auditorium" sizes="100vw" eager />
 */
export default function Img({ name, alt, sizes = "100vw", eager = false, className, style, position }) {
  const entry = images[name];
  if (!entry) { if (import.meta.env.DEV) console.warn(`Unknown image "${name}"`); return null; }
  const widths = imageWidths(entry);
  const src = (w) => `/images/${name}-${w}.webp`;
  return (
    <img
      className={className}
      src={src(widths.at(-1))}
      srcSet={widths.map((w) => `${src(w)} ${w}w`).join(", ")}
      sizes={sizes}
      width={entry.w}
      height={entry.h}
      alt={alt ?? entry.alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding={eager ? "sync" : "async"}
      style={position ? { objectPosition: position, ...style } : style}
    />
  );
}

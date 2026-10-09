import { useEffect, useRef, useState } from "react";
import Img from "../ui/Img.jsx";
import Media from "../ui/Media.jsx";
import Reveal from "../ui/Reveal.jsx";

/** Masonry gallery with an accessible <dialog> lightbox (Esc, arrows, backdrop click). */
export default function Gallery({ items }) {
  const [index, setIndex] = useState(null);
  const dialog = useRef(null);
  const opener = useRef(null);

  const open = (i, el) => { opener.current = el; setIndex(i); };
  const close = () => dialog.current?.close();
  const step = (d) => setIndex((i) => (i + d + items.length) % items.length);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => { if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index]);

  const current = index !== null ? items[index] : null;
  return (
    <>
      <div className="masonry">
        {items.map((it, i) => (
          <Reveal key={it.label} className="masonry__item" delay={(i % 3) * 80}>
            <button type="button" className="gallery-item" onClick={(e) => open(i, e.currentTarget)} aria-label={`View larger: ${it.label}`}>
              <Media name={it.image} ratio="natural" sizes="(min-width: 992px) 400px, 100vw" />
              <span className="gallery-item__caption">{it.label}</span>
            </button>
          </Reveal>
        ))}
      </div>
      <dialog ref={dialog} className="lightbox" aria-label="Image viewer"
        onClose={() => { setIndex(null); opener.current?.focus(); }}
        onClick={(e) => e.target === e.currentTarget || e.target.classList.contains("lightbox__inner") ? close() : null}>
        {current && (
          <div className="lightbox__inner">
            <figure className="lightbox__figure">
              <Img name={current.image} sizes="92vw" eager />
              <figcaption>{current.label}</figcaption>
            </figure>
            <button type="button" className="lightbox__btn lightbox__btn--close" onClick={close} aria-label="Close">✕</button>
            <button type="button" className="lightbox__btn lightbox__btn--prev" onClick={() => step(-1)} aria-label="Previous image">‹</button>
            <button type="button" className="lightbox__btn lightbox__btn--next" onClick={() => step(1)} aria-label="Next image">›</button>
          </div>
        )}
      </dialog>
    </>
  );
}

import Media from "../ui/Media.jsx";
import Reveal from "../ui/Reveal.jsx";

/** Captioned image tiles. cols: 3 (4:3 images) | 4 (square images). */
export default function ImageGrid({ items, cols = 3 }) {
  const sizes = cols === 3 ? "(min-width: 992px) 392px, 100vw" : "(min-width: 992px) 293px, (min-width: 480px) 45vw, 100vw";
  return (
    <div className={`grid grid--${cols}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % cols) * 80} className="tile">
          <Media name={it.image} ratio={cols === 3 ? "43" : "square"} sizes={sizes} />
          <h3 className="h4 tile__title">{it.title}</h3>
        </Reveal>
      ))}
    </div>
  );
}

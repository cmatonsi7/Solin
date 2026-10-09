import Media from "../ui/Media.jsx";
import BulletList from "../ui/BulletList.jsx";
import Reveal from "../ui/Reveal.jsx";

/** Stacked image-left / list-right rows (homepage "One partner" services). */
export default function FeatureRows({ rows }) {
  return (
    <div className="rows">
      {rows.map((r) => (
        <div className="split" key={r.title}>
          <Reveal><Media name={r.image} ratio="43" sizes="(min-width: 992px) 592px, 100vw" /></Reveal>
          <Reveal delay={120} className="split__text" style={{ gap: "0.75rem" }}>
            <h3>{r.title}</h3>
            <BulletList items={r.items} />
          </Reveal>
        </div>
      ))}
    </div>
  );
}

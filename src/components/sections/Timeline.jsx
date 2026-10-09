import Media from "../ui/Media.jsx";
import Reveal from "../ui/Reveal.jsx";

/** Numbered 4-step process with images (homepage). */
export default function Timeline({ steps }) {
  return (
    <ol className="timeline">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 90} className="timeline__step">
          <div className="timeline__rail"><span className="timeline__num">{i + 1}</span><span className="timeline__line" /></div>
          <div className="timeline__content">
            <Media name={s.image} ratio="43" sizes="(min-width: 992px) 293px, 100vw" />
            <div className="stack stack--sm">
              <h3 className="h5">{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

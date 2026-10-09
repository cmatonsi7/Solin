import Media from "../ui/Media.jsx";
import Reveal from "../ui/Reveal.jsx";

/** Project cards: image, title, meta line, tags. Content is data-driven (see data/content.js). */
export default function ProjectGrid({ projects }) {
  return (
    <div className="grid grid--projects">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 100} style={{ display: "flex" }}>
          <article className="card zoom-host">
            <Media name={p.image} ratio="32" sizes="(min-width: 992px) 620px, 100vw" />
            <div className="card__body card__body--lg">
              <div className="card__text">
                <h3 className="h4">{p.title}</h3>
                <p className="text-small">{p.meta}</p>
                <div className="card__tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

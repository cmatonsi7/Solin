import { Link } from "react-router-dom";
import Media from "../ui/Media.jsx";
import Reveal from "../ui/Reveal.jsx";

/** "What are you planning?" — image cards that lead into the brief form. */
export default function PlanningGrid({ items, to = "/contact" }) {
  return (
    <div className="grid grid--cards">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % 4) * 80} style={{ display: "flex" }}>
          <article className="card zoom-host">
            <Media name={it.image} ratio="32" sizes="(min-width: 992px) 290px, (min-width: 480px) 45vw, 100vw" />
            <div className="card__body">
              <h3 className="h4">{it.title}</h3>
              <Link to={to} state={{ eventType: it.title }} className="button button--link">Plan your event</Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

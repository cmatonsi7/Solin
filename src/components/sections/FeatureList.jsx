import Icon from "../ui/Icon.jsx";
import Reveal from "../ui/Reveal.jsx";

/** Icon + title + text rows separated by hairlines ("Why choose Solin"). */
export default function FeatureList({ items }) {
  return (
    <ul className="list-divider">
      {items.map((it, i) => (
        <Reveal as="li" key={it.title} delay={i * 60} className="list-divider__item">
          <Icon name={it.icon} />
          <div className="list-divider__body">
            <h3 className="h3">{it.title}</h3>
            <p className="body-max">{it.text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

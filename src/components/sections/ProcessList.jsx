import Reveal from "../ui/Reveal.jsx";

/** Vertical numbered steps (venue "What we do"). */
export default function ProcessList({ steps }) {
  return (
    <ol className="list-divider">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 60} className="list-divider__item">
          <span className="list-divider__num">{String(i + 1).padStart(2, "0")}</span>
          <div className="list-divider__body">
            <h3 className="h4">{s.title}</h3>
            <p className="body-max">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

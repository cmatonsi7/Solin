import Section from "../layout/Section.jsx";

/** Interior-page header: eyebrow + h1 + intro. Sits below the fixed navbar. */
export default function PageHeader({ eyebrow, title, text }) {
  return (
    <Section scheme={1} offset pageHead>
      <div className="stack heading-max">
        {eyebrow && <p className="tagline">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="text-lead" style={{ maxWidth: "36rem" }}>{text}</p>}
      </div>
    </Section>
  );
}

import Section from "../layout/Section.jsx";
import Img from "../ui/Img.jsx";

/** Full-bleed photographic statement (homepage, just above the form). */
export default function ClosingBanner({ image, title, lines }) {
  return (
    <Section scheme={1} container={false} className="hero">
      <div className="hero__backdrop"><Img name={image} sizes="100vw" alt="" /></div>
      <div className="container hero__content">
        <h2>{title.map((l, i) => <span key={l}>{l}{i < title.length - 1 && <br />}</span>)}</h2>
        <div className="stack stack--sm">{lines.map((l) => <p key={l}>{l}</p>)}</div>
      </div>
    </Section>
  );
}

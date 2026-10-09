import Section from "../layout/Section.jsx";
import Img from "../ui/Img.jsx";
import Button from "../ui/Button.jsx";

/** Full-viewport hero with photographic backdrop (homepage). */
export default function Hero({ tagline, lines, text, actions = [], image }) {
  return (
    <Section scheme={1} offset container={false} className="hero">
      <div className="hero__backdrop"><Img name={image} sizes="100vw" eager alt="" /></div>
      <div className="container hero__content">
        {tagline && <p className="tagline">{tagline}</p>}
        <h1>{lines.map((l, i) => <span key={l}>{l}{i < lines.length - 1 && <br />}</span>)}</h1>
        <p className="text-lead body-max">{text}</p>
        <div className="hero__actions">
          {actions.map((a) => <Button key={a.label} to={a.to} variant={a.variant}>{a.label}</Button>)}
        </div>
      </div>
    </Section>
  );
}

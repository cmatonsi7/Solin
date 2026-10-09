import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";

/**
 * Heading block above grids: optional eyebrow, h2, body and button.
 * `action` sits under the text; pass `actionSide` to put it at the far right instead.
 */
export default function SectionHead({ eyebrow, title, text, action, actionSide = false, level = 2 }) {
  const H = `h${level}`;
  const btn = action && <Button to={action.to}>{action.label}</Button>;
  return (
    <Reveal className={`section-head ${actionSide ? "section-head--split" : ""}`}>
      <div className="section-head__text">
        {eyebrow && <p className="tagline">{eyebrow}</p>}
        <H className="h2 heading-max">{title}</H>
        {text && <p className="body-max">{text}</p>}
        {!actionSide && btn && <div className="section-head__action">{btn}</div>}
      </div>
      {actionSide && btn}
    </Reveal>
  );
}

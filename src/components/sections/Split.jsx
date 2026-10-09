import Media from "../ui/Media.jsx";
import BulletList from "../ui/BulletList.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";

/** Text + image in two columns. Used by intro, "In scope", venue, creative, about… */
export default function Split({ eyebrow, title, headingClass = "h2", level = 2, text = [], items, action, image, ratio = "square", position, reverse = false, sizes = "(min-width: 992px) 592px, 100vw", imageFirst = false }) {
  const H = `h${level}`;
  const paragraphs = Array.isArray(text) ? text : [text];
  const textBlock = (
    <Reveal className="split__text">
      {eyebrow && <p className="tagline">{eyebrow}</p>}
      <H className={headingClass}>{title}</H>
      {(paragraphs.length > 0 || items) && (
        <div className="split__body">
          {paragraphs.map((t) => <p key={t} className="body-max">{t}</p>)}
          {items && <BulletList items={items} />}
        </div>
      )}
      {action && <div><Button to={action.to}>{action.label}</Button></div>}
    </Reveal>
  );
  const media = (
    <Reveal delay={120}>
      <Media name={image} ratio={ratio} position={position} sizes={sizes} />
    </Reveal>
  );
  return (
    <div className={`split ${reverse ? "split--reverse" : ""}`}>
      {imageFirst ? <>{media}{textBlock}</> : <>{textBlock}{media}</>}
    </div>
  );
}

import Section from "../layout/Section.jsx";
import ContactForm from "./ContactForm.jsx";
import Reveal from "../ui/Reveal.jsx";

/** Cream (scheme 3) section: heading/aside left, form right. */
export default function FormSection({ id, title, text, aside, level = 2 }) {
  const H = `h${level}`;
  return (
    <Section scheme={3} id={id}>
      <div className="split split--top">
        <Reveal className="stack">
          {title && <H className="h2">{title}</H>}
          {text && <p className="body-max">{text}</p>}
          {aside}
        </Reveal>
        <Reveal delay={100}><ContactForm /></Reveal>
      </div>
    </Section>
  );
}

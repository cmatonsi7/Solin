import Section from "../layout/Section.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import { cta } from "../../data/site.js";

/** Closing call-to-action used at the foot of every interior page. */
export default function CtaBand({ title = "Let's create something extraordinary.", text = "Tell us about your event, your vision and what you want to achieve. Our team will work with you to develop the right event solution." }) {
  return (
    <Section scheme={3}>
      <Reveal className="stack center" style={{ alignItems: "center", textAlign: "center", maxWidth: "48rem" }}>
        <h2>{title}</h2>
        <p className="text-lead">{text}</p>
        <div className="row row--center" style={{ marginTop: "0.5rem" }}><Button to={cta.to}>{cta.label}</Button></div>
      </Reveal>
    </Section>
  );
}

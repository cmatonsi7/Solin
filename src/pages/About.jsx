import Seo from "../components/ui/Seo.jsx";
import Section from "../components/layout/Section.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import Split from "../components/sections/Split.jsx";
import FeatureList from "../components/sections/FeatureList.jsx";
import CtaBand from "../components/sections/CtaBand.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { whyChoose } from "../data/content.js";

export default function About() {
  return (
    <>
      <Seo path="/about" />
      <PageHeader eyebrow="About Solin Studio Events" title="About" text="Solin Studio Events is a dynamic event production and venue solutions company specializing in the creation, management, and delivery of exceptional live, corporate, faith-based, and entertainment experiences." />
      <Section scheme={1}>
        <Split eyebrow="Who we are" title={<>Creating experiences.<br />Inspiring connections.</>} text="We transform ordinary spaces into immersive environments where people connect, celebrate, learn, and engage." image="about-who-we-are" position="center 40%" />
      </Section>
      <Section scheme={2}>
        <Reveal className="section-head">
          <div className="section-head__text">
            <p className="tagline">Why Solin</p>
            <h2 className="heading-max">Why choose Solin Studio Events?</h2>
          </div>
        </Reveal>
        <FeatureList items={whyChoose("checklist")} />
      </Section>
      <CtaBand />
    </>
  );
}

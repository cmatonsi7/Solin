import Seo from "../components/ui/Seo.jsx";
import Section from "../components/layout/Section.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import Split from "../components/sections/Split.jsx";
import Gallery from "../components/sections/Gallery.jsx";
import CtaBand from "../components/sections/CtaBand.jsx";
import Reveal from "../components/ui/Reveal.jsx";

const work = [
  { image: "creative-branding", label: "Event branding" },
  { image: "creative-graphic", label: "Graphic design" },
  { image: "creative-digital", label: "Digital content creation" },
  { image: "creative-promo", label: "Promotional materials" },
  { image: "creative-photography", label: "Event photography" },
  { image: "creative-videography", label: "Videography" },
];

export default function Creative() {
  return (
    <>
      <Seo path="/creative" />
      <PageHeader eyebrow="Creative Services" title="Creative" text="Event branding, graphic design, digital content creation, promotional materials, event photography, videography and social media coverage." />
      <Section scheme={1}>
        <Split eyebrow="Your event has a story" title="We help bring it to life." text="Branding, design, content and coverage built around the event itself: how it looks, how it is communicated, and how it is captured." items={["Event branding", "Graphic design", "Digital content creation", "Promotional materials", "Event photography", "Videography", "Social media coverage"]} image="creative-story" position="center 35%" />
      </Section>
      <Section scheme={1} className="section--flush-top">
        <Reveal className="section-head"><h2 className="heading-max">Creative work</h2></Reveal>
        <Gallery items={work} />
      </Section>
      <CtaBand />
    </>
  );
}

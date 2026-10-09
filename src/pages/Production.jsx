import Seo from "../components/ui/Seo.jsx";
import Section from "../components/layout/Section.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import SectionHead from "../components/sections/SectionHead.jsx";
import ImageGrid from "../components/sections/ImageGrid.jsx";
import Split from "../components/sections/Split.jsx";
import CtaBand from "../components/sections/CtaBand.jsx";
import { productionTiles } from "../data/content.js";

export default function Production() {
  return (
    <>
      <Seo path="/production" />
      <PageHeader eyebrow="Production" title="Production" text="From professional sound systems and LED screens to stage lighting, projection, live streaming and hybrid event technology, Solin combines advanced technology with professional production expertise." />
      <Section scheme={1}>
        <SectionHead eyebrow="Technical production" title="Technology that brings the experience to life." />
        <ImageGrid items={productionTiles} cols={3} />
      </Section>
      <Section scheme={2}>
        <Split eyebrow="In scope" title="The technology behind it." items={["Professional sound systems", "PA system design & installation", "LED screens & projection systems", "Live streaming solutions", "Stage lighting systems", "Video production", "Recording studio solutions", "Hybrid event technology"]} image="av-scope" position="center 30%" />
      </Section>
      <CtaBand />
    </>
  );
}

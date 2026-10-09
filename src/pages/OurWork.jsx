import Seo from "../components/ui/Seo.jsx";
import Section from "../components/layout/Section.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import SectionHead from "../components/sections/SectionHead.jsx";
import ProjectGrid from "../components/sections/ProjectGrid.jsx";
import CtaBand from "../components/sections/CtaBand.jsx";
import { workProjects } from "../data/content.js";

export default function OurWork() {
  return (
    <>
      <Seo path="/our-work" />
      <PageHeader eyebrow="Our Work" title="Our Work" text="Event production, venue transformation and creative work: what we do, and the shape it takes at an event." />
      <Section scheme={2}>
        <SectionHead eyebrow="Experiences we create" title="Experiences we create" text="Example projects, shown to demonstrate the format. These placeholders will be replaced with real Solin project imagery, locations and services." />
        <ProjectGrid projects={workProjects} />
      </Section>
      <CtaBand />
    </>
  );
}

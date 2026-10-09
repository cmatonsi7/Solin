import Seo from "../components/ui/Seo.jsx";
import Section from "../components/layout/Section.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import Split from "../components/sections/Split.jsx";
import SectionHead from "../components/sections/SectionHead.jsx";
import ProcessList from "../components/sections/ProcessList.jsx";
import CtaBand from "../components/sections/CtaBand.jsx";
import { venueSteps } from "../data/content.js";

export default function VenueSolutions() {
  return (
    <>
      <Seo path="/venue-solutions" />
      <PageHeader eyebrow="Venue & Studio Solutions" title="Venue Solutions" text="Whether you need a venue or studio environment for a production, event, content shoot or creative collaboration, Solin provides a ready-to-use space as part of the wider event solution." />
      <Section scheme={1}>
        <Split eyebrow="Venue & studio" title="Venue & studio solutions" items={["Studio design & setup", "Event venue transformation", "Church auditorium design", "Stage construction & installation", "Seating layout planning", "Acoustic treatment & soundproofing", "Venue branding & decoration"]} image="venue-studio" position="center 55%" />
      </Section>
      <Section scheme={2}>
        <SectionHead eyebrow="What we do" title="From ordinary space to extraordinary experience." text="From studio design and stage construction to acoustic treatment, venue branding and complete event transformation, Solin creates environments designed around your vision." />
        <ProcessList steps={venueSteps} />
      </Section>
      <Section scheme={1}>
        <Split eyebrow="The space, ready to use" title="Venue rental & hosting" text="The space comes with the production capability behind it: the room, the technology and the team that runs it." items={["Corporate meetings", "Training workshops", "Worship services", "Music concerts", "Private celebrations", "Business presentations", "Community gatherings"]} image="venue-hosting" position="center 60%" />
      </Section>
      <CtaBand />
    </>
  );
}

import Seo from "../components/ui/Seo.jsx";
import Section from "../components/layout/Section.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import Split from "../components/sections/Split.jsx";
import SectionHead from "../components/sections/SectionHead.jsx";
import PlanningGrid from "../components/sections/PlanningGrid.jsx";
import ImageGrid from "../components/sections/ImageGrid.jsx";
import CtaBand from "../components/sections/CtaBand.jsx";
import { services, planning, audiences } from "../data/content.js";

/* No Source 2 design exists for /events. Composed only from the homepage's own
   copy, imagery and components so it stays native to the brand. */
export default function Events() {
  const s = services[0];
  return (
    <>
      <Seo path="/events" />
      <PageHeader eyebrow="Event management & production" title="Events" text="Solin manages the whole experience: the event itself, the venue and studio environment, the technology behind it, the creative around it, and the space it all happens in." />
      <Section scheme={1}>
        <Split title={s.title} headingClass="h2" items={s.items} image={s.image} ratio="43" imageFirst />
      </Section>
      <Section scheme={2}>
        <SectionHead title="What are you planning?" text="Tell us what you are planning and we will shape the production, the technology and the venue solution around it." />
        <PlanningGrid items={planning} />
      </Section>
      <Section scheme={1}>
        <SectionHead title={<>Built for different audiences.<br />Designed around your objectives.</>} text="Every sector arrives with its own audience, expectations and constraints. We plan the production, the technology and the venue around yours." />
        <ImageGrid items={audiences} cols={4} />
      </Section>
      <CtaBand />
    </>
  );
}

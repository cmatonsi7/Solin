import Seo from "../components/ui/Seo.jsx";
import Section from "../components/layout/Section.jsx";
import Hero from "../components/sections/Hero.jsx";
import Split from "../components/sections/Split.jsx";
import SectionHead from "../components/sections/SectionHead.jsx";
import FeatureRows from "../components/sections/FeatureRows.jsx";
import PlanningGrid from "../components/sections/PlanningGrid.jsx";
import Timeline from "../components/sections/Timeline.jsx";
import ImageGrid from "../components/sections/ImageGrid.jsx";
import Gallery from "../components/sections/Gallery.jsx";
import ProjectGrid from "../components/sections/ProjectGrid.jsx";
import FeatureList from "../components/sections/FeatureList.jsx";
import ClosingBanner from "../components/sections/ClosingBanner.jsx";
import FormSection from "../components/sections/FormSection.jsx";
import { services, planning, techTiles, homeProjects, whyChoose, audiences } from "../data/content.js";

const steps = [
  { title: "Empty space", image: "process-empty-space", text: "We start with your space, its constraints and what you want your audience to feel walking in." },
  { title: "Production setup", image: "process-production-setup", text: "Staging, rigging, power and structure are built and rigged to plan by our own production crew." },
  { title: "Lighting & technical build", image: "process-lighting-build", text: "Lighting, sound and screens are installed, focused and tuned until the room is ready for an audience." },
  { title: "Your event, live", image: "process-live", text: "The space is dressed and running, and our team stays on site for the length of the event." },
];

const gallery = [
  { image: "gallery-branding", label: "Event branding" },
  { image: "gallery-graphic-design", label: "Graphic design" },
  { image: "gallery-digital-content", label: "Digital content creation" },
  { image: "gallery-promotional", label: "Promotional materials" },
  { image: "gallery-photography", label: "Photography" },
  { image: "gallery-videography", label: "Videography" },
  { image: "gallery-social", label: "Social media coverage" },
];

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Solin Studio Events",
        description: "Dubai event production and venue solutions studio. Transforming spaces and creating experiences, from concept and AV technology through to full event execution.",
        address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
      }) }} />

      <Hero
        tagline="Event production • AV & technical • Venue solutions • Creative"
        lines={["Transforming spaces.", "Creating experiences."]}
        text="End-to-end event production and venue solutions designed to create exceptional experiences where people connect, celebrate, learn, and engage."
        image="hero-auditorium"
        actions={[{ label: "Start a project", to: "/contact" }, { label: "Explore our work", to: "/our-work", variant: "secondary" }]}
      />

      <Section scheme={1}>
        <Split
          title={<>Creating experiences.<br />Inspiring connections.</>}
          text={["Solin Studio Events is a dynamic event production and venue solutions company specializing in the creation, management, and delivery of exceptional live, corporate, faith-based, and entertainment experiences.", "We transform ordinary spaces into immersive environments where people connect, celebrate, learn, and engage."]}
          image="intro-stage"
        />
      </Section>

      <Section scheme={1}>
        <SectionHead title="One partner. Every part of the experience." text="Solin manages the whole experience: the event itself, the venue and studio environment, the technology behind it, the creative around it, and the space it all happens in." />
        <FeatureRows rows={services} />
      </Section>

      <Section scheme={2}>
        <SectionHead title="What are you planning?" text="Tell us what you are planning and we will shape the production, the technology and the venue solution around it." />
        <PlanningGrid items={planning} />
      </Section>

      <Section scheme={2} className="section--flush-top">
        <SectionHead title="From ordinary space to extraordinary experience." text="From studio design and stage construction to acoustic treatment, venue branding and complete event transformation, Solin creates environments designed around your vision." action={{ label: "Explore venue solutions", to: "/venue-solutions" }} />
        <Timeline steps={steps} />
      </Section>

      <Section scheme={1}>
        <SectionHead title="Technology that brings the experience to life." text="From professional sound systems and LED screens to stage lighting, projection, live streaming and hybrid event technology, Solin combines advanced technology with professional production expertise." action={{ label: "Explore technical services", to: "/production" }} />
        <ImageGrid items={techTiles} cols={3} />
      </Section>

      <Section scheme={1} className="section--flush-top">
        <SectionHead title={<>Your event has a story.<br />We help bring it to life.</>} text="Branding, design, content, photography and film, shaped around the story you want your audience to walk away with." />
        <Gallery items={gallery} />
      </Section>

      <Section scheme={2}>
        <SectionHead title="Experiences we create" text="Example projects, shown to demonstrate the format. These placeholders will be replaced with real Solin project imagery, locations and services." action={{ label: "View all projects", to: "/our-work" }} actionSide />
        <ProjectGrid projects={homeProjects} />
      </Section>

      <Section scheme={2} className="section--flush-top">
        <h2 className="h2 heading-max" style={{ marginBottom: "var(--content-gap)" }}>Why choose Solin Studio Events?</h2>
        <FeatureList items={whyChoose("route")} />
      </Section>

      <Section scheme={1}>
        <SectionHead title={<>Built for different audiences.<br />Designed around your objectives.</>} text="Every sector arrives with its own audience, expectations and constraints. We plan the production, the technology and the venue around yours." />
        <ImageGrid items={audiences} cols={4} />
      </Section>

      <ClosingBanner image="closing-concert" title={["Transforming spaces.", "Creating experiences."]} lines={["Where vision meets experience.", "Creating moments that matter.", "Your vision. Our stage."]} />

      <FormSection id="start-a-project" title="Start a project" text="Share the shape of your event and we will come back to you with the right production, technical and venue approach." />
    </>
  );
}

import Seo from "../components/ui/Seo.jsx";
import PageHeader from "../components/sections/PageHeader.jsx";
import FormSection from "../components/sections/FormSection.jsx";
import { footer } from "../data/site.js";

export default function Contact() {
  return (
    <>
      <Seo path="/contact" />
      <PageHeader eyebrow="Contact" title="Start a project" text="Share the shape of your event and we will come back to you with the right production, technical and venue approach." />
      <FormSection id="start-a-project" aside={<p>{footer.location.label}<br />{footer.location.value}</p>} />
    </>
  );
}

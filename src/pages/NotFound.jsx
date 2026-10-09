import Seo from "../components/ui/Seo.jsx";
import Section from "../components/layout/Section.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <>
      <Seo notfound path="/404" />
      <Section scheme={1} offset className="hero" style={{ minHeight: "80vh" }}>
        <div className="stack" style={{ alignItems: "flex-start" }}>
          <p className="tagline">404</p>
          <h1>Page not found.</h1>
          <p className="text-lead body-max">The page you are looking for does not exist or has moved.</p>
          <Button to="/">Back to home</Button>
        </div>
      </Section>
    </>
  );
}

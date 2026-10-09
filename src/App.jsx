import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";

// Secondary routes are code-split; the homepage ships in the main bundle.
const Events = lazy(() => import("./pages/Events.jsx"));
const Production = lazy(() => import("./pages/Production.jsx"));
const VenueSolutions = lazy(() => import("./pages/VenueSolutions.jsx"));
const Creative = lazy(() => import("./pages/Creative.jsx"));
const OurWork = lazy(() => import("./pages/OurWork.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="production" element={<Production />} />
          <Route path="venue-solutions" element={<VenueSolutions />} />
          <Route path="creative" element={<Creative />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

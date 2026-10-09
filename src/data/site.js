/** Global navigation + footer content (from the Source 1 homepage). */
export const nav = [
  { label: "Events", to: "/events" },
  { label: "Production", to: "/production" },
  { label: "Venue Solutions", to: "/venue-solutions" },
  { label: "Creative", to: "/creative" },
  { label: "Our Work", to: "/our-work" },
  { label: "About", to: "/about" },
];

export const cta = { label: "Start a project", to: "/contact" };

export const footer = {
  location: { label: "Based in", value: "Dubai, United Arab Emirates" },
  columns: [
    {
      title: "Services",
      links: [
        { label: "Events", to: "/events" },
        { label: "Production", to: "/production" },
        { label: "Venue Solutions", to: "/venue-solutions" },
        { label: "Creative", to: "/creative" },
      ],
    },
    {
      title: "Studio",
      links: [
        { label: "Our Work", to: "/our-work" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ],
  action: {
    title: "Ready to start planning?",
    text: "Tell us what you are planning and we will come back to you with the right production, technical and venue approach.",
  },
  legal: "Solin Studio Events. All rights reserved.",
  /**
   * Social profiles. The Source 1 design shows these four icons but no URLs were
   * set. Add real profile URLs here and the icons become links automatically;
   * until then they render as non-interactive marks (no dead links).
   */
  social: [
    { id: "instagram", label: "Instagram", href: "" },
    { id: "linkedin", label: "LinkedIn", href: "" },
    { id: "youtube", label: "YouTube", href: "" },
    { id: "tiktok", label: "TikTok", href: "" },
  ],
};

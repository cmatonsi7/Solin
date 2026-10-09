/** Page copy shared by more than one page. Home copy is verbatim from Source 1; other pages from Source 2. */

export const services = [
  { title: "Event management & production", image: "service-events", items: ["Corporate events", "Conferences & seminars", "Product launches", "Awards ceremonies", "Networking events", "Gala dinners", "Community events", "Church conferences & crusades"] },
  { title: "Venue & studio solutions", image: "service-venue", items: ["Studio design & setup", "Event venue transformation", "Church auditorium design", "Stage construction & installation", "Seating layout planning", "Acoustic treatment & soundproofing", "Venue branding & decoration"] },
  { title: "Audio visual & technical services", image: "service-av", items: ["Professional sound systems", "PA system design & installation", "LED screens & projection systems", "Live streaming solutions", "Stage lighting systems", "Video production", "Recording studio solutions", "Hybrid event technology"] },
  { title: "Creative services", image: "service-creative", items: ["Event branding", "Graphic design", "Digital content creation", "Promotional materials", "Event photography", "Videography", "Social media coverage"] },
  { title: "Venue rental & hosting", image: "service-rental", items: ["Corporate meetings", "Training workshops", "Worship services", "Music concerts", "Private celebrations", "Business presentations", "Community gatherings"] },
];

export const planning = [
  { title: "Corporate event", image: "plan-corporate" },
  { title: "Conference", image: "plan-conference" },
  { title: "Product launch", image: "plan-product-launch" },
  { title: "Concert", image: "plan-concert" },
  { title: "Church event", image: "plan-church" },
  { title: "Workshop / training", image: "plan-workshop" },
  { title: "Private celebration", image: "plan-private" },
  { title: "Community event", image: "plan-community" },
];

export const audiences = [
  { title: "Corporate organizations", image: "audience-corporate" },
  { title: "Government institutions", image: "audience-government" },
  { title: "Educational institutions", image: "audience-education" },
  { title: "Religious organizations", image: "audience-religious" },
  { title: "Entertainment industry", image: "audience-entertainment" },
  { title: "Hospitality sector", image: "audience-hospitality" },
  { title: "Non-governmental organizations", image: "audience-ngo" },
  { title: "Community associations", image: "audience-community" },
];

export const whyChoose = (processIcon) => [
  { icon: "workspace_premium", title: "Professional excellence", text: "Our team combines technical expertise, creative thinking, and meticulous planning to ensure flawless execution." },
  { icon: "lightbulb", title: "Innovative solutions", text: "We leverage modern event technologies and production techniques to create immersive and engaging experiences." },
  { icon: "handshake", title: "Client-centered approach", text: "Every project is customized to meet the specific objectives, audience, and budget of our clients." },
  { icon: processIcon, title: "End-to-end service delivery", text: "From concept development to event execution, we manage every detail, allowing clients to focus on their guests and objectives." },
  { icon: "verified", title: "Quality without compromise", text: "We maintain the highest standards in event production, technical systems, safety, and customer satisfaction." },
];

export const techTiles = [
  { title: "LED walls", image: "tech-led-walls" },
  { title: "Lighting rigs", image: "tech-lighting-rigs" },
  { title: "Sound systems", image: "tech-sound-systems" },
  { title: "Camera crews", image: "tech-camera-crews" },
  { title: "Streaming setups", image: "tech-streaming" },
  { title: "Stage production", image: "tech-stage-production" },
];

// Production page uses its own (Source 2) photography for the same six tiles.
export const productionTiles = [
  { title: "LED walls", image: "av-led-walls" },
  { title: "Lighting rigs", image: "av-lighting-rigs" },
  { title: "Sound systems", image: "av-sound-systems" },
  { title: "Camera crews", image: "av-camera-crews" },
  { title: "Streaming setups", image: "av-streaming" },
  { title: "Stage production", image: "av-stage-production" },
];

export const homeProjects = [
  { title: "Corporate conference", image: "project-conference", meta: "Event type: Corporate conference · Services: Event management, stage production, AV & technical", tags: ["Conference", "Corporate", "Placeholder"] },
  { title: "Gala dinner", image: "project-gala", meta: "Event type: Gala dinner · Services: Event management, venue transformation, creative production", tags: ["Gala dinner", "Corporate", "Placeholder"] },
  { title: "Product launch", image: "project-launch", meta: "Event type: Product launch · Services: Stage production, lighting, LED screens, creative production", tags: ["Product launch", "Brand experience", "Placeholder"] },
  { title: "Church conference", image: "project-church", meta: "Event type: Church conference · Services: Venue solutions, acoustic treatment, sound, live streaming", tags: ["Church conference", "Faith-based", "Placeholder"] },
  { title: "Live concert", image: "project-concert", meta: "Event type: Live concert · Services: Stage production, lighting, sound, technical production", tags: ["Live concert", "Entertainment", "Placeholder"] },
  { title: "Venue transformation", image: "project-venue", meta: "Project type: Venue transformation · Services: Studio design, stage construction, acoustics, venue branding", tags: ["Venue transformation", "Venue solutions", "Placeholder"] },
];

export const workProjects = [
  { title: "Corporate conference", image: "work-conference", meta: "Event management & production · AV & technical", tags: ["Conference", "Corporate", "Placeholder"] },
  { title: "Gala dinner", image: "work-gala", meta: "Event management & production · Venue transformation · Creative", tags: ["Gala dinner", "Corporate", "Placeholder"] },
  { title: "Product launch", image: "work-launch", meta: "Event management & production · AV & technical · Creative", tags: ["Product launch", "Brand", "Placeholder"] },
  { title: "Church conference", image: "work-church", meta: "Event management & production · Venue & studio solutions · AV & technical", tags: ["Conference", "Faith-based", "Placeholder"] },
  { title: "Live concert", image: "work-concert", meta: "Event management & production · AV & technical", tags: ["Concert", "Entertainment", "Placeholder"] },
  { title: "Venue transformation", image: "work-venue", meta: "Venue & studio solutions · AV & technical", tags: ["Venue", "Production", "Placeholder"] },
];

export const venueSteps = [
  { title: "Venue assessment", text: "We start with the space itself: what it is now, what it needs to become, and what the event requires of it." },
  { title: "Studio design & setup", text: "Layouts, sightlines, seating and staging are planned around the audience and the production." },
  { title: "Stage construction & installation", text: "Structures, staging and rigging are built and installed on site." },
  { title: "Acoustic treatment & soundproofing", text: "The room is treated so speech stays intelligible and sound stays controlled." },
  { title: "Venue branding & decoration", text: "The space is dressed to carry the event identity, from the entrance to the stage." },
];

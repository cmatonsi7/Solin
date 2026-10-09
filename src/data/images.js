/**
 * IMAGE MANIFEST — single source of truth for every photo on the site.
 *
 * To replace an image: drop a new JPG/PNG into /assets-src named <key>.jpg
 * (keep the same aspect ratio, or update w/h here), then run `npm run images`.
 * Alt text lives here too, so it is edited in one place.
 *
 * Optimised WebP files are written to /public/images as <key>-<width>.webp.
 * Widths: 480 / 960 plus the source's own width (capped at 1440). An entry can
 * override this with `widths: [...]` (the logo does).
 */
export const IMAGE_WIDTHS = [480, 960, 1440];

/** The exact pixel widths generated for an image (used by script + <Img>). */
export function imageWidths(entry) {
  if (entry.widths) return entry.widths;
  const top = Math.min(entry.w, IMAGE_WIDTHS.at(-1));
  return [...IMAGE_WIDTHS.filter((w) => w < top), top];
}

export const images = {
  "hero-auditorium": { w: 1376, h: 768, alt: "Empty auditorium with rows of dark chairs, a central aisle, stage steps, and a softly illuminated abstract screen." },
  "intro-stage": { w: 1024, h: 1024, alt: "Dim industrial stage setup with black curtains, metal trusses, a work light, cables, and equipment cases." },
  "service-events": { w: 1200, h: 896, alt: "Candlelit formal banquet hall with round tables, floral centerpieces, chandeliers, and a decorated stage." },
  "service-venue": { w: 1200, h: 896, alt: "Theater auditorium under construction with curved seating, scaffolding, exposed infrastructure, and an illuminated stage." },
  "service-av": { w: 1200, h: 896, alt: "Empty dark stage with suspended speakers, lighting rigs, production equipment, and a glowing amber abstract screen." },
  "service-creative": { w: 1200, h: 896, alt: "Overhead arrangement of blank papers, an open notebook, fabric dishes, a pen, binder clip, and color swatches." },
  "service-rental": { w: 1200, h: 896, alt: "Empty dark event hall with a reflective floor, golden curtains, and overhead stage lighting." },
  "plan-corporate": { w: 1024, h: 1024, alt: "Guests in formal attire mingle with champagne and wine glasses at a warmly lit evening reception." },
  "plan-conference": { w: 1024, h: 1024, alt: "Speaker addressing a seated audience at a warmly lit auditorium podium beside a projection screen." },
  "plan-product-launch": { w: 1024, h: 1024, alt: "A spotlight illuminates a dark abstract object on a pedestal before a smoky stage and silhouetted audience." },
  "plan-concert": { w: 1024, h: 1024, alt: "Silhouetted band performs under amber spotlights as a crowd raises hands at an indoor concert." },
  "plan-church": { w: 1024, h: 1024, alt: "Empty warmly lit auditorium with rows of dark seats, a wooden stage, and a central lectern." },
  "plan-workshop": { w: 1024, h: 1024, alt: "Dim conference room with rows of tables, chairs, notepads, glasses, and a blurred projection screen." },
  "plan-private": { w: 1024, h: 1024, alt: "Candlelit formal dining room with dark tables, crystal place settings, floral centerpieces, portraits, and chandeliers." },
  "plan-community": { w: 1024, h: 1024, alt: "Crowded outdoor evening gathering beneath warm string lights, with picnic tables, trees, and rustic stone walls." },
  "process-empty-space": { w: 1200, h: 896, alt: "Empty, dimly lit industrial warehouse with exposed steel beams, worn concrete floor, and a glowing doorway." },
  "process-production-setup": { w: 1200, h: 896, alt: "Stagehands lift a suspended aluminum lighting truss inside a dark theater surrounded by cables, ladders, and equipment cases." },
  "process-lighting-build": { w: 1200, h: 896, alt: "Empty concert venue facing a stage with musicians, instruments, trusses, and warm amber spotlights." },
  "process-live": { w: 1200, h: 896, alt: "Crowded theater audience watching a silhouetted performer on a warmly lit stage with a large blurred projection screen." },
  "tech-led-walls": { w: 1200, h: 896, alt: "Large LED stage screen displays warm abstract shadows beneath black theatrical rigging and cables." },
  "tech-lighting-rigs": { w: 1200, h: 896, alt: "Suspended stage trusses with numerous spotlights casting warm beams through haze in a dark venue." },
  "tech-sound-systems": { w: 1200, h: 896, alt: "Suspended line-array speakers and stacked subwoofers sit on a dimly lit concert stage." },
  "tech-camera-crews": { w: 1200, h: 896, alt: "Two silhouetted camera operators film a warmly lit, smoky concert stage from the audience area." },
  "tech-streaming": { w: 1200, h: 896, alt: "Broadcast video switcher with colorful illuminated controls, monitors, equipment racks, and cables in a dark control room." },
  "tech-stage-production": { w: 1200, h: 896, alt: "Crew members assemble a curtained concert stage inside a dark arena with lighting trusses and equipment cases." },
  "gallery-branding": { w: 848, h: 1264, alt: "Receptionist stands beside a black desk beneath a glowing geometric emblem in a dim modern lobby." },
  "gallery-graphic-design": { w: 1024, h: 1024, alt: "Overhead arrangement of dark geometric-patterned cards, dried leaves, fabric, and a brass object on a shadowed surface." },
  "gallery-digital-content": { w: 1200, h: 896, alt: "Operator using a color-grading console at a desk with abstract graphics on a large monitor." },
  "gallery-promotional": { w: 848, h: 1264, alt: "Rolled decorated papers, stacked abstract-print cards, and folded gold-marked fabric sit on a rustic table." },
  "gallery-photography": { w: 848, h: 1264, alt: "Photographer filming a brightly lit concert from a platform behind a silhouetted crowd." },
  "gallery-videography": { w: 1200, h: 896, alt: "Camera operator films a hazy concert stage while a crowd watches under amber spotlights." },
  "gallery-social": { w: 1024, h: 1024, alt: "Audience member records a warmly lit concert stage with a smartphone amid a dark crowd." },
  "project-conference": { w: 1264, h: 848, alt: "Speaker at a lectern addresses a seated audience in a dim auditorium beneath an abstract projection screen." },
  "project-gala": { w: 1264, h: 848, alt: "Candlelit formal banquet hall with round tables, chandeliers, and a decorated stage." },
  "project-launch": { w: 1264, h: 848, alt: "Dark auditorium with a seated audience watching a black sculpture on a pedestal under amber spotlights." },
  "project-church": { w: 1264, h: 848, alt: "Speaker addressing a large seated audience on a warmly lit auditorium stage with two blurred projection screens." },
  "project-concert": { w: 1264, h: 848, alt: "Crowded nighttime concert with silhouetted performers, amber spotlights, smoke, stage rigs, and raised audience hands." },
  "project-venue": { w: 1264, h: 848, alt: "Empty dark event hall with a warmly lit curtained stage and reflective polished floor." },
  "audience-corporate": { w: 1024, h: 1024, alt: "Symmetrical dark luxury lobby with a marble reception desk, geometric pendant light, and reflective floor." },
  "audience-government": { w: 1024, h: 1024, alt: "Symmetrical stone building entrance with illuminated columns and palm trees at dusk." },
  "audience-education": { w: 1024, h: 1024, alt: "Empty dark lecture hall with tiered seats, a lit stage, lectern, and blank projection screen." },
  "audience-religious": { w: 1024, h: 1024, alt: "Empty auditorium with rows of dark seats facing a warmly lit wooden stage with a podium, microphone, and stool." },
  "audience-entertainment": { w: 1024, h: 1024, alt: "Empty indoor concert arena with a stage, amber spotlights, haze, trusses, and surrounding dark seats." },
  "audience-hospitality": { w: 1024, h: 1024, alt: "Luxurious dark hotel lobby with pendant lights, lounge seating, staircase, and illuminated reception desk." },
  "audience-ngo": { w: 1024, h: 1024, alt: "Rustic barn event hall with string lights, rows of wooden chairs, and a curtained stage with a podium." },
  "audience-community": { w: 1024, h: 1024, alt: "Evening brick courtyard with communal tables, stacked chairs, and warm string lights overhead." },
  "closing-concert": { w: 1376, h: 768, alt: "Concert stage with silhouetted performers, amber spotlights, a blurred backdrop, and a cheering crowd holding phones." },
  "about-who-we-are": { w: 848, h: 1264, alt: "Dimly lit event room with a stage, lectern, armchair, flowers, curtains, and rows of audience chairs." },
  "work-conference": { w: 1264, h: 848, alt: "Three presenters stand on a brightly lit stage before a blurred screen and a seated auditorium audience." },
  "work-gala": { w: 1264, h: 848, alt: "Candlelit formal dinner tables fill an ornate ballroom with chandeliers, floral centerpieces, and dark wood décor." },
  "work-launch": { w: 1264, h: 848, alt: "Draped dark object centered on a reflective floor beneath two warm lights forming a V." },
  "work-church": { w: 1264, h: 848, alt: "Warmly lit auditorium with a seated audience facing performers and musicians on a central stage." },
  "work-concert": { w: 1264, h: 848, alt: "Long-haired vocalist performs with a band before a cheering crowd under smoky amber stage lights." },
  "work-venue": { w: 1264, h: 848, alt: "Empty industrial event hall with rows of chairs, a central aisle, and a blank projection screen on a lit stage." },
  "creative-story": { w: 848, h: 1264, alt: "Open blank notebook, abstract art cards, quill in an ink bottle, and color swatches on a dark wooden desk." },
  "creative-branding": { w: 1024, h: 1024, alt: "Geometric beige and gray wall art illuminated in a dark, modern interior." },
  "creative-graphic": { w: 1024, h: 1024, alt: "Dark abstract mood board with textured panels, fabric swatches, geometric lines, and a binder clip on a charcoal surface." },
  "creative-digital": { w: 1024, h: 1024, alt: "Dark studio workstation with dual abstract-display monitors, keyboard, lamp, mug, and graphics tablet on a wooden desk." },
  "creative-promo": { w: 1024, h: 1024, alt: "Overhead arrangement of black stationery, lanyards, RSVP card, tote bag, pen, envelope, and eucalyptus on dark fabric." },
  "creative-photography": { w: 1024, h: 1024, alt: "Photographer in dark clothing aims a professional camera with a telephoto lens in a dim, warmly lit venue." },
  "creative-videography": { w: 1024, h: 1024, alt: "Camera operator films a blurred performer on a warmly lit, hazy stage." },
  "venue-studio": { w: 848, h: 1264, alt: "Empty industrial hall with exposed steel ceiling beams, warm hanging lights, and a worn concrete floor." },
  "venue-hosting": { w: 848, h: 1264, alt: "Empty warmly lit auditorium with rows of chairs, a polished wood aisle, and a curtained stage." },
  "av-led-walls": { w: 1264, h: 848, alt: "Dark arena with a blurred warm-toned screen, stage equipment, reflective floor, and seated audience silhouettes." },
  "av-lighting-rigs": { w: 1264, h: 848, alt: "Suspended concert lighting trusses cast warm beams through haze in a dark venue." },
  "av-sound-systems": { w: 1264, h: 848, alt: "Suspended black line-array speakers hang from chains and truss rigging inside a dark empty concert venue." },
  "av-camera-crews": { w: 1264, h: 848, alt: "Two camera operators film a brightly lit, smoky concert stage with professional cameras on tripods." },
  "av-streaming": { w: 1264, h: 848, alt: "Dim broadcast control room with video monitors, production console, headphones, and coiled cables." },
  "av-stage-production": { w: 1264, h: 848, alt: "Concert stage under construction in a dark arena with rigged speakers, lighting trusses, equipment, cables, and crew members." },
  "av-scope": { w: 848, h: 1264, alt: "Sound engineer operating an illuminated mixing console in front of a blurred concert audience." },
  "logo": { widths: [96, 192], w: 1024, h: 1024, alt: "Solin Studio Events logo" },
};

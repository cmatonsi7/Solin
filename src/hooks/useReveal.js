import { useEffect, useRef } from "react";

let observer;
const getObserver = () => {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); }
    }),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  return observer;
};

/** Fade/slide an element in once as it enters the viewport. */
export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    if (!io) { el.classList.add("is-visible"); return; }
    io.observe(el);
    return () => io.unobserve(el);
  }, []);
  return ref;
}

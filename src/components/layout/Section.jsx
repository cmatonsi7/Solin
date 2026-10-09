/**
 * Full-width band with a colour scheme + container.
 * scheme: 1 (ink) | 2 (charcoal) | 3 (cream)   offset: clears the fixed navbar
 */
export default function Section({ scheme = 1, offset = false, pageHead = false, id, className = "", container = true, children, ...rest }) {
  const cls = ["section", `scheme-${scheme}`, offset && "section--offset", pageHead && "section--page-head", className].filter(Boolean).join(" ");
  return (
    <section id={id} className={cls} {...rest}>
      {container ? <div className="container">{children}</div> : children}
    </section>
  );
}

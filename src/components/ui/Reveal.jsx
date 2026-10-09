import useReveal from "../../hooks/useReveal.js";

/** Scroll-reveal wrapper. `delay` in ms staggers siblings. */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

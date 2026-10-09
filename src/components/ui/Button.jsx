import { Link } from "react-router-dom";

/** variant: primary | secondary | link   size: default | small */
export default function Button({ to, href, variant = "primary", size, children, className = "", ...rest }) {
  const cls = ["button", variant !== "primary" && `button--${variant}`, size === "small" && "button--small", className]
    .filter(Boolean).join(" ");
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button type="button" className={cls} {...rest}>{children}</button>;
}

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../ui/Button.jsx";
import Img from "../ui/Img.jsx";
import { nav, cta } from "../../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--solid" : ""} ${open ? "navbar--open" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="Solin Studio Events — home">
          <Img name="logo" sizes="32px" eager alt="" />
        </Link>
        <button type="button" className="navbar__toggle" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
          <span className="burger" aria-hidden="true"><span /><span /><span /></span>
        </button>
        <nav id="site-menu" className="navbar__menu" aria-label="Primary">
          <ul className="navbar__links">
            {nav.map((l) => (
              <li key={l.to}><NavLink to={l.to} className="nav-link">{l.label}</NavLink></li>
            ))}
          </ul>
          <Button to={cta.to} size="small">{cta.label}</Button>
        </nav>
      </div>
    </header>
  );
}

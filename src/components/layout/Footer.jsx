import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
import Img from "../ui/Img.jsx";
import SocialIcon from "../ui/SocialIcon.jsx";
import { footer, cta } from "../../data/site.js";

export default function Footer() {
  return (
    <footer className="footer scheme-1">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" aria-label="Solin Studio Events — home"><Img name="logo" sizes="40px" alt="" /></Link>
            <div className="footer__social">
              {footer.social.map((s) =>
                s.href ? (
                  <a key={s.id} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"><SocialIcon name={s.id} /></a>
                ) : (
                  <span key={s.id} role="img" aria-label={s.label}><SocialIcon name={s.id} /></span>
                )
              )}
            </div>
            <div className="footer__place">
              <SocialIcon name="pin" />
              <p>{footer.location.label}<br />{footer.location.value}</p>
            </div>
          </div>
          <div className="footer__menu">
            {footer.columns.map((c) => (
              <div key={c.title} className="footer__col">
                <p className="footer__col-title">{c.title}</p>
                <ul className="footer__links">
                  {c.links.map((l) => <li key={l.to}><Link to={l.to} className="footer-link">{l.label}</Link></li>)}
                </ul>
              </div>
            ))}
            <div className="footer__action">
              <p className="footer__col-title">{footer.action.title}</p>
              <p className="text-small">{footer.action.text}</p>
              <Button to={cta.to} size="small">{cta.label}</Button>
            </div>
          </div>
        </div>
        <div className="footer__bottom">© {new Date().getFullYear()} {footer.legal}</div>
      </div>
    </footer>
  );
}

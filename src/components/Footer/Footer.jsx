import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import { profile } from "../../content/profile.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__section">
        <span className="footer__label">Created by</span>
        <p className="footer__text">{profile.name}</p>
      </section>

      <section className="footer__section footer__section--center">
        <span className="footer__label">Portfolio</span>
        <p className="footer__text">
          Thoughtfully designed. Carefully engineered.
        </p>
      </section>

      <section className="footer__section footer__section--right">
        <SocialLinks variant="icons" />
      </section>
    </footer>
  );
}

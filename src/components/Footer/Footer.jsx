import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        <a
          className="footer__social-link"
          href={`mailto:${profile.email}`}
          aria-label="Send email to Miguel Barrera"
        >
          <MdOutlineEmail />
        </a>

        <a
          className="footer__social-link"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Miguel Barrera's GitHub profile"
        >
          <FaGithub />
        </a>

        <a
          className="footer__social-link"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Miguel Barrera's LinkedIn profile"
        >
          <FaLinkedin />
        </a>
      </section>
    </footer>
  );
}

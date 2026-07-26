import SocialLinks from "../../components/SocialLinks/SocialLinks.jsx";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact__title">Contact</h1>
      <p className="contact__intro">
        If the way I approach software development aligns with what you're
        looking for, I'd be glad to start a conversation.
      </p>

      <div className="contact__grid">
        <section className="contact__block">
          <h2 className="contact__block-title">Currently available for:</h2>
          <ul className="contact__list">
            <li>Junior Full Stack opportunities</li>
            <li>Frontend development</li>
            <li>Backend development</li>
            <li>Freelance collaborations</li>
          </ul>
        </section>

        <section className="contact__block">
          <h2 className="contact__block-title">Working Style</h2>
          <ul className="contact__list">
            <li>Documentation-first</li>
            <li>Clear communication</li>
            <li>Collaborative</li>
            <li>Continuous learning</li>
            <li>Remote</li>
          </ul>
        </section>
      </div>

      <section className="contact__block">
        <h2 className="contact__block-title">Get in touch</h2>
        <SocialLinks variant="list" />
      </section>

      <section className="contact__closing">
        <p>
          Every project starts with a conversation. I'd be glad to hear about
          yours.
        </p>
      </section>
    </section>
  );
}

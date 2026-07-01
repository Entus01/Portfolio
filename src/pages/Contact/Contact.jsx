import SocialLinks from "../../components/SocialLinks/SocialLinks.jsx";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        If the way I approach software development aligns with what you're
        looking for, I'd be glad to start a conversation.
      </p>

      <section>
        <h2>Currently available for:</h2>
        <ul>
          <li>Junior Full Stack opportunities</li>
          <li>Frontend development</li>
          <li>Backend development</li>
          <li>Freelance collaborations</li>
        </ul>
      </section>

      <section>
        <h2>Working Style</h2>
        <ul>
          <li>Documentation-first</li>
          <li>Clear communication</li>
          <li>Collaborative</li>
          <li>Continuous learning</li>
          <li>Remote</li>
        </ul>
      </section>

      <section>
        <h2>Get in touch</h2>
        <SocialLinks variant="list" />
      </section>

      <section className="contact__closing">
        <p>
          Every project starts with a conversation. I'd be glad to hear about
          yours.
        </p>
      </section>
    </>
  );
}

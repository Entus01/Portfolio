import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <h1 className="home__title">FULL STACK WEB DEVELOPER</h1>
      <h2 className="home__subtitle">
        Building software with purpose, clarity, and long-term thinking.
      </h2>
      <p className="home__description">
        I build software by combining thoughtful design, clear architecture, and
        engineering practices that keep solutions maintainable, scalable, and
        ready to evolve. Every project reflects a structured approach focused on
        solving real problems with clarity, consistency, and purpose.
      </p>
      <Link to="/projects" className="button button--primary">
        View my work
      </Link>
    </section>
  );
}

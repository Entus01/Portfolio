import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>FULL STACK WEB DEVELOPER</h1>
      <h2>
        Building software with purpose, clarity, and long-term thinking.
      </h2>
      <p>
        I build software by combining thoughtful design, clear architecture, and
        engineering practices that keep solutions maintainable, scalable, and
        ready to evolve. Every project reflects a structured approach focused on
        solving real problems with clarity, consistency, and purpose.
      </p>
      <Link to="/projects">View my work</Link>
    </>
  );
}

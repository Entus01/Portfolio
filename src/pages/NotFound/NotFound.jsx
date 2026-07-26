import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__message">The content requested was not found</p>
      <Link to="/" className="button button--primary" viewTransition>
        Go Home
      </Link>
    </section>
  );
}

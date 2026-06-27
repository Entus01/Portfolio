import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>The content requested was not found</p>
      <Link to="/">Go Home</Link>
    </>
  );
}

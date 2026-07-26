import { NavLink } from "react-router-dom";
import { pages } from "../../content/pages.js";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {pages.map((page) => (
        <NavLink
          key={page.id}
          to={page.path}
          end={page.path === "/"}
          className="navbar__link"
        >
          {page.label}
        </NavLink>
      ))}
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import { pages } from "../../content/pages.js";

export default function Navbar() {
  return (
    <nav>
      {pages.map((page) => (
        <NavLink key={page.id} to={page.path} end={page.path === "/"}>
          {page.label}
        </NavLink>
      ))}
    </nav>
  );
}

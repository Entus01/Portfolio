import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Skills from "../pages/Skills/Skills.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import Contact from "../pages/Contact/Contact.jsx";

export const pages = [
  { id: "home", label: "Home", path: "/", component: Home, index: true },
  { id: "about", label: "About", path: "/about", component: About },
  { id: "skills", label: "Skills", path: "/skills", component: Skills },
  { id: "projects", label: "Projects", path: "/projects", component: Projects },
  { id: "contact", label: "Contact", path: "/contact", component: Contact },
];

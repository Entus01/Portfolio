import { skills } from "../../content/skills.js";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Skills</h2>

      <p className="skills__intro">
        The technologies and engineering practices that support the way I
        design, build, and continuously improve software.
      </p>

      <ul className="skills__grid">
        {skills.map((skill) => (
          <li key={skill.id} className="skills__item">
            <img
              src={skill.image}
              alt={`${skill.name} image`}
              className="skills__icon"
            />

            <span className="skills__name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

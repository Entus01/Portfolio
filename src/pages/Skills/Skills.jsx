import { skills } from "../../content/skills.js";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="skills-title">Skills</h2>

      <p>
        The technologies and engineering practices that support the way I
        design, build, and continuously improve software.
      </p>

      <ul className="skills-grid">
        {skills.map((skill) => (
          <li key={skill.id} className="skill-item">
            <img src={skill.image} alt={`${skill.name} image`} />

            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

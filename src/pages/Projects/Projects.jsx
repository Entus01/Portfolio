import { projects } from "../../content/projects.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="projects__title">Projects</h1>
      <p className="projects__intro">
        Good software is rarely the result of writing code alone. <br /> Every
        project begins with understanding the problem, organizing the work, and
        making decisions that keep the solution maintainable as it grows. <br />
        The projects below reflect that process as much as the final result.
      </p>

      <ul className="projects__list">
        {projects.map((project) => (
          <li key={project.id} className="projects__card">
            <div className="projects__card-header">
              <h2 className="projects__card-title">{project.name}</h2>
              <span className="projects__status">{project.status}</span>
            </div>

            <div className="projects__card-block">
              <h3 className="projects__card-subtitle">Project Overview</h3>
              <p>{project.overview}</p>
            </div>

            <div className="projects__card-block">
              <h3 className="projects__card-subtitle">
                Engineering Highlights
              </h3>
              <ul className="projects__tags">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="projects__tag">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="projects__card-block">
              <h3 className="projects__card-subtitle">What I learned</h3>
              <p>{project.learned}</p>
            </div>

            <div className="projects__card-links">
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="button button--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}

              {project.links.github.map((repo) => (
                <a
                  key={repo}
                  href={repo}
                  className="button button--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

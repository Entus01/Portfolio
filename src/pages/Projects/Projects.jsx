import { projects } from "../../content/projects.js";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>
        Good software is rarely the result of writing code alone. <br /> Every
        project begins with understanding the problem, organizing the work, and
        making decisions that keep the solution maintainable as it grows. <br />
        The projects below reflect that process as much as the final result.
      </p>

      <section>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.status}</p>

            <div>
              <h3>Proyect Overview</h3>
              <p>{project.overview}</p>
            </div>

            <div>
              <h3>Engineering Highlights</h3>
              <p>{project.highlights}</p>
            </div>

            <div>
              <h3>Technologies</h3>
              <p>{project.technologies}</p>
            </div>

            <div>
              <h3>What I learned</h3>
              <p>{project.learned}</p>
            </div>

            <div>
              <h3>Links</h3>
              <p>
                {project.links.live} & {project.links.github}
              </p>
            </div>
          </li>
        ))}
      </section>
    </>
  );
}

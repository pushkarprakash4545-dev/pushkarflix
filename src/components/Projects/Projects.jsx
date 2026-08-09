import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-container">

        <div className="section-heading">

          <span>MY PROJECTS</span>

          <h2>Featured Projects</h2>

          <p>
            Explore a collection of projects that showcase my expertise in
            React, JavaScript, Python, and modern web development. Each
            project reflects my passion for building responsive,
            user-friendly, and high-performance applications while
            continuously improving my technical skills.
          </p>

        </div>

        {projects.map((section) => (

          <div
            className="project-row"
            key={section.category}
          >

            <h2 className="row-title">
              {section.category}
            </h2>

            <div className="project-grid">

              {section.items.map((project) => (

                <div
                  className="project-card"
                  key={project.id}
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-overlay">

                    <span className="tech-tag">
                      {project.tech}
                    </span>

                    <h3>{project.title}</h3>

                    <button>
                      View Project
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
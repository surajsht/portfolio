import { ProjectsData } from "./ProjectsData";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="wrapper">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
        </div>

        <div className="section-body">
          <div className="projects-detail">
            {ProjectsData.map((item) => {
              let { id, title, desc, img, githubLink, demoLink } = item;

              return (
                <div className="project-item" key={id}>
                  <img src={img} alt="project-image" className="project-img" />

                  <div className="project-item-detail">
                    <h2 className="project-title"> {title} </h2>
                    <p className="project-desc"> {desc} </p>

                    <div className="project-btn-group">
                      <a
                        href={demoLink}
                        className="project-btn btn-primary"
                        target="_blank"
                      >
                        Preview
                      </a>
                      <a
                        href={githubLink}
                        className="project-btn btn-secondary"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

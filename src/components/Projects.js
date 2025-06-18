import React from "react";
import { FaGithub } from "react-icons/fa";
import { logEvent } from "../analytics";
import LatestRepos from "./LatestRepos";

function Projects({ projects, projects2 }) {
  // Sort the projects to display the live ones first
  const sortedProjects = [...projects].sort((a, b) => b.isLive - a.isLive);
  // For analytics
  const handleProjectClick = (title) => {
    logEvent("Projects", "Click", title);
  };
  return (
    <div className="work_container" id="project">
      <h1>Projects</h1>
      <hr className="line" />
      <h2>Express | Postgresql | React | Redux | WordPress</h2>

      <div className="projects_container">
        {sortedProjects.map((project) => (
          <div key={project.id} className="project">
            <div className="image">
              <a
                href={project.isLive ? project.url : project.git}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleProjectClick(project.title)}
                className="proj-img-flex"
              >
                <img src={project.imageSrc} alt={project.title} />
                {project.isLive && (
                  <p className="is-live">This site is live</p>
                )}
              </a>
            </div>
            <div className="title">
              {project.title}
              <a href={project.git} aria-label={`View ${project.title} on GitHub`} target="_blank" rel="noopener noreferrer">
                {" "}
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2>Written Tech Article</h2>

      <div className="projects_container">
        {projects2.map((project) => (
          <div key={project.id} className="project">
            <div className="image">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleProjectClick(project.title)}
              >
                <img src={project.imageSrc} alt={project.title}></img>
              </a>
            </div>
            <div className="title">{project.title}</div>
          </div>
        ))}
      </div>

      <h2 className="">Latest GitHub Repositories</h2>
      <div className="projects_container">
        <LatestRepos />
      </div>
      
    </div>
  );
}

export default Projects;

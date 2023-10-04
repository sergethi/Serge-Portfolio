import React from 'react'
import {FaGithub} from "react-icons/fa";



function Projects({projects, projects2}) {
    // Sort the projects to display the live ones first
    projects.sort((a, b) => b.isLive - a.isLive);
    return (
        <div className="work_container" id="project">
             <h1>Projects</h1>
             <hr className="line"/>
             <h2>Express | Postgresql | React | Redux | WordPress</h2>

            <div className="projects_container">
                {projects.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={ project.isLive ? project.url : project.git} target="_blank" rel="noopener noreferrer">
                            <img src={project.imageSrc} alt={project.title} />
                            {project.isLive && <p1 className="is-live">This app is live</p1>}
                        </a>
                    </div>
                    <div className="title">
                        {project.title}
                        <a href={project.git} target="_blank" rel="noopener noreferrer"> <FaGithub></FaGithub></a> 
                       
                    </div>
                </div>
                ))}
            </div>

            <h2>Written Tech Article</h2>

            <div className="projects_container">
                {projects2.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img src={project.imageSrc} alt={project.title}></img>
                        </a>
                    </div>
                    <div className="title">
                        {project.title}
                    </div>
                </div>
                ))}
            </div>

            
        </div>
    )
}

export default Projects

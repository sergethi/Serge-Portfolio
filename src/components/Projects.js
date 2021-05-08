import React from 'react'
import {FaGithub} from "react-icons/fa";



function Projects({projects, projects2}) {
    return (
        <div className="work_container" id="project">
             <h1>Projects</h1>
             <hr className="line"/>
             <h2>Express | Postgresql | React | Redux</h2>

            <div className="projects_container">
                {projects.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={project.url} target="_blank">
                            <img src={project.imageSrc} alt={project.title}></img>
                        </a>
                    </div>
                    <div className="title">
                        {project.title}
                        <a href={project.git} target="_blank"> <FaGithub></FaGithub></a> 
                       
                    </div>
                </div>
                ))}
            </div>

            <h2>WordPress</h2>

            <div className="projects_container">
                {projects2.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={project.url} target="_blank">
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

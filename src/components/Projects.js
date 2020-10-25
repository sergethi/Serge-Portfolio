import React from 'react'


function Projects({projects}) {
    return (
        <div className="work_container" id="project">
             <h1>Projects</h1>
             <hr className="line"/>
            <div className="projects_container">
                {projects.map((project)=>(
                <div key={project.id} className="project">
                    <div className="image">
                        <a href={project.url}>
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

import React from 'react'

import '../components/projects/projects.css'
import Card from '../components/projects/Card'

import data from '../js/data'
//import ProjectCard from '../components/project-card/ProjectCard'

export default function Projects() {
    return (
        <>
            <div className='project-container'>
                {!false && data.projects.map(project =>
                    <div className='project-box'>
                        <Card
                            key={project.id}
                            img={<img className='project-img' src={project.img.src} alt={project.img.alt} />}
                            labels={project.labels}
                            projectName={project.projectName}
                            website={project.website}
                            github={project.github}
                            description={project.description}
                            status={project.status}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

import React from 'react'
import data from '../js/data'
import { MdExpandMore as IconMore } from 'react-icons/md';

const height = 100;

export default function MyProjects(props) {
    return (
        <section className="section my-projects">
            <header>
                <h2 className='section-title'>
                    {props.languages.projects.title[props.currentLanguage]}
                </h2>
            </header>

            <main>
                <div className="page">
                    <section>
                        {props.languages.projects.description.map((paragraph, index) =>
                            <p key={index + "projects"} className='description'>
                                {paragraph[props.currentLanguage]}
                            </p>
                        )}
                    </section>

                    {!false && <section>
                        <div className="project-container">
                            {data.projects.map((tech, index) =>
                                <a
                                    className="project-link"
                                    key={index + tech.name}
                                    href={tech.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className='box'>
                                        <img
                                            className="tech-icon"
                                            src={tech.img.indexSrc}
                                            alt={tech.name}
                                        />
                                        <span className='box-name'>
                                            {tech.box_name}
                                        </span>
                                    </div>
                                </a>
                            )}
                            <p>
                                <span className='btn function-btn'>
                                    {props.languages.projects.more_projects_btn[props.currentLanguage]}
                                    <IconMore className='icon right' />
                                </span>
                            </p>
                        </div>
                    </section>}
                </div>
            </main>
        </section>
    )
}

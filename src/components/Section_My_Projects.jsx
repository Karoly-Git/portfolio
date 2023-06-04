import React from 'react'
import data from '../js/data'

export default function MyProjects(props) {
    return (
        <section className="section my-projects">
            <header>
                <h2>
                    {props.languages.projects.title[props.currentLanguage]}
                </h2>
            </header>

            <main>
                <div className="page">
                    <section>
                        {props.languages.projects.description.map(paragraph =>
                            <p className='description'>
                                {paragraph[props.currentLanguage]}
                            </p>
                        )}
                    </section>

                    {!false && <section>
                        <div className="grid-container">
                            {data.projects.map((tech, index) =>
                                <div key={index + tech.name} className="grid-item">
                                    <a
                                        href={tech.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="tech-icon"
                                            src={tech.img.indexSrc}
                                            alt={tech.name}
                                        />
                                    </a>
                                </div>
                            )}
                        </div>
                    </section>}
                </div>
            </main>
        </section>
    )
}

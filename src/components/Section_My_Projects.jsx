import React from 'react'
import data from '../js/data'

export default function MyProjects(props) {
    return (
        <section className="section my-projects">
            <header className="section-header">
                <h2>
                    {props.languages.projects.title[props.currentLanguage]}
                </h2>
            </header>

            <main className="section-main">
                <div className="page">
                    <section className="box">
                        <div className="box-main">
                            {props.languages.projects.description.map(paragraph =>
                                <p className='description'>
                                    {paragraph[props.currentLanguage]}
                                </p>
                            )}
                        </div>
                    </section>

                    <section className="box">
                        <div className="box-main">
                            <div className="grid-container">
                                {data.projects.map((tech, index) =>
                                    <div key={index + tech.name} className="grid-item">
                                        <a href={tech.website} target="_blank" rel="noopener noreferrer">
                                            <img
                                                className="tech-icon"
                                                src={tech.img.indexSrc}
                                                alt={tech.name}
                                            />
                                        </a>
                                    </div>
                                )}
                            </div >
                        </div>
                    </section>
                </div>
            </main>
        </section>
    )
}

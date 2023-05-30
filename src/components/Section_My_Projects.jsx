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
                        <header className="box-header"></header>
                        <div className="box-main">
                            <p className='description'>
                                {props.languages.projects.p1[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.projects.p2[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.projects.p3[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.projects.p4[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.projects.p5_a[props.currentLanguage]}
                                <span className='link' onClick={props.showForm}>
                                    {props.languages.projects.p5_link[props.currentLanguage]}
                                </span>
                                {props.languages.projects.p5_b[props.currentLanguage]}
                            </p>
                        </div>
                        <footer className="box-footer"></footer>
                    </section>
                    <section className="box">
                        <header className="box-header"></header>
                        <div className="box-main">
                            <div className="grid-container">
                                {data.projects.map((tech, index) =>
                                    <div key={index + tech.name} className="grid-item">
                                        <a href={tech.website} target="_blank">
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
                        <footer className="box-footer"></footer>
                    </section>
                </div>
            </main>
            <footer className="section-footer"></footer>
        </section>
    )
}

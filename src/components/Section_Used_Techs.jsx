import React from 'react'
import { technologies } from '../js/data'

export default function UsedTechs(props) {
    return (
        <section className="section used-techs reverse-section">
            <header className="section-header">
                <h2>
                    {props.languages.used_techs.title[props.currentLanguage]}
                </h2>
            </header>

            <main className="section-main">
                <div className="page">
                    <section className="box">
                        <div className="box-main">
                            {props.languages.used_techs.description.map(paragraph =>
                                <p className='description'>
                                    {paragraph[props.currentLanguage]}
                                </p>
                            )}
                        </div>
                    </section>

                    <section className="box">
                        <div className="box-main">
                            <div className="grid-container">
                                {technologies.map((tech, index) =>
                                    <div key={index + tech.name} className="grid-item">
                                        <img className="tech-icon" src={tech.svg} alt={tech.name} />
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

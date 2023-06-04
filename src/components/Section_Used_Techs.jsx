import React from 'react'
import { technologies } from '../js/data'

export default function UsedTechs(props) {
    return (
        <section className="section section-reverse used-techs">
            <header>
                <h2>
                    {props.languages.used_techs.title[props.currentLanguage]}
                </h2>
            </header>

            <main>
                <div className="page">
                    <section>
                        {props.languages.used_techs.description.map(paragraph =>
                            <p>
                                {paragraph[props.currentLanguage]}
                            </p>
                        )}
                    </section>

                    <section>
                        <div className="tech-container">
                            {technologies.map((tech, index) =>
                                <div key={index + tech.name} className="tech-item">
                                    <img
                                        className="tech-icon"
                                        src={tech.svg}
                                        alt={tech.name} />
                                </div>
                            )}
                        </div >
                    </section>
                </div>
            </main>
        </section>
    )
}

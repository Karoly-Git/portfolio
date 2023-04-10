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
                        <header className="box-header"></header>
                        <div className="box-main">
                            <p className='description'>
                                {props.languages.used_techs.p1[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.used_techs.p2[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.used_techs.p3[props.currentLanguage]}
                            </p>
                        </div>
                        <footer className="box-footer"></footer>
                    </section>
                    <section className="box">
                        <header className="box-header"></header>
                        <div className="box-main">
                            <div className="grid-container">
                                {technologies.map((tech, index) =>
                                    <div key={index + tech.name} className="grid-item">
                                        <img className="tech-icon" src={tech.svg} alt={tech.name} />
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

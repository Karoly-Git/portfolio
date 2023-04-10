import React from 'react'

import { technologies } from '../../../js/data'

export default function TechsGrid() {
    return (
        <div className="grid-container">
            {technologies.map((tech, index) =>
                <div key={index + tech.name} className="grid-item">
                    <img className="tech-icon" src={tech.svg} alt={tech.name} />
                </div>
            )}
        </div >
    )
}

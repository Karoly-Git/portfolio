import React from 'react'

import data from '../../../../js/data'

export default function ProjectsGrid() {
    return (
        <div className="grid-container">
            {
                data.projects.map((pro, index) =>
                    <div key={pro.id} className="grid-item">
                        <img className='project-img' src={pro.img.src} alt={pro.img.alt} />
                    </div>
                )
            }
        </div >
    )
}

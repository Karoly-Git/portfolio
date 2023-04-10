import React from 'react'
import Box1MainContent from './Box1MainContent'
import ProjectsGrid from './ProjectsGrid'

export default function RightBox() {
    return (
        <div className='box'>
            <div className="box-head"></div>
            <div className="box-main">
                <ProjectsGrid />
            </div>
            <div className="box-foot"></div>
        </div>
    )
}

import React from 'react'
import Box1MainContent from './Box1MainContent'
import ProjectsGrid from './ProjectsGrid'

export default function LeftBox() {
    return (
        <div className='box'>
            <div className="box-head"></div>
            <div className="box-main">
                <Box1MainContent />
            </div>
            <div className="box-foot"></div>
        </div>
    )
}

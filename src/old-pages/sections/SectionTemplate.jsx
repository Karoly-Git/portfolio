import React from 'react'

export default function SectionTemplate(props) {
    return (
        <section
            className={`section ${props.sectionClassName}`}>

            <div className="head-container">
                {props.headContainerContent}
            </div>

            <div className="main-container">
                {props.mainContainerContent}
            </div>

            <div className="foot-container">
                {props.footContainerContent}
            </div>

        </section>
    )
}


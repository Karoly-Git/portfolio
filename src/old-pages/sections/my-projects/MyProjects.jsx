import React from 'react'
import SectionTemplate from '../SectionTemplate'
import HeadContainerContent from './HeadContainerContent'
import MainContainerContent from './MainContainerContent'
import FootContainerContent from './FootContainerContent'

export default function MyProjects() {
    return (
        <SectionTemplate
            sectionClassName={"my-projects"}
            headContainerContent={<HeadContainerContent />}
            mainContainerContent={<MainContainerContent />}
            footContainerContent={<FootContainerContent />}
        />
    )
}

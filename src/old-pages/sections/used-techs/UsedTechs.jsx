import React from 'react'

import SectionTemplate from '../SectionTemplate'

import HeadContainerContent from './HeadContainerContent'
import Box1MainContent from './Box1MainContent'
import Box2MainContent from './Box2MainContent'

export default function UsedTechs() {
    return (
        <SectionTemplate
            sectionClassName={"used-techs"}

            headContainerContent={<HeadContainerContent />}

            box_1_HeadContent={true}
            box_1_MainContent={<Box1MainContent />}
            box_1_FootContent={true}

            box_2_HeadContent={true}
            box_2_MainContent={<Box2MainContent />}
            box_2_FootContent={true}

            footContainerContent={null}
        />
    )
}

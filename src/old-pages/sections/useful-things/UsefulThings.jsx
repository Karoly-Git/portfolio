import React from 'react'

import ShowCaseTemplate from '../ShowCaseTemplate'
import Content from './Content'

export default function UsefulThings() {
    return (
        <ShowCaseTemplate
            sectionClassName={"interesting-things"}
            title={<h2>Things I find interesting or motivating</h2>}
            reverse={false}
            content={<Content />}
        />
    )
}


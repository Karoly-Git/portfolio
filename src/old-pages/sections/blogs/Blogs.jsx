import React from 'react'

import ShowCaseTemplate from '../ShowCaseTemplate'
import Content from './Content'

export default function Blogs() {
    return (
        <ShowCaseTemplate
            sectionClassName={"blogs"}
            title={<h2>Blogs</h2>}
            reverse={false}
            content={<Content />}
        />
    )
}

import React from 'react'

import ShowCaseTemplate from '../ShowCaseTemplate'
import Content from './Content'

export default function YouTubeVideos() {
    return (
        <ShowCaseTemplate
            sectionClassName={"youtube-videos"}
            title={<h2>My YouTube videos</h2>}
            reverse={false}
            content={<Content />}
        />
    )
}

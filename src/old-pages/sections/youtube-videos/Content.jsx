import React from 'react'

import youTube_02 from '../../../img/youtube-js-02.png'
import youTube_03 from '../../../img/youtube-css-01.png'
import youTube_04 from '../../../img/youtube-react-01.png'

export default function Content() {
    return (
        <div className="showcase-content">
            <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <img src={youTube_02} alt="youTube_02" />
            <img src={youTube_03} alt="youTube_03" />
            <img src={youTube_04} alt="youTube_04" />
        </div>
    )
}


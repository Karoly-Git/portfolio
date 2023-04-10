import { React, useState } from 'react'
import MoreBtn from './Btn_More'

export default function YouTubeVideos(props) {
    const [newIconDirection, setNewIconDirection] = useState('down')
    const [isShowCaseOpen, setIsShowCaseOpen] = useState(false)

    function handleClick() {
        setIsShowCaseOpen(!isShowCaseOpen);
        setNewIconDirection(newIconDirection === 'down' ? 'up' : 'down')
    }

    return (
        <div className={`showcase interesting-things ${isShowCaseOpen ? 'open' : ''}`}  >
            <header className="front-box reverse">
                <MoreBtn
                    iconDirection="down"
                    handleClick={handleClick}
                    newIconDirection={newIconDirection}
                />
                <h2>
                    {props.languages.youtube_videos.title[props.currentLanguage]}
                </h2>
            </header>
            <footer className="content">
                <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </footer>
        </div >
    )
}

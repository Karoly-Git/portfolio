import { React, useState } from 'react'
import MoreBtn from './Btn_More'
import { BsInfoCircle as InfoIcon } from 'react-icons/bs';

export default function YouTubeVideos(props) {
    const [newIconDirection, setNewIconDirection] = useState('down')
    const [isShowCaseOpen, setIsShowCaseOpen] = useState(false)

    function handleClick() {
        setIsShowCaseOpen(!isShowCaseOpen);
        setNewIconDirection(newIconDirection === 'down' ? 'up' : 'down')
    }

    return (
        <section className="showcase my-youtube-videos"  >
            <header className="front-box">
                <h2>
                    {props.languages.youtube_videos.title[props.currentLanguage]}
                </h2>
                <MoreBtn
                    iconDirection="down"
                    handleClick={handleClick}
                    newIconDirection={newIconDirection}
                />
            </header>
            <main className={`content ${isShowCaseOpen ? 'open' : ''}`}>
                {false && <InfoIcon className='icon' title="Videos' language is Hungarian" />}
                <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/z_8kjPVnDPo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </main>
        </section >
    )
}

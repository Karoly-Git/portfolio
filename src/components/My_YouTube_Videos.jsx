import { React, useState } from 'react'
import MoreBtn from './Btn_More'
import { BsInfoCircle as InfoIcon } from 'react-icons/bs';
import { showcases } from '../js/showcases'

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
                {showcases.youtube.map((item, index) =>
                    <a
                        className="item"
                        key={item.id}
                        href={item.link}
                        target="_blank"
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                        />
                        <h5>{item.title}</h5>
                        <h6>{item.sec_title}</h6>
                    </a>
                )}
            </main>
        </section >
    )
}

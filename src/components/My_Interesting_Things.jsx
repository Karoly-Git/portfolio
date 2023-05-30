import { React, useState } from 'react'
import MoreBtn from './Btn_More'

export default function InterestingThings(props) {
    const [newIconDirection, setNewIconDirection] = useState('down')
    const [isShowCaseOpen, setIsShowCaseOpen] = useState(false)

    function handleClick() {
        setIsShowCaseOpen(!isShowCaseOpen);
        setNewIconDirection(newIconDirection === 'down' ? 'up' : 'down')
    }

    return (
        <div className={`showcase my-interesting-things ${isShowCaseOpen ? 'open' : ''}`}  >
            <header className="front-box reverse-front-box">
                <MoreBtn
                    iconDirection="down"
                    handleClick={handleClick}
                    newIconDirection={newIconDirection}
                />
                <h2>
                    {props.languages.interesting_things.title[props.currentLanguage]}
                </h2>
            </header>
            <footer className="content">
                <iframe src="https://www.youtube.com/embed/XiQkeWOFwmk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/UXHoWNfjJYM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/p3EEIwEIlMs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/EjiFEawYn88" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </footer>
        </div >
    )
}

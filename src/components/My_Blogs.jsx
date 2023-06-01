import { React, useState } from 'react'
import MoreBtn from './Btn_More'

export default function Blogs(props) {
    const [newIconDirection, setNewIconDirection] = useState('down')
    const [isShowCaseOpen, setIsShowCaseOpen] = useState(false)

    function handleClick() {
        setIsShowCaseOpen(!isShowCaseOpen);
        setNewIconDirection(newIconDirection === 'down' ? 'up' : 'down')
    }

    return (
        <div className={`showcase my-blogs ${isShowCaseOpen ? 'open' : ''}`}  >
            <header className="front-box">
                <MoreBtn
                    iconDirection="down"
                    handleClick={handleClick}
                    newIconDirection={newIconDirection}
                />
                <h2>
                    {props.languages.blogs.title[props.currentLanguage]}
                </h2>
            </header>
            <footer className="content">
                <iframe src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </footer>
        </div >
    )
}



import { React, useState } from 'react'
import MoreBtn from '../BtnMore';

export default function ShowCaseTemplate(props) {
    const [iconDirection, setIconDirection] = useState('down');
    const [isShowCaseOpen, setIsShowCaseOpen] = useState(false)

    function handleClick() {
        setIsShowCaseOpen(!isShowCaseOpen);
        setIconDirection(iconDirection === 'up' ? 'down' : 'up')
    }

    return (
        <div className={`showcase ${props.sectionClassName} ${isShowCaseOpen ? 'open' : ''}`}  >
            <div className={`front-box ${props.reverse ? 'reverse' : ''}`}>
                <MoreBtn
                    pointingTo="down"
                    handleClick={handleClick}
                    newDirection={iconDirection}
                />
                {props.title}
            </div>
            {props.content}
        </div >
    )
}

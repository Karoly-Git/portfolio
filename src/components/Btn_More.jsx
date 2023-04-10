import React from 'react'
import { MdExpandMore as IconMore } from 'react-icons/md';

export default function MoreBtn(props) {
    return (
        <div className={`open-btn ${props.size}`}
            onClick={props.handleClick}>
            <IconMore className={`icon ${props.iconDirection} ${props.newIconDirection}`} />
        </div>
    )
}



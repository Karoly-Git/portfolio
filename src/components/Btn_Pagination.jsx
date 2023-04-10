import React from 'react'
import { RiNumber1 as IconNum1 } from 'react-icons/ri'
import { RiNumber2 as IconNum2 } from 'react-icons/ri'


export default function PageBtn(props) {
    const pages = [
        <IconNum1 className='icon down' />,
        <IconNum2 className='icon down' />,
    ]

    return (
        <div
            className={`open-btn pagin-btn ${props.size} ${props.isActive ? "active-pagin-btn" : ""}`}
            onClick={props.handleClick}>
            {pages[props.page - 1]}
        </div>
    )
}



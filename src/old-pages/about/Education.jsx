import React from 'react'

export default function Education(props) {
    return (
        <li>
            <h3>{props.eduTitle}</h3>
            <h4>{props.degree}</h4>
            <h4>{props.year}</h4>
            <h4>{props.school}</h4>
            <h5 className='location'>{props.location}</h5>
        </li>
    )
}

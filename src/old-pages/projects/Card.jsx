import { React, useState } from 'react'

import { BiDotsVertical as Dots } from 'react-icons/bi'
import { IoMdClose as CloseIcon } from 'react-icons/io'

export default function Card(props) {
    const [isBackDown, setIsBackDown] = useState(true)
    const [top, setTop] = useState('0px')

    const handleClick = () => {
        console.log(isBackDown)
        console.log('clicked')
        setTop(isBackDown ? '-300px' : '0px');
        setIsBackDown(!isBackDown);
        console.log(isBackDown)
    }
    return (
        <>
            <div className="front">
                <div className="img-box">
                    {props.img}
                </div>

                <div className='technology-box'>
                    {props.labels.map(technology => technology)}
                </div>

                <div className='project-name-box' onClick={handleClick}>
                    <h2>{props.projectName}</h2>
                    <Dots className='dots' />
                </div>

                <div className='goto-box'>
                    <a className='goto' href={props.website} target="_blank" rel="noopener noreferrer">Website</a>
                    <a className='goto' href={props.github} target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div >

            <div className='back' style={{ top: top }}>
                <div className='project-name-box' onClick={handleClick}>
                    <h2>{props.projectName}</h2>
                    <CloseIcon className='dots' />
                </div>

                <h4>{props.status}</h4>
                <p>
                    {props.description[0]}
                </p>
                <p>
                    {props.description[1]}
                </p>
            </div >
        </>
    )
}

import React from 'react'
import './bottom-nav.css'

import { BsTelephone as Phone } from 'react-icons/bs'
import { BsWhatsapp as Whatsapp } from 'react-icons/bs'
import { SlLocationPin as Location } from 'react-icons/sl'

import GetInTouch from '../GetInTouch'

export default function BottomNav(props) {
    return (
        <nav className='bottom-nav'>
            {true && < GetInTouch showForm={props.showForm} />}
        </nav>
    )
}

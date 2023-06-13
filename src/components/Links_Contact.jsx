import React from 'react'

import { BsTelephone as Phone } from 'react-icons/bs'
import { BsWhatsapp as Whatsapp } from 'react-icons/bs'
import { FiSend as Send } from 'react-icons/fi'
import { SlLocationPin as Location } from 'react-icons/sl'

export default function LinksContact(props) {
    return (
        <nav>
            <ul className='links contact-links'>
                <li>
                    <a
                        rel="noopener noreferrer"
                        href="tel:+447421411763">
                        <Phone className="icon contact-icon phone-icon" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wa.me/+447421411763">
                        <Whatsapp className="icon contact-icon whatsapp-icon" />
                    </a>
                </li>
                <li className='email-item'>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:karoly@webdevme.co.uk">
                        <Send className="icon contact-icon send-icon" />
                    </a>
                </li>
                <li style={{ display: "none" }}>
                    <span onClick={props.showForm}>
                        <Send className="icon contact-icon send-icon" />
                    </span>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/place/London+SW18/@51.4501753,-0.207399,14z/data=!3m1!4b1!4m6!3m5!1s0x487605861d01c8f5:0xb8370811d531a19e!8m2!3d51.4465501!4d-0.193461!16s%2Fg%2F11bw3fx92b">
                        <Location className="icon contact-icon location-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

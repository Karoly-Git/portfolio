import React from 'react'
import ServerBox from './Maintenance_Server_Box';
import logo from '../img/logo-to-github.png'
import { AiOutlinePhone as Phone } from 'react-icons/ai';
import { HiOutlineMail as Email } from 'react-icons/hi';
import { RiWhatsappLine as Whatsapp } from 'react-icons/ri';

export default function ComingSoon() {
    return (
        <div className='maintenance'>
            <ServerBox />
            <div className='container top-container'>
                <div className="img-box">
                    <img className='logo' src={logo} alt="logo" />
                    <iframe
                        title='tool-giphy-unique'
                        src="https://giphy.com/embed/h8lH6itZv19SEGhf5A"
                        className="tool-giphy giphy-embed"
                        allowFullScreen
                        SameSite="None"
                    >
                    </iframe>
                </div>
                <div className="text-box">
                    <h2>Hi there,</h2>
                    <p>
                        Just wanted to let you know that this site is currently being worked on. I'm in the process of developing it.
                    </p>
                    <p>
                        I apologize for any inconvenience caused, please feel free to come back later when everything is up and running.                    </p>
                    <div className="contact-box">
                        <a href="tel:+447421411763">
                            <Phone className='icon phone-icon' />
                            {false && <i className="icon fa-solid fa-phone"></i>}
                        </a>
                        <a href="mailto:karoly@webdevme.co.uk">
                            <Email className='icon email-icon' />
                            {false && <i className="icon fa-solid fa-envelope"></i>}
                        </a>
                        <a href="https://wa.me/+447421411763">
                            <Whatsapp className='icon' />
                            {false && <i className="icon fa-brands fa-whatsapp"></i>}
                        </a>
                    </div>
                </div>
            </div>
            <ServerBox />
        </div>
    )
}


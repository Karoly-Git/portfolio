import React from 'react'
import ServerBox from './ServerBox';
import logo from '../../../img/logo-to-github.png'
import { AiOutlinePhone as Phone } from 'react-icons/ai';
import { HiOutlineMail as Email } from 'react-icons/hi';
import { RiWhatsappLine as Whatsapp } from 'react-icons/ri';

export default function Maintenance() {
    return (
        <div className='maintenance'>
            <ServerBox />
            <div className='container top-container'>
                <div className="img-box">
                    <img className='logo' src={logo} alt="logo" />
                    <iframe
                        src="https://giphy.com/embed/h8lH6itZv19SEGhf5A"
                        className="tool-giphy giphy-embed"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="text-box">
                    <h2>Hi there,</h2>
                    <p>
                        I have to do some maintenance work on my site.
                        <br></br>
                        <br></br>
                        Please come back later.
                    </p>
                    <div className="contact-box">
                        <a href="tel:+447421411763">
                            <Phone className='icon phone-icon' />
                            {false && <i className="icon fa-solid fa-phone"></i>}
                        </a>
                        <a href="mailto:">
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
            <div className='container date-container'>
                <h3>
                    Work started:
                    &nbsp;
                    {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' })}
                </h3>
                <h3>
                    Duration:
                    &nbsp;
                    approx. 7 days
                </h3>
            </div>
            <ServerBox />
        </div>
    )
}


import React from 'react'

import ContactLinks from './Links_Contact'
import SocialLinks from './Links_Social'

export default function GetInTouch(props) {
    return (
        <section className={`get-in-touch ${props.isDarkMode ? 'dark-mode' : ''}`}>
            <div className='box text-box'>
                <section className='top-box'>
                    <h2 className='my-name'>
                        {props.languages.my_name[props.currentLanguage]}
                    </h2>
                    <h3 className='my-title'>
                        {props.languages.my_title[props.currentLanguage]}
                    </h3>
                    <h2 className='section-title'>
                        {props.languages.get_in_touch.title[props.currentLanguage]}
                    </h2>
                    <ContactLinks showForm={props.showForm} />
                </section>
                <div className='bottom-box'>
                    <ul className='contact-list'>
                        <li className='email-item'>
                            <h2>Email:</h2>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:karoly@webdevme.co.uk">karoly@webdevme.co.uk</a>
                        </li>
                        <li className='location-item'>
                            <h2>Location:</h2>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.google.com/maps/place/London+SW18/@51.4501753,-0.207399,14z/data=!3m1!4b1!4m6!3m5!1s0x487605861d01c8f5:0xb8370811d531a19e!8m2!3d51.4465501!4d-0.193461!16s%2Fg%2F11bw3fx92b">
                                Wandsworth, London
                                <br></br>
                                SW18
                            </a>
                        </li>
                        <li className='find-me-item'>
                            <h2>
                                {props.languages.get_in_touch.find_me_on[props.currentLanguage]}
                            </h2>
                            <SocialLinks />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='box img-box'></div>
        </section>
    )
}

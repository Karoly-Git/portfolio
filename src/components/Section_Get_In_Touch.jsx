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
                    <p className='section-title'>
                        {props.languages.get_in_touch.title[props.currentLanguage]}
                    </p>
                    <ContactLinks showForm={props.showForm} />
                </section>
                <div className='bottom-box'>
                    <ul className='contact-list'>
                        <li>
                            <h2>Email:</h2>
                            <a className='my-email' href="mailto:karoly@webdevme.co.uk">karoly@webdevme.co.uk</a>
                        </li>
                        <li>
                            <h2>
                                {props.languages.get_in_touch.location[props.currentLanguage]}
                            </h2>
                            <div>
                                Wandswort, London,
                                <br></br>
                                SW18
                            </div>
                        </li>
                        <li>
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

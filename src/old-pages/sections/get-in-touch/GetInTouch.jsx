import React from 'react'

import LinksContact from '../../LinksContact'
import LinksSocial from '../../LinksSocial'

export default function GetInTouch(props) {
    return (
        <section className='get-in-touch'>
            <div className='box text-box'>
                <section className='top-box'>
                    <h2 className='my-name'>Karoly Hornyak</h2>
                    <h3 className='my-title'>Web Developer</h3>
                    <p>Get in touch</p>
                    <LinksContact showForm={props.showForm} />
                </section>
                <div className='bottom-box'>
                    <ul className='contact-list'>
                        <li>
                            <h2>Email:</h2>
                            <a className='my-email' href="mailto:karoly@webdevme.co.uk">karoly@webdevme.co.uk</a>
                        </li>
                        <li>
                            <h2>Location:</h2>
                            <div>
                                Wandswort, London,
                                <br></br>
                                SW18
                            </div>
                        </li>
                        <li>
                            <h2>Find me on:</h2>
                            <LinksSocial />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='box img-box'></div>
        </section>
    )
}

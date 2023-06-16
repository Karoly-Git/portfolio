import React, { useState } from 'react'
import ContactLinks from './Links_Contact'
import SocialLinks from './Links_Social'
import { TfiCheckBox as CheckBoxIcon } from 'react-icons/tfi'
import helloImage from '../img/me1.png'

export default function HelloEveryone(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [stripHeight, setStripHight] = useState(0);
    const [stripMarginTop, setStriMarginTop] = useState(0);

    const setSize = () => {
        let height = document.querySelector(".boxB:nth-child(2)").clientHeight;
        let marginTop = document.querySelector(".boxB:first-child").clientHeight;
        setStripHight(height);
        setStriMarginTop(marginTop);
    };

    window.addEventListener('load', () => {
        setSize();
        setIsLoaded(true);
    });

    window.addEventListener('resize', () => {
        setSize();
    });

    return (
        <section className="section hello-everyone">
            <div className="containerA">
                {!isLoaded && <div className="boxA">
                    <iframe src="https://giphy.com/embed/YpqWbjNDq8y4DVu4BO" width="100%" height="478" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </div>}
                {isLoaded && <div className="boxA">
                    <div
                        className="boxA-item side-boxA"
                        style={{ height: `${stripHeight}px`, marginTop: `${stripMarginTop}px` }}
                    >
                    </div>
                    <div
                        className="boxA-item profile"
                        style={{ marginTop: `${stripMarginTop - ((200 - stripHeight) / 2)}px` }}
                    >
                        <img src={helloImage} alt="Karoly Hornyak Web Developer" />
                    </div>
                    <div
                        className="boxA-item side-boxA"
                        style={{ height: `${stripHeight}px`, marginTop: `${stripMarginTop}px` }}
                    >
                    </div>
                </div>}
                <div className="boxC">
                    <ul>
                        <li>
                            <CheckBoxIcon />&nbsp; Front-End
                        </li>
                        <li>
                            <CheckBoxIcon />&nbsp; Back-End
                        </li>
                    </ul>

                </div>
            </div>
            <div className="containerB">
                <div className="boxB">
                    <h3 className='section-title'>
                        {props.languages.hello_everyone.title[props.currentLanguage]}
                    </h3>
                </div>
                <div className="boxB">
                    <h3>
                        {props.languages.my_name[props.currentLanguage]}
                    </h3>
                    <h1 className='my-title'>
                        {props.languages.my_title[props.currentLanguage]}
                    </h1>
                    <SocialLinks />
                </div>
                <div className="boxB">
                    <ContactLinks showForm={props.showForm} />
                </div>
            </div>
        </section>
    )
}

import React from 'react'

import ContactLinks from './Links_Contact'
import SocialLinks from './Links_Social'

import { TfiCheckBox as CheckBoxIcon } from 'react-icons/tfi'
import helloImage from '../img/me1.png'

export default function HelloEveryone(props) {
    return (
        <section className="section hello-everyone">
            <header className="section-header">
                <h3>
                    {props.languages.my_name[props.currentLanguage]}
                </h3>
                <h3>
                    {props.languages.my_title[props.currentLanguage]}
                </h3>
                <SocialLinks />
            </header>
            <main className="section-main">
                <div className="page">
                    <section className="box">
                        <div className="box-main">
                            <div className="photobox">
                                <img src={helloImage} alt="" />
                            </div>
                            <ul>
                                <li>
                                    <CheckBoxIcon />&nbsp; Front-End
                                </li>
                                <li>
                                    <CheckBoxIcon />&nbsp; Back-End
                                </li>
                            </ul>
                        </div>
                        <footer className="box-footer">
                            <div></div>
                        </footer>
                    </section>
                    <section className="box">
                        <header className="box-header">
                            <h3>
                                {props.languages.hello_everyone.title[props.currentLanguage]}
                            </h3>
                        </header>
                        <div className="box-main">
                        </div>
                        <footer className="box-footer">
                            <div>
                                <ContactLinks showForm={props.showForm} />
                            </div>
                        </footer>
                    </section>
                </div>
            </main>
            <footer className="section-footer">
                <div></div>
            </footer>
        </section>
    )
}

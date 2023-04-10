import React from 'react'

import LinksContact from './Links_Contact'
import LinksSocial from './Links_Social'

import { TfiCheckBox as CheckBoxIcon } from 'react-icons/tfi'
import helloImage from '../img/me3.png'

export default function HelloEveryone(props) {
    return (
        <section className='section hello-everyone'>
            <div className="head-container">
                <h2></h2>
            </div>
            <div className="main-container">
                <div className="box-container">
                    <div className='box'>
                        <div className="box-head"></div>
                        <div className="box-main">
                            <div className="avatar-box">
                                <div className="circle">
                                    <img className='hello-img' src={helloImage} alt="" />
                                </div>
                                <ul className="technologies">
                                    <li>
                                        <CheckBoxIcon />
                                        &nbsp;
                                        Front-End
                                    </li>
                                    <li>
                                        <CheckBoxIcon />
                                        &nbsp;
                                        Back-End
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-foot">
                            <div className='bottom-box'>
                                <div className="info-box">
                                    <span className='info-1'></span>
                                    <span className='info-2'></span>
                                </div>

                                <div className="info-box">
                                    <span className='info-1'></span>
                                    <span className='info-2'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='box-head'>
                            <h2>Hello Everyone</h2>
                        </div>
                        <div className="box-main img-container">
                            <div className='name-box'>
                                <div>
                                    <h2>Karoly Hornyak</h2>
                                    <h3><i>Web Developer</i></h3>
                                    <div>
                                        <div className="info-box">
                                            <LinksSocial />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-foot">
                            <div className='bottom-box'>
                                <div className="info-box">
                                    <LinksContact showForm={props.showForm} />
                                </div>
                                <div className="info-box">
                                    <span className='info-1'></span>
                                    <span className='info-2'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

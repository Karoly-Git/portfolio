import { React, useState } from 'react'

//import myCV from '../files/myCV'
import { HiDownload as IconDownload } from 'react-icons/hi';
import { MdExpandMore as IconMore } from 'react-icons/md';

import { technologies } from '../js/data'
import MoreBtn from './Btn_More';
import PageBtn from './Btn_Pagination';

import myCV from '../files/myCV.pdf'

export default function AboutMe(props) {

    const [is2ndPage, setIs2ndPage] = useState(false)

    function show2ndPage() {
        setIs2ndPage(true);
    }
    function show1stPage() {
        setIs2ndPage(false);
    }

    return (
        <section className="section about-me">
            <header className="section-header">
                <h2>
                    {props.languages.about_me.title[props.currentLanguage]}
                </h2>
                <div className="pagination">
                    <MoreBtn
                        size="small"
                        iconDirection="left"
                        handleClick={show1stPage}
                    />
                    <ul className="sub-pages">
                        <li>
                            <PageBtn
                                page={1}
                                handleClick={show1stPage}
                                isActive={!is2ndPage}
                                size="smaller"
                            />
                        </li>
                        <li>
                            <PageBtn
                                page={2}
                                handleClick={show2ndPage}
                                isActive={is2ndPage}
                                size="smaller"
                            />
                        </li>
                    </ul>
                    <MoreBtn
                        size="small"
                        iconDirection="right"
                        handleClick={show2ndPage}
                    />
                </div>
            </header>
            <main className="section-main">
                <div className={`page page-1 ${is2ndPage ? 'moved-to-left' : ''}`}>
                    <section className="box">
                        <header className="box-header"></header>
                        <div className="box-main">
                            <p className='description'>
                                {props.languages.about_me.page1.p1[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.about_me.page1.p2[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.about_me.page1.p3[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                <span className='btn function-btn' onClick={show2ndPage}>
                                    {props.languages.about_me.read_more_btn[props.currentLanguage]}
                                    <IconMore className='icon right' />
                                </span>
                            </p>
                            <p className='description'>
                                <a className='btn function-btn' href={myCV} rel="noopener noreferrer" download='Karoly_Hornyak_CV.pdf'>
                                    {props.languages.about_me.download_cv_btn[props.currentLanguage]}
                                    <IconDownload className='icon' />
                                </a>
                            </p>
                        </div>
                        <footer className="box-footer"></footer>
                    </section>
                    <section className="box">
                        <header className="box-header"></header>
                        <div className="box-main">
                            <div className="img-container">
                                <div className="img-box bg-a">
                                    <div>
                                        {technologies.map((tech, index) =>
                                            <img key={tech.name + index} src={tech.svg} alt={tech.name} />
                                        )}
                                    </div>
                                </div>
                                <div className="img-box">
                                    <div className="sub-img-box bg-b">
                                        <div>Client side</div>
                                    </div>
                                    <div className="sub-img-box bg-c">
                                        <div>Server side</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="box-footer"></footer>
                    </section>
                </div>
                <div className={`page page-2 ${is2ndPage ? 'moved-to-left' : ''}`}>
                    <section className="box">
                        <header className="box-header"></header>
                        <div className="box-main">
                            <p className='description'>
                                {props.languages.about_me.page2.p1[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.about_me.page2.p2[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.about_me.page2.p3[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                {props.languages.about_me.page2.p4_a[props.currentLanguage]}
                                <a
                                    className='link'
                                    href='https://www.youtube.com/channel/UC_NS9-02WvPjZpvKqkJf4vQ'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <span>YouTuber</span>
                                </a>,
                                {props.languages.about_me.page2.p4_b[props.currentLanguage]}
                            </p>
                            <p className='description'>
                                <span className='btn function-btn' onClick={show1stPage}>
                                    <IconMore className='icon left' />
                                    {props.languages.about_me.go_back_btn[props.currentLanguage]}
                                </span>
                            </p>
                            <p className='description'>
                                <a className='btn function-btn' href={myCV} rel="noopener noreferrer" download='Karoly_Hornyak_CV.pdf'>
                                    {props.languages.about_me.download_cv_btn[props.currentLanguage]}
                                    <IconDownload className='icon down' />
                                </a>
                            </p>
                        </div>
                        <footer className="box-footer"></footer>
                    </section>
                    <section className="box">
                        <header className="box-header"></header>
                        <div className="box-main">
                            <div className="img-container">
                                <div className="img-box bg-d"></div>
                            </div>
                        </div>
                        <footer className="box-footer"></footer>
                    </section>
                </div>
            </main>
            <footer className="section-footer"></footer>
        </section>
    )
}

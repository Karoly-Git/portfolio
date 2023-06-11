import { React, useState } from 'react'
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
            <header>
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

            <main>
                <div className={`page page-1 ${is2ndPage ? 'moved-to-left' : ''}`}>
                    <section>
                        {props.languages.about_me.description.page1.map(paragraph =>
                            <p className='description'>
                                {paragraph[props.currentLanguage]}
                            </p>
                        )}
                        <p>
                            <span className='btn function-btn' onClick={show2ndPage}>
                                {props.languages.about_me.read_more_btn[props.currentLanguage]}
                                <IconMore className='icon right' />
                            </span>
                        </p>
                        <p>
                            <a
                                className='btn function-btn'
                                href={myCV}
                                rel="noopener noreferrer"
                                download='Karoly_Hornyak_CV.pdf'
                            >
                                {props.languages.about_me.download_cv_btn[props.currentLanguage]}
                                <IconDownload className='icon' />
                            </a>
                        </p>
                    </section>

                    <section>
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
                    </section>
                </div>

                <div className={`page page-2 ${is2ndPage ? 'moved-to-left' : ''}`}>
                    <section>
                        {props.languages.about_me.description.page2.map(paragraph =>
                            <p className='description'>
                                {paragraph[props.currentLanguage]}
                            </p>
                        )}
                        <p>
                            <span className='btn function-btn' onClick={show1stPage}>
                                <IconMore className='icon left' />
                                {props.languages.about_me.go_back_btn[props.currentLanguage]}
                            </span>
                        </p>
                        <p>
                            <a
                                className='btn function-btn'
                                href={myCV}
                                rel="noopener noreferrer"
                                download='Karoly_Hornyak_CV.pdf'
                            >
                                {props.languages.about_me.download_cv_btn[props.currentLanguage]}
                                <IconDownload className='icon down' />
                            </a>
                        </p>
                    </section>

                    <section>
                        <div className="img-container">
                            <div className="img-box bg-d"></div>
                        </div>
                    </section>
                </div>
            </main>
        </section>
    )
}

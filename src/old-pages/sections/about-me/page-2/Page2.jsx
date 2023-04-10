import React from 'react'
import myCV from '../../../../files/Karoly_Hornyak_CV.pdf'
import { technologies } from '../../../../js/data';
import { HiDownload as IconDownload } from 'react-icons/hi';

export default function Page2(props) {
    return (
        <div className={`box-container ${props.is2ndPageShowed ? "show-2nd-page" : ""}`}>

            <div className='box'>

                <div className="box-head"></div>
                <div className="box-main">
                    <p className='description'>
                        I am a Web Developer with {new Date().getFullYear() - 2020} years of experience in building websites.
                    </p>
                    <p className='description'>
                        Beyond using <span className='str'>HTML</span>, <span className='str'>CSS</span>, and <span className='str'>JavaScript</span>, I am proficient in
                        applying <span className='str'>React</span> and
                        setting up a server with <span className='str'>Node.js</span> to create dynamic web applications.
                    </p>
                    <p className='description'>
                        In addition, I uses <span className='str'>Sass</span> to develop scalable and maintainable stylesheets.
                        While I don't use it frequently, I have knowledge of <span className='str'>Python</span> and <span className='str'>Django</span> for building backend functionality.
                    </p>
                    <p className='description'>
                        Whether it's connecting to <span className='str'>MongoDB</span> or using <span className='str'>AWS S3</span> to
                        serve static assets, I have the technical expertise to get
                        the job done.
                    </p>
                    <p className='description'>
                        As a&nbsp;
                        <a
                            href='https://www.youtube.com/channel/UC_NS9-02WvPjZpvKqkJf4vQ'
                            target="_blank"
                            rel="noopener noreferrer">
                            <span className='str'>YouTuber</span>
                        </a>,&nbsp;
                        I enjoy sharing my knowledge and
                        helping others in the programming community.
                    </p>
                    <p className='description'>
                        <a className='download-btn' href={myCV} rel="noopener noreferrer" download='Karoly_Hornyak_CV.pdf'>
                            Download CV
                            <IconDownload className='icon' />
                        </a>
                    </p>
                    {
                        false && <p className='description'>
                            After several years I had spent in mechanical
                            engineering and recycling sector,
                            I'm turning my hobby and passion into
                            a career, that is
                            Web Development.
                            <br></br>
                            <br></br>
                            I love programming and making web applications, I believe IT technology makes things easier and more productive.
                            I strive to create user friendly web applications and keep my code as simple as possible. It's true in web development also: "Less is more."
                            <br></br>
                            <br></br>
                            I'm familiar with ReactJS, HTML, CSS, JavaScript, NodeJS and MongoDB. Although Django and Python are less common
                            at web development, I can apply these technologies on demand.
                        </p>
                    }
                </div>

                <div className="box-foot"></div>
            </div>
            <div className='box'>
                <div className='box-head'></div>
                <div className="box-main img-container">
                    <div className="img-box img-a">
                        <div>
                            {technologies.map((tech, index) =>
                                <img key={tech.name + index} src={tech.svg} alt={tech.name} />
                            )}
                        </div>
                    </div>
                    <div className="img-box">
                        <div className="sub-img-box img-b">
                            <div>Client side</div>
                        </div>
                        <div className="sub-img-box img-c">
                            <div>Server side</div>
                        </div>
                    </div>
                </div>
                <div className="box-foot"></div>
            </div>
        </div>
    )
}

import { React, useState } from 'react'
import { Link } from 'react-router-dom'

// import logos
import edu from '../img/about/edu.png'
//import info from '../img/about/info.png'
import work from '../img/about/work.png'
import diploma from '../img/about/diploma.png'
import programming from '../img/about/programming.png'
import engineering from '../img/about/engineering.png'
import roofing from '../img/about/roofing.png'

//import './about/about.css'

// import elements
import Job from '../components/about/Job'
import Education from '../components/about/Education'

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    const [visibility, setVisibility] = useState('hidden')

    const showHidden = () => {
        if (!isOpen) {
            setIsOpen(true);
            setVisibility('displayed');
        } else {
            setIsOpen(false);
            setVisibility('hidden');
        }
    }

    /*<h2>
        <img className='about-icon' src={info} alt="info" />About me
    </h2>*/
    return (
        <div className='about'>
            <div className="info-container">
                <section className='info-section'>
                    <h2>
                        About me
                    </h2>
                    <p>
                        My name is Karoly, I'm a Frontend Web Developer.
                        After many years I've spent in engineering and recycling sector I turned my hobby and passion into a career, this is
                        how I became a Web Developer.
                    </p>
                    <p>
                        I have always been impressed by programing and web development, thus some years ago I started
                        studying programming and building websites.
                    </p>
                    <p className={visibility}>
                        I absolutely love programming, making websites and truly believe IT technology makes things easier and more productive.
                        I strive to create user friendly web applications and keep my code as simple as possible. It's true in web development also: "Less is more."
                    </p>
                    <p className={visibility}>
                        I'm familiar with ReactJS, HTML, CSS, JavaScript, NodeJS and MongoDB. Although Django and Python are less common
                        at web development, I can apply these technologies on demand.
                    </p>
                    <p className={visibility}>
                        Please have a look on my <Link title='Some of my projects' className="text-link" to={'/projects'}>
                            projects</Link> and <a title="Karoly's GitHub" className="text-link" target="_blank" rel="noopener noreferrer" href='https://github.com/Karoly-Git'>
                            github
                        </a> to see some of my references.
                    </p>
                    <span onClick={showHidden} className="read-more text-link">
                        {!isOpen && <span>More</span>}
                        {isOpen && <span>Show less</span>}
                    </span>
                </section>
            </div>

            {true && <div className='job-and-education-container'>
                <section className='job-section'>
                    <h2>
                        Work experience
                    </h2>

                    <h3 className='then-and-now present'>2023</h3>

                    <div className='job-container'>
                        <div className="column">
                            <Job year='2020 to presen' jobTitle='Web Developer' company='WebDevMe' location='London' />
                            <Job year='2015 to 2018' jobTitle='Barista' company='D & D' location='London' />
                            <Job year='2009 to 2014' jobTitle='Site Operations Manager' company='Environmental Management Ltd' location='Szeged' />
                        </div>

                        <div className="box-timeline"> </div>

                        <div className="column">
                            <Job year='2018 to present' jobTitle='Supervisor' company='Cory' location='London' />
                            <Job year='2014 to 2015' jobTitle='Head Sales Manager' company='Municipal Public Service Ltd' location='Budapest' />
                            <Job year='2003 to 2009' jobTitle='Mechanical & Project Engineer' company='Fiksz-999 Ltd & Kvaliterv Ltd' location='Szeged' />
                        </div>
                    </div>

                    <h3 className='then-and-now past'>2003</h3>
                </section>

                <section className='section-edu'>
                    <h2>
                        Education
                    </h2>
                    <ul>
                        <Education
                            eduTitle='Web Developer'
                            year='2020'
                            school='Programozás Karrier'
                            degree=''
                            location='London - Budapest'
                        />
                        <Education
                            eduTitle='Mechanical Engineer'
                            year='2000 - 2003'
                            school='University of Szeged'
                            degree='BSc'
                            location='Szeged'
                        />
                        <Education
                            eduTitle='Higher Vocational Education'
                            year='1998 - 2000'
                            school='Petzelt József Középiskola'
                            degree='ISCED 5'
                            location='Szentendre'
                        />
                        <Education
                            eduTitle='Joiner and Scaffolder'
                            year='1995 - 1998'
                            school='Építőipari és Díszítőművészeti Szakképző Iskola'
                            degree='ISCED 4'
                            location='Budapest'
                        />
                    </ul>
                </section>
            </div>}
        </div>
    )
}

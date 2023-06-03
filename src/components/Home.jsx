import React, { useState } from 'react'

import ContactForm from './Contact_Form'
import HelloEveryone from './Section_Hello_Everyone'
import Blogs from './My_Blogs'
import AboutMe from './Section_About_Me'
import YouTubeVideos from './My_YouTube_Videos'
import UsedTechs from './Section_Used_Techs'
import InterestingThings from './My_Interesting_Things'
import MyProjects from './Section_My_Projects'
import Switches from './Switches'

import ScrollToTop from 'react-scroll-to-top';
import { MdExpandMore as IconMore } from 'react-icons/md';


/*As I found programing and web development fare more interesting than mechanical engineering,
I switched to web development from mechanical engineering. This is how I become a Frontend Web Developer.
My main strength is the < strong > responsive design</strong > using < strong >
ReactJS, JavaScript, HTML, CSS
</strong > and < strong >
SASS</strong >, but I can work at the back - end with <strong>NodeJS, MongoDB, AWS
</strong> and < strong > Django</strong >, too.*/

/*
<HelloEveryone showForm={props.showForm} />
*/

export default function Home(props) {

    const [btnRight, setBtnRight] = useState(-1.75);

    window.addEventListener('scroll', () => {
        window.scrollY >= 550 ? setBtnRight(0) : setBtnRight(-1.75);
    });

    return (
        <>
            {<ContactForm
                isFormDisplayed={props.isFormDisplayed}
                showForm={props.showForm}
                hideForm={props.hideForm}
            />}
            {false && <Switches
                isDarkMode={props.isDarkMode}
                switchDarkModeOnOff={props.switchDarkModeOnOff}
                currentLanguage={props.currentLanguage}
                changeCurrentLanguage={props.changeCurrentLanguage}
            />}
            {false && <HelloEveryone
                showForm={props.showForm}
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />}
            {false && <Blogs
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />}
            {false && <AboutMe
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />}
            {false && <YouTubeVideos
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />}
            {false && <UsedTechs
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />}
            {false && <InterestingThings
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />}
            {!false && <MyProjects
                showForm={props.showForm}
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />}
            {<ScrollToTop
                smooth
                component={<IconMore className='icon' />}
                style={{ right: `${btnRight}rem` }}
            />}
        </>
    )
}




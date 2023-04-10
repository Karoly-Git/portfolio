import { React } from 'react'

import ContactForm from './Contact_Form'
import HelloEveryone from './Section_Hello_Everyone'
import Blogs from './My_Blogs'
import AboutMe from './Section_About_Me'
import YouTubeVideos from './My_YouTube_Videos'
import UsedTechs from './Section_Used_Techs'
import InterestingThings from './My_Interesting_Things'
import MyProjects from './Section_My_Projects'
import LanguageSwitch from './Language_Switch'

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
    return (
        <>
            <ContactForm
                isFormDisplayed={props.isFormDisplayed}
                showForm={props.showForm}
                hideForm={props.hideForm}
            />
            <LanguageSwitch
                currentLanguage={props.currentLanguage}
                changeCurrentLanguage={props.changeCurrentLanguage}
            />
            <HelloEveryone
                showForm={props.showForm}
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />
            <Blogs
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />
            <AboutMe
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />
            <YouTubeVideos
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />
            <UsedTechs
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />
            <InterestingThings
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />
            <MyProjects
                showForm={props.showForm}
                languages={props.languages}
                currentLanguage={props.currentLanguage}
            />
        </>
    )
}




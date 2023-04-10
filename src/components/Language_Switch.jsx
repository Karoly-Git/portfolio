import React from 'react'
import { MdNightlightRound as IconDarkMode } from 'react-icons/md';
import { BsSun as IconBrightMode } from 'react-icons/bs';
import { languages } from '../js/languages'

export default function Language_Switch(props) {

    console.log(props.currentLanguage)

    return (
        <nav className='language-switch'>
            <IconBrightMode className='icon' />
            <IconDarkMode className='icon' />
            <ul>
                {languages.languages.map((language, index) => {
                    return (
                        <li
                            key={language + index}
                            className={props.currentLanguage === language ? 'current-language' : ''}
                            onClick={() => props.changeCurrentLanguage(language)}
                        >
                            {language.toUpperCase()}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

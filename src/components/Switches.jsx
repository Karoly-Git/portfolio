import React from 'react'
import { MdNightlightRound as IconDarkMode } from 'react-icons/md';
import { BsSun as IconBrightMode } from 'react-icons/bs';
import { languages } from '../js/languages'

export default function Language_Switch(props) {
    return (
        <nav className='language-switch'>
            <IconBrightMode className='icon' onClick={() => props.switchDarkModeOnOff('off')} />
            <IconDarkMode className='icon' onClick={() => props.switchDarkModeOnOff('on')} />
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

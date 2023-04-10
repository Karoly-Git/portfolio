import React from 'react'

import { BsGithub as Github } from 'react-icons/bs'
import { BsLinkedin as Linkedin } from 'react-icons/bs'
import { BsYoutube as Youtube } from 'react-icons/bs'

export default function LinksSocial() {
    return (
        <nav>
            <ul className='links social-links'>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Karoly-Git">
                        <Github className='icon social-icon github-icon' />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/karoly-hornyak-02b913248/">
                        <Linkedin className='icon social-icon linkedin-icon' />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/channel/UC_NS9-02WvPjZpvKqkJf4vQ">
                        <Youtube className='icon social-icon youtube-icon' />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

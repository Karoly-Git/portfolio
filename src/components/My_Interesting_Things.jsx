import { React, useState } from 'react'
import MoreBtn from './Btn_More'
import { showcases } from '../js/showcases'

export default function InterestingThings(props) {
    const [newIconDirection, setNewIconDirection] = useState('down')
    const [isShowCaseOpen, setIsShowCaseOpen] = useState(false)

    function handleClick() {
        setIsShowCaseOpen(!isShowCaseOpen);
        setNewIconDirection(newIconDirection === 'down' ? 'up' : 'down')
    }

    return (
        <section className='showcase my-interesting-things'  >
            <header className="front-box">
                <h2>
                    {props.languages.interesting_things.title[props.currentLanguage]}
                </h2>
                <MoreBtn
                    iconDirection="down"
                    handleClick={handleClick}
                    newIconDirection={newIconDirection}
                />
            </header>
            <main className={`content ${isShowCaseOpen ? 'open' : ''}`}>
                {showcases.interesting.map((item, index) =>
                    <a
                        className="item"
                        key={item.id}
                        href={item.link}
                        target="_blank"
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                        />
                        <h5>{item.title}</h5>
                    </a>
                )}
            </main>
        </section>
    )
}

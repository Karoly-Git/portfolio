import { React, useState } from 'react'
import MoreBtn from '../../MoreBtn';
import PageBtn from '../../PageBtn';
import Section from '../SectionTemplate';
import Page1 from './page-1/Page1';
import Page2 from './page-2/Page2';

import HeadContainerContent from './HeadContainerContent'
//import Box1MainContent from './Box1MainContent'
//import Box2MainContent from './Box2MainContent'


export default function AboutMe() {
    const [is2ndPageShowed, setIs2ndPageShowed] = useState(false)

    const slideToLeft = () => {
        setIs2ndPageShowed(true);
    }
    const slideToRight = () => {
        setIs2ndPageShowed(false);
    }

    return (
        <>
            <Section
                sectionClassName={"my-projects"}

                headContainerContent={<HeadContainerContent />}

                box_1_HeadContent={null}
                box_1_MainContent={<>Box1MainContent</>}
                box_1_FootContent={null}

                box_2_HeadContent={null}
                box_2_MainContent={<>Box2MainContent</>}
                box_2_FootContent={null}

                footContainerContent={null}
            />
            {false && <section className={`section about-me`}>

                <div className="head-container">
                    <h2>About Me</h2>
                    <div className="pagination">
                        <MoreBtn
                            pointingTo="left"
                            handleClick={slideToRight}
                        />
                        <ul className='sub-pages'>
                            <li>
                                <PageBtn
                                    page={1}
                                    isActive={!is2ndPageShowed}
                                    handleClick={slideToRight}
                                />
                            </li>
                            <li>
                                <PageBtn
                                    page={2}
                                    isActive={is2ndPageShowed}
                                    handleClick={slideToLeft}
                                />
                            </li>
                        </ul>
                        <MoreBtn
                            pointingTo="right"
                            handleClick={slideToLeft}
                        />
                    </div>
                </div>

                <div className="main-container">
                    <Page1 is2ndPageShowed={is2ndPageShowed} />
                    <Page2 is2ndPageShowed={is2ndPageShowed} />
                </div>

                <div className="foot-container"></div>
            </section >}
        </>
    )
}

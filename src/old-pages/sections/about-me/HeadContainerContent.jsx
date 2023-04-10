import { React, useState } from 'react'
import MoreBtn from '../../MoreBtn';
import PageBtn from '../../PageBtn';


export default function HeadContainerContent() {
    const [is2ndPageShowed, setIs2ndPageShowed] = useState(false)

    const slideToLeft = () => {
        setIs2ndPageShowed(true);
    }
    const slideToRight = () => {
        setIs2ndPageShowed(false);
    }

    return (
        <>
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
        </>
    )
}

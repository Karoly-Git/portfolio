import { React, useState } from 'react'
import MoreBtn from '../../MoreBtn';
import PageBtn from '../../PageBtn';


export default function MainContainerContent(props) {
    const [is2ndPageShowed, setIs2ndPageShowed] = useState(false)

    const slideToLeft = () => {
        setIs2ndPageShowed(true);
    }
    const slideToRight = () => {
        setIs2ndPageShowed(false);
    }

    return (
        <>
            <div className="box-container">
                <div className='box box-1'>
                    <div className="box-head">
                        {props.box_1_HeadContent}
                    </div>
                    <div className="box-main">
                        {props.box_1_MainContent}
                    </div>
                    <div className="box-foot">
                        {props.box_1_FootContent}
                    </div>
                </div>

                <div className='box box-2'>
                    <div className="box-head">
                        {props.box_2_HeadContent}
                    </div>
                    <div className="box-main">
                        {props.box_2_MainContent}
                    </div>
                    <div className="box-foot">
                        {props.box_2_FootContent}
                    </div>
                </div>
            </div>
        </>
    )
}

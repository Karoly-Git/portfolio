import React from 'react'
import LeftBox from './page-1/LeftBox'
import RightBox from './page-1/RightBox'

export default function MainContainerContent() {
    return (
        <>
            <div className={`box-container`}>
                <LeftBox />
                <RightBox />
            </div>
        </>
    )
}

import React from 'react'
import { MdWorkOutline as WorkIcon } from 'react-icons/md'
import { BsBuilding as BuildingIcon } from 'react-icons/bs'
import { SlLocationPin as LocationIcon } from 'react-icons/sl'

export default function Job(props) {
    return (
        <div className='job' >
            <h3 className='year'>{props.year}</h3>

            <div className="devider"></div>

            <div className='job-info'>
                <div>
                    <WorkIcon />
                </div>
                <h4 className='job-title'>{props.jobTitle}</h4>
            </div>

            <div className='job-info'>
                <div>
                    <BuildingIcon />
                </div>
                <h4 className='company-name'>{props.company}</h4>
            </div>

            <div className='job-info'>
                <div>
                    <LocationIcon />
                </div>
                <h5 className='location-name'>{props.location}</h5>
            </div>
        </div>
    )
}
